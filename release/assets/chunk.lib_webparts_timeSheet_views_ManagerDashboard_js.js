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


_node_modules_microsoft_sp_css_loader_node_modules_microsoft_load_themed_styles_lib_es6_index_js__WEBPACK_IMPORTED_MODULE_0__.loadStyles(".container_c209b5e4{animation:fadeIn_c209b5e4 .25s ease both;color:#161616;font-family:IBM Plex Sans,Segoe UI,sans-serif;padding:32px}@keyframes fadeIn_c209b5e4{0%{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}.header_c209b5e4{align-items:center;background:linear-gradient(135deg,#667eea,#764ba2);display:flex;gap:12px;margin:-32px -32px 28px;overflow:hidden;padding:24px 32px;position:relative}.header_c209b5e4:before{background:radial-gradient(circle at 20% 50%,hsla(0,0%,100%,.15) 0,transparent 50%),radial-gradient(circle at 80% 20%,hsla(0,0%,100%,.1) 0,transparent 50%);content:\"\";inset:0;pointer-events:none;position:absolute}.header_c209b5e4 .homeBtn_c209b5e4{align-items:center;background:hsla(0,0%,100%,.15);border:1px solid hsla(0,0%,100%,.3);border-radius:8px;color:#fff;cursor:pointer;display:flex;flex-shrink:0;height:36px;justify-content:center;position:relative;transition:background .15s cubic-bezier(.4,0,.2,1);width:36px;z-index:1}.header_c209b5e4 .homeBtn_c209b5e4:hover{background:hsla(0,0%,100%,.28)}.header_c209b5e4 .title_c209b5e4{color:#fff;font-size:22px;font-weight:700;letter-spacing:-.3px;margin:0;position:relative;text-shadow:0 1px 2px rgba(0,0,0,.1);z-index:1}.filterBar_c209b5e4{align-items:flex-end;background:#fff;border:1px solid #e0e0e0;border-radius:12px;box-shadow:0 1px 3px rgba(0,0,0,.08),0 1px 2px rgba(0,0,0,.06);display:flex;flex-wrap:wrap;gap:16px;margin-bottom:24px;padding:16px 20px}.filterGroup_c209b5e4{display:flex;flex:1;flex-direction:column;gap:5px;min-width:150px}.filterGroup_c209b5e4 label{color:#525252;font-size:11.5px;font-weight:600;letter-spacing:.4px;text-transform:uppercase}.filterGroupWide_c209b5e4{flex:2;min-width:220px}.filterInput_c209b5e4,.filterSelect_c209b5e4{background:#f4f4f4;border:1px solid #e0e0e0;border-radius:4px;box-sizing:border-box;color:#161616;font-family:inherit;font-size:13.5px;height:36px;outline:none;padding:0 10px;transition:border-color .15s cubic-bezier(.4,0,.2,1),box-shadow .15s cubic-bezier(.4,0,.2,1),background .15s cubic-bezier(.4,0,.2,1);width:100%}.filterInput_c209b5e4:focus,.filterSelect_c209b5e4:focus{background:#fff;border-color:#667eea;box-shadow:0 0 0 3px rgba(15,98,254,.15)}.filterInput_c209b5e4:-ms-input-placeholder, .filterSelect_c209b5e4:-ms-input-placeholder{color:#8d8d8d}.filterInput_c209b5e4::placeholder,.filterSelect_c209b5e4::placeholder{color:#8d8d8d}.filterSelect_c209b5e4{appearance:none;background-color:#f4f4f4;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8'%3E%3Cpath fill='%23525252' d='m1 1 5 5 5-5'/%3E%3C/svg%3E\");background-position:right 10px center;background-repeat:no-repeat;cursor:pointer;padding-right:28px}.messageBar_c209b5e4{align-items:center;border-radius:8px;border-style:solid;border-width:1px;display:flex;font-size:13.5px;gap:10px;margin-bottom:12px;padding:10px 16px}.messageBar_c209b5e4.success_c209b5e4{background:#defbe6;border-color:#a7f0ba;color:#044317}.messageBar_c209b5e4.error_c209b5e4{background:#fff1f1;border-color:#ffd7d9;color:#750e13}.messageBar_c209b5e4 .dismissBtn_c209b5e4{align-items:center;background:none;border:none;color:inherit;cursor:pointer;display:flex;margin-left:auto;opacity:.6;padding:2px 4px}.messageBar_c209b5e4 .dismissBtn_c209b5e4:hover{opacity:1}.loadingWrap_c209b5e4{align-items:center;color:#525252;display:flex;flex-direction:column;font-size:14px;gap:14px;justify-content:center;min-height:180px}.spinner_c209b5e4{border:3px solid #e0e0e0;border-radius:50%;border-top-color:#667eea;height:32px;width:32px}.spinnerSm_c209b5e4,.spinner_c209b5e4{animation:spin_c209b5e4 .7s linear infinite}.spinnerSm_c209b5e4{border:2px solid #e0e0e0;border-radius:50%;border-top-color:#667eea;flex-shrink:0;height:18px;width:18px}@keyframes spin_c209b5e4{to{transform:rotate(1turn)}}.emptyState_c209b5e4{align-items:center;color:#8d8d8d;display:flex;flex-direction:column;gap:10px;justify-content:center;padding:52px 24px;text-align:center}.emptyState_c209b5e4 .emptyTitle_c209b5e4{color:#525252;font-size:15px;font-weight:600}.emptyState_c209b5e4 .emptySubtitle_c209b5e4{font-size:13px}.list_c209b5e4{display:flex;flex-direction:column;gap:8px}.rowCard_c209b5e4{align-items:center;background:#fff;border:1px solid #e0e0e0;border-radius:8px;box-shadow:0 1px 3px rgba(0,0,0,.08),0 1px 2px rgba(0,0,0,.06);display:flex;gap:16px;justify-content:space-between;padding:14px 18px;transition:box-shadow .15s cubic-bezier(.4,0,.2,1),border-color .15s cubic-bezier(.4,0,.2,1)}.rowCard_c209b5e4:hover{border-color:#c6c6c6;box-shadow:0 4px 12px rgba(0,0,0,.1),0 2px 4px rgba(0,0,0,.06)}.rowLeft_c209b5e4{display:flex;flex-direction:column;gap:4px;min-width:0}.rowName_c209b5e4{color:#161616;font-size:15px;font-weight:600}.rowMeta_c209b5e4{align-items:center;color:#8d8d8d;display:flex;font-size:12.5px;gap:6px}.rowMeta_c209b5e4 .dot_c209b5e4{background:currentColor;border-radius:50%;flex-shrink:0;height:3px;width:3px}.rowRight_c209b5e4{align-items:center;display:flex;flex-shrink:0;gap:10px}.badge_c209b5e4{align-items:center;border-radius:20px;display:inline-flex;font-size:11.5px;font-weight:700;gap:5px;letter-spacing:.3px;padding:4px 12px;white-space:nowrap}.badge_c209b5e4:before{background:currentColor;border-radius:50%;content:\"\";flex-shrink:0;height:6px;opacity:.7;width:6px}.badge_c209b5e4.approved_c209b5e4{background:#defbe6;color:#24a148}.badge_c209b5e4.submitted_c209b5e4{background:rgba(102,126,234,.08);color:#667eea}.badge_c209b5e4.rejected_c209b5e4{background:#fff1f1;color:#da1e28}.badge_c209b5e4.draft_c209b5e4{background:#fdf6d8;color:#b28600}.btn_c209b5e4{align-items:center;border:1px solid #e0e0e0;border-radius:8px;cursor:pointer;display:inline-flex;font-family:inherit;font-size:13px;font-weight:500;gap:6px;outline:none;padding:7px 14px;transition:background .15s cubic-bezier(.4,0,.2,1),box-shadow .15s cubic-bezier(.4,0,.2,1),border-color .15s cubic-bezier(.4,0,.2,1),color .15s cubic-bezier(.4,0,.2,1);white-space:nowrap}.btn_c209b5e4:disabled{cursor:not-allowed;opacity:.4}.btn_c209b5e4.btnDefault_c209b5e4{background:#fff;color:#161616}.btn_c209b5e4.btnDefault_c209b5e4:hover:not(:disabled){background:#f4f4f4;border-color:#c6c6c6;box-shadow:0 1px 3px rgba(0,0,0,.08),0 1px 2px rgba(0,0,0,.06)}.btn_c209b5e4.btnPrimary_c209b5e4{background:#667eea;border-color:#667eea;color:#fff}.btn_c209b5e4.btnPrimary_c209b5e4:hover:not(:disabled){background:#5a6fd6;border-color:#5a6fd6;box-shadow:0 4px 12px rgba(15,98,254,.35)}.btn_c209b5e4.btnApprove_c209b5e4{background:#42be65;border-color:#42be65;color:#fff}.btn_c209b5e4.btnApprove_c209b5e4:hover:not(:disabled){background:#36a35a;border-color:#36a35a;box-shadow:0 4px 12px rgba(66,190,101,.3)}.btn_c209b5e4.btnReject_c209b5e4{background:#fff;border-color:#ffd7d9;color:#da1e28}.btn_c209b5e4.btnReject_c209b5e4:hover:not(:disabled){background:#fff1f1;border-color:#da1e28;box-shadow:0 1px 3px rgba(0,0,0,.08),0 1px 2px rgba(0,0,0,.06)}.btn_c209b5e4.btnResubmit_c209b5e4{background:#fff;border-color:#f5d73b;color:#b28600}.btn_c209b5e4.btnResubmit_c209b5e4:hover:not(:disabled){background:#fdf6d8;box-shadow:0 1px 3px rgba(0,0,0,.08),0 1px 2px rgba(0,0,0,.06)}.modalContainer_c209b5e4{border-radius:12px!important;display:flex;flex-direction:column;max-width:calc(100vw - 32px)!important;overflow:hidden;width:580px}.modalHeader_c209b5e4{align-items:center;background:linear-gradient(135deg,#667eea,#764ba2);border-bottom:1px solid #e0e0e0;display:flex;flex-shrink:0;justify-content:space-between;padding:18px 24px}.modalTitle_c209b5e4{color:#fff;font-size:17px;font-weight:700;margin:0}.modalCloseBtn_c209b5e4{background:hsla(0,0%,100%,.12)!important;border-radius:4px!important;color:hsla(0,0%,100%,.85)!important}.modalCloseBtn_c209b5e4:hover{background:hsla(0,0%,100%,.25)!important;color:#fff!important}.modalBody_c209b5e4{display:flex;flex-direction:column;gap:20px;max-height:calc(100vh - 220px);overflow-y:auto;padding:24px}.modalFooter_c209b5e4{align-items:center;background:#fff;border-top:1px solid #e0e0e0;display:flex;flex-shrink:0;gap:10px;padding:16px 24px}.fluentBtnApprove_c209b5e4{background-color:#42be65!important;border-color:#42be65!important}.fluentBtnApprove_c209b5e4:hover:not(:disabled){background-color:#36a35a!important;border-color:#36a35a!important}.fluentBtnReject_c209b5e4{background-color:#da1e28!important;border-color:#da1e28!important}.fluentBtnReject_c209b5e4:hover:not(:disabled){background-color:#b81922!important;border-color:#b81922!important}.fluentBtnResubmit_c209b5e4{background-color:#b28600!important;border-color:#b28600!important}.fluentBtnResubmit_c209b5e4:hover:not(:disabled){background-color:#9a7400!important;border-color:#9a7400!important}.panelMeta_c209b5e4{background:#f4f4f4;border:1px solid #e0e0e0;border-radius:8px;display:flex;flex-direction:column;gap:4px;padding:14px 16px}.panelMeta_c209b5e4 .panelMetaName_c209b5e4{color:#161616;font-size:15px;font-weight:700}.panelMeta_c209b5e4 .panelMetaDetail_c209b5e4{color:#525252;display:flex;font-size:13px;gap:12px}.panelTableWrap_c209b5e4{border:1px solid #e0e0e0;border-radius:8px;overflow:hidden}.panelTable_c209b5e4{border-collapse:collapse;width:100%}.panelTable_c209b5e4 thead tr{background:linear-gradient(135deg,#667eea,#764ba2);color:#fff}.panelTable_c209b5e4 thead tr th{font-size:11.5px;font-weight:600;letter-spacing:.5px;padding:10px 12px;text-align:left;text-transform:uppercase;white-space:nowrap}.panelTable_c209b5e4 thead tr th.colHrs_c209b5e4{text-align:center;width:56px}.panelTable_c209b5e4 tbody tr{border-bottom:1px solid #e0e0e0;transition:background .15s cubic-bezier(.4,0,.2,1)}.panelTable_c209b5e4 tbody tr:last-child{border-bottom:none}.panelTable_c209b5e4 tbody tr:nth-child(2n){background:#f4f4f4}.panelTable_c209b5e4 tbody tr td{color:#161616;font-size:13px;padding:8px 12px;vertical-align:top}.panelTable_c209b5e4 tbody tr td.tdCenter_c209b5e4{font-weight:600;text-align:center;vertical-align:middle}.commentField_c209b5e4{display:flex;flex-direction:column;gap:6px}.commentField_c209b5e4 label{color:#525252;font-size:12px;font-weight:600;letter-spacing:.3px;text-transform:uppercase}.commentField_c209b5e4 label .required_c209b5e4{color:#da1e28;margin-left:2px}.commentField_c209b5e4 textarea{background:#f4f4f4;border:1px solid #e0e0e0;border-radius:4px;box-sizing:border-box;color:#161616;font-family:inherit;font-size:13.5px;line-height:1.5;min-height:96px;outline:none;padding:10px 12px;resize:vertical;transition:border-color .15s cubic-bezier(.4,0,.2,1),box-shadow .15s cubic-bezier(.4,0,.2,1),background .15s cubic-bezier(.4,0,.2,1);width:100%}.commentField_c209b5e4 textarea:focus{background:#fff;border-color:#667eea;box-shadow:0 0 0 3px rgba(15,98,254,.15)}.commentField_c209b5e4 textarea:-ms-input-placeholder{color:#8d8d8d}.commentField_c209b5e4 textarea::placeholder{color:#8d8d8d}.panelFooter_c209b5e4{align-items:center;background:#fff;border-top:1px solid #e0e0e0;display:flex;flex-shrink:0;gap:10px;padding:16px 24px}", true);

// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  fadeIn: "fadeIn_c209b5e4",
  header: "header_c209b5e4",
  homeBtn: "homeBtn_c209b5e4",
  title: "title_c209b5e4",
  filterBar: "filterBar_c209b5e4",
  filterGroup: "filterGroup_c209b5e4",
  filterGroupWide: "filterGroupWide_c209b5e4",
  filterInput: "filterInput_c209b5e4",
  filterSelect: "filterSelect_c209b5e4",
  messageBar: "messageBar_c209b5e4",
  success: "success_c209b5e4",
  error: "error_c209b5e4",
  dismissBtn: "dismissBtn_c209b5e4",
  loadingWrap: "loadingWrap_c209b5e4",
  spinner: "spinner_c209b5e4",
  spin: "spin_c209b5e4",
  spinnerSm: "spinnerSm_c209b5e4",
  emptyState: "emptyState_c209b5e4",
  emptyTitle: "emptyTitle_c209b5e4",
  emptySubtitle: "emptySubtitle_c209b5e4",
  list: "list_c209b5e4",
  rowCard: "rowCard_c209b5e4",
  rowLeft: "rowLeft_c209b5e4",
  rowName: "rowName_c209b5e4",
  rowMeta: "rowMeta_c209b5e4",
  dot: "dot_c209b5e4",
  rowRight: "rowRight_c209b5e4",
  badge: "badge_c209b5e4",
  approved: "approved_c209b5e4",
  submitted: "submitted_c209b5e4",
  rejected: "rejected_c209b5e4",
  draft: "draft_c209b5e4",
  btn: "btn_c209b5e4",
  btnDefault: "btnDefault_c209b5e4",
  btnPrimary: "btnPrimary_c209b5e4",
  btnApprove: "btnApprove_c209b5e4",
  btnReject: "btnReject_c209b5e4",
  btnResubmit: "btnResubmit_c209b5e4",
  modalContainer: "modalContainer_c209b5e4",
  modalHeader: "modalHeader_c209b5e4",
  modalTitle: "modalTitle_c209b5e4",
  modalCloseBtn: "modalCloseBtn_c209b5e4",
  modalBody: "modalBody_c209b5e4",
  modalFooter: "modalFooter_c209b5e4",
  fluentBtnApprove: "fluentBtnApprove_c209b5e4",
  fluentBtnReject: "fluentBtnReject_c209b5e4",
  fluentBtnResubmit: "fluentBtnResubmit_c209b5e4",
  panelMeta: "panelMeta_c209b5e4",
  panelMetaName: "panelMetaName_c209b5e4",
  panelMetaDetail: "panelMetaDetail_c209b5e4",
  panelTableWrap: "panelTableWrap_c209b5e4",
  panelTable: "panelTable_c209b5e4",
  colHrs: "colHrs_c209b5e4",
  tdCenter: "tdCenter_c209b5e4",
  commentField: "commentField_c209b5e4",
  required: "required_c209b5e4",
  panelFooter: "panelFooter_c209b5e4",
  container: "container_c209b5e4"
});


/***/ }),

/***/ 27583:
/*!*********************************************!*\
  !*** ./lib/webparts/timeSheet/utils/fmt.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fmt: () => (/* binding */ fmt)
/* harmony export */ });
/**
 * Replace {key} tokens in a localised string template with runtime values.
 * Example: fmt("Hello {name}, you have {n} tasks", { name: "Alice", n: 3 })
 *          → "Hello Alice, you have 3 tasks"
 */
function fmt(template, values) {
    return template.replace(/\{(\w+)\}/g, function (_, k) { var _a; return String((_a = values[k]) !== null && _a !== void 0 ? _a : "{".concat(k, "}")); });
}


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 10196);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 85959);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fluentui/react */ 76702);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fluentui/react */ 44533);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fluentui/react */ 67102);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fluentui/react */ 29425);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fluentui/react */ 80954);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fluentui/react */ 49885);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fluentui/react */ 5613);
/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/AppContext */ 24770);
/* harmony import */ var _services_TimesheetService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/TimesheetService */ 30264);
/* harmony import */ var _utils_dateUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/dateUtils */ 28613);
/* harmony import */ var _utils_fmt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/fmt */ 27583);
/* harmony import */ var TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! TimeSheetWebPartStrings */ 31339);
/* harmony import */ var TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ManagerDashboard.module.scss */ 13102);










// ─── Constants ────────────────────────────────────────────────────────────────
function getStatusOptions() {
    return [
        { key: 'Submitted', text: TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.StatusSubmitted },
        { key: 'Approved', text: TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.StatusApproved },
        { key: 'Rejected', text: TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.StatusRejected },
        { key: 'All', text: TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.AllStatuses },
    ];
}
// ─── Helpers ──────────────────────────────────────────────────────────────────
function badgeClass(status) {
    if (status === 'Approved')
        return _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].approved;
    if (status === 'Submitted')
        return _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].submitted;
    if (status === 'Rejected')
        return _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].rejected;
    return _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].draft;
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
var IconClose = function () { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "currentColor" },
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M1 1l10 10M11 1L1 11", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }))); };
var IconUsers = function () { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", { cx: "18", cy: "18", r: "7", stroke: "currentColor", strokeWidth: "2.5" }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", { cx: "32", cy: "18", r: "7", stroke: "currentColor", strokeWidth: "2.5" }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M4 40c0-7.732 6.268-14 14-14h2", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round" }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M24 40c0-7.732 6.268-14 14-14", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round" }))); };
// ─── Component ────────────────────────────────────────────────────────────────
var ManagerDashboard = function () {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_AppContext__WEBPACK_IMPORTED_MODULE_1__.AppContext), currentUser = _a.currentUser, navigateHome = _a.navigateHome;
    var _b = (0,_utils_dateUtils__WEBPACK_IMPORTED_MODULE_5__.currentWeekRange)(), wStart = _b.start, wEnd = _b.end;
    var _c = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(wStart), startDate = _c[0], setStartDate = _c[1];
    var _d = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(wEnd), endDate = _d[0], setEndDate = _d[1];
    var _f = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('Submitted'), statusFilter = _f[0], setStatusFilter = _f[1];
    var _g = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''), employeeFilter = _g[0], setEmployeeFilter = _g[1];
    var _h = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]), rows = _h[0], setRows = _h[1];
    var _j = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true), loading = _j[0], setLoading = _j[1];
    var _k = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''), error = _k[0], setError = _k[1];
    var _l = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''), successMessage = _l[0], setSuccessMessage = _l[1];
    // Review modal state
    var _m = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), modalOpen = _m[0], setModalOpen = _m[1];
    var _o = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null), reviewRow = _o[0], setReviewRow = _o[1];
    var _p = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null), reviewAction = _p[0], setReviewAction = _p[1];
    var _q = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''), managerComment = _q[0], setManagerComment = _q[1];
    var _r = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), actionLoading = _r[0], setActionLoading = _r[1];
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
            .catch(function () { setError(TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.LoadTeamFailed); setLoading(false); });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () { loadData(); }, [startDate, endDate, statusFilter, employeeFilter]); // eslint-disable-line
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
    var handleAction = function () { return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(void 0, void 0, void 0, function () {
        var ids, msg, _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__generator)(this, function (_b) {
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
                    setSuccessMessage((0,_utils_fmt__WEBPACK_IMPORTED_MODULE_7__.fmt)(TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.ApprovedMsg, { name: reviewRow.employeeName, date: (0,_utils_dateUtils__WEBPACK_IMPORTED_MODULE_5__.formatDateShort)(reviewRow.entryDate) }));
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, (0,_services_TimesheetService__WEBPACK_IMPORTED_MODULE_2__.rejectDayEntries)(ids, currentUser.displayName, managerComment)];
                case 4:
                    _b.sent();
                    msg = reviewAction === 'resubmit' ? TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.ResubmitMsg : TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.RejectedMsg;
                    setSuccessMessage((0,_utils_fmt__WEBPACK_IMPORTED_MODULE_7__.fmt)(msg, { name: reviewRow.employeeName }));
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
    var modalTitle = reviewAction === 'approve' ? TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.ApproveModal :
        reviewAction === 'resubmit' ? TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.RequestResubmitModal :
            TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.RejectModal;
    var confirmBtnLabel = reviewAction === 'approve' ? TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.ConfirmApprove :
        reviewAction === 'resubmit' ? TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.SendResubmit :
            TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.ConfirmReject;
    var confirmDisabled = actionLoading || (reviewAction !== 'approve' && !managerComment.trim());
    // ─── Render ───────────────────────────────────────────────────────────────
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].container },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].header },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].homeBtn, title: "Home", onClick: navigateHome },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconHome, null)),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].title }, TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.TeamTimesheetsTitle)),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].filterBar },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].filterGroup },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { htmlFor: "mgr-from" }, TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.From),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { id: "mgr-from", type: "date", className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].filterInput, value: toDateInputValue(startDate), onChange: function (e) { return e.target.value && setStartDate(fromDateInputValue(e.target.value)); } })),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].filterGroup },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { htmlFor: "mgr-to" }, TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.To),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { id: "mgr-to", type: "date", className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].filterInput, value: toDateInputValue(endDate), onChange: function (e) { return e.target.value && setEndDate(fromDateInputValue(e.target.value)); } })),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].filterGroup },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { htmlFor: "mgr-status" }, TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.Status),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", { id: "mgr-status", className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].filterSelect, value: statusFilter, onChange: function (e) { return setStatusFilter(e.target.value); } }, getStatusOptions().map(function (o) { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { key: o.key, value: o.key }, o.text)); }))),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "".concat(_ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].filterGroup, " ").concat(_ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].filterGroupWide) },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { htmlFor: "mgr-employee" }, TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.EmployeeEmail),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { id: "mgr-employee", type: "text", className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].filterInput, value: employeeFilter, onChange: function (e) { return setEmployeeFilter(e.target.value); }, placeholder: TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.FilterByEmail }))),
        successMessage && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "".concat(_ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].messageBar, " ").concat(_ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].success) },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconSuccess, null),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, successMessage),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].dismissBtn, onClick: function () { return setSuccessMessage(''); } },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconClose, null)))),
        error && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "".concat(_ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].messageBar, " ").concat(_ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].error) },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconError, null),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, error))),
        loading ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].loadingWrap },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].spinner }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.LoadingTeam))) : rows.length === 0 ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].emptyState },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconUsers, null),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].emptyTitle }, TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.NoTimesheetsFound),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].emptySubtitle }, TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.NoTimesheetsHint))) : (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].list }, rows.map(function (row) { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { key: "".concat(row.employeeEmail, "__").concat(row.entryDate.toISOString()), className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].rowCard },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].rowLeft },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].rowName }, row.employeeName),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].rowMeta },
                    (0,_utils_dateUtils__WEBPACK_IMPORTED_MODULE_5__.formatDateLabel)(row.entryDate),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].dot }),
                    row.entries.length,
                    " task",
                    row.entries.length !== 1 ? 's' : '',
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].dot }),
                    row.totalHours.toFixed(2),
                    " hrs")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].rowRight },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "".concat(_ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].badge, " ").concat(badgeClass(row.status)) }, row.status),
                row.status === 'Submitted' && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "".concat(_ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].btn, " ").concat(_ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].btnApprove), onClick: function () { return openModal(row, 'approve'); } },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconCheck, null),
                        " ",
                        TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.ApproveBtn),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "".concat(_ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].btn, " ").concat(_ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].btnReject), onClick: function () { return openModal(row, 'reject'); } },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconReject, null),
                        " ",
                        TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.RejectBtn))),
                row.status === 'Approved' && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "".concat(_ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].btn, " ").concat(_ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].btnResubmit), onClick: function () { return openModal(row, 'resubmit'); } },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconRefresh, null),
                    " ",
                    TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.RequestResubmitBtn))))); }))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_8__.Modal, { isOpen: modalOpen, onDismiss: closeModal, isBlocking: actionLoading, containerClassName: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].modalContainer },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].modalHeader },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].modalTitle }, modalTitle),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_9__.IconButton, { iconProps: { iconName: 'Cancel' }, ariaLabel: "Close", onClick: closeModal, disabled: actionLoading, className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].modalCloseBtn })),
            reviewRow && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].modalBody },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].panelMeta },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].panelMetaName }, reviewRow.employeeName),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].panelMetaDetail },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, (0,_utils_dateUtils__WEBPACK_IMPORTED_MODULE_5__.formatDateLabel)(reviewRow.entryDate)),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null,
                            "Total: ",
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null,
                                reviewRow.totalHours.toFixed(2),
                                " hrs")))),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].panelTableWrap },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].panelTable },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null,
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null,
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.Project),
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.Category),
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.Description),
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].colHrs }, TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.Hrs))),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, reviewRow.entries.map(function (e) { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", { key: e.id },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, e.projectName),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, e.activityCategoryName),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, e.taskDescription),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].tdCenter }, e.hoursSpent))); })))),
                reviewAction !== 'approve' && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_10__.TextField, { label: TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.ManagerCommentLabel, required: true, multiline: true, rows: 4, value: managerComment, onChange: function (_e, val) { return setManagerComment(val || ''); }, placeholder: TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.ManagerCommentPlaceholder, disabled: actionLoading }),
                    !managerComment.trim() && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { style: { color: '#a19f9d', fontSize: 12, display: 'block', marginTop: 4 } },
                        "A comment is required before ",
                        reviewAction === 'reject' ? 'rejecting' : 'requesting re-submission of',
                        " this timesheet.")))))),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].modalFooter },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_11__.PrimaryButton, { onClick: handleAction, disabled: confirmDisabled, className: reviewAction === 'approve' ? _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].fluentBtnApprove :
                        reviewAction === 'reject' ? _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].fluentBtnReject :
                            _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].fluentBtnResubmit }, actionLoading
                    ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_12__.Spinner, { size: _fluentui_react__WEBPACK_IMPORTED_MODULE_13__.SpinnerSize.small }),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { style: { marginLeft: 6 } }, TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.Processing))
                    : confirmBtnLabel),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_14__.DefaultButton, { text: TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.Cancel, onClick: closeModal, disabled: actionLoading })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ManagerDashboard);


/***/ })

}]);
//# sourceMappingURL=chunk.lib_webparts_timeSheet_views_ManagerDashboard_js.js.map