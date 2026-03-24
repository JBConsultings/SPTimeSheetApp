import * as React from 'react';
import { useContext, useState, useEffect, useCallback } from 'react';
import {
  Dropdown, IDropdownOption,
  TextField,
  PrimaryButton, DefaultButton,
  Spinner, SpinnerSize,
  MessageBar, MessageBarType,
} from '@fluentui/react';
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
import { fmt } from '../utils/fmt';
import * as strings from 'TimeSheetWebPartStrings';
import styles from './DailyTimesheetForm.module.scss';

interface IDailyTimesheetFormProps {
  selectedDate: Date;
}

let rowCounter = 0;
function newRowKey(): string { return `row-${++rowCounter}`; }

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

// ─── SVG Icons ────────────────────────────────────────────────────────────────
const IconHome = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 1L1 7h2v7h4v-4h2v4h4V7h2L8 1z"/>
  </svg>
);
const IconLeft = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M11 4L6 9l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconRight = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M7 4l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconTrash = () => (
  <svg width="15" height="15" viewBox="0 0 14 14" fill="currentColor">
    <path d="M2 4h10M5 4V2h4v2M6 6v5M8 6v5M3 4l1 8h6l1-8" stroke="currentColor" strokeWidth="1.3" fill="none" strokeLinecap="round"/>
  </svg>
);
const IconPlus = () => (
  <svg width="15" height="15" viewBox="0 0 14 14" fill="currentColor">
    <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);
const IconMinus = () => (
  <svg width="15" height="15" viewBox="0 0 14 14" fill="currentColor">
    <path d="M1 7h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// ─── Status config ────────────────────────────────────────────────────────────
function statusBarType(status: TimesheetStatus): MessageBarType {
  if (status === 'Approved')  return MessageBarType.success;
  if (status === 'Submitted') return MessageBarType.info;
  if (status === 'Rejected')  return MessageBarType.error;
  return MessageBarType.warning;
}
function statusLabel(status: TimesheetStatus): string {
  if (status === 'Approved')  return strings.StatusApproved;
  if (status === 'Submitted') return strings.StatusSubmitted;
  if (status === 'Rejected')  return strings.StatusRejected;
  return strings.StatusDraft;
}

// ─── Component ────────────────────────────────────────────────────────────────
const DailyTimesheetForm: React.FC<IDailyTimesheetFormProps> = ({ selectedDate }) => {
  const { currentUser, navigateHome, navigateTo } = useContext(AppContext);

  const [currentDate, setCurrentDate] = useState<Date>(() => {
    const d = new Date(selectedDate);
    d.setHours(0, 0, 0, 0);
    return d;
  });
  const [rows, setRows]               = useState<ITaskRow[]>([emptyRow()]);
  const [deletedIds, setDeletedIds]   = useState<number[]>([]);
  const [projects, setProjects]       = useState<IProject[]>([]);
  const [categories, setCategories]   = useState<IActivityCategory[]>([]);
  const [loading, setLoading]         = useState(true);
  const [saving, setSaving]           = useState(false);
  const [submitConfirm, setSubmitConfirm] = useState(false);
  const [dayStatus, setDayStatus]     = useState<TimesheetStatus | null>(null);
  const [managerComments, setManagerComments] = useState<string>('');
  const [successMessage, setSuccessMessage]   = useState('');
  const [errorMessage, setErrorMessage]       = useState('');
  const [validationErrors, setValidationErrors] = useState<string[]>([]);
  const [rowErrors, setRowErrors]     = useState<Record<string, Record<string, boolean>>>({});

  const isReadOnly = dayStatus === 'Submitted' || dayStatus === 'Approved';

  // ─── Data Loading ─────────────────────────────────────────────────────────
  const loadData = useCallback(async (date: Date): Promise<void> => {
    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');
    setValidationErrors([]);
    setRowErrors({});
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
      setErrorMessage(strings.LoadFailed);
    } finally {
      setLoading(false);
    }
  }, [currentUser.email]);

  useEffect(() => { void loadData(currentDate); }, [currentDate, loadData]);

  // ─── Navigation ───────────────────────────────────────────────────────────
  const changeDate = (offset: number): void => {
    const d = new Date(currentDate);
    d.setDate(d.getDate() + offset);
    d.setHours(0, 0, 0, 0);
    if (!isFutureDate(d)) {
      setCurrentDate(d);
      navigateTo('DailyForm', { selectedDate: d });
    }
  };

  const nextDay = (): Date => {
    const n = new Date(currentDate);
    n.setDate(n.getDate() + 1);
    n.setHours(0, 0, 0, 0);
    return n;
  };

  // ─── Row Actions ──────────────────────────────────────────────────────────
  const updateRow = (rowKey: string, changes: Partial<ITaskRow>): void => {
    setRows((prev) => prev.map((r) => r.rowKey === rowKey ? { ...r, ...changes, isDirty: true } : r));
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

  const addRow = (): void => setRows((prev) => [...prev, emptyRow()]);

  const deleteRow = (rowKey: string, id?: number): void => {
    if (rows.length === 1) return;
    setRows((prev) => prev.filter((r) => r.rowKey !== rowKey));
    if (id) setDeletedIds((prev) => [...prev, id]);
  };

  const adjustHours = (rowKey: string, current: number, delta: number): void => {
    const next = parseFloat(Math.max(0.25, Math.min(24, current + delta)).toFixed(2));
    updateRow(rowKey, { hoursSpent: next });
  };

  const totalHours = rows.reduce((s, r) => s + (r.hoursSpent || 0), 0);

  // ─── Save Draft ───────────────────────────────────────────────────────────
  const handleSaveDraft = async (): Promise<void> => {
    const result = validateTaskRows(rows);
    if (!result.valid) {
      const newRowErrors: Record<string, Record<string, boolean>> = {};
      result.errors.forEach((e) => {
        if (!newRowErrors[e.rowKey]) newRowErrors[e.rowKey] = {};
        newRowErrors[e.rowKey][e.field] = true;
      });
      setRowErrors(newRowErrors);
      const msgs: string[] = result.errors.map((e) => e.message);
      if (result.dayTotalError) msgs.push(result.dayTotalError);
      setValidationErrors(msgs);
      return;
    }
    setRowErrors({});
    setValidationErrors([]);
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
      setSuccessMessage(strings.SaveDraftSuccess);
    } catch {
      setErrorMessage(strings.SaveDraftFailed);
    } finally {
      setSaving(false);
    }
  };

  // ─── Submit ───────────────────────────────────────────────────────────────
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
      setSuccessMessage(strings.SubmitSuccess);
    } catch {
      setErrorMessage(strings.SubmitFailed);
    } finally {
      setSaving(false);
      setSubmitConfirm(false);
    }
  };

  // ─── Dropdown options ─────────────────────────────────────────────────────
  const projectOptions: IDropdownOption[] = projects.map((p) => ({ key: p.id, text: p.title }));
  const categoryOptions: IDropdownOption[] = categories.map((c) => ({ key: c.id, text: c.title }));

  // ─── Loading ──────────────────────────────────────────────────────────────
  if (loading) {
    return (
      <div className={styles.loadingWrap}>
        <Spinner size={SpinnerSize.large} label={`${strings.Loading}…`} />
      </div>
    );
  }

  // ─── Date parts for display ───────────────────────────────────────────────
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayOfWeek = dayNames[currentDate.getDay()];
  const dateDisplay = formatDateLabel(currentDate);

  // ─── Render ───────────────────────────────────────────────────────────────
  return (
    <div className={styles.page}>

      {/* ── Hero Header ── */}
      <div className={styles.heroHeader}>
        <button className={styles.homeBtn} title={strings.Home} onClick={navigateHome}>
          <IconHome />
        </button>
        <div className={styles.heroText}>
          <span className={styles.heroLabel}>{strings.DailyTimesheetTitle}</span>
          {currentUser.displayName && (
            <span className={styles.heroUser}>{currentUser.displayName}</span>
          )}
        </div>
        <div className={styles.heroBadges}>
          <span className={styles.hoursPill}>
            <span className={styles.hoursPillNum}>{totalHours.toFixed(2)}</span>
            <span className={styles.hoursPillLabel}>{strings.Hrs}</span>
            {totalHours > 24 && <span className={styles.hoursPillExceeds}>!</span>}
          </span>
          {dayStatus && (
            <span className={`${styles.statusPill} ${styles[`status${dayStatus}`]}`}>
              {statusLabel(dayStatus)}
            </span>
          )}
        </div>
      </div>

      {/* ── Date Navigator ── */}
      <div className={styles.dateNav}>
        <button className={styles.navArrow} title={strings.PreviousDay} onClick={() => changeDate(-1)}>
          <IconLeft />
        </button>
        <div className={styles.datePill}>
          <span className={styles.datePillDay}>{dayOfWeek}</span>
          <span className={styles.datePillFull}>{dateDisplay}</span>
        </div>
        <button
          className={styles.navArrow}
          title={strings.NextDay}
          onClick={() => changeDate(1)}
          disabled={isFutureDate(nextDay())}
        >
          <IconRight />
        </button>
      </div>

      {/* ── Message bars ── */}
      <div className={styles.messages}>
        {successMessage && (
          <MessageBar
            messageBarType={MessageBarType.success}
            isMultiline={false}
            onDismiss={() => setSuccessMessage('')}
            dismissButtonAriaLabel={strings.Close}
          >
            {successMessage}
          </MessageBar>
        )}
        {errorMessage && (
          <MessageBar
            messageBarType={MessageBarType.error}
            isMultiline={false}
            onDismiss={() => setErrorMessage('')}
            dismissButtonAriaLabel={strings.Close}
          >
            {errorMessage}
          </MessageBar>
        )}
        {validationErrors.length > 0 && (
          <MessageBar
            messageBarType={MessageBarType.warning}
            isMultiline
            onDismiss={() => setValidationErrors([])}
            dismissButtonAriaLabel={strings.Close}
          >
            <ul className={styles.validList}>
              {validationErrors.map((e, i) => <li key={i}>{e}</li>)}
            </ul>
          </MessageBar>
        )}
        {dayStatus === 'Rejected' && managerComments && (
          <MessageBar messageBarType={MessageBarType.error} isMultiline>
            <strong>{strings.ManagerCommentLabel}:</strong> {managerComments}
          </MessageBar>
        )}
        {isReadOnly && dayStatus !== 'Approved' && (
          <MessageBar messageBarType={MessageBarType.info} isMultiline={false}>
            {strings.SubmittedAwaitingReview}
          </MessageBar>
        )}
      </div>

      {/* ── Task Cards ── */}
      <div className={styles.taskStack}>
        {rows.map((row, idx) => {
          const rErr = rowErrors[row.rowKey] || {};
          return (
            <div key={row.rowKey} className={styles.taskCard} style={{ animationDelay: `${idx * 40}ms` }}>

              {/* Card header */}
              <div className={styles.cardHeader}>
                <div className={styles.cardBadge}>
                  <span className={styles.cardBadgeDot} />
                  <span className={styles.cardBadgeText}>
                    {fmt(strings.TaskLabel, { n: idx + 1 })}
                  </span>
                </div>
                {!isReadOnly && rows.length > 1 && (
                  <button
                    className={styles.deleteRowBtn}
                    title={strings.RemoveRow}
                    onClick={() => deleteRow(row.rowKey, row.id)}
                  >
                    <IconTrash />
                    <span>{strings.Delete}</span>
                  </button>
                )}
              </div>

              {/* Dropdowns row */}
              <div className={styles.cardFields}>
                <div className={styles.cardFieldHalf}>
                  <Dropdown
                    label={strings.Project}
                    placeholder={strings.SelectProjectOpt}
                    selectedKey={row.projectId || null}
                    options={projectOptions}
                    disabled={isReadOnly}
                    errorMessage={rErr.projectId ? 'Project is required.' : undefined}
                    onChange={(_e, opt) => {
                      const proj = projects.find((p) => p.id === Number(opt?.key));
                      updateRow(row.rowKey, { projectId: Number(opt?.key) || 0, projectName: proj?.title ?? '' });
                    }}
                    styles={{
                      dropdown: { borderRadius: 6 },
                      title: { borderRadius: 6, fontSize: 13 },
                      label: { fontSize: 12, fontWeight: 600, color: '#525252' },
                    }}
                  />
                </div>
                <div className={styles.cardFieldHalf}>
                  <Dropdown
                    label={strings.ActivityCategory}
                    placeholder={strings.SelectCategoryOpt}
                    selectedKey={row.activityCategoryId || null}
                    options={categoryOptions}
                    disabled={isReadOnly}
                    errorMessage={rErr.activityCategoryId ? 'Category is required.' : undefined}
                    onChange={(_e, opt) => {
                      const cat = categories.find((c) => c.id === Number(opt?.key));
                      updateRow(row.rowKey, { activityCategoryId: Number(opt?.key) || 0, activityCategoryName: cat?.title ?? '' });
                    }}
                    styles={{
                      dropdown: { borderRadius: 6 },
                      title: { borderRadius: 6, fontSize: 13 },
                      label: { fontSize: 12, fontWeight: 600, color: '#525252' },
                    }}
                  />
                </div>
              </div>

              {/* Description */}
              <div className={styles.cardFieldFull}>
                <TextField
                  label={strings.TaskDescription}
                  multiline
                  rows={2}
                  resizable={false}
                  disabled={isReadOnly}
                  value={row.taskDescription}
                  placeholder={strings.DescribePlaceholder}
                  errorMessage={rErr.taskDescription ? 'Description is required.' : undefined}
                  onChange={(_e, val) => updateRow(row.rowKey, { taskDescription: val || '' })}
                  styles={{
                    field: { fontSize: 13, borderRadius: 6 },
                    fieldGroup: { borderRadius: 6 },
                    subComponentStyles: { label: { root: { fontSize: 12, fontWeight: 600, color: '#525252' } } },
                  }}
                />
              </div>

              {/* Hours stepper */}
              <div className={styles.cardFooter}>
                <span className={styles.hoursLabel}>{strings.Hours}</span>
                <div className={`${styles.hoursStepper} ${rErr.hoursSpent ? styles.hoursError : ''}`}>
                  <button
                    className={styles.stepBtn}
                    disabled={isReadOnly || row.hoursSpent <= 0.25}
                    onClick={() => adjustHours(row.rowKey, row.hoursSpent, -0.25)}
                  >
                    <IconMinus />
                  </button>
                  <span className={styles.hoursValue}>{(row.hoursSpent || 0).toFixed(2)}</span>
                  <button
                    className={styles.stepBtn}
                    disabled={isReadOnly || row.hoursSpent >= 24}
                    onClick={() => adjustHours(row.rowKey, row.hoursSpent, 0.25)}
                  >
                    <IconPlus />
                  </button>
                </div>
                {rErr.hoursSpent && (
                  <span className={styles.hoursErrMsg}>Min 0.25 hrs required</span>
                )}
              </div>

            </div>
          );
        })}

        {/* Add task button */}
        {!isReadOnly && (
          <button className={styles.addTaskBtn} onClick={addRow} disabled={saving}>
            <span className={styles.addTaskIcon}><IconPlus /></span>
            <span>{strings.AddTask}</span>
          </button>
        )}
      </div>

      {/* ── Footer action bar ── */}
      <div className={styles.footerBar}>
        {!isReadOnly && (
          <div className={styles.footerActions}>
            {!submitConfirm ? (
              <>
                <DefaultButton
                  text={strings.SaveDraft}
                  iconProps={{ iconName: 'Save' }}
                  disabled={saving || totalHours > 24}
                  onClick={handleSaveDraft}
                  styles={{ root: { borderRadius: 6 } }}
                />
                <PrimaryButton
                  text={saving ? strings.Saving : strings.Submit}
                  iconProps={{ iconName: 'Send' }}
                  disabled={saving || totalHours > 24}
                  onRenderIcon={saving ? () => <Spinner size={SpinnerSize.small} /> : undefined}
                  onClick={() => {
                    const result = validateTaskRows(rows);
                    if (!result.valid) {
                      const newRowErrors: Record<string, Record<string, boolean>> = {};
                      result.errors.forEach((e) => {
                        if (!newRowErrors[e.rowKey]) newRowErrors[e.rowKey] = {};
                        newRowErrors[e.rowKey][e.field] = true;
                      });
                      setRowErrors(newRowErrors);
                      const msgs: string[] = result.errors.map((e) => e.message);
                      if (result.dayTotalError) msgs.push(result.dayTotalError);
                      setValidationErrors(msgs);
                      return;
                    }
                    setRowErrors({});
                    setValidationErrors([]);
                    setSubmitConfirm(true);
                  }}
                  styles={{ root: { borderRadius: 6 } }}
                />
              </>
            ) : (
              <div className={styles.confirmBar}>
                <span className={styles.confirmText}>
                  {fmt(strings.ConfirmSubmitDate, { date: formatDateLabel(currentDate) })}
                </span>
                <PrimaryButton
                  text={saving ? strings.Saving : strings.Confirm}
                  iconProps={{ iconName: 'CheckMark' }}
                  disabled={saving}
                  onClick={handleSubmit}
                  styles={{ root: { borderRadius: 6 } }}
                />
                <DefaultButton
                  text={strings.Cancel}
                  disabled={saving}
                  onClick={() => setSubmitConfirm(false)}
                  styles={{ root: { borderRadius: 6 } }}
                />
              </div>
            )}
          </div>
        )}
      </div>

    </div>
  );
};

export default DailyTimesheetForm;
