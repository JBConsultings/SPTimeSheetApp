"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var react_2 = require("@fluentui/react");
var AppContext_1 = require("../context/AppContext");
var TimesheetService_1 = require("../services/TimesheetService");
var ProjectService_1 = require("../services/ProjectService");
var CategoryService_1 = require("../services/CategoryService");
var dateUtils_1 = require("../utils/dateUtils");
var validationUtils_1 = require("../utils/validationUtils");
var fmt_1 = require("../utils/fmt");
var strings = tslib_1.__importStar(require("TimeSheetWebPartStrings"));
var CalendarView_module_scss_1 = tslib_1.__importDefault(require("./CalendarView.module.scss"));
// ─── Row key counter ──────────────────────────────────────────────────────────
var rowCounter = 0;
function newRowKey() { return "cv-row-".concat(++rowCounter); }
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
// ─── Icons ────────────────────────────────────────────────────────────────────
var IconHome = function () { return (React.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "currentColor" },
    React.createElement("path", { d: "M8 1L1 7h2v7h4v-4h2v4h4V7h2L8 1z" }))); };
var IconLeft = function () { return (React.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "currentColor" },
    React.createElement("path", { d: "M10 3L5 8l5 5", stroke: "currentColor", strokeWidth: "1.5", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }))); };
var IconRight = function () { return (React.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "currentColor" },
    React.createElement("path", { d: "M6 3l5 5-5 5", stroke: "currentColor", strokeWidth: "1.5", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }))); };
var IconClose = function () { return (React.createElement("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "currentColor" },
    React.createElement("path", { d: "M1 1l10 10M11 1L1 11", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }))); };
var IconAdd = function () { return (React.createElement("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "currentColor" },
    React.createElement("path", { d: "M7 1v12M1 7h12", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round" }))); };
var IconTrash = function () { return (React.createElement("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "currentColor" },
    React.createElement("path", { d: "M2 4h10M5 4V2h4v2M6 6v5M8 6v5M3 4l1 8h6l1-8", stroke: "currentColor", strokeWidth: "1.3", fill: "none", strokeLinecap: "round" }))); };
var IconCheck = function () { return (React.createElement("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "currentColor" },
    React.createElement("path", { d: "M2 7l4 4 6-6", stroke: "currentColor", strokeWidth: "1.8", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }))); };
var IconInfo = function () { return (React.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "currentColor" },
    React.createElement("circle", { cx: "8", cy: "8", r: "7", stroke: "currentColor", strokeWidth: "1.3", fill: "none" }),
    React.createElement("path", { d: "M8 7v4M8 5v.5", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "round" }))); };
// ─── Helpers ──────────────────────────────────────────────────────────────────
function toDateStr(d) {
    return "".concat(d.getFullYear(), "-").concat(String(d.getMonth() + 1).padStart(2, '0'), "-").concat(String(d.getDate()).padStart(2, '0'));
}
function sameMonth(d, month) {
    return d.getMonth() === month.getMonth() && d.getFullYear() === month.getFullYear();
}
function isToday(d) {
    var t = new Date();
    return d.getDate() === t.getDate() && d.getMonth() === t.getMonth() && d.getFullYear() === t.getFullYear();
}
function buildCalendarWeeks(month) {
    var year = month.getFullYear();
    var m = month.getMonth();
    var first = new Date(year, m, 1);
    var last = new Date(year, m + 1, 0);
    var start = new Date(first);
    start.setDate(start.getDate() - first.getDay());
    var end = new Date(last);
    end.setDate(end.getDate() + (6 - last.getDay()));
    var weeks = [];
    var cur = new Date(start);
    while (cur <= end) {
        var week = [];
        for (var i = 0; i < 7; i++) {
            week.push(new Date(cur));
            cur.setDate(cur.getDate() + 1);
        }
        weeks.push(week);
    }
    return weeks;
}
function groupByDate(entries) {
    var map = new Map();
    entries.forEach(function (e) {
        var key = toDateStr(e.entryDate);
        var arr = map.get(key);
        if (arr)
            arr.push(e);
        else
            map.set(key, [e]);
    });
    return map;
}
function dominantStatus(entries) {
    var statuses = entries.map(function (e) { return e.status; });
    if (statuses.indexOf('Rejected') !== -1)
        return 'Rejected';
    if (statuses.indexOf('Draft') !== -1)
        return 'Draft';
    if (statuses.indexOf('Submitted') !== -1)
        return 'Submitted';
    return 'Approved';
}
function statusColor(s) {
    if (s === 'Approved')
        return '#24a148';
    if (s === 'Submitted')
        return '#0f62fe';
    if (s === 'Rejected')
        return '#da1e28';
    return '#b28600';
}
function statusBg(s) {
    if (s === 'Approved')
        return '#defbe6';
    if (s === 'Submitted')
        return '#edf4ff';
    if (s === 'Rejected')
        return '#fff1f1';
    return '#fdf6d8';
}
// ─── Component ────────────────────────────────────────────────────────────────
var CalendarView = function () {
    var _a = (0, react_1.useContext)(AppContext_1.AppContext), currentUser = _a.currentUser, navigateHome = _a.navigateHome;
    // Current displayed month (1st of month, midnight)
    var _b = (0, react_1.useState)(function () {
        var d = new Date();
        d.setDate(1);
        d.setHours(0, 0, 0, 0);
        return d;
    }), currentMonth = _b[0], setCurrentMonth = _b[1];
    var calendarWeeks = (0, react_1.useMemo)(function () { return buildCalendarWeeks(currentMonth); }, [currentMonth]);
    // Range that covers the visible calendar grid (may include prev/next month days)
    var gridStart = (0, react_1.useMemo)(function () { return calendarWeeks[0][0]; }, [calendarWeeks]);
    var gridEnd = (0, react_1.useMemo)(function () {
        var last = calendarWeeks[calendarWeeks.length - 1];
        return last[last.length - 1];
    }, [calendarWeeks]);
    var _c = (0, react_1.useState)([]), monthEntries = _c[0], setMonthEntries = _c[1];
    var _d = (0, react_1.useState)(false), loading = _d[0], setLoading = _d[1];
    var _e = (0, react_1.useState)([]), projects = _e[0], setProjects = _e[1];
    var _f = (0, react_1.useState)([]), categories = _f[0], setCategories = _f[1];
    // ── Modal state ──────────────────────────────────────────────────────────
    var _g = (0, react_1.useState)(false), modalOpen = _g[0], setModalOpen = _g[1];
    var _h = (0, react_1.useState)(null), selectedDate = _h[0], setSelectedDate = _h[1];
    var _j = (0, react_1.useState)([emptyRow()]), modalRows = _j[0], setModalRows = _j[1];
    var _k = (0, react_1.useState)([]), modalDeletedIds = _k[0], setModalDeletedIds = _k[1];
    var _l = (0, react_1.useState)(null), modalDayStatus = _l[0], setModalDayStatus = _l[1];
    var _m = (0, react_1.useState)(''), modalMgrComments = _m[0], setModalMgrComments = _m[1];
    var _o = (0, react_1.useState)(false), modalSaving = _o[0], setModalSaving = _o[1];
    var _p = (0, react_1.useState)(''), modalSuccess = _p[0], setModalSuccess = _p[1];
    var _q = (0, react_1.useState)(''), modalError = _q[0], setModalError = _q[1];
    var _r = (0, react_1.useState)([]), modalValidErrors = _r[0], setModalValidErrors = _r[1];
    var _s = (0, react_1.useState)(false), submitConfirm = _s[0], setSubmitConfirm = _s[1];
    var _t = (0, react_1.useState)({}), rowErrors = _t[0], setRowErrors = _t[1];
    var isReadOnly = modalDayStatus === 'Submitted' || modalDayStatus === 'Approved';
    // ── Load projects & categories once ─────────────────────────────────────
    (0, react_1.useEffect)(function () {
        Promise.all([(0, ProjectService_1.getActiveProjects)(), (0, CategoryService_1.getActiveCategories)()])
            .then(function (_a) {
            var projs = _a[0], cats = _a[1];
            setProjects(projs);
            setCategories(cats);
        })
            .catch(function () { });
    }, []);
    // ── Load entries for visible grid range ──────────────────────────────────
    var loadEntries = (0, react_1.useCallback)(function (start, end) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var entries, _a;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    setLoading(true);
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, (0, TimesheetService_1.getEntriesForDateRange)(start, end, currentUser.email)];
                case 2:
                    entries = _b.sent();
                    setMonthEntries(entries);
                    return [3 /*break*/, 5];
                case 3:
                    _a = _b.sent();
                    setMonthEntries([]);
                    return [3 /*break*/, 5];
                case 4:
                    setLoading(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); }, [currentUser.email]);
    (0, react_1.useEffect)(function () {
        void loadEntries(gridStart, gridEnd);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentMonth]); // only reload when the month changes
    // ── Entry map keyed by date string ───────────────────────────────────────
    var entryMap = (0, react_1.useMemo)(function () { return groupByDate(monthEntries); }, [monthEntries]);
    // ── Month navigation ─────────────────────────────────────────────────────
    var goBack = function () {
        setCurrentMonth(function (prev) {
            var d = new Date(prev);
            d.setMonth(d.getMonth() - 1);
            return d;
        });
    };
    var goForward = function () {
        var next = new Date(currentMonth);
        next.setMonth(next.getMonth() + 1);
        var today = new Date();
        today.setDate(1);
        today.setHours(0, 0, 0, 0);
        if (next <= today)
            setCurrentMonth(next);
    };
    var isNextDisabled = function () {
        var next = new Date(currentMonth);
        next.setMonth(next.getMonth() + 1);
        var today = new Date();
        today.setDate(1);
        today.setHours(0, 0, 0, 0);
        return next > today;
    };
    // ── Open modal for a date cell click ─────────────────────────────────────
    var handleDayClick = function (day) {
        var _a;
        var clicked = new Date(day);
        clicked.setHours(0, 0, 0, 0);
        if ((0, dateUtils_1.isFutureDate)(clicked))
            return;
        var dateStr = toDateStr(clicked);
        var dayEntries = entryMap.get(dateStr) || [];
        setSelectedDate(clicked);
        setModalValidErrors([]);
        setModalSuccess('');
        setModalError('');
        setSubmitConfirm(false);
        setModalDeletedIds([]);
        setRowErrors({});
        if (dayEntries.length > 0) {
            setModalDayStatus(dayEntries[0].status);
            setModalMgrComments((_a = dayEntries[0].managerComments) !== null && _a !== void 0 ? _a : '');
            setModalRows(dayEntries.map(function (e) { return ({
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
        }
        else {
            setModalDayStatus(null);
            setModalMgrComments('');
            setModalRows([emptyRow()]);
        }
        setModalOpen(true);
        // Scroll to top so the modal is fully visible without needing to scroll
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    // ── Modal row helpers ─────────────────────────────────────────────────────
    var updateModalRow = function (rowKey, changes) {
        setModalRows(function (prev) { return prev.map(function (r) { return r.rowKey === rowKey ? tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, r), changes), { isDirty: true }) : r; }); });
        // Clear per-field errors for changed fields
        var changedFields = Object.keys(changes);
        setRowErrors(function (prev) {
            var _a;
            if (!prev[rowKey])
                return prev;
            var rowErrs = tslib_1.__assign({}, prev[rowKey]);
            changedFields.forEach(function (f) { delete rowErrs[f]; });
            if (Object.keys(rowErrs).length === 0) {
                var next = tslib_1.__assign({}, prev);
                delete next[rowKey];
                return next;
            }
            return tslib_1.__assign(tslib_1.__assign({}, prev), (_a = {}, _a[rowKey] = rowErrs, _a));
        });
    };
    var addModalRow = function () { return setModalRows(function (prev) { return tslib_1.__spreadArray(tslib_1.__spreadArray([], prev, true), [emptyRow()], false); }); };
    var deleteModalRow = function (rowKey, id) {
        if (modalRows.length === 1)
            return;
        setModalRows(function (prev) { return prev.filter(function (r) { return r.rowKey !== rowKey; }); });
        if (id)
            setModalDeletedIds(function (prev) { return tslib_1.__spreadArray(tslib_1.__spreadArray([], prev, true), [id], false); });
    };
    var totalModalHours = modalRows.reduce(function (s, r) { return s + (r.hoursSpent || 0); }, 0);
    var makeBaseEntry = function () {
        return selectedDate ? { employeeId: currentUser.id, employeeName: currentUser.displayName, employeeEmail: currentUser.email, entryDate: selectedDate } : null;
    };
    // ── Validate and highlight fields ─────────────────────────────────────────
    var validateAndHighlight = function () {
        var result = (0, validationUtils_1.validateTaskRows)(modalRows);
        if (!result.valid) {
            var newRowErrors_1 = {};
            result.errors.forEach(function (e) {
                if (!newRowErrors_1[e.rowKey])
                    newRowErrors_1[e.rowKey] = {};
                newRowErrors_1[e.rowKey][e.field] = true;
            });
            setRowErrors(newRowErrors_1);
            var msgs = result.errors.map(function (e) { return e.message; });
            if (result.dayTotalError)
                msgs.push(result.dayTotalError);
            setModalValidErrors(msgs);
            return false;
        }
        setRowErrors({});
        setModalValidErrors([]);
        return true;
    };
    // ── Save draft ────────────────────────────────────────────────────────────
    var handleSaveDraft = function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var base, result, newRowErrors_2, msgs, updated, _a;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    base = makeBaseEntry();
                    if (!base)
                        return [2 /*return*/];
                    result = (0, validationUtils_1.validateTaskRows)(modalRows);
                    if (!result.valid) {
                        newRowErrors_2 = {};
                        result.errors.forEach(function (e) {
                            if (!newRowErrors_2[e.rowKey])
                                newRowErrors_2[e.rowKey] = {};
                            newRowErrors_2[e.rowKey][e.field] = true;
                        });
                        setRowErrors(newRowErrors_2);
                        msgs = result.errors.map(function (e) { return e.message; });
                        if (result.dayTotalError)
                            msgs.push(result.dayTotalError);
                        setModalValidErrors(msgs);
                        return [2 /*return*/];
                    }
                    setRowErrors({});
                    setModalValidErrors([]);
                    setModalSaving(true);
                    setModalSuccess('');
                    setModalError('');
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, (0, TimesheetService_1.saveDraftEntries)(modalRows, modalDeletedIds, base)];
                case 2:
                    updated = _b.sent();
                    setModalRows(updated);
                    setModalDeletedIds([]);
                    setModalDayStatus('Draft');
                    setModalSuccess(strings.SaveDraftSuccess);
                    void loadEntries(gridStart, gridEnd);
                    return [3 /*break*/, 5];
                case 3:
                    _a = _b.sent();
                    setModalError(strings.SaveDraftFailed);
                    return [3 /*break*/, 5];
                case 4:
                    setModalSaving(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    // ── Submit ────────────────────────────────────────────────────────────────
    var handleSubmit = function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var base, result, msgs, savedRows, ids, _a;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    base = makeBaseEntry();
                    if (!base)
                        return [2 /*return*/];
                    setModalValidErrors([]);
                    result = (0, validationUtils_1.validateTaskRows)(modalRows);
                    if (!result.valid) {
                        msgs = result.errors.map(function (e) { return e.message; });
                        if (result.dayTotalError)
                            msgs.push(result.dayTotalError);
                        setModalValidErrors(msgs);
                        setSubmitConfirm(false);
                        return [2 /*return*/];
                    }
                    setModalSaving(true);
                    setModalSuccess('');
                    setModalError('');
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 4, 5, 6]);
                    return [4 /*yield*/, (0, TimesheetService_1.saveDraftEntries)(modalRows, modalDeletedIds, base)];
                case 2:
                    savedRows = _b.sent();
                    ids = savedRows.filter(function (r) { return r.id !== undefined; }).map(function (r) { return r.id; });
                    return [4 /*yield*/, (0, TimesheetService_1.submitDayEntries)(ids)];
                case 3:
                    _b.sent();
                    setModalDayStatus('Submitted');
                    setModalRows(savedRows.map(function (r) { return (tslib_1.__assign(tslib_1.__assign({}, r), { isDirty: false })); }));
                    setModalDeletedIds([]);
                    setModalSuccess(strings.SubmitSuccess);
                    void loadEntries(gridStart, gridEnd);
                    return [3 /*break*/, 6];
                case 4:
                    _a = _b.sent();
                    setModalError(strings.SubmitFailed);
                    return [3 /*break*/, 6];
                case 5:
                    setModalSaving(false);
                    setSubmitConfirm(false);
                    return [7 /*endfinally*/];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    // ── Entries below calendar (sorted newest first) ──────────────────────────
    var sortedEntries = (0, react_1.useMemo)(function () { return tslib_1.__spreadArray([], monthEntries, true).sort(function (a, b) { return b.entryDate.getTime() - a.entryDate.getTime(); }); }, [monthEntries]);
    var entriesByDate = (0, react_1.useMemo)(function () { return groupByDate(sortedEntries); }, [sortedEntries]);
    // ── Render ────────────────────────────────────────────────────────────────
    return (React.createElement("div", { className: CalendarView_module_scss_1.default.container },
        React.createElement("div", { className: CalendarView_module_scss_1.default.header },
            React.createElement("button", { className: CalendarView_module_scss_1.default.homeBtn, title: "Home", onClick: navigateHome },
                React.createElement(IconHome, null)),
            React.createElement("h1", { className: CalendarView_module_scss_1.default.title }, strings.CalendarTitle),
            loading && React.createElement("div", { className: CalendarView_module_scss_1.default.headerSpinner })),
        React.createElement("div", { className: CalendarView_module_scss_1.default.calendarCard },
            React.createElement("div", { className: CalendarView_module_scss_1.default.calendarToolbar },
                React.createElement("button", { className: CalendarView_module_scss_1.default.navBtn, onClick: goBack },
                    React.createElement(IconLeft, null)),
                React.createElement("span", { className: CalendarView_module_scss_1.default.monthLabel },
                    strings.MonthNames[currentMonth.getMonth()],
                    " ",
                    currentMonth.getFullYear()),
                React.createElement("button", { className: CalendarView_module_scss_1.default.navBtn, onClick: goForward, disabled: isNextDisabled() },
                    React.createElement(IconRight, null))),
            React.createElement("div", { className: CalendarView_module_scss_1.default.calendarGrid },
                strings.DayNamesShort.map(function (d) { return (React.createElement("div", { key: d, className: CalendarView_module_scss_1.default.dayHeader }, d)); }),
                calendarWeeks.map(function (week, wi) {
                    return week.map(function (day, di) {
                        var dateStr = toDateStr(day);
                        var dayEntries = entryMap.get(dateStr);
                        var inMonth = sameMonth(day, currentMonth);
                        var today = isToday(day);
                        var future = (0, dateUtils_1.isFutureDate)(day);
                        var status = dayEntries ? dominantStatus(dayEntries) : null;
                        var totalHrs = dayEntries ? dayEntries.reduce(function (s, e) { return s + e.hoursSpent; }, 0) : 0;
                        return (React.createElement("div", { key: "".concat(wi, "-").concat(di), className: [
                                CalendarView_module_scss_1.default.dayCell,
                                !inMonth ? CalendarView_module_scss_1.default.otherMonth : '',
                                today ? CalendarView_module_scss_1.default.today : '',
                                future ? CalendarView_module_scss_1.default.future : '',
                                !future ? CalendarView_module_scss_1.default.clickable : '',
                            ].join(' '), onClick: function () { return !future && handleDayClick(day); }, title: future ? '' : (dayEntries ? strings.ClickToEdit : strings.ClickToAdd) },
                            React.createElement("span", { className: CalendarView_module_scss_1.default.dayNumber }, day.getDate()),
                            status && (React.createElement("div", { className: CalendarView_module_scss_1.default.eventPill, style: { background: statusColor(status), color: status === 'Draft' ? '#4b3800' : '#fff' } },
                                totalHrs.toFixed(1),
                                "h \u00B7 ",
                                status))));
                    });
                }))),
        React.createElement("div", { className: CalendarView_module_scss_1.default.legend },
            ['Draft', 'Submitted', 'Approved', 'Rejected'].map(function (s) { return (React.createElement("span", { key: s, className: CalendarView_module_scss_1.default.legendItem },
                React.createElement("span", { className: CalendarView_module_scss_1.default.dot, style: { background: statusColor(s) } }),
                s)); }),
            React.createElement("span", { className: CalendarView_module_scss_1.default.legendHint }, strings.LegendHint)),
        React.createElement("div", { className: CalendarView_module_scss_1.default.entriesSection },
            React.createElement("h2", { className: CalendarView_module_scss_1.default.sectionTitle }, strings.EntriesThisPeriod),
            monthEntries.length === 0 ? (React.createElement("p", { className: CalendarView_module_scss_1.default.emptyHint }, strings.NoEntriesHint)) : (React.createElement("div", { className: CalendarView_module_scss_1.default.entriesWrap }, Array.from(entriesByDate.entries()).map(function (_a) {
                var dateStr = _a[0], dayEntries = _a[1];
                var status = dominantStatus(dayEntries);
                var totalHours = dayEntries.reduce(function (s, e) { return s + e.hoursSpent; }, 0);
                return (React.createElement("div", { key: dateStr, className: CalendarView_module_scss_1.default.dateGroup },
                    React.createElement("div", { className: CalendarView_module_scss_1.default.dateGroupHeader },
                        React.createElement("span", { className: CalendarView_module_scss_1.default.dateLabel }, (0, dateUtils_1.formatDateLabel)(new Date("".concat(dateStr, "T00:00:00")))),
                        React.createElement("span", { className: CalendarView_module_scss_1.default.statusBadge, style: { background: statusBg(status), color: statusColor(status) } }, status),
                        React.createElement("span", { className: CalendarView_module_scss_1.default.dateHours },
                            totalHours.toFixed(2),
                            " hrs")),
                    React.createElement("div", { className: CalendarView_module_scss_1.default.tableWrap },
                        React.createElement("table", { className: CalendarView_module_scss_1.default.entriesTable },
                            React.createElement("thead", null,
                                React.createElement("tr", null,
                                    React.createElement("th", null, strings.Project),
                                    React.createElement("th", null, strings.Category),
                                    React.createElement("th", null, strings.TaskDescription),
                                    React.createElement("th", null, strings.Hours))),
                            React.createElement("tbody", null, dayEntries.map(function (entry) { return (React.createElement("tr", { key: entry.id },
                                React.createElement("td", null, entry.projectName),
                                React.createElement("td", null, entry.activityCategoryName),
                                React.createElement("td", null, entry.taskDescription),
                                React.createElement("td", null, entry.hoursSpent.toFixed(2)))); }))))));
            })))),
        selectedDate && (React.createElement(react_2.Modal, { isOpen: modalOpen, onDismiss: function () { return setModalOpen(false); }, isBlocking: false, containerClassName: CalendarView_module_scss_1.default.modal, scrollableContentClassName: CalendarView_module_scss_1.default.modalScrollable },
            React.createElement("div", { className: CalendarView_module_scss_1.default.modalHeader },
                React.createElement("div", { className: CalendarView_module_scss_1.default.modalDateBlock },
                    React.createElement("span", { className: CalendarView_module_scss_1.default.modalDayNum }, selectedDate.getDate()),
                    React.createElement("div", { className: CalendarView_module_scss_1.default.modalDateMeta },
                        React.createElement("span", { className: CalendarView_module_scss_1.default.modalDateMonth },
                            strings.MonthNames[selectedDate.getMonth()],
                            " ",
                            selectedDate.getFullYear()),
                        React.createElement("span", { className: CalendarView_module_scss_1.default.modalDateWeekday }, strings.DayNamesFull[selectedDate.getDay()]))),
                React.createElement("div", { className: CalendarView_module_scss_1.default.modalHeaderRight },
                    modalDayStatus && (React.createElement("span", { className: CalendarView_module_scss_1.default.modalStatusChip, "data-status": modalDayStatus.toLowerCase() },
                        React.createElement("span", { className: CalendarView_module_scss_1.default.modalStatusDot }),
                        modalDayStatus)),
                    React.createElement("button", { className: CalendarView_module_scss_1.default.modalCloseBtn, onClick: function () { return setModalOpen(false); }, title: "Close" },
                        React.createElement(IconClose, null)))),
            (modalSuccess || modalError || modalValidErrors.length > 0 || (isReadOnly && modalDayStatus !== 'Approved')) && (React.createElement("div", { className: CalendarView_module_scss_1.default.modalAlerts },
                modalSuccess && (React.createElement("div", { className: "".concat(CalendarView_module_scss_1.default.alert, " ").concat(CalendarView_module_scss_1.default.alertSuccess) },
                    React.createElement(IconCheck, null),
                    React.createElement("span", null, modalSuccess),
                    React.createElement("button", { className: CalendarView_module_scss_1.default.alertDismiss, onClick: function () { return setModalSuccess(''); } },
                        React.createElement(IconClose, null)))),
                modalError && (React.createElement("div", { className: "".concat(CalendarView_module_scss_1.default.alert, " ").concat(CalendarView_module_scss_1.default.alertError) },
                    React.createElement("span", null, modalError),
                    React.createElement("button", { className: CalendarView_module_scss_1.default.alertDismiss, onClick: function () { return setModalError(''); } },
                        React.createElement(IconClose, null)))),
                modalValidErrors.length > 0 && (React.createElement("div", { className: "".concat(CalendarView_module_scss_1.default.alert, " ").concat(CalendarView_module_scss_1.default.alertWarn) },
                    React.createElement("ul", { className: CalendarView_module_scss_1.default.validationList }, modalValidErrors.map(function (e, i) { return React.createElement("li", { key: i }, e); })))),
                isReadOnly && modalDayStatus !== 'Approved' && (React.createElement("div", { className: "".concat(CalendarView_module_scss_1.default.alert, " ").concat(CalendarView_module_scss_1.default.alertInfo) },
                    React.createElement(IconInfo, null),
                    React.createElement("span", null, strings.SubmittedAwaiting))))),
            modalDayStatus === 'Rejected' && modalMgrComments && (React.createElement("div", { className: CalendarView_module_scss_1.default.rejectedBanner },
                React.createElement("span", { className: CalendarView_module_scss_1.default.rejectedLabel }, strings.ManagerFeedback),
                React.createElement("span", { className: CalendarView_module_scss_1.default.rejectedMsg }, modalMgrComments))),
            React.createElement("div", { className: CalendarView_module_scss_1.default.taskCardsWrap },
                modalRows.map(function (row, idx) {
                    var _a, _b, _c, _d;
                    return (React.createElement("div", { key: row.rowKey, className: CalendarView_module_scss_1.default.taskCard },
                        React.createElement("div", { className: CalendarView_module_scss_1.default.taskCardTop },
                            React.createElement("span", { className: CalendarView_module_scss_1.default.taskIndex }, (0, fmt_1.fmt)(strings.TaskLabel, { n: idx + 1 })),
                            !isReadOnly && modalRows.length > 1 && (React.createElement("button", { className: CalendarView_module_scss_1.default.taskDeleteBtn, onClick: function () { return deleteModalRow(row.rowKey, row.id); }, title: strings.RemoveTask },
                                React.createElement(IconTrash, null)))),
                        React.createElement("div", { className: CalendarView_module_scss_1.default.taskFieldsRow },
                            React.createElement("div", { className: CalendarView_module_scss_1.default.taskField },
                                React.createElement("label", { className: CalendarView_module_scss_1.default.fieldLbl }, strings.Project),
                                React.createElement("select", { className: CalendarView_module_scss_1.default.fieldSelect, style: ((_a = rowErrors[row.rowKey]) === null || _a === void 0 ? void 0 : _a.projectId) ? { borderColor: '#da1e28' } : {}, disabled: isReadOnly, value: row.projectId, onChange: function (e) {
                                        var _a;
                                        var proj = projects.find(function (p) { return p.id === Number(e.target.value); });
                                        updateModalRow(row.rowKey, { projectId: Number(e.target.value), projectName: (_a = proj === null || proj === void 0 ? void 0 : proj.title) !== null && _a !== void 0 ? _a : '' });
                                    } },
                                    React.createElement("option", { value: 0 }, strings.SelectProject),
                                    projects.map(function (p) { return React.createElement("option", { key: p.id, value: p.id }, p.title); }))),
                            React.createElement("div", { className: CalendarView_module_scss_1.default.taskField },
                                React.createElement("label", { className: CalendarView_module_scss_1.default.fieldLbl }, strings.Category),
                                React.createElement("select", { className: CalendarView_module_scss_1.default.fieldSelect, style: ((_b = rowErrors[row.rowKey]) === null || _b === void 0 ? void 0 : _b.activityCategoryId) ? { borderColor: '#da1e28' } : {}, disabled: isReadOnly, value: row.activityCategoryId, onChange: function (e) {
                                        var _a;
                                        var cat = categories.find(function (c) { return c.id === Number(e.target.value); });
                                        updateModalRow(row.rowKey, { activityCategoryId: Number(e.target.value), activityCategoryName: (_a = cat === null || cat === void 0 ? void 0 : cat.title) !== null && _a !== void 0 ? _a : '' });
                                    } },
                                    React.createElement("option", { value: 0 }, strings.SelectCategory),
                                    categories.map(function (c) { return React.createElement("option", { key: c.id, value: c.id }, c.title); }))),
                            React.createElement("div", { className: CalendarView_module_scss_1.default.hoursField },
                                React.createElement("label", { className: CalendarView_module_scss_1.default.fieldLbl }, strings.Hours),
                                React.createElement("div", { className: CalendarView_module_scss_1.default.hoursStepper },
                                    React.createElement("button", { className: CalendarView_module_scss_1.default.stepBtn, disabled: isReadOnly || row.hoursSpent <= 0.25, onClick: function () { return updateModalRow(row.rowKey, { hoursSpent: Math.max(0.25, parseFloat((row.hoursSpent - 0.25).toFixed(2))) }); } }, "\u2212"),
                                    React.createElement("input", { type: "number", className: CalendarView_module_scss_1.default.hoursInput, style: ((_c = rowErrors[row.rowKey]) === null || _c === void 0 ? void 0 : _c.hoursSpent) ? { borderColor: '#da1e28' } : {}, disabled: isReadOnly, value: row.hoursSpent, min: 0.25, max: 24, step: 0.25, onChange: function (e) { return updateModalRow(row.rowKey, { hoursSpent: parseFloat(e.target.value) || 0 }); } }),
                                    React.createElement("button", { className: CalendarView_module_scss_1.default.stepBtn, disabled: isReadOnly || row.hoursSpent >= 24, onClick: function () { return updateModalRow(row.rowKey, { hoursSpent: Math.min(24, parseFloat((row.hoursSpent + 0.25).toFixed(2))) }); } }, "+")))),
                        React.createElement("div", { className: CalendarView_module_scss_1.default.taskDescField },
                            React.createElement("label", { className: CalendarView_module_scss_1.default.fieldLbl }, strings.Description),
                            React.createElement("textarea", { className: CalendarView_module_scss_1.default.fieldTextarea, style: ((_d = rowErrors[row.rowKey]) === null || _d === void 0 ? void 0 : _d.taskDescription) ? { borderColor: '#da1e28' } : {}, disabled: isReadOnly, rows: 2, value: row.taskDescription, placeholder: strings.WhatDidYouWorkOn, onChange: function (e) { return updateModalRow(row.rowKey, { taskDescription: e.target.value }); } }))));
                }),
                !isReadOnly && (React.createElement("button", { className: CalendarView_module_scss_1.default.addTaskBtn, onClick: addModalRow, disabled: modalSaving },
                    React.createElement(IconAdd, null),
                    React.createElement("span", null, strings.AddAnotherTask)))),
            React.createElement("div", { className: CalendarView_module_scss_1.default.modalFooter },
                React.createElement("div", { className: CalendarView_module_scss_1.default.footerTotal },
                    React.createElement("span", { className: CalendarView_module_scss_1.default.footerTotalNum }, totalModalHours.toFixed(2)),
                    React.createElement("span", { className: CalendarView_module_scss_1.default.footerTotalLabel },
                        strings.HrsTotal,
                        totalModalHours > 24 ? " \u00B7 ".concat(strings.OverLimit) : '')),
                !isReadOnly && (React.createElement("div", { className: CalendarView_module_scss_1.default.footerBtns }, !submitConfirm ? (React.createElement(React.Fragment, null,
                    React.createElement(react_2.DefaultButton, { text: strings.SaveDraft, iconProps: { iconName: 'Save' }, onClick: handleSaveDraft, disabled: totalModalHours > 24 || modalSaving }),
                    React.createElement(react_2.PrimaryButton, { text: strings.Submit, iconProps: { iconName: 'Send' }, onClick: function () { if (validateAndHighlight())
                            setSubmitConfirm(true); }, disabled: totalModalHours > 24 || modalSaving }))) : (React.createElement(React.Fragment, null,
                    React.createElement("span", { className: CalendarView_module_scss_1.default.confirmPrompt }, strings.ConfirmSubmit),
                    React.createElement(react_2.DefaultButton, { text: strings.Cancel, onClick: function () { return setSubmitConfirm(false); }, disabled: totalModalHours > 24 || modalSaving }),
                    React.createElement(react_2.PrimaryButton, { text: strings.YesSubmit, iconProps: { iconName: 'CheckMark' }, onClick: handleSubmit, disabled: totalModalHours > 24 || modalSaving }))))))))));
};
exports.default = CalendarView;
//# sourceMappingURL=CalendarView.js.map