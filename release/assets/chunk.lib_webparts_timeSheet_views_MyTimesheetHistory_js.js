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


_node_modules_microsoft_sp_css_loader_node_modules_microsoft_load_themed_styles_lib_es6_index_js__WEBPACK_IMPORTED_MODULE_0__.loadStyles(".container_52d389c1{animation:fadeIn_52d389c1 .25s ease both;color:#161616;font-family:IBM Plex Sans,Segoe UI,sans-serif;padding:32px}@keyframes fadeIn_52d389c1{0%{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}.header_52d389c1{align-items:center;background:linear-gradient(135deg,#667eea,#764ba2);display:flex;gap:12px;margin:-32px -32px 28px;overflow:hidden;padding:24px 32px;position:relative}.header_52d389c1:before{background:radial-gradient(circle at 20% 50%,hsla(0,0%,100%,.15) 0,transparent 50%),radial-gradient(circle at 80% 20%,hsla(0,0%,100%,.1) 0,transparent 50%);content:\"\";inset:0;pointer-events:none;position:absolute}.header_52d389c1 .homeBtn_52d389c1{align-items:center;background:hsla(0,0%,100%,.15);border:1px solid hsla(0,0%,100%,.3);border-radius:8px;color:#fff;cursor:pointer;display:flex;flex-shrink:0;height:36px;justify-content:center;position:relative;transition:background .15s cubic-bezier(.4,0,.2,1);width:36px;z-index:1}.header_52d389c1 .homeBtn_52d389c1:hover{background:hsla(0,0%,100%,.28)}.header_52d389c1 .title_52d389c1{color:#fff;font-size:22px;font-weight:700;letter-spacing:-.3px;margin:0;position:relative;text-shadow:0 1px 2px rgba(0,0,0,.1);z-index:1}.filterBar_52d389c1{align-items:flex-end;background:#fff;border:1px solid #e0e0e0;border-radius:12px;box-shadow:0 1px 3px rgba(0,0,0,.08),0 1px 2px rgba(0,0,0,.06);display:flex;flex-wrap:wrap;gap:16px;margin-bottom:24px;padding:16px 20px}.filterGroup_52d389c1{display:flex;flex:1;flex-direction:column;gap:5px;min-width:155px}.filterGroup_52d389c1 label{color:#525252;font-size:11.5px;font-weight:600;letter-spacing:.4px;text-transform:uppercase}.filterInput_52d389c1,.filterSelect_52d389c1{background:#f4f4f4;border:1px solid #e0e0e0;border-radius:4px;box-sizing:border-box;color:#161616;font-family:inherit;font-size:13.5px;height:36px;outline:none;padding:0 10px;transition:border-color .15s cubic-bezier(.4,0,.2,1),box-shadow .15s cubic-bezier(.4,0,.2,1),background .15s cubic-bezier(.4,0,.2,1);width:100%}.filterInput_52d389c1:focus,.filterSelect_52d389c1:focus{background:#fff;border-color:#667eea;box-shadow:0 0 0 3px rgba(15,98,254,.15)}.filterSelect_52d389c1{appearance:none;background-color:#f4f4f4;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8'%3E%3Cpath fill='%23525252' d='m1 1 5 5 5-5'/%3E%3C/svg%3E\");background-position:right 10px center;background-repeat:no-repeat;cursor:pointer;padding-right:28px}.errorBar_52d389c1{align-items:center;background:#fff1f1;border:1px solid #ffd7d9;border-radius:8px;color:#750e13;display:flex;font-size:13.5px;gap:10px;margin-bottom:16px;padding:10px 16px}.loadingWrap_52d389c1{align-items:center;color:#525252;display:flex;flex-direction:column;font-size:14px;gap:14px;justify-content:center;min-height:180px}.spinner_52d389c1{animation:spin_52d389c1 .7s linear infinite;border:3px solid #e0e0e0;border-radius:50%;border-top-color:#667eea;height:32px;width:32px}@keyframes spin_52d389c1{to{transform:rotate(1turn)}}.emptyState_52d389c1{align-items:center;color:#8d8d8d;display:flex;flex-direction:column;gap:10px;justify-content:center;padding:52px 24px;text-align:center}.emptyState_52d389c1 .emptyIcon_52d389c1{height:48px;margin-bottom:4px;opacity:.35;width:48px}.emptyState_52d389c1 .emptyTitle_52d389c1{color:#525252;font-size:15px;font-weight:600}.emptyState_52d389c1 .emptySubtitle_52d389c1{font-size:13px}.list_52d389c1{display:flex;flex-direction:column;gap:8px;margin-bottom:16px}.summaryCard_52d389c1{align-items:center;background:#fff;border:1px solid #e0e0e0;border-radius:8px;cursor:pointer;display:flex;gap:12px;justify-content:space-between;padding:14px 18px;text-decoration:none;transition:box-shadow .15s cubic-bezier(.4,0,.2,1),border-color .15s cubic-bezier(.4,0,.2,1),transform .15s cubic-bezier(.4,0,.2,1)}.summaryCard_52d389c1:hover{border-color:#c6c6c6;box-shadow:0 4px 12px rgba(0,0,0,.1),0 2px 4px rgba(0,0,0,.06);transform:translateY(-1px)}.summaryCard_52d389c1:active{box-shadow:0 1px 3px rgba(0,0,0,.08),0 1px 2px rgba(0,0,0,.06);transform:translateY(0)}.cardLeft_52d389c1{display:flex;flex-direction:column;gap:4px;min-width:0}.cardDate_52d389c1{color:#161616;font-size:15px;font-weight:600;white-space:nowrap}.cardMeta_52d389c1{align-items:center;color:#8d8d8d;display:flex;font-size:12.5px;gap:6px}.cardMeta_52d389c1 .dot_52d389c1{background:#8d8d8d;border-radius:50%;flex-shrink:0;height:3px;width:3px}.badge_52d389c1{align-items:center;border-radius:20px;display:inline-flex;flex-shrink:0;font-size:11.5px;font-weight:700;gap:5px;letter-spacing:.3px;padding:4px 12px;white-space:nowrap}.badge_52d389c1:before{background:currentColor;border-radius:50%;content:\"\";flex-shrink:0;height:6px;opacity:.7;width:6px}.badge_52d389c1.approved_52d389c1{background:#defbe6;color:#24a148}.badge_52d389c1.submitted_52d389c1{background:rgba(102,126,234,.08);color:#0f62fe}.badge_52d389c1.rejected_52d389c1{background:#fff1f1;color:#da1e28}.badge_52d389c1.draft_52d389c1{background:#fdf6d8;color:#b28600}.otBadge_52d389c1{align-items:center;background:#fff3e0;border:1.5px solid #ff9800;border-radius:20px;color:#e65100;display:inline-flex;flex-shrink:0;font-size:11px;font-weight:700;letter-spacing:.3px;padding:2px 8px;white-space:nowrap}.footer_52d389c1{align-items:center;border-top:1px solid #e0e0e0;color:#8d8d8d;display:flex;font-size:12.5px;gap:6px;margin-top:8px;padding-top:4px}.footer_52d389c1 strong{color:#525252;font-weight:600}", true);

// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  fadeIn: "fadeIn_52d389c1",
  header: "header_52d389c1",
  homeBtn: "homeBtn_52d389c1",
  title: "title_52d389c1",
  filterBar: "filterBar_52d389c1",
  filterGroup: "filterGroup_52d389c1",
  filterInput: "filterInput_52d389c1",
  filterSelect: "filterSelect_52d389c1",
  errorBar: "errorBar_52d389c1",
  loadingWrap: "loadingWrap_52d389c1",
  spinner: "spinner_52d389c1",
  spin: "spin_52d389c1",
  emptyState: "emptyState_52d389c1",
  emptyIcon: "emptyIcon_52d389c1",
  emptyTitle: "emptyTitle_52d389c1",
  emptySubtitle: "emptySubtitle_52d389c1",
  list: "list_52d389c1",
  summaryCard: "summaryCard_52d389c1",
  cardLeft: "cardLeft_52d389c1",
  cardDate: "cardDate_52d389c1",
  cardMeta: "cardMeta_52d389c1",
  dot: "dot_52d389c1",
  badge: "badge_52d389c1",
  approved: "approved_52d389c1",
  submitted: "submitted_52d389c1",
  rejected: "rejected_52d389c1",
  draft: "draft_52d389c1",
  otBadge: "otBadge_52d389c1",
  footer: "footer_52d389c1",
  container: "container_52d389c1"
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 10196);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 85959);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/AppContext */ 24770);
/* harmony import */ var _services_TimesheetService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/TimesheetService */ 30264);
/* harmony import */ var _utils_dateUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/dateUtils */ 28613);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/constants */ 47293);
/* harmony import */ var TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! TimeSheetWebPartStrings */ 31339);
/* harmony import */ var TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _MyTimesheetHistory_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MyTimesheetHistory.module.scss */ 55595);









// ─── Constants ────────────────────────────────────────────────────────────────
function getStatusOptions() {
    return [
        { key: 'All', text: TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.AllStatuses },
        { key: 'Draft', text: TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.StatusDraft },
        { key: 'Submitted', text: TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.StatusSubmitted },
        { key: 'Approved', text: TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.StatusApproved },
        { key: 'Rejected', text: TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.StatusRejected },
    ];
}
// ─── Helpers ──────────────────────────────────────────────────────────────────
function badgeClass(status) {
    if (status === 'Approved')
        return _MyTimesheetHistory_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].approved;
    if (status === 'Submitted')
        return _MyTimesheetHistory_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].submitted;
    if (status === 'Rejected')
        return _MyTimesheetHistory_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].rejected;
    return _MyTimesheetHistory_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].draft;
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
var IconTrash = function () { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "currentColor" },
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M2 4h10M5 4V2h4v2M6 6v5M8 6v5M3 4l1 8h6l1-8", stroke: "currentColor", strokeWidth: "1.3", fill: "none", strokeLinecap: "round" }))); };
// ─── Component ────────────────────────────────────────────────────────────────
var MyTimesheetHistory = function () {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_AppContext__WEBPACK_IMPORTED_MODULE_1__.AppContext), currentUser = _a.currentUser, navigateTo = _a.navigateTo, navigateHome = _a.navigateHome;
    var _b = (0,_utils_dateUtils__WEBPACK_IMPORTED_MODULE_6__.currentMonthRange)(), defaultStart = _b.start, defaultEnd = _b.end;
    var _c = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultStart), startDate = _c[0], setStartDate = _c[1];
    var _d = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultEnd), endDate = _d[0], setEndDate = _d[1];
    var _e = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('All'), statusFilter = _e[0], setStatusFilter = _e[1];
    var _f = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]), summaries = _f[0], setSummaries = _f[1];
    var _g = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true), loading = _g[0], setLoading = _g[1];
    var _h = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''), error = _h[0], setError = _h[1];
    var _j = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null), confirmDeleteKey = _j[0], setConfirmDeleteKey = _j[1];
    var _k = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), deleting = _k[0], setDeleting = _k[1];
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
                setError(TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.LoadHistoryFailed);
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
    var confirmDelete = function (summary, e) { return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(void 0, void 0, void 0, function () {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__generator)(this, function (_b) {
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
                            .map(function (en) { return (0,_services_TimesheetService__WEBPACK_IMPORTED_MODULE_2__.deleteEntry)(en.id); }))];
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
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _MyTimesheetHistory_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].container },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _MyTimesheetHistory_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].header },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: _MyTimesheetHistory_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].homeBtn, title: "Home", onClick: navigateHome },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconHome, null)),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", { className: _MyTimesheetHistory_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].title }, TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.HistoryTitle)),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _MyTimesheetHistory_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].filterBar },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _MyTimesheetHistory_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].filterGroup },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { htmlFor: "filter-from" }, TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.From),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { id: "filter-from", type: "date", className: _MyTimesheetHistory_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].filterInput, value: toDateInputValue(startDate), onChange: function (e) { return e.target.value && setStartDate(fromDateInputValue(e.target.value)); } })),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _MyTimesheetHistory_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].filterGroup },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { htmlFor: "filter-to" }, TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.To),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { id: "filter-to", type: "date", className: _MyTimesheetHistory_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].filterInput, value: toDateInputValue(endDate), onChange: function (e) { return e.target.value && setEndDate(fromDateInputValue(e.target.value)); } })),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _MyTimesheetHistory_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].filterGroup },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { htmlFor: "filter-status" }, TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.Status),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", { id: "filter-status", className: _MyTimesheetHistory_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].filterSelect, value: statusFilter, onChange: function (e) { return setStatusFilter(e.target.value); } }, getStatusOptions().map(function (o) { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { key: o.key, value: o.key }, o.text)); })))),
        error && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _MyTimesheetHistory_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].errorBar },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconError, null),
            error)),
        loading ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _MyTimesheetHistory_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].loadingWrap },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _MyTimesheetHistory_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].spinner }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.LoadingHistory))) : filtered.length === 0 ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _MyTimesheetHistory_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].emptyState },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconCalendar, { className: _MyTimesheetHistory_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].emptyIcon }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _MyTimesheetHistory_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].emptyTitle }, TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.NoEntriesFound),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _MyTimesheetHistory_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].emptySubtitle }, TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.NoEntriesHintHistory))) : (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _MyTimesheetHistory_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].list }, filtered.map(function (summary) {
            var key = summary.date.toISOString();
            var isPendingDelete = confirmDeleteKey === key;
            return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { key: key, className: _MyTimesheetHistory_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].summaryCard, onClick: function () { return !isPendingDelete && navigateTo('DailyForm', { selectedDate: summary.date }); }, role: "button", tabIndex: 0, onKeyDown: function (e) { return !isPendingDelete && e.key === 'Enter' && navigateTo('DailyForm', { selectedDate: summary.date }); } },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _MyTimesheetHistory_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].cardLeft },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: 8 } },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _MyTimesheetHistory_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].cardDate }, (0,_utils_dateUtils__WEBPACK_IMPORTED_MODULE_6__.formatDateLabel)(summary.date)),
                        summary.totalHours > _utils_constants__WEBPACK_IMPORTED_MODULE_3__.REGULAR_HOURS_PER_DAY && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _MyTimesheetHistory_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].otBadge, title: "".concat((summary.totalHours - _utils_constants__WEBPACK_IMPORTED_MODULE_3__.REGULAR_HOURS_PER_DAY).toFixed(2), " hrs overtime") },
                            "OT +",
                            (summary.totalHours - _utils_constants__WEBPACK_IMPORTED_MODULE_3__.REGULAR_HOURS_PER_DAY).toFixed(2),
                            "h"))),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _MyTimesheetHistory_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].cardMeta },
                        summary.entries.length,
                        " task",
                        summary.entries.length !== 1 ? 's' : '',
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _MyTimesheetHistory_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].dot }),
                        summary.totalHours.toFixed(2),
                        " hrs")),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: 10 } },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "".concat(_MyTimesheetHistory_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].badge, " ").concat(badgeClass(summary.status)) }, summary.status),
                    summary.status === 'Draft' && !isPendingDelete && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { style: {
                            background: 'none', border: '1px solid #da1e28', borderRadius: 6,
                            color: '#da1e28', cursor: 'pointer', padding: '4px 8px',
                            display: 'flex', alignItems: 'center', gap: 4, fontSize: 12,
                        }, title: "Delete draft", onClick: function (e) { return handleDelete(summary, e); } },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconTrash, null),
                        " Delete")),
                    isPendingDelete && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: 6, fontSize: 12 }, onClick: function (e) { return e.stopPropagation(); } },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { style: { color: '#6f6f6f' } }, "Delete draft?"),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { style: {
                                background: '#da1e28', border: 'none', borderRadius: 6,
                                color: '#fff', cursor: 'pointer', padding: '4px 10px', fontSize: 12,
                            }, disabled: deleting, onClick: function (e) { void confirmDelete(summary, e); } }, deleting ? '…' : 'Yes'),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { style: {
                                background: 'none', border: '1px solid #8d8d8d', borderRadius: 6,
                                color: '#393939', cursor: 'pointer', padding: '4px 10px', fontSize: 12,
                            }, disabled: deleting, onClick: cancelDelete }, "No"))),
                    !isPendingDelete && react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconChevronRight, null))));
        }))),
        !loading && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _MyTimesheetHistory_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].footer },
            TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.Showing,
            " ",
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, filtered.length),
            " ",
            TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.Days,
            "\u00A0\u00B7\u00A0",
            (0,_utils_dateUtils__WEBPACK_IMPORTED_MODULE_6__.formatDateShort)(startDate),
            " \u2013 ",
            (0,_utils_dateUtils__WEBPACK_IMPORTED_MODULE_6__.formatDateShort)(endDate)))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyTimesheetHistory);


/***/ })

}]);
//# sourceMappingURL=chunk.lib_webparts_timeSheet_views_MyTimesheetHistory_js.js.map