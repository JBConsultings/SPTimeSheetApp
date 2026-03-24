// ─── SharePoint List names ────────────────────────────────────────────────────
export const LISTS = {
  TIMESHEET_ENTRIES: 'TimesheetEntries',
  PROJECTS: 'Projects',
  ACTIVITY_CATEGORIES: 'ActivityCategories',
} as const;

// ─── SharePoint Group names ───────────────────────────────────────────────────
export const GROUPS = {
  ADMINS: 'Timesheet-Admins',
  MANAGERS: 'Timesheet-Managers',
} as const;

// ─── TimesheetEntries column internal names ───────────────────────────────────
export const TIMESHEET_COLS = {
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
} as const;

// ─── Projects list column names ───────────────────────────────────────────────
export const PROJECT_COLS = {
  PROJECT_CODE: 'ProjectCode',
  DESCRIPTION: 'Description',
  IS_ACTIVE: 'IsActive',
  CLIENT_NAME: 'ClientName',
  START_DATE: 'StartDate',
  END_DATE: 'EndDate',
} as const;

// ─── ActivityCategories list column names ─────────────────────────────────────
export const CATEGORY_COLS = {
  DESCRIPTION: 'Description',
  IS_ACTIVE: 'IsActive',
  SORT_ORDER: 'SortOrder',
} as const;

// ─── Timesheet Status values ──────────────────────────────────────────────────
export const STATUS = {
  DRAFT: 'Draft',
  SUBMITTED: 'Submitted',
  APPROVED: 'Approved',
  REJECTED: 'Rejected',
} as const;

// ─── Validation limits ────────────────────────────────────────────────────────
export const MAX_HOURS_PER_DAY = 24;
export const MIN_HOURS_PER_TASK = 0.25;
export const REGULAR_HOURS_PER_DAY = 8;
