import * as React from 'react';
import { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import { ITimesheetEntry, IDailySummary, TimesheetStatus } from '../models/ITimesheetModels';
import { getEntriesForDateRange } from '../services/TimesheetService';
import { formatDateLabel, currentMonthRange, formatDateShort } from '../utils/dateUtils';
import styles from './MyTimesheetHistory.module.scss';

// ─── Constants ────────────────────────────────────────────────────────────────
const STATUS_OPTIONS = [
  { key: 'All',       text: 'All Statuses' },
  { key: 'Draft',     text: 'Draft' },
  { key: 'Submitted', text: 'Submitted' },
  { key: 'Approved',  text: 'Approved' },
  { key: 'Rejected',  text: 'Rejected' },
];

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
          setError('Failed to load timesheet history.');
          setLoading(false);
        }
      });

    return () => { cancelled = true; };
  }, [startDate, endDate, currentUser.email]);

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
        <h1 className={styles.title}>My Timesheet History</h1>
      </div>

      {/* Filter bar */}
      <div className={styles.filterBar}>
        <div className={styles.filterGroup}>
          <label htmlFor="filter-from">From</label>
          <input
            id="filter-from"
            type="date"
            className={styles.filterInput}
            value={toDateInputValue(startDate)}
            onChange={(e) => e.target.value && setStartDate(fromDateInputValue(e.target.value))}
          />
        </div>

        <div className={styles.filterGroup}>
          <label htmlFor="filter-to">To</label>
          <input
            id="filter-to"
            type="date"
            className={styles.filterInput}
            value={toDateInputValue(endDate)}
            onChange={(e) => e.target.value && setEndDate(fromDateInputValue(e.target.value))}
          />
        </div>

        <div className={styles.filterGroup}>
          <label htmlFor="filter-status">Status</label>
          <select
            id="filter-status"
            className={styles.filterSelect}
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            {STATUS_OPTIONS.map((o) => (
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
          <span>Loading history…</span>
        </div>
      ) : filtered.length === 0 ? (
        <div className={styles.emptyState}>
          <IconCalendar className={styles.emptyIcon} />
          <span className={styles.emptyTitle}>No entries found</span>
          <span className={styles.emptySubtitle}>
            Try adjusting the date range or status filter.
          </span>
        </div>
      ) : (
        <div className={styles.list}>
          {filtered.map((summary) => (
            <div
              key={summary.date.toISOString()}
              className={styles.summaryCard}
              onClick={() => navigateTo('DailyForm', { selectedDate: summary.date })}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && navigateTo('DailyForm', { selectedDate: summary.date })}
            >
              <div className={styles.cardLeft}>
                <span className={styles.cardDate}>{formatDateLabel(summary.date)}</span>
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
                <IconChevronRight />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Footer summary */}
      {!loading && (
        <div className={styles.footer}>
          Showing <strong>{filtered.length}</strong> day{filtered.length !== 1 ? 's' : ''}
          &nbsp;·&nbsp;
          {formatDateShort(startDate)} – {formatDateShort(endDate)}
        </div>
      )}

    </div>
  );
};

export default MyTimesheetHistory;
