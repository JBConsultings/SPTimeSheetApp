export type UserRole = 'Employee' | 'Manager' | 'Admin';
export type TimesheetStatus = 'Draft' | 'Submitted' | 'Approved' | 'Rejected';
export type AppView = 'Home' | 'DailyForm' | 'MyHistory' | 'ManagerDashboard' | 'AdminPanel' | 'ExportPanel';
export interface ICurrentUser {
    id: number;
    displayName: string;
    email: string;
    loginName: string;
    role: UserRole;
}
export interface ITimesheetEntry {
    id?: number;
    title?: string;
    employeeId: number;
    employeeName: string;
    employeeEmail: string;
    entryDate: Date;
    projectId: number;
    projectName: string;
    activityCategoryId: number;
    activityCategoryName: string;
    taskDescription: string;
    hoursSpent: number;
    status: TimesheetStatus;
    managerComments?: string;
    submittedOn?: Date;
    reviewedBy?: string;
    reviewedOn?: Date;
    weekStartDate?: Date;
}
export interface ITaskRow {
    rowKey: string;
    id?: number;
    projectId: number;
    projectName: string;
    activityCategoryId: number;
    activityCategoryName: string;
    taskDescription: string;
    hoursSpent: number;
    isDirty: boolean;
}
export interface IProject {
    id: number;
    title: string;
    projectCode: string;
    description?: string;
    isActive: boolean;
    clientName?: string;
    startDate?: Date;
    endDate?: Date;
}
export interface IActivityCategory {
    id: number;
    title: string;
    description?: string;
    isActive: boolean;
    sortOrder?: number;
}
export interface IDailySummary {
    date: Date;
    entries: ITimesheetEntry[];
    totalHours: number;
    status: TimesheetStatus;
}
export interface ITeamTimesheetRow {
    employeeEmail: string;
    employeeName: string;
    entryDate: Date;
    entries: ITimesheetEntry[];
    totalHours: number;
    status: TimesheetStatus;
}
export interface IExportFilter {
    startDate: Date;
    endDate: Date;
    employeeEmail?: string;
    projectId?: number;
    status?: TimesheetStatus;
}
export interface IAppNavigationState {
    currentView: AppView;
    selectedDate?: Date;
    selectedEmployeeEmail?: string;
}
//# sourceMappingURL=ITimesheetModels.d.ts.map