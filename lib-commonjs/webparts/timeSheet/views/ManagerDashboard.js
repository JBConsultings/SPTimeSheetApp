"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var react_2 = require("@fluentui/react");
var AppContext_1 = require("../context/AppContext");
var TimesheetService_1 = require("../services/TimesheetService");
var dateUtils_1 = require("../utils/dateUtils");
var fmt_1 = require("../utils/fmt");
var strings = tslib_1.__importStar(require("TimeSheetWebPartStrings"));
var ManagerDashboard_module_scss_1 = tslib_1.__importDefault(require("./ManagerDashboard.module.scss"));
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
        return ManagerDashboard_module_scss_1.default.approved;
    if (status === 'Submitted')
        return ManagerDashboard_module_scss_1.default.submitted;
    if (status === 'Rejected')
        return ManagerDashboard_module_scss_1.default.rejected;
    return ManagerDashboard_module_scss_1.default.draft;
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
    var _a = (0, react_1.useContext)(AppContext_1.AppContext), currentUser = _a.currentUser, navigateHome = _a.navigateHome;
    var _b = (0, dateUtils_1.currentWeekRange)(), wStart = _b.start, wEnd = _b.end;
    var _c = (0, react_1.useState)(wStart), startDate = _c[0], setStartDate = _c[1];
    var _d = (0, react_1.useState)(wEnd), endDate = _d[0], setEndDate = _d[1];
    var _f = (0, react_1.useState)('Submitted'), statusFilter = _f[0], setStatusFilter = _f[1];
    var _g = (0, react_1.useState)(''), employeeFilter = _g[0], setEmployeeFilter = _g[1];
    var _h = (0, react_1.useState)([]), rows = _h[0], setRows = _h[1];
    var _j = (0, react_1.useState)(true), loading = _j[0], setLoading = _j[1];
    var _k = (0, react_1.useState)(''), error = _k[0], setError = _k[1];
    var _l = (0, react_1.useState)(''), successMessage = _l[0], setSuccessMessage = _l[1];
    // Review modal state
    var _m = (0, react_1.useState)(false), modalOpen = _m[0], setModalOpen = _m[1];
    var _o = (0, react_1.useState)(null), reviewRow = _o[0], setReviewRow = _o[1];
    var _p = (0, react_1.useState)(null), reviewAction = _p[0], setReviewAction = _p[1];
    var _q = (0, react_1.useState)(''), managerComment = _q[0], setManagerComment = _q[1];
    var _r = (0, react_1.useState)(false), actionLoading = _r[0], setActionLoading = _r[1];
    // ─── Load data ────────────────────────────────────────────────────────────
    var loadData = function () {
        setLoading(true);
        setError('');
        var opts = {
            employeeEmail: employeeFilter || undefined,
            status: statusFilter === 'All' ? undefined : statusFilter,
        };
        (0, TimesheetService_1.getTeamEntries)(startDate, endDate, opts)
            .then(function (entries) { setRows(groupToTeamRows(entries)); setLoading(false); })
            .catch(function () { setError(strings.LoadTeamFailed); setLoading(false); });
    };
    (0, react_1.useEffect)(function () { loadData(); }, [startDate, endDate, statusFilter, employeeFilter]); // eslint-disable-line
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
    var handleAction = function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var ids, msg, _a;
        return tslib_1.__generator(this, function (_b) {
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
                    return [4 /*yield*/, (0, TimesheetService_1.approveDayEntries)(ids, currentUser.displayName)];
                case 2:
                    _b.sent();
                    setSuccessMessage((0, fmt_1.fmt)(strings.ApprovedMsg, { name: reviewRow.employeeName, date: (0, dateUtils_1.formatDateShort)(reviewRow.entryDate) }));
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, (0, TimesheetService_1.rejectDayEntries)(ids, currentUser.displayName, managerComment)];
                case 4:
                    _b.sent();
                    msg = reviewAction === 'resubmit' ? strings.ResubmitMsg : strings.RejectedMsg;
                    setSuccessMessage((0, fmt_1.fmt)(msg, { name: reviewRow.employeeName }));
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
    return (React.createElement("div", { className: ManagerDashboard_module_scss_1.default.container },
        React.createElement("div", { className: ManagerDashboard_module_scss_1.default.header },
            React.createElement("button", { className: ManagerDashboard_module_scss_1.default.homeBtn, title: "Home", onClick: navigateHome },
                React.createElement(IconHome, null)),
            React.createElement("h1", { className: ManagerDashboard_module_scss_1.default.title }, strings.TeamTimesheetsTitle)),
        React.createElement("div", { className: ManagerDashboard_module_scss_1.default.filterBar },
            React.createElement("div", { className: ManagerDashboard_module_scss_1.default.filterGroup },
                React.createElement("label", { htmlFor: "mgr-from" }, strings.From),
                React.createElement("input", { id: "mgr-from", type: "date", className: ManagerDashboard_module_scss_1.default.filterInput, value: toDateInputValue(startDate), onChange: function (e) { return e.target.value && setStartDate(fromDateInputValue(e.target.value)); } })),
            React.createElement("div", { className: ManagerDashboard_module_scss_1.default.filterGroup },
                React.createElement("label", { htmlFor: "mgr-to" }, strings.To),
                React.createElement("input", { id: "mgr-to", type: "date", className: ManagerDashboard_module_scss_1.default.filterInput, value: toDateInputValue(endDate), onChange: function (e) { return e.target.value && setEndDate(fromDateInputValue(e.target.value)); } })),
            React.createElement("div", { className: ManagerDashboard_module_scss_1.default.filterGroup },
                React.createElement("label", { htmlFor: "mgr-status" }, strings.Status),
                React.createElement("select", { id: "mgr-status", className: ManagerDashboard_module_scss_1.default.filterSelect, value: statusFilter, onChange: function (e) { return setStatusFilter(e.target.value); } }, getStatusOptions().map(function (o) { return (React.createElement("option", { key: o.key, value: o.key }, o.text)); }))),
            React.createElement("div", { className: "".concat(ManagerDashboard_module_scss_1.default.filterGroup, " ").concat(ManagerDashboard_module_scss_1.default.filterGroupWide) },
                React.createElement("label", { htmlFor: "mgr-employee" }, strings.EmployeeEmail),
                React.createElement("input", { id: "mgr-employee", type: "text", className: ManagerDashboard_module_scss_1.default.filterInput, value: employeeFilter, onChange: function (e) { return setEmployeeFilter(e.target.value); }, placeholder: strings.FilterByEmail }))),
        successMessage && (React.createElement("div", { className: "".concat(ManagerDashboard_module_scss_1.default.messageBar, " ").concat(ManagerDashboard_module_scss_1.default.success) },
            React.createElement(IconSuccess, null),
            React.createElement("span", null, successMessage),
            React.createElement("button", { className: ManagerDashboard_module_scss_1.default.dismissBtn, onClick: function () { return setSuccessMessage(''); } },
                React.createElement(IconClose, null)))),
        error && (React.createElement("div", { className: "".concat(ManagerDashboard_module_scss_1.default.messageBar, " ").concat(ManagerDashboard_module_scss_1.default.error) },
            React.createElement(IconError, null),
            React.createElement("span", null, error))),
        loading ? (React.createElement("div", { className: ManagerDashboard_module_scss_1.default.loadingWrap },
            React.createElement("div", { className: ManagerDashboard_module_scss_1.default.spinner }),
            React.createElement("span", null, strings.LoadingTeam))) : rows.length === 0 ? (React.createElement("div", { className: ManagerDashboard_module_scss_1.default.emptyState },
            React.createElement(IconUsers, null),
            React.createElement("span", { className: ManagerDashboard_module_scss_1.default.emptyTitle }, strings.NoTimesheetsFound),
            React.createElement("span", { className: ManagerDashboard_module_scss_1.default.emptySubtitle }, strings.NoTimesheetsHint))) : (React.createElement("div", { className: ManagerDashboard_module_scss_1.default.list }, rows.map(function (row) { return (React.createElement("div", { key: "".concat(row.employeeEmail, "__").concat(row.entryDate.toISOString()), className: ManagerDashboard_module_scss_1.default.rowCard },
            React.createElement("div", { className: ManagerDashboard_module_scss_1.default.rowLeft },
                React.createElement("span", { className: ManagerDashboard_module_scss_1.default.rowName }, row.employeeName),
                React.createElement("span", { className: ManagerDashboard_module_scss_1.default.rowMeta },
                    (0, dateUtils_1.formatDateLabel)(row.entryDate),
                    React.createElement("span", { className: ManagerDashboard_module_scss_1.default.dot }),
                    row.entries.length,
                    " task",
                    row.entries.length !== 1 ? 's' : '',
                    React.createElement("span", { className: ManagerDashboard_module_scss_1.default.dot }),
                    row.totalHours.toFixed(2),
                    " hrs")),
            React.createElement("div", { className: ManagerDashboard_module_scss_1.default.rowRight },
                React.createElement("span", { className: "".concat(ManagerDashboard_module_scss_1.default.badge, " ").concat(badgeClass(row.status)) }, row.status),
                row.status === 'Submitted' && (React.createElement(React.Fragment, null,
                    React.createElement("button", { className: "".concat(ManagerDashboard_module_scss_1.default.btn, " ").concat(ManagerDashboard_module_scss_1.default.btnApprove), onClick: function () { return openModal(row, 'approve'); } },
                        React.createElement(IconCheck, null),
                        " ",
                        strings.ApproveBtn),
                    React.createElement("button", { className: "".concat(ManagerDashboard_module_scss_1.default.btn, " ").concat(ManagerDashboard_module_scss_1.default.btnReject), onClick: function () { return openModal(row, 'reject'); } },
                        React.createElement(IconReject, null),
                        " ",
                        strings.RejectBtn))),
                row.status === 'Approved' && (React.createElement("button", { className: "".concat(ManagerDashboard_module_scss_1.default.btn, " ").concat(ManagerDashboard_module_scss_1.default.btnResubmit), onClick: function () { return openModal(row, 'resubmit'); } },
                    React.createElement(IconRefresh, null),
                    " ",
                    strings.RequestResubmitBtn))))); }))),
        React.createElement(react_2.Modal, { isOpen: modalOpen, onDismiss: closeModal, isBlocking: actionLoading, containerClassName: ManagerDashboard_module_scss_1.default.modalContainer },
            React.createElement("div", { className: ManagerDashboard_module_scss_1.default.modalHeader },
                React.createElement("h2", { className: ManagerDashboard_module_scss_1.default.modalTitle }, modalTitle),
                React.createElement(react_2.IconButton, { iconProps: { iconName: 'Cancel' }, ariaLabel: "Close", onClick: closeModal, disabled: actionLoading, className: ManagerDashboard_module_scss_1.default.modalCloseBtn })),
            reviewRow && (React.createElement("div", { className: ManagerDashboard_module_scss_1.default.modalBody },
                React.createElement("div", { className: ManagerDashboard_module_scss_1.default.panelMeta },
                    React.createElement("span", { className: ManagerDashboard_module_scss_1.default.panelMetaName }, reviewRow.employeeName),
                    React.createElement("span", { className: ManagerDashboard_module_scss_1.default.panelMetaDetail },
                        React.createElement("span", null, (0, dateUtils_1.formatDateLabel)(reviewRow.entryDate)),
                        React.createElement("span", null,
                            "Total: ",
                            React.createElement("strong", null,
                                reviewRow.totalHours.toFixed(2),
                                " hrs")))),
                React.createElement("div", { className: ManagerDashboard_module_scss_1.default.panelTableWrap },
                    React.createElement("table", { className: ManagerDashboard_module_scss_1.default.panelTable },
                        React.createElement("thead", null,
                            React.createElement("tr", null,
                                React.createElement("th", null, strings.Project),
                                React.createElement("th", null, strings.Category),
                                React.createElement("th", null, strings.Description),
                                React.createElement("th", { className: ManagerDashboard_module_scss_1.default.colHrs }, strings.Hrs))),
                        React.createElement("tbody", null, reviewRow.entries.map(function (e) { return (React.createElement("tr", { key: e.id },
                            React.createElement("td", null, e.projectName),
                            React.createElement("td", null, e.activityCategoryName),
                            React.createElement("td", null, e.taskDescription),
                            React.createElement("td", { className: ManagerDashboard_module_scss_1.default.tdCenter }, e.hoursSpent))); })))),
                reviewAction !== 'approve' && (React.createElement(React.Fragment, null,
                    React.createElement(react_2.TextField, { label: strings.ManagerCommentLabel, required: true, multiline: true, rows: 4, value: managerComment, onChange: function (_e, val) { return setManagerComment(val || ''); }, placeholder: strings.ManagerCommentPlaceholder, disabled: actionLoading }),
                    !managerComment.trim() && (React.createElement("span", { style: { color: '#a19f9d', fontSize: 12, display: 'block', marginTop: 4 } },
                        "A comment is required before ",
                        reviewAction === 'reject' ? 'rejecting' : 'requesting re-submission of',
                        " this timesheet.")))))),
            React.createElement("div", { className: ManagerDashboard_module_scss_1.default.modalFooter },
                React.createElement(react_2.PrimaryButton, { onClick: handleAction, disabled: confirmDisabled, className: reviewAction === 'approve' ? ManagerDashboard_module_scss_1.default.fluentBtnApprove :
                        reviewAction === 'reject' ? ManagerDashboard_module_scss_1.default.fluentBtnReject :
                            ManagerDashboard_module_scss_1.default.fluentBtnResubmit }, actionLoading
                    ? React.createElement(React.Fragment, null,
                        React.createElement(react_2.Spinner, { size: react_2.SpinnerSize.small }),
                        React.createElement("span", { style: { marginLeft: 6 } }, strings.Processing))
                    : confirmBtnLabel),
                React.createElement(react_2.DefaultButton, { text: strings.Cancel, onClick: closeModal, disabled: actionLoading })))));
};
exports.default = ManagerDashboard;
//# sourceMappingURL=ManagerDashboard.js.map