// ─── SharePoint List names ────────────────────────────────────────────────────
export var LISTS = {
    TIMESHEET_ENTRIES: 'TimesheetEntries',
    PROJECTS: 'Projects',
    ACTIVITY_CATEGORIES: 'ActivityCategories',
};
// ─── SharePoint Group names ───────────────────────────────────────────────────
export var GROUPS = {
    ADMINS: 'Timesheet-Admins',
    MANAGERS: 'Timesheet-Managers',
};
// ─── TimesheetEntries column internal names ───────────────────────────────────
export var TIMESHEET_COLS = {
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
export var PROJECT_COLS = {
    PROJECT_CODE: 'ProjectCode',
    DESCRIPTION: 'Description',
    IS_ACTIVE: 'IsActive',
    CLIENT_NAME: 'ClientName',
    START_DATE: 'StartDate',
    END_DATE: 'EndDate',
};
// ─── ActivityCategories list column names ─────────────────────────────────────
export var CATEGORY_COLS = {
    DESCRIPTION: 'Description',
    IS_ACTIVE: 'IsActive',
    SORT_ORDER: 'SortOrder',
};
// ─── Timesheet Status values ──────────────────────────────────────────────────
export var STATUS = {
    DRAFT: 'Draft',
    SUBMITTED: 'Submitted',
    APPROVED: 'Approved',
    REJECTED: 'Rejected',
};
// ─── Validation limits ────────────────────────────────────────────────────────
export var MAX_HOURS_PER_DAY = 24;
export var MIN_HOURS_PER_TASK = 0.25;
//# sourceMappingURL=constants.js.map