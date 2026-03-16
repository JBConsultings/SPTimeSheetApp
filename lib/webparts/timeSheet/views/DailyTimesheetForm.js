import { __assign, __awaiter, __generator, __spreadArray } from "tslib";
import * as React from 'react';
import { useContext, useState, useEffect, useCallback } from 'react';
import { AppContext } from '../context/AppContext';
import { getEntriesForDate, saveDraftEntries, submitDayEntries, } from '../services/TimesheetService';
import { getActiveProjects } from '../services/ProjectService';
import { getActiveCategories } from '../services/CategoryService';
import { formatDateLabel, isFutureDate } from '../utils/dateUtils';
import { validateTaskRows } from '../utils/validationUtils';
import styles from './DailyTimesheetForm.module.scss';
var rowCounter = 0;
function newRowKey() {
    return "row-".concat(++rowCounter);
}
function emptyRow() {
    return {
        rowKey: newRowKey(),
        projectId: 0,
        projectName: '',
        activityCategoryId: 0,
        activityCategoryName: '',
        taskDescription: '',
        hoursSpent: 0,
        isDirty: true,
    };
}
// ─── Inline SVG icons (no icon-font dependency) ──────────────────────────────
var IconHome = function () { return (React.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "currentColor" },
    React.createElement("path", { d: "M8 1L1 7h2v7h4v-4h2v4h4V7h2L8 1z" }))); };
var IconLeft = function () { return (React.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "currentColor" },
    React.createElement("path", { d: "M10 3L5 8l5 5", stroke: "currentColor", strokeWidth: "1.5", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }))); };
var IconRight = function () { return (React.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "currentColor" },
    React.createElement("path", { d: "M6 3l5 5-5 5", stroke: "currentColor", strokeWidth: "1.5", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }))); };
var IconAdd = function () { return (React.createElement("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "currentColor" },
    React.createElement("path", { d: "M7 1v12M1 7h12", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round" }))); };
var IconSave = function () { return (React.createElement("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "currentColor" },
    React.createElement("path", { d: "M2 2h8l2 2v8a1 1 0 01-1 1H3a1 1 0 01-1-1V2z", stroke: "currentColor", strokeWidth: "1.2", fill: "none" }),
    React.createElement("rect", { x: "4", y: "1", width: "6", height: "3", rx: ".5", fill: "currentColor" }),
    React.createElement("rect", { x: "3", y: "7", width: "8", height: "5", rx: ".5", fill: "currentColor" }))); };
var IconSend = function () { return (React.createElement("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "currentColor" },
    React.createElement("path", { d: "M1 1l12 6-12 6V8.5l8-1.5-8-1.5V1z" }))); };
var IconTrash = function () { return (React.createElement("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "currentColor" },
    React.createElement("path", { d: "M2 4h10M5 4V2h4v2M6 6v5M8 6v5M3 4l1 8h6l1-8", stroke: "currentColor", strokeWidth: "1.3", fill: "none", strokeLinecap: "round" }))); };
var IconClose = function () { return (React.createElement("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "currentColor" },
    React.createElement("path", { d: "M1 1l10 10M11 1L1 11", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }))); };
var IconCheck = function () { return (React.createElement("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "currentColor" },
    React.createElement("path", { d: "M2 7l4 4 6-6", stroke: "currentColor", strokeWidth: "1.8", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }))); };
var IconInfo = function () { return (React.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "currentColor" },
    React.createElement("circle", { cx: "8", cy: "8", r: "7", stroke: "currentColor", strokeWidth: "1.3", fill: "none" }),
    React.createElement("path", { d: "M8 7v4M8 5v.5", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "round" }))); };
// ─── Status badge config ──────────────────────────────────────────────────────
function statusClass(status) {
    if (status === 'Approved')
        return styles.approved;
    if (status === 'Submitted')
        return styles.submitted;
    if (status === 'Rejected')
        return styles.rejected;
    return styles.draft;
}
// ─── Component ────────────────────────────────────────────────────────────────
var DailyTimesheetForm = function (_a) {
    var selectedDate = _a.selectedDate;
    var _b = useContext(AppContext), currentUser = _b.currentUser, navigateHome = _b.navigateHome;
    var _c = useState(function () {
        var d = new Date(selectedDate);
        d.setHours(0, 0, 0, 0);
        return d;
    }), currentDate = _c[0], setCurrentDate = _c[1];
    var _d = useState([emptyRow()]), rows = _d[0], setRows = _d[1];
    var _e = useState([]), deletedIds = _e[0], setDeletedIds = _e[1];
    var _f = useState([]), projects = _f[0], setProjects = _f[1];
    var _g = useState([]), categories = _g[0], setCategories = _g[1];
    var _h = useState(true), loading = _h[0], setLoading = _h[1];
    var _j = useState(false), saving = _j[0], setSaving = _j[1];
    var _k = useState(false), submitConfirm = _k[0], setSubmitConfirm = _k[1];
    var _l = useState(null), dayStatus = _l[0], setDayStatus = _l[1];
    var _m = useState(''), managerComments = _m[0], setManagerComments = _m[1];
    var _o = useState(''), successMessage = _o[0], setSuccessMessage = _o[1];
    var _p = useState(''), errorMessage = _p[0], setErrorMessage = _p[1];
    var _q = useState([]), validationErrors = _q[0], setValidationErrors = _q[1];
    var isReadOnly = dayStatus === 'Submitted' || dayStatus === 'Approved';
    // ─── Data Loading ───────────────────────────────────────────────────────────
    var loadData = useCallback(function (date) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, entries, projs, cats, _b;
        var _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    setLoading(true);
                    setSuccessMessage('');
                    setErrorMessage('');
                    setValidationErrors([]);
                    _d.label = 1;
                case 1:
                    _d.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, Promise.all([
                            getEntriesForDate(date, currentUser.email),
                            getActiveProjects(),
                            getActiveCategories(),
                        ])];
                case 2:
                    _a = _d.sent(), entries = _a[0], projs = _a[1], cats = _a[2];
                    setProjects(projs);
                    setCategories(cats);
                    if (entries.length > 0) {
                        setDayStatus(entries[0].status);
                        setManagerComments((_c = entries[0].managerComments) !== null && _c !== void 0 ? _c : '');
                        setRows(entries.map(function (e) { return ({
                            rowKey: newRowKey(),
                            id: e.id,
                            projectId: e.projectId,
                            projectName: e.projectName,
                            activityCategoryId: e.activityCategoryId,
                            activityCategoryName: e.activityCategoryName,
                            taskDescription: e.taskDescription,
                            hoursSpent: e.hoursSpent,
                            isDirty: false,
                        }); }));
                        setDeletedIds([]);
                    }
                    else {
                        setDayStatus(null);
                        setManagerComments('');
                        setRows([emptyRow()]);
                        setDeletedIds([]);
                    }
                    return [3 /*break*/, 5];
                case 3:
                    _b = _d.sent();
                    setErrorMessage('Failed to load timesheet data. Please try again.');
                    return [3 /*break*/, 5];
                case 4:
                    setLoading(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); }, [currentUser.email]);
    useEffect(function () { void loadData(currentDate); }, [currentDate, loadData]);
    // ─── Navigation ─────────────────────────────────────────────────────────────
    var changeDate = function (offset) {
        var d = new Date(currentDate);
        d.setDate(d.getDate() + offset);
        d.setHours(0, 0, 0, 0);
        if (!isFutureDate(d))
            setCurrentDate(d);
    };
    var nextDay = function () {
        var n = new Date(currentDate);
        n.setDate(n.getDate() + 1);
        n.setHours(0, 0, 0, 0);
        return n;
    };
    // ─── Row Actions ────────────────────────────────────────────────────────────
    var updateRow = function (rowKey, changes) {
        return setRows(function (prev) { return prev.map(function (r) { return r.rowKey === rowKey ? __assign(__assign(__assign({}, r), changes), { isDirty: true }) : r; }); });
    };
    var addRow = function () { return setRows(function (prev) { return __spreadArray(__spreadArray([], prev, true), [emptyRow()], false); }); };
    var deleteRow = function (rowKey, id) {
        if (rows.length === 1)
            return;
        setRows(function (prev) { return prev.filter(function (r) { return r.rowKey !== rowKey; }); });
        if (id)
            setDeletedIds(function (prev) { return __spreadArray(__spreadArray([], prev, true), [id], false); });
    };
    var totalHours = rows.reduce(function (s, r) { return s + (r.hoursSpent || 0); }, 0);
    // ─── Save Draft ─────────────────────────────────────────────────────────────
    var handleSaveDraft = function () { return __awaiter(void 0, void 0, void 0, function () {
        var baseEntry, updatedRows, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    setSaving(true);
                    setSuccessMessage('');
                    setErrorMessage('');
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, 4, 5]);
                    baseEntry = {
                        employeeId: currentUser.id,
                        employeeName: currentUser.displayName,
                        employeeEmail: currentUser.email,
                        entryDate: currentDate,
                    };
                    return [4 /*yield*/, saveDraftEntries(rows, deletedIds, baseEntry)];
                case 2:
                    updatedRows = _b.sent();
                    setRows(updatedRows);
                    setDeletedIds([]);
                    setDayStatus('Draft');
                    setSuccessMessage('Draft saved successfully.');
                    return [3 /*break*/, 5];
                case 3:
                    _a = _b.sent();
                    setErrorMessage('Failed to save draft. Please try again.');
                    return [3 /*break*/, 5];
                case 4:
                    setSaving(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    // ─── Submit ─────────────────────────────────────────────────────────────────
    var handleSubmit = function () { return __awaiter(void 0, void 0, void 0, function () {
        var result, msgs, baseEntry, savedRows, ids, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    setValidationErrors([]);
                    result = validateTaskRows(rows);
                    if (!result.valid) {
                        msgs = result.errors.map(function (e) { return e.message; });
                        if (result.dayTotalError)
                            msgs.push(result.dayTotalError);
                        setValidationErrors(msgs);
                        setSubmitConfirm(false);
                        return [2 /*return*/];
                    }
                    setSaving(true);
                    setSuccessMessage('');
                    setErrorMessage('');
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 4, 5, 6]);
                    baseEntry = {
                        employeeId: currentUser.id,
                        employeeName: currentUser.displayName,
                        employeeEmail: currentUser.email,
                        entryDate: currentDate,
                    };
                    return [4 /*yield*/, saveDraftEntries(rows, deletedIds, baseEntry)];
                case 2:
                    savedRows = _b.sent();
                    ids = savedRows.filter(function (r) { return r.id !== undefined; }).map(function (r) { return r.id; });
                    return [4 /*yield*/, submitDayEntries(ids)];
                case 3:
                    _b.sent();
                    setDayStatus('Submitted');
                    setRows(savedRows.map(function (r) { return (__assign(__assign({}, r), { isDirty: false })); }));
                    setDeletedIds([]);
                    setSuccessMessage('Timesheet submitted successfully.');
                    return [3 /*break*/, 6];
                case 4:
                    _a = _b.sent();
                    setErrorMessage('Failed to submit timesheet. Please try again.');
                    return [3 /*break*/, 6];
                case 5:
                    setSaving(false);
                    setSubmitConfirm(false);
                    return [7 /*endfinally*/];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    // ─── Loading State ──────────────────────────────────────────────────────────
    if (loading) {
        return (React.createElement("div", { className: styles.loadingWrap },
            React.createElement("div", { className: styles.spinner }),
            React.createElement("span", null, "Loading timesheet\u2026")));
    }
    // ─── Render ─────────────────────────────────────────────────────────────────
    return (React.createElement("div", { className: styles.container },
        React.createElement("div", { className: styles.header },
            React.createElement("button", { className: styles.homeBtn, title: "Home", onClick: navigateHome },
                React.createElement(IconHome, null)),
            React.createElement("h1", { className: styles.title }, "Daily Timesheet")),
        React.createElement("div", { className: styles.dayNav },
            React.createElement("button", { className: styles.navBtn, title: "Previous day", onClick: function () { return changeDate(-1); } },
                React.createElement(IconLeft, null)),
            React.createElement("span", { className: styles.dateLabel }, formatDateLabel(currentDate)),
            React.createElement("button", { className: styles.navBtn, title: "Next day", onClick: function () { return changeDate(1); }, disabled: isFutureDate(nextDay()) },
                React.createElement(IconRight, null))),
        dayStatus && (React.createElement("div", { className: "".concat(styles.statusBar, " ").concat(statusClass(dayStatus)) },
            React.createElement("span", null,
                "Status: ",
                React.createElement("strong", null, dayStatus)),
            dayStatus === 'Rejected' && managerComments && (React.createElement("span", null,
                " \u2014 Manager: ",
                managerComments)))),
        successMessage && (React.createElement("div", { className: "".concat(styles.messageBar, " ").concat(styles.success) },
            React.createElement(IconCheck, null),
            React.createElement("span", null, successMessage),
            React.createElement("button", { className: styles.dismissBtn, onClick: function () { return setSuccessMessage(''); } },
                React.createElement(IconClose, null)))),
        errorMessage && (React.createElement("div", { className: "".concat(styles.messageBar, " ").concat(styles.error) },
            React.createElement("span", null, errorMessage),
            React.createElement("button", { className: styles.dismissBtn, onClick: function () { return setErrorMessage(''); } },
                React.createElement(IconClose, null)))),
        validationErrors.length > 0 && (React.createElement("div", { className: "".concat(styles.messageBar, " ").concat(styles.warning) },
            React.createElement("ul", { className: styles.validationList }, validationErrors.map(function (e, i) { return React.createElement("li", { key: i }, e); })))),
        React.createElement("div", { className: styles.tableCard },
            React.createElement("div", { className: styles.tableWrap },
                React.createElement("table", { className: styles.timesheetTable },
                    React.createElement("thead", null,
                        React.createElement("tr", null,
                            React.createElement("th", null, "Project"),
                            React.createElement("th", null, "Activity Category"),
                            React.createElement("th", { className: styles.colDesc }, "Task Description"),
                            React.createElement("th", { className: styles.colHours }, "Hours"),
                            !isReadOnly && React.createElement("th", { className: styles.colDelete }))),
                    React.createElement("tbody", null, rows.map(function (row) { return (React.createElement("tr", { key: row.rowKey },
                        React.createElement("td", null,
                            React.createElement("select", { className: styles.select, disabled: isReadOnly, value: row.projectId, onChange: function (e) {
                                    var _a;
                                    var proj = projects.find(function (p) { return p.id === Number(e.target.value); });
                                    updateRow(row.rowKey, { projectId: Number(e.target.value), projectName: (_a = proj === null || proj === void 0 ? void 0 : proj.title) !== null && _a !== void 0 ? _a : '' });
                                } },
                                React.createElement("option", { value: 0 }, "\u2014 Select project \u2014"),
                                projects.map(function (p) { return React.createElement("option", { key: p.id, value: p.id }, p.title); }))),
                        React.createElement("td", null,
                            React.createElement("select", { className: styles.select, disabled: isReadOnly, value: row.activityCategoryId, onChange: function (e) {
                                    var _a;
                                    var cat = categories.find(function (c) { return c.id === Number(e.target.value); });
                                    updateRow(row.rowKey, { activityCategoryId: Number(e.target.value), activityCategoryName: (_a = cat === null || cat === void 0 ? void 0 : cat.title) !== null && _a !== void 0 ? _a : '' });
                                } },
                                React.createElement("option", { value: 0 }, "\u2014 Select category \u2014"),
                                categories.map(function (c) { return React.createElement("option", { key: c.id, value: c.id }, c.title); }))),
                        React.createElement("td", null,
                            React.createElement("textarea", { className: styles.textarea, disabled: isReadOnly, rows: 2, value: row.taskDescription, onChange: function (e) { return updateRow(row.rowKey, { taskDescription: e.target.value }); }, placeholder: "Describe the task\u2026" })),
                        React.createElement("td", { className: styles.tdCenter },
                            React.createElement("input", { type: "number", className: styles.numberInput, disabled: isReadOnly, value: row.hoursSpent, min: 0.25, max: 24, step: 0.25, onChange: function (e) { return updateRow(row.rowKey, { hoursSpent: parseFloat(e.target.value) || 0 }); } })),
                        !isReadOnly && (React.createElement("td", { className: styles.tdCenter },
                            React.createElement("button", { className: styles.deleteBtn, title: "Remove row", disabled: rows.length === 1, onClick: function () { return deleteRow(row.rowKey, row.id); } },
                                React.createElement(IconTrash, null)))))); })))),
            React.createElement("div", { className: styles.totalsRow },
                React.createElement("span", { className: styles.totalLabel },
                    "Total: ",
                    totalHours.toFixed(2),
                    " hrs"),
                totalHours > 24 && React.createElement("span", { className: styles.totalExceeds }, "Exceeds 24 hr limit"))),
        !isReadOnly && (React.createElement("div", { className: styles.actions },
            React.createElement("button", { className: "".concat(styles.btn, " ").concat(styles.btnDefault), onClick: addRow, disabled: saving },
                React.createElement(IconAdd, null),
                " Add Task"),
            React.createElement("button", { className: "".concat(styles.btn, " ").concat(styles.btnDefault), onClick: handleSaveDraft, disabled: saving },
                React.createElement(IconSave, null),
                " Save Draft"),
            !submitConfirm ? (React.createElement("button", { className: "".concat(styles.btn, " ").concat(styles.btnPrimary), onClick: function () { return setSubmitConfirm(true); }, disabled: saving },
                React.createElement(IconSend, null),
                " Submit")) : (React.createElement("div", { className: styles.confirmRow },
                React.createElement("span", { className: styles.confirmText },
                    "Submit timesheet for ",
                    formatDateLabel(currentDate),
                    "?"),
                React.createElement("button", { className: "".concat(styles.btn, " ").concat(styles.btnConfirm), onClick: handleSubmit, disabled: saving },
                    React.createElement(IconCheck, null),
                    " Confirm"),
                React.createElement("button", { className: "".concat(styles.btn, " ").concat(styles.btnDefault), onClick: function () { return setSubmitConfirm(false); }, disabled: saving }, "Cancel"))))),
        isReadOnly && dayStatus !== 'Approved' && (React.createElement("div", { className: styles.readOnlyNotice },
            React.createElement(IconInfo, null),
            "This timesheet has been submitted and is awaiting review."))));
};
export default DailyTimesheetForm;
//# sourceMappingURL=DailyTimesheetForm.js.map