"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var AppContext_1 = require("../context/AppContext");
var TimesheetService_1 = require("../services/TimesheetService");
var ExportService_1 = require("../services/ExportService");
var dateUtils_1 = require("../utils/dateUtils");
var ExportPanel_module_scss_1 = tslib_1.__importDefault(require("./ExportPanel.module.scss"));
// ─── Constants ────────────────────────────────────────────────────────────────
var STATUS_OPTIONS = [
    { key: '', text: 'All Statuses' },
    { key: 'Draft', text: 'Draft' },
    { key: 'Submitted', text: 'Submitted' },
    { key: 'Approved', text: 'Approved' },
    { key: 'Rejected', text: 'Rejected' },
];
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
        return ExportPanel_module_scss_1.default.approved;
    if (status === 'Submitted')
        return ExportPanel_module_scss_1.default.submitted;
    if (status === 'Rejected')
        return ExportPanel_module_scss_1.default.rejected;
    return ExportPanel_module_scss_1.default.draft;
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
    var navigateHome = (0, react_1.useContext)(AppContext_1.AppContext).navigateHome;
    var _b = (0, dateUtils_1.currentMonthRange)(), defaultStart = _b.start, defaultEnd = _b.end;
    var _c = (0, react_1.useState)(defaultStart), startDate = _c[0], setStartDate = _c[1];
    var _d = (0, react_1.useState)(defaultEnd), endDate = _d[0], setEndDate = _d[1];
    var _e = (0, react_1.useState)(''), employeeEmail = _e[0], setEmployeeEmail = _e[1];
    var _f = (0, react_1.useState)(''), statusFilter = _f[0], setStatusFilter = _f[1];
    var _g = (0, react_1.useState)(null), previewData = _g[0], setPreviewData = _g[1];
    var _h = (0, react_1.useState)(false), loading = _h[0], setLoading = _h[1];
    var _j = (0, react_1.useState)(false), exporting = _j[0], setExporting = _j[1];
    var _k = (0, react_1.useState)(''), error = _k[0], setError = _k[1];
    var _l = (0, react_1.useState)(''), successMessage = _l[0], setSuccessMessage = _l[1];
    // ─── Helpers ────────────────────────────────────────────────────────────────
    var buildFilter = function () { return ({
        startDate: startDate,
        endDate: endDate,
        employeeEmail: employeeEmail || undefined,
        status: statusFilter || undefined,
    }); };
    // ─── Handlers ───────────────────────────────────────────────────────────────
    var handlePreview = function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var filter, entries, _a;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    setLoading(true);
                    setError('');
                    setSuccessMessage('');
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, 4, 5]);
                    filter = buildFilter();
                    return [4 /*yield*/, (0, TimesheetService_1.getEntriesForExport)(filter.startDate, filter.endDate, { employeeEmail: filter.employeeEmail, status: filter.status })];
                case 2:
                    entries = _b.sent();
                    setPreviewData(entries);
                    return [3 /*break*/, 5];
                case 3:
                    _a = _b.sent();
                    setError('Failed to load data. Please try again.');
                    return [3 /*break*/, 5];
                case 4:
                    setLoading(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var handleExcelExport = function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var _a;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!previewData)
                        return [2 /*return*/];
                    setExporting(true);
                    setError('');
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, (0, ExportService_1.exportToExcel)(previewData, buildFilter())];
                case 2:
                    _b.sent();
                    setSuccessMessage('Excel file downloaded successfully.');
                    return [3 /*break*/, 5];
                case 3:
                    _a = _b.sent();
                    setError('Excel export failed. Please try again.');
                    return [3 /*break*/, 5];
                case 4:
                    setExporting(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var handlePdfExport = function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var err_1;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!previewData)
                        return [2 /*return*/];
                    setExporting(true);
                    setError('');
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, (0, ExportService_1.exportToPDF)(previewData, buildFilter())];
                case 2:
                    _a.sent();
                    setSuccessMessage('PDF file downloaded successfully.');
                    return [3 /*break*/, 5];
                case 3:
                    err_1 = _a.sent();
                    console.error('PDF export error:', err_1);
                    setError(err_1 instanceof Error ? err_1.message : 'PDF export failed. Please try again.');
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
    return (React.createElement("div", { className: ExportPanel_module_scss_1.default.container },
        React.createElement("div", { className: ExportPanel_module_scss_1.default.header },
            React.createElement("button", { className: ExportPanel_module_scss_1.default.homeBtn, title: "Home", onClick: navigateHome },
                React.createElement(IconHome, null)),
            React.createElement("h1", { className: ExportPanel_module_scss_1.default.title }, "Export Timesheet Report")),
        React.createElement("div", { className: ExportPanel_module_scss_1.default.filterCard },
            React.createElement("p", { className: ExportPanel_module_scss_1.default.filterTitle }, "Filter Options"),
            React.createElement("div", { className: ExportPanel_module_scss_1.default.filterRow },
                React.createElement("div", { className: ExportPanel_module_scss_1.default.filterGroup },
                    React.createElement("label", { htmlFor: "exp-from" },
                        "From ",
                        React.createElement("span", { style: { color: '#da1e28' } }, "*")),
                    React.createElement("input", { id: "exp-from", type: "date", className: ExportPanel_module_scss_1.default.filterInput, value: toDateInputValue(startDate), onChange: function (e) { return e.target.value && setStartDate(fromDateInputValue(e.target.value)); } })),
                React.createElement("div", { className: ExportPanel_module_scss_1.default.filterGroup },
                    React.createElement("label", { htmlFor: "exp-to" },
                        "To ",
                        React.createElement("span", { style: { color: '#da1e28' } }, "*")),
                    React.createElement("input", { id: "exp-to", type: "date", className: ExportPanel_module_scss_1.default.filterInput, value: toDateInputValue(endDate), onChange: function (e) { return e.target.value && setEndDate(fromDateInputValue(e.target.value)); } }))),
            React.createElement("div", { className: ExportPanel_module_scss_1.default.filterRow },
                React.createElement("div", { className: ExportPanel_module_scss_1.default.filterGroup },
                    React.createElement("label", { htmlFor: "exp-email" },
                        "Employee Email ",
                        React.createElement("span", { className: ExportPanel_module_scss_1.default.optional }, "(optional)")),
                    React.createElement("input", { id: "exp-email", type: "text", className: ExportPanel_module_scss_1.default.filterInput, value: employeeEmail, onChange: function (e) { return setEmployeeEmail(e.target.value); }, placeholder: "e.g. john@company.com" })),
                React.createElement("div", { className: ExportPanel_module_scss_1.default.filterGroup },
                    React.createElement("label", { htmlFor: "exp-status" },
                        "Status ",
                        React.createElement("span", { className: ExportPanel_module_scss_1.default.optional }, "(optional)")),
                    React.createElement("select", { id: "exp-status", className: ExportPanel_module_scss_1.default.filterSelect, value: statusFilter, onChange: function (e) { return setStatusFilter(e.target.value); } }, STATUS_OPTIONS.map(function (o) { return (React.createElement("option", { key: o.key, value: o.key }, o.text)); })))),
            React.createElement("button", { className: "".concat(ExportPanel_module_scss_1.default.btn, " ").concat(ExportPanel_module_scss_1.default.btnDefault), onClick: handlePreview, disabled: loading }, loading
                ? React.createElement(React.Fragment, null,
                    React.createElement("div", { className: ExportPanel_module_scss_1.default.spinnerSmDark }),
                    " Loading\u2026")
                : React.createElement(React.Fragment, null,
                    React.createElement(IconSearch, null),
                    " Preview Data"))),
        error && (React.createElement("div", { className: "".concat(ExportPanel_module_scss_1.default.messageBar, " ").concat(ExportPanel_module_scss_1.default.error) },
            React.createElement(IconError, null),
            React.createElement("span", null, error),
            React.createElement("button", { className: ExportPanel_module_scss_1.default.dismissBtn, onClick: function () { return setError(''); } },
                React.createElement(IconClose, null)))),
        successMessage && (React.createElement("div", { className: "".concat(ExportPanel_module_scss_1.default.messageBar, " ").concat(ExportPanel_module_scss_1.default.success) },
            React.createElement(IconSuccess, null),
            React.createElement("span", null, successMessage),
            React.createElement("button", { className: ExportPanel_module_scss_1.default.dismissBtn, onClick: function () { return setSuccessMessage(''); } },
                React.createElement(IconClose, null)))),
        loading && (React.createElement("div", { className: ExportPanel_module_scss_1.default.loadingWrap },
            React.createElement("div", { className: ExportPanel_module_scss_1.default.spinner }),
            React.createElement("span", null, "Loading data\u2026"))),
        previewData !== null && !loading && (React.createElement("div", { className: ExportPanel_module_scss_1.default.resultsSection },
            React.createElement("div", { className: ExportPanel_module_scss_1.default.summaryStrip },
                React.createElement("div", { className: ExportPanel_module_scss_1.default.summaryItem },
                    React.createElement("span", { className: ExportPanel_module_scss_1.default.summaryLabel }, "Records"),
                    React.createElement("span", { className: ExportPanel_module_scss_1.default.summaryValue }, previewData.length)),
                React.createElement("div", { className: ExportPanel_module_scss_1.default.summaryItem },
                    React.createElement("span", { className: ExportPanel_module_scss_1.default.summaryLabel }, "Total Hours"),
                    React.createElement("span", { className: ExportPanel_module_scss_1.default.summaryValue }, totalHours.toFixed(2))),
                React.createElement("div", { className: ExportPanel_module_scss_1.default.summaryItem },
                    React.createElement("span", { className: ExportPanel_module_scss_1.default.summaryLabel }, "Employees"),
                    React.createElement("span", { className: ExportPanel_module_scss_1.default.summaryValue }, uniqueEmployees)),
                React.createElement("div", { className: ExportPanel_module_scss_1.default.summaryItem },
                    React.createElement("span", { className: ExportPanel_module_scss_1.default.summaryLabel }, "Period"),
                    React.createElement("span", { className: ExportPanel_module_scss_1.default.summaryValueSm },
                        (0, dateUtils_1.formatDateShort)(startDate),
                        " \u2013 ",
                        (0, dateUtils_1.formatDateShort)(endDate)))),
            React.createElement("div", { className: ExportPanel_module_scss_1.default.exportBar },
                React.createElement("button", { className: "".concat(ExportPanel_module_scss_1.default.btn, " ").concat(ExportPanel_module_scss_1.default.btnExcel), onClick: handleExcelExport, disabled: exporting || previewData.length === 0 }, exporting
                    ? React.createElement(React.Fragment, null,
                        React.createElement("div", { className: ExportPanel_module_scss_1.default.spinnerSm }),
                        " Exporting\u2026")
                    : React.createElement(React.Fragment, null,
                        React.createElement(IconExcel, null),
                        " Export to Excel")),
                React.createElement("button", { className: "".concat(ExportPanel_module_scss_1.default.btn, " ").concat(ExportPanel_module_scss_1.default.btnPdf), onClick: handlePdfExport, disabled: exporting || previewData.length === 0 }, exporting
                    ? React.createElement(React.Fragment, null,
                        React.createElement("div", { className: ExportPanel_module_scss_1.default.spinnerSm }),
                        " Exporting\u2026")
                    : React.createElement(React.Fragment, null,
                        React.createElement(IconPdf, null),
                        " Export to PDF"))),
            previewData.length === 0 ? (React.createElement("div", { className: ExportPanel_module_scss_1.default.emptyState },
                React.createElement(IconNoData, null),
                React.createElement("span", { className: ExportPanel_module_scss_1.default.emptyTitle }, "No data found"),
                React.createElement("span", { className: ExportPanel_module_scss_1.default.emptySubtitle }, "Try adjusting your filters and previewing again."))) : (React.createElement("div", { className: ExportPanel_module_scss_1.default.tableCard },
                React.createElement("div", { className: ExportPanel_module_scss_1.default.tableWrap },
                    React.createElement("table", { className: ExportPanel_module_scss_1.default.previewTable },
                        React.createElement("thead", null,
                            React.createElement("tr", null,
                                React.createElement("th", null, "Employee"),
                                React.createElement("th", { className: ExportPanel_module_scss_1.default.colDate }, "Date"),
                                React.createElement("th", null, "Project"),
                                React.createElement("th", null, "Category"),
                                React.createElement("th", null, "Description"),
                                React.createElement("th", { className: ExportPanel_module_scss_1.default.colHours }, "Hours"),
                                React.createElement("th", { className: ExportPanel_module_scss_1.default.colStatus }, "Status"))),
                        React.createElement("tbody", null, previewData.map(function (e) { return (React.createElement("tr", { key: e.id },
                            React.createElement("td", null, e.employeeName),
                            React.createElement("td", null, (0, dateUtils_1.formatDateShort)(e.entryDate)),
                            React.createElement("td", null, e.projectName),
                            React.createElement("td", null, e.activityCategoryName),
                            React.createElement("td", null, e.taskDescription),
                            React.createElement("td", { className: ExportPanel_module_scss_1.default.tdHours }, e.hoursSpent),
                            React.createElement("td", { className: ExportPanel_module_scss_1.default.tdStatus },
                                React.createElement("span", { className: "".concat(ExportPanel_module_scss_1.default.badge, " ").concat(badgeClass(e.status)) }, e.status)))); })))),
                React.createElement("div", { className: ExportPanel_module_scss_1.default.tableFooter },
                    previewData.length,
                    " record",
                    previewData.length !== 1 ? 's' : '')))))));
};
exports.default = ExportPanel;
//# sourceMappingURL=ExportPanel.js.map