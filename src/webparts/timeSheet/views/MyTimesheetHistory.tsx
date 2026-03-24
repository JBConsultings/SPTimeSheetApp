import * as React from 'react';
import { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import { ITimesheetEntry, IDailySummary, TimesheetStatus } from '../models/ITimesheetModels';
import { getEntriesForDateRange, deleteEntry } from '../services/TimesheetService';
import { formatDateLabel, currentMonthRange, formatDateShort } from '../utils/dateUtils';
import { REGULAR_HOURS_PER_DAY } from '../utils/constants';
import * as strings from 'TimeSheetWebPartStrings';
import styles from './MyTimesheetHistory.module.scss';

// ─── Constants ────────────────────────────────────────────────────────────────
function getStatusOptions() {
  return [
    { key: 'All',       text: strings.AllStatuses },
    { key: 'Draft',     text: strings.StatusDraft },
    { key: 'Submitted', text: strings.StatusSubmitted },
    { key: 'Approved',  text: strings.StatusApproved },
    { key: 'Rejected',  text: strings.StatusRejected },
  ];
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
function badgeClass(status: TimesheetStatus): string {
  if (status === 'Approved')  return styles.approved;
  if (status === 'Submitted') return styles.submitted;
  if (status === 'Rejected')  return styles.rejected;
  return styles.draft;
}

function toDateInputValue(d: Date): string {
  // Returns yyyy-mm-dd for <input type="date">
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

function groupByDate(entries: ITimesheetEntry[]): IDailySummary[] {
  const map = new Map<string, ITimesheetEntry[]>();
  entries.forEach((e) => {
    const key = e.entryDate.toISOString().split('T')[0];
    if (!map.has(key)) map.set(key, []);
    map.get(key)!.push(e);
  });

  return Array.from(map.entries())
    .sort(([a], [b]) => b.localeCompare(a))
    .map(([, dayEntries]) => ({
      date: dayEntries[0].entryDate,
      entries: dayEntries,
      totalHours: dayEntries.reduce((s, e) => s + e.hoursSpent, 0),
      status: dayEntries[0].status,
    }));
}

// ─── SVG Icons ────────────────────────────────────────────────────────────────
const IconHome = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 1L1 7h2v7h4v-4h2v4h4V7h2L8 1z" />
  </svg>
);

const IconError = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.3" fill="none" />
    <path d="M8 4v4M8 10v1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const IconCalendar: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="48" height="48" viewBox="0 0 48 48" fill="none">
    <rect x="6" y="10" width="36" height="32" rx="4" stroke="currentColor" strokeWidth="2.5" />
    <path d="M6 18h36" stroke="currentColor" strokeWidth="2.5" />
    <path d="M16 6v8M32 6v8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <rect x="13" y="24" width="6" height="5" rx="1" fill="currentColor" opacity=".4" />
    <rect x="21" y="24" width="6" height="5" rx="1" fill="currentColor" opacity=".4" />
    <rect x="29" y="24" width="6" height="5" rx="1" fill="currentColor" opacity=".4" />
  </svg>
);

const IconChevronRight = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
    <path d="M5 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconTrash = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
    <path d="M2 4h10M5 4V2h4v2M6 6v5M8 6v5M3 4l1 8h6l1-8" stroke="currentColor" strokeWidth="1.3" fill="none" strokeLinecap="round" />
  </svg>
);

// ─── Component ────────────────────────────────────────────────────────────────
const MyTimesheetHistory: React.FC = () => {
  const { currentUser, navigateTo, navigateHome } = useContext(AppContext);

  const { start: defaultStart, end: defaultEnd } = currentMonthRange();
  const [startDate, setStartDate] = useState<Date>(defaultStart);
  const [endDate, setEndDate]     = useState<Date>(defaultEnd);
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [summaries, setSummaries] = useState<IDailySummary[]>([]);
  const [loading, setLoading]     = useState(true);
  const [error, setError]         = useState('');
  const [confirmDeleteKey, setConfirmDeleteKey] = useState<string | null>(null);
  const [deleting, setDeleting]   = useState(false);

  // ─── Data fetch ─────────────────────────────────────────────────────────────
  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError('');

    getEntriesForDateRange(startDate, endDate, currentUser.email)
      .then((entries) => {
        if (cancelled) return;
        setSummaries(groupByDate(entries));
        setLoading(false);
      })
      .catch(() => {
        if (!cancelled) {
          setError(strings.LoadHistoryFailed);
          setLoading(false);
        }
      });

    return () => { cancelled = true; };
  }, [startDate, endDate, currentUser.email]);

  // ─── Delete draft entries for a day ─────────────────────────────────────────
  const handleDelete = (summary: IDailySummary, e: React.MouseEvent): void => {
    e.stopPropagation();
    const key = summary.date.toISOString();
    setDeleting(false);
    setConfirmDeleteKey(key);
  };

  const confirmDelete = async (summary: IDailySummary, e: React.MouseEvent): Promise<void> => {
    e.stopPropagation();
    setDeleting(true);
    setError('');
    try {
      await Promise.all(
        summary.entries
          .filter((en) => en.id !== undefined)
          .map((en) => deleteEntry(en.id as number))
      );
      setSummaries((prev) => prev.filter((s) => s.date.toISOString() !== summary.date.toISOString()));
    } catch {
      setError('Failed to delete entries. Please try again.');
    } finally {
      setDeleting(false);
      setConfirmDeleteKey(null);
    }
  };

  const cancelDelete = (e: React.MouseEvent): void => {
    e.stopPropagation();
    setConfirmDeleteKey(null);
  };

  // ─── Derived ────────────────────────────────────────────────────────────────
  const filtered = statusFilter === 'All'
    ? summaries
    : summaries.filter((s) => s.status === statusFilter);

  // ─── Render ─────────────────────────────────────────────────────────────────
  return (
    <div className={styles.container}>

      {/* Header */}
      <div className={styles.header}>
        <button className={styles.homeBtn} title="Home" onClick={navigateHome}>
          <IconHome />
        </button>
        <h1 className={styles.title}>{strings.HistoryTitle}</h1>
      </div>

      {/* Filter bar */}
      <div className={styles.filterBar}>
        <div className={styles.filterGroup}>
          <label htmlFor="filter-from">{strings.From}</label>
          <input
            id="filter-from"
            type="date"
            className={styles.filterInput}
            value={toDateInputValue(startDate)}
            onChange={(e) => e.target.value && setStartDate(fromDateInputValue(e.target.value))}
          />
        </div>

        <div className={styles.filterGroup}>
          <label htmlFor="filter-to">{strings.To}</label>
          <input
            id="filter-to"
            type="date"
            className={styles.filterInput}
            value={toDateInputValue(endDate)}
            onChange={(e) => e.target.value && setEndDate(fromDateInputValue(e.target.value))}
          />
        </div>

        <div className={styles.filterGroup}>
          <label htmlFor="filter-status">{strings.Status}</label>
          <select
            id="filter-status"
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

      {/* Error */}
      {error && (
        <div className={styles.errorBar}>
          <IconError />
          {error}
        </div>
      )}

      {/* Content */}
      {loading ? (
        <div className={styles.loadingWrap}>
          <div className={styles.spinner} />
          <span>{strings.LoadingHistory}</span>
        </div>
      ) : filtered.length === 0 ? (
        <div className={styles.emptyState}>
          <IconCalendar className={styles.emptyIcon} />
          <span className={styles.emptyTitle}>{strings.NoEntriesFound}</span>
          <span className={styles.emptySubtitle}>
            {strings.NoEntriesHintHistory}
          </span>
        </div>
      ) : (
        <div className={styles.list}>
          {filtered.map((summary) => {
            const key = summary.date.toISOString();
            const isPendingDelete = confirmDeleteKey === key;
            return (
              <div
                key={key}
                className={styles.summaryCard}
                onClick={() => !isPendingDelete && navigateTo('DailyForm', { selectedDate: summary.date })}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => !isPendingDelete && e.key === 'Enter' && navigateTo('DailyForm', { selectedDate: summary.date })}
              >
                <div className={styles.cardLeft}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span className={styles.cardDate}>{formatDateLabel(summary.date)}</span>
                    {summary.totalHours > REGULAR_HOURS_PER_DAY && (
                      <span className={styles.otBadge} title={`${(summary.totalHours - REGULAR_HOURS_PER_DAY).toFixed(2)} hrs overtime`}>
                        OT +{(summary.totalHours - REGULAR_HOURS_PER_DAY).toFixed(2)}h
                      </span>
                    )}
                  </div>
                  <span className={styles.cardMeta}>
                    {summary.entries.length} task{summary.entries.length !== 1 ? 's' : ''}
                    <span className={styles.dot} />
                    {summary.totalHours.toFixed(2)} hrs
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span className={`${styles.badge} ${badgeClass(summary.status)}`}>
                    {summary.status}
                  </span>

                  {summary.status === 'Draft' && !isPendingDelete && (
                    <button
                      style={{
                        background: 'none', border: '1px solid #da1e28', borderRadius: 6,
                        color: '#da1e28', cursor: 'pointer', padding: '4px 8px',
                        display: 'flex', alignItems: 'center', gap: 4, fontSize: 12,
                      }}
                      title="Delete draft"
                      onClick={(e) => handleDelete(summary, e)}
                    >
                      <IconTrash /> Delete
                    </button>
                  )}

                  {isPendingDelete && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12 }} onClick={(e) => e.stopPropagation()}>
                      <span style={{ color: '#6f6f6f' }}>Delete draft?</span>
                      <button
                        style={{
                          background: '#da1e28', border: 'none', borderRadius: 6,
                          color: '#fff', cursor: 'pointer', padding: '4px 10px', fontSize: 12,
                        }}
                        disabled={deleting}
                        onClick={(e) => { void confirmDelete(summary, e); }}
                      >
                        {deleting ? '…' : 'Yes'}
                      </button>
                      <button
                        style={{
                          background: 'none', border: '1px solid #8d8d8d', borderRadius: 6,
                          color: '#393939', cursor: 'pointer', padding: '4px 10px', fontSize: 12,
                        }}
                        disabled={deleting}
                        onClick={cancelDelete}
                      >
                        No
                      </button>
                    </div>
                  )}

                  {!isPendingDelete && <IconChevronRight />}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Footer summary */}
      {!loading && (
        <div className={styles.footer}>
          {strings.Showing} <strong>{filtered.length}</strong> {strings.Days}
          &nbsp;·&nbsp;
          {formatDateShort(startDate)} – {formatDateShort(endDate)}
        </div>
      )}

    </div>
  );
};

export default MyTimesheetHistory;
