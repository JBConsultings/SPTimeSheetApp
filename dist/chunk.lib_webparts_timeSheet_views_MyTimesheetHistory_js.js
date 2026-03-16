"use strict";
(self["webpackJsonp_c7e5e177-9baf-42a9-91c9-2ea9fecc19a8_0.0.1"] = self["webpackJsonp_c7e5e177-9baf-42a9-91c9-2ea9fecc19a8_0.0.1"] || []).push([["lib_webparts_timeSheet_views_MyTimesheetHistory_js"],{

/***/ 55595:
/*!*************************************************************************!*\
  !*** ./lib/webparts/timeSheet/views/MyTimesheetHistory.module.scss.css ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_microsoft_sp_css_loader_node_modules_microsoft_load_themed_styles_lib_es6_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/@microsoft/sp-css-loader/node_modules/@microsoft/load-themed-styles/lib-es6/index.js */ 96323);
// Imports


_node_modules_microsoft_sp_css_loader_node_modules_microsoft_load_themed_styles_lib_es6_index_js__WEBPACK_IMPORTED_MODULE_0__.loadStyles(".container_850d0b6e{animation:fadeIn_850d0b6e .25s ease both;color:#161616;font-family:IBM Plex Sans,Segoe UI,sans-serif;margin:0 auto;max-width:900px;padding:32px}@keyframes fadeIn_850d0b6e{0%{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}.header_850d0b6e{align-items:center;display:flex;gap:12px;margin-bottom:28px}.header_850d0b6e .homeBtn_850d0b6e{align-items:center;background:#fff;border:1px solid #e0e0e0;border-radius:8px;color:#525252;cursor:pointer;display:flex;flex-shrink:0;height:36px;justify-content:center;transition:background .15s cubic-bezier(.4,0,.2,1),box-shadow .15s cubic-bezier(.4,0,.2,1),color .15s cubic-bezier(.4,0,.2,1);width:36px}.header_850d0b6e .homeBtn_850d0b6e:hover{background:#edf4ff;box-shadow:0 1px 3px rgba(0,0,0,.08),0 1px 2px rgba(0,0,0,.06);color:#0f62fe}.header_850d0b6e .title_850d0b6e{color:#161616;font-size:22px;font-weight:700;letter-spacing:-.3px;margin:0}.filterBar_850d0b6e{align-items:flex-end;background:#fff;border:1px solid #e0e0e0;border-radius:12px;box-shadow:0 1px 3px rgba(0,0,0,.08),0 1px 2px rgba(0,0,0,.06);display:flex;flex-wrap:wrap;gap:16px;margin-bottom:24px;padding:16px 20px}.filterGroup_850d0b6e{display:flex;flex:1;flex-direction:column;gap:5px;min-width:155px}.filterGroup_850d0b6e label{color:#525252;font-size:11.5px;font-weight:600;letter-spacing:.4px;text-transform:uppercase}.filterInput_850d0b6e,.filterSelect_850d0b6e{background:#f4f4f4;border:1px solid #e0e0e0;border-radius:4px;box-sizing:border-box;color:#161616;font-family:inherit;font-size:13.5px;height:36px;outline:none;padding:0 10px;transition:border-color .15s cubic-bezier(.4,0,.2,1),box-shadow .15s cubic-bezier(.4,0,.2,1),background .15s cubic-bezier(.4,0,.2,1);width:100%}.filterInput_850d0b6e:focus,.filterSelect_850d0b6e:focus{background:#fff;border-color:#0f62fe;box-shadow:0 0 0 3px rgba(15,98,254,.15)}.filterSelect_850d0b6e{appearance:none;background-color:#f4f4f4;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8'%3E%3Cpath fill='%23525252' d='m1 1 5 5 5-5'/%3E%3C/svg%3E\");background-position:right 10px center;background-repeat:no-repeat;cursor:pointer;padding-right:28px}.errorBar_850d0b6e{align-items:center;background:#fff1f1;border:1px solid #ffd7d9;border-radius:8px;color:#750e13;display:flex;font-size:13.5px;gap:10px;margin-bottom:16px;padding:10px 16px}.loadingWrap_850d0b6e{align-items:center;color:#525252;display:flex;flex-direction:column;font-size:14px;gap:14px;justify-content:center;min-height:180px}.spinner_850d0b6e{animation:spin_850d0b6e .7s linear infinite;border:3px solid #e0e0e0;border-radius:50%;border-top-color:#0f62fe;height:32px;width:32px}@keyframes spin_850d0b6e{to{transform:rotate(1turn)}}.emptyState_850d0b6e{align-items:center;color:#8d8d8d;display:flex;flex-direction:column;gap:10px;justify-content:center;padding:52px 24px;text-align:center}.emptyState_850d0b6e .emptyIcon_850d0b6e{height:48px;margin-bottom:4px;opacity:.35;width:48px}.emptyState_850d0b6e .emptyTitle_850d0b6e{color:#525252;font-size:15px;font-weight:600}.emptyState_850d0b6e .emptySubtitle_850d0b6e{font-size:13px}.list_850d0b6e{display:flex;flex-direction:column;gap:8px;margin-bottom:16px}.summaryCard_850d0b6e{align-items:center;background:#fff;border:1px solid #e0e0e0;border-radius:8px;cursor:pointer;display:flex;gap:12px;justify-content:space-between;padding:14px 18px;text-decoration:none;transition:box-shadow .15s cubic-bezier(.4,0,.2,1),border-color .15s cubic-bezier(.4,0,.2,1),transform .15s cubic-bezier(.4,0,.2,1)}.summaryCard_850d0b6e:hover{border-color:#c6c6c6;box-shadow:0 4px 12px rgba(0,0,0,.1),0 2px 4px rgba(0,0,0,.06);transform:translateY(-1px)}.summaryCard_850d0b6e:active{box-shadow:0 1px 3px rgba(0,0,0,.08),0 1px 2px rgba(0,0,0,.06);transform:translateY(0)}.cardLeft_850d0b6e{display:flex;flex-direction:column;gap:4px;min-width:0}.cardDate_850d0b6e{color:#161616;font-size:15px;font-weight:600;white-space:nowrap}.cardMeta_850d0b6e{align-items:center;color:#8d8d8d;display:flex;font-size:12.5px;gap:6px}.cardMeta_850d0b6e .dot_850d0b6e{background:#8d8d8d;border-radius:50%;flex-shrink:0;height:3px;width:3px}.badge_850d0b6e{align-items:center;border-radius:20px;display:inline-flex;flex-shrink:0;font-size:11.5px;font-weight:700;gap:5px;letter-spacing:.3px;padding:4px 12px;white-space:nowrap}.badge_850d0b6e:before{background:currentColor;border-radius:50%;content:\"\";flex-shrink:0;height:6px;opacity:.7;width:6px}.badge_850d0b6e.approved_850d0b6e{background:#defbe6;color:#24a148}.badge_850d0b6e.submitted_850d0b6e{background:#edf4ff;color:#0f62fe}.badge_850d0b6e.rejected_850d0b6e{background:#fff1f1;color:#da1e28}.badge_850d0b6e.draft_850d0b6e{background:#fdf6d8;color:#b28600}.footer_850d0b6e{align-items:center;border-top:1px solid #e0e0e0;color:#8d8d8d;display:flex;font-size:12.5px;gap:6px;margin-top:8px;padding-top:4px}.footer_850d0b6e strong{color:#525252;font-weight:600}", true);

// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  fadeIn: "fadeIn_850d0b6e",
  header: "header_850d0b6e",
  homeBtn: "homeBtn_850d0b6e",
  title: "title_850d0b6e",
  filterBar: "filterBar_850d0b6e",
  filterGroup: "filterGroup_850d0b6e",
  filterInput: "filterInput_850d0b6e",
  filterSelect: "filterSelect_850d0b6e",
  errorBar: "errorBar_850d0b6e",
  loadingWrap: "loadingWrap_850d0b6e",
  spinner: "spinner_850d0b6e",
  spin: "spin_850d0b6e",
  emptyState: "emptyState_850d0b6e",
  emptyIcon: "emptyIcon_850d0b6e",
  emptyTitle: "emptyTitle_850d0b6e",
  emptySubtitle: "emptySubtitle_850d0b6e",
  list: "list_850d0b6e",
  summaryCard: "summaryCard_850d0b6e",
  cardLeft: "cardLeft_850d0b6e",
  cardDate: "cardDate_850d0b6e",
  cardMeta: "cardMeta_850d0b6e",
  dot: "dot_850d0b6e",
  badge: "badge_850d0b6e",
  approved: "approved_850d0b6e",
  submitted: "submitted_850d0b6e",
  rejected: "rejected_850d0b6e",
  draft: "draft_850d0b6e",
  footer: "footer_850d0b6e",
  container: "container_850d0b6e"
});


/***/ }),

/***/ 34205:
/*!************************************************************!*\
  !*** ./lib/webparts/timeSheet/views/MyTimesheetHistory.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 85959);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/AppContext */ 24770);
/* harmony import */ var _services_TimesheetService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/TimesheetService */ 30264);
/* harmony import */ var _utils_dateUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/dateUtils */ 28613);
/* harmony import */ var _MyTimesheetHistory_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MyTimesheetHistory.module.scss */ 55595);






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
        return _MyTimesheetHistory_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].approved;
    if (status === 'Submitted')
        return _MyTimesheetHistory_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].submitted;
    if (status === 'Rejected')
        return _MyTimesheetHistory_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].rejected;
    return _MyTimesheetHistory_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].draft;
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
var IconHome = function () { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "currentColor" },
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M8 1L1 7h2v7h4v-4h2v4h4V7h2L8 1z" }))); };
var IconError = function () { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "currentColor" },
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", { cx: "8", cy: "8", r: "7", stroke: "currentColor", strokeWidth: "1.3", fill: "none" }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M8 4v4M8 10v1", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round" }))); };
var IconCalendar = function (_a) {
    var className = _a.className;
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { className: className, width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", { x: "6", y: "10", width: "36", height: "32", rx: "4", stroke: "currentColor", strokeWidth: "2.5" }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M6 18h36", stroke: "currentColor", strokeWidth: "2.5" }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M16 6v8M32 6v8", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round" }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", { x: "13", y: "24", width: "6", height: "5", rx: "1", fill: "currentColor", opacity: ".4" }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", { x: "21", y: "24", width: "6", height: "5", rx: "1", fill: "currentColor", opacity: ".4" }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", { x: "29", y: "24", width: "6", height: "5", rx: "1", fill: "currentColor", opacity: ".4" })));
};
var IconChevronRight = function () { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "currentColor" },
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M5 2l5 5-5 5", stroke: "currentColor", strokeWidth: "1.5", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }))); };
// ─── Component ────────────────────────────────────────────────────────────────
var MyTimesheetHistory = function () {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_AppContext__WEBPACK_IMPORTED_MODULE_1__.AppContext), currentUser = _a.currentUser, navigateTo = _a.navigateTo, navigateHome = _a.navigateHome;
    var _b = (0,_utils_dateUtils__WEBPACK_IMPORTED_MODULE_4__.currentMonthRange)(), defaultStart = _b.start, defaultEnd = _b.end;
    var _c = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultStart), startDate = _c[0], setStartDate = _c[1];
    var _d = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultEnd), endDate = _d[0], setEndDate = _d[1];
    var _e = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('All'), statusFilter = _e[0], setStatusFilter = _e[1];
    var _f = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]), summaries = _f[0], setSummaries = _f[1];
    var _g = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true), loading = _g[0], setLoading = _g[1];
    var _h = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''), error = _h[0], setError = _h[1];
    // ─── Data fetch ─────────────────────────────────────────────────────────────
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        var cancelled = false;
        setLoading(true);
        setError('');
        (0,_services_TimesheetService__WEBPACK_IMPORTED_MODULE_2__.getEntriesForDateRange)(startDate, endDate, currentUser.email)
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
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _MyTimesheetHistory_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].container },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _MyTimesheetHistory_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].header },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: _MyTimesheetHistory_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].homeBtn, title: "Home", onClick: navigateHome },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconHome, null)),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", { className: _MyTimesheetHistory_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].title }, "My Timesheet History")),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _MyTimesheetHistory_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].filterBar },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _MyTimesheetHistory_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].filterGroup },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { htmlFor: "filter-from" }, "From"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { id: "filter-from", type: "date", className: _MyTimesheetHistory_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].filterInput, value: toDateInputValue(startDate), onChange: function (e) { return e.target.value && setStartDate(fromDateInputValue(e.target.value)); } })),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _MyTimesheetHistory_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].filterGroup },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { htmlFor: "filter-to" }, "To"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { id: "filter-to", type: "date", className: _MyTimesheetHistory_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].filterInput, value: toDateInputValue(endDate), onChange: function (e) { return e.target.value && setEndDate(fromDateInputValue(e.target.value)); } })),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _MyTimesheetHistory_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].filterGroup },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { htmlFor: "filter-status" }, "Status"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", { id: "filter-status", className: _MyTimesheetHistory_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].filterSelect, value: statusFilter, onChange: function (e) { return setStatusFilter(e.target.value); } }, STATUS_OPTIONS.map(function (o) { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { key: o.key, value: o.key }, o.text)); })))),
        error && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _MyTimesheetHistory_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].errorBar },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconError, null),
            error)),
        loading ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _MyTimesheetHistory_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].loadingWrap },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _MyTimesheetHistory_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].spinner }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Loading history\u2026"))) : filtered.length === 0 ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _MyTimesheetHistory_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].emptyState },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconCalendar, { className: _MyTimesheetHistory_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].emptyIcon }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _MyTimesheetHistory_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].emptyTitle }, "No entries found"),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _MyTimesheetHistory_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].emptySubtitle }, "Try adjusting the date range or status filter."))) : (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _MyTimesheetHistory_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].list }, filtered.map(function (summary) { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { key: summary.date.toISOString(), className: _MyTimesheetHistory_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].summaryCard, onClick: function () { return navigateTo('DailyForm', { selectedDate: summary.date }); }, role: "button", tabIndex: 0, onKeyDown: function (e) { return e.key === 'Enter' && navigateTo('DailyForm', { selectedDate: summary.date }); } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _MyTimesheetHistory_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].cardLeft },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _MyTimesheetHistory_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].cardDate }, (0,_utils_dateUtils__WEBPACK_IMPORTED_MODULE_4__.formatDateLabel)(summary.date)),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _MyTimesheetHistory_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].cardMeta },
                    summary.entries.length,
                    " task",
                    summary.entries.length !== 1 ? 's' : '',
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _MyTimesheetHistory_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].dot }),
                    summary.totalHours.toFixed(2),
                    " hrs")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: 10 } },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "".concat(_MyTimesheetHistory_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].badge, " ").concat(badgeClass(summary.status)) }, summary.status),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconChevronRight, null)))); }))),
        !loading && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _MyTimesheetHistory_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].footer },
            "Showing ",
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, filtered.length),
            " day",
            filtered.length !== 1 ? 's' : '',
            "\u00A0\u00B7\u00A0",
            (0,_utils_dateUtils__WEBPACK_IMPORTED_MODULE_4__.formatDateShort)(startDate),
            " \u2013 ",
            (0,_utils_dateUtils__WEBPACK_IMPORTED_MODULE_4__.formatDateShort)(endDate)))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyTimesheetHistory);


/***/ })

}]);
//# sourceMappingURL=chunk.lib_webparts_timeSheet_views_MyTimesheetHistory_js.js.map