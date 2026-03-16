import { ITimesheetEntry, ITaskRow, TimesheetStatus } from '../models/ITimesheetModels';
import '@pnp/sp/lists';
import '@pnp/sp/items';
import '@pnp/sp/batching';
/**
 * Get all timesheet entries for a specific employee on a specific date.
 */
export declare function getEntriesForDate(date: Date, employeeEmail: string): Promise<ITimesheetEntry[]>;
/**
 * Get all entries for an employee within a date range (for history view).
 */
export declare function getEntriesForDateRange(startDate: Date, endDate: Date, employeeEmail: string): Promise<ITimesheetEntry[]>;
/**
 * Get team entries for the manager dashboard.
 * Optionally filter by status and/or employee email.
 */
export declare function getTeamEntries(startDate: Date, endDate: Date, options?: {
    employeeEmail?: string;
    status?: TimesheetStatus;
}): Promise<ITimesheetEntry[]>;
/**
 * Get entries for export with optional filters (for ExportPanel).
 */
export declare function getEntriesForExport(startDate: Date, endDate: Date, options?: {
    employeeEmail?: string;
    projectId?: number;
    status?: TimesheetStatus;
}): Promise<ITimesheetEntry[]>;
/**
 * Create a new timesheet entry (single task row).
 */
export declare function createEntry(entry: ITimesheetEntry): Promise<number>;
/**
 * Update specific fields on an existing entry.
 */
export declare function updateEntry(id: number, changes: Partial<ITimesheetEntry>): Promise<void>;
/**
 * Delete a timesheet entry by ID.
 */
export declare function deleteEntry(id: number): Promise<void>;
/**
 * Save or update all task rows for a day as Draft.
 * - New rows (no id) → createEntry
 * - Existing rows (have id) → updateEntry
 * - IDs in deletedIds → deleteEntry
 */
export declare function saveDraftEntries(rows: ITaskRow[], deletedIds: number[], baseEntry: Pick<ITimesheetEntry, 'employeeId' | 'employeeName' | 'employeeEmail' | 'entryDate'>): Promise<ITaskRow[]>;
/**
 * Submit all entries for a day (set Status = "Submitted", SubmittedOn = now).
 * Assumes all rows have already been saved (have IDs).
 */
export declare function submitDayEntries(entryIds: number[]): Promise<void>;
/**
 * Approve all entries for a given employee+day.
 */
export declare function approveDayEntries(entryIds: number[], reviewerName: string): Promise<void>;
/**
 * Reject all entries for a given employee+day with manager comments.
 */
export declare function rejectDayEntries(entryIds: number[], reviewerName: string, managerComments: string): Promise<void>;
//# sourceMappingURL=TimesheetService.d.ts.map