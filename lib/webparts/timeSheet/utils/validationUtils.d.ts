import { ITaskRow } from '../models/ITimesheetModels';
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
export declare function validateTaskRows(rows: ITaskRow[]): IValidationResult;
/**
 * Get field-level errors for a specific row.
 */
export declare function getRowErrors(errors: IRowValidationError[], rowKey: string): Record<string, string>;
//# sourceMappingURL=validationUtils.d.ts.map