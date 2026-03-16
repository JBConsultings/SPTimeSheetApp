/* eslint-disable */
// ============================================================
// Daily Timesheet App — SharePoint List Creator
// Paste and run this in PnPJS Console (Chrome Extension)
// while on your SharePoint site.
//
// Creates:
//   1. TimesheetEntries
//   2. Projects
//   3. ActivityCategories
//
// Column internal names match the SPFx service code exactly.
// Safe to re-run — existing lists/columns are skipped.
// ============================================================

import { spfi, SPBrowser } from "@pnp/sp/presets/all";

const sp = spfi().using(SPBrowser({ baseUrl: window._spPageContextInfo.webAbsoluteUrl }));

// ─── PnPjs v4 enum values ─────────────────────────────────────────────────────
// DateTimeFieldFormatType: DateOnly = 0, DateTime = 1
// CalendarType:            Gregorian = 1
// ─────────────────────────────────────────────────────────────────────────────

(async () => {

  // ─── Helper: create list, skip gracefully if it already exists ───────────
  async function createList(title, description) {
    try {
      await sp.web.lists.add(title, description, 100, false, { OnQuickLaunch: true });
      console.log("✓ List created: " + title);
    } catch (e) {
      console.warn("~ List already exists, skipped: " + title);
    }
  }

  // ─── Helper: add field, skip gracefully if it already exists ────────────
  async function safeAdd(name, fn) {
    try {
      await fn();
      console.log("  + " + name);
    } catch (e) {
      console.warn("  ~ skipped (exists): " + name);
    }
  }

  // ════════════════════════════════════════════════════════════════════════
  // 1. TimesheetEntries
  // ════════════════════════════════════════════════════════════════════════
  console.log("\n=== 1. TimesheetEntries ===");
  await createList(
    "TimesheetEntries",
    "Daily timesheet task entries. One item per task per day per employee."
  );

  const ts = sp.web.lists.getByTitle("TimesheetEntries");

  // Employee info — denormalised for query speed and Power Automate triggers
  await safeAdd("EmployeeId", () =>
    ts.fields.addNumber("EmployeeId", {
      Title: "EmployeeID",
      Required: true,
    })
  );
  await safeAdd("EmployeeName", () =>
    ts.fields.addText("EmployeeName", {
      Title: "EmployeeName",
      Required: true,
      MaxLength: 255,
    })
  );
  await safeAdd("EmployeeEmail", () =>
    ts.fields.addText("EmployeeEmail", {
      Title: "EmployeeEmail",
      Required: true,
      MaxLength: 255,
    })
  );

  // Entry date — DateOnly (DisplayFormat 0 = DateOnly in PnPjs v4)
  await safeAdd("EntryDate", () =>
    ts.fields.addDateTime("EntryDate", {
      Title: "EntryDate",
      Required: true,
      DisplayFormat: 0,       // DateOnly
      DateTimeCalendarType: 1, // Gregorian
    })
  );

  // Week start date — used for grouping in export reports
  await safeAdd("WeekStartDate", () =>
    ts.fields.addDateTime("WeekStartDate", {
      Title: "WeekStartDate",
      Required: false,
      DisplayFormat: 0,       // DateOnly
      DateTimeCalendarType: 1,
    })
  );

  // Project reference — FK stored as plain number
  await safeAdd("ProjectId", () =>
    ts.fields.addNumber("ProjectId", {
      Title: "ProjectID",
      Required: true,
    })
  );
  await safeAdd("ProjectName", () =>
    ts.fields.addText("ProjectName", {
      Title: "ProjectName",
      Required: true,
      MaxLength: 255,
    })
  );

  // Activity category reference — FK stored as plain number
  await safeAdd("ActivityCategoryId", () =>
    ts.fields.addNumber("ActivityCategoryId", {
      Title: "ActivityCategoryId",
      Required: true,
    })
  );
  await safeAdd("ActivityCategoryName", () =>
    ts.fields.addText("ActivityCategoryName", {
      Title: "ActivityCategoryName",
      Required: true,
      MaxLength: 255,
    })
  );

  // Task details
  await safeAdd("TaskDescription", () =>
    ts.fields.addMultilineText("TaskDescription", {
      Title: "TaskDescription",
      Required: true,
      NumberOfLines: 6,
      RichText: false,
    })
  );
  await safeAdd("HoursSpent", () =>
    ts.fields.addNumber("HoursSpent", {
      Title: "HoursSpent",
      Required: true,
      MinimumValue: 0,
      MaximumValue: 24,
    })
  );

  // Workflow status — Choice field
  await safeAdd("Status", () =>
    ts.fields.addChoice("Status", {
      Title: "Status",
      Required: true,
      Choices: ["Draft", "Submitted", "Approved", "Rejected"],
      EditFormat: 0, // Dropdown
      FillInChoice: false,
    })
  );

  // Manager review fields
  await safeAdd("ManagerComments", () =>
    ts.fields.addMultilineText("ManagerComments", {
      Title: "Manager Comments",
      Required: false,
      NumberOfLines: 4,
      RichText: false,
    })
  );
  await safeAdd("ReviewedBy", () =>
    ts.fields.addText("ReviewedBy", {
      Title: "Reviewed By",
      Required: false,
      MaxLength: 255,
    })
  );

  // Review and submission timestamps — full DateTime (DisplayFormat 1 = DateTime)
  await safeAdd("ReviewedOn", () =>
    ts.fields.addDateTime("ReviewedOn", {
      Title: "Reviewed On",
      Required: false,
      DisplayFormat: 1,       // DateTime
      DateTimeCalendarType: 1,
    })
  );
  await safeAdd("SubmittedOn", () =>
    ts.fields.addDateTime("SubmittedOn", {
      Title: "Submitted On",
      Required: false,
      DisplayFormat: 1,       // DateTime
      DateTimeCalendarType: 1,
    })
  );

  console.log("✓ TimesheetEntries complete\n");

  // ════════════════════════════════════════════════════════════════════════
  // 2. Projects
  // ════════════════════════════════════════════════════════════════════════
  console.log("=== 2. Projects ===");
  await createList(
    "Projects",
    "Master list of projects. Managed by Managers and Admins."
  );

  const proj = sp.web.lists.getByTitle("Projects");

  await safeAdd("ProjectCode", () =>
    proj.fields.addText("ProjectCode", {
      Title: "ProjectCode",
      Required: true,
      MaxLength: 50,
      EnforceUniqueValues: true,
      Indexed: true,
    })
  );
  await safeAdd("Description", () =>
    proj.fields.addMultilineText("Description", {
      Title: "Description",
      Required: false,
      NumberOfLines: 4,
      RichText: false,
    })
  );
  // IsActive — Yes/No, defaults to Yes (true) after creation
  await safeAdd("IsActive", () =>
    proj.fields.addBoolean("IsActive", {
      Title: "IsActive",
    })
  );
  await safeAdd("ClientName", () =>
    proj.fields.addText("ClientName", {
      Title: "ClientName",
      Required: false,
      MaxLength: 255,
    })
  );
  await safeAdd("StartDate", () =>
    proj.fields.addDateTime("StartDate", {
      Title: "StartDate",
      Required: false,
      DisplayFormat: 0,       // DateOnly
      DateTimeCalendarType: 1,
    })
  );
  await safeAdd("EndDate", () =>
    proj.fields.addDateTime("EndDate", {
      Title: "EndDate",
      Required: false,
      DisplayFormat: 0,       // DateOnly
      DateTimeCalendarType: 1,
    })
  );

  // Set IsActive default value to Yes via REST (PnPjs v4 passes through extra props)
  try {
    await sp.web.lists.getByTitle("Projects").fields
      .getByInternalNameOrTitle("IsActive")
      .update({ DefaultValue: "1" });
    console.log("  + IsActive default set to Yes");
  } catch (e) {
    console.warn("  ~ Could not set IsActive default:", e.message);
  }

  console.log("✓ Projects complete\n");

  // ════════════════════════════════════════════════════════════════════════
  // 3. ActivityCategories
  // ════════════════════════════════════════════════════════════════════════
  console.log("=== 3. ActivityCategories ===");
  await createList(
    "ActivityCategories",
    "Master list of activity categories. Managed by Managers and Admins."
  );

  const cat = sp.web.lists.getByTitle("ActivityCategories");

  await safeAdd("Description", () =>
    cat.fields.addMultilineText("Description", {
      Title: "Description",
      Required: false,
      NumberOfLines: 3,
      RichText: false,
    })
  );
  await safeAdd("IsActive", () =>
    cat.fields.addBoolean("IsActive", {
      Title: "IsActive",
    })
  );
  await safeAdd("SortOrder", () =>
    cat.fields.addNumber("SortOrder", {
      Title: "Sort Order",
      Required: false,
      MinimumValue: 0,
      MaximumValue: 9999,
    })
  );

  // Set IsActive default value to Yes
  try {
    await sp.web.lists.getByTitle("ActivityCategories").fields
      .getByInternalNameOrTitle("IsActive")
      .update({ DefaultValue: "1" });
    console.log("  + IsActive default set to Yes");
  } catch (e) {
    console.warn("  ~ Could not set IsActive default:", e.message);
  }

  console.log("✓ ActivityCategories complete\n");

  // ════════════════════════════════════════════════════════════════════════
  // Done
  // ════════════════════════════════════════════════════════════════════════
  console.log("============================================");
  console.log("All 3 lists created successfully!");
  console.log("============================================");
  console.log("");
  console.log("NEXT STEPS:");
  console.log("1. Go to Site Settings > People and Groups");
  console.log("   Create these two groups:");
  console.log("   - Timesheet-Managers");
  console.log("   - Timesheet-Admins");
  console.log("   Add your manager/admin users to each group.");
  console.log("");
  console.log("2. Open the Projects list and add sample projects.");
  console.log("3. Open ActivityCategories and add categories");
  console.log("   (e.g. Development, Testing, Meetings, Documentation).");
  console.log("4. Deploy time-sheet-app.sppkg to the App Catalog.");
  console.log("5. Add the web part to a SharePoint page.");

})().catch((err) => console.error("Script failed:", err));
