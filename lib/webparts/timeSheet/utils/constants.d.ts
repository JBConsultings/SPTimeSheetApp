export declare const LISTS: {
    readonly TIMESHEET_ENTRIES: "TimesheetEntries";
    readonly PROJECTS: "Projects";
    readonly ACTIVITY_CATEGORIES: "ActivityCategories";
};
export declare const GROUPS: {
    readonly ADMINS: "Timesheet-Admins";
    readonly MANAGERS: "Timesheet-Managers";
};
export declare const TIMESHEET_COLS: {
    readonly EMPLOYEE_ID: "EmployeeId";
    readonly EMPLOYEE_NAME: "EmployeeName";
    readonly EMPLOYEE_EMAIL: "EmployeeEmail";
    readonly ENTRY_DATE: "EntryDate";
    readonly PROJECT_ID: "ProjectId";
    readonly PROJECT_NAME: "ProjectName";
    readonly ACTIVITY_CATEGORY_ID: "ActivityCategoryId";
    readonly ACTIVITY_CATEGORY_NAME: "ActivityCategoryName";
    readonly TASK_DESCRIPTION: "TaskDescription";
    readonly HOURS_SPENT: "HoursSpent";
    readonly STATUS: "Status";
    readonly MANAGER_COMMENTS: "ManagerComments";
    readonly SUBMITTED_ON: "SubmittedOn";
    readonly REVIEWED_BY: "ReviewedBy";
    readonly REVIEWED_ON: "ReviewedOn";
    readonly WEEK_START_DATE: "WeekStartDate";
};
export declare const PROJECT_COLS: {
    readonly PROJECT_CODE: "ProjectCode";
    readonly DESCRIPTION: "Description";
    readonly IS_ACTIVE: "IsActive";
    readonly CLIENT_NAME: "ClientName";
    readonly START_DATE: "StartDate";
    readonly END_DATE: "EndDate";
};
export declare const CATEGORY_COLS: {
    readonly DESCRIPTION: "Description";
    readonly IS_ACTIVE: "IsActive";
    readonly SORT_ORDER: "SortOrder";
};
export declare const STATUS: {
    readonly DRAFT: "Draft";
    readonly SUBMITTED: "Submitted";
    readonly APPROVED: "Approved";
    readonly REJECTED: "Rejected";
};
export declare const MAX_HOURS_PER_DAY = 24;
export declare const MIN_HOURS_PER_TASK = 0.25;
//# sourceMappingURL=constants.d.ts.map