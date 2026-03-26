declare interface ITimeSheetWebPartStrings {
  // ── SPFx boilerplate ──────────────────────────────────────────────────────
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;

  // ── Shared ────────────────────────────────────────────────────────────────
  Home: string;
  Loading: string;
  Save: string;
  Cancel: string;
  Confirm: string;
  Close: string;
  Edit: string;
  Add: string;
  Delete: string;
  Active: string;
  Inactive: string;
  Saving: string;
  StatusDraft: string;
  StatusSubmitted: string;
  StatusApproved: string;
  StatusRejected: string;
  AllStatuses: string;
  Project: string;
  Category: string;
  Hours: string;
  Description: string;
  Date: string;
  From: string;
  To: string;
  Status: string;
  Employee: string;
  Actions: string;
  Hrs: string;
  Total: string;

  // ── HomePage ──────────────────────────────────────────────────────────────
  DashboardTitle: string;
  WelcomeMessage: string;
  QuickAccess: string;
  QuickAccessSubtitle: string;
  NavMyTimesheet: string;
  NavMyTimesheetSub: string;
  NavMySubmissions: string;
  NavMySubmissionsSub: string;
  NavTeamTimesheets: string;
  NavTeamTimesheetsSub: string;
  NavExportReport: string;
  NavExportReportSub: string;
  NavManageProjects: string;
  NavManageProjectsSub: string;

  // ── CalendarView ──────────────────────────────────────────────────────────
  CalendarTitle: string;
  MonthNames: string[];
  DayNamesShort: string[];
  DayNamesFull: string[];
  LegendHint: string;
  NoEntriesHint: string;
  EntriesThisPeriod: string;
  ClickToEdit: string;
  ClickToAdd: string;
  TaskLabel: string;
  SelectProject: string;
  SelectCategory: string;
  WhatDidYouWorkOn: string;
  HrsTotal: string;
  OverLimit: string;
  ConfirmSubmit: string;
  YesSubmit: string;
  SubmittedAwaiting: string;
  ManagerFeedback: string;
  RemoveTask: string;
  AddAnotherTask: string;
  SaveDraft: string;
  Submit: string;
  SaveDraftSuccess: string;
  SaveDraftFailed: string;
  SubmitSuccess: string;
  SubmitFailed: string;
  LoadFailed: string;

  // ── DailyTimesheetForm ────────────────────────────────────────────────────
  DailyTimesheetTitle: string;
  PreviousDay: string;
  NextDay: string;
  ActivityCategory: string;
  TaskDescription: string;
  SelectProjectOpt: string;
  SelectCategoryOpt: string;
  DescribePlaceholder: string;
  AddTask: string;
  Exceeds24h: string;
  ConfirmSubmitDate: string;
  SubmittedAwaitingReview: string;
  RemoveRow: string;
  ManagerCommentLabel: string;

  // ── ManagerDashboard ──────────────────────────────────────────────────────
  TeamTimesheetsTitle: string;
  FilterByEmail: string;
  NoTimesheetsFound: string;
  NoTimesheetsHint: string;
  ApproveBtn: string;
  RejectBtn: string;
  RequestResubmitBtn: string;
  ApproveModal: string;
  RejectModal: string;
  RequestResubmitModal: string;
  ConfirmApprove: string;
  SendResubmit: string;
  ConfirmReject: string;
  ManagerCommentPlaceholder: string;
  ApprovedMsg: string;
  RejectedMsg: string;
  ResubmitMsg: string;
  LoadTeamFailed: string;
  LoadingTeam: string;
  Processing: string;
  Tasks: string;

  // ── MyTimesheetHistory ────────────────────────────────────────────────────
  HistoryTitle: string;
  NoEntriesFound: string;
  NoEntriesHintHistory: string;
  LoadHistoryFailed: string;
  LoadingHistory: string;
  Showing: string;
  Days: string;

  // ── AdminPanel ────────────────────────────────────────────────────────────
  AdminTitle: string;
  AdminSubtitle: string;
  ProjectsTab: string;
  CategoriesTab: string;
  AddProject: string;
  AddCategory: string;
  ProjectName: string;
  ProjectCode: string;
  ClientName: string;
  SortOrder: string;
  ProjectNamePlaceholder: string;
  ProjectCodePlaceholder: string;
  ClientNamePlaceholder: string;
  CategoryNamePlaceholder: string;
  OptionalDescription: string;
  EditProject: string;
  AddProjectModal: string;
  EditCategory: string;
  AddCategoryModal: string;
  UpdateProject: string;
  UpdateCategory: string;
  ProjectRequired: string;
  CategoryRequired: string;
  ProjectUpdated: string;
  ProjectAdded: string;
  ProjectSaveFailed: string;
  CategoryUpdated: string;
  CategoryAdded: string;
  CategorySaveFailed: string;
  LoadProjectsFailed: string;
  LoadCategoriesFailed: string;
  LoadingProjects: string;
  LoadingCategories: string;
  NoProjects: string;
  NoCategories: string;
  Code: string;
  Activate: string;
  Deactivate: string;
  BackToHome: string;

  // ── ExportPanel ───────────────────────────────────────────────────────────
  ExportTitle: string;
  FilterOptions: string;
  EmployeeEmail: string;
  Optional: string;
  EmailPlaceholder: string;
  PreviewData: string;
  ExportExcel: string;
  ExportPdf: string;
  Exporting: string;
  LoadingData: string;
  LoadExportFailed: string;
  ExcelSuccess: string;
  ExcelFailed: string;
  PdfSuccess: string;
  PdfFailed: string;
  Records: string;
  TotalHours: string;
  Employees: string;
  Period: string;
  NoDataFound: string;
  NoDataHint: string;

  // ── DashboardAnalytics ────────────────────────────────────────────────────
  AnalyticsTitle: string;
  AnalyticsSubtitle: string;
  TotalHoursCard: string;
  ThisMonth: string;
  AvgDaily: string;
  Last7Days: string;
  SubmittedCard: string;
  ThisWeek: string;
  ApprovedCard: string;
  Last7DaysChart: string;
  WeekDistribution: string;
  MonthlyByProject: string;
  RecentActivity: string;
  NoRecentActivity: string;
  LoadingAnalytics: string;
  AnalyticsFailed: string;
  NoAnalyticsData: string;

  // ── Team DashboardAnalytics ───────────────────────────────────────────────
  TeamAnalyticsTitle: string;
  TeamAnalyticsSubtitle: string;
  MyAnalyticsToggle: string;
  TeamAnalyticsToggle: string;
  TotalTeamHoursCard: string;
  ActiveEmployeesCard: string;
  PendingApprovalsCard: string;
  ApprovedThisMonthCard: string;
  HoursByEmployee: string;
  TeamWeekDistribution: string;
  TeamLast7DaysChart: string;

  // ── App shell ─────────────────────────────────────────────────────────────
  LoadingApp: string;
  LoadFailedApp: string;
  UserProfileFailed: string;
  LoadingEllipsis: string;
}

declare module 'TimeSheetWebPartStrings' {
  const strings: ITimeSheetWebPartStrings;
  export = strings;
}
