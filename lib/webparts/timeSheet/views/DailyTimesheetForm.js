import { __assign, __awaiter, __generator, __spreadArray } from "tslib";
import * as React from 'react';
import { useContext, useState, useEffect, useCallback } from 'react';
import { Dropdown, TextField, PrimaryButton, DefaultButton, Spinner, SpinnerSize, MessageBar, MessageBarType, } from '@fluentui/react';
import { AppContext } from '../context/AppContext';
import { getEntriesForDate, saveDraftEntries, submitDayEntries, } from '../services/TimesheetService';
import { getActiveProjects } from '../services/ProjectService';
import { getActiveCategories } from '../services/CategoryService';
import { formatDateLabel, isFutureDate } from '../utils/dateUtils';
import { validateTaskRows } from '../utils/validationUtils';
import { fmt } from '../utils/fmt';
import * as strings from 'TimeSheetWebPartStrings';
import styles from './DailyTimesheetForm.module.scss';
var rowCounter = 0;
function newRowKey() { return "row-".concat(++rowCounter); }
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
// ─── SVG Icons ────────────────────────────────────────────────────────────────
var IconHome = function () { return (React.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "currentColor" },
    React.createElement("path", { d: "M8 1L1 7h2v7h4v-4h2v4h4V7h2L8 1z" }))); };
var IconLeft = function () { return (React.createElement("svg", { width: "18", height: "18", viewBox: "0 0 18 18", fill: "none" },
    React.createElement("path", { d: "M11 4L6 9l5 5", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }))); };
var IconRight = function () { return (React.createElement("svg", { width: "18", height: "18", viewBox: "0 0 18 18", fill: "none" },
    React.createElement("path", { d: "M7 4l5 5-5 5", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }))); };
var IconTrash = function () { return (React.createElement("svg", { width: "15", height: "15", viewBox: "0 0 14 14", fill: "currentColor" },
    React.createElement("path", { d: "M2 4h10M5 4V2h4v2M6 6v5M8 6v5M3 4l1 8h6l1-8", stroke: "currentColor", strokeWidth: "1.3", fill: "none", strokeLinecap: "round" }))); };
var IconPlus = function () { return (React.createElement("svg", { width: "15", height: "15", viewBox: "0 0 14 14", fill: "currentColor" },
    React.createElement("path", { d: "M7 1v12M1 7h12", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }))); };
var IconMinus = function () { return (React.createElement("svg", { width: "15", height: "15", viewBox: "0 0 14 14", fill: "currentColor" },
    React.createElement("path", { d: "M1 7h12", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }))); };
// ─── Status config ────────────────────────────────────────────────────────────
function statusBarType(status) {
    if (status === 'Approved')
        return MessageBarType.success;
    if (status === 'Submitted')
        return MessageBarType.info;
    if (status === 'Rejected')
        return MessageBarType.error;
    return MessageBarType.warning;
}
function statusLabel(status) {
    if (status === 'Approved')
        return strings.StatusApproved;
    if (status === 'Submitted')
        return strings.StatusSubmitted;
    if (status === 'Rejected')
        return strings.StatusRejected;
    return strings.StatusDraft;
}
// ─── Component ────────────────────────────────────────────────────────────────
var DailyTimesheetForm = function (_a) {
    var selectedDate = _a.selectedDate;
    var _b = useContext(AppContext), currentUser = _b.currentUser, navigateHome = _b.navigateHome, navigateTo = _b.navigateTo;
    var _c = useState(function () {
        var d = new Date(selectedDate);
        d.setHours(0, 0, 0, 0);
        return d;
    }), currentDate = _c[0], setCurrentDate = _c[1];
    var _d = useState([emptyRow()]), rows = _d[0], setRows = _d[1];
    var _f = useState([]), deletedIds = _f[0], setDeletedIds = _f[1];
    var _g = useState([]), projects = _g[0], setProjects = _g[1];
    var _h = useState([]), categories = _h[0], setCategories = _h[1];
    var _j = useState(true), loading = _j[0], setLoading = _j[1];
    var _k = useState(false), saving = _k[0], setSaving = _k[1];
    var _l = useState(false), submitConfirm = _l[0], setSubmitConfirm = _l[1];
    var _m = useState(null), dayStatus = _m[0], setDayStatus = _m[1];
    var _o = useState(''), managerComments = _o[0], setManagerComments = _o[1];
    var _p = useState(''), successMessage = _p[0], setSuccessMessage = _p[1];
    var _q = useState(''), errorMessage = _q[0], setErrorMessage = _q[1];
    var _r = useState([]), validationErrors = _r[0], setValidationErrors = _r[1];
    var _s = useState({}), rowErrors = _s[0], setRowErrors = _s[1];
    var isReadOnly = dayStatus === 'Submitted' || dayStatus === 'Approved';
    // ─── Data Loading ─────────────────────────────────────────────────────────
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
                    setRowErrors({});
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
                    setErrorMessage(strings.LoadFailed);
                    return [3 /*break*/, 5];
                case 4:
                    setLoading(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); }, [currentUser.email]);
    useEffect(function () { void loadData(currentDate); }, [currentDate, loadData]);
    // ─── Navigation ───────────────────────────────────────────────────────────
    var changeDate = function (offset) {
        var d = new Date(currentDate);
        d.setDate(d.getDate() + offset);
        d.setHours(0, 0, 0, 0);
        if (!isFutureDate(d)) {
            setCurrentDate(d);
            navigateTo('DailyForm', { selectedDate: d });
        }
    };
    var nextDay = function () {
        var n = new Date(currentDate);
        n.setDate(n.getDate() + 1);
        n.setHours(0, 0, 0, 0);
        return n;
    };
    // ─── Row Actions ──────────────────────────────────────────────────────────
    var updateRow = function (rowKey, changes) {
        setRows(function (prev) { return prev.map(function (r) { return r.rowKey === rowKey ? __assign(__assign(__assign({}, r), changes), { isDirty: true }) : r; }); });
        var changedFields = Object.keys(changes);
        setRowErrors(function (prev) {
            var _a;
            if (!prev[rowKey])
                return prev;
            var rowErrs = __assign({}, prev[rowKey]);
            changedFields.forEach(function (f) { delete rowErrs[f]; });
            if (Object.keys(rowErrs).length === 0) {
                var next = __assign({}, prev);
                delete next[rowKey];
                return next;
            }
            return __assign(__assign({}, prev), (_a = {}, _a[rowKey] = rowErrs, _a));
        });
    };
    var addRow = function () { return setRows(function (prev) { return __spreadArray(__spreadArray([], prev, true), [emptyRow()], false); }); };
    var deleteRow = function (rowKey, id) {
        if (rows.length === 1)
            return;
        setRows(function (prev) { return prev.filter(function (r) { return r.rowKey !== rowKey; }); });
        if (id)
            setDeletedIds(function (prev) { return __spreadArray(__spreadArray([], prev, true), [id], false); });
    };
    var adjustHours = function (rowKey, current, delta) {
        var next = parseFloat(Math.max(0.25, Math.min(24, current + delta)).toFixed(2));
        updateRow(rowKey, { hoursSpent: next });
    };
    var totalHours = rows.reduce(function (s, r) { return s + (r.hoursSpent || 0); }, 0);
    // ─── Save Draft ───────────────────────────────────────────────────────────
    var handleSaveDraft = function () { return __awaiter(void 0, void 0, void 0, function () {
        var result, newRowErrors_1, msgs, baseEntry, updatedRows, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    result = validateTaskRows(rows);
                    if (!result.valid) {
                        newRowErrors_1 = {};
                        result.errors.forEach(function (e) {
                            if (!newRowErrors_1[e.rowKey])
                                newRowErrors_1[e.rowKey] = {};
                            newRowErrors_1[e.rowKey][e.field] = true;
                        });
                        setRowErrors(newRowErrors_1);
                        msgs = result.errors.map(function (e) { return e.message; });
                        if (result.dayTotalError)
                            msgs.push(result.dayTotalError);
                        setValidationErrors(msgs);
                        return [2 /*return*/];
                    }
                    setRowErrors({});
                    setValidationErrors([]);
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
                    setSuccessMessage(strings.SaveDraftSuccess);
                    return [3 /*break*/, 5];
                case 3:
                    _a = _b.sent();
                    setErrorMessage(strings.SaveDraftFailed);
                    return [3 /*break*/, 5];
                case 4:
                    setSaving(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    // ─── Submit ───────────────────────────────────────────────────────────────
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
                    setSuccessMessage(strings.SubmitSuccess);
                    return [3 /*break*/, 6];
                case 4:
                    _a = _b.sent();
                    setErrorMessage(strings.SubmitFailed);
                    return [3 /*break*/, 6];
                case 5:
                    setSaving(false);
                    setSubmitConfirm(false);
                    return [7 /*endfinally*/];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    // ─── Dropdown options ─────────────────────────────────────────────────────
    var projectOptions = projects.map(function (p) { return ({ key: p.id, text: p.title }); });
    var categoryOptions = categories.map(function (c) { return ({ key: c.id, text: c.title }); });
    // ─── Loading ──────────────────────────────────────────────────────────────
    if (loading) {
        return (React.createElement("div", { className: styles.loadingWrap },
            React.createElement(Spinner, { size: SpinnerSize.large, label: "".concat(strings.Loading, "\u2026") })));
    }
    // ─── Date parts for display ───────────────────────────────────────────────
    var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var dayOfWeek = dayNames[currentDate.getDay()];
    var dateDisplay = formatDateLabel(currentDate);
    // ─── Render ───────────────────────────────────────────────────────────────
    return (React.createElement("div", { className: styles.page },
        React.createElement("div", { className: styles.heroHeader },
            React.createElement("button", { className: styles.homeBtn, title: strings.Home, onClick: navigateHome },
                React.createElement(IconHome, null)),
            React.createElement("div", { className: styles.heroText },
                React.createElement("span", { className: styles.heroLabel }, strings.DailyTimesheetTitle),
                currentUser.displayName && (React.createElement("span", { className: styles.heroUser }, currentUser.displayName))),
            React.createElement("div", { className: styles.heroBadges },
                React.createElement("span", { className: styles.hoursPill },
                    React.createElement("span", { className: styles.hoursPillNum }, totalHours.toFixed(2)),
                    React.createElement("span", { className: styles.hoursPillLabel }, strings.Hrs),
                    totalHours > 24 && React.createElement("span", { className: styles.hoursPillExceeds }, "!")),
                dayStatus && (React.createElement("span", { className: "".concat(styles.statusPill, " ").concat(styles["status".concat(dayStatus)]) }, statusLabel(dayStatus))))),
        React.createElement("div", { className: styles.dateNav },
            React.createElement("button", { className: styles.navArrow, title: strings.PreviousDay, onClick: function () { return changeDate(-1); } },
                React.createElement(IconLeft, null)),
            React.createElement("div", { className: styles.datePill },
                React.createElement("span", { className: styles.datePillDay }, dayOfWeek),
                React.createElement("span", { className: styles.datePillFull }, dateDisplay)),
            React.createElement("button", { className: styles.navArrow, title: strings.NextDay, onClick: function () { return changeDate(1); }, disabled: isFutureDate(nextDay()) },
                React.createElement(IconRight, null))),
        React.createElement("div", { className: styles.messages },
            successMessage && (React.createElement(MessageBar, { messageBarType: MessageBarType.success, isMultiline: false, onDismiss: function () { return setSuccessMessage(''); }, dismissButtonAriaLabel: strings.Close }, successMessage)),
            errorMessage && (React.createElement(MessageBar, { messageBarType: MessageBarType.error, isMultiline: false, onDismiss: function () { return setErrorMessage(''); }, dismissButtonAriaLabel: strings.Close }, errorMessage)),
            validationErrors.length > 0 && (React.createElement(MessageBar, { messageBarType: MessageBarType.warning, isMultiline: true, onDismiss: function () { return setValidationErrors([]); }, dismissButtonAriaLabel: strings.Close },
                React.createElement("ul", { className: styles.validList }, validationErrors.map(function (e, i) { return React.createElement("li", { key: i }, e); })))),
            dayStatus === 'Rejected' && managerComments && (React.createElement(MessageBar, { messageBarType: MessageBarType.error, isMultiline: true },
                React.createElement("strong", null,
                    strings.ManagerCommentLabel,
                    ":"),
                " ",
                managerComments)),
            isReadOnly && dayStatus !== 'Approved' && (React.createElement(MessageBar, { messageBarType: MessageBarType.info, isMultiline: false }, strings.SubmittedAwaitingReview))),
        React.createElement("div", { className: styles.taskStack },
            rows.map(function (row, idx) {
                var rErr = rowErrors[row.rowKey] || {};
                return (React.createElement("div", { key: row.rowKey, className: styles.taskCard, style: { animationDelay: "".concat(idx * 40, "ms") } },
                    React.createElement("div", { className: styles.cardHeader },
                        React.createElement("div", { className: styles.cardBadge },
                            React.createElement("span", { className: styles.cardBadgeDot }),
                            React.createElement("span", { className: styles.cardBadgeText }, fmt(strings.TaskLabel, { n: idx + 1 }))),
                        !isReadOnly && rows.length > 1 && (React.createElement("button", { className: styles.deleteRowBtn, title: strings.RemoveRow, onClick: function () { return deleteRow(row.rowKey, row.id); } },
                            React.createElement(IconTrash, null),
                            React.createElement("span", null, strings.Delete)))),
                    React.createElement("div", { className: styles.cardFields },
                        React.createElement("div", { className: styles.cardFieldHalf },
                            React.createElement(Dropdown, { label: strings.Project, placeholder: strings.SelectProjectOpt, selectedKey: row.projectId || null, options: projectOptions, disabled: isReadOnly, errorMessage: rErr.projectId ? 'Project is required.' : undefined, onChange: function (_e, opt) {
                                    var _a;
                                    var proj = projects.find(function (p) { return p.id === Number(opt === null || opt === void 0 ? void 0 : opt.key); });
                                    updateRow(row.rowKey, { projectId: Number(opt === null || opt === void 0 ? void 0 : opt.key) || 0, projectName: (_a = proj === null || proj === void 0 ? void 0 : proj.title) !== null && _a !== void 0 ? _a : '' });
                                }, styles: {
                                    dropdown: { borderRadius: 6 },
                                    title: { borderRadius: 6, fontSize: 13 },
                                    label: { fontSize: 12, fontWeight: 600, color: '#525252' },
                                } })),
                        React.createElement("div", { className: styles.cardFieldHalf },
                            React.createElement(Dropdown, { label: strings.ActivityCategory, placeholder: strings.SelectCategoryOpt, selectedKey: row.activityCategoryId || null, options: categoryOptions, disabled: isReadOnly, errorMessage: rErr.activityCategoryId ? 'Category is required.' : undefined, onChange: function (_e, opt) {
                                    var _a;
                                    var cat = categories.find(function (c) { return c.id === Number(opt === null || opt === void 0 ? void 0 : opt.key); });
                                    updateRow(row.rowKey, { activityCategoryId: Number(opt === null || opt === void 0 ? void 0 : opt.key) || 0, activityCategoryName: (_a = cat === null || cat === void 0 ? void 0 : cat.title) !== null && _a !== void 0 ? _a : '' });
                                }, styles: {
                                    dropdown: { borderRadius: 6 },
                                    title: { borderRadius: 6, fontSize: 13 },
                                    label: { fontSize: 12, fontWeight: 600, color: '#525252' },
                                } }))),
                    React.createElement("div", { className: styles.cardFieldFull },
                        React.createElement(TextField, { label: strings.TaskDescription, multiline: true, rows: 2, resizable: false, disabled: isReadOnly, value: row.taskDescription, placeholder: strings.DescribePlaceholder, errorMessage: rErr.taskDescription ? 'Description is required.' : undefined, onChange: function (_e, val) { return updateRow(row.rowKey, { taskDescription: val || '' }); }, styles: {
                                field: { fontSize: 13, borderRadius: 6 },
                                fieldGroup: { borderRadius: 6 },
                                subComponentStyles: { label: { root: { fontSize: 12, fontWeight: 600, color: '#525252' } } },
                            } })),
                    React.createElement("div", { className: styles.cardFooter },
                        React.createElement("span", { className: styles.hoursLabel }, strings.Hours),
                        React.createElement("div", { className: "".concat(styles.hoursStepper, " ").concat(rErr.hoursSpent ? styles.hoursError : '') },
                            React.createElement("button", { className: styles.stepBtn, disabled: isReadOnly || row.hoursSpent <= 0.25, onClick: function () { return adjustHours(row.rowKey, row.hoursSpent, -0.25); } },
                                React.createElement(IconMinus, null)),
                            React.createElement("span", { className: styles.hoursValue }, (row.hoursSpent || 0).toFixed(2)),
                            React.createElement("button", { className: styles.stepBtn, disabled: isReadOnly || row.hoursSpent >= 24, onClick: function () { return adjustHours(row.rowKey, row.hoursSpent, 0.25); } },
                                React.createElement(IconPlus, null))),
                        rErr.hoursSpent && (React.createElement("span", { className: styles.hoursErrMsg }, "Min 0.25 hrs required")))));
            }),
            !isReadOnly && (React.createElement("button", { className: styles.addTaskBtn, onClick: addRow, disabled: saving },
                React.createElement("span", { className: styles.addTaskIcon },
                    React.createElement(IconPlus, null)),
                React.createElement("span", null, strings.AddTask)))),
        React.createElement("div", { className: styles.footerBar }, !isReadOnly && (React.createElement("div", { className: styles.footerActions }, !submitConfirm ? (React.createElement(React.Fragment, null,
            React.createElement(DefaultButton, { text: strings.SaveDraft, iconProps: { iconName: 'Save' }, disabled: saving || totalHours > 24, onClick: handleSaveDraft, styles: { root: { borderRadius: 6 } } }),
            React.createElement(PrimaryButton, { text: saving ? strings.Saving : strings.Submit, iconProps: { iconName: 'Send' }, disabled: saving || totalHours > 24, onRenderIcon: saving ? function () { return React.createElement(Spinner, { size: SpinnerSize.small }); } : undefined, onClick: function () {
                    var result = validateTaskRows(rows);
                    if (!result.valid) {
                        var newRowErrors_2 = {};
                        result.errors.forEach(function (e) {
                            if (!newRowErrors_2[e.rowKey])
                                newRowErrors_2[e.rowKey] = {};
                            newRowErrors_2[e.rowKey][e.field] = true;
                        });
                        setRowErrors(newRowErrors_2);
                        var msgs = result.errors.map(function (e) { return e.message; });
                        if (result.dayTotalError)
                            msgs.push(result.dayTotalError);
                        setValidationErrors(msgs);
                        return;
                    }
                    setRowErrors({});
                    setValidationErrors([]);
                    setSubmitConfirm(true);
                }, styles: { root: { borderRadius: 6 } } }))) : (React.createElement("div", { className: styles.confirmBar },
            React.createElement("span", { className: styles.confirmText }, fmt(strings.ConfirmSubmitDate, { date: formatDateLabel(currentDate) })),
            React.createElement(PrimaryButton, { text: saving ? strings.Saving : strings.Confirm, iconProps: { iconName: 'CheckMark' }, disabled: saving, onClick: handleSubmit, styles: { root: { borderRadius: 6 } } }),
            React.createElement(DefaultButton, { text: strings.Cancel, disabled: saving, onClick: function () { return setSubmitConfirm(false); }, styles: { root: { borderRadius: 6 } } }))))))));
};
export default DailyTimesheetForm;
//# sourceMappingURL=DailyTimesheetForm.js.map