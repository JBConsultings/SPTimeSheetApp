import * as React from 'react';
import { useContext, useState, useEffect, useCallback } from 'react';
import { AppContext } from '../context/AppContext';
import { ITaskRow, ITimesheetEntry, TimesheetStatus } from '../models/ITimesheetModels';
import {
  getEntriesForDate,
  saveDraftEntries,
  submitDayEntries,
} from '../services/TimesheetService';
import { getActiveProjects } from '../services/ProjectService';
import { getActiveCategories } from '../services/CategoryService';
import { IProject, IActivityCategory } from '../models/ITimesheetModels';
import { formatDateLabel, isFutureDate } from '../utils/dateUtils';
import { validateTaskRows } from '../utils/validationUtils';
import styles from './DailyTimesheetForm.module.scss';

interface IDailyTimesheetFormProps {
  selectedDate: Date;
}

let rowCounter = 0;
function newRowKey(): string {
  return `row-${++rowCounter}`;
}

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

// ─── Inline SVG icons (no icon-font dependency) ──────────────────────────────
const IconHome = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 1L1 7h2v7h4v-4h2v4h4V7h2L8 1z"/>
  </svg>
);
const IconLeft = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconAdd = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
    <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);
const IconSave = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
    <path d="M2 2h8l2 2v8a1 1 0 01-1 1H3a1 1 0 01-1-1V2z" stroke="currentColor" strokeWidth="1.2" fill="none"/>
    <rect x="4" y="1" width="6" height="3" rx=".5" fill="currentColor"/>
    <rect x="3" y="7" width="8" height="5" rx=".5" fill="currentColor"/>
  </svg>
);
const IconSend = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
    <path d="M1 1l12 6-12 6V8.5l8-1.5-8-1.5V1z"/>
  </svg>
);
const IconTrash = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
    <path d="M2 4h10M5 4V2h4v2M6 6v5M8 6v5M3 4l1 8h6l1-8" stroke="currentColor" strokeWidth="1.3" fill="none" strokeLinecap="round"/>
  </svg>
);
const IconClose = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
    <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
const IconCheck = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
    <path d="M2 7l4 4 6-6" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconInfo = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.3" fill="none"/>
    <path d="M8 7v4M8 5v.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

// ─── Status badge config ──────────────────────────────────────────────────────
function statusClass(status: TimesheetStatus): string {
  if (status === 'Approved') return styles.approved;
  if (status === 'Submitted') return styles.submitted;
  if (status === 'Rejected') return styles.rejected;
  return styles.draft;
}

// ─── Component ────────────────────────────────────────────────────────────────
const DailyTimesheetForm: React.FC<IDailyTimesheetFormProps> = ({ selectedDate }) => {
  const { currentUser, navigateHome, navigateTo } = useContext(AppContext);

  const [currentDate, setCurrentDate] = useState<Date>(() => {
    const d = new Date(selectedDate);
    d.setHours(0, 0, 0, 0);
    return d;
  });
  const [rows, setRows] = useState<ITaskRow[]>([emptyRow()]);
  const [deletedIds, setDeletedIds] = useState<number[]>([]);
  const [projects, setProjects] = useState<IProject[]>([]);
  const [categories, setCategories] = useState<IActivityCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [submitConfirm, setSubmitConfirm] = useState(false);
  const [dayStatus, setDayStatus] = useState<TimesheetStatus | null>(null);
  const [managerComments, setManagerComments] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  const isReadOnly = dayStatus === 'Submitted' || dayStatus === 'Approved';

  // ─── Data Loading ───────────────────────────────────────────────────────────
  const loadData = useCallback(async (date: Date): Promise<void> => {
    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');
    setValidationErrors([]);
    try {
      const [entries, projs, cats] = await Promise.all([
        getEntriesForDate(date, currentUser.email),
        getActiveProjects(),
        getActiveCategories(),
      ]);
      setProjects(projs);
      setCategories(cats);
      if (entries.length > 0) {
        setDayStatus(entries[0].status);
        setManagerComments(entries[0].managerComments ?? '');
        setRows(entries.map((e) => ({
          rowKey: newRowKey(),
          id: e.id,
          projectId: e.projectId,
          projectName: e.projectName,
          activityCategoryId: e.activityCategoryId,
          activityCategoryName: e.activityCategoryName,
          taskDescription: e.taskDescription,
          hoursSpent: e.hoursSpent,
          isDirty: false,
        })));
        setDeletedIds([]);
      } else {
        setDayStatus(null);
        setManagerComments('');
        setRows([emptyRow()]);
        setDeletedIds([]);
      }
    } catch {
      setErrorMessage('Failed to load timesheet data. Please try again.');
    } finally {
      setLoading(false);
    }
  }, [currentUser.email]);

  useEffect(() => { void loadData(currentDate); }, [currentDate, loadData]);

  // ─── Navigation ─────────────────────────────────────────────────────────────
  const changeDate = (offset: number): void => {
    const d = new Date(currentDate);
    d.setDate(d.getDate() + offset);
    d.setHours(0, 0, 0, 0);
    if (!isFutureDate(d)) {
      setCurrentDate(d);
      // Keep the URL in sync so the date persists on refresh and is shareable
      navigateTo('DailyForm', { selectedDate: d });
    }
  };

  const nextDay = (): Date => {
    const n = new Date(currentDate);
    n.setDate(n.getDate() + 1);
    n.setHours(0, 0, 0, 0);
    return n;
  };

  // ─── Row Actions ────────────────────────────────────────────────────────────
  const updateRow = (rowKey: string, changes: Partial<ITaskRow>): void =>
    setRows((prev) => prev.map((r) => r.rowKey === rowKey ? { ...r, ...changes, isDirty: true } : r));

  const addRow = (): void => setRows((prev) => [...prev, emptyRow()]);

  const deleteRow = (rowKey: string, id?: number): void => {
    if (rows.length === 1) return;
    setRows((prev) => prev.filter((r) => r.rowKey !== rowKey));
    if (id) setDeletedIds((prev) => [...prev, id]);
  };

  const totalHours = rows.reduce((s, r) => s + (r.hoursSpent || 0), 0);

  // ─── Save Draft ─────────────────────────────────────────────────────────────
  const handleSaveDraft = async (): Promise<void> => {
    setSaving(true);
    setSuccessMessage('');
    setErrorMessage('');
    try {
      const baseEntry: Pick<ITimesheetEntry, 'employeeId' | 'employeeName' | 'employeeEmail' | 'entryDate'> = {
        employeeId: currentUser.id,
        employeeName: currentUser.displayName,
        employeeEmail: currentUser.email,
        entryDate: currentDate,
      };
      const updatedRows = await saveDraftEntries(rows, deletedIds, baseEntry);
      setRows(updatedRows);
      setDeletedIds([]);
      setDayStatus('Draft');
      setSuccessMessage('Draft saved successfully.');
    } catch {
      setErrorMessage('Failed to save draft. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  // ─── Submit ─────────────────────────────────────────────────────────────────
  const handleSubmit = async (): Promise<void> => {
    setValidationErrors([]);
    const result = validateTaskRows(rows);
    if (!result.valid) {
      const msgs: string[] = result.errors.map((e) => e.message);
      if (result.dayTotalError) msgs.push(result.dayTotalError);
      setValidationErrors(msgs);
      setSubmitConfirm(false);
      return;
    }
    setSaving(true);
    setSuccessMessage('');
    setErrorMessage('');
    try {
      const baseEntry: Pick<ITimesheetEntry, 'employeeId' | 'employeeName' | 'employeeEmail' | 'entryDate'> = {
        employeeId: currentUser.id,
        employeeName: currentUser.displayName,
        employeeEmail: currentUser.email,
        entryDate: currentDate,
      };
      const savedRows = await saveDraftEntries(rows, deletedIds, baseEntry);
      const ids = savedRows.filter((r) => r.id !== undefined).map((r) => r.id as number);
      await submitDayEntries(ids);
      setDayStatus('Submitted');
      setRows(savedRows.map((r) => ({ ...r, isDirty: false })));
      setDeletedIds([]);
      setSuccessMessage('Timesheet submitted successfully.');
    } catch {
      setErrorMessage('Failed to submit timesheet. Please try again.');
    } finally {
      setSaving(false);
      setSubmitConfirm(false);
    }
  };

  // ─── Loading State ──────────────────────────────────────────────────────────
  if (loading) {
    return (
      <div className={styles.loadingWrap}>
        <div className={styles.spinner} />
        <span>Loading timesheet…</span>
      </div>
    );
  }

  // ─── Render ─────────────────────────────────────────────────────────────────
  return (
    <div className={styles.container}>

      {/* Header */}
      <div className={styles.header}>
        <button className={styles.homeBtn} title="Home" onClick={navigateHome}>
          <IconHome />
        </button>
        <h1 className={styles.title}>Daily Timesheet</h1>
      </div>

      {/* Day Navigator */}
      <div className={styles.dayNav}>
        <button className={styles.navBtn} title="Previous day" onClick={() => changeDate(-1)}>
          <IconLeft />
        </button>
        <span className={styles.dateLabel}>{formatDateLabel(currentDate)}</span>
        <button
          className={styles.navBtn}
          title="Next day"
          onClick={() => changeDate(1)}
          disabled={isFutureDate(nextDay())}
        >
          <IconRight />
        </button>
      </div>

      {/* Status badge */}
      {dayStatus && (
        <div className={`${styles.statusBar} ${statusClass(dayStatus)}`}>
          <span>Status: <strong>{dayStatus}</strong></span>
          {dayStatus === 'Rejected' && managerComments && (
            <span> — Manager: {managerComments}</span>
          )}
        </div>
      )}

      {/* Success message */}
      {successMessage && (
        <div className={`${styles.messageBar} ${styles.success}`}>
          <IconCheck />
          <span>{successMessage}</span>
          <button className={styles.dismissBtn} onClick={() => setSuccessMessage('')}><IconClose /></button>
        </div>
      )}

      {/* Error message */}
      {errorMessage && (
        <div className={`${styles.messageBar} ${styles.error}`}>
          <span>{errorMessage}</span>
          <button className={styles.dismissBtn} onClick={() => setErrorMessage('')}><IconClose /></button>
        </div>
      )}

      {/* Validation errors */}
      {validationErrors.length > 0 && (
        <div className={`${styles.messageBar} ${styles.warning}`}>
          <ul className={styles.validationList}>
            {validationErrors.map((e, i) => <li key={i}>{e}</li>)}
          </ul>
        </div>
      )}

      {/* Table Card */}
      <div className={styles.tableCard}>
        <div className={styles.tableWrap}>
          <table className={styles.timesheetTable}>
            <thead>
              <tr>
                <th>Project</th>
                <th>Activity Category</th>
                <th className={styles.colDesc}>Task Description</th>
                <th className={styles.colHours}>Hours</th>
                {!isReadOnly && <th className={styles.colDelete} />}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.rowKey}>
                  {/* Project */}
                  <td>
                    <select
                      className={styles.select}
                      disabled={isReadOnly}
                      value={row.projectId}
                      onChange={(e) => {
                        const proj = projects.find((p) => p.id === Number(e.target.value));
                        updateRow(row.rowKey, { projectId: Number(e.target.value), projectName: proj?.title ?? '' });
                      }}
                    >
                      <option value={0}>— Select project —</option>
                      {projects.map((p) => <option key={p.id} value={p.id}>{p.title}</option>)}
                    </select>
                  </td>

                  {/* Category */}
                  <td>
                    <select
                      className={styles.select}
                      disabled={isReadOnly}
                      value={row.activityCategoryId}
                      onChange={(e) => {
                        const cat = categories.find((c) => c.id === Number(e.target.value));
                        updateRow(row.rowKey, { activityCategoryId: Number(e.target.value), activityCategoryName: cat?.title ?? '' });
                      }}
                    >
                      <option value={0}>— Select category —</option>
                      {categories.map((c) => <option key={c.id} value={c.id}>{c.title}</option>)}
                    </select>
                  </td>

                  {/* Description */}
                  <td>
                    <textarea
                      className={styles.textarea}
                      disabled={isReadOnly}
                      rows={2}
                      value={row.taskDescription}
                      onChange={(e) => updateRow(row.rowKey, { taskDescription: e.target.value })}
                      placeholder="Describe the task…"
                    />
                  </td>

                  {/* Hours */}
                  <td className={styles.tdCenter}>
                    <input
                      type="number"
                      className={styles.numberInput}
                      disabled={isReadOnly}
                      value={row.hoursSpent}
                      min={0.25}
                      max={24}
                      step={0.25}
                      onChange={(e) => updateRow(row.rowKey, { hoursSpent: parseFloat(e.target.value) || 0 })}
                    />
                  </td>

                  {/* Delete */}
                  {!isReadOnly && (
                    <td className={styles.tdCenter}>
                      <button
                        className={styles.deleteBtn}
                        title="Remove row"
                        disabled={rows.length === 1}
                        onClick={() => deleteRow(row.rowKey, row.id)}
                      >
                        <IconTrash />
                      </button>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Totals */}
        <div className={styles.totalsRow}>
          <span className={styles.totalLabel}>Total: {totalHours.toFixed(2)} hrs</span>
          {totalHours > 24 && <span className={styles.totalExceeds}>Exceeds 24 hr limit</span>}
        </div>
      </div>

      {/* Action buttons */}
      {!isReadOnly && (
        <div className={styles.actions}>
          <button
            className={`${styles.btn} ${styles.btnDefault}`}
            onClick={addRow}
            disabled={saving}
          >
            <IconAdd /> Add Task
          </button>

          <button
            className={`${styles.btn} ${styles.btnDefault}`}
            onClick={handleSaveDraft}
            disabled={saving}
          >
            <IconSave /> Save Draft
          </button>

          {!submitConfirm ? (
            <button
              className={`${styles.btn} ${styles.btnPrimary}`}
              onClick={() => setSubmitConfirm(true)}
              disabled={saving}
            >
              <IconSend /> Submit
            </button>
          ) : (
            <div className={styles.confirmRow}>
              <span className={styles.confirmText}>
                Submit timesheet for {formatDateLabel(currentDate)}?
              </span>
              <button
                className={`${styles.btn} ${styles.btnConfirm}`}
                onClick={handleSubmit}
                disabled={saving}
              >
                <IconCheck /> Confirm
              </button>
              <button
                className={`${styles.btn} ${styles.btnDefault}`}
                onClick={() => setSubmitConfirm(false)}
                disabled={saving}
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      )}

      {/* Read-only notice */}
      {isReadOnly && dayStatus !== 'Approved' && (
        <div className={styles.readOnlyNotice}>
          <IconInfo />
          This timesheet has been submitted and is awaiting review.
        </div>
      )}

    </div>
  );
};

export default DailyTimesheetForm;
