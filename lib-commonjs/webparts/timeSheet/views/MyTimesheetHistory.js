"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var AppContext_1 = require("../context/AppContext");
var TimesheetService_1 = require("../services/TimesheetService");
var dateUtils_1 = require("../utils/dateUtils");
var MyTimesheetHistory_module_scss_1 = tslib_1.__importDefault(require("./MyTimesheetHistory.module.scss"));
// ─── Constants ────────────────────────────────────────────────────────────────
var STATUS_OPTIONS = [
    { key: 'All', text: 'All Statuses' },
    { key: 'Draft', text: 'Draft' },
    { key: 'Submitted', text: 'Submitted' },
    { key: 'Approved', text: 'Approved' },
    { key: 'Rejected', text: 'Rejected' },
];
// ─── Helpers ──────────────────────────────────────────────────────────────────
function badgeClass(status) {
    if (status === 'Approved')
        return MyTimesheetHistory_module_scss_1.default.approved;
    if (status === 'Submitted')
        return MyTimesheetHistory_module_scss_1.default.submitted;
    if (status === 'Rejected')
        return MyTimesheetHistory_module_scss_1.default.rejected;
    return MyTimesheetHistory_module_scss_1.default.draft;
}
function toDateInputValue(d) {
    // Returns yyyy-mm-dd for <input type="date">
    var y = d.getFullYear();
    var m = String(d.getMonth() + 1).padStart(2, '0');
    var day = String(d.getDate()).padStart(2, '0');
    return "".concat(y, "-").concat(m, "-").concat(day);
}
function fromDateInputValue(v) {
    var _a = v.split('-').map(Number), y = _a[0], m = _a[1], d = _a[2];
    var date = new Date(y, m - 1, d);
    date.setHours(0, 0, 0, 0);
    return date;
}
function groupByDate(entries) {
    var map = new Map();
    entries.forEach(function (e) {
        var key = e.entryDate.toISOString().split('T')[0];
        if (!map.has(key))
            map.set(key, []);
        map.get(key).push(e);
    });
    return Array.from(map.entries())
        .sort(function (_a, _b) {
        var a = _a[0];
        var b = _b[0];
        return b.localeCompare(a);
    })
        .map(function (_a) {
        var dayEntries = _a[1];
        return ({
            date: dayEntries[0].entryDate,
            entries: dayEntries,
            totalHours: dayEntries.reduce(function (s, e) { return s + e.hoursSpent; }, 0),
            status: dayEntries[0].status,
        });
    });
}
// ─── SVG Icons ────────────────────────────────────────────────────────────────
var IconHome = function () { return (React.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "currentColor" },
    React.createElement("path", { d: "M8 1L1 7h2v7h4v-4h2v4h4V7h2L8 1z" }))); };
var IconError = function () { return (React.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "currentColor" },
    React.createElement("circle", { cx: "8", cy: "8", r: "7", stroke: "currentColor", strokeWidth: "1.3", fill: "none" }),
    React.createElement("path", { d: "M8 4v4M8 10v1", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round" }))); };
var IconCalendar = function (_a) {
    var className = _a.className;
    return (React.createElement("svg", { className: className, width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        React.createElement("rect", { x: "6", y: "10", width: "36", height: "32", rx: "4", stroke: "currentColor", strokeWidth: "2.5" }),
        React.createElement("path", { d: "M6 18h36", stroke: "currentColor", strokeWidth: "2.5" }),
        React.createElement("path", { d: "M16 6v8M32 6v8", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round" }),
        React.createElement("rect", { x: "13", y: "24", width: "6", height: "5", rx: "1", fill: "currentColor", opacity: ".4" }),
        React.createElement("rect", { x: "21", y: "24", width: "6", height: "5", rx: "1", fill: "currentColor", opacity: ".4" }),
        React.createElement("rect", { x: "29", y: "24", width: "6", height: "5", rx: "1", fill: "currentColor", opacity: ".4" })));
};
var IconChevronRight = function () { return (React.createElement("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "currentColor" },
    React.createElement("path", { d: "M5 2l5 5-5 5", stroke: "currentColor", strokeWidth: "1.5", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }))); };
// ─── Component ────────────────────────────────────────────────────────────────
var MyTimesheetHistory = function () {
    var _a = (0, react_1.useContext)(AppContext_1.AppContext), currentUser = _a.currentUser, navigateTo = _a.navigateTo, navigateHome = _a.navigateHome;
    var _b = (0, dateUtils_1.currentMonthRange)(), defaultStart = _b.start, defaultEnd = _b.end;
    var _c = (0, react_1.useState)(defaultStart), startDate = _c[0], setStartDate = _c[1];
    var _d = (0, react_1.useState)(defaultEnd), endDate = _d[0], setEndDate = _d[1];
    var _e = (0, react_1.useState)('All'), statusFilter = _e[0], setStatusFilter = _e[1];
    var _f = (0, react_1.useState)([]), summaries = _f[0], setSummaries = _f[1];
    var _g = (0, react_1.useState)(true), loading = _g[0], setLoading = _g[1];
    var _h = (0, react_1.useState)(''), error = _h[0], setError = _h[1];
    // ─── Data fetch ─────────────────────────────────────────────────────────────
    (0, react_1.useEffect)(function () {
        var cancelled = false;
        setLoading(true);
        setError('');
        (0, TimesheetService_1.getEntriesForDateRange)(startDate, endDate, currentUser.email)
            .then(function (entries) {
            if (cancelled)
                return;
            setSummaries(groupByDate(entries));
            setLoading(false);
        })
            .catch(function () {
            if (!cancelled) {
                setError('Failed to load timesheet history.');
                setLoading(false);
            }
        });
        return function () { cancelled = true; };
    }, [startDate, endDate, currentUser.email]);
    // ─── Derived ────────────────────────────────────────────────────────────────
    var filtered = statusFilter === 'All'
        ? summaries
        : summaries.filter(function (s) { return s.status === statusFilter; });
    // ─── Render ─────────────────────────────────────────────────────────────────
    return (React.createElement("div", { className: MyTimesheetHistory_module_scss_1.default.container },
        React.createElement("div", { className: MyTimesheetHistory_module_scss_1.default.header },
            React.createElement("button", { className: MyTimesheetHistory_module_scss_1.default.homeBtn, title: "Home", onClick: navigateHome },
                React.createElement(IconHome, null)),
            React.createElement("h1", { className: MyTimesheetHistory_module_scss_1.default.title }, "My Timesheet History")),
        React.createElement("div", { className: MyTimesheetHistory_module_scss_1.default.filterBar },
            React.createElement("div", { className: MyTimesheetHistory_module_scss_1.default.filterGroup },
                React.createElement("label", { htmlFor: "filter-from" }, "From"),
                React.createElement("input", { id: "filter-from", type: "date", className: MyTimesheetHistory_module_scss_1.default.filterInput, value: toDateInputValue(startDate), onChange: function (e) { return e.target.value && setStartDate(fromDateInputValue(e.target.value)); } })),
            React.createElement("div", { className: MyTimesheetHistory_module_scss_1.default.filterGroup },
                React.createElement("label", { htmlFor: "filter-to" }, "To"),
                React.createElement("input", { id: "filter-to", type: "date", className: MyTimesheetHistory_module_scss_1.default.filterInput, value: toDateInputValue(endDate), onChange: function (e) { return e.target.value && setEndDate(fromDateInputValue(e.target.value)); } })),
            React.createElement("div", { className: MyTimesheetHistory_module_scss_1.default.filterGroup },
                React.createElement("label", { htmlFor: "filter-status" }, "Status"),
                React.createElement("select", { id: "filter-status", className: MyTimesheetHistory_module_scss_1.default.filterSelect, value: statusFilter, onChange: function (e) { return setStatusFilter(e.target.value); } }, STATUS_OPTIONS.map(function (o) { return (React.createElement("option", { key: o.key, value: o.key }, o.text)); })))),
        error && (React.createElement("div", { className: MyTimesheetHistory_module_scss_1.default.errorBar },
            React.createElement(IconError, null),
            error)),
        loading ? (React.createElement("div", { className: MyTimesheetHistory_module_scss_1.default.loadingWrap },
            React.createElement("div", { className: MyTimesheetHistory_module_scss_1.default.spinner }),
            React.createElement("span", null, "Loading history\u2026"))) : filtered.length === 0 ? (React.createElement("div", { className: MyTimesheetHistory_module_scss_1.default.emptyState },
            React.createElement(IconCalendar, { className: MyTimesheetHistory_module_scss_1.default.emptyIcon }),
            React.createElement("span", { className: MyTimesheetHistory_module_scss_1.default.emptyTitle }, "No entries found"),
            React.createElement("span", { className: MyTimesheetHistory_module_scss_1.default.emptySubtitle }, "Try adjusting the date range or status filter."))) : (React.createElement("div", { className: MyTimesheetHistory_module_scss_1.default.list }, filtered.map(function (summary) { return (React.createElement("div", { key: summary.date.toISOString(), className: MyTimesheetHistory_module_scss_1.default.summaryCard, onClick: function () { return navigateTo('DailyForm', { selectedDate: summary.date }); }, role: "button", tabIndex: 0, onKeyDown: function (e) { return e.key === 'Enter' && navigateTo('DailyForm', { selectedDate: summary.date }); } },
            React.createElement("div", { className: MyTimesheetHistory_module_scss_1.default.cardLeft },
                React.createElement("span", { className: MyTimesheetHistory_module_scss_1.default.cardDate }, (0, dateUtils_1.formatDateLabel)(summary.date)),
                React.createElement("span", { className: MyTimesheetHistory_module_scss_1.default.cardMeta },
                    summary.entries.length,
                    " task",
                    summary.entries.length !== 1 ? 's' : '',
                    React.createElement("span", { className: MyTimesheetHistory_module_scss_1.default.dot }),
                    summary.totalHours.toFixed(2),
                    " hrs")),
            React.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: 10 } },
                React.createElement("span", { className: "".concat(MyTimesheetHistory_module_scss_1.default.badge, " ").concat(badgeClass(summary.status)) }, summary.status),
                React.createElement(IconChevronRight, null)))); }))),
        !loading && (React.createElement("div", { className: MyTimesheetHistory_module_scss_1.default.footer },
            "Showing ",
            React.createElement("strong", null, filtered.length),
            " day",
            filtered.length !== 1 ? 's' : '',
            "\u00A0\u00B7\u00A0",
            (0, dateUtils_1.formatDateShort)(startDate),
            " \u2013 ",
            (0, dateUtils_1.formatDateShort)(endDate)))));
};
exports.default = MyTimesheetHistory;
//# sourceMappingURL=MyTimesheetHistory.js.map