"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.REGULAR_HOURS_PER_DAY = exports.MIN_HOURS_PER_TASK = exports.MAX_HOURS_PER_DAY = exports.STATUS = exports.CATEGORY_COLS = exports.PROJECT_COLS = exports.TIMESHEET_COLS = exports.GROUPS = exports.LISTS = void 0;
// ─── SharePoint List names ────────────────────────────────────────────────────
exports.LISTS = {
    TIMESHEET_ENTRIES: 'TimesheetEntries',
    PROJECTS: 'Projects',
    ACTIVITY_CATEGORIES: 'ActivityCategories',
};
// ─── SharePoint Group names ───────────────────────────────────────────────────
exports.GROUPS = {
    ADMINS: 'Timesheet-Admins',
    MANAGERS: 'Timesheet-Managers',
};
// ─── TimesheetEntries column internal names ───────────────────────────────────
exports.TIMESHEET_COLS = {
    EMPLOYEE_ID: 'EmployeeId',
    EMPLOYEE_NAME: 'EmployeeName',
    EMPLOYEE_EMAIL: 'EmployeeEmail',
    ENTRY_DATE: 'EntryDate',
    PROJECT_ID: 'ProjectId',
    PROJECT_NAME: 'ProjectName',
    ACTIVITY_CATEGORY_ID: 'ActivityCategoryId',
    ACTIVITY_CATEGORY_NAME: 'ActivityCategoryName',
    TASK_DESCRIPTION: 'TaskDescription',
    HOURS_SPENT: 'HoursSpent',
    STATUS: 'Status',
    MANAGER_COMMENTS: 'ManagerComments',
    SUBMITTED_ON: 'SubmittedOn',
    REVIEWED_BY: 'ReviewedBy',
    REVIEWED_ON: 'ReviewedOn',
    WEEK_START_DATE: 'WeekStartDate',
};
// ─── Projects list column names ───────────────────────────────────────────────
exports.PROJECT_COLS = {
    PROJECT_CODE: 'ProjectCode',
    DESCRIPTION: 'Description',
    IS_ACTIVE: 'IsActive',
    CLIENT_NAME: 'ClientName',
    START_DATE: 'StartDate',
    END_DATE: 'EndDate',
};
// ─── ActivityCategories list column names ─────────────────────────────────────
exports.CATEGORY_COLS = {
    DESCRIPTION: 'Description',
    IS_ACTIVE: 'IsActive',
    SORT_ORDER: 'SortOrder',
};
// ─── Timesheet Status values ──────────────────────────────────────────────────
exports.STATUS = {
    DRAFT: 'Draft',
    SUBMITTED: 'Submitted',
    APPROVED: 'Approved',
    REJECTED: 'Rejected',
};
// ─── Validation limits ────────────────────────────────────────────────────────
exports.MAX_HOURS_PER_DAY = 24;
exports.MIN_HOURS_PER_TASK = 0.25;
exports.REGULAR_HOURS_PER_DAY = 8;
//# sourceMappingURL=constants.js.map