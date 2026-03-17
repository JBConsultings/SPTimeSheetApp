import * as React from 'react';
import { useContext, useState, useEffect } from 'react';
import {
  Modal,
  IconButton,
  PrimaryButton,
  DefaultButton,
  TextField,
  Spinner,
  SpinnerSize,
} from '@fluentui/react';
import { AppContext } from '../context/AppContext';
import { ITimesheetEntry, ITeamTimesheetRow, TimesheetStatus } from '../models/ITimesheetModels';
import { getTeamEntries, approveDayEntries, rejectDayEntries } from '../services/TimesheetService';
import { formatDateLabel, currentWeekRange, formatDateShort } from '../utils/dateUtils';
import styles from './ManagerDashboard.module.scss';

// ─── Constants ────────────────────────────────────────────────────────────────
const STATUS_OPTIONS = [
  { key: 'Submitted', text: 'Submitted' },
  { key: 'Approved',  text: 'Approved' },
  { key: 'Rejected',  text: 'Rejected' },
  { key: 'All',       text: 'All Statuses' },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────
function badgeClass(status: TimesheetStatus): string {
  if (status === 'Approved')  return styles.approved;
  if (status === 'Submitted') return styles.submitted;
  if (status === 'Rejected')  return styles.rejected;
  return styles.draft;
}

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

function groupToTeamRows(entries: ITimesheetEntry[]): ITeamTimesheetRow[] {
  const map = new Map<string, ITimesheetEntry[]>();
  entries.forEach((e) => {
    const key = `${e.employeeEmail}__${e.entryDate.toISOString().split('T')[0]}`;
    if (!map.has(key)) map.set(key, []);
    map.get(key)!.push(e);
  });

  return Array.from(map.values()).map((group) => ({
    employeeEmail: group[0].employeeEmail,
    employeeName:  group[0].employeeName,
    entryDate:     group[0].entryDate,
    entries:       group,
    totalHours:    group.reduce((s, e) => s + e.hoursSpent, 0),
    status:        group[0].status,
  }));
}

// ─── SVG Icons ────────────────────────────────────────────────────────────────
const IconHome = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 1L1 7h2v7h4v-4h2v4h4V7h2L8 1z" />
  </svg>
);

const IconCheck = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
    <path d="M2 7l4 4 6-6" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconReject = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
    <path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const IconRefresh = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
    <path d="M12 7A5 5 0 112 7" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" />
    <path d="M12 3v4h-4" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconSuccess = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.3" fill="none" />
    <path d="M4.5 8l2.5 2.5 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconError = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.3" fill="none" />
    <path d="M8 4v4M8 10v1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const IconClose = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
    <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const IconUsers = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <circle cx="18" cy="18" r="7" stroke="currentColor" strokeWidth="2.5" />
    <circle cx="32" cy="18" r="7" stroke="currentColor" strokeWidth="2.5" />
    <path d="M4 40c0-7.732 6.268-14 14-14h2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M24 40c0-7.732 6.268-14 14-14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

// ─── Component ────────────────────────────────────────────────────────────────
const ManagerDashboard: React.FC = () => {
  const { currentUser, navigateHome } = useContext(AppContext);

  const { start: wStart, end: wEnd } = currentWeekRange();
  const [startDate,      setStartDate]      = useState<Date>(wStart);
  const [endDate,        setEndDate]        = useState<Date>(wEnd);
  const [statusFilter,   setStatusFilter]   = useState<string>('Submitted');
  const [employeeFilter, setEmployeeFilter] = useState<string>('');

  const [rows,           setRows]           = useState<ITeamTimesheetRow[]>([]);
  const [loading,        setLoading]        = useState(true);
  const [error,          setError]          = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Review modal state
  const [modalOpen,      setModalOpen]      = useState(false);
  const [reviewRow,      setReviewRow]      = useState<ITeamTimesheetRow | null>(null);
  const [reviewAction,   setReviewAction]   = useState<'approve' | 'reject' | 'resubmit' | null>(null);
  const [managerComment, setManagerComment] = useState('');
  const [actionLoading,  setActionLoading]  = useState(false);

  // ─── Load data ────────────────────────────────────────────────────────────
  const loadData = (): void => {
    setLoading(true);
    setError('');
    const opts = {
      employeeEmail: employeeFilter || undefined,
      status: statusFilter === 'All' ? undefined : statusFilter as TimesheetStatus,
    };

    getTeamEntries(startDate, endDate, opts)
      .then((entries) => { setRows(groupToTeamRows(entries)); setLoading(false); })
      .catch(() => { setError('Failed to load team timesheets.'); setLoading(false); });
  };

  useEffect(() => { loadData(); }, [startDate, endDate, statusFilter, employeeFilter]); // eslint-disable-line

  // ─── Modal helpers ────────────────────────────────────────────────────────
  const openModal = (row: ITeamTimesheetRow, action: 'approve' | 'reject' | 'resubmit'): void => {
    setReviewRow(row);
    setReviewAction(action);
    setManagerComment('');
    setModalOpen(true);
  };

  const closeModal = (): void => {
    if (actionLoading) return;
    setModalOpen(false);
  };

  const handleAction = async (): Promise<void> => {
    if (!reviewRow || !reviewAction) return;
    const ids = reviewRow.entries.map((e) => e.id as number);
    setActionLoading(true);
    try {
      if (reviewAction === 'approve') {
        await approveDayEntries(ids, currentUser.displayName);
        setSuccessMessage(`Approved timesheet for ${reviewRow.employeeName} on ${formatDateShort(reviewRow.entryDate)}.`);
      } else {
        await rejectDayEntries(ids, currentUser.displayName, managerComment);
        const verb = reviewAction === 'resubmit' ? 'requested re-submission for' : 'rejected';
        setSuccessMessage(`Successfully ${verb} timesheet for ${reviewRow.employeeName}.`);
      }
      setModalOpen(false);
      loadData();
    } catch {
      setError('Action failed. Please try again.');
    } finally {
      setActionLoading(false);
    }
  };

  const modalTitle =
    reviewAction === 'approve'  ? 'Approve Timesheet' :
    reviewAction === 'resubmit' ? 'Request Re-submission' :
    'Reject Timesheet';

  const confirmBtnLabel =
    reviewAction === 'approve'  ? 'Confirm Approve' :
    reviewAction === 'resubmit' ? 'Send Re-submit Request' :
    'Confirm Reject';

  const confirmDisabled =
    actionLoading || (reviewAction !== 'approve' && !managerComment.trim());

  // ─── Render ───────────────────────────────────────────────────────────────
  return (
    <div className={styles.container}>

      {/* Header */}
      <div className={styles.header}>
        <button className={styles.homeBtn} title="Home" onClick={navigateHome}>
          <IconHome />
        </button>
        <h1 className={styles.title}>Team Timesheets</h1>
      </div>

      {/* Filter bar */}
      <div className={styles.filterBar}>
        <div className={styles.filterGroup}>
          <label htmlFor="mgr-from">From</label>
          <input
            id="mgr-from"
            type="date"
            className={styles.filterInput}
            value={toDateInputValue(startDate)}
            onChange={(e) => e.target.value && setStartDate(fromDateInputValue(e.target.value))}
          />
        </div>

        <div className={styles.filterGroup}>
          <label htmlFor="mgr-to">To</label>
          <input
            id="mgr-to"
            type="date"
            className={styles.filterInput}
            value={toDateInputValue(endDate)}
            onChange={(e) => e.target.value && setEndDate(fromDateInputValue(e.target.value))}
          />
        </div>

        <div className={styles.filterGroup}>
          <label htmlFor="mgr-status">Status</label>
          <select
            id="mgr-status"
            className={styles.filterSelect}
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            {STATUS_OPTIONS.map((o) => (
              <option key={o.key} value={o.key}>{o.text}</option>
            ))}
          </select>
        </div>

        <div className={`${styles.filterGroup} ${styles.filterGroupWide}`}>
          <label htmlFor="mgr-employee">Employee Email</label>
          <input
            id="mgr-employee"
            type="text"
            className={styles.filterInput}
            value={employeeFilter}
            onChange={(e) => setEmployeeFilter(e.target.value)}
            placeholder="Filter by email…"
          />
        </div>
      </div>

      {/* Messages */}
      {successMessage && (
        <div className={`${styles.messageBar} ${styles.success}`}>
          <IconSuccess />
          <span>{successMessage}</span>
          <button className={styles.dismissBtn} onClick={() => setSuccessMessage('')}><IconClose /></button>
        </div>
      )}
      {error && (
        <div className={`${styles.messageBar} ${styles.error}`}>
          <IconError />
          <span>{error}</span>
        </div>
      )}

      {/* Content */}
      {loading ? (
        <div className={styles.loadingWrap}>
          <div className={styles.spinner} />
          <span>Loading team timesheets…</span>
        </div>
      ) : rows.length === 0 ? (
        <div className={styles.emptyState}>
          <IconUsers />
          <span className={styles.emptyTitle}>No timesheets found</span>
          <span className={styles.emptySubtitle}>Try adjusting the date range, status, or employee filter.</span>
        </div>
      ) : (
        <div className={styles.list}>
          {rows.map((row) => (
            <div key={`${row.employeeEmail}__${row.entryDate.toISOString()}`} className={styles.rowCard}>

              {/* Left: name + meta */}
              <div className={styles.rowLeft}>
                <span className={styles.rowName}>{row.employeeName}</span>
                <span className={styles.rowMeta}>
                  {formatDateLabel(row.entryDate)}
                  <span className={styles.dot} />
                  {row.entries.length} task{row.entries.length !== 1 ? 's' : ''}
                  <span className={styles.dot} />
                  {row.totalHours.toFixed(2)} hrs
                </span>
              </div>

              {/* Right: badge + actions */}
              <div className={styles.rowRight}>
                <span className={`${styles.badge} ${badgeClass(row.status)}`}>
                  {row.status}
                </span>

                {row.status === 'Submitted' && (
                  <>
                    <button
                      className={`${styles.btn} ${styles.btnApprove}`}
                      onClick={() => openModal(row, 'approve')}
                    >
                      <IconCheck /> Approve
                    </button>
                    <button
                      className={`${styles.btn} ${styles.btnReject}`}
                      onClick={() => openModal(row, 'reject')}
                    >
                      <IconReject /> Reject
                    </button>
                  </>
                )}

                {row.status === 'Approved' && (
                  <button
                    className={`${styles.btn} ${styles.btnResubmit}`}
                    onClick={() => openModal(row, 'resubmit')}
                  >
                    <IconRefresh /> Request Re-submit
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ── Fluent UI Review Modal ───────────────────────────────────────────── */}
      <Modal
        isOpen={modalOpen}
        onDismiss={closeModal}
        isBlocking={actionLoading}
        containerClassName={styles.modalContainer}
      >
        {/* Modal header */}
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>{modalTitle}</h2>
          <IconButton
            iconProps={{ iconName: 'Cancel' }}
            ariaLabel="Close"
            onClick={closeModal}
            disabled={actionLoading}
            className={styles.modalCloseBtn}
          />
        </div>

        {/* Modal body */}
        {reviewRow && (
          <div className={styles.modalBody}>

            {/* Summary */}
            <div className={styles.panelMeta}>
              <span className={styles.panelMetaName}>{reviewRow.employeeName}</span>
              <span className={styles.panelMetaDetail}>
                <span>{formatDateLabel(reviewRow.entryDate)}</span>
                <span>Total: <strong>{reviewRow.totalHours.toFixed(2)} hrs</strong></span>
              </span>
            </div>

            {/* Task breakdown table */}
            <div className={styles.panelTableWrap}>
              <table className={styles.panelTable}>
                <thead>
                  <tr>
                    <th>Project</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th className={styles.colHrs}>Hrs</th>
                  </tr>
                </thead>
                <tbody>
                  {reviewRow.entries.map((e) => (
                    <tr key={e.id}>
                      <td>{e.projectName}</td>
                      <td>{e.activityCategoryName}</td>
                      <td>{e.taskDescription}</td>
                      <td className={styles.tdCenter}>{e.hoursSpent}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Comment field — hidden for approve */}
            {reviewAction !== 'approve' && (
              <TextField
                label="Manager Comments"
                required
                multiline
                rows={4}
                value={managerComment}
                onChange={(_e, val) => setManagerComment(val || '')}
                placeholder="Provide feedback for the employee…"
                disabled={actionLoading}
              />
            )}
          </div>
        )}

        {/* Modal footer */}
        <div className={styles.modalFooter}>
          <PrimaryButton
            onClick={handleAction}
            disabled={confirmDisabled}
            className={
              reviewAction === 'approve'  ? styles.fluentBtnApprove :
              reviewAction === 'reject'   ? styles.fluentBtnReject :
              styles.fluentBtnResubmit
            }
          >
            {actionLoading
              ? <><Spinner size={SpinnerSize.small} /><span style={{ marginLeft: 6 }}>Processing…</span></>
              : confirmBtnLabel
            }
          </PrimaryButton>
          <DefaultButton
            text="Cancel"
            onClick={closeModal}
            disabled={actionLoading}
          />
        </div>
      </Modal>

    </div>
  );
};

export default ManagerDashboard;
