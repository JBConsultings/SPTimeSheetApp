"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEntriesForDate = getEntriesForDate;
exports.getEntriesForDateRange = getEntriesForDateRange;
exports.getTeamEntries = getTeamEntries;
exports.getEntriesForExport = getEntriesForExport;
exports.createEntry = createEntry;
exports.updateEntry = updateEntry;
exports.deleteEntry = deleteEntry;
exports.saveDraftEntries = saveDraftEntries;
exports.submitDayEntries = submitDayEntries;
exports.approveDayEntries = approveDayEntries;
exports.rejectDayEntries = rejectDayEntries;
var tslib_1 = require("tslib");
var PnPSetup_1 = require("./PnPSetup");
var constants_1 = require("../utils/constants");
var dateUtils_1 = require("../utils/dateUtils");
require("@pnp/sp/lists");
require("@pnp/sp/items");
require("@pnp/sp/batching");
// ─── Fields to select on all queries ─────────────────────────────────────────
var SELECT_FIELDS = [
    'Id',
    'Title',
    constants_1.TIMESHEET_COLS.EMPLOYEE_ID,
    constants_1.TIMESHEET_COLS.EMPLOYEE_NAME,
    constants_1.TIMESHEET_COLS.EMPLOYEE_EMAIL,
    constants_1.TIMESHEET_COLS.ENTRY_DATE,
    constants_1.TIMESHEET_COLS.PROJECT_ID,
    constants_1.TIMESHEET_COLS.PROJECT_NAME,
    constants_1.TIMESHEET_COLS.ACTIVITY_CATEGORY_ID,
    constants_1.TIMESHEET_COLS.ACTIVITY_CATEGORY_NAME,
    constants_1.TIMESHEET_COLS.TASK_DESCRIPTION,
    constants_1.TIMESHEET_COLS.HOURS_SPENT,
    constants_1.TIMESHEET_COLS.STATUS,
    constants_1.TIMESHEET_COLS.MANAGER_COMMENTS,
    constants_1.TIMESHEET_COLS.SUBMITTED_ON,
    constants_1.TIMESHEET_COLS.REVIEWED_BY,
    constants_1.TIMESHEET_COLS.REVIEWED_ON,
    constants_1.TIMESHEET_COLS.WEEK_START_DATE,
];
// ─── Map a raw SP list item to ITimesheetEntry ────────────────────────────────
function mapItem(item) {
    return {
        id: item.Id,
        title: item.Title,
        employeeId: item[constants_1.TIMESHEET_COLS.EMPLOYEE_ID],
        employeeName: item[constants_1.TIMESHEET_COLS.EMPLOYEE_NAME],
        employeeEmail: item[constants_1.TIMESHEET_COLS.EMPLOYEE_EMAIL],
        entryDate: new Date(item[constants_1.TIMESHEET_COLS.ENTRY_DATE]),
        projectId: item[constants_1.TIMESHEET_COLS.PROJECT_ID],
        projectName: item[constants_1.TIMESHEET_COLS.PROJECT_NAME],
        activityCategoryId: item[constants_1.TIMESHEET_COLS.ACTIVITY_CATEGORY_ID],
        activityCategoryName: item[constants_1.TIMESHEET_COLS.ACTIVITY_CATEGORY_NAME],
        taskDescription: item[constants_1.TIMESHEET_COLS.TASK_DESCRIPTION],
        hoursSpent: item[constants_1.TIMESHEET_COLS.HOURS_SPENT],
        status: item[constants_1.TIMESHEET_COLS.STATUS],
        managerComments: item[constants_1.TIMESHEET_COLS.MANAGER_COMMENTS],
        submittedOn: item[constants_1.TIMESHEET_COLS.SUBMITTED_ON] ? new Date(item[constants_1.TIMESHEET_COLS.SUBMITTED_ON]) : undefined,
        reviewedBy: item[constants_1.TIMESHEET_COLS.REVIEWED_BY],
        reviewedOn: item[constants_1.TIMESHEET_COLS.REVIEWED_ON] ? new Date(item[constants_1.TIMESHEET_COLS.REVIEWED_ON]) : undefined,
        weekStartDate: item[constants_1.TIMESHEET_COLS.WEEK_START_DATE] ? new Date(item[constants_1.TIMESHEET_COLS.WEEK_START_DATE]) : undefined,
    };
}
// ─── Build the payload for creating / updating an entry ──────────────────────
function buildPayload(entry) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
    var _r, _s, _t, _u;
    var weekStart = (0, dateUtils_1.getWeekStart)(entry.entryDate);
    return tslib_1.__assign(tslib_1.__assign(tslib_1.__assign(tslib_1.__assign(tslib_1.__assign(tslib_1.__assign(tslib_1.__assign(tslib_1.__assign(tslib_1.__assign(tslib_1.__assign(tslib_1.__assign(tslib_1.__assign(tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, (entry.employeeName !== undefined && (_a = {}, _a[constants_1.TIMESHEET_COLS.EMPLOYEE_NAME] = entry.employeeName, _a))), (entry.employeeEmail !== undefined && (_b = {}, _b[constants_1.TIMESHEET_COLS.EMPLOYEE_EMAIL] = entry.employeeEmail, _b))), (entry.employeeId !== undefined && (_c = {}, _c[constants_1.TIMESHEET_COLS.EMPLOYEE_ID] = entry.employeeId, _c))), (_d = {}, _d[constants_1.TIMESHEET_COLS.ENTRY_DATE] = entry.entryDate.toISOString(), _d[constants_1.TIMESHEET_COLS.WEEK_START_DATE] = weekStart.toISOString(), _d)), (entry.projectId !== undefined && (_e = {}, _e[constants_1.TIMESHEET_COLS.PROJECT_ID] = entry.projectId, _e))), (entry.projectName !== undefined && (_f = {}, _f[constants_1.TIMESHEET_COLS.PROJECT_NAME] = entry.projectName, _f))), (entry.activityCategoryId !== undefined && (_g = {}, _g[constants_1.TIMESHEET_COLS.ACTIVITY_CATEGORY_ID] = entry.activityCategoryId, _g))), (entry.activityCategoryName !== undefined && (_h = {}, _h[constants_1.TIMESHEET_COLS.ACTIVITY_CATEGORY_NAME] = entry.activityCategoryName, _h))), (entry.taskDescription !== undefined && (_j = {}, _j[constants_1.TIMESHEET_COLS.TASK_DESCRIPTION] = entry.taskDescription, _j))), (entry.hoursSpent !== undefined && (_k = {}, _k[constants_1.TIMESHEET_COLS.HOURS_SPENT] = entry.hoursSpent, _k))), (entry.status !== undefined && (_l = {}, _l[constants_1.TIMESHEET_COLS.STATUS] = entry.status, _l))), (entry.managerComments !== undefined && (_m = {}, _m[constants_1.TIMESHEET_COLS.MANAGER_COMMENTS] = entry.managerComments, _m))), (entry.submittedOn !== undefined && (_o = {}, _o[constants_1.TIMESHEET_COLS.SUBMITTED_ON] = (_s = (_r = entry.submittedOn) === null || _r === void 0 ? void 0 : _r.toISOString()) !== null && _s !== void 0 ? _s : null, _o))), (entry.reviewedBy !== undefined && (_p = {}, _p[constants_1.TIMESHEET_COLS.REVIEWED_BY] = entry.reviewedBy, _p))), (entry.reviewedOn !== undefined && (_q = {}, _q[constants_1.TIMESHEET_COLS.REVIEWED_ON] = (_u = (_t = entry.reviewedOn) === null || _t === void 0 ? void 0 : _t.toISOString()) !== null && _u !== void 0 ? _u : null, _q)));
}
// ─── Queries ──────────────────────────────────────────────────────────────────
/**
 * Get all timesheet entries for a specific employee on a specific date.
 */
function getEntriesForDate(date, employeeEmail) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var sp, filter, items;
        var _a;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    sp = (0, PnPSetup_1.getSP)();
                    filter = "".concat(constants_1.TIMESHEET_COLS.EMPLOYEE_EMAIL, " eq '").concat(employeeEmail, "' and ").concat(constants_1.TIMESHEET_COLS.ENTRY_DATE, " ge '").concat((0, dateUtils_1.toODataDate)(date), "' and ").concat(constants_1.TIMESHEET_COLS.ENTRY_DATE, " le '").concat((0, dateUtils_1.toODataEndOfDay)(date), "'");
                    return [4 /*yield*/, (_a = sp.web.lists
                            .getByTitle(constants_1.LISTS.TIMESHEET_ENTRIES)
                            .items)
                            .select.apply(_a, SELECT_FIELDS).filter(filter)
                            .orderBy(constants_1.TIMESHEET_COLS.ENTRY_DATE, true)
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
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var sp, filter, items;
        var _a;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    sp = (0, PnPSetup_1.getSP)();
                    filter = "".concat(constants_1.TIMESHEET_COLS.EMPLOYEE_EMAIL, " eq '").concat(employeeEmail, "' and ").concat(constants_1.TIMESHEET_COLS.ENTRY_DATE, " ge '").concat((0, dateUtils_1.toODataDate)(startDate), "' and ").concat(constants_1.TIMESHEET_COLS.ENTRY_DATE, " le '").concat((0, dateUtils_1.toODataEndOfDay)(endDate), "'");
                    return [4 /*yield*/, (_a = sp.web.lists
                            .getByTitle(constants_1.LISTS.TIMESHEET_ENTRIES)
                            .items)
                            .select.apply(_a, SELECT_FIELDS).filter(filter)
                            .orderBy(constants_1.TIMESHEET_COLS.ENTRY_DATE, false) // newest first
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
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var sp, filters, items;
        var _a;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    sp = (0, PnPSetup_1.getSP)();
                    filters = [
                        "".concat(constants_1.TIMESHEET_COLS.ENTRY_DATE, " ge '").concat((0, dateUtils_1.toODataDate)(startDate), "'"),
                        "".concat(constants_1.TIMESHEET_COLS.ENTRY_DATE, " le '").concat((0, dateUtils_1.toODataEndOfDay)(endDate), "'"),
                    ];
                    if (options === null || options === void 0 ? void 0 : options.employeeEmail) {
                        filters.push("".concat(constants_1.TIMESHEET_COLS.EMPLOYEE_EMAIL, " eq '").concat(options.employeeEmail, "'"));
                    }
                    if (options === null || options === void 0 ? void 0 : options.status) {
                        filters.push("".concat(constants_1.TIMESHEET_COLS.STATUS, " eq '").concat(options.status, "'"));
                    }
                    return [4 /*yield*/, (_a = sp.web.lists
                            .getByTitle(constants_1.LISTS.TIMESHEET_ENTRIES)
                            .items)
                            .select.apply(_a, SELECT_FIELDS).filter(filters.join(' and '))
                            .orderBy(constants_1.TIMESHEET_COLS.EMPLOYEE_EMAIL, true)
                            .orderBy(constants_1.TIMESHEET_COLS.ENTRY_DATE, false)
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
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var sp, filters, items;
        var _a;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    sp = (0, PnPSetup_1.getSP)();
                    filters = [
                        "".concat(constants_1.TIMESHEET_COLS.ENTRY_DATE, " ge '").concat((0, dateUtils_1.toODataDate)(startDate), "'"),
                        "".concat(constants_1.TIMESHEET_COLS.ENTRY_DATE, " le '").concat((0, dateUtils_1.toODataEndOfDay)(endDate), "'"),
                    ];
                    if (options === null || options === void 0 ? void 0 : options.employeeEmail) {
                        filters.push("".concat(constants_1.TIMESHEET_COLS.EMPLOYEE_EMAIL, " eq '").concat(options.employeeEmail, "'"));
                    }
                    if (options === null || options === void 0 ? void 0 : options.projectId) {
                        filters.push("".concat(constants_1.TIMESHEET_COLS.PROJECT_ID, " eq ").concat(options.projectId));
                    }
                    if (options === null || options === void 0 ? void 0 : options.status) {
                        filters.push("".concat(constants_1.TIMESHEET_COLS.STATUS, " eq '").concat(options.status, "'"));
                    }
                    return [4 /*yield*/, (_a = sp.web.lists
                            .getByTitle(constants_1.LISTS.TIMESHEET_ENTRIES)
                            .items)
                            .select.apply(_a, SELECT_FIELDS).filter(filters.join(' and '))
                            .orderBy(constants_1.TIMESHEET_COLS.EMPLOYEE_EMAIL, true)
                            .orderBy(constants_1.TIMESHEET_COLS.ENTRY_DATE, true)
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
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var sp, title, payload, result;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    sp = (0, PnPSetup_1.getSP)();
                    title = "Timesheet - ".concat(entry.employeeEmail, " - ").concat(entry.entryDate.toISOString().split('T')[0]);
                    payload = buildPayload(entry);
                    payload.Title = title;
                    return [4 /*yield*/, sp.web.lists
                            .getByTitle(constants_1.LISTS.TIMESHEET_ENTRIES)
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
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var sp, payload;
        var _a, _b, _c, _d;
        return tslib_1.__generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    sp = (0, PnPSetup_1.getSP)();
                    payload = {};
                    if (changes.projectId !== undefined)
                        payload[constants_1.TIMESHEET_COLS.PROJECT_ID] = changes.projectId;
                    if (changes.projectName !== undefined)
                        payload[constants_1.TIMESHEET_COLS.PROJECT_NAME] = changes.projectName;
                    if (changes.activityCategoryId !== undefined)
                        payload[constants_1.TIMESHEET_COLS.ACTIVITY_CATEGORY_ID] = changes.activityCategoryId;
                    if (changes.activityCategoryName !== undefined)
                        payload[constants_1.TIMESHEET_COLS.ACTIVITY_CATEGORY_NAME] = changes.activityCategoryName;
                    if (changes.taskDescription !== undefined)
                        payload[constants_1.TIMESHEET_COLS.TASK_DESCRIPTION] = changes.taskDescription;
                    if (changes.hoursSpent !== undefined)
                        payload[constants_1.TIMESHEET_COLS.HOURS_SPENT] = changes.hoursSpent;
                    if (changes.status !== undefined)
                        payload[constants_1.TIMESHEET_COLS.STATUS] = changes.status;
                    if (changes.managerComments !== undefined)
                        payload[constants_1.TIMESHEET_COLS.MANAGER_COMMENTS] = changes.managerComments;
                    if (changes.submittedOn !== undefined)
                        payload[constants_1.TIMESHEET_COLS.SUBMITTED_ON] = (_b = (_a = changes.submittedOn) === null || _a === void 0 ? void 0 : _a.toISOString()) !== null && _b !== void 0 ? _b : null;
                    if (changes.reviewedBy !== undefined)
                        payload[constants_1.TIMESHEET_COLS.REVIEWED_BY] = changes.reviewedBy;
                    if (changes.reviewedOn !== undefined)
                        payload[constants_1.TIMESHEET_COLS.REVIEWED_ON] = (_d = (_c = changes.reviewedOn) === null || _c === void 0 ? void 0 : _c.toISOString()) !== null && _d !== void 0 ? _d : null;
                    return [4 /*yield*/, sp.web.lists
                            .getByTitle(constants_1.LISTS.TIMESHEET_ENTRIES)
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
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var sp;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    sp = (0, PnPSetup_1.getSP)();
                    return [4 /*yield*/, sp.web.lists
                            .getByTitle(constants_1.LISTS.TIMESHEET_ENTRIES)
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
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var updatedRows, _i, rows_1, row, entry, newId;
        return tslib_1.__generator(this, function (_a) {
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
                    entry = tslib_1.__assign(tslib_1.__assign({}, baseEntry), { projectId: row.projectId, projectName: row.projectName, activityCategoryId: row.activityCategoryId, activityCategoryName: row.activityCategoryName, taskDescription: row.taskDescription, hoursSpent: row.hoursSpent, status: 'Draft' });
                    if (!row.id) return [3 /*break*/, 4];
                    return [4 /*yield*/, updateEntry(row.id, entry)];
                case 3:
                    _a.sent();
                    updatedRows.push(tslib_1.__assign(tslib_1.__assign({}, row), { isDirty: false }));
                    return [3 /*break*/, 6];
                case 4: return [4 /*yield*/, createEntry(entry)];
                case 5:
                    newId = _a.sent();
                    updatedRows.push(tslib_1.__assign(tslib_1.__assign({}, row), { id: newId, isDirty: false }));
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
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var now;
        return tslib_1.__generator(this, function (_a) {
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
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var now;
        return tslib_1.__generator(this, function (_a) {
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
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var now;
        return tslib_1.__generator(this, function (_a) {
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
//# sourceMappingURL=TimesheetService.js.map