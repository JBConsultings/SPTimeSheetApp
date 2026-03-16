// ─── Roles ────────────────────────────────────────────────────────────────────
export type UserRole = 'Employee' | 'Manager' | 'Admin';

// ─── Timesheet status values (match SP Choice column exactly) ─────────────────
export type TimesheetStatus = 'Draft' | 'Submitted' | 'Approved' | 'Rejected';

// ─── State-based navigation views ─────────────────────────────────────────────
export type AppView =
  | 'Home'
  | 'DailyForm'
  | 'MyHistory'
  | 'ManagerDashboard'
  | 'AdminPanel'
  | 'ExportPanel';

// ─── Current authenticated user ───────────────────────────────────────────────
export interface ICurrentUser {
  id: number;
  displayName: string;
  email: string;
  loginName: string;
  role: UserRole;
}

// ─── Core timesheet entry (one task row per day) ──────────────────────────────
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

// ─── A single editable row in the daily task grid ─────────────────────────────
export interface ITaskRow {
  rowKey: string;                // uuid for React key, not persisted
  id?: number;                   // SP item ID if already saved
  projectId: number;
  projectName: string;
  activityCategoryId: number;
  activityCategoryName: string;
  taskDescription: string;
  hoursSpent: number;
  isDirty: boolean;
}

// ─── Projects master ──────────────────────────────────────────────────────────
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

// ─── Activity categories master ───────────────────────────────────────────────
export interface IActivityCategory {
  id: number;
  title: string;
  description?: string;
  isActive: boolean;
  sortOrder?: number;
}

// ─── History view — entries grouped by day ────────────────────────────────────
export interface IDailySummary {
  date: Date;
  entries: ITimesheetEntry[];
  totalHours: number;
  status: TimesheetStatus;  // dominant status for the day
}

// ─── Manager dashboard — team row ─────────────────────────────────────────────
export interface ITeamTimesheetRow {
  employeeEmail: string;
  employeeName: string;
  entryDate: Date;
  entries: ITimesheetEntry[];
  totalHours: number;
  status: TimesheetStatus;
}

// ─── Export filter ────────────────────────────────────────────────────────────
export interface IExportFilter {
  startDate: Date;
  endDate: Date;
  employeeEmail?: string;
  projectId?: number;
  status?: TimesheetStatus;
}

// ─── Navigation state ─────────────────────────────────────────────────────────
export interface IAppNavigationState {
  currentView: AppView;
  selectedDate?: Date;
  selectedEmployeeEmail?: string;
}
