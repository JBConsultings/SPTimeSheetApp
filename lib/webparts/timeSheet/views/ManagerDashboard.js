import { __awaiter, __generator } from "tslib";
import * as React from 'react';
import { useContext, useState, useEffect } from 'react';
import { Modal, IconButton, PrimaryButton, DefaultButton, TextField, Spinner, SpinnerSize, } from '@fluentui/react';
import { AppContext } from '../context/AppContext';
import { getTeamEntries, approveDayEntries, rejectDayEntries } from '../services/TimesheetService';
import { formatDateLabel, currentWeekRange, formatDateShort } from '../utils/dateUtils';
import { fmt } from '../utils/fmt';
import * as strings from 'TimeSheetWebPartStrings';
import styles from './ManagerDashboard.module.scss';
// ─── Constants ────────────────────────────────────────────────────────────────
function getStatusOptions() {
    return [
        { key: 'Submitted', text: strings.StatusSubmitted },
        { key: 'Approved', text: strings.StatusApproved },
        { key: 'Rejected', text: strings.StatusRejected },
        { key: 'All', text: strings.AllStatuses },
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
var IconClose = function () { return (React.createElement("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "currentColor" },
    React.createElement("path", { d: "M1 1l10 10M11 1L1 11", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }))); };
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
    var _f = useState('Submitted'), statusFilter = _f[0], setStatusFilter = _f[1];
    var _g = useState(''), employeeFilter = _g[0], setEmployeeFilter = _g[1];
    var _h = useState([]), rows = _h[0], setRows = _h[1];
    var _j = useState(true), loading = _j[0], setLoading = _j[1];
    var _k = useState(''), error = _k[0], setError = _k[1];
    var _l = useState(''), successMessage = _l[0], setSuccessMessage = _l[1];
    // Review modal state
    var _m = useState(false), modalOpen = _m[0], setModalOpen = _m[1];
    var _o = useState(null), reviewRow = _o[0], setReviewRow = _o[1];
    var _p = useState(null), reviewAction = _p[0], setReviewAction = _p[1];
    var _q = useState(''), managerComment = _q[0], setManagerComment = _q[1];
    var _r = useState(false), actionLoading = _r[0], setActionLoading = _r[1];
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
            .catch(function () { setError(strings.LoadTeamFailed); setLoading(false); });
    };
    useEffect(function () { loadData(); }, [startDate, endDate, statusFilter, employeeFilter]); // eslint-disable-line
    // ─── Modal helpers ────────────────────────────────────────────────────────
    var openModal = function (row, action) {
        setReviewRow(row);
        setReviewAction(action);
        setManagerComment('');
        setModalOpen(true);
    };
    var closeModal = function () {
        if (actionLoading)
            return;
        setModalOpen(false);
    };
    var handleAction = function () { return __awaiter(void 0, void 0, void 0, function () {
        var ids, msg, _a;
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
                    setSuccessMessage(fmt(strings.ApprovedMsg, { name: reviewRow.employeeName, date: formatDateShort(reviewRow.entryDate) }));
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, rejectDayEntries(ids, currentUser.displayName, managerComment)];
                case 4:
                    _b.sent();
                    msg = reviewAction === 'resubmit' ? strings.ResubmitMsg : strings.RejectedMsg;
                    setSuccessMessage(fmt(msg, { name: reviewRow.employeeName }));
                    _b.label = 5;
                case 5:
                    setModalOpen(false);
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
    var modalTitle = reviewAction === 'approve' ? strings.ApproveModal :
        reviewAction === 'resubmit' ? strings.RequestResubmitModal :
            strings.RejectModal;
    var confirmBtnLabel = reviewAction === 'approve' ? strings.ConfirmApprove :
        reviewAction === 'resubmit' ? strings.SendResubmit :
            strings.ConfirmReject;
    var confirmDisabled = actionLoading || (reviewAction !== 'approve' && !managerComment.trim());
    // ─── Render ───────────────────────────────────────────────────────────────
    return (React.createElement("div", { className: styles.container },
        React.createElement("div", { className: styles.header },
            React.createElement("button", { className: styles.homeBtn, title: "Home", onClick: navigateHome },
                React.createElement(IconHome, null)),
            React.createElement("h1", { className: styles.title }, strings.TeamTimesheetsTitle)),
        React.createElement("div", { className: styles.filterBar },
            React.createElement("div", { className: styles.filterGroup },
                React.createElement("label", { htmlFor: "mgr-from" }, strings.From),
                React.createElement("input", { id: "mgr-from", type: "date", className: styles.filterInput, value: toDateInputValue(startDate), onChange: function (e) { return e.target.value && setStartDate(fromDateInputValue(e.target.value)); } })),
            React.createElement("div", { className: styles.filterGroup },
                React.createElement("label", { htmlFor: "mgr-to" }, strings.To),
                React.createElement("input", { id: "mgr-to", type: "date", className: styles.filterInput, value: toDateInputValue(endDate), onChange: function (e) { return e.target.value && setEndDate(fromDateInputValue(e.target.value)); } })),
            React.createElement("div", { className: styles.filterGroup },
                React.createElement("label", { htmlFor: "mgr-status" }, strings.Status),
                React.createElement("select", { id: "mgr-status", className: styles.filterSelect, value: statusFilter, onChange: function (e) { return setStatusFilter(e.target.value); } }, getStatusOptions().map(function (o) { return (React.createElement("option", { key: o.key, value: o.key }, o.text)); }))),
            React.createElement("div", { className: "".concat(styles.filterGroup, " ").concat(styles.filterGroupWide) },
                React.createElement("label", { htmlFor: "mgr-employee" }, strings.EmployeeEmail),
                React.createElement("input", { id: "mgr-employee", type: "text", className: styles.filterInput, value: employeeFilter, onChange: function (e) { return setEmployeeFilter(e.target.value); }, placeholder: strings.FilterByEmail }))),
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
            React.createElement("span", null, strings.LoadingTeam))) : rows.length === 0 ? (React.createElement("div", { className: styles.emptyState },
            React.createElement(IconUsers, null),
            React.createElement("span", { className: styles.emptyTitle }, strings.NoTimesheetsFound),
            React.createElement("span", { className: styles.emptySubtitle }, strings.NoTimesheetsHint))) : (React.createElement("div", { className: styles.list }, rows.map(function (row) { return (React.createElement("div", { key: "".concat(row.employeeEmail, "__").concat(row.entryDate.toISOString()), className: styles.rowCard },
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
                    React.createElement("button", { className: "".concat(styles.btn, " ").concat(styles.btnApprove), onClick: function () { return openModal(row, 'approve'); } },
                        React.createElement(IconCheck, null),
                        " ",
                        strings.ApproveBtn),
                    React.createElement("button", { className: "".concat(styles.btn, " ").concat(styles.btnReject), onClick: function () { return openModal(row, 'reject'); } },
                        React.createElement(IconReject, null),
                        " ",
                        strings.RejectBtn))),
                row.status === 'Approved' && (React.createElement("button", { className: "".concat(styles.btn, " ").concat(styles.btnResubmit), onClick: function () { return openModal(row, 'resubmit'); } },
                    React.createElement(IconRefresh, null),
                    " ",
                    strings.RequestResubmitBtn))))); }))),
        React.createElement(Modal, { isOpen: modalOpen, onDismiss: closeModal, isBlocking: actionLoading, containerClassName: styles.modalContainer },
            React.createElement("div", { className: styles.modalHeader },
                React.createElement("h2", { className: styles.modalTitle }, modalTitle),
                React.createElement(IconButton, { iconProps: { iconName: 'Cancel' }, ariaLabel: "Close", onClick: closeModal, disabled: actionLoading, className: styles.modalCloseBtn })),
            reviewRow && (React.createElement("div", { className: styles.modalBody },
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
                                React.createElement("th", null, strings.Project),
                                React.createElement("th", null, strings.Category),
                                React.createElement("th", null, strings.Description),
                                React.createElement("th", { className: styles.colHrs }, strings.Hrs))),
                        React.createElement("tbody", null, reviewRow.entries.map(function (e) { return (React.createElement("tr", { key: e.id },
                            React.createElement("td", null, e.projectName),
                            React.createElement("td", null, e.activityCategoryName),
                            React.createElement("td", null, e.taskDescription),
                            React.createElement("td", { className: styles.tdCenter }, e.hoursSpent))); })))),
                reviewAction !== 'approve' && (React.createElement(React.Fragment, null,
                    React.createElement(TextField, { label: strings.ManagerCommentLabel, required: true, multiline: true, rows: 4, value: managerComment, onChange: function (_e, val) { return setManagerComment(val || ''); }, placeholder: strings.ManagerCommentPlaceholder, disabled: actionLoading }),
                    !managerComment.trim() && (React.createElement("span", { style: { color: '#a19f9d', fontSize: 12, display: 'block', marginTop: 4 } },
                        "A comment is required before ",
                        reviewAction === 'reject' ? 'rejecting' : 'requesting re-submission of',
                        " this timesheet.")))))),
            React.createElement("div", { className: styles.modalFooter },
                React.createElement(PrimaryButton, { onClick: handleAction, disabled: confirmDisabled, className: reviewAction === 'approve' ? styles.fluentBtnApprove :
                        reviewAction === 'reject' ? styles.fluentBtnReject :
                            styles.fluentBtnResubmit }, actionLoading
                    ? React.createElement(React.Fragment, null,
                        React.createElement(Spinner, { size: SpinnerSize.small }),
                        React.createElement("span", { style: { marginLeft: 6 } }, strings.Processing))
                    : confirmBtnLabel),
                React.createElement(DefaultButton, { text: strings.Cancel, onClick: closeModal, disabled: actionLoading })))));
};
export default ManagerDashboard;
//# sourceMappingURL=ManagerDashboard.js.map