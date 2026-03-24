import * as React from 'react';
import { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { ITimesheetEntry, IExportFilter, TimesheetStatus } from '../models/ITimesheetModels';
import { getEntriesForExport } from '../services/TimesheetService';
import { exportToExcel, exportToPDF } from '../services/ExportService';
import { currentMonthRange, formatDateShort } from '../utils/dateUtils';
import * as strings from 'TimeSheetWebPartStrings';
import styles from './ExportPanel.module.scss';

// ─── Constants ────────────────────────────────────────────────────────────────
function getStatusOptions() {
  return [
    { key: '',          text: strings.AllStatuses },
    { key: 'Draft',     text: strings.StatusDraft },
    { key: 'Submitted', text: strings.StatusSubmitted },
    { key: 'Approved',  text: strings.StatusApproved },
    { key: 'Rejected',  text: strings.StatusRejected },
  ];
}

// ─── Helpers ─────────────────────────────────────────────────────────────────
function toDateInputValue(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function fromDateInputValue(v: string): Date {
  const [y, m, d] = v.split('-').map(Number);
  const date = new Date(y, m - 1, d);
  date.setHours(0, 0, 0, 0);
  return date;
}

function badgeClass(status: TimesheetStatus): string {
  if (status === 'Approved')  return styles.approved;
  if (status === 'Submitted') return styles.submitted;
  if (status === 'Rejected')  return styles.rejected;
  return styles.draft;
}

// ─── SVG Icons ────────────────────────────────────────────────────────────────
const IconHome = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 1L1 7h2v7h4v-4h2v4h4V7h2L8 1z" />
  </svg>
);

const IconSearch = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
    <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M9.5 9.5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const IconExcel = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="currentColor">
    <rect x="1" y="1" width="13" height="13" rx="2" fill="none" stroke="currentColor" strokeWidth="1.2" />
    <path d="M4 4l3 3.5L4 11M8 4h3M8 7.5h2.5M8 11h3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" fill="none" />
  </svg>
);

const IconPdf = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="currentColor">
    <rect x="1" y="1" width="13" height="13" rx="2" fill="none" stroke="currentColor" strokeWidth="1.2" />
    <path d="M4 4h3a2 2 0 010 4H4V4z" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" />
    <path d="M4 11v-3M8 8v3M11 4v7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
  </svg>
);

const IconClose = () => (
  <svg width="11" height="11" viewBox="0 0 11 11" fill="currentColor">
    <path d="M1 1l9 9M10 1L1 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const IconSuccess = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="currentColor">
    <circle cx="7.5" cy="7.5" r="6.5" stroke="currentColor" strokeWidth="1.3" fill="none" />
    <path d="M4 7.5l2.5 2.5 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconError = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="currentColor">
    <circle cx="7.5" cy="7.5" r="6.5" stroke="currentColor" strokeWidth="1.3" fill="none" />
    <path d="M7.5 4v4M7.5 9.5v.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
);

const IconNoData = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <rect x="6" y="8" width="36" height="32" rx="4" stroke="currentColor" strokeWidth="2.5" />
    <path d="M14 16h20M14 22h12M14 28h8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity=".5" />
    <circle cx="36" cy="36" r="9" fill="white" stroke="currentColor" strokeWidth="2.5" />
    <path d="M32 36h8M36 32v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity=".4" />
  </svg>
);

// ─── Component ────────────────────────────────────────────────────────────────
const ExportPanel: React.FC = () => {
  const { navigateHome } = useContext(AppContext);

  const { start: defaultStart, end: defaultEnd } = currentMonthRange();
  const [startDate,     setStartDate]     = useState<Date>(defaultStart);
  const [endDate,       setEndDate]       = useState<Date>(defaultEnd);
  const [employeeEmail, setEmployeeEmail] = useState('');
  const [statusFilter,  setStatusFilter]  = useState('');

  const [previewData,    setPreviewData]    = useState<ITimesheetEntry[] | null>(null);
  const [loading,        setLoading]        = useState(false);
  const [exporting,      setExporting]      = useState(false);
  const [error,          setError]          = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // ─── Helpers ────────────────────────────────────────────────────────────────
  const buildFilter = (): IExportFilter => ({
    startDate,
    endDate,
    employeeEmail: employeeEmail || undefined,
    status: statusFilter as TimesheetStatus || undefined,
  });

  // ─── Handlers ───────────────────────────────────────────────────────────────
  const handlePreview = async (): Promise<void> => {
    if (endDate < startDate) {
      setError('End date must be on or after the start date.');
      return;
    }
    setLoading(true);
    setError('');
    setSuccessMessage('');
    try {
      const filter = buildFilter();
      const entries = await getEntriesForExport(
        filter.startDate,
        filter.endDate,
        { employeeEmail: filter.employeeEmail, status: filter.status }
      );
      setPreviewData(entries);
    } catch {
      setError(strings.LoadExportFailed);
    } finally {
      setLoading(false);
    }
  };

  const handleExcelExport = async (): Promise<void> => {
    if (!previewData) return;
    setExporting(true);
    setError('');
    try {
      await exportToExcel(previewData, buildFilter());
      setSuccessMessage(strings.ExcelSuccess);
    } catch {
      setError(strings.ExcelFailed);
    } finally {
      setExporting(false);
    }
  };

  const handlePdfExport = async (): Promise<void> => {
    if (!previewData) return;
    setExporting(true);
    setError('');
    try {
      await exportToPDF(previewData, buildFilter());
      setSuccessMessage(strings.PdfSuccess);
    } catch (err) {
      console.error('PDF export error:', err);
      setError(err instanceof Error ? err.message : strings.PdfFailed);
    } finally {
      setExporting(false);
    }
  };

  const totalHours = previewData?.reduce((s, e) => s + e.hoursSpent, 0) ?? 0;

  // unique employees in preview
  const uniqueEmployees = previewData
    ? new Set(previewData.map((e) => e.employeeEmail)).size
    : 0;

  // ─── Render ─────────────────────────────────────────────────────────────────
  return (
    <div className={styles.container}>

      {/* Header */}
      <div className={styles.header}>
        <button className={styles.homeBtn} title="Home" onClick={navigateHome}>
          <IconHome />
        </button>
        <h1 className={styles.title}>{strings.ExportTitle}</h1>
      </div>

      {/* Filter card */}
      <div className={styles.filterCard}>
        <p className={styles.filterTitle}>{strings.FilterOptions}</p>

        {/* Date row */}
        <div className={styles.filterRow}>
          <div className={styles.filterGroup}>
            <label htmlFor="exp-from">{strings.From} <span style={{ color: '#da1e28' }}>*</span></label>
            <input
              id="exp-from"
              type="date"
              className={styles.filterInput}
              value={toDateInputValue(startDate)}
              onChange={(e) => { if (e.target.value) { setStartDate(fromDateInputValue(e.target.value)); setError(''); } }}
            />
          </div>
          <div className={styles.filterGroup}>
            <label htmlFor="exp-to">{strings.To} <span style={{ color: '#da1e28' }}>*</span></label>
            <input
              id="exp-to"
              type="date"
              className={styles.filterInput}
              style={endDate < startDate ? { borderColor: '#da1e28' } : {}}
              value={toDateInputValue(endDate)}
              onChange={(e) => { if (e.target.value) { setEndDate(fromDateInputValue(e.target.value)); setError(''); } }}
            />
            {endDate < startDate && (
              <span style={{ color: '#da1e28', fontSize: 12, display: 'block', marginTop: 2 }}>Must be on or after the start date</span>
            )}
          </div>
        </div>

        {/* Email + Status row */}
        <div className={styles.filterRow}>
          <div className={styles.filterGroup}>
            <label htmlFor="exp-email">
              {strings.EmployeeEmail} <span className={styles.optional}>{strings.Optional}</span>
            </label>
            <input
              id="exp-email"
              type="text"
              className={styles.filterInput}
              value={employeeEmail}
              onChange={(e) => setEmployeeEmail(e.target.value)}
              placeholder={strings.EmailPlaceholder}
            />
          </div>
          <div className={styles.filterGroup}>
            <label htmlFor="exp-status">
              {strings.Status} <span className={styles.optional}>{strings.Optional}</span>
            </label>
            <select
              id="exp-status"
              className={styles.filterSelect}
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              {getStatusOptions().map((o) => (
                <option key={o.key} value={o.key}>{o.text}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Preview button */}
        <button
          className={`${styles.btn} ${styles.btnDefault}`}
          onClick={handlePreview}
          disabled={loading}
        >
          {loading
            ? <><div className={styles.spinnerSmDark} /> {strings.LoadingData}</>
            : <><IconSearch /> {strings.PreviewData}</>
          }
        </button>
      </div>

      {/* Messages */}
      {error && (
        <div className={`${styles.messageBar} ${styles.error}`}>
          <IconError />
          <span>{error}</span>
          <button className={styles.dismissBtn} onClick={() => setError('')}><IconClose /></button>
        </div>
      )}
      {successMessage && (
        <div className={`${styles.messageBar} ${styles.success}`}>
          <IconSuccess />
          <span>{successMessage}</span>
          <button className={styles.dismissBtn} onClick={() => setSuccessMessage('')}><IconClose /></button>
        </div>
      )}

      {/* Loading state */}
      {loading && (
        <div className={styles.loadingWrap}>
          <div className={styles.spinner} />
          <span>{strings.LoadingData}</span>
        </div>
      )}

      {/* Results section */}
      {previewData !== null && !loading && (
        <div className={styles.resultsSection}>

          {/* Summary strip */}
          <div className={styles.summaryStrip}>
            <div className={styles.summaryItem}>
              <span className={styles.summaryLabel}>{strings.Records}</span>
              <span className={styles.summaryValue}>{previewData.length}</span>
            </div>
            <div className={styles.summaryItem}>
              <span className={styles.summaryLabel}>{strings.TotalHours}</span>
              <span className={styles.summaryValue}>{totalHours.toFixed(2)}</span>
            </div>
            <div className={styles.summaryItem}>
              <span className={styles.summaryLabel}>{strings.Employees}</span>
              <span className={styles.summaryValue}>{uniqueEmployees}</span>
            </div>
            <div className={styles.summaryItem}>
              <span className={styles.summaryLabel}>{strings.Period}</span>
              <span className={styles.summaryValueSm}>
                {formatDateShort(startDate)} – {formatDateShort(endDate)}
              </span>
            </div>
          </div>

          {/* Export buttons */}
          <div className={styles.exportBar}>
            <button
              className={`${styles.btn} ${styles.btnExcel}`}
              onClick={handleExcelExport}
              disabled={exporting || previewData.length === 0}
            >
              {exporting
                ? <><div className={styles.spinnerSm} /> {strings.Exporting}</>
                : <><IconExcel /> {strings.ExportExcel}</>
              }
            </button>
            <button
              className={`${styles.btn} ${styles.btnPdf}`}
              onClick={handlePdfExport}
              disabled={exporting || previewData.length === 0}
            >
              {exporting
                ? <><div className={styles.spinnerSm} /> {strings.Exporting}</>
                : <><IconPdf /> {strings.ExportPdf}</>
              }
            </button>
          </div>

          {/* Table or empty state */}
          {previewData.length === 0 ? (
            <div className={styles.emptyState}>
              <IconNoData />
              <span className={styles.emptyTitle}>{strings.NoDataFound}</span>
              <span className={styles.emptySubtitle}>{strings.NoDataHint}</span>
            </div>
          ) : (
            <div className={styles.tableCard}>
              <div className={styles.tableWrap}>
                <table className={styles.previewTable}>
                  <thead>
                    <tr>
                      <th>{strings.Employee}</th>
                      <th className={styles.colDate}>{strings.Date}</th>
                      <th>{strings.Project}</th>
                      <th>{strings.Category}</th>
                      <th>{strings.Description}</th>
                      <th className={styles.colHours}>{strings.Hours}</th>
                      <th className={styles.colStatus}>{strings.Status}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {previewData.map((e) => (
                      <tr key={e.id}>
                        <td>{e.employeeName}</td>
                        <td>{formatDateShort(e.entryDate)}</td>
                        <td>{e.projectName}</td>
                        <td>{e.activityCategoryName}</td>
                        <td>{e.taskDescription}</td>
                        <td className={styles.tdHours}>{e.hoursSpent}</td>
                        <td className={styles.tdStatus}>
                          <span className={`${styles.badge} ${badgeClass(e.status)}`}>
                            {e.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className={styles.tableFooter}>
                {previewData.length} record{previewData.length !== 1 ? 's' : ''}
              </div>
            </div>
          )}

        </div>
      )}

    </div>
  );
};

export default ExportPanel;
