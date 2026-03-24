import * as React from 'react';
import { useContext, useState, useEffect, useCallback, useMemo } from 'react';
import { Modal, DefaultButton, PrimaryButton } from '@fluentui/react';
import { AppContext } from '../context/AppContext';
import {
  ITaskRow,
  ITimesheetEntry,
  TimesheetStatus,
  IProject,
  IActivityCategory,
} from '../models/ITimesheetModels';
import {
  getEntriesForDateRange,
  saveDraftEntries,
  submitDayEntries,
} from '../services/TimesheetService';
import { getActiveProjects } from '../services/ProjectService';
import { getActiveCategories } from '../services/CategoryService';
import { formatDateLabel, isFutureDate } from '../utils/dateUtils';
import { validateTaskRows } from '../utils/validationUtils';
import { fmt } from '../utils/fmt';
import * as strings from 'TimeSheetWebPartStrings';
import styles from './CalendarView.module.scss';

// ─── Row key counter ──────────────────────────────────────────────────────────
let rowCounter = 0;
function newRowKey(): string { return `cv-row-${++rowCounter}`; }
function emptyRow(): ITaskRow {
  return {
    rowKey: newRowKey(),
    projectId: 0,
    projectName: '',
    activityCategoryId: 0,
    activityCategoryName: '',
    taskDescription: '',
    hoursSpent: 0,
    isDirty: true,
  };
}

// ─── Icons ────────────────────────────────────────────────────────────────────
const IconHome = (): JSX.Element => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 1L1 7h2v7h4v-4h2v4h4V7h2L8 1z"/>
  </svg>
);
const IconLeft = (): JSX.Element => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconRight = (): JSX.Element => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconClose = (): JSX.Element => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
    <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
const IconAdd = (): JSX.Element => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
    <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

const IconTrash = (): JSX.Element => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
    <path d="M2 4h10M5 4V2h4v2M6 6v5M8 6v5M3 4l1 8h6l1-8" stroke="currentColor" strokeWidth="1.3" fill="none" strokeLinecap="round"/>
  </svg>
);
const IconCheck = (): JSX.Element => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
    <path d="M2 7l4 4 6-6" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconInfo = (): JSX.Element => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.3" fill="none"/>
    <path d="M8 7v4M8 5v.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

// ─── Helpers ──────────────────────────────────────────────────────────────────

function toDateStr(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function sameMonth(d: Date, month: Date): boolean {
  return d.getMonth() === month.getMonth() && d.getFullYear() === month.getFullYear();
}

function isToday(d: Date): boolean {
  const t = new Date();
  return d.getDate() === t.getDate() && d.getMonth() === t.getMonth() && d.getFullYear() === t.getFullYear();
}

function buildCalendarWeeks(month: Date): Date[][] {
  const year  = month.getFullYear();
  const m     = month.getMonth();
  const first = new Date(year, m, 1);
  const last  = new Date(year, m + 1, 0);

  const start = new Date(first);
  start.setDate(start.getDate() - first.getDay());

  const end = new Date(last);
  end.setDate(end.getDate() + (6 - last.getDay()));

  const weeks: Date[][] = [];
  const cur = new Date(start);
  while (cur <= end) {
    const week: Date[] = [];
    for (let i = 0; i < 7; i++) {
      week.push(new Date(cur));
      cur.setDate(cur.getDate() + 1);
    }
    weeks.push(week);
  }
  return weeks;
}

function groupByDate(entries: ITimesheetEntry[]): Map<string, ITimesheetEntry[]> {
  const map = new Map<string, ITimesheetEntry[]>();
  entries.forEach((e) => {
    const key = toDateStr(e.entryDate);
    const arr = map.get(key);
    if (arr) arr.push(e);
    else map.set(key, [e]);
  });
  return map;
}

function dominantStatus(entries: ITimesheetEntry[]): TimesheetStatus {
  const statuses = entries.map((e) => e.status);
  if (statuses.indexOf('Rejected')  !== -1) return 'Rejected';
  if (statuses.indexOf('Draft')     !== -1) return 'Draft';
  if (statuses.indexOf('Submitted') !== -1) return 'Submitted';
  return 'Approved';
}

function statusColor(s: TimesheetStatus): string {
  if (s === 'Approved')  return '#24a148';
  if (s === 'Submitted') return '#0f62fe';
  if (s === 'Rejected')  return '#da1e28';
  return '#b28600';
}
function statusBg(s: TimesheetStatus): string {
  if (s === 'Approved')  return '#defbe6';
  if (s === 'Submitted') return '#edf4ff';
  if (s === 'Rejected')  return '#fff1f1';
  return '#fdf6d8';
}

// ─── Component ────────────────────────────────────────────────────────────────
const CalendarView: React.FC = () => {
  const { currentUser, navigateHome } = useContext(AppContext);

  // Current displayed month (1st of month, midnight)
  const [currentMonth, setCurrentMonth] = useState<Date>(() => {
    const d = new Date();
    d.setDate(1);
    d.setHours(0, 0, 0, 0);
    return d;
  });

  const calendarWeeks = useMemo(() => buildCalendarWeeks(currentMonth), [currentMonth]);

  // Range that covers the visible calendar grid (may include prev/next month days)
  const gridStart = useMemo(() => calendarWeeks[0][0], [calendarWeeks]);
  const gridEnd   = useMemo(() => {
    const last = calendarWeeks[calendarWeeks.length - 1];
    return last[last.length - 1];
  }, [calendarWeeks]);

  const [monthEntries, setMonthEntries] = useState<ITimesheetEntry[]>([]);
  const [loading, setLoading]           = useState(false);
  const [projects, setProjects]         = useState<IProject[]>([]);
  const [categories, setCategories]     = useState<IActivityCategory[]>([]);

  // ── Modal state ──────────────────────────────────────────────────────────
  const [modalOpen, setModalOpen]               = useState(false);
  const [selectedDate, setSelectedDate]         = useState<Date | null>(null);
  const [modalRows, setModalRows]               = useState<ITaskRow[]>([emptyRow()]);
  const [modalDeletedIds, setModalDeletedIds]   = useState<number[]>([]);
  const [modalDayStatus, setModalDayStatus]     = useState<TimesheetStatus | null>(null);
  const [modalMgrComments, setModalMgrComments] = useState('');
  const [modalSaving, setModalSaving]           = useState(false);
  const [modalSuccess, setModalSuccess]         = useState('');
  const [modalError, setModalError]             = useState('');
  const [modalValidErrors, setModalValidErrors] = useState<string[]>([]);
  const [submitConfirm, setSubmitConfirm]       = useState(false);
  const [rowErrors, setRowErrors]               = useState<Record<string, Record<string, boolean>>>({});

  const isReadOnly = modalDayStatus === 'Submitted' || modalDayStatus === 'Approved';

  // ── Load projects & categories once ─────────────────────────────────────
  useEffect(() => {
    Promise.all([getActiveProjects(), getActiveCategories()])
      .then(([projs, cats]) => { setProjects(projs); setCategories(cats); })
      .catch(() => { /* non-critical */ });
  }, []);

  // ── Load entries for visible grid range ──────────────────────────────────
  const loadEntries = useCallback(async (start: Date, end: Date): Promise<void> => {
    setLoading(true);
    try {
      const entries = await getEntriesForDateRange(start, end, currentUser.email);
      setMonthEntries(entries);
    } catch {
      setMonthEntries([]);
    } finally {
      setLoading(false);
    }
  }, [currentUser.email]);

  useEffect(() => {
    void loadEntries(gridStart, gridEnd);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentMonth]); // only reload when the month changes

  // ── Entry map keyed by date string ───────────────────────────────────────
  const entryMap = useMemo(() => groupByDate(monthEntries), [monthEntries]);

  // ── Month navigation ─────────────────────────────────────────────────────
  const goBack = (): void => {
    setCurrentMonth((prev) => {
      const d = new Date(prev);
      d.setMonth(d.getMonth() - 1);
      return d;
    });
  };

  const goForward = (): void => {
    const next = new Date(currentMonth);
    next.setMonth(next.getMonth() + 1);
    const today = new Date();
    today.setDate(1);
    today.setHours(0, 0, 0, 0);
    if (next <= today) setCurrentMonth(next);
  };

  const isNextDisabled = (): boolean => {
    const next = new Date(currentMonth);
    next.setMonth(next.getMonth() + 1);
    const today = new Date();
    today.setDate(1);
    today.setHours(0, 0, 0, 0);
    return next > today;
  };

  // ── Open modal for a date cell click ─────────────────────────────────────
  const handleDayClick = (day: Date): void => {
    const clicked = new Date(day);
    clicked.setHours(0, 0, 0, 0);
    if (isFutureDate(clicked)) return;

    const dateStr    = toDateStr(clicked);
    const dayEntries = entryMap.get(dateStr) || [];

    setSelectedDate(clicked);
    setModalValidErrors([]);
    setModalSuccess('');
    setModalError('');
    setSubmitConfirm(false);
    setModalDeletedIds([]);
    setRowErrors({});

    if (dayEntries.length > 0) {
      setModalDayStatus(dayEntries[0].status);
      setModalMgrComments(dayEntries[0].managerComments ?? '');
      setModalRows(dayEntries.map((e) => ({
        rowKey:               newRowKey(),
        id:                   e.id,
        projectId:            e.projectId,
        projectName:          e.projectName,
        activityCategoryId:   e.activityCategoryId,
        activityCategoryName: e.activityCategoryName,
        taskDescription:      e.taskDescription,
        hoursSpent:           e.hoursSpent,
        isDirty:              false,
      })));
    } else {
      setModalDayStatus(null);
      setModalMgrComments('');
      setModalRows([emptyRow()]);
    }

    setModalOpen(true);
    // Scroll to top so the modal is fully visible without needing to scroll
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // ── Modal row helpers ─────────────────────────────────────────────────────
  const updateModalRow = (rowKey: string, changes: Partial<ITaskRow>): void => {
    setModalRows((prev) => prev.map((r) => r.rowKey === rowKey ? { ...r, ...changes, isDirty: true } : r));
    // Clear per-field errors for changed fields
    const changedFields = Object.keys(changes);
    setRowErrors((prev) => {
      if (!prev[rowKey]) return prev;
      const rowErrs = { ...prev[rowKey] };
      changedFields.forEach((f) => { delete rowErrs[f]; });
      if (Object.keys(rowErrs).length === 0) {
        const next = { ...prev };
        delete next[rowKey];
        return next;
      }
      return { ...prev, [rowKey]: rowErrs };
    });
  };

  const addModalRow = (): void => setModalRows((prev) => [...prev, emptyRow()]);

  const deleteModalRow = (rowKey: string, id?: number): void => {
    if (modalRows.length === 1) return;
    setModalRows((prev) => prev.filter((r) => r.rowKey !== rowKey));
    if (id) setModalDeletedIds((prev) => [...prev, id]);
  };

  const totalModalHours = modalRows.reduce((s, r) => s + (r.hoursSpent || 0), 0);

  const makeBaseEntry = (): { employeeId: number; employeeName: string; employeeEmail: string; entryDate: Date } | null =>
    selectedDate ? { employeeId: currentUser.id, employeeName: currentUser.displayName, employeeEmail: currentUser.email, entryDate: selectedDate } : null;

  // ── Validate and highlight fields ─────────────────────────────────────────
  const validateAndHighlight = (): boolean => {
    const result = validateTaskRows(modalRows);
    if (!result.valid) {
      const newRowErrors: Record<string, Record<string, boolean>> = {};
      result.errors.forEach((e) => {
        if (!newRowErrors[e.rowKey]) newRowErrors[e.rowKey] = {};
        newRowErrors[e.rowKey][e.field] = true;
      });
      setRowErrors(newRowErrors);
      const msgs = result.errors.map((e) => e.message);
      if (result.dayTotalError) msgs.push(result.dayTotalError);
      setModalValidErrors(msgs);
      return false;
    }
    setRowErrors({});
    setModalValidErrors([]);
    return true;
  };

  // ── Save draft ────────────────────────────────────────────────────────────
  const handleSaveDraft = async (): Promise<void> => {
    const base = makeBaseEntry();
    if (!base) return;
    const result = validateTaskRows(modalRows);
    if (!result.valid) {
      const newRowErrors: Record<string, Record<string, boolean>> = {};
      result.errors.forEach((e) => {
        if (!newRowErrors[e.rowKey]) newRowErrors[e.rowKey] = {};
        newRowErrors[e.rowKey][e.field] = true;
      });
      setRowErrors(newRowErrors);
      const msgs = result.errors.map((e) => e.message);
      if (result.dayTotalError) msgs.push(result.dayTotalError);
      setModalValidErrors(msgs);
      return;
    }
    setRowErrors({});
    setModalValidErrors([]);
    setModalSaving(true);
    setModalSuccess('');
    setModalError('');
    try {
      const updated = await saveDraftEntries(modalRows, modalDeletedIds, base);
      setModalRows(updated);
      setModalDeletedIds([]);
      setModalDayStatus('Draft');
      setModalSuccess(strings.SaveDraftSuccess);
      void loadEntries(gridStart, gridEnd);
    } catch {
      setModalError(strings.SaveDraftFailed);
    } finally {
      setModalSaving(false);
    }
  };

  // ── Submit ────────────────────────────────────────────────────────────────
  const handleSubmit = async (): Promise<void> => {
    const base = makeBaseEntry();
    if (!base) return;
    setModalValidErrors([]);
    const result = validateTaskRows(modalRows);
    if (!result.valid) {
      const msgs = result.errors.map((e) => e.message);
      if (result.dayTotalError) msgs.push(result.dayTotalError);
      setModalValidErrors(msgs);
      setSubmitConfirm(false);
      return;
    }
    setModalSaving(true);
    setModalSuccess('');
    setModalError('');
    try {
      const savedRows = await saveDraftEntries(modalRows, modalDeletedIds, base);
      const ids = savedRows.filter((r) => r.id !== undefined).map((r) => r.id as number);
      await submitDayEntries(ids);
      setModalDayStatus('Submitted');
      setModalRows(savedRows.map((r) => ({ ...r, isDirty: false })));
      setModalDeletedIds([]);
      setModalSuccess(strings.SubmitSuccess);
      void loadEntries(gridStart, gridEnd);
    } catch {
      setModalError(strings.SubmitFailed);
    } finally {
      setModalSaving(false);
      setSubmitConfirm(false);
    }
  };

  // ── Entries below calendar (sorted newest first) ──────────────────────────
  const sortedEntries = useMemo(
    () => [...monthEntries].sort((a, b) => b.entryDate.getTime() - a.entryDate.getTime()),
    [monthEntries]
  );
  const entriesByDate = useMemo(() => groupByDate(sortedEntries), [sortedEntries]);

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <div className={styles.container}>

      {/* Header */}
      <div className={styles.header}>
        <button className={styles.homeBtn} title="Home" onClick={navigateHome}><IconHome /></button>
        <h1 className={styles.title}>{strings.CalendarTitle}</h1>
        {loading && <div className={styles.headerSpinner} />}
      </div>

      {/* ── Calendar card ── */}
      <div className={styles.calendarCard}>

        {/* Month toolbar */}
        <div className={styles.calendarToolbar}>
          <button className={styles.navBtn} onClick={goBack}><IconLeft /></button>
          <span className={styles.monthLabel}>
            {strings.MonthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
          </span>
          <button className={styles.navBtn} onClick={goForward} disabled={isNextDisabled()}>
            <IconRight />
          </button>
        </div>

        {/* Day-of-week header */}
        <div className={styles.calendarGrid}>
          {strings.DayNamesShort.map((d) => (
            <div key={d} className={styles.dayHeader}>{d}</div>
          ))}

          {/* Day cells */}
          {calendarWeeks.map((week, wi) =>
            week.map((day, di) => {
              const dateStr    = toDateStr(day);
              const dayEntries = entryMap.get(dateStr);
              const inMonth    = sameMonth(day, currentMonth);
              const today      = isToday(day);
              const future     = isFutureDate(day);
              const status     = dayEntries ? dominantStatus(dayEntries) : null;
              const totalHrs   = dayEntries ? dayEntries.reduce((s, e) => s + e.hoursSpent, 0) : 0;

              return (
                <div
                  key={`${wi}-${di}`}
                  className={[
                    styles.dayCell,
                    !inMonth   ? styles.otherMonth : '',
                    today      ? styles.today      : '',
                    future     ? styles.future     : '',
                    !future    ? styles.clickable  : '',
                  ].join(' ')}
                  onClick={() => !future && handleDayClick(day)}
                  title={future ? '' : (dayEntries ? strings.ClickToEdit : strings.ClickToAdd)}
                >
                  <span className={styles.dayNumber}>{day.getDate()}</span>
                  {status && (
                    <div
                      className={styles.eventPill}
                      style={{ background: statusColor(status), color: status === 'Draft' ? '#4b3800' : '#fff' }}
                    >
                      {totalHrs.toFixed(1)}h · {status}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Legend */}
      <div className={styles.legend}>
        {(['Draft','Submitted','Approved','Rejected'] as TimesheetStatus[]).map((s) => (
          <span key={s} className={styles.legendItem}>
            <span className={styles.dot} style={{ background: statusColor(s) }} />{s}
          </span>
        ))}
        <span className={styles.legendHint}>{strings.LegendHint}</span>
      </div>

      {/* ── Entries below calendar ── */}
      <div className={styles.entriesSection}>
        <h2 className={styles.sectionTitle}>{strings.EntriesThisPeriod}</h2>
        {monthEntries.length === 0 ? (
          <p className={styles.emptyHint}>{strings.NoEntriesHint}</p>
        ) : (
          <div className={styles.entriesWrap}>
            {Array.from(entriesByDate.entries()).map(([dateStr, dayEntries]) => {
              const status     = dominantStatus(dayEntries);
              const totalHours = dayEntries.reduce((s, e) => s + e.hoursSpent, 0);
              return (
                <div key={dateStr} className={styles.dateGroup}>
                  <div className={styles.dateGroupHeader}>
                    <span className={styles.dateLabel}>{formatDateLabel(new Date(`${dateStr}T00:00:00`))}</span>
                    <span className={styles.statusBadge} style={{ background: statusBg(status), color: statusColor(status) }}>
                      {status}
                    </span>
                    <span className={styles.dateHours}>{totalHours.toFixed(2)} hrs</span>
                  </div>
                  <div className={styles.tableWrap}>
                    <table className={styles.entriesTable}>
                      <thead>
                        <tr>
                          <th>{strings.Project}</th>
                          <th>{strings.Category}</th>
                          <th>{strings.TaskDescription}</th>
                          <th>{strings.Hours}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {dayEntries.map((entry) => (
                          <tr key={entry.id}>
                            <td>{entry.projectName}</td>
                            <td>{entry.activityCategoryName}</td>
                            <td>{entry.taskDescription}</td>
                            <td>{entry.hoursSpent.toFixed(2)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* ── Modal ── */}
      {selectedDate && (
        <Modal
          isOpen={modalOpen}
          onDismiss={() => setModalOpen(false)}
          isBlocking={false}
          containerClassName={styles.modal}
          scrollableContentClassName={styles.modalScrollable}
        >

            {/* ── Dark header ── */}
            <div className={styles.modalHeader}>
              <div className={styles.modalDateBlock}>
                <span className={styles.modalDayNum}>
                  {selectedDate.getDate()}
                </span>
                <div className={styles.modalDateMeta}>
                  <span className={styles.modalDateMonth}>
                    {strings.MonthNames[selectedDate.getMonth()]} {selectedDate.getFullYear()}
                  </span>
                  <span className={styles.modalDateWeekday}>
                    {strings.DayNamesFull[selectedDate.getDay()]}
                  </span>
                </div>
              </div>
              <div className={styles.modalHeaderRight}>
                {modalDayStatus && (
                  <span className={styles.modalStatusChip} data-status={modalDayStatus.toLowerCase()}>
                    <span className={styles.modalStatusDot} />
                    {modalDayStatus}
                  </span>
                )}
                <button className={styles.modalCloseBtn} onClick={() => setModalOpen(false)} title="Close">
                  <IconClose />
                </button>
              </div>
            </div>

            {/* ── Inline alerts ── */}
            {(modalSuccess || modalError || modalValidErrors.length > 0 || (isReadOnly && modalDayStatus !== 'Approved')) && (
              <div className={styles.modalAlerts}>
                {modalSuccess && (
                  <div className={`${styles.alert} ${styles.alertSuccess}`}>
                    <IconCheck /><span>{modalSuccess}</span>
                    <button className={styles.alertDismiss} onClick={() => setModalSuccess('')}><IconClose /></button>
                  </div>
                )}
                {modalError && (
                  <div className={`${styles.alert} ${styles.alertError}`}>
                    <span>{modalError}</span>
                    <button className={styles.alertDismiss} onClick={() => setModalError('')}><IconClose /></button>
                  </div>
                )}
                {modalValidErrors.length > 0 && (
                  <div className={`${styles.alert} ${styles.alertWarn}`}>
                    <ul className={styles.validationList}>
                      {modalValidErrors.map((e, i) => <li key={i}>{e}</li>)}
                    </ul>
                  </div>
                )}
                {isReadOnly && modalDayStatus !== 'Approved' && (
                  <div className={`${styles.alert} ${styles.alertInfo}`}>
                    <IconInfo /><span>{strings.SubmittedAwaiting}</span>
                  </div>
                )}
              </div>
            )}

            {/* ── Rejected manager comment ── */}
            {modalDayStatus === 'Rejected' && modalMgrComments && (
              <div className={styles.rejectedBanner}>
                <span className={styles.rejectedLabel}>{strings.ManagerFeedback}</span>
                <span className={styles.rejectedMsg}>{modalMgrComments}</span>
              </div>
            )}

            {/* ── Task cards ── */}
            <div className={styles.taskCardsWrap}>
              {modalRows.map((row, idx) => (
                <div key={row.rowKey} className={styles.taskCard}>

                  {/* Card top bar */}
                  <div className={styles.taskCardTop}>
                    <span className={styles.taskIndex}>{fmt(strings.TaskLabel, { n: idx + 1 })}</span>
                    {!isReadOnly && modalRows.length > 1 && (
                      <button
                        className={styles.taskDeleteBtn}
                        onClick={() => deleteModalRow(row.rowKey, row.id)}
                        title={strings.RemoveTask}
                      >
                        <IconTrash />
                      </button>
                    )}
                  </div>

                  {/* Selects row */}
                  <div className={styles.taskFieldsRow}>
                    <div className={styles.taskField}>
                      <label className={styles.fieldLbl}>{strings.Project}</label>
                      <select
                        className={styles.fieldSelect}
                        style={rowErrors[row.rowKey]?.projectId ? { borderColor: '#da1e28' } : {}}
                        disabled={isReadOnly}
                        value={row.projectId}
                        onChange={(e) => {
                          const proj = projects.find((p) => p.id === Number(e.target.value));
                          updateModalRow(row.rowKey, { projectId: Number(e.target.value), projectName: proj?.title ?? '' });
                        }}
                      >
                        <option value={0}>{strings.SelectProject}</option>
                        {projects.map((p) => <option key={p.id} value={p.id}>{p.title}</option>)}
                      </select>
                    </div>

                    <div className={styles.taskField}>
                      <label className={styles.fieldLbl}>{strings.Category}</label>
                      <select
                        className={styles.fieldSelect}
                        style={rowErrors[row.rowKey]?.activityCategoryId ? { borderColor: '#da1e28' } : {}}
                        disabled={isReadOnly}
                        value={row.activityCategoryId}
                        onChange={(e) => {
                          const cat = categories.find((c) => c.id === Number(e.target.value));
                          updateModalRow(row.rowKey, { activityCategoryId: Number(e.target.value), activityCategoryName: cat?.title ?? '' });
                        }}
                      >
                        <option value={0}>{strings.SelectCategory}</option>
                        {categories.map((c) => <option key={c.id} value={c.id}>{c.title}</option>)}
                      </select>
                    </div>

                    {/* Hours stepper */}
                    <div className={styles.hoursField}>
                      <label className={styles.fieldLbl}>{strings.Hours}</label>
                      <div className={styles.hoursStepper}>
                        <button
                          className={styles.stepBtn}
                          disabled={isReadOnly || row.hoursSpent <= 0.25}
                          onClick={() => updateModalRow(row.rowKey, { hoursSpent: Math.max(0.25, parseFloat((row.hoursSpent - 0.25).toFixed(2))) })}
                        >−</button>
                        <input
                          type="number"
                          className={styles.hoursInput}
                          style={rowErrors[row.rowKey]?.hoursSpent ? { borderColor: '#da1e28' } : {}}
                          disabled={isReadOnly}
                          value={row.hoursSpent}
                          min={0.25} max={24} step={0.25}
                          onChange={(e) => updateModalRow(row.rowKey, { hoursSpent: parseFloat(e.target.value) || 0 })}
                        />
                        <button
                          className={styles.stepBtn}
                          disabled={isReadOnly || row.hoursSpent >= 24}
                          onClick={() => updateModalRow(row.rowKey, { hoursSpent: Math.min(24, parseFloat((row.hoursSpent + 0.25).toFixed(2))) })}
                        >+</button>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className={styles.taskDescField}>
                    <label className={styles.fieldLbl}>{strings.Description}</label>
                    <textarea
                      className={styles.fieldTextarea}
                      style={rowErrors[row.rowKey]?.taskDescription ? { borderColor: '#da1e28' } : {}}
                      disabled={isReadOnly}
                      rows={2}
                      value={row.taskDescription}
                      placeholder={strings.WhatDidYouWorkOn}
                      onChange={(e) => updateModalRow(row.rowKey, { taskDescription: e.target.value })}
                    />
                  </div>
                </div>
              ))}

              {/* Add task button */}
              {!isReadOnly && (
                <button className={styles.addTaskBtn} onClick={addModalRow} disabled={modalSaving}>
                  <IconAdd />
                  <span>{strings.AddAnotherTask}</span>
                </button>
              )}
            </div>

            {/* ── Footer ── */}
            <div className={styles.modalFooter}>
              <div className={styles.footerTotal}>
                <span className={styles.footerTotalNum}>{totalModalHours.toFixed(2)}</span>
                <span className={styles.footerTotalLabel}>{strings.HrsTotal}{totalModalHours > 24 ? ` · ${strings.OverLimit}` : ''}</span>
              </div>

              {!isReadOnly && (
                <div className={styles.footerBtns}>
                  {!submitConfirm ? (
                    <>
                      <DefaultButton
                        text={strings.SaveDraft}
                        iconProps={{ iconName: 'Save' }}
                        onClick={handleSaveDraft}
                        disabled={totalModalHours > 24 || modalSaving}
                      />
                      <PrimaryButton
                        text={strings.Submit}
                        iconProps={{ iconName: 'Send' }}
                        onClick={() => { if (validateAndHighlight()) setSubmitConfirm(true); }}
                        disabled={totalModalHours > 24 || modalSaving}
                      />
                    </>
                  ) : (
                    <>
                      <span className={styles.confirmPrompt}>{strings.ConfirmSubmit}</span>
                      <DefaultButton
                        text={strings.Cancel}
                        onClick={() => setSubmitConfirm(false)}
                        disabled={totalModalHours > 24 || modalSaving}
                      />
                      <PrimaryButton
                        text={strings.YesSubmit}
                        iconProps={{ iconName: 'CheckMark' }}
                        onClick={handleSubmit}
                        disabled={totalModalHours > 24 || modalSaving}
                      />
                    </>
                  )}
                </div>
              )}
            </div>
        </Modal>
      )}
    </div>
  );
};

export default CalendarView;
