# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Local dev server (HTTPS on port 4321, requires SharePoint workbench URL in config/serve.json)
npm run start        # heft start --clean

# Production build + package (creates .sppkg in sharepoint/solution/)
npm run build        # heft test --clean --production && heft package-solution --production

# Clean build artifacts
npm run clean        # heft clean
```

> **Node version**: `>=22.14.0 < 23.0.0` (enforced in package.json)

To test a specific locale during local dev, add `"locale": "fr-fr"` (or `"de-de"`, `"ar-sa"`) to `config/serve.json`.

## Architecture Overview

This is an **SPFx 1.22 web part** built with React 17, TypeScript, Fluent UI v8, and PnP.js v4. It runs entirely inside SharePoint as a single web part with no backend other than SharePoint lists.

### Entry Point & Bootstrap

```
TimeSheetWebPart.ts          ← SPFx BaseClientSideWebPart subclass
  → onInit(): initPnP(ctx)   ← configures PnP.js singleton (PnPSetup.ts)
  → render(): <TimeSheet />  ← mounts React tree
```

`TimeSheet.tsx` is a class component that calls `getCurrentUser()` on mount, resolves role via SP group membership, then renders `<AppShell>` wrapped in `<HashRouter>`.

### Navigation

Navigation is **URL-driven via React Router v6** (HashRouter). `AppShell.tsx` owns all route definitions and translates between `AppView` union type and URL paths:

| AppView | Path |
|---|---|
| Home | `/` |
| CalendarView | `/calendar` |
| DailyForm | `/daily-form?date=YYYY-MM-DD` |
| MyHistory | `/my-history` |
| ManagerDashboard | `/manager` |
| AdminPanel | `/admin` |
| ExportPanel | `/export` |

All views are **lazy-loaded** via `React.lazy()`. Navigation is done by calling `navigateTo(view, params)` from `AppContext` — never by importing `useNavigate` directly in views.

### Context

`AppContext` (React context) provides to all views:
- `currentUser: ICurrentUser` — id, displayName, email, loginName, **role** (`Employee | Manager | Admin`)
- `navState` — current view + URL params
- `navigateTo(view, params)` — updates the URL
- `navigateHome()` — shortcut to `/`

### Role-Based Access

Role is resolved once at startup in `UserService.ts` by checking SP group membership:
- `Timesheet-Admins` → `Admin`
- `Timesheet-Managers` → `Manager`
- Otherwise → `Employee`

HomePage nav cards filter by role. No route-level guards exist — add them in `AppShell.tsx` if needed.

### SharePoint Data Layer

All SP calls go through **PnP.js v4** (`@pnp/sp`). The singleton is initialised once in `PnPSetup.ts` and accessed via `getSP()`.

Three SP lists:
- `TimesheetEntries` — all timesheet rows (one SP item = one task row for one employee on one date)
- `Projects` — project master list
- `ActivityCategories` — category master list

Column internal names are defined in `utils/constants.ts` (`TIMESHEET_COLS`, `PROJECT_COLS`, `CATEGORY_COLS`) — always use these constants, never hardcode column names.

Service files map directly to SP list operations:
- `TimesheetService.ts` — CRUD + bulk approve/reject/submit
- `ProjectService.ts` — projects CRUD with activate/deactivate
- `CategoryService.ts` — categories CRUD with activate/deactivate
- `UserService.ts` — current user + group membership
- `ExportService.ts` — Excel (xlsx) and PDF (jsPDF + jspdf-autotable) generation
- `AnalyticsService.ts` — aggregated stats for dashboard charts

### Multilingual / i18n

Uses **SPFx native `loc/` AMD system** — no npm i18n packages. SharePoint automatically loads the correct locale file based on the user's UI language.

- `loc/mystrings.d.ts` — TypeScript interface for all 140+ string keys
- `loc/en-us.js`, `fr-fr.js`, `de-de.js`, `ar-sa.js` — locale files
- `utils/fmt.ts` — `fmt(template, values)` helper for `{token}` substitution in dynamic strings

Import pattern in every component:
```typescript
import * as strings from 'TimeSheetWebPartStrings';
import { fmt } from '../utils/fmt';

// Static string
<h1>{strings.CalendarTitle}</h1>

// Dynamic string with token replacement
fmt(strings.ApprovedMsg, { name: 'Alice', date: '2024-01-15' })
```

Arrays (`MonthNames`, `DayNamesShort`, `DayNamesFull`) are defined per-locale and accessed by index: `strings.MonthNames[month]`.

### SCSS / Styling

Each component has a co-located `*.module.scss` file (CSS Modules). The build toolchain generates `.d.ts` files in `temp/sass-ts/` — class names not in the SCSS will cause TypeScript errors. The project theme color is `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`.

### Key Constraints

- **No `async/await` in class components** — use `.then()` chains or call async functions inside lifecycle methods
- **`Array.indexOf()` not `Array.includes()`** — TypeScript targets ES5; `includes()` is not in the configured lib
- **`isFutureDate()` utility** — always guard against future dates before allowing timesheet edits
- **`MAX_HOURS_PER_DAY = 24`, `MIN_HOURS_PER_TASK = 0.25`** — validation limits defined in `constants.ts`
- `ITaskRow.rowKey` is a UUID used only as React key; it is not persisted to SharePoint
