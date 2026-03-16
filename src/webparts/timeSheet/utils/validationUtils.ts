import { ITaskRow } from '../models/ITimesheetModels';
import { MAX_HOURS_PER_DAY, MIN_HOURS_PER_TASK } from './constants';

export interface IRowValidationError {
  rowKey: string;
  field: string;
  message: string;
}

export interface IValidationResult {
  valid: boolean;
  errors: IRowValidationError[];
  dayTotalError?: string;
}

/**
 * Validate all task rows for a daily timesheet submission.
 */
export function validateTaskRows(rows: ITaskRow[]): IValidationResult {
  const errors: IRowValidationError[] = [];

  rows.forEach((row) => {
    if (!row.projectId) {
      errors.push({ rowKey: row.rowKey, field: 'projectId', message: 'Project is required.' });
    }
    if (!row.activityCategoryId) {
      errors.push({ rowKey: row.rowKey, field: 'activityCategoryId', message: 'Activity category is required.' });
    }
    if (!row.taskDescription || row.taskDescription.trim().length === 0) {
      errors.push({ rowKey: row.rowKey, field: 'taskDescription', message: 'Task description is required.' });
    }
    if (!row.hoursSpent || row.hoursSpent < MIN_HOURS_PER_TASK) {
      errors.push({ rowKey: row.rowKey, field: 'hoursSpent', message: `Minimum ${MIN_HOURS_PER_TASK} hour required.` });
    }
  });

  const totalHours = rows.reduce((sum, r) => sum + (r.hoursSpent || 0), 0);
  let dayTotalError: string | undefined;
  if (totalHours > MAX_HOURS_PER_DAY) {
    dayTotalError = `Total hours (${totalHours}) exceed the maximum of ${MAX_HOURS_PER_DAY} hours per day.`;
  }

  return {
    valid: errors.length === 0 && !dayTotalError,
    errors,
    dayTotalError,
  };
}

/**
 * Get field-level errors for a specific row.
 */
export function getRowErrors(errors: IRowValidationError[], rowKey: string): Record<string, string> {
  return errors
    .filter((e) => e.rowKey === rowKey)
    .reduce<Record<string, string>>((acc, e) => {
      acc[e.field] = e.message;
      return acc;
    }, {});
}
