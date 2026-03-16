"use strict";
(self["webpackJsonp_c7e5e177-9baf-42a9-91c9-2ea9fecc19a8_0.0.1"] = self["webpackJsonp_c7e5e177-9baf-42a9-91c9-2ea9fecc19a8_0.0.1"] || []).push([["lib_webparts_timeSheet_services_TimesheetService_js"],{

/***/ 30264:
/*!*************************************************************!*\
  !*** ./lib/webparts/timeSheet/services/TimesheetService.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   approveDayEntries: () => (/* binding */ approveDayEntries),
/* harmony export */   createEntry: () => (/* binding */ createEntry),
/* harmony export */   deleteEntry: () => (/* binding */ deleteEntry),
/* harmony export */   getEntriesForDate: () => (/* binding */ getEntriesForDate),
/* harmony export */   getEntriesForDateRange: () => (/* binding */ getEntriesForDateRange),
/* harmony export */   getEntriesForExport: () => (/* binding */ getEntriesForExport),
/* harmony export */   getTeamEntries: () => (/* binding */ getTeamEntries),
/* harmony export */   rejectDayEntries: () => (/* binding */ rejectDayEntries),
/* harmony export */   saveDraftEntries: () => (/* binding */ saveDraftEntries),
/* harmony export */   submitDayEntries: () => (/* binding */ submitDayEntries),
/* harmony export */   updateEntry: () => (/* binding */ updateEntry)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 10196);
/* harmony import */ var _PnPSetup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PnPSetup */ 89916);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/constants */ 47293);
/* harmony import */ var _utils_dateUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/dateUtils */ 28613);
/* harmony import */ var _pnp_sp_lists__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pnp/sp/lists */ 52185);
/* harmony import */ var _pnp_sp_items__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pnp/sp/items */ 95324);
/* harmony import */ var _pnp_sp_batching__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @pnp/sp/batching */ 82815);







// ─── Fields to select on all queries ─────────────────────────────────────────
var SELECT_FIELDS = [
    'Id',
    'Title',
    _utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESHEET_COLS.EMPLOYEE_ID,
    _utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESHEET_COLS.EMPLOYEE_NAME,
    _utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESHEET_COLS.EMPLOYEE_EMAIL,
    _utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESHEET_COLS.ENTRY_DATE,
    _utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESHEET_COLS.PROJECT_ID,
    _utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESHEET_COLS.PROJECT_NAME,
    _utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESHEET_COLS.ACTIVITY_CATEGORY_ID,
    _utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESHEET_COLS.ACTIVITY_CATEGORY_NAME,
    _utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESHEET_COLS.TASK_DESCRIPTION,
    _utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESHEET_COLS.HOURS_SPENT,
    _utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESHEET_COLS.STATUS,
    _utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESHEET_COLS.MANAGER_COMMENTS,
    _utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESHEET_COLS.SUBMITTED_ON,
    _utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESHEET_COLS.REVIEWED_BY,
    _utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESHEET_COLS.REVIEWED_ON,
    _utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESHEET_COLS.WEEK_START_DATE,
];
// ─── Map a raw SP list item to ITimesheetEntry ────────────────────────────────
function mapItem(item) {
    return {
        id: item.Id,
        title: item.Title,
        employeeId: item[_utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESHEET_COLS.EMPLOYEE_ID],
        employeeName: item[_utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESHEET_COLS.EMPLOYEE_NAME],
        employeeEmail: item[_utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESHEET_COLS.EMPLOYEE_EMAIL],
        entryDate: new Date(item[_utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESHEET_COLS.ENTRY_DATE]),
        projectId: item[_utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESHEET_COLS.PROJECT_ID],
        projectName: item[_utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESHEET_COLS.PROJECT_NAME],
        activityCategoryId: item[_utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESHEET_COLS.ACTIVITY_CATEGORY_ID],
        activityCategoryName: item[_utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESHEET_COLS.ACTIVITY_CATEGORY_NAME],
        taskDescription: item[_utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESHEET_COLS.TASK_DESCRIPTION],
        hoursSpent: item[_utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESHEET_COLS.HOURS_SPENT],
        status: item[_utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESHEET_COLS.STATUS],
        managerComments: item[_utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESHEET_COLS.MANAGER_COMMENTS],
        submittedOn: item[_utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESHEET_COLS.SUBMITTED_ON] ? new Date(item[_utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESHEET_COLS.SUBMITTED_ON]) : undefined,
        reviewedBy: item[_utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESHEET_COLS.REVIEWED_BY],
        reviewedOn: item[_utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESHEET_COLS.REVIEWED_ON] ? new Date(item[_utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESHEET_COLS.REVIEWED_ON]) : undefined,
        weekStartDate: item[_utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESHEET_COLS.WEEK_START_DATE] ? new Date(item[_utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESHEET_COLS.WEEK_START_DATE]) : undefined,
    };
}
// ─── Build the payload for creating / updating an entry ──────────────────────
function buildPayload(entry) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
    var _r, _s, _t, _u;
    var weekStart = (0,_utils_dateUtils__WEBPACK_IMPORTED_MODULE_5__.getWeekStart)(entry.entryDate);
    return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)({}, (entry.employeeName !== undefined && (_a = {}, _a[_utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESHEET_COLS.EMPLOYEE_NAME] = entry.employeeName, _a))), (entry.employeeEmail !== undefined && (_b = {}, _b[_utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESHEET_COLS.EMPLOYEE_EMAIL] = entry.employeeEmail, _b))), (entry.employeeId !== undefined && (_c = {}, _c[_utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESHEET_COLS.EMPLOYEE_ID] = entry.employeeId, _c))), (_d = {}, _d[_utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESHEET_COLS.ENTRY_DATE] = entry.entryDate.toISOString(), _d[_utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESHEET_COLS.WEEK_START_DATE] = weekStart.toISOString(), _d)), (entry.projectId !== undefined && (_e = {}, _e[_utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESHEET_COLS.PROJECT_ID] = entry.projectId, _e))), (entry.projectName !== undefined && (_f = {}, _f[_utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESHEET_COLS.PROJECT_NAME] = entry.projectName, _f))), (entry.activityCategoryId !== undefined && (_g = {}, _g[_utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESHEET_COLS.ACTIVITY_CATEGORY_ID] = entry.activityCategoryId, _g))), (entry.activityCategoryName !== undefined && (_h = {}, _h[_utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESHEET_COLS.ACTIVITY_CATEGORY_NAME] = entry.activityCategoryName, _h))), (entry.taskDescription !== undefined && (_j = {}, _j[_utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESHEET_COLS.TASK_DESCRIPTION] = entry.taskDescription, _j))), (entry.hoursSpent !== undefined && (_k = {}, _k[_utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESHEET_COLS.HOURS_SPENT] = entry.hoursSpent, _k))), (entry.status !== undefined && (_l = {}, _l[_utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESHEET_COLS.STATUS] = entry.status, _l))), (entry.managerComments !== undefined && (_m = {}, _m[_utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESHEET_COLS.MANAGER_COMMENTS] = entry.managerComments, _m))), (entry.submittedOn !== undefined && (_o = {}, _o[_utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESHEET_COLS.SUBMITTED_ON] = (_s = (_r = entry.submittedOn) === null || _r === void 0 ? void 0 : _r.toISOString()) !== null && _s !== void 0 ? _s : null, _o))), (entry.reviewedBy !== undefined && (_p = {}, _p[_utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESHEET_COLS.REVIEWED_BY] = entry.reviewedBy, _p))), (entry.reviewedOn !== undefined && (_q = {}, _q[_utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESHEET_COLS.REVIEWED_ON] = (_u = (_t = entry.reviewedOn) === null || _t === void 0 ? void 0 : _t.toISOString()) !== null && _u !== void 0 ? _u : null, _q)));
}
// ─── Queries ──────────────────────────────────────────────────────────────────
/**
 * Get all timesheet entries for a specific employee on a specific date.
 */
function getEntriesForDate(date, employeeEmail) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function () {
        var sp, filter, items;
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__generator)(this, function (_b) {
            switch (_b.label) {
                case 0:
                    sp = (0,_PnPSetup__WEBPACK_IMPORTED_MODULE_0__.getSP)();
                    filter = "".concat(_utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESHEET_COLS.EMPLOYEE_EMAIL, " eq '").concat(employeeEmail, "' and ").concat(_utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESHEET_COLS.ENTRY_DATE, " ge '").concat((0,_utils_dateUtils__WEBPACK_IMPORTED_MODULE_5__.toODataDate)(date), "' and ").concat(_utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESHEET_COLS.ENTRY_DATE, " le '").concat((0,_utils_dateUtils__WEBPACK_IMPORTED_MODULE_5__.toODataEndOfDay)(date), "'");
                    return [4 /*yield*/, (_a = sp.web.lists
                            .getByTitle(_utils_constants__WEBPACK_IMPORTED_MODULE_1__.LISTS.TIMESHEET_ENTRIES)
                            .items)
                            .select.apply(_a, SELECT_FIELDS).filter(filter)
                            .orderBy(_utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESHEET_COLS.ENTRY_DATE, true)
                            .top(100)()];
                case 1:
                    items = _b.sent();
                    return [2 /*return*/, items.map(mapItem)];
            }
        });
    });
}
/**
 * Get all entries for an employee within a date range (for history view).
 */
function getEntriesForDateRange(startDate, endDate, employeeEmail) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function () {
        var sp, filter, items;
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__generator)(this, function (_b) {
            switch (_b.label) {
                case 0:
                    sp = (0,_PnPSetup__WEBPACK_IMPORTED_MODULE_0__.getSP)();
                    filter = "".concat(_utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESHEET_COLS.EMPLOYEE_EMAIL, " eq '").concat(employeeEmail, "' and ").concat(_utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESHEET_COLS.ENTRY_DATE, " ge '").concat((0,_utils_dateUtils__WEBPACK_IMPORTED_MODULE_5__.toODataDate)(startDate), "' and ").concat(_utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESHEET_COLS.ENTRY_DATE, " le '").concat((0,_utils_dateUtils__WEBPACK_IMPORTED_MODULE_5__.toODataEndOfDay)(endDate), "'");
                    return [4 /*yield*/, (_a = sp.web.lists
                            .getByTitle(_utils_constants__WEBPACK_IMPORTED_MODULE_1__.LISTS.TIMESHEET_ENTRIES)
                            .items)
                            .select.apply(_a, SELECT_FIELDS).filter(filter)
                            .orderBy(_utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESHEET_COLS.ENTRY_DATE, false) // newest first
                            .top(2000)()];
                case 1:
                    items = _b.sent();
                    return [2 /*return*/, items.map(mapItem)];
            }
        });
    });
}
/**
 * Get team entries for the manager dashboard.
 * Optionally filter by status and/or employee email.
 */
function getTeamEntries(startDate, endDate, options) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function () {
        var sp, filters, items;
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__generator)(this, function (_b) {
            switch (_b.label) {
                case 0:
                    sp = (0,_PnPSetup__WEBPACK_IMPORTED_MODULE_0__.getSP)();
                    filters = [
                        "".concat(_utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESHEET_COLS.ENTRY_DATE, " ge '").concat((0,_utils_dateUtils__WEBPACK_IMPORTED_MODULE_5__.toODataDate)(startDate), "'"),
                        "".concat(_utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESHEET_COLS.ENTRY_DATE, " le '").concat((0,_utils_dateUtils__WEBPACK_IMPORTED_MODULE_5__.toODataEndOfDay)(endDate), "'"),
                    ];
                    if (options === null || options === void 0 ? void 0 : options.employeeEmail) {
                        filters.push("".concat(_utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESHEET_COLS.EMPLOYEE_EMAIL, " eq '").concat(options.employeeEmail, "'"));
                    }
                    if (options === null || options === void 0 ? void 0 : options.status) {
                        filters.push("".concat(_utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESHEET_COLS.STATUS, " eq '").concat(options.status, "'"));
                    }
                    return [4 /*yield*/, (_a = sp.web.lists
                            .getByTitle(_utils_constants__WEBPACK_IMPORTED_MODULE_1__.LISTS.TIMESHEET_ENTRIES)
                            .items)
                            .select.apply(_a, SELECT_FIELDS).filter(filters.join(' and '))
                            .orderBy(_utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESHEET_COLS.EMPLOYEE_EMAIL, true)
                            .orderBy(_utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESHEET_COLS.ENTRY_DATE, false)
                            .top(5000)()];
                case 1:
                    items = _b.sent();
                    return [2 /*return*/, items.map(mapItem)];
            }
        });
    });
}
/**
 * Get entries for export with optional filters (for ExportPanel).
 */
function getEntriesForExport(startDate, endDate, options) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function () {
        var sp, filters, items;
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__generator)(this, function (_b) {
            switch (_b.label) {
                case 0:
                    sp = (0,_PnPSetup__WEBPACK_IMPORTED_MODULE_0__.getSP)();
                    filters = [
                        "".concat(_utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESHEET_COLS.ENTRY_DATE, " ge '").concat((0,_utils_dateUtils__WEBPACK_IMPORTED_MODULE_5__.toODataDate)(startDate), "'"),
                        "".concat(_utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESHEET_COLS.ENTRY_DATE, " le '").concat((0,_utils_dateUtils__WEBPACK_IMPORTED_MODULE_5__.toODataEndOfDay)(endDate), "'"),
                    ];
                    if (options === null || options === void 0 ? void 0 : options.employeeEmail) {
                        filters.push("".concat(_utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESHEET_COLS.EMPLOYEE_EMAIL, " eq '").concat(options.employeeEmail, "'"));
                    }
                    if (options === null || options === void 0 ? void 0 : options.projectId) {
                        filters.push("".concat(_utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESHEET_COLS.PROJECT_ID, " eq ").concat(options.projectId));
                    }
                    if (options === null || options === void 0 ? void 0 : options.status) {
                        filters.push("".concat(_utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESHEET_COLS.STATUS, " eq '").concat(options.status, "'"));
                    }
                    return [4 /*yield*/, (_a = sp.web.lists
                            .getByTitle(_utils_constants__WEBPACK_IMPORTED_MODULE_1__.LISTS.TIMESHEET_ENTRIES)
                            .items)
                            .select.apply(_a, SELECT_FIELDS).filter(filters.join(' and '))
                            .orderBy(_utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESHEET_COLS.EMPLOYEE_EMAIL, true)
                            .orderBy(_utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESHEET_COLS.ENTRY_DATE, true)
                            .top(10000)()];
                case 1:
                    items = _b.sent();
                    return [2 /*return*/, items.map(mapItem)];
            }
        });
    });
}
// ─── Mutations ────────────────────────────────────────────────────────────────
/**
 * Create a new timesheet entry (single task row).
 */
function createEntry(entry) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function () {
        var sp, title, payload, result;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    sp = (0,_PnPSetup__WEBPACK_IMPORTED_MODULE_0__.getSP)();
                    title = "Timesheet - ".concat(entry.employeeEmail, " - ").concat(entry.entryDate.toISOString().split('T')[0]);
                    payload = buildPayload(entry);
                    payload.Title = title;
                    return [4 /*yield*/, sp.web.lists
                            .getByTitle(_utils_constants__WEBPACK_IMPORTED_MODULE_1__.LISTS.TIMESHEET_ENTRIES)
                            .items.add(payload)];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result.Id];
            }
        });
    });
}
/**
 * Update specific fields on an existing entry.
 */
function updateEntry(id, changes) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function () {
        var sp, payload;
        var _a, _b, _c, _d;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__generator)(this, function (_e) {
            switch (_e.label) {
                case 0:
                    sp = (0,_PnPSetup__WEBPACK_IMPORTED_MODULE_0__.getSP)();
                    payload = {};
                    if (changes.projectId !== undefined)
                        payload[_utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESHEET_COLS.PROJECT_ID] = changes.projectId;
                    if (changes.projectName !== undefined)
                        payload[_utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESHEET_COLS.PROJECT_NAME] = changes.projectName;
                    if (changes.activityCategoryId !== undefined)
                        payload[_utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESHEET_COLS.ACTIVITY_CATEGORY_ID] = changes.activityCategoryId;
                    if (changes.activityCategoryName !== undefined)
                        payload[_utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESHEET_COLS.ACTIVITY_CATEGORY_NAME] = changes.activityCategoryName;
                    if (changes.taskDescription !== undefined)
                        payload[_utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESHEET_COLS.TASK_DESCRIPTION] = changes.taskDescription;
                    if (changes.hoursSpent !== undefined)
                        payload[_utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESHEET_COLS.HOURS_SPENT] = changes.hoursSpent;
                    if (changes.status !== undefined)
                        payload[_utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESHEET_COLS.STATUS] = changes.status;
                    if (changes.managerComments !== undefined)
                        payload[_utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESHEET_COLS.MANAGER_COMMENTS] = changes.managerComments;
                    if (changes.submittedOn !== undefined)
                        payload[_utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESHEET_COLS.SUBMITTED_ON] = (_b = (_a = changes.submittedOn) === null || _a === void 0 ? void 0 : _a.toISOString()) !== null && _b !== void 0 ? _b : null;
                    if (changes.reviewedBy !== undefined)
                        payload[_utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESHEET_COLS.REVIEWED_BY] = changes.reviewedBy;
                    if (changes.reviewedOn !== undefined)
                        payload[_utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESHEET_COLS.REVIEWED_ON] = (_d = (_c = changes.reviewedOn) === null || _c === void 0 ? void 0 : _c.toISOString()) !== null && _d !== void 0 ? _d : null;
                    return [4 /*yield*/, sp.web.lists
                            .getByTitle(_utils_constants__WEBPACK_IMPORTED_MODULE_1__.LISTS.TIMESHEET_ENTRIES)
                            .items.getById(id)
                            .update(payload)];
                case 1:
                    _e.sent();
                    return [2 /*return*/];
            }
        });
    });
}
/**
 * Delete a timesheet entry by ID.
 */
function deleteEntry(id) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function () {
        var sp;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    sp = (0,_PnPSetup__WEBPACK_IMPORTED_MODULE_0__.getSP)();
                    return [4 /*yield*/, sp.web.lists
                            .getByTitle(_utils_constants__WEBPACK_IMPORTED_MODULE_1__.LISTS.TIMESHEET_ENTRIES)
                            .items.getById(id)
                            .delete()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
// ─── Bulk status operations ───────────────────────────────────────────────────
/**
 * Save or update all task rows for a day as Draft.
 * - New rows (no id) → createEntry
 * - Existing rows (have id) → updateEntry
 * - IDs in deletedIds → deleteEntry
 */
function saveDraftEntries(rows, deletedIds, baseEntry) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function () {
        var updatedRows, _i, rows_1, row, entry, newId;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    updatedRows = [];
                    // Delete removed rows
                    return [4 /*yield*/, Promise.all(deletedIds.map(function (id) { return deleteEntry(id); }))];
                case 1:
                    // Delete removed rows
                    _a.sent();
                    _i = 0, rows_1 = rows;
                    _a.label = 2;
                case 2:
                    if (!(_i < rows_1.length)) return [3 /*break*/, 7];
                    row = rows_1[_i];
                    entry = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)({}, baseEntry), { projectId: row.projectId, projectName: row.projectName, activityCategoryId: row.activityCategoryId, activityCategoryName: row.activityCategoryName, taskDescription: row.taskDescription, hoursSpent: row.hoursSpent, status: 'Draft' });
                    if (!row.id) return [3 /*break*/, 4];
                    return [4 /*yield*/, updateEntry(row.id, entry)];
                case 3:
                    _a.sent();
                    updatedRows.push((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)({}, row), { isDirty: false }));
                    return [3 /*break*/, 6];
                case 4: return [4 /*yield*/, createEntry(entry)];
                case 5:
                    newId = _a.sent();
                    updatedRows.push((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)({}, row), { id: newId, isDirty: false }));
                    _a.label = 6;
                case 6:
                    _i++;
                    return [3 /*break*/, 2];
                case 7: return [2 /*return*/, updatedRows];
            }
        });
    });
}
/**
 * Submit all entries for a day (set Status = "Submitted", SubmittedOn = now).
 * Assumes all rows have already been saved (have IDs).
 */
function submitDayEntries(entryIds) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function () {
        var now;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    now = new Date();
                    return [4 /*yield*/, Promise.all(entryIds.map(function (id) {
                            return updateEntry(id, { status: 'Submitted', submittedOn: now });
                        }))];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
/**
 * Approve all entries for a given employee+day.
 */
function approveDayEntries(entryIds, reviewerName) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function () {
        var now;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    now = new Date();
                    return [4 /*yield*/, Promise.all(entryIds.map(function (id) {
                            return updateEntry(id, {
                                status: 'Approved',
                                reviewedBy: reviewerName,
                                reviewedOn: now,
                            });
                        }))];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
/**
 * Reject all entries for a given employee+day with manager comments.
 */
function rejectDayEntries(entryIds, reviewerName, managerComments) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function () {
        var now;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    now = new Date();
                    return [4 /*yield*/, Promise.all(entryIds.map(function (id) {
                            return updateEntry(id, {
                                status: 'Rejected',
                                reviewedBy: reviewerName,
                                reviewedOn: now,
                                managerComments: managerComments,
                            });
                        }))];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}


/***/ }),

/***/ 28613:
/*!***************************************************!*\
  !*** ./lib/webparts/timeSheet/utils/dateUtils.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   currentMonthRange: () => (/* binding */ currentMonthRange),
/* harmony export */   currentWeekRange: () => (/* binding */ currentWeekRange),
/* harmony export */   formatDateLabel: () => (/* binding */ formatDateLabel),
/* harmony export */   formatDateShort: () => (/* binding */ formatDateShort),
/* harmony export */   getWeekStart: () => (/* binding */ getWeekStart),
/* harmony export */   isFutureDate: () => (/* binding */ isFutureDate),
/* harmony export */   isSameDay: () => (/* binding */ isSameDay),
/* harmony export */   toISODateString: () => (/* binding */ toISODateString),
/* harmony export */   toODataDate: () => (/* binding */ toODataDate),
/* harmony export */   toODataEndOfDay: () => (/* binding */ toODataEndOfDay),
/* harmony export */   today: () => (/* binding */ today)
/* harmony export */ });
/**
 * Format a Date to a readable label: "Monday, 9 March 2026"
 */
function formatDateLabel(date) {
    return date.toLocaleDateString('en-GB', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
}
/**
 * Format a Date to ISO date-only string: "2026-03-09"
 */
function toISODateString(date) {
    return date.toISOString().split('T')[0];
}
/**
 * Format a Date to a compact display string: "09/03/2026"
 */
function formatDateShort(date) {
    return date.toLocaleDateString('en-GB');
}
/**
 * Get the start of the week (Monday) for a given date.
 */
function getWeekStart(date) {
    var d = new Date(date);
    var day = d.getDay(); // 0 = Sunday
    var diff = d.getDate() - day + (day === 0 ? -6 : 1); // adjust to Monday
    d.setDate(diff);
    d.setHours(0, 0, 0, 0);
    return d;
}
/**
 * Check if two dates represent the same calendar day.
 */
function isSameDay(a, b) {
    return (a.getFullYear() === b.getFullYear() &&
        a.getMonth() === b.getMonth() &&
        a.getDate() === b.getDate());
}
/**
 * Return today's date with time zeroed out.
 */
function today() {
    var d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
}
/**
 * Check if a date is in the future (strictly after today).
 */
function isFutureDate(date) {
    return date > today();
}
/**
 * Return the start and end of the current month.
 */
function currentMonthRange() {
    var now = new Date();
    var start = new Date(now.getFullYear(), now.getMonth(), 1);
    var end = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    return { start: start, end: end };
}
/**
 * Return the start and end of the current week (Mon–Sun).
 */
function currentWeekRange() {
    var start = getWeekStart(today());
    var end = new Date(start);
    end.setDate(start.getDate() + 6);
    return { start: start, end: end };
}
/**
 * Build a SharePoint OData filter date string (UTC midnight).
 */
function toODataDate(date) {
    var d = new Date(date);
    d.setHours(0, 0, 0, 0);
    return d.toISOString();
}
/**
 * Build a SharePoint OData filter end-of-day date string (UTC 23:59:59).
 */
function toODataEndOfDay(date) {
    var d = new Date(date);
    d.setHours(23, 59, 59, 999);
    return d.toISOString();
}


/***/ })

}]);
//# sourceMappingURL=chunk.lib_webparts_timeSheet_services_TimesheetService_js.js.map