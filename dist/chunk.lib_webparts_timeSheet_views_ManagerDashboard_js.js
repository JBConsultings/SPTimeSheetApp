"use strict";
(self["webpackJsonp_c7e5e177-9baf-42a9-91c9-2ea9fecc19a8_0.0.1"] = self["webpackJsonp_c7e5e177-9baf-42a9-91c9-2ea9fecc19a8_0.0.1"] || []).push([["lib_webparts_timeSheet_views_ManagerDashboard_js"],{

/***/ 13102:
/*!***********************************************************************!*\
  !*** ./lib/webparts/timeSheet/views/ManagerDashboard.module.scss.css ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_microsoft_sp_css_loader_node_modules_microsoft_load_themed_styles_lib_es6_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/@microsoft/sp-css-loader/node_modules/@microsoft/load-themed-styles/lib-es6/index.js */ 96323);
// Imports


_node_modules_microsoft_sp_css_loader_node_modules_microsoft_load_themed_styles_lib_es6_index_js__WEBPACK_IMPORTED_MODULE_0__.loadStyles(".container_dacd63dd{animation:fadeIn_dacd63dd .25s ease both;color:#161616;font-family:IBM Plex Sans,Segoe UI,sans-serif;margin:0 auto;max-width:1100px;padding:32px}@keyframes fadeIn_dacd63dd{0%{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}.header_dacd63dd{align-items:center;display:flex;gap:12px;margin-bottom:28px}.header_dacd63dd .homeBtn_dacd63dd{align-items:center;background:#fff;border:1px solid #e0e0e0;border-radius:8px;color:#525252;cursor:pointer;display:flex;flex-shrink:0;height:36px;justify-content:center;transition:background .15s cubic-bezier(.4,0,.2,1),box-shadow .15s cubic-bezier(.4,0,.2,1),color .15s cubic-bezier(.4,0,.2,1);width:36px}.header_dacd63dd .homeBtn_dacd63dd:hover{background:#edf4ff;box-shadow:0 1px 3px rgba(0,0,0,.08),0 1px 2px rgba(0,0,0,.06);color:#0f62fe}.header_dacd63dd .title_dacd63dd{color:#161616;font-size:22px;font-weight:700;letter-spacing:-.3px;margin:0}.filterBar_dacd63dd{align-items:flex-end;background:#fff;border:1px solid #e0e0e0;border-radius:12px;box-shadow:0 1px 3px rgba(0,0,0,.08),0 1px 2px rgba(0,0,0,.06);display:flex;flex-wrap:wrap;gap:16px;margin-bottom:24px;padding:16px 20px}.filterGroup_dacd63dd{display:flex;flex:1;flex-direction:column;gap:5px;min-width:150px}.filterGroup_dacd63dd label{color:#525252;font-size:11.5px;font-weight:600;letter-spacing:.4px;text-transform:uppercase}.filterGroupWide_dacd63dd{flex:2;min-width:220px}.filterInput_dacd63dd,.filterSelect_dacd63dd{background:#f4f4f4;border:1px solid #e0e0e0;border-radius:4px;box-sizing:border-box;color:#161616;font-family:inherit;font-size:13.5px;height:36px;outline:none;padding:0 10px;transition:border-color .15s cubic-bezier(.4,0,.2,1),box-shadow .15s cubic-bezier(.4,0,.2,1),background .15s cubic-bezier(.4,0,.2,1);width:100%}.filterInput_dacd63dd:focus,.filterSelect_dacd63dd:focus{background:#fff;border-color:#0f62fe;box-shadow:0 0 0 3px rgba(15,98,254,.15)}.filterInput_dacd63dd:-ms-input-placeholder, .filterSelect_dacd63dd:-ms-input-placeholder{color:#8d8d8d}.filterInput_dacd63dd::placeholder,.filterSelect_dacd63dd::placeholder{color:#8d8d8d}.filterSelect_dacd63dd{appearance:none;background-color:#f4f4f4;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8'%3E%3Cpath fill='%23525252' d='m1 1 5 5 5-5'/%3E%3C/svg%3E\");background-position:right 10px center;background-repeat:no-repeat;cursor:pointer;padding-right:28px}.messageBar_dacd63dd{align-items:center;border-radius:8px;border-style:solid;border-width:1px;display:flex;font-size:13.5px;gap:10px;margin-bottom:12px;padding:10px 16px}.messageBar_dacd63dd.success_dacd63dd{background:#defbe6;border-color:#a7f0ba;color:#044317}.messageBar_dacd63dd.error_dacd63dd{background:#fff1f1;border-color:#ffd7d9;color:#750e13}.messageBar_dacd63dd .dismissBtn_dacd63dd{align-items:center;background:none;border:none;color:inherit;cursor:pointer;display:flex;margin-left:auto;opacity:.6;padding:2px 4px}.messageBar_dacd63dd .dismissBtn_dacd63dd:hover{opacity:1}.loadingWrap_dacd63dd{align-items:center;color:#525252;display:flex;flex-direction:column;font-size:14px;gap:14px;justify-content:center;min-height:180px}.spinner_dacd63dd{border:3px solid #e0e0e0;border-radius:50%;border-top-color:#0f62fe;height:32px;width:32px}.spinnerSm_dacd63dd,.spinner_dacd63dd{animation:spin_dacd63dd .7s linear infinite}.spinnerSm_dacd63dd{border:2px solid #e0e0e0;border-radius:50%;border-top-color:#0f62fe;flex-shrink:0;height:18px;width:18px}@keyframes spin_dacd63dd{to{transform:rotate(1turn)}}.emptyState_dacd63dd{align-items:center;color:#8d8d8d;display:flex;flex-direction:column;gap:10px;justify-content:center;padding:52px 24px;text-align:center}.emptyState_dacd63dd .emptyTitle_dacd63dd{color:#525252;font-size:15px;font-weight:600}.emptyState_dacd63dd .emptySubtitle_dacd63dd{font-size:13px}.list_dacd63dd{display:flex;flex-direction:column;gap:8px}.rowCard_dacd63dd{align-items:center;background:#fff;border:1px solid #e0e0e0;border-radius:8px;box-shadow:0 1px 3px rgba(0,0,0,.08),0 1px 2px rgba(0,0,0,.06);display:flex;gap:16px;justify-content:space-between;padding:14px 18px;transition:box-shadow .15s cubic-bezier(.4,0,.2,1),border-color .15s cubic-bezier(.4,0,.2,1)}.rowCard_dacd63dd:hover{border-color:#c6c6c6;box-shadow:0 4px 12px rgba(0,0,0,.1),0 2px 4px rgba(0,0,0,.06)}.rowLeft_dacd63dd{display:flex;flex-direction:column;gap:4px;min-width:0}.rowName_dacd63dd{color:#161616;font-size:15px;font-weight:600}.rowMeta_dacd63dd{align-items:center;color:#8d8d8d;display:flex;font-size:12.5px;gap:6px}.rowMeta_dacd63dd .dot_dacd63dd{background:currentColor;border-radius:50%;flex-shrink:0;height:3px;width:3px}.rowRight_dacd63dd{align-items:center;display:flex;flex-shrink:0;gap:10px}.badge_dacd63dd{align-items:center;border-radius:20px;display:inline-flex;font-size:11.5px;font-weight:700;gap:5px;letter-spacing:.3px;padding:4px 12px;white-space:nowrap}.badge_dacd63dd:before{background:currentColor;border-radius:50%;content:\"\";flex-shrink:0;height:6px;opacity:.7;width:6px}.badge_dacd63dd.approved_dacd63dd{background:#defbe6;color:#24a148}.badge_dacd63dd.submitted_dacd63dd{background:#edf4ff;color:#0f62fe}.badge_dacd63dd.rejected_dacd63dd{background:#fff1f1;color:#da1e28}.badge_dacd63dd.draft_dacd63dd{background:#fdf6d8;color:#b28600}.btn_dacd63dd{align-items:center;border:1px solid #e0e0e0;border-radius:8px;cursor:pointer;display:inline-flex;font-family:inherit;font-size:13px;font-weight:500;gap:6px;outline:none;padding:7px 14px;transition:background .15s cubic-bezier(.4,0,.2,1),box-shadow .15s cubic-bezier(.4,0,.2,1),border-color .15s cubic-bezier(.4,0,.2,1),color .15s cubic-bezier(.4,0,.2,1);white-space:nowrap}.btn_dacd63dd:disabled{cursor:not-allowed;opacity:.4}.btn_dacd63dd.btnDefault_dacd63dd{background:#fff;color:#161616}.btn_dacd63dd.btnDefault_dacd63dd:hover:not(:disabled){background:#f4f4f4;border-color:#c6c6c6;box-shadow:0 1px 3px rgba(0,0,0,.08),0 1px 2px rgba(0,0,0,.06)}.btn_dacd63dd.btnPrimary_dacd63dd{background:#0f62fe;border-color:#0f62fe;color:#fff}.btn_dacd63dd.btnPrimary_dacd63dd:hover:not(:disabled){background:#0353e9;border-color:#0353e9;box-shadow:0 4px 12px rgba(15,98,254,.35)}.btn_dacd63dd.btnApprove_dacd63dd{background:#42be65;border-color:#42be65;color:#fff}.btn_dacd63dd.btnApprove_dacd63dd:hover:not(:disabled){background:#36a35a;border-color:#36a35a;box-shadow:0 4px 12px rgba(66,190,101,.3)}.btn_dacd63dd.btnReject_dacd63dd{background:#fff;border-color:#ffd7d9;color:#da1e28}.btn_dacd63dd.btnReject_dacd63dd:hover:not(:disabled){background:#fff1f1;border-color:#da1e28;box-shadow:0 1px 3px rgba(0,0,0,.08),0 1px 2px rgba(0,0,0,.06)}.btn_dacd63dd.btnResubmit_dacd63dd{background:#fff;border-color:#f5d73b;color:#b28600}.btn_dacd63dd.btnResubmit_dacd63dd:hover:not(:disabled){background:#fdf6d8;box-shadow:0 1px 3px rgba(0,0,0,.08),0 1px 2px rgba(0,0,0,.06)}.overlay_dacd63dd{animation:overlayIn_dacd63dd .2s ease both;background:rgba(0,0,0,.35);inset:0;position:fixed;z-index:200}@keyframes overlayIn_dacd63dd{0%{opacity:0}to{opacity:1}}.panel_dacd63dd{animation:slideIn_dacd63dd .22s cubic-bezier(.4,0,.2,1) both;background:#fff;bottom:0;box-shadow:0 12px 40px rgba(0,0,0,.16),0 4px 8px rgba(0,0,0,.08);display:flex;flex-direction:column;max-width:100vw;position:fixed;right:0;top:0;width:480px;z-index:201}@keyframes slideIn_dacd63dd{0%{transform:translateX(100%)}to{transform:translateX(0)}}.panelHeader_dacd63dd{align-items:center;border-bottom:1px solid #e0e0e0;display:flex;flex-shrink:0;justify-content:space-between;padding:20px 24px}.panelHeader_dacd63dd h2{color:#161616;font-size:17px;font-weight:700;margin:0}.panelHeader_dacd63dd .panelCloseBtn_dacd63dd{align-items:center;background:none;border:1px solid #e0e0e0;border-radius:4px;color:#525252;cursor:pointer;display:flex;height:32px;justify-content:center;transition:background .15s cubic-bezier(.4,0,.2,1),color .15s cubic-bezier(.4,0,.2,1);width:32px}.panelHeader_dacd63dd .panelCloseBtn_dacd63dd:hover{background:#f4f4f4;color:#161616}.panelBody_dacd63dd{display:flex;flex:1;flex-direction:column;gap:20px;overflow-y:auto;padding:24px}.panelMeta_dacd63dd{background:#f4f4f4;border:1px solid #e0e0e0;border-radius:8px;display:flex;flex-direction:column;gap:4px;padding:14px 16px}.panelMeta_dacd63dd .panelMetaName_dacd63dd{color:#161616;font-size:15px;font-weight:700}.panelMeta_dacd63dd .panelMetaDetail_dacd63dd{color:#525252;display:flex;font-size:13px;gap:12px}.panelTableWrap_dacd63dd{border:1px solid #e0e0e0;border-radius:8px;overflow:hidden}.panelTable_dacd63dd{border-collapse:collapse;width:100%}.panelTable_dacd63dd thead tr{background:#0f62fe;color:#fff}.panelTable_dacd63dd thead tr th{font-size:11.5px;font-weight:600;letter-spacing:.5px;padding:10px 12px;text-align:left;text-transform:uppercase;white-space:nowrap}.panelTable_dacd63dd thead tr th.colHrs_dacd63dd{text-align:center;width:56px}.panelTable_dacd63dd tbody tr{border-bottom:1px solid #e0e0e0;transition:background .15s cubic-bezier(.4,0,.2,1)}.panelTable_dacd63dd tbody tr:last-child{border-bottom:none}.panelTable_dacd63dd tbody tr:nth-child(2n){background:#f4f4f4}.panelTable_dacd63dd tbody tr td{color:#161616;font-size:13px;padding:8px 12px;vertical-align:top}.panelTable_dacd63dd tbody tr td.tdCenter_dacd63dd{font-weight:600;text-align:center;vertical-align:middle}.commentField_dacd63dd{display:flex;flex-direction:column;gap:6px}.commentField_dacd63dd label{color:#525252;font-size:12px;font-weight:600;letter-spacing:.3px;text-transform:uppercase}.commentField_dacd63dd label .required_dacd63dd{color:#da1e28;margin-left:2px}.commentField_dacd63dd textarea{background:#f4f4f4;border:1px solid #e0e0e0;border-radius:4px;box-sizing:border-box;color:#161616;font-family:inherit;font-size:13.5px;line-height:1.5;min-height:96px;outline:none;padding:10px 12px;resize:vertical;transition:border-color .15s cubic-bezier(.4,0,.2,1),box-shadow .15s cubic-bezier(.4,0,.2,1),background .15s cubic-bezier(.4,0,.2,1);width:100%}.commentField_dacd63dd textarea:focus{background:#fff;border-color:#0f62fe;box-shadow:0 0 0 3px rgba(15,98,254,.15)}.commentField_dacd63dd textarea:-ms-input-placeholder{color:#8d8d8d}.commentField_dacd63dd textarea::placeholder{color:#8d8d8d}.panelFooter_dacd63dd{align-items:center;background:#fff;border-top:1px solid #e0e0e0;display:flex;flex-shrink:0;gap:10px;padding:16px 24px}", true);

// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  fadeIn: "fadeIn_dacd63dd",
  header: "header_dacd63dd",
  homeBtn: "homeBtn_dacd63dd",
  title: "title_dacd63dd",
  filterBar: "filterBar_dacd63dd",
  filterGroup: "filterGroup_dacd63dd",
  filterGroupWide: "filterGroupWide_dacd63dd",
  filterInput: "filterInput_dacd63dd",
  filterSelect: "filterSelect_dacd63dd",
  messageBar: "messageBar_dacd63dd",
  success: "success_dacd63dd",
  error: "error_dacd63dd",
  dismissBtn: "dismissBtn_dacd63dd",
  loadingWrap: "loadingWrap_dacd63dd",
  spinner: "spinner_dacd63dd",
  spin: "spin_dacd63dd",
  spinnerSm: "spinnerSm_dacd63dd",
  emptyState: "emptyState_dacd63dd",
  emptyTitle: "emptyTitle_dacd63dd",
  emptySubtitle: "emptySubtitle_dacd63dd",
  list: "list_dacd63dd",
  rowCard: "rowCard_dacd63dd",
  rowLeft: "rowLeft_dacd63dd",
  rowName: "rowName_dacd63dd",
  rowMeta: "rowMeta_dacd63dd",
  dot: "dot_dacd63dd",
  rowRight: "rowRight_dacd63dd",
  badge: "badge_dacd63dd",
  approved: "approved_dacd63dd",
  submitted: "submitted_dacd63dd",
  rejected: "rejected_dacd63dd",
  draft: "draft_dacd63dd",
  btn: "btn_dacd63dd",
  btnDefault: "btnDefault_dacd63dd",
  btnPrimary: "btnPrimary_dacd63dd",
  btnApprove: "btnApprove_dacd63dd",
  btnReject: "btnReject_dacd63dd",
  btnResubmit: "btnResubmit_dacd63dd",
  overlay: "overlay_dacd63dd",
  overlayIn: "overlayIn_dacd63dd",
  panel: "panel_dacd63dd",
  slideIn: "slideIn_dacd63dd",
  panelHeader: "panelHeader_dacd63dd",
  panelCloseBtn: "panelCloseBtn_dacd63dd",
  panelBody: "panelBody_dacd63dd",
  panelMeta: "panelMeta_dacd63dd",
  panelMetaName: "panelMetaName_dacd63dd",
  panelMetaDetail: "panelMetaDetail_dacd63dd",
  panelTableWrap: "panelTableWrap_dacd63dd",
  panelTable: "panelTable_dacd63dd",
  colHrs: "colHrs_dacd63dd",
  tdCenter: "tdCenter_dacd63dd",
  commentField: "commentField_dacd63dd",
  required: "required_dacd63dd",
  panelFooter: "panelFooter_dacd63dd",
  container: "container_dacd63dd"
});


/***/ }),

/***/ 50734:
/*!**********************************************************!*\
  !*** ./lib/webparts/timeSheet/views/ManagerDashboard.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 10196);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 85959);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/AppContext */ 24770);
/* harmony import */ var _services_TimesheetService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/TimesheetService */ 30264);
/* harmony import */ var _utils_dateUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/dateUtils */ 28613);
/* harmony import */ var _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ManagerDashboard.module.scss */ 13102);







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
        return _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].approved;
    if (status === 'Submitted')
        return _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].submitted;
    if (status === 'Rejected')
        return _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].rejected;
    return _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].draft;
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
var IconHome = function () { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "currentColor" },
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M8 1L1 7h2v7h4v-4h2v4h4V7h2L8 1z" }))); };
var IconClose = function () { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "currentColor" },
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M1 1l10 10M11 1L1 11", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }))); };
var IconCheck = function () { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "currentColor" },
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M2 7l4 4 6-6", stroke: "currentColor", strokeWidth: "1.8", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }))); };
var IconReject = function () { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "currentColor" },
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M2 2l10 10M12 2L2 12", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round" }))); };
var IconRefresh = function () { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "currentColor" },
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M12 7A5 5 0 112 7", stroke: "currentColor", strokeWidth: "1.6", fill: "none", strokeLinecap: "round" }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M12 3v4h-4", stroke: "currentColor", strokeWidth: "1.6", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }))); };
var IconSuccess = function () { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "currentColor" },
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", { cx: "8", cy: "8", r: "7", stroke: "currentColor", strokeWidth: "1.3", fill: "none" }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M4.5 8l2.5 2.5 4-4", stroke: "currentColor", strokeWidth: "1.5", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }))); };
var IconError = function () { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "currentColor" },
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", { cx: "8", cy: "8", r: "7", stroke: "currentColor", strokeWidth: "1.3", fill: "none" }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M8 4v4M8 10v1", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round" }))); };
var IconUsers = function () { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", { cx: "18", cy: "18", r: "7", stroke: "currentColor", strokeWidth: "2.5" }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", { cx: "32", cy: "18", r: "7", stroke: "currentColor", strokeWidth: "2.5" }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M4 40c0-7.732 6.268-14 14-14h2", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round" }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M24 40c0-7.732 6.268-14 14-14", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round" }))); };
// ─── Component ────────────────────────────────────────────────────────────────
var ManagerDashboard = function () {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_AppContext__WEBPACK_IMPORTED_MODULE_1__.AppContext), currentUser = _a.currentUser, navigateHome = _a.navigateHome;
    var _b = (0,_utils_dateUtils__WEBPACK_IMPORTED_MODULE_4__.currentWeekRange)(), wStart = _b.start, wEnd = _b.end;
    var _c = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(wStart), startDate = _c[0], setStartDate = _c[1];
    var _d = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(wEnd), endDate = _d[0], setEndDate = _d[1];
    var _e = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('Submitted'), statusFilter = _e[0], setStatusFilter = _e[1];
    var _f = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''), employeeFilter = _f[0], setEmployeeFilter = _f[1];
    var _g = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]), rows = _g[0], setRows = _g[1];
    var _h = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true), loading = _h[0], setLoading = _h[1];
    var _j = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''), error = _j[0], setError = _j[1];
    var _k = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''), successMessage = _k[0], setSuccessMessage = _k[1];
    // Review panel state
    var _l = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), panelOpen = _l[0], setPanelOpen = _l[1];
    var _m = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null), reviewRow = _m[0], setReviewRow = _m[1];
    var _o = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null), reviewAction = _o[0], setReviewAction = _o[1];
    var _p = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''), managerComment = _p[0], setManagerComment = _p[1];
    var _q = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), actionLoading = _q[0], setActionLoading = _q[1];
    // ─── Load data ────────────────────────────────────────────────────────────
    var loadData = function () {
        setLoading(true);
        setError('');
        var opts = {
            employeeEmail: employeeFilter || undefined,
            status: statusFilter === 'All' ? undefined : statusFilter,
        };
        (0,_services_TimesheetService__WEBPACK_IMPORTED_MODULE_2__.getTeamEntries)(startDate, endDate, opts)
            .then(function (entries) { setRows(groupToTeamRows(entries)); setLoading(false); })
            .catch(function () { setError('Failed to load team timesheets.'); setLoading(false); });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () { loadData(); }, [startDate, endDate, statusFilter, employeeFilter]); // eslint-disable-line
    // ─── Panel helpers ────────────────────────────────────────────────────────
    var openPanel = function (row, action) {
        setReviewRow(row);
        setReviewAction(action);
        setManagerComment('');
        setPanelOpen(true);
    };
    var handleAction = function () { return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(void 0, void 0, void 0, function () {
        var ids, verb, _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__generator)(this, function (_b) {
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
                    return [4 /*yield*/, (0,_services_TimesheetService__WEBPACK_IMPORTED_MODULE_2__.approveDayEntries)(ids, currentUser.displayName)];
                case 2:
                    _b.sent();
                    setSuccessMessage("Approved timesheet for ".concat(reviewRow.employeeName, " on ").concat((0,_utils_dateUtils__WEBPACK_IMPORTED_MODULE_4__.formatDateShort)(reviewRow.entryDate), "."));
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, (0,_services_TimesheetService__WEBPACK_IMPORTED_MODULE_2__.rejectDayEntries)(ids, currentUser.displayName, managerComment)];
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
    var confirmBtnClass = reviewAction === 'approve' ? _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].btnApprove :
        reviewAction === 'reject' ? _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].btnReject :
            _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].btnResubmit;
    var confirmDisabled = actionLoading || (reviewAction !== 'approve' && !managerComment.trim());
    // ─── Render ───────────────────────────────────────────────────────────────
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].container },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].header },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].homeBtn, title: "Home", onClick: navigateHome },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconHome, null)),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].title }, "Team Timesheets")),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].filterBar },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].filterGroup },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { htmlFor: "mgr-from" }, "From"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { id: "mgr-from", type: "date", className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].filterInput, value: toDateInputValue(startDate), onChange: function (e) { return e.target.value && setStartDate(fromDateInputValue(e.target.value)); } })),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].filterGroup },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { htmlFor: "mgr-to" }, "To"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { id: "mgr-to", type: "date", className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].filterInput, value: toDateInputValue(endDate), onChange: function (e) { return e.target.value && setEndDate(fromDateInputValue(e.target.value)); } })),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].filterGroup },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { htmlFor: "mgr-status" }, "Status"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", { id: "mgr-status", className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].filterSelect, value: statusFilter, onChange: function (e) { return setStatusFilter(e.target.value); } }, STATUS_OPTIONS.map(function (o) { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { key: o.key, value: o.key }, o.text)); }))),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "".concat(_ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].filterGroup, " ").concat(_ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].filterGroupWide) },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { htmlFor: "mgr-employee" }, "Employee Email"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { id: "mgr-employee", type: "text", className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].filterInput, value: employeeFilter, onChange: function (e) { return setEmployeeFilter(e.target.value); }, placeholder: "Filter by email\u2026" }))),
        successMessage && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "".concat(_ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].messageBar, " ").concat(_ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].success) },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconSuccess, null),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, successMessage),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].dismissBtn, onClick: function () { return setSuccessMessage(''); } },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconClose, null)))),
        error && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "".concat(_ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].messageBar, " ").concat(_ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].error) },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconError, null),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, error))),
        loading ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].loadingWrap },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].spinner }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Loading team timesheets\u2026"))) : rows.length === 0 ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].emptyState },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconUsers, null),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].emptyTitle }, "No timesheets found"),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].emptySubtitle }, "Try adjusting the date range, status, or employee filter."))) : (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].list }, rows.map(function (row) { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { key: "".concat(row.employeeEmail, "__").concat(row.entryDate.toISOString()), className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].rowCard },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].rowLeft },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].rowName }, row.employeeName),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].rowMeta },
                    (0,_utils_dateUtils__WEBPACK_IMPORTED_MODULE_4__.formatDateLabel)(row.entryDate),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].dot }),
                    row.entries.length,
                    " task",
                    row.entries.length !== 1 ? 's' : '',
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].dot }),
                    row.totalHours.toFixed(2),
                    " hrs")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].rowRight },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "".concat(_ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].badge, " ").concat(badgeClass(row.status)) }, row.status),
                row.status === 'Submitted' && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "".concat(_ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].btn, " ").concat(_ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].btnApprove), onClick: function () { return openPanel(row, 'approve'); } },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconCheck, null),
                        " Approve"),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "".concat(_ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].btn, " ").concat(_ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].btnReject), onClick: function () { return openPanel(row, 'reject'); } },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconReject, null),
                        " Reject"))),
                row.status === 'Approved' && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "".concat(_ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].btn, " ").concat(_ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].btnResubmit), onClick: function () { return openPanel(row, 'resubmit'); } },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconRefresh, null),
                    " Request Re-submit"))))); }))),
        panelOpen && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].overlay, onClick: function () { return setPanelOpen(false); } }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].panel, role: "dialog", "aria-modal": "true", "aria-label": panelTitle },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].panelHeader },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, panelTitle),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].panelCloseBtn, onClick: function () { return setPanelOpen(false); }, title: "Close" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconClose, null))),
                reviewRow && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].panelBody },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].panelMeta },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].panelMetaName }, reviewRow.employeeName),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].panelMetaDetail },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, (0,_utils_dateUtils__WEBPACK_IMPORTED_MODULE_4__.formatDateLabel)(reviewRow.entryDate)),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null,
                                "Total: ",
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null,
                                    reviewRow.totalHours.toFixed(2),
                                    " hrs")))),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].panelTableWrap },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].panelTable },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null,
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null,
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Project"),
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Category"),
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Description"),
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].colHrs }, "Hrs"))),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, reviewRow.entries.map(function (e) { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", { key: e.id },
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, e.projectName),
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, e.activityCategoryName),
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, e.taskDescription),
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].tdCenter }, e.hoursSpent))); })))),
                    reviewAction !== 'approve' && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].commentField },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null,
                            "Manager Comments ",
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].required }, "*")),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("textarea", { rows: 4, value: managerComment, onChange: function (e) { return setManagerComment(e.target.value); }, placeholder: "Provide feedback for the employee\u2026" }))))),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].panelFooter },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "".concat(_ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].btn, " ").concat(confirmBtnClass), onClick: handleAction, disabled: confirmDisabled }, actionLoading
                        ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].spinnerSm }),
                            " Processing\u2026")
                        : confirmBtnLabel),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "".concat(_ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].btn, " ").concat(_ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].btnDefault), onClick: function () { return setPanelOpen(false); }, disabled: actionLoading }, "Cancel")))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ManagerDashboard);


/***/ })

}]);
//# sourceMappingURL=chunk.lib_webparts_timeSheet_views_ManagerDashboard_js.js.map