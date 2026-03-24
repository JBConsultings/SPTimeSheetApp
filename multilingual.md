# SPFx TimeSheet — Multilingual Guide

## How It Works

SharePoint automatically loads the matching locale file from `src/webparts/timeSheet/loc/` based on the user's **SharePoint UI language**. No library required — this is SPFx's built-in AMD module system.

```
User language → SharePoint runtime → loads loc/fr-fr.js → React renders French
```

If no file matches the user's language, SPFx falls back to **en-us.js**.

---

## Supported Languages

| Locale Code | Language | File | RTL |
|-------------|----------|------|-----|
| `en-us`     | English  | `loc/en-us.js` | No |
| `fr-fr`     | French   | `loc/fr-fr.js` | No |
| `de-de`     | German   | `loc/de-de.js` | No |
| `ar-sa`     | Arabic   | `loc/ar-sa.js` | Yes |

---

## Project Structure

```
src/webparts/timeSheet/
├── loc/
│   ├── mystrings.d.ts      ← TypeScript interface for all string keys
│   ├── en-us.js            ← English (default/fallback)
│   ├── fr-fr.js            ← French
│   ├── de-de.js            ← German
│   └── ar-sa.js            ← Arabic (RTL)
└── utils/
    └── fmt.ts              ← Token replacement helper: fmt("Hello {name}", { name })
```

---

## Key Naming Conventions

| Category | Pattern | Example |
|----------|---------|---------|
| Shared UI | PascalCase noun | `Cancel`, `Save`, `Close` |
| Status labels | `Status` + value | `StatusDraft`, `StatusApproved` |
| Page titles | `{View}Title` | `CalendarTitle`, `HistoryTitle` |
| Nav cards | `Nav{View}` / `Nav{View}Sub` | `NavMyTimesheet`, `NavMyTimesheetSub` |
| Buttons | action + noun | `SaveDraft`, `AddTask`, `ExportExcel` |
| Messages (success) | verb + `Success` | `SaveDraftSuccess`, `SubmitSuccess` |
| Messages (error) | verb + `Failed` | `SaveDraftFailed`, `LoadTeamFailed` |
| Arrays | plural noun | `MonthNames`, `DayNamesShort`, `DayNamesFull` |
| Dynamic strings | `{placeholder}` tokens | `"Welcome, {name} · {role}"` |

---

## Dynamic Strings (Token Replacement)

Strings with runtime values use `{token}` placeholders. Use the `fmt()` helper to substitute them:

```typescript
import * as strings from 'TimeSheetWebPartStrings';
import { fmt } from '../utils/fmt';

// "Welcome, John · Manager"
fmt(strings.WelcomeMessage, { name: 'John', role: 'Manager' })

// "Task 3"
fmt(strings.TaskLabel, { n: 3 })

// "Submit timesheet for Monday, 24 March 2026?"
fmt(strings.ConfirmSubmitDate, { date: 'Monday, 24 March 2026' })
```

---

## How to Add a New Language

1. **Copy** `src/webparts/timeSheet/loc/en-us.js` to e.g. `loc/es-es.js`
2. **Translate** every string value (keep all keys identical — never rename or add/remove keys)
3. **Arrays** like `MonthNames` and `DayNamesFull` must have exactly 12 and 7 items respectively
4. **Update** `config/package-solution.json` — add the locale code to `supportedLocales`:
   ```json
   "supportedLocales": ["en-us", "fr-fr", "de-de", "ar-sa", "es-es"]
   ```
5. **Test** locally by setting `"locale": "es-es"` in `config/serve.json`, then run `gulp serve`

> **RTL languages** (Arabic, Hebrew, etc.): also add `dir="rtl"` to the root container and add RTL SCSS overrides.

---

## Testing Locale Switching

### Local (gulp serve)
Edit `config/serve.json`:
```json
{
  "locale": "fr-fr"
}
```
Run `gulp serve` — the entire UI renders in French.

### In SharePoint
1. Go to **Site Settings → Language Settings**
2. Add the target language and set it as the default
3. Users can also set their personal language in **My Profile → Language and Region**
4. Re-open the webpart — strings load from the matching locale file automatically

---

## String Key Reference

### Shared
`Home` · `Loading` · `Save` · `Cancel` · `Confirm` · `Close` · `Edit` · `Add` · `Delete` · `Active` · `Inactive` · `Saving` · `StatusDraft` · `StatusSubmitted` · `StatusApproved` · `StatusRejected` · `AllStatuses` · `Project` · `Category` · `Hours` · `Description` · `Date` · `From` · `To` · `Status` · `Employee` · `Actions` · `Hrs` · `Total`

### HomePage
`DashboardTitle` · `WelcomeMessage` · `QuickAccess` · `QuickAccessSubtitle` · `NavMyTimesheet` · `NavMyTimesheetSub` · `NavMySubmissions` · `NavMySubmissionsSub` · `NavTeamTimesheets` · `NavTeamTimesheetsSub` · `NavExportReport` · `NavExportReportSub` · `NavManageProjects` · `NavManageProjectsSub`

### CalendarView
`CalendarTitle` · `MonthNames[]` · `DayNamesShort[]` · `DayNamesFull[]` · `LegendHint` · `NoEntriesHint` · `EntriesThisPeriod` · `ClickToEdit` · `ClickToAdd` · `TaskLabel` · `SelectProject` · `SelectCategory` · `WhatDidYouWorkOn` · `HrsTotal` · `OverLimit` · `ConfirmSubmit` · `YesSubmit` · `SubmittedAwaiting` · `ManagerFeedback` · `RemoveTask` · `AddAnotherTask` · `SaveDraft` · `Submit` · `SaveDraftSuccess` · `SaveDraftFailed` · `SubmitSuccess` · `SubmitFailed` · `LoadFailed`

### ManagerDashboard
`TeamTimesheetsTitle` · `FilterByEmail` · `NoTimesheetsFound` · `NoTimesheetsHint` · `ApproveBtn` · `RejectBtn` · `RequestResubmitBtn` · `ApproveModal` · `RejectModal` · `RequestResubmitModal` · `ConfirmApprove` · `SendResubmit` · `ConfirmReject` · `ManagerCommentPlaceholder` · `ApprovedMsg` · `RejectedMsg` · `ResubmitMsg` · `LoadTeamFailed` · `LoadingTeam` · `Processing`

### MyTimesheetHistory
`HistoryTitle` · `NoEntriesFound` · `NoEntriesHintHistory` · `LoadHistoryFailed` · `LoadingHistory` · `Tasks` · `Showing` · `Days`

### AdminPanel
`AdminTitle` · `AdminSubtitle` · `ProjectsTab` · `CategoriesTab` · `AddProject` · `AddCategory` · `ProjectName` · `ProjectCode` · `ClientName` · `SortOrder` · `ProjectNamePlaceholder` · `ProjectCodePlaceholder` · `ClientNamePlaceholder` · `CategoryNamePlaceholder` · `OptionalDescription` · `EditProject` · `AddProjectModal` · `EditCategory` · `AddCategoryModal` · `UpdateProject` · `UpdateCategory` · `ProjectRequired` · `CategoryRequired` · `ProjectUpdated` · `ProjectAdded` · `ProjectSaveFailed` · `CategoryUpdated` · `CategoryAdded` · `CategorySaveFailed` · `LoadProjectsFailed` · `LoadCategoriesFailed` · `LoadingProjects` · `LoadingCategories` · `NoProjects` · `NoCategories` · `Code` · `Activate` · `Deactivate` · `BackToHome`

### ExportPanel
`ExportTitle` · `FilterOptions` · `EmployeeEmail` · `Optional` · `EmailPlaceholder` · `PreviewData` · `ExportExcel` · `ExportPdf` · `Exporting` · `LoadingData` · `LoadExportFailed` · `ExcelSuccess` · `ExcelFailed` · `PdfSuccess` · `PdfFailed` · `Records` · `TotalHours` · `Employees` · `Period` · `NoDataFound` · `NoDataHint`

### DashboardAnalytics
`AnalyticsTitle` · `AnalyticsSubtitle` · `TotalHoursCard` · `ThisMonth` · `AvgDaily` · `Last7Days` · `SubmittedCard` · `ThisWeek` · `ApprovedCard` · `Last7DaysChart` · `WeekDistribution` · `MonthlyByProject` · `RecentActivity` · `NoRecentActivity` · `LoadingAnalytics` · `AnalyticsFailed` · `NoAnalyticsData`

### App Shell / TimeSheet.tsx
`LoadingApp` · `LoadFailedApp` · `UserProfileFailed` · `LoadingEllipsis`
