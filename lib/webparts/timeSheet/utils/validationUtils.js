import { MAX_HOURS_PER_DAY, MIN_HOURS_PER_TASK } from './constants';
/**
 * Validate all task rows for a daily timesheet submission.
 */
export function validateTaskRows(rows) {
    var errors = [];
    rows.forEach(function (row) {
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
            errors.push({ rowKey: row.rowKey, field: 'hoursSpent', message: "Minimum ".concat(MIN_HOURS_PER_TASK, " hour required.") });
        }
    });
    var totalHours = rows.reduce(function (sum, r) { return sum + (r.hoursSpent || 0); }, 0);
    var dayTotalError;
    if (totalHours > MAX_HOURS_PER_DAY) {
        dayTotalError = "Total hours (".concat(totalHours, ") exceed the maximum of ").concat(MAX_HOURS_PER_DAY, " hours per day.");
    }
    return {
        valid: errors.length === 0 && !dayTotalError,
        errors: errors,
        dayTotalError: dayTotalError,
    };
}
/**
 * Get field-level errors for a specific row.
 */
export function getRowErrors(errors, rowKey) {
    return errors
        .filter(function (e) { return e.rowKey === rowKey; })
        .reduce(function (acc, e) {
        acc[e.field] = e.message;
        return acc;
    }, {});
}
//# sourceMappingURL=validationUtils.js.map