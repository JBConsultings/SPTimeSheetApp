import { __awaiter, __generator } from "tslib";
import * as React from 'react';
import { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import { getTeamEntries, approveDayEntries, rejectDayEntries } from '../services/TimesheetService';
import { formatDateLabel, currentWeekRange, formatDateShort } from '../utils/dateUtils';
import styles from './ManagerDashboard.module.scss';
// ─── Constants ────────────────────────────────────────────────────────────────
var STATUS_OPTIONS = [
    { key: 'Submitted', text: 'Submitted' },
    { key: 'Approved', text: 'Approved' },
    { key: 'Rejected', text: 'Rejected' },
    { key: 'All', text: 'All Statuses' },
];
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
function groupToTeamRows(entries) {
    var map = new Map();
    entries.forEach(function (e) {
        var key = "".concat(e.employeeEmail, "__").concat(e.entryDate.toISOString().split('T')[0]);
        if (!map.has(key))
            map.set(key, []);
        map.get(key).push(e);
    });
    return Array.from(map.values()).map(function (group) { return ({
        employeeEmail: group[0].employeeEmail,
        employeeName: group[0].employeeName,
        entryDate: group[0].entryDate,
        entries: group,
        totalHours: group.reduce(function (s, e) { return s + e.hoursSpent; }, 0),
        status: group[0].status,
    }); });
}
// ─── SVG Icons ────────────────────────────────────────────────────────────────
var IconHome = function () { return (React.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "currentColor" },
    React.createElement("path", { d: "M8 1L1 7h2v7h4v-4h2v4h4V7h2L8 1z" }))); };
var IconClose = function () { return (React.createElement("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "currentColor" },
    React.createElement("path", { d: "M1 1l10 10M11 1L1 11", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }))); };
var IconCheck = function () { return (React.createElement("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "currentColor" },
    React.createElement("path", { d: "M2 7l4 4 6-6", stroke: "currentColor", strokeWidth: "1.8", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }))); };
var IconReject = function () { return (React.createElement("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "currentColor" },
    React.createElement("path", { d: "M2 2l10 10M12 2L2 12", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round" }))); };
var IconRefresh = function () { return (React.createElement("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "currentColor" },
    React.createElement("path", { d: "M12 7A5 5 0 112 7", stroke: "currentColor", strokeWidth: "1.6", fill: "none", strokeLinecap: "round" }),
    React.createElement("path", { d: "M12 3v4h-4", stroke: "currentColor", strokeWidth: "1.6", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }))); };
var IconSuccess = function () { return (React.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "currentColor" },
    React.createElement("circle", { cx: "8", cy: "8", r: "7", stroke: "currentColor", strokeWidth: "1.3", fill: "none" }),
    React.createElement("path", { d: "M4.5 8l2.5 2.5 4-4", stroke: "currentColor", strokeWidth: "1.5", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }))); };
var IconError = function () { return (React.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "currentColor" },
    React.createElement("circle", { cx: "8", cy: "8", r: "7", stroke: "currentColor", strokeWidth: "1.3", fill: "none" }),
    React.createElement("path", { d: "M8 4v4M8 10v1", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round" }))); };
var IconUsers = function () { return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
    React.createElement("circle", { cx: "18", cy: "18", r: "7", stroke: "currentColor", strokeWidth: "2.5" }),
    React.createElement("circle", { cx: "32", cy: "18", r: "7", stroke: "currentColor", strokeWidth: "2.5" }),
    React.createElement("path", { d: "M4 40c0-7.732 6.268-14 14-14h2", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round" }),
    React.createElement("path", { d: "M24 40c0-7.732 6.268-14 14-14", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round" }))); };
// ─── Component ────────────────────────────────────────────────────────────────
var ManagerDashboard = function () {
    var _a = useContext(AppContext), currentUser = _a.currentUser, navigateHome = _a.navigateHome;
    var _b = currentWeekRange(), wStart = _b.start, wEnd = _b.end;
    var _c = useState(wStart), startDate = _c[0], setStartDate = _c[1];
    var _d = useState(wEnd), endDate = _d[0], setEndDate = _d[1];
    var _e = useState('Submitted'), statusFilter = _e[0], setStatusFilter = _e[1];
    var _f = useState(''), employeeFilter = _f[0], setEmployeeFilter = _f[1];
    var _g = useState([]), rows = _g[0], setRows = _g[1];
    var _h = useState(true), loading = _h[0], setLoading = _h[1];
    var _j = useState(''), error = _j[0], setError = _j[1];
    var _k = useState(''), successMessage = _k[0], setSuccessMessage = _k[1];
    // Review panel state
    var _l = useState(false), panelOpen = _l[0], setPanelOpen = _l[1];
    var _m = useState(null), reviewRow = _m[0], setReviewRow = _m[1];
    var _o = useState(null), reviewAction = _o[0], setReviewAction = _o[1];
    var _p = useState(''), managerComment = _p[0], setManagerComment = _p[1];
    var _q = useState(false), actionLoading = _q[0], setActionLoading = _q[1];
    // ─── Load data ────────────────────────────────────────────────────────────
    var loadData = function () {
        setLoading(true);
        setError('');
        var opts = {
            employeeEmail: employeeFilter || undefined,
            status: statusFilter === 'All' ? undefined : statusFilter,
        };
        getTeamEntries(startDate, endDate, opts)
            .then(function (entries) { setRows(groupToTeamRows(entries)); setLoading(false); })
            .catch(function () { setError('Failed to load team timesheets.'); setLoading(false); });
    };
    useEffect(function () { loadData(); }, [startDate, endDate, statusFilter, employeeFilter]); // eslint-disable-line
    // ─── Panel helpers ────────────────────────────────────────────────────────
    var openPanel = function (row, action) {
        setReviewRow(row);
        setReviewAction(action);
        setManagerComment('');
        setPanelOpen(true);
    };
    var handleAction = function () { return __awaiter(void 0, void 0, void 0, function () {
        var ids, verb, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!reviewRow || !reviewAction)
                        return [2 /*return*/];
                    ids = reviewRow.entries.map(function (e) { return e.id; });
                    setActionLoading(true);
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 6, 7, 8]);
                    if (!(reviewAction === 'approve')) return [3 /*break*/, 3];
                    return [4 /*yield*/, approveDayEntries(ids, currentUser.displayName)];
                case 2:
                    _b.sent();
                    setSuccessMessage("Approved timesheet for ".concat(reviewRow.employeeName, " on ").concat(formatDateShort(reviewRow.entryDate), "."));
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, rejectDayEntries(ids, currentUser.displayName, managerComment)];
                case 4:
                    _b.sent();
                    verb = reviewAction === 'resubmit' ? 'requested re-submission for' : 'rejected';
                    setSuccessMessage("Successfully ".concat(verb, " timesheet for ").concat(reviewRow.employeeName, "."));
                    _b.label = 5;
                case 5:
                    setPanelOpen(false);
                    loadData();
                    return [3 /*break*/, 8];
                case 6:
                    _a = _b.sent();
                    setError('Action failed. Please try again.');
                    return [3 /*break*/, 8];
                case 7:
                    setActionLoading(false);
                    return [7 /*endfinally*/];
                case 8: return [2 /*return*/];
            }
        });
    }); };
    var panelTitle = reviewAction === 'approve' ? 'Approve Timesheet' :
        reviewAction === 'resubmit' ? 'Request Re-submission' :
            'Reject Timesheet';
    var confirmBtnLabel = reviewAction === 'approve' ? 'Confirm Approve' :
        reviewAction === 'resubmit' ? 'Send Re-submit Request' :
            'Confirm Reject';
    var confirmBtnClass = reviewAction === 'approve' ? styles.btnApprove :
        reviewAction === 'reject' ? styles.btnReject :
            styles.btnResubmit;
    var confirmDisabled = actionLoading || (reviewAction !== 'approve' && !managerComment.trim());
    // ─── Render ───────────────────────────────────────────────────────────────
    return (React.createElement("div", { className: styles.container },
        React.createElement("div", { className: styles.header },
            React.createElement("button", { className: styles.homeBtn, title: "Home", onClick: navigateHome },
                React.createElement(IconHome, null)),
            React.createElement("h1", { className: styles.title }, "Team Timesheets")),
        React.createElement("div", { className: styles.filterBar },
            React.createElement("div", { className: styles.filterGroup },
                React.createElement("label", { htmlFor: "mgr-from" }, "From"),
                React.createElement("input", { id: "mgr-from", type: "date", className: styles.filterInput, value: toDateInputValue(startDate), onChange: function (e) { return e.target.value && setStartDate(fromDateInputValue(e.target.value)); } })),
            React.createElement("div", { className: styles.filterGroup },
                React.createElement("label", { htmlFor: "mgr-to" }, "To"),
                React.createElement("input", { id: "mgr-to", type: "date", className: styles.filterInput, value: toDateInputValue(endDate), onChange: function (e) { return e.target.value && setEndDate(fromDateInputValue(e.target.value)); } })),
            React.createElement("div", { className: styles.filterGroup },
                React.createElement("label", { htmlFor: "mgr-status" }, "Status"),
                React.createElement("select", { id: "mgr-status", className: styles.filterSelect, value: statusFilter, onChange: function (e) { return setStatusFilter(e.target.value); } }, STATUS_OPTIONS.map(function (o) { return (React.createElement("option", { key: o.key, value: o.key }, o.text)); }))),
            React.createElement("div", { className: "".concat(styles.filterGroup, " ").concat(styles.filterGroupWide) },
                React.createElement("label", { htmlFor: "mgr-employee" }, "Employee Email"),
                React.createElement("input", { id: "mgr-employee", type: "text", className: styles.filterInput, value: employeeFilter, onChange: function (e) { return setEmployeeFilter(e.target.value); }, placeholder: "Filter by email\u2026" }))),
        successMessage && (React.createElement("div", { className: "".concat(styles.messageBar, " ").concat(styles.success) },
            React.createElement(IconSuccess, null),
            React.createElement("span", null, successMessage),
            React.createElement("button", { className: styles.dismissBtn, onClick: function () { return setSuccessMessage(''); } },
                React.createElement(IconClose, null)))),
        error && (React.createElement("div", { className: "".concat(styles.messageBar, " ").concat(styles.error) },
            React.createElement(IconError, null),
            React.createElement("span", null, error))),
        loading ? (React.createElement("div", { className: styles.loadingWrap },
            React.createElement("div", { className: styles.spinner }),
            React.createElement("span", null, "Loading team timesheets\u2026"))) : rows.length === 0 ? (React.createElement("div", { className: styles.emptyState },
            React.createElement(IconUsers, null),
            React.createElement("span", { className: styles.emptyTitle }, "No timesheets found"),
            React.createElement("span", { className: styles.emptySubtitle }, "Try adjusting the date range, status, or employee filter."))) : (React.createElement("div", { className: styles.list }, rows.map(function (row) { return (React.createElement("div", { key: "".concat(row.employeeEmail, "__").concat(row.entryDate.toISOString()), className: styles.rowCard },
            React.createElement("div", { className: styles.rowLeft },
                React.createElement("span", { className: styles.rowName }, row.employeeName),
                React.createElement("span", { className: styles.rowMeta },
                    formatDateLabel(row.entryDate),
                    React.createElement("span", { className: styles.dot }),
                    row.entries.length,
                    " task",
                    row.entries.length !== 1 ? 's' : '',
                    React.createElement("span", { className: styles.dot }),
                    row.totalHours.toFixed(2),
                    " hrs")),
            React.createElement("div", { className: styles.rowRight },
                React.createElement("span", { className: "".concat(styles.badge, " ").concat(badgeClass(row.status)) }, row.status),
                row.status === 'Submitted' && (React.createElement(React.Fragment, null,
                    React.createElement("button", { className: "".concat(styles.btn, " ").concat(styles.btnApprove), onClick: function () { return openPanel(row, 'approve'); } },
                        React.createElement(IconCheck, null),
                        " Approve"),
                    React.createElement("button", { className: "".concat(styles.btn, " ").concat(styles.btnReject), onClick: function () { return openPanel(row, 'reject'); } },
                        React.createElement(IconReject, null),
                        " Reject"))),
                row.status === 'Approved' && (React.createElement("button", { className: "".concat(styles.btn, " ").concat(styles.btnResubmit), onClick: function () { return openPanel(row, 'resubmit'); } },
                    React.createElement(IconRefresh, null),
                    " Request Re-submit"))))); }))),
        panelOpen && (React.createElement(React.Fragment, null,
            React.createElement("div", { className: styles.overlay, onClick: function () { return setPanelOpen(false); } }),
            React.createElement("div", { className: styles.panel, role: "dialog", "aria-modal": "true", "aria-label": panelTitle },
                React.createElement("div", { className: styles.panelHeader },
                    React.createElement("h2", null, panelTitle),
                    React.createElement("button", { className: styles.panelCloseBtn, onClick: function () { return setPanelOpen(false); }, title: "Close" },
                        React.createElement(IconClose, null))),
                reviewRow && (React.createElement("div", { className: styles.panelBody },
                    React.createElement("div", { className: styles.panelMeta },
                        React.createElement("span", { className: styles.panelMetaName }, reviewRow.employeeName),
                        React.createElement("span", { className: styles.panelMetaDetail },
                            React.createElement("span", null, formatDateLabel(reviewRow.entryDate)),
                            React.createElement("span", null,
                                "Total: ",
                                React.createElement("strong", null,
                                    reviewRow.totalHours.toFixed(2),
                                    " hrs")))),
                    React.createElement("div", { className: styles.panelTableWrap },
                        React.createElement("table", { className: styles.panelTable },
                            React.createElement("thead", null,
                                React.createElement("tr", null,
                                    React.createElement("th", null, "Project"),
                                    React.createElement("th", null, "Category"),
                                    React.createElement("th", null, "Description"),
                                    React.createElement("th", { className: styles.colHrs }, "Hrs"))),
                            React.createElement("tbody", null, reviewRow.entries.map(function (e) { return (React.createElement("tr", { key: e.id },
                                React.createElement("td", null, e.projectName),
                                React.createElement("td", null, e.activityCategoryName),
                                React.createElement("td", null, e.taskDescription),
                                React.createElement("td", { className: styles.tdCenter }, e.hoursSpent))); })))),
                    reviewAction !== 'approve' && (React.createElement("div", { className: styles.commentField },
                        React.createElement("label", null,
                            "Manager Comments ",
                            React.createElement("span", { className: styles.required }, "*")),
                        React.createElement("textarea", { rows: 4, value: managerComment, onChange: function (e) { return setManagerComment(e.target.value); }, placeholder: "Provide feedback for the employee\u2026" }))))),
                React.createElement("div", { className: styles.panelFooter },
                    React.createElement("button", { className: "".concat(styles.btn, " ").concat(confirmBtnClass), onClick: handleAction, disabled: confirmDisabled }, actionLoading
                        ? React.createElement(React.Fragment, null,
                            React.createElement("div", { className: styles.spinnerSm }),
                            " Processing\u2026")
                        : confirmBtnLabel),
                    React.createElement("button", { className: "".concat(styles.btn, " ").concat(styles.btnDefault), onClick: function () { return setPanelOpen(false); }, disabled: actionLoading }, "Cancel")))))));
};
export default ManagerDashboard;
//# sourceMappingURL=ManagerDashboard.js.map