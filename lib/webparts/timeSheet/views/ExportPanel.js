import { __awaiter, __generator } from "tslib";
import * as React from 'react';
import { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { getEntriesForExport } from '../services/TimesheetService';
import { exportToExcel, exportToPDF } from '../services/ExportService';
import { currentMonthRange, formatDateShort } from '../utils/dateUtils';
import * as strings from 'TimeSheetWebPartStrings';
import styles from './ExportPanel.module.scss';
// ─── Constants ────────────────────────────────────────────────────────────────
function getStatusOptions() {
    return [
        { key: '', text: strings.AllStatuses },
        { key: 'Draft', text: strings.StatusDraft },
        { key: 'Submitted', text: strings.StatusSubmitted },
        { key: 'Approved', text: strings.StatusApproved },
        { key: 'Rejected', text: strings.StatusRejected },
    ];
}
// ─── Helpers ─────────────────────────────────────────────────────────────────
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
function badgeClass(status) {
    if (status === 'Approved')
        return styles.approved;
    if (status === 'Submitted')
        return styles.submitted;
    if (status === 'Rejected')
        return styles.rejected;
    return styles.draft;
}
// ─── SVG Icons ────────────────────────────────────────────────────────────────
var IconHome = function () { return (React.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "currentColor" },
    React.createElement("path", { d: "M8 1L1 7h2v7h4v-4h2v4h4V7h2L8 1z" }))); };
var IconSearch = function () { return (React.createElement("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "currentColor" },
    React.createElement("circle", { cx: "6", cy: "6", r: "4.5", stroke: "currentColor", strokeWidth: "1.5", fill: "none" }),
    React.createElement("path", { d: "M9.5 9.5l3 3", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }))); };
var IconExcel = function () { return (React.createElement("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "currentColor" },
    React.createElement("rect", { x: "1", y: "1", width: "13", height: "13", rx: "2", fill: "none", stroke: "currentColor", strokeWidth: "1.2" }),
    React.createElement("path", { d: "M4 4l3 3.5L4 11M8 4h3M8 7.5h2.5M8 11h3", stroke: "currentColor", strokeWidth: "1.3", strokeLinecap: "round", fill: "none" }))); };
var IconPdf = function () { return (React.createElement("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "currentColor" },
    React.createElement("rect", { x: "1", y: "1", width: "13", height: "13", rx: "2", fill: "none", stroke: "currentColor", strokeWidth: "1.2" }),
    React.createElement("path", { d: "M4 4h3a2 2 0 010 4H4V4z", stroke: "currentColor", strokeWidth: "1.2", fill: "none", strokeLinecap: "round" }),
    React.createElement("path", { d: "M4 11v-3M8 8v3M11 4v7", stroke: "currentColor", strokeWidth: "1.3", strokeLinecap: "round" }))); };
var IconClose = function () { return (React.createElement("svg", { width: "11", height: "11", viewBox: "0 0 11 11", fill: "currentColor" },
    React.createElement("path", { d: "M1 1l9 9M10 1L1 10", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }))); };
var IconSuccess = function () { return (React.createElement("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "currentColor" },
    React.createElement("circle", { cx: "7.5", cy: "7.5", r: "6.5", stroke: "currentColor", strokeWidth: "1.3", fill: "none" }),
    React.createElement("path", { d: "M4 7.5l2.5 2.5 4-4", stroke: "currentColor", strokeWidth: "1.5", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }))); };
var IconError = function () { return (React.createElement("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "currentColor" },
    React.createElement("circle", { cx: "7.5", cy: "7.5", r: "6.5", stroke: "currentColor", strokeWidth: "1.3", fill: "none" }),
    React.createElement("path", { d: "M7.5 4v4M7.5 9.5v.5", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round" }))); };
var IconNoData = function () { return (React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
    React.createElement("rect", { x: "6", y: "8", width: "36", height: "32", rx: "4", stroke: "currentColor", strokeWidth: "2.5" }),
    React.createElement("path", { d: "M14 16h20M14 22h12M14 28h8", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", opacity: ".5" }),
    React.createElement("circle", { cx: "36", cy: "36", r: "9", fill: "white", stroke: "currentColor", strokeWidth: "2.5" }),
    React.createElement("path", { d: "M32 36h8M36 32v8", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", opacity: ".4" }))); };
// ─── Component ────────────────────────────────────────────────────────────────
var ExportPanel = function () {
    var _a;
    var navigateHome = useContext(AppContext).navigateHome;
    var _b = currentMonthRange(), defaultStart = _b.start, defaultEnd = _b.end;
    var _c = useState(defaultStart), startDate = _c[0], setStartDate = _c[1];
    var _d = useState(defaultEnd), endDate = _d[0], setEndDate = _d[1];
    var _e = useState(''), employeeEmail = _e[0], setEmployeeEmail = _e[1];
    var _f = useState(''), statusFilter = _f[0], setStatusFilter = _f[1];
    var _g = useState(null), previewData = _g[0], setPreviewData = _g[1];
    var _h = useState(false), loading = _h[0], setLoading = _h[1];
    var _j = useState(false), exporting = _j[0], setExporting = _j[1];
    var _k = useState(''), error = _k[0], setError = _k[1];
    var _l = useState(''), successMessage = _l[0], setSuccessMessage = _l[1];
    // ─── Helpers ────────────────────────────────────────────────────────────────
    var buildFilter = function () { return ({
        startDate: startDate,
        endDate: endDate,
        employeeEmail: employeeEmail || undefined,
        status: statusFilter || undefined,
    }); };
    // ─── Handlers ───────────────────────────────────────────────────────────────
    var handlePreview = function () { return __awaiter(void 0, void 0, void 0, function () {
        var filter, entries, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (endDate < startDate) {
                        setError('End date must be on or after the start date.');
                        return [2 /*return*/];
                    }
                    setLoading(true);
                    setError('');
                    setSuccessMessage('');
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, 4, 5]);
                    filter = buildFilter();
                    return [4 /*yield*/, getEntriesForExport(filter.startDate, filter.endDate, { employeeEmail: filter.employeeEmail, status: filter.status })];
                case 2:
                    entries = _b.sent();
                    setPreviewData(entries);
                    return [3 /*break*/, 5];
                case 3:
                    _a = _b.sent();
                    setError(strings.LoadExportFailed);
                    return [3 /*break*/, 5];
                case 4:
                    setLoading(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var handleExcelExport = function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!previewData)
                        return [2 /*return*/];
                    setExporting(true);
                    setError('');
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, exportToExcel(previewData, buildFilter())];
                case 2:
                    _b.sent();
                    setSuccessMessage(strings.ExcelSuccess);
                    return [3 /*break*/, 5];
                case 3:
                    _a = _b.sent();
                    setError(strings.ExcelFailed);
                    return [3 /*break*/, 5];
                case 4:
                    setExporting(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var handlePdfExport = function () { return __awaiter(void 0, void 0, void 0, function () {
        var err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!previewData)
                        return [2 /*return*/];
                    setExporting(true);
                    setError('');
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, exportToPDF(previewData, buildFilter())];
                case 2:
                    _a.sent();
                    setSuccessMessage(strings.PdfSuccess);
                    return [3 /*break*/, 5];
                case 3:
                    err_1 = _a.sent();
                    console.error('PDF export error:', err_1);
                    setError(err_1 instanceof Error ? err_1.message : strings.PdfFailed);
                    return [3 /*break*/, 5];
                case 4:
                    setExporting(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var totalHours = (_a = previewData === null || previewData === void 0 ? void 0 : previewData.reduce(function (s, e) { return s + e.hoursSpent; }, 0)) !== null && _a !== void 0 ? _a : 0;
    // unique employees in preview
    var uniqueEmployees = previewData
        ? new Set(previewData.map(function (e) { return e.employeeEmail; })).size
        : 0;
    // ─── Render ─────────────────────────────────────────────────────────────────
    return (React.createElement("div", { className: styles.container },
        React.createElement("div", { className: styles.header },
            React.createElement("button", { className: styles.homeBtn, title: "Home", onClick: navigateHome },
                React.createElement(IconHome, null)),
            React.createElement("h1", { className: styles.title }, strings.ExportTitle)),
        React.createElement("div", { className: styles.filterCard },
            React.createElement("p", { className: styles.filterTitle }, strings.FilterOptions),
            React.createElement("div", { className: styles.filterRow },
                React.createElement("div", { className: styles.filterGroup },
                    React.createElement("label", { htmlFor: "exp-from" },
                        strings.From,
                        " ",
                        React.createElement("span", { style: { color: '#da1e28' } }, "*")),
                    React.createElement("input", { id: "exp-from", type: "date", className: styles.filterInput, value: toDateInputValue(startDate), onChange: function (e) { if (e.target.value) {
                            setStartDate(fromDateInputValue(e.target.value));
                            setError('');
                        } } })),
                React.createElement("div", { className: styles.filterGroup },
                    React.createElement("label", { htmlFor: "exp-to" },
                        strings.To,
                        " ",
                        React.createElement("span", { style: { color: '#da1e28' } }, "*")),
                    React.createElement("input", { id: "exp-to", type: "date", className: styles.filterInput, style: endDate < startDate ? { borderColor: '#da1e28' } : {}, value: toDateInputValue(endDate), onChange: function (e) { if (e.target.value) {
                            setEndDate(fromDateInputValue(e.target.value));
                            setError('');
                        } } }),
                    endDate < startDate && (React.createElement("span", { style: { color: '#da1e28', fontSize: 12, display: 'block', marginTop: 2 } }, "Must be on or after the start date")))),
            React.createElement("div", { className: styles.filterRow },
                React.createElement("div", { className: styles.filterGroup },
                    React.createElement("label", { htmlFor: "exp-email" },
                        strings.EmployeeEmail,
                        " ",
                        React.createElement("span", { className: styles.optional }, strings.Optional)),
                    React.createElement("input", { id: "exp-email", type: "text", className: styles.filterInput, value: employeeEmail, onChange: function (e) { return setEmployeeEmail(e.target.value); }, placeholder: strings.EmailPlaceholder })),
                React.createElement("div", { className: styles.filterGroup },
                    React.createElement("label", { htmlFor: "exp-status" },
                        strings.Status,
                        " ",
                        React.createElement("span", { className: styles.optional }, strings.Optional)),
                    React.createElement("select", { id: "exp-status", className: styles.filterSelect, value: statusFilter, onChange: function (e) { return setStatusFilter(e.target.value); } }, getStatusOptions().map(function (o) { return (React.createElement("option", { key: o.key, value: o.key }, o.text)); })))),
            React.createElement("button", { className: "".concat(styles.btn, " ").concat(styles.btnDefault), onClick: handlePreview, disabled: loading }, loading
                ? React.createElement(React.Fragment, null,
                    React.createElement("div", { className: styles.spinnerSmDark }),
                    " ",
                    strings.LoadingData)
                : React.createElement(React.Fragment, null,
                    React.createElement(IconSearch, null),
                    " ",
                    strings.PreviewData))),
        error && (React.createElement("div", { className: "".concat(styles.messageBar, " ").concat(styles.error) },
            React.createElement(IconError, null),
            React.createElement("span", null, error),
            React.createElement("button", { className: styles.dismissBtn, onClick: function () { return setError(''); } },
                React.createElement(IconClose, null)))),
        successMessage && (React.createElement("div", { className: "".concat(styles.messageBar, " ").concat(styles.success) },
            React.createElement(IconSuccess, null),
            React.createElement("span", null, successMessage),
            React.createElement("button", { className: styles.dismissBtn, onClick: function () { return setSuccessMessage(''); } },
                React.createElement(IconClose, null)))),
        loading && (React.createElement("div", { className: styles.loadingWrap },
            React.createElement("div", { className: styles.spinner }),
            React.createElement("span", null, strings.LoadingData))),
        previewData !== null && !loading && (React.createElement("div", { className: styles.resultsSection },
            React.createElement("div", { className: styles.summaryStrip },
                React.createElement("div", { className: styles.summaryItem },
                    React.createElement("span", { className: styles.summaryLabel }, strings.Records),
                    React.createElement("span", { className: styles.summaryValue }, previewData.length)),
                React.createElement("div", { className: styles.summaryItem },
                    React.createElement("span", { className: styles.summaryLabel }, strings.TotalHours),
                    React.createElement("span", { className: styles.summaryValue }, totalHours.toFixed(2))),
                React.createElement("div", { className: styles.summaryItem },
                    React.createElement("span", { className: styles.summaryLabel }, strings.Employees),
                    React.createElement("span", { className: styles.summaryValue }, uniqueEmployees)),
                React.createElement("div", { className: styles.summaryItem },
                    React.createElement("span", { className: styles.summaryLabel }, strings.Period),
                    React.createElement("span", { className: styles.summaryValueSm },
                        formatDateShort(startDate),
                        " \u2013 ",
                        formatDateShort(endDate)))),
            React.createElement("div", { className: styles.exportBar },
                React.createElement("button", { className: "".concat(styles.btn, " ").concat(styles.btnExcel), onClick: handleExcelExport, disabled: exporting || previewData.length === 0 }, exporting
                    ? React.createElement(React.Fragment, null,
                        React.createElement("div", { className: styles.spinnerSm }),
                        " ",
                        strings.Exporting)
                    : React.createElement(React.Fragment, null,
                        React.createElement(IconExcel, null),
                        " ",
                        strings.ExportExcel)),
                React.createElement("button", { className: "".concat(styles.btn, " ").concat(styles.btnPdf), onClick: handlePdfExport, disabled: exporting || previewData.length === 0 }, exporting
                    ? React.createElement(React.Fragment, null,
                        React.createElement("div", { className: styles.spinnerSm }),
                        " ",
                        strings.Exporting)
                    : React.createElement(React.Fragment, null,
                        React.createElement(IconPdf, null),
                        " ",
                        strings.ExportPdf))),
            previewData.length === 0 ? (React.createElement("div", { className: styles.emptyState },
                React.createElement(IconNoData, null),
                React.createElement("span", { className: styles.emptyTitle }, strings.NoDataFound),
                React.createElement("span", { className: styles.emptySubtitle }, strings.NoDataHint))) : (React.createElement("div", { className: styles.tableCard },
                React.createElement("div", { className: styles.tableWrap },
                    React.createElement("table", { className: styles.previewTable },
                        React.createElement("thead", null,
                            React.createElement("tr", null,
                                React.createElement("th", null, strings.Employee),
                                React.createElement("th", { className: styles.colDate }, strings.Date),
                                React.createElement("th", null, strings.Project),
                                React.createElement("th", null, strings.Category),
                                React.createElement("th", null, strings.Description),
                                React.createElement("th", { className: styles.colHours }, strings.Hours),
                                React.createElement("th", { className: styles.colStatus }, strings.Status))),
                        React.createElement("tbody", null, previewData.map(function (e) { return (React.createElement("tr", { key: e.id },
                            React.createElement("td", null, e.employeeName),
                            React.createElement("td", null, formatDateShort(e.entryDate)),
                            React.createElement("td", null, e.projectName),
                            React.createElement("td", null, e.activityCategoryName),
                            React.createElement("td", null, e.taskDescription),
                            React.createElement("td", { className: styles.tdHours }, e.hoursSpent),
                            React.createElement("td", { className: styles.tdStatus },
                                React.createElement("span", { className: "".concat(styles.badge, " ").concat(badgeClass(e.status)) }, e.status)))); })))),
                React.createElement("div", { className: styles.tableFooter },
                    previewData.length,
                    " record",
                    previewData.length !== 1 ? 's' : '')))))));
};
export default ExportPanel;
//# sourceMappingURL=ExportPanel.js.map