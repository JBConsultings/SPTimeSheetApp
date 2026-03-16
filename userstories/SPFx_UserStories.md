# Daily Timesheet — SPFx Web Part User Stories

**Project:** SharePoint Daily Timesheet Application
**Framework:** SPFx 1.22.2 + React 17 + Fluent UI v8
**Scope:** SPFx Web Part only (Power Automate flows handled separately)
**Date:** 2026-03-09

---

## Roles

| Role | Description |
|---|---|
| **Employee** | Creates and submits their own daily timesheets |
| **Manager** | Reviews team timesheets, approves/rejects, manages projects & categories, exports reports |
| **Admin** | All manager capabilities + visibility across all employees |

**Role Detection:** SharePoint groups — `Timesheet-Admins` (Admin), `Timesheet-Managers` (Manager), all others (Employee)

---

## SharePoint Lists Required

| List | Purpose |
|---|---|
| `TimesheetEntries` | Core transaction table — one item per task per day per employee |
| `Projects` | Master list of projects (managed by Manager/Admin) |
| `ActivityCategories` | Master list of activity categories (managed by Manager/Admin) |

---

## EPIC 1: Authentication & Navigation

---

### US-001: Automatic Role Detection

**As a** user,
**I want** the app to automatically detect my role when I open the web part,
**So that** I only see functionality appropriate to my role without any manual configuration.

**Acceptance Criteria:**
- [ ] On load, the app queries SharePoint group membership via REST (`/_api/web/currentuser/groups`)
- [ ] Role precedence: `Timesheet-Admins` → Admin | `Timesheet-Managers` → Manager | else → Employee
- [ ] Role is stored in React Context and does not require re-fetching during the session
- [ ] A loading spinner is shown while role detection is in progress
- [ ] If group check fails, the app defaults to Employee role and shows a warning

**SPFx Components:** `services/UserService.ts`, `hooks/useCurrentUser.ts`, `views/TimeSheetApp.tsx`
**SharePoint Lists:** None (SP Groups API)

---

### US-002: Home Page Navigation Hub

**As a** user,
**I want** to see a home page with cards for the sections I am allowed to access,
**So that** I can quickly navigate to any part of the application.

**Acceptance Criteria:**
- [ ] **Employee** sees cards: "My Timesheet Today", "My Timesheet History"
- [ ] **Manager** sees all Employee cards plus: "Team Timesheets", "Manage Projects", "Manage Categories", "Export Report"
- [ ] **Admin** sees all Manager cards
- [ ] Each card shows an icon, title, and short description
- [ ] Clicking a card navigates to the corresponding view
- [ ] A persistent **Home** button (house icon) appears in the app header on all non-Home views
- [ ] Clicking the Home button returns the user to the Home page from any view

**SPFx Components:** `views/HomePage.tsx`, `components/shared/AppHeader.tsx`

---

## EPIC 2: Employee — Daily Timesheet Entry

---

### US-003: Navigate Between Days

**As an** employee,
**I want** to navigate forward and backward between calendar days in the timesheet form,
**So that** I can enter or update timesheets for any specific day (not locked to week view).

**Acceptance Criteria:**
- [ ] A day navigator displays the current selected date (e.g., "Monday, 9 March 2026")
- [ ] Left arrow (`<`) navigates to the previous day; right arrow (`>`) navigates to the next day
- [ ] A date picker allows jumping directly to any specific date
- [ ] Future dates beyond today are disabled — employees cannot create timesheets for future dates
- [ ] When the selected day changes, the task grid reloads entries for that date
- [ ] Default selected date is today when the form opens

**SPFx Components:** `components/daily/DayNavigator.tsx`, `views/DailyTimesheetForm.tsx`
**SharePoint Lists:** TimesheetEntries

---

### US-004: Add Multiple Tasks Per Day

**As an** employee,
**I want** to add multiple task rows to a single day's timesheet,
**So that** I can record all distinct work activities performed that day.

**Acceptance Criteria:**
- [ ] The form loads with one blank task row when no entries exist for the selected day
- [ ] An **"Add Task"** button appends a new blank row below existing rows (no upper limit on rows)
- [ ] Each task row contains:
  - Project dropdown (active projects from Projects list)
  - Activity Category dropdown (active categories from ActivityCategories list, ordered by SortOrder)
  - Task Description text field (multi-line)
  - Hours field (numeric, step 0.25, min 0.25)
- [ ] A delete (trash) icon on each row removes that row (at least 1 row must remain)
- [ ] Total hours for the day are shown below the grid and update in real time
- [ ] A validation error is shown if total hours for the day exceed 24
- [ ] Each task row is saved as a **separate item** in the TimesheetEntries SP list

**SPFx Components:** `components/daily/TaskGrid.tsx`, `components/daily/TaskRow.tsx`, `components/daily/TaskRowActions.tsx`, `components/daily/DailyTotals.tsx`
**SharePoint Lists:** TimesheetEntries, Projects, ActivityCategories

---

### US-005: Save Draft Timesheet

**As an** employee,
**I want** to save my timesheet as a Draft without submitting it,
**So that** I can return and continue editing before the final submission.

**Acceptance Criteria:**
- [ ] A **"Save Draft"** button is visible when the form is editable
- [ ] Clicking saves all current task rows with `Status = "Draft"`
- [ ] New task rows (no SP item ID) are created via POST
- [ ] Existing task rows (have SP item ID) are updated via PATCH
- [ ] Task rows deleted from the UI are deleted from SharePoint
- [ ] A success notification (toast/MessageBar) confirms the save
- [ ] A draft badge or label is shown on the day's entry in the history view
- [ ] The form remains editable after saving draft

**SPFx Components:** `views/DailyTimesheetForm.tsx`, `services/TimesheetService.ts`
**SharePoint Lists:** TimesheetEntries

---

### US-006: Submit Timesheet for Approval

**As an** employee,
**I want** to submit my daily timesheet for manager approval,
**So that** my work hours are officially recorded and routed for review.

**Acceptance Criteria:**
- [ ] A **"Submit"** button is visible when the form is editable (Draft or Rejected status)
- [ ] Clicking validates all rows: all required fields filled, hours > 0, no duplicate project+category combinations
- [ ] Validation errors are highlighted inline on failing rows
- [ ] A confirmation dialog appears: "Submit timesheet for [date]?" with Confirm / Cancel options
- [ ] On confirmation, all entries for that date are saved with `Status = "Submitted"` and `SubmittedOn = now`
- [ ] The form becomes **read-only** after successful submission
- [ ] A success message confirms the submission
- [ ] Power Automate is triggered by the Status column change (not SPFx responsibility)

**SPFx Components:** `views/DailyTimesheetForm.tsx`, `components/shared/ConfirmDialog.tsx`
**SharePoint Lists:** TimesheetEntries

---

### US-007: Edit a Rejected Timesheet

**As an** employee,
**I want** to edit and resubmit a timesheet that was rejected by my manager,
**So that** I can correct the issues and get my hours approved.

**Acceptance Criteria:**
- [ ] When the day's entries have `Status = "Rejected"`, the form is editable again
- [ ] Manager's comments are displayed in a highlighted warning MessageBar above the task grid
- [ ] Employee can edit all task row fields, add new rows, or delete rows
- [ ] "Save Draft" and "Submit" buttons are both available
- [ ] On resubmission, `Status` changes back to "Submitted" and `ManagerComments` is preserved in history
- [ ] Entries with `Status = "Approved"` are **permanently read-only** (no edit capability)

**SPFx Components:** `views/DailyTimesheetForm.tsx`, `components/shared/ErrorMessage.tsx`
**SharePoint Lists:** TimesheetEntries

---

## EPIC 3: Employee — Timesheet History

---

### US-008: View My Timesheet History

**As an** employee,
**I want** to see a list of all my past timesheet days with their status,
**So that** I can track my submissions and spot any pending actions.

**Acceptance Criteria:**
- [ ] History view shows entries grouped by `EntryDate`, newest first
- [ ] Each date group displays: formatted date, total hours for that day, status badge (colour-coded)
- [ ] Status badges: Draft (grey), Submitted (blue), Approved (green), Rejected (red)
- [ ] Clicking a date group navigates to the DailyTimesheetForm for that date (editable if Draft/Rejected, read-only otherwise)
- [ ] A **date range filter** is available (default: current month)
- [ ] A **status filter** dropdown is available (All / Draft / Submitted / Approved / Rejected)
- [ ] A loading state is shown while data is being fetched

**SPFx Components:** `views/MyTimesheetHistory.tsx`, `components/shared/StatusBadge.tsx`
**SharePoint Lists:** TimesheetEntries

---

## EPIC 4: Manager — Approval Workflow

---

### US-009: View Team Timesheets

**As a** manager,
**I want** to see a dashboard of all timesheets submitted by my team,
**So that** I can review and take action on pending submissions.

**Acceptance Criteria:**
- [ ] Manager Dashboard shows entries grouped by employee name, then by date
- [ ] Each day group shows: employee name, date, total hours, status badge
- [ ] Default filter: current week, status = Submitted
- [ ] Filters available: date range, employee name dropdown, status dropdown
- [ ] Manager can expand a day group to see individual task rows
- [ ] A loading state is shown while data fetches

**SPFx Components:** `views/ManagerDashboard.tsx`, `components/manager/TeamTimesheetList.tsx`, `components/manager/EmployeeFilter.tsx`
**SharePoint Lists:** TimesheetEntries

---

### US-010: Approve a Submitted Timesheet

**As a** manager,
**I want** to approve an employee's submitted timesheet for a given day,
**So that** their hours are officially accepted.

**Acceptance Criteria:**
- [ ] An **"Approve"** button is shown on day groups with `Status = "Submitted"`
- [ ] Clicking opens a review panel showing all task rows for that day
- [ ] The panel shows a summary: employee name, date, total hours, task breakdown
- [ ] A **"Confirm Approve"** button in the panel finalises the action
- [ ] On approval: all entries for that date/employee → `Status = "Approved"`, `ReviewedBy = manager`, `ReviewedOn = now`
- [ ] The status badge on the dashboard row updates inline (no full page reload)
- [ ] A success notification confirms the approval
- [ ] Power Automate notifies the employee (not SPFx responsibility)

**SPFx Components:** `components/manager/TimesheetReviewPanel.tsx`, `views/ManagerDashboard.tsx`
**SharePoint Lists:** TimesheetEntries

---

### US-011: Reject a Submitted Timesheet

**As a** manager,
**I want** to reject an employee's submitted timesheet with a comment explaining the issue,
**So that** the employee knows what to correct before resubmitting.

**Acceptance Criteria:**
- [ ] A **"Reject"** button is shown on day groups with `Status = "Submitted"`
- [ ] Clicking opens the review panel with a **mandatory** Manager Comments textarea
- [ ] The "Confirm Reject" button is disabled until a comment is entered
- [ ] On rejection: all entries → `Status = "Rejected"`, `ManagerComments = entered text`, `ReviewedBy`, `ReviewedOn`
- [ ] The status badge updates inline on the dashboard
- [ ] Power Automate notifies the employee (not SPFx responsibility)

**SPFx Components:** `components/manager/TimesheetReviewPanel.tsx`
**SharePoint Lists:** TimesheetEntries

---

### US-012: Request Timesheet Re-submission

**As a** manager,
**I want** to send an already-approved timesheet back to the employee for correction,
**So that** errors discovered after approval can be fixed.

**Acceptance Criteria:**
- [ ] A **"Request Re-submit"** button is shown on day groups with `Status = "Approved"`
- [ ] Clicking opens the review panel with a mandatory Manager Comments textarea
- [ ] On confirm: all entries → `Status = "Rejected"`, `ManagerComments` updated, `ReviewedBy`, `ReviewedOn` refreshed
- [ ] Behaves identically to Reject for the SP list update
- [ ] Power Automate sends a re-submit notification to the employee (not SPFx responsibility)
- [ ] Employee sees the re-submit request as a Rejected status with the manager's comment

**SPFx Components:** `components/manager/TimesheetReviewPanel.tsx`
**SharePoint Lists:** TimesheetEntries

---

## EPIC 5: Admin — Project & Category Management

---

### US-013: Manage Projects

**As a** manager or admin,
**I want** to add, edit, and deactivate projects,
**So that** employees always see an accurate and up-to-date list of projects in their timesheets.

**Acceptance Criteria:**
- [ ] Admin Panel → Projects tab shows a table: Project Code, Project Name, Client, Status (Active/Inactive), Actions
- [ ] **"Add Project"** button opens a slide-in panel form with fields: Project Code (required, unique), Project Name (required), Client Name, Description, Start Date, End Date
- [ ] **"Edit"** button on a row opens the same form pre-populated with existing values
- [ ] **"Deactivate"** soft-deletes a project (`IsActive = false`) — does **not** hard-delete (preserves timesheet history)
- [ ] **"Activate"** re-enables a previously deactivated project
- [ ] Active projects appear in employee project dropdowns; inactive ones do not
- [ ] Success/error notifications shown after each operation

**SPFx Components:** `views/AdminPanel.tsx`, `components/admin/ProjectsManager.tsx`, `components/admin/ProjectForm.tsx`
**SharePoint Lists:** Projects

---

### US-014: Manage Activity Categories

**As a** manager or admin,
**I want** to add, edit, and deactivate activity categories,
**So that** employees can classify their work into meaningful categories.

**Acceptance Criteria:**
- [ ] Admin Panel → Categories tab shows a table: Category Name, Description, Sort Order, Status, Actions
- [ ] **"Add Category"** opens a panel form: Category Name (required), Description, Sort Order (numeric)
- [ ] **"Edit"** opens the panel pre-populated
- [ ] **"Deactivate"** soft-deletes (`IsActive = false`); **"Activate"** re-enables
- [ ] Sort Order determines the order categories appear in employee dropdowns (ascending)
- [ ] Active categories only appear in employee category dropdowns

**SPFx Components:** `views/AdminPanel.tsx`, `components/admin/CategoriesManager.tsx`, `components/admin/CategoryForm.tsx`
**SharePoint Lists:** ActivityCategories

---

## EPIC 6: Manager — Export Reports

---

### US-015: Export Timesheet Summary to Excel

**As a** manager or admin,
**I want** to export a filtered timesheet summary to an Excel file,
**So that** I can use it for payroll processing, client billing, or management reporting.

**Acceptance Criteria:**
- [ ] Export Panel provides filter controls: Date Range (required), Employee (optional), Project (optional), Status (optional)
- [ ] A **"Preview"** button loads a summary table showing the filtered data before export
- [ ] **"Export to Excel"** generates and downloads a `.xlsx` file immediately in the browser
- [ ] Excel file contains two sheets:
  - **Timesheet Detail:** Employee Name, Date, Project, Category, Task Description, Hours, Status
  - **Summary:** Employee Name, Total Hours (for the filtered period)
- [ ] File name format: `Timesheet_Report_[StartDate]_[EndDate].xlsx`
- [ ] Library: SheetJS (`xlsx`) — lazy-loaded only when export is triggered

**SPFx Components:** `views/ExportPanel.tsx`, `components/export/ExportFilterForm.tsx`, `components/export/ExportPreviewTable.tsx`, `components/export/ExportActions.tsx`, `services/ExportService.ts`
**SharePoint Lists:** TimesheetEntries

---

### US-016: Export Timesheet Summary to PDF

**As a** manager or admin,
**I want** to export a filtered timesheet summary to a PDF report,
**So that** I can share a formatted report with stakeholders or clients.

**Acceptance Criteria:**
- [ ] Export Panel uses the same filter controls as Excel export (US-015)
- [ ] **"Export to PDF"** generates and downloads a `.pdf` file immediately in the browser
- [ ] PDF format:
  - Landscape orientation
  - Header: "Timesheet Report — [Start Date] to [End Date]"
  - Data table with columns: Employee Name, Date, Project, Category, Description, Hours, Status
  - Footer per page: "Generated: [date] | Page X of Y"
  - Fluent UI blue (`#0078D4`) as the table header colour
- [ ] File name format: `Timesheet_[StartDate]_[EndDate].pdf`
- [ ] Library: `jsPDF` + `jspdf-autotable` — lazy-loaded only when export is triggered

**SPFx Components:** `components/export/ExportActions.tsx`, `services/ExportService.ts`
**SharePoint Lists:** TimesheetEntries

---

## Power Automate Flows (handled separately — not SPFx)

| Flow | Trigger | Action |
|---|---|---|
| **Saturday Reminder** | Scheduled (Saturday 10 AM) | Send email/Teams notification to employees who have no Submitted entry for the current week |
| **Submit Notification** | TimesheetEntries Status changes to "Submitted" | Notify manager that a timesheet is pending review |
| **Approval Notification** | Status changes to "Approved" | Notify employee their timesheet was approved |
| **Rejection Notification** | Status changes to "Rejected" | Notify employee their timesheet was rejected with manager comments |
| **Re-submit Notification** | Status changes to "Rejected" with re-submit flag | Send specific re-submit request email/Teams message to employee |

---

## Implementation Sequence

| Phase | Work |
|---|---|
| 0 | Folder structure, models (`ITimesheetModels.ts`, `IServiceModels.ts`), utils, `AppContext.ts` |
| 1 | `UserService.ts`, `useCurrentUser.ts`, update `TimeSheetWebPart.ts` entry point |
| 2 | `ProjectService.ts`, `CategoryService.ts`, `useProjects.ts`, `useActivityCategories.ts` |
| 3 | Shared components, `DayNavigator`, `TaskGrid`, `TimesheetService.ts`, `DailyTimesheetForm` |
| 4 | `HomePage.tsx` with role-based cards |
| 5 | `MyTimesheetHistory.tsx` |
| 6 | `ManagerDashboard`, `TimesheetReviewPanel`, approve/reject/resubmit |
| 7 | `AdminPanel`, `ProjectsManager`, `CategoriesManager` |
| 8 | `ExportService`, `ExportPanel`, Excel + PDF |

---

## Acceptance Test Scenarios

| Scenario | Steps | Expected Result |
|---|---|---|
| Employee adds 5 tasks for today | Open Daily Form → Add Task × 4 → fill all rows → Save Draft | 5 items in TimesheetEntries with Status=Draft |
| Employee submits | Open Draft day → Submit → Confirm | All rows Status=Submitted; form read-only |
| Employee navigates days | Use arrows to go back 3 days | Grid shows entries (or blank) for that day |
| Manager approves | Open Team Timesheets → Approve a Submitted day | Status=Approved; employee notified via PA |
| Manager rejects | Open Team Timesheets → Reject with comment | Status=Rejected; employee sees comment in form |
| Manager requests re-submit | Reject an Approved entry | Status=Rejected; PA sends re-submit notification |
| Add project | Admin Panel → Add Project "PROJ-999" | Project appears in employee dropdown |
| Deactivate project | Admin Panel → Deactivate "PROJ-999" | Project disappears from employee dropdown |
| Export Excel | Set date range → Export to Excel | .xlsx file downloads with Detail + Summary sheets |
| Export PDF | Set date range → Export to PDF | .pdf file downloads landscape with table and footer |
