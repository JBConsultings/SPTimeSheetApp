import { getSP } from './PnPSetup';
import { ITimesheetEntry, ITaskRow, TimesheetStatus } from '../models/ITimesheetModels';
import { LISTS, TIMESHEET_COLS } from '../utils/constants';
import { toODataDate, toODataEndOfDay, getWeekStart } from '../utils/dateUtils';

import '@pnp/sp/lists';
import '@pnp/sp/items';
import '@pnp/sp/batching';

// ─── Fields to select on all queries ─────────────────────────────────────────
const SELECT_FIELDS = [
  'Id',
  'Title',
  TIMESHEET_COLS.EMPLOYEE_ID,
  TIMESHEET_COLS.EMPLOYEE_NAME,
  TIMESHEET_COLS.EMPLOYEE_EMAIL,
  TIMESHEET_COLS.ENTRY_DATE,
  TIMESHEET_COLS.PROJECT_ID,
  TIMESHEET_COLS.PROJECT_NAME,
  TIMESHEET_COLS.ACTIVITY_CATEGORY_ID,
  TIMESHEET_COLS.ACTIVITY_CATEGORY_NAME,
  TIMESHEET_COLS.TASK_DESCRIPTION,
  TIMESHEET_COLS.HOURS_SPENT,
  TIMESHEET_COLS.STATUS,
  TIMESHEET_COLS.MANAGER_COMMENTS,
  TIMESHEET_COLS.SUBMITTED_ON,
  TIMESHEET_COLS.REVIEWED_BY,
  TIMESHEET_COLS.REVIEWED_ON,
  TIMESHEET_COLS.WEEK_START_DATE,
];

// ─── Map a raw SP list item to ITimesheetEntry ────────────────────────────────
function mapItem(item: Record<string, unknown>): ITimesheetEntry {
  return {
    id: item.Id as number,
    title: item.Title as string,
    employeeId: item[TIMESHEET_COLS.EMPLOYEE_ID] as number,
    employeeName: item[TIMESHEET_COLS.EMPLOYEE_NAME] as string,
    employeeEmail: item[TIMESHEET_COLS.EMPLOYEE_EMAIL] as string,
    entryDate: new Date(item[TIMESHEET_COLS.ENTRY_DATE] as string),
    projectId: item[TIMESHEET_COLS.PROJECT_ID] as number,
    projectName: item[TIMESHEET_COLS.PROJECT_NAME] as string,
    activityCategoryId: item[TIMESHEET_COLS.ACTIVITY_CATEGORY_ID] as number,
    activityCategoryName: item[TIMESHEET_COLS.ACTIVITY_CATEGORY_NAME] as string,
    taskDescription: item[TIMESHEET_COLS.TASK_DESCRIPTION] as string,
    hoursSpent: item[TIMESHEET_COLS.HOURS_SPENT] as number,
    status: item[TIMESHEET_COLS.STATUS] as TimesheetStatus,
    managerComments: item[TIMESHEET_COLS.MANAGER_COMMENTS] as string | undefined,
    submittedOn: item[TIMESHEET_COLS.SUBMITTED_ON] ? new Date(item[TIMESHEET_COLS.SUBMITTED_ON] as string) : undefined,
    reviewedBy: item[TIMESHEET_COLS.REVIEWED_BY] as string | undefined,
    reviewedOn: item[TIMESHEET_COLS.REVIEWED_ON] ? new Date(item[TIMESHEET_COLS.REVIEWED_ON] as string) : undefined,
    weekStartDate: item[TIMESHEET_COLS.WEEK_START_DATE] ? new Date(item[TIMESHEET_COLS.WEEK_START_DATE] as string) : undefined,
  };
}

// ─── Build the payload for creating / updating an entry ──────────────────────
function buildPayload(entry: Partial<ITimesheetEntry> & { employeeEmail: string; entryDate: Date }): Record<string, unknown> {
  const weekStart = getWeekStart(entry.entryDate);
  return {
    ...(entry.employeeName !== undefined && { [TIMESHEET_COLS.EMPLOYEE_NAME]: entry.employeeName }),
    ...(entry.employeeEmail !== undefined && { [TIMESHEET_COLS.EMPLOYEE_EMAIL]: entry.employeeEmail }),
    ...(entry.employeeId !== undefined && { [TIMESHEET_COLS.EMPLOYEE_ID]: entry.employeeId }),
    [TIMESHEET_COLS.ENTRY_DATE]: entry.entryDate.toISOString(),
    [TIMESHEET_COLS.WEEK_START_DATE]: weekStart.toISOString(),
    ...(entry.projectId !== undefined && { [TIMESHEET_COLS.PROJECT_ID]: entry.projectId }),
    ...(entry.projectName !== undefined && { [TIMESHEET_COLS.PROJECT_NAME]: entry.projectName }),
    ...(entry.activityCategoryId !== undefined && { [TIMESHEET_COLS.ACTIVITY_CATEGORY_ID]: entry.activityCategoryId }),
    ...(entry.activityCategoryName !== undefined && { [TIMESHEET_COLS.ACTIVITY_CATEGORY_NAME]: entry.activityCategoryName }),
    ...(entry.taskDescription !== undefined && { [TIMESHEET_COLS.TASK_DESCRIPTION]: entry.taskDescription }),
    ...(entry.hoursSpent !== undefined && { [TIMESHEET_COLS.HOURS_SPENT]: entry.hoursSpent }),
    ...(entry.status !== undefined && { [TIMESHEET_COLS.STATUS]: entry.status }),
    ...(entry.managerComments !== undefined && { [TIMESHEET_COLS.MANAGER_COMMENTS]: entry.managerComments }),
    ...(entry.submittedOn !== undefined && { [TIMESHEET_COLS.SUBMITTED_ON]: entry.submittedOn?.toISOString() ?? null }),
    ...(entry.reviewedBy !== undefined && { [TIMESHEET_COLS.REVIEWED_BY]: entry.reviewedBy }),
    ...(entry.reviewedOn !== undefined && { [TIMESHEET_COLS.REVIEWED_ON]: entry.reviewedOn?.toISOString() ?? null }),
  };
}

// ─── Queries ──────────────────────────────────────────────────────────────────

/**
 * Get all timesheet entries for a specific employee on a specific date.
 */
export async function getEntriesForDate(date: Date, employeeEmail: string): Promise<ITimesheetEntry[]> {
  const sp = getSP();
  const filter = `${TIMESHEET_COLS.EMPLOYEE_EMAIL} eq '${employeeEmail}' and ${TIMESHEET_COLS.ENTRY_DATE} ge '${toODataDate(date)}' and ${TIMESHEET_COLS.ENTRY_DATE} le '${toODataEndOfDay(date)}'`;

  const items = await sp.web.lists
    .getByTitle(LISTS.TIMESHEET_ENTRIES)
    .items
    .select(...SELECT_FIELDS)
    .filter(filter)
    .orderBy(TIMESHEET_COLS.ENTRY_DATE, true)
    .top(100)();

  return items.map(mapItem);
}

/**
 * Get all entries for an employee within a date range (for history view).
 */
export async function getEntriesForDateRange(
  startDate: Date,
  endDate: Date,
  employeeEmail: string
): Promise<ITimesheetEntry[]> {
  const sp = getSP();
  const filter = `${TIMESHEET_COLS.EMPLOYEE_EMAIL} eq '${employeeEmail}' and ${TIMESHEET_COLS.ENTRY_DATE} ge '${toODataDate(startDate)}' and ${TIMESHEET_COLS.ENTRY_DATE} le '${toODataEndOfDay(endDate)}'`;

  const items = await sp.web.lists
    .getByTitle(LISTS.TIMESHEET_ENTRIES)
    .items
    .select(...SELECT_FIELDS)
    .filter(filter)
    .orderBy(TIMESHEET_COLS.ENTRY_DATE, false)  // newest first
    .top(2000)();

  return items.map(mapItem);
}

/**
 * Get team entries for the manager dashboard.
 * Optionally filter by status and/or employee email.
 */
export async function getTeamEntries(
  startDate: Date,
  endDate: Date,
  options?: { employeeEmail?: string; status?: TimesheetStatus }
): Promise<ITimesheetEntry[]> {
  const sp = getSP();

  const filters: string[] = [
    `${TIMESHEET_COLS.ENTRY_DATE} ge '${toODataDate(startDate)}'`,
    `${TIMESHEET_COLS.ENTRY_DATE} le '${toODataEndOfDay(endDate)}'`,
  ];
  if (options?.employeeEmail) {
    filters.push(`${TIMESHEET_COLS.EMPLOYEE_EMAIL} eq '${options.employeeEmail}'`);
  }
  if (options?.status) {
    filters.push(`${TIMESHEET_COLS.STATUS} eq '${options.status}'`);
  }

  const items = await sp.web.lists
    .getByTitle(LISTS.TIMESHEET_ENTRIES)
    .items
    .select(...SELECT_FIELDS)
    .filter(filters.join(' and '))
    .orderBy(TIMESHEET_COLS.EMPLOYEE_EMAIL, true)
    .orderBy(TIMESHEET_COLS.ENTRY_DATE, false)
    .top(5000)();

  return items.map(mapItem);
}

/**
 * Get entries for export with optional filters (for ExportPanel).
 */
export async function getEntriesForExport(
  startDate: Date,
  endDate: Date,
  options?: { employeeEmail?: string; projectId?: number; status?: TimesheetStatus }
): Promise<ITimesheetEntry[]> {
  const sp = getSP();

  const filters: string[] = [
    `${TIMESHEET_COLS.ENTRY_DATE} ge '${toODataDate(startDate)}'`,
    `${TIMESHEET_COLS.ENTRY_DATE} le '${toODataEndOfDay(endDate)}'`,
  ];
  if (options?.employeeEmail) {
    filters.push(`${TIMESHEET_COLS.EMPLOYEE_EMAIL} eq '${options.employeeEmail}'`);
  }
  if (options?.projectId) {
    filters.push(`${TIMESHEET_COLS.PROJECT_ID} eq ${options.projectId}`);
  }
  if (options?.status) {
    filters.push(`${TIMESHEET_COLS.STATUS} eq '${options.status}'`);
  }

  const items = await sp.web.lists
    .getByTitle(LISTS.TIMESHEET_ENTRIES)
    .items
    .select(...SELECT_FIELDS)
    .filter(filters.join(' and '))
    .orderBy(TIMESHEET_COLS.EMPLOYEE_EMAIL, true)
    .orderBy(TIMESHEET_COLS.ENTRY_DATE, true)
    .top(10000)();

  return items.map(mapItem);
}

// ─── Mutations ────────────────────────────────────────────────────────────────

/**
 * Create a new timesheet entry (single task row).
 */
export async function createEntry(entry: ITimesheetEntry): Promise<number> {
  const sp = getSP();
  const title = `Timesheet - ${entry.employeeEmail} - ${entry.entryDate.toISOString().split('T')[0]}`;
  const payload = buildPayload(entry);
  payload.Title = title;

  const result = await sp.web.lists
    .getByTitle(LISTS.TIMESHEET_ENTRIES)
    .items.add(payload);

  return (result as unknown as { Id: number }).Id;
}

/**
 * Update specific fields on an existing entry.
 */
export async function updateEntry(id: number, changes: Partial<ITimesheetEntry>): Promise<void> {
  const sp = getSP();
  const payload: Record<string, unknown> = {};

  if (changes.projectId !== undefined) payload[TIMESHEET_COLS.PROJECT_ID] = changes.projectId;
  if (changes.projectName !== undefined) payload[TIMESHEET_COLS.PROJECT_NAME] = changes.projectName;
  if (changes.activityCategoryId !== undefined) payload[TIMESHEET_COLS.ACTIVITY_CATEGORY_ID] = changes.activityCategoryId;
  if (changes.activityCategoryName !== undefined) payload[TIMESHEET_COLS.ACTIVITY_CATEGORY_NAME] = changes.activityCategoryName;
  if (changes.taskDescription !== undefined) payload[TIMESHEET_COLS.TASK_DESCRIPTION] = changes.taskDescription;
  if (changes.hoursSpent !== undefined) payload[TIMESHEET_COLS.HOURS_SPENT] = changes.hoursSpent;
  if (changes.status !== undefined) payload[TIMESHEET_COLS.STATUS] = changes.status;
  if (changes.managerComments !== undefined) payload[TIMESHEET_COLS.MANAGER_COMMENTS] = changes.managerComments;
  if (changes.submittedOn !== undefined) payload[TIMESHEET_COLS.SUBMITTED_ON] = changes.submittedOn?.toISOString() ?? null;
  if (changes.reviewedBy !== undefined) payload[TIMESHEET_COLS.REVIEWED_BY] = changes.reviewedBy;
  if (changes.reviewedOn !== undefined) payload[TIMESHEET_COLS.REVIEWED_ON] = changes.reviewedOn?.toISOString() ?? null;

  await sp.web.lists
    .getByTitle(LISTS.TIMESHEET_ENTRIES)
    .items.getById(id)
    .update(payload);
}

/**
 * Delete a timesheet entry by ID.
 */
export async function deleteEntry(id: number): Promise<void> {
  const sp = getSP();
  await sp.web.lists
    .getByTitle(LISTS.TIMESHEET_ENTRIES)
    .items.getById(id)
    .delete();
}

// ─── Bulk status operations ───────────────────────────────────────────────────

/**
 * Save or update all task rows for a day as Draft.
 * - New rows (no id) → createEntry
 * - Existing rows (have id) → updateEntry
 * - IDs in deletedIds → deleteEntry
 */
export async function saveDraftEntries(
  rows: ITaskRow[],
  deletedIds: number[],
  baseEntry: Pick<ITimesheetEntry, 'employeeId' | 'employeeName' | 'employeeEmail' | 'entryDate'>
): Promise<ITaskRow[]> {
  const updatedRows: ITaskRow[] = [];

  // Delete removed rows
  await Promise.all(deletedIds.map((id) => deleteEntry(id)));

  // Create or update remaining rows
  for (const row of rows) {
    const entry: ITimesheetEntry = {
      ...baseEntry,
      projectId: row.projectId,
      projectName: row.projectName,
      activityCategoryId: row.activityCategoryId,
      activityCategoryName: row.activityCategoryName,
      taskDescription: row.taskDescription,
      hoursSpent: row.hoursSpent,
      status: 'Draft',
    };

    if (row.id) {
      await updateEntry(row.id, entry);
      updatedRows.push({ ...row, isDirty: false });
    } else {
      const newId = await createEntry(entry);
      updatedRows.push({ ...row, id: newId, isDirty: false });
    }
  }

  return updatedRows;
}

/**
 * Submit all entries for a day (set Status = "Submitted", SubmittedOn = now).
 * Assumes all rows have already been saved (have IDs).
 */
export async function submitDayEntries(entryIds: number[]): Promise<void> {
  const now = new Date();
  await Promise.all(
    entryIds.map((id) =>
      updateEntry(id, { status: 'Submitted', submittedOn: now })
    )
  );
}

/**
 * Approve all entries for a given employee+day.
 */
export async function approveDayEntries(
  entryIds: number[],
  reviewerName: string
): Promise<void> {
  const now = new Date();
  await Promise.all(
    entryIds.map((id) =>
      updateEntry(id, {
        status: 'Approved',
        reviewedBy: reviewerName,
        reviewedOn: now,
      })
    )
  );
}

/**
 * Reject all entries for a given employee+day with manager comments.
 */
export async function rejectDayEntries(
  entryIds: number[],
  reviewerName: string,
  managerComments: string
): Promise<void> {
  const now = new Date();
  await Promise.all(
    entryIds.map((id) =>
      updateEntry(id, {
        status: 'Rejected',
        reviewedBy: reviewerName,
        reviewedOn: now,
        managerComments,
      })
    )
  );
}
