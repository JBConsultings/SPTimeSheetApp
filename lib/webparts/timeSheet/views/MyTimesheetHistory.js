import { __awaiter, __generator } from "tslib";
import * as React from 'react';
import { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import { getEntriesForDateRange, deleteEntry } from '../services/TimesheetService';
import { formatDateLabel, currentMonthRange, formatDateShort } from '../utils/dateUtils';
import * as strings from 'TimeSheetWebPartStrings';
import styles from './MyTimesheetHistory.module.scss';
// ─── Constants ────────────────────────────────────────────────────────────────
function getStatusOptions() {
    return [
        { key: 'All', text: strings.AllStatuses },
        { key: 'Draft', text: strings.StatusDraft },
        { key: 'Submitted', text: strings.StatusSubmitted },
        { key: 'Approved', text: strings.StatusApproved },
        { key: 'Rejected', text: strings.StatusRejected },
    ];
}
// ─── Helpers ──────────────────────────────────────────────────────────────────
function badgeClass(status) {
    if (status === 'Approved')
        return styles.approved;
    if (status === 'Submitted')
        return styles.submitted;
    if (status === 'Rejected')
        return styles.rejected;
    return styles.draft;
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
var IconTrash = function () { return (React.createElement("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "currentColor" },
    React.createElement("path", { d: "M2 4h10M5 4V2h4v2M6 6v5M8 6v5M3 4l1 8h6l1-8", stroke: "currentColor", strokeWidth: "1.3", fill: "none", strokeLinecap: "round" }))); };
// ─── Component ────────────────────────────────────────────────────────────────
var MyTimesheetHistory = function () {
    var _a = useContext(AppContext), currentUser = _a.currentUser, navigateTo = _a.navigateTo, navigateHome = _a.navigateHome;
    var _b = currentMonthRange(), defaultStart = _b.start, defaultEnd = _b.end;
    var _c = useState(defaultStart), startDate = _c[0], setStartDate = _c[1];
    var _d = useState(defaultEnd), endDate = _d[0], setEndDate = _d[1];
    var _e = useState('All'), statusFilter = _e[0], setStatusFilter = _e[1];
    var _f = useState([]), summaries = _f[0], setSummaries = _f[1];
    var _g = useState(true), loading = _g[0], setLoading = _g[1];
    var _h = useState(''), error = _h[0], setError = _h[1];
    var _j = useState(null), confirmDeleteKey = _j[0], setConfirmDeleteKey = _j[1];
    var _k = useState(false), deleting = _k[0], setDeleting = _k[1];
    // ─── Data fetch ─────────────────────────────────────────────────────────────
    useEffect(function () {
        var cancelled = false;
        setLoading(true);
        setError('');
        getEntriesForDateRange(startDate, endDate, currentUser.email)
            .then(function (entries) {
            if (cancelled)
                return;
            setSummaries(groupByDate(entries));
            setLoading(false);
        })
            .catch(function () {
            if (!cancelled) {
                setError(strings.LoadHistoryFailed);
                setLoading(false);
            }
        });
        return function () { cancelled = true; };
    }, [startDate, endDate, currentUser.email]);
    // ─── Delete draft entries for a day ─────────────────────────────────────────
    var handleDelete = function (summary, e) {
        e.stopPropagation();
        var key = summary.date.toISOString();
        setDeleting(false);
        setConfirmDeleteKey(key);
    };
    var confirmDelete = function (summary, e) { return __awaiter(void 0, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    e.stopPropagation();
                    setDeleting(true);
                    setError('');
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, Promise.all(summary.entries
                            .filter(function (en) { return en.id !== undefined; })
                            .map(function (en) { return deleteEntry(en.id); }))];
                case 2:
                    _b.sent();
                    setSummaries(function (prev) { return prev.filter(function (s) { return s.date.toISOString() !== summary.date.toISOString(); }); });
                    return [3 /*break*/, 5];
                case 3:
                    _a = _b.sent();
                    setError('Failed to delete entries. Please try again.');
                    return [3 /*break*/, 5];
                case 4:
                    setDeleting(false);
                    setConfirmDeleteKey(null);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var cancelDelete = function (e) {
        e.stopPropagation();
        setConfirmDeleteKey(null);
    };
    // ─── Derived ────────────────────────────────────────────────────────────────
    var filtered = statusFilter === 'All'
        ? summaries
        : summaries.filter(function (s) { return s.status === statusFilter; });
    // ─── Render ─────────────────────────────────────────────────────────────────
    return (React.createElement("div", { className: styles.container },
        React.createElement("div", { className: styles.header },
            React.createElement("button", { className: styles.homeBtn, title: "Home", onClick: navigateHome },
                React.createElement(IconHome, null)),
            React.createElement("h1", { className: styles.title }, strings.HistoryTitle)),
        React.createElement("div", { className: styles.filterBar },
            React.createElement("div", { className: styles.filterGroup },
                React.createElement("label", { htmlFor: "filter-from" }, strings.From),
                React.createElement("input", { id: "filter-from", type: "date", className: styles.filterInput, value: toDateInputValue(startDate), onChange: function (e) { return e.target.value && setStartDate(fromDateInputValue(e.target.value)); } })),
            React.createElement("div", { className: styles.filterGroup },
                React.createElement("label", { htmlFor: "filter-to" }, strings.To),
                React.createElement("input", { id: "filter-to", type: "date", className: styles.filterInput, value: toDateInputValue(endDate), onChange: function (e) { return e.target.value && setEndDate(fromDateInputValue(e.target.value)); } })),
            React.createElement("div", { className: styles.filterGroup },
                React.createElement("label", { htmlFor: "filter-status" }, strings.Status),
                React.createElement("select", { id: "filter-status", className: styles.filterSelect, value: statusFilter, onChange: function (e) { return setStatusFilter(e.target.value); } }, getStatusOptions().map(function (o) { return (React.createElement("option", { key: o.key, value: o.key }, o.text)); })))),
        error && (React.createElement("div", { className: styles.errorBar },
            React.createElement(IconError, null),
            error)),
        loading ? (React.createElement("div", { className: styles.loadingWrap },
            React.createElement("div", { className: styles.spinner }),
            React.createElement("span", null, strings.LoadingHistory))) : filtered.length === 0 ? (React.createElement("div", { className: styles.emptyState },
            React.createElement(IconCalendar, { className: styles.emptyIcon }),
            React.createElement("span", { className: styles.emptyTitle }, strings.NoEntriesFound),
            React.createElement("span", { className: styles.emptySubtitle }, strings.NoEntriesHintHistory))) : (React.createElement("div", { className: styles.list }, filtered.map(function (summary) {
            var key = summary.date.toISOString();
            var isPendingDelete = confirmDeleteKey === key;
            return (React.createElement("div", { key: key, className: styles.summaryCard, onClick: function () { return !isPendingDelete && navigateTo('DailyForm', { selectedDate: summary.date }); }, role: "button", tabIndex: 0, onKeyDown: function (e) { return !isPendingDelete && e.key === 'Enter' && navigateTo('DailyForm', { selectedDate: summary.date }); } },
                React.createElement("div", { className: styles.cardLeft },
                    React.createElement("span", { className: styles.cardDate }, formatDateLabel(summary.date)),
                    React.createElement("span", { className: styles.cardMeta },
                        summary.entries.length,
                        " task",
                        summary.entries.length !== 1 ? 's' : '',
                        React.createElement("span", { className: styles.dot }),
                        summary.totalHours.toFixed(2),
                        " hrs")),
                React.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: 10 } },
                    React.createElement("span", { className: "".concat(styles.badge, " ").concat(badgeClass(summary.status)) }, summary.status),
                    summary.status === 'Draft' && !isPendingDelete && (React.createElement("button", { style: {
                            background: 'none', border: '1px solid #da1e28', borderRadius: 6,
                            color: '#da1e28', cursor: 'pointer', padding: '4px 8px',
                            display: 'flex', alignItems: 'center', gap: 4, fontSize: 12,
                        }, title: "Delete draft", onClick: function (e) { return handleDelete(summary, e); } },
                        React.createElement(IconTrash, null),
                        " Delete")),
                    isPendingDelete && (React.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: 6, fontSize: 12 }, onClick: function (e) { return e.stopPropagation(); } },
                        React.createElement("span", { style: { color: '#6f6f6f' } }, "Delete draft?"),
                        React.createElement("button", { style: {
                                background: '#da1e28', border: 'none', borderRadius: 6,
                                color: '#fff', cursor: 'pointer', padding: '4px 10px', fontSize: 12,
                            }, disabled: deleting, onClick: function (e) { void confirmDelete(summary, e); } }, deleting ? '…' : 'Yes'),
                        React.createElement("button", { style: {
                                background: 'none', border: '1px solid #8d8d8d', borderRadius: 6,
                                color: '#393939', cursor: 'pointer', padding: '4px 10px', fontSize: 12,
                            }, disabled: deleting, onClick: cancelDelete }, "No"))),
                    !isPendingDelete && React.createElement(IconChevronRight, null))));
        }))),
        !loading && (React.createElement("div", { className: styles.footer },
            strings.Showing,
            " ",
            React.createElement("strong", null, filtered.length),
            " ",
            strings.Days,
            "\u00A0\u00B7\u00A0",
            formatDateShort(startDate),
            " \u2013 ",
            formatDateShort(endDate)))));
};
export default MyTimesheetHistory;
//# sourceMappingURL=MyTimesheetHistory.js.map