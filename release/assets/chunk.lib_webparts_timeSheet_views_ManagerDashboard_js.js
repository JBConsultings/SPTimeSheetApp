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


_node_modules_microsoft_sp_css_loader_node_modules_microsoft_load_themed_styles_lib_es6_index_js__WEBPACK_IMPORTED_MODULE_0__.loadStyles(".container_16f795d1{animation:fadeIn_16f795d1 .25s ease both;color:#161616;font-family:IBM Plex Sans,Segoe UI,sans-serif;padding:32px}@keyframes fadeIn_16f795d1{0%{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}.header_16f795d1{align-items:center;background:linear-gradient(135deg,#667eea,#764ba2);display:flex;gap:12px;margin:-32px -32px 28px;overflow:hidden;padding:24px 32px;position:relative}.header_16f795d1:before{background:radial-gradient(circle at 20% 50%,hsla(0,0%,100%,.15) 0,transparent 50%),radial-gradient(circle at 80% 20%,hsla(0,0%,100%,.1) 0,transparent 50%);content:\"\";inset:0;pointer-events:none;position:absolute}.header_16f795d1 .homeBtn_16f795d1{align-items:center;background:hsla(0,0%,100%,.15);border:1px solid hsla(0,0%,100%,.3);border-radius:8px;color:#fff;cursor:pointer;display:flex;flex-shrink:0;height:36px;justify-content:center;position:relative;transition:background .15s cubic-bezier(.4,0,.2,1);width:36px;z-index:1}.header_16f795d1 .homeBtn_16f795d1:hover{background:hsla(0,0%,100%,.28)}.header_16f795d1 .title_16f795d1{color:#fff;font-size:22px;font-weight:700;letter-spacing:-.3px;margin:0;position:relative;text-shadow:0 1px 2px rgba(0,0,0,.1);z-index:1}.filterBar_16f795d1{align-items:flex-end;background:#fff;border:1px solid #e0e0e0;border-radius:12px;box-shadow:0 1px 3px rgba(0,0,0,.08),0 1px 2px rgba(0,0,0,.06);display:flex;flex-wrap:wrap;gap:16px;margin-bottom:24px;padding:16px 20px}.filterGroup_16f795d1{display:flex;flex:1;flex-direction:column;gap:5px;min-width:150px}.filterGroup_16f795d1 label{color:#525252;font-size:11.5px;font-weight:600;letter-spacing:.4px;text-transform:uppercase}.filterGroupWide_16f795d1{flex:2;min-width:220px}.filterInput_16f795d1,.filterSelect_16f795d1{background:#f4f4f4;border:1px solid #e0e0e0;border-radius:4px;box-sizing:border-box;color:#161616;font-family:inherit;font-size:13.5px;height:36px;outline:none;padding:0 10px;transition:border-color .15s cubic-bezier(.4,0,.2,1),box-shadow .15s cubic-bezier(.4,0,.2,1),background .15s cubic-bezier(.4,0,.2,1);width:100%}.filterInput_16f795d1:focus,.filterSelect_16f795d1:focus{background:#fff;border-color:#667eea;box-shadow:0 0 0 3px rgba(15,98,254,.15)}.filterInput_16f795d1:-ms-input-placeholder, .filterSelect_16f795d1:-ms-input-placeholder{color:#8d8d8d}.filterInput_16f795d1::placeholder,.filterSelect_16f795d1::placeholder{color:#8d8d8d}.filterSelect_16f795d1{appearance:none;background-color:#f4f4f4;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8'%3E%3Cpath fill='%23525252' d='m1 1 5 5 5-5'/%3E%3C/svg%3E\");background-position:right 10px center;background-repeat:no-repeat;cursor:pointer;padding-right:28px}.messageBar_16f795d1{align-items:center;border-radius:8px;border-style:solid;border-width:1px;display:flex;font-size:13.5px;gap:10px;margin-bottom:12px;padding:10px 16px}.messageBar_16f795d1.success_16f795d1{background:#defbe6;border-color:#a7f0ba;color:#044317}.messageBar_16f795d1.error_16f795d1{background:#fff1f1;border-color:#ffd7d9;color:#750e13}.messageBar_16f795d1 .dismissBtn_16f795d1{align-items:center;background:none;border:none;color:inherit;cursor:pointer;display:flex;margin-left:auto;opacity:.6;padding:2px 4px}.messageBar_16f795d1 .dismissBtn_16f795d1:hover{opacity:1}.loadingWrap_16f795d1{align-items:center;color:#525252;display:flex;flex-direction:column;font-size:14px;gap:14px;justify-content:center;min-height:180px}.spinner_16f795d1{border:3px solid #e0e0e0;border-radius:50%;border-top-color:#667eea;height:32px;width:32px}.spinnerSm_16f795d1,.spinner_16f795d1{animation:spin_16f795d1 .7s linear infinite}.spinnerSm_16f795d1{border:2px solid #e0e0e0;border-radius:50%;border-top-color:#667eea;flex-shrink:0;height:18px;width:18px}@keyframes spin_16f795d1{to{transform:rotate(1turn)}}.emptyState_16f795d1{align-items:center;color:#8d8d8d;display:flex;flex-direction:column;gap:10px;justify-content:center;padding:52px 24px;text-align:center}.emptyState_16f795d1 .emptyTitle_16f795d1{color:#525252;font-size:15px;font-weight:600}.emptyState_16f795d1 .emptySubtitle_16f795d1{font-size:13px}.bulkBar_16f795d1{align-items:center;background:#fff;border:1px solid #e0e0e0;border-radius:8px;box-shadow:0 1px 3px rgba(0,0,0,.08),0 1px 2px rgba(0,0,0,.06);display:flex;flex-wrap:wrap;gap:12px;margin-bottom:10px;padding:10px 16px;transition:background .15s cubic-bezier(.4,0,.2,1),border-color .15s cubic-bezier(.4,0,.2,1),box-shadow .15s cubic-bezier(.4,0,.2,1)}.bulkBar_16f795d1.bulkBarActive_16f795d1{background:rgba(102,126,234,.06);border-color:rgba(102,126,234,.35);box-shadow:0 2px 8px rgba(102,126,234,.12)}.bulkSelectAll_16f795d1{align-items:center;color:#525252;cursor:pointer;display:inline-flex;font-size:13px;font-weight:500;gap:8px;-webkit-user-select:none;-ms-user-select:none;user-select:none}.bulkSelectAll_16f795d1:hover{color:#161616}.bulkCheckbox_16f795d1{accent-color:#667eea;cursor:pointer;flex-shrink:0;height:16px;width:16px}.bulkActions_16f795d1{align-items:center;display:flex;flex-wrap:wrap;gap:8px;margin-left:auto}.bulkCount_16f795d1{background:rgba(102,126,234,.1);border:1px solid rgba(102,126,234,.25);color:#667eea;font-size:12px;padding:3px 10px}.bulkCount_16f795d1,.otBadge_16f795d1{border-radius:20px;font-weight:700;white-space:nowrap}.otBadge_16f795d1{align-items:center;background:#fff3e0;border:1.5px solid #ff9800;color:#e65100;display:inline-flex;flex-shrink:0;font-size:11px;letter-spacing:.3px;padding:2px 8px}.rowNameRow_16f795d1{align-items:center;display:flex;gap:8px}.list_16f795d1{display:flex;flex-direction:column;gap:8px}.rowCard_16f795d1{align-items:center;background:#fff;border:1px solid #e0e0e0;border-radius:8px;box-shadow:0 1px 3px rgba(0,0,0,.08),0 1px 2px rgba(0,0,0,.06);display:flex;gap:16px;justify-content:space-between;padding:14px 18px;transition:box-shadow .15s cubic-bezier(.4,0,.2,1),border-color .15s cubic-bezier(.4,0,.2,1),background .15s cubic-bezier(.4,0,.2,1)}.rowCard_16f795d1:hover{border-color:#c6c6c6;box-shadow:0 4px 12px rgba(0,0,0,.1),0 2px 4px rgba(0,0,0,.06)}.rowCard_16f795d1.rowCardSelected_16f795d1{background:rgba(102,126,234,.05);border-color:rgba(102,126,234,.4);box-shadow:0 0 0 2px rgba(102,126,234,.12),0 1px 3px rgba(0,0,0,.08),0 1px 2px rgba(0,0,0,.06)}.rowCheckWrap_16f795d1{align-items:center;cursor:pointer;display:flex;flex-shrink:0}.rowCheckbox_16f795d1{accent-color:#667eea;cursor:pointer;height:16px}.rowCheckPlaceholder_16f795d1,.rowCheckbox_16f795d1{flex-shrink:0;width:16px}.rowLeft_16f795d1{display:flex;flex-direction:column;gap:4px;min-width:0}.rowName_16f795d1{color:#161616;font-size:15px;font-weight:600}.rowMeta_16f795d1{align-items:center;color:#8d8d8d;display:flex;font-size:12.5px;gap:6px}.rowMeta_16f795d1 .dot_16f795d1{background:currentColor;border-radius:50%;flex-shrink:0;height:3px;width:3px}.rowRight_16f795d1{align-items:center;display:flex;flex-shrink:0;gap:10px}.badge_16f795d1{align-items:center;border-radius:20px;display:inline-flex;font-size:11.5px;font-weight:700;gap:5px;letter-spacing:.3px;padding:4px 12px;white-space:nowrap}.badge_16f795d1:before{background:currentColor;border-radius:50%;content:\"\";flex-shrink:0;height:6px;opacity:.7;width:6px}.badge_16f795d1.approved_16f795d1{background:#defbe6;color:#24a148}.badge_16f795d1.submitted_16f795d1{background:rgba(102,126,234,.08);color:#667eea}.badge_16f795d1.rejected_16f795d1{background:#fff1f1;color:#da1e28}.badge_16f795d1.draft_16f795d1{background:#fdf6d8;color:#b28600}.btn_16f795d1{align-items:center;border:1px solid #e0e0e0;border-radius:8px;cursor:pointer;display:inline-flex;font-family:inherit;font-size:13px;font-weight:500;gap:6px;outline:none;padding:7px 14px;transition:background .15s cubic-bezier(.4,0,.2,1),box-shadow .15s cubic-bezier(.4,0,.2,1),border-color .15s cubic-bezier(.4,0,.2,1),color .15s cubic-bezier(.4,0,.2,1);white-space:nowrap}.btn_16f795d1:disabled{cursor:not-allowed;opacity:.4}.btn_16f795d1.btnDefault_16f795d1{background:#fff;color:#161616}.btn_16f795d1.btnDefault_16f795d1:hover:not(:disabled){background:#f4f4f4;border-color:#c6c6c6;box-shadow:0 1px 3px rgba(0,0,0,.08),0 1px 2px rgba(0,0,0,.06)}.btn_16f795d1.btnPrimary_16f795d1{background:#667eea;border-color:#667eea;color:#fff}.btn_16f795d1.btnPrimary_16f795d1:hover:not(:disabled){background:#5a6fd6;border-color:#5a6fd6;box-shadow:0 4px 12px rgba(15,98,254,.35)}.btn_16f795d1.btnApprove_16f795d1{background:#42be65;border-color:#42be65;color:#fff}.btn_16f795d1.btnApprove_16f795d1:hover:not(:disabled){background:#36a35a;border-color:#36a35a;box-shadow:0 4px 12px rgba(66,190,101,.3)}.btn_16f795d1.btnReject_16f795d1{background:#fff;border-color:#ffd7d9;color:#da1e28}.btn_16f795d1.btnReject_16f795d1:hover:not(:disabled){background:#fff1f1;border-color:#da1e28;box-shadow:0 1px 3px rgba(0,0,0,.08),0 1px 2px rgba(0,0,0,.06)}.btn_16f795d1.btnResubmit_16f795d1{background:#fff;border-color:#f5d73b;color:#b28600}.btn_16f795d1.btnResubmit_16f795d1:hover:not(:disabled){background:#fdf6d8;box-shadow:0 1px 3px rgba(0,0,0,.08),0 1px 2px rgba(0,0,0,.06)}.modalContainer_16f795d1{border-radius:12px!important;display:flex;flex-direction:column;max-width:calc(100vw - 32px)!important;overflow:hidden;width:580px}.modalHeader_16f795d1{align-items:center;background:linear-gradient(135deg,#667eea,#764ba2);border-bottom:1px solid #e0e0e0;display:flex;flex-shrink:0;justify-content:space-between;padding:18px 24px}.modalTitle_16f795d1{color:#fff;font-size:17px;font-weight:700;margin:0}.modalCloseBtn_16f795d1{background:hsla(0,0%,100%,.12)!important;border-radius:4px!important;color:hsla(0,0%,100%,.85)!important}.modalCloseBtn_16f795d1:hover{background:hsla(0,0%,100%,.25)!important;color:#fff!important}.modalBody_16f795d1{display:flex;flex-direction:column;gap:20px;max-height:calc(100vh - 220px);overflow-y:auto;padding:24px}.modalFooter_16f795d1{align-items:center;background:#fff;border-top:1px solid #e0e0e0;display:flex;flex-shrink:0;gap:10px;padding:16px 24px}.fluentBtnApprove_16f795d1{background-color:#42be65!important;border-color:#42be65!important}.fluentBtnApprove_16f795d1:hover:not(:disabled){background-color:#36a35a!important;border-color:#36a35a!important}.fluentBtnReject_16f795d1{background-color:#da1e28!important;border-color:#da1e28!important}.fluentBtnReject_16f795d1:hover:not(:disabled){background-color:#b81922!important;border-color:#b81922!important}.fluentBtnResubmit_16f795d1{background-color:#b28600!important;border-color:#b28600!important}.fluentBtnResubmit_16f795d1:hover:not(:disabled){background-color:#9a7400!important;border-color:#9a7400!important}.panelMeta_16f795d1{background:#f4f4f4;border:1px solid #e0e0e0;border-radius:8px;display:flex;flex-direction:column;gap:4px;padding:14px 16px}.panelMeta_16f795d1 .panelMetaName_16f795d1{color:#161616;font-size:15px;font-weight:700}.panelMeta_16f795d1 .panelMetaDetail_16f795d1{color:#525252;display:flex;font-size:13px;gap:12px}.panelTableWrap_16f795d1{border:1px solid #e0e0e0;border-radius:8px;overflow:hidden}.panelTable_16f795d1{border-collapse:collapse;width:100%}.panelTable_16f795d1 thead tr{background:linear-gradient(135deg,#667eea,#764ba2);color:#fff}.panelTable_16f795d1 thead tr th{font-size:11.5px;font-weight:600;letter-spacing:.5px;padding:10px 12px;text-align:left;text-transform:uppercase;white-space:nowrap}.panelTable_16f795d1 thead tr th.colHrs_16f795d1{text-align:center;width:56px}.panelTable_16f795d1 tbody tr{border-bottom:1px solid #e0e0e0;transition:background .15s cubic-bezier(.4,0,.2,1)}.panelTable_16f795d1 tbody tr:last-child{border-bottom:none}.panelTable_16f795d1 tbody tr:nth-child(2n){background:#f4f4f4}.panelTable_16f795d1 tbody tr td{color:#161616;font-size:13px;padding:8px 12px;vertical-align:top}.panelTable_16f795d1 tbody tr td.tdCenter_16f795d1{font-weight:600;text-align:center;vertical-align:middle}.commentField_16f795d1{display:flex;flex-direction:column;gap:6px}.commentField_16f795d1 label{color:#525252;font-size:12px;font-weight:600;letter-spacing:.3px;text-transform:uppercase}.commentField_16f795d1 label .required_16f795d1{color:#da1e28;margin-left:2px}.commentField_16f795d1 textarea{background:#f4f4f4;border:1px solid #e0e0e0;border-radius:4px;box-sizing:border-box;color:#161616;font-family:inherit;font-size:13.5px;line-height:1.5;min-height:96px;outline:none;padding:10px 12px;resize:vertical;transition:border-color .15s cubic-bezier(.4,0,.2,1),box-shadow .15s cubic-bezier(.4,0,.2,1),background .15s cubic-bezier(.4,0,.2,1);width:100%}.commentField_16f795d1 textarea:focus{background:#fff;border-color:#667eea;box-shadow:0 0 0 3px rgba(15,98,254,.15)}.commentField_16f795d1 textarea:-ms-input-placeholder{color:#8d8d8d}.commentField_16f795d1 textarea::placeholder{color:#8d8d8d}.panelFooter_16f795d1{align-items:center;background:#fff;border-top:1px solid #e0e0e0;display:flex;flex-shrink:0;gap:10px;padding:16px 24px}", true);

// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  fadeIn: "fadeIn_16f795d1",
  header: "header_16f795d1",
  homeBtn: "homeBtn_16f795d1",
  title: "title_16f795d1",
  filterBar: "filterBar_16f795d1",
  filterGroup: "filterGroup_16f795d1",
  filterGroupWide: "filterGroupWide_16f795d1",
  filterInput: "filterInput_16f795d1",
  filterSelect: "filterSelect_16f795d1",
  messageBar: "messageBar_16f795d1",
  success: "success_16f795d1",
  error: "error_16f795d1",
  dismissBtn: "dismissBtn_16f795d1",
  loadingWrap: "loadingWrap_16f795d1",
  spinner: "spinner_16f795d1",
  spin: "spin_16f795d1",
  spinnerSm: "spinnerSm_16f795d1",
  emptyState: "emptyState_16f795d1",
  emptyTitle: "emptyTitle_16f795d1",
  emptySubtitle: "emptySubtitle_16f795d1",
  bulkBar: "bulkBar_16f795d1",
  bulkBarActive: "bulkBarActive_16f795d1",
  bulkSelectAll: "bulkSelectAll_16f795d1",
  bulkCheckbox: "bulkCheckbox_16f795d1",
  bulkActions: "bulkActions_16f795d1",
  bulkCount: "bulkCount_16f795d1",
  otBadge: "otBadge_16f795d1",
  rowNameRow: "rowNameRow_16f795d1",
  list: "list_16f795d1",
  rowCard: "rowCard_16f795d1",
  rowCardSelected: "rowCardSelected_16f795d1",
  rowCheckWrap: "rowCheckWrap_16f795d1",
  rowCheckbox: "rowCheckbox_16f795d1",
  rowCheckPlaceholder: "rowCheckPlaceholder_16f795d1",
  rowLeft: "rowLeft_16f795d1",
  rowName: "rowName_16f795d1",
  rowMeta: "rowMeta_16f795d1",
  dot: "dot_16f795d1",
  rowRight: "rowRight_16f795d1",
  badge: "badge_16f795d1",
  approved: "approved_16f795d1",
  submitted: "submitted_16f795d1",
  rejected: "rejected_16f795d1",
  draft: "draft_16f795d1",
  btn: "btn_16f795d1",
  btnDefault: "btnDefault_16f795d1",
  btnPrimary: "btnPrimary_16f795d1",
  btnApprove: "btnApprove_16f795d1",
  btnReject: "btnReject_16f795d1",
  btnResubmit: "btnResubmit_16f795d1",
  modalContainer: "modalContainer_16f795d1",
  modalHeader: "modalHeader_16f795d1",
  modalTitle: "modalTitle_16f795d1",
  modalCloseBtn: "modalCloseBtn_16f795d1",
  modalBody: "modalBody_16f795d1",
  modalFooter: "modalFooter_16f795d1",
  fluentBtnApprove: "fluentBtnApprove_16f795d1",
  fluentBtnReject: "fluentBtnReject_16f795d1",
  fluentBtnResubmit: "fluentBtnResubmit_16f795d1",
  panelMeta: "panelMeta_16f795d1",
  panelMetaName: "panelMetaName_16f795d1",
  panelMetaDetail: "panelMetaDetail_16f795d1",
  panelTableWrap: "panelTableWrap_16f795d1",
  panelTable: "panelTable_16f795d1",
  colHrs: "colHrs_16f795d1",
  tdCenter: "tdCenter_16f795d1",
  commentField: "commentField_16f795d1",
  required: "required_16f795d1",
  panelFooter: "panelFooter_16f795d1",
  container: "container_16f795d1"
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 10196);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 85959);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fluentui/react */ 76702);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fluentui/react */ 44533);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fluentui/react */ 67102);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fluentui/react */ 29425);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fluentui/react */ 80954);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fluentui/react */ 49885);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fluentui/react */ 5613);
/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/AppContext */ 24770);
/* harmony import */ var _services_TimesheetService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/TimesheetService */ 30264);
/* harmony import */ var _utils_dateUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/dateUtils */ 28613);
/* harmony import */ var _utils_fmt__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/fmt */ 27583);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/constants */ 47293);
/* harmony import */ var TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! TimeSheetWebPartStrings */ 31339);
/* harmony import */ var TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ManagerDashboard.module.scss */ 13102);











// ─── Constants ────────────────────────────────────────────────────────────────
function getStatusOptions() {
    return [
        { key: "Submitted", text: TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.StatusSubmitted },
        { key: "Approved", text: TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.StatusApproved },
        { key: "Rejected", text: TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.StatusRejected },
        { key: "All", text: TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.AllStatuses },
    ];
}
// ─── Helpers ──────────────────────────────────────────────────────────────────
function badgeClass(status) {
    if (status === "Approved")
        return _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].approved;
    if (status === "Submitted")
        return _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].submitted;
    if (status === "Rejected")
        return _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].rejected;
    return _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].draft;
}
function toDateInputValue(d) {
    var y = d.getFullYear();
    var m = String(d.getMonth() + 1).padStart(2, "0");
    var day = String(d.getDate()).padStart(2, "0");
    return "".concat(y, "-").concat(m, "-").concat(day);
}
function fromDateInputValue(v) {
    var _a = v.split("-").map(Number), y = _a[0], m = _a[1], d = _a[2];
    var date = new Date(y, m - 1, d);
    date.setHours(0, 0, 0, 0);
    return date;
}
function rowKey(row) {
    return "".concat(row.employeeEmail, "__").concat(row.entryDate.toISOString().split("T")[0]);
}
function groupToTeamRows(entries) {
    var map = new Map();
    entries.forEach(function (e) {
        var key = "".concat(e.employeeEmail, "__").concat(e.entryDate.toISOString().split("T")[0]);
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
// ─── Shared Fluent UI button styles (theme colour) ────────────────────────────
var primaryBtnStyles = {
    root: { backgroundColor: '#667eea', borderColor: '#667eea', borderRadius: 6 },
    rootHovered: { backgroundColor: '#5a6fd6', borderColor: '#5a6fd6' },
    rootPressed: { backgroundColor: '#4d5fbc', borderColor: '#4d5fbc' },
    rootDisabled: { backgroundColor: '#c5cbf8', borderColor: '#c5cbf8' },
};
var defaultBtnStyles = {
    root: { borderRadius: 6 },
    rootHovered: { borderColor: '#667eea', color: '#667eea' },
    rootPressed: { borderColor: '#5a6fd6', color: '#5a6fd6' },
};
// ─── Component ────────────────────────────────────────────────────────────────
var ManagerDashboard = function () {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_AppContext__WEBPACK_IMPORTED_MODULE_1__.AppContext), currentUser = _a.currentUser, navigateHome = _a.navigateHome;
    var _b = (0,_utils_dateUtils__WEBPACK_IMPORTED_MODULE_6__.currentMonthRange)(), wStart = _b.start, wEnd = _b.end;
    var _c = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(wStart), startDate = _c[0], setStartDate = _c[1];
    var _d = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(wEnd), endDate = _d[0], setEndDate = _d[1];
    var _f = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("Submitted"), statusFilter = _f[0], setStatusFilter = _f[1];
    var _g = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""), employeeFilter = _g[0], setEmployeeFilter = _g[1];
    var _h = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]), rows = _h[0], setRows = _h[1];
    var _j = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true), loading = _j[0], setLoading = _j[1];
    var _k = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""), error = _k[0], setError = _k[1];
    var _l = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""), successMessage = _l[0], setSuccessMessage = _l[1];
    // Review modal state
    var _m = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), modalOpen = _m[0], setModalOpen = _m[1];
    var _o = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null), reviewRow = _o[0], setReviewRow = _o[1];
    var _p = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null), reviewAction = _p[0], setReviewAction = _p[1];
    var _q = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""), managerComment = _q[0], setManagerComment = _q[1];
    var _r = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), actionLoading = _r[0], setActionLoading = _r[1];
    // Bulk selection state
    var _s = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]), selectedKeys = _s[0], setSelectedKeys = _s[1];
    var _t = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), bulkModalOpen = _t[0], setBulkModalOpen = _t[1];
    var _u = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null), bulkAction = _u[0], setBulkAction = _u[1];
    var _v = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""), bulkComment = _v[0], setBulkComment = _v[1];
    var _w = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), bulkLoading = _w[0], setBulkLoading = _w[1];
    // ─── Load data ────────────────────────────────────────────────────────────
    var loadData = function () {
        setLoading(true);
        setError("");
        var opts = {
            employeeEmail: employeeFilter || undefined,
            status: statusFilter === "All" ? undefined : statusFilter,
        };
        (0,_services_TimesheetService__WEBPACK_IMPORTED_MODULE_2__.getTeamEntries)(startDate, endDate, opts)
            .then(function (entries) {
            setRows(groupToTeamRows(entries));
            setLoading(false);
        })
            .catch(function () {
            setError(TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.LoadTeamFailed);
            setLoading(false);
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        loadData();
    }, [startDate, endDate, statusFilter, employeeFilter]); // eslint-disable-line
    // ─── Bulk selection helpers ────────────────────────────────────────────────
    var submittedRows = rows.filter(function (r) { return r.status === "Submitted"; });
    var allSelected = submittedRows.length > 0 &&
        submittedRows.every(function (r) { return selectedKeys.indexOf(rowKey(r)) !== -1; });
    var someSelected = selectedKeys.length > 0;
    var toggleRow = function (key) {
        setSelectedKeys(function (prev) {
            return prev.indexOf(key) !== -1 ? prev.filter(function (k) { return k !== key; }) : (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_7__.__spreadArray)([], prev, true), [key], false);
        });
    };
    var toggleAll = function () {
        if (allSelected) {
            setSelectedKeys([]);
        }
        else {
            setSelectedKeys(submittedRows.map(rowKey));
        }
    };
    var openBulkModal = function (action) {
        setBulkAction(action);
        setBulkComment("");
        setBulkModalOpen(true);
    };
    var handleBulkAction = function () { return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(void 0, void 0, void 0, function () {
        var selected, _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__generator)(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!bulkAction)
                        return [2 /*return*/];
                    if (bulkAction === "reject" && !bulkComment.trim())
                        return [2 /*return*/];
                    selected = rows.filter(function (r) { return selectedKeys.indexOf(rowKey(r)) !== -1; });
                    setBulkLoading(true);
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 6, 7, 8]);
                    if (!(bulkAction === "approve")) return [3 /*break*/, 3];
                    return [4 /*yield*/, Promise.all(selected.map(function (r) {
                            return (0,_services_TimesheetService__WEBPACK_IMPORTED_MODULE_2__.approveDayEntries)(r.entries.map(function (e) { return e.id; }), currentUser.displayName);
                        }))];
                case 2:
                    _b.sent();
                    setSuccessMessage("Approved ".concat(selected.length, " timesheet").concat(selected.length !== 1 ? "s" : "", "."));
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, Promise.all(selected.map(function (r) {
                        return (0,_services_TimesheetService__WEBPACK_IMPORTED_MODULE_2__.rejectDayEntries)(r.entries.map(function (e) { return e.id; }), currentUser.displayName, bulkComment);
                    }))];
                case 4:
                    _b.sent();
                    setSuccessMessage("Rejected ".concat(selected.length, " timesheet").concat(selected.length !== 1 ? "s" : "", "."));
                    _b.label = 5;
                case 5:
                    setSelectedKeys([]);
                    setBulkComment("");
                    setBulkModalOpen(false);
                    loadData();
                    return [3 /*break*/, 8];
                case 6:
                    _a = _b.sent();
                    setError("Bulk action failed. Please try again.");
                    return [3 /*break*/, 8];
                case 7:
                    setBulkLoading(false);
                    return [7 /*endfinally*/];
                case 8: return [2 /*return*/];
            }
        });
    }); };
    // ─── Modal helpers ────────────────────────────────────────────────────────
    var openModal = function (row, action) {
        setReviewRow(row);
        setReviewAction(action);
        setManagerComment("");
        setModalOpen(true);
    };
    var closeModal = function () {
        if (actionLoading)
            return;
        setModalOpen(false);
    };
    var handleAction = function () { return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(void 0, void 0, void 0, function () {
        var ids, msg, _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__generator)(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!reviewRow || !reviewAction)
                        return [2 /*return*/];
                    ids = reviewRow.entries.map(function (e) { return e.id; });
                    setActionLoading(true);
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 6, 7, 8]);
                    if (!(reviewAction === "approve")) return [3 /*break*/, 3];
                    return [4 /*yield*/, (0,_services_TimesheetService__WEBPACK_IMPORTED_MODULE_2__.approveDayEntries)(ids, currentUser.displayName)];
                case 2:
                    _b.sent();
                    setSuccessMessage((0,_utils_fmt__WEBPACK_IMPORTED_MODULE_8__.fmt)(TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.ApprovedMsg, {
                        name: reviewRow.employeeName,
                        date: (0,_utils_dateUtils__WEBPACK_IMPORTED_MODULE_6__.formatDateShort)(reviewRow.entryDate),
                    }));
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, (0,_services_TimesheetService__WEBPACK_IMPORTED_MODULE_2__.rejectDayEntries)(ids, currentUser.displayName, managerComment)];
                case 4:
                    _b.sent();
                    msg = reviewAction === "resubmit"
                        ? TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.ResubmitMsg
                        : TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.RejectedMsg;
                    setSuccessMessage((0,_utils_fmt__WEBPACK_IMPORTED_MODULE_8__.fmt)(msg, { name: reviewRow.employeeName }));
                    _b.label = 5;
                case 5:
                    setModalOpen(false);
                    loadData();
                    return [3 /*break*/, 8];
                case 6:
                    _a = _b.sent();
                    setError("Action failed. Please try again.");
                    return [3 /*break*/, 8];
                case 7:
                    setActionLoading(false);
                    return [7 /*endfinally*/];
                case 8: return [2 /*return*/];
            }
        });
    }); };
    var modalTitle = reviewAction === "approve"
        ? TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.ApproveModal
        : reviewAction === "resubmit"
            ? TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.RequestResubmitModal
            : TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.RejectModal;
    var confirmBtnLabel = reviewAction === "approve"
        ? TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.ConfirmApprove
        : reviewAction === "resubmit"
            ? TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.SendResubmit
            : TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.ConfirmReject;
    var confirmDisabled = actionLoading || (reviewAction !== "approve" && !managerComment.trim());
    // ─── Render ───────────────────────────────────────────────────────────────
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].container },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].header },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].homeBtn, title: "Home", onClick: navigateHome },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconHome, null)),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].title }, TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.TeamTimesheetsTitle)),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].filterBar },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].filterGroup },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { htmlFor: "mgr-from" }, TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.From),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { id: "mgr-from", type: "date", className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].filterInput, value: toDateInputValue(startDate), onChange: function (e) {
                        return e.target.value && setStartDate(fromDateInputValue(e.target.value));
                    } })),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].filterGroup },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { htmlFor: "mgr-to" }, TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.To),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { id: "mgr-to", type: "date", className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].filterInput, value: toDateInputValue(endDate), onChange: function (e) {
                        return e.target.value && setEndDate(fromDateInputValue(e.target.value));
                    } })),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].filterGroup },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { htmlFor: "mgr-status" }, TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.Status),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", { id: "mgr-status", className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].filterSelect, value: statusFilter, onChange: function (e) { return setStatusFilter(e.target.value); } }, getStatusOptions().map(function (o) { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { key: o.key, value: o.key }, o.text)); }))),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "".concat(_ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].filterGroup, " ").concat(_ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].filterGroupWide) },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { htmlFor: "mgr-employee" }, TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.EmployeeEmail),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { id: "mgr-employee", type: "text", className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].filterInput, value: employeeFilter, onChange: function (e) { return setEmployeeFilter(e.target.value); }, placeholder: TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.FilterByEmail }))),
        successMessage && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "".concat(_ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].messageBar, " ").concat(_ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].success) },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconSuccess, null),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, successMessage),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].dismissBtn, onClick: function () { return setSuccessMessage(""); } },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconClose, null)))),
        error && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "".concat(_ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].messageBar, " ").concat(_ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].error) },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconError, null),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, error))),
        loading ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].loadingWrap },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].spinner }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.LoadingTeam))) : rows.length === 0 ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].emptyState },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconUsers, null),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].emptyTitle }, TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.NoTimesheetsFound),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].emptySubtitle }, TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.NoTimesheetsHint))) : (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
            submittedRows.length > 0 && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "".concat(_ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].bulkBar, " ").concat(someSelected ? _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].bulkBarActive : "") },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].bulkSelectAll },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { type: "checkbox", className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].bulkCheckbox, checked: allSelected, onChange: toggleAll }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, allSelected
                        ? "Deselect all"
                        : "Select all submitted (".concat(submittedRows.length, ")"))),
                someSelected && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].bulkActions },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].bulkCount },
                        selectedKeys.length,
                        " selected"),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "".concat(_ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].btn, " ").concat(_ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].btnApprove), disabled: bulkLoading, onClick: function () { return openBulkModal("approve"); } },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconCheck, null),
                        " Approve All"),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "".concat(_ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].btn, " ").concat(_ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].btnReject), disabled: bulkLoading, onClick: function () { return openBulkModal("reject"); } },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconReject, null),
                        " Reject All"),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "".concat(_ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].btn, " ").concat(_ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].btnDefault), disabled: bulkLoading, onClick: function () { return setSelectedKeys([]); } }, "Clear"))))),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].list }, rows.map(function (row) {
                var key = rowKey(row);
                var isSelected = selectedKeys.indexOf(key) !== -1;
                return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { key: key, className: "".concat(_ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].rowCard, " ").concat(isSelected ? _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].rowCardSelected : "") },
                    row.status === "Submitted" && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].rowCheckWrap, onClick: function (e) { return e.stopPropagation(); } },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { type: "checkbox", className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].rowCheckbox, checked: isSelected, onChange: function () { return toggleRow(key); } }))),
                    row.status !== "Submitted" && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].rowCheckPlaceholder })),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].rowLeft },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].rowNameRow },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].rowName }, row.employeeName),
                            row.totalHours > _utils_constants__WEBPACK_IMPORTED_MODULE_3__.REGULAR_HOURS_PER_DAY && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].otBadge, title: "".concat((row.totalHours - _utils_constants__WEBPACK_IMPORTED_MODULE_3__.REGULAR_HOURS_PER_DAY).toFixed(2), " hrs overtime") },
                                "OT +",
                                (row.totalHours - _utils_constants__WEBPACK_IMPORTED_MODULE_3__.REGULAR_HOURS_PER_DAY).toFixed(2),
                                "h"))),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].rowMeta },
                            (0,_utils_dateUtils__WEBPACK_IMPORTED_MODULE_6__.formatDateLabel)(row.entryDate),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].dot }),
                            row.entries.length,
                            " task",
                            row.entries.length !== 1 ? "s" : "",
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].dot }),
                            row.totalHours.toFixed(2),
                            " hrs")),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].rowRight },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "".concat(_ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].badge, " ").concat(badgeClass(row.status)) }, row.status),
                        row.status === "Submitted" && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "".concat(_ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].btn, " ").concat(_ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].btnApprove), onClick: function () { return openModal(row, "approve"); } },
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconCheck, null),
                                " ",
                                TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.ApproveBtn),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "".concat(_ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].btn, " ").concat(_ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].btnReject), onClick: function () { return openModal(row, "reject"); } },
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconReject, null),
                                " ",
                                TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.RejectBtn))),
                        row.status === "Approved" && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "".concat(_ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].btn, " ").concat(_ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].btnResubmit), onClick: function () { return openModal(row, "resubmit"); } },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconRefresh, null),
                            " ",
                            TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.RequestResubmitBtn)))));
            })))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_9__.Modal, { isOpen: bulkModalOpen, onDismiss: function () {
                if (!bulkLoading) {
                    setBulkModalOpen(false);
                }
            }, isBlocking: bulkLoading, containerClassName: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].modalContainer },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].modalHeader },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].modalTitle }, bulkAction === "approve"
                    ? "Approve ".concat(selectedKeys.length, " Timesheet").concat(selectedKeys.length !== 1 ? "s" : "")
                    : "Reject ".concat(selectedKeys.length, " Timesheet").concat(selectedKeys.length !== 1 ? "s" : "")),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_10__.IconButton, { iconProps: { iconName: "Cancel" }, ariaLabel: "Close", onClick: function () { return setBulkModalOpen(false); }, disabled: bulkLoading, className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].modalCloseBtn })),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].modalBody },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].panelMeta },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].panelMetaName },
                        selectedKeys.length,
                        " timesheet",
                        selectedKeys.length !== 1 ? "s" : "",
                        " selected"),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].panelMetaDetail },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, rows
                            .filter(function (r) { return selectedKeys.indexOf(rowKey(r)) !== -1; })
                            .map(function (r) { return r.employeeName; })
                            .filter(function (v, i, a) { return a.indexOf(v) === i; })
                            .join(", ")))),
                bulkAction === "reject" && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_11__.TextField, { label: "Rejection Reason", required: true, multiline: true, rows: 4, value: bulkComment, onChange: function (_e, val) { return setBulkComment(val || ""); }, placeholder: "Provide a reason that will be sent to all selected employees\u2026", disabled: bulkLoading }),
                    !bulkComment.trim() && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { style: {
                            color: "#a19f9d",
                            fontSize: 12,
                            display: "block",
                            marginTop: 4,
                        } }, "A comment is required before rejecting timesheets.")))),
                bulkAction === "approve" && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { style: { margin: 0, fontSize: 13.5, color: "#525252" } },
                    "This will approve all ",
                    selectedKeys.length,
                    " selected timesheet",
                    selectedKeys.length !== 1 ? "s" : "",
                    ". This action cannot be undone."))),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].modalFooter },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_12__.PrimaryButton, { disabled: bulkLoading || (bulkAction === "reject" && !bulkComment.trim()), className: bulkAction === "approve"
                        ? _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].fluentBtnApprove
                        : _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].fluentBtnReject, styles: { root: { borderRadius: 6 } }, onClick: handleBulkAction }, bulkLoading ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_13__.Spinner, { size: _fluentui_react__WEBPACK_IMPORTED_MODULE_14__.SpinnerSize.small }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { style: { marginLeft: 6 } }, "Processing\u2026"))) : bulkAction === "approve" ? ("Approve ".concat(selectedKeys.length)) : ("Reject ".concat(selectedKeys.length))),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_15__.DefaultButton, { text: TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.Cancel, disabled: bulkLoading, styles: defaultBtnStyles, onClick: function () { return setBulkModalOpen(false); } }))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_9__.Modal, { isOpen: modalOpen, onDismiss: closeModal, isBlocking: actionLoading, containerClassName: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].modalContainer },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].modalHeader },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].modalTitle }, modalTitle),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_10__.IconButton, { iconProps: { iconName: "Cancel" }, ariaLabel: "Close", onClick: closeModal, disabled: actionLoading, className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].modalCloseBtn })),
            reviewRow && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].modalBody },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].panelMeta },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].panelMetaName }, reviewRow.employeeName),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].panelMetaDetail },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, (0,_utils_dateUtils__WEBPACK_IMPORTED_MODULE_6__.formatDateLabel)(reviewRow.entryDate)),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null,
                            "Total: ",
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null,
                                reviewRow.totalHours.toFixed(2),
                                " hrs")))),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].panelTableWrap },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].panelTable },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null,
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null,
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.Project),
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.Category),
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.Description),
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].colHrs }, TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.Hrs))),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, reviewRow.entries.map(function (e) { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", { key: e.id },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, e.projectName),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, e.activityCategoryName),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, e.taskDescription),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].tdCenter }, e.hoursSpent))); })))),
                reviewAction !== "approve" && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_11__.TextField, { label: TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.ManagerCommentLabel, required: true, multiline: true, rows: 4, value: managerComment, onChange: function (_e, val) { return setManagerComment(val || ""); }, placeholder: TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.ManagerCommentPlaceholder, disabled: actionLoading }),
                    !managerComment.trim() && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { style: {
                            color: "#a19f9d",
                            fontSize: 12,
                            display: "block",
                            marginTop: 4,
                        } },
                        "A comment is required before",
                        " ",
                        reviewAction === "reject"
                            ? "rejecting"
                            : "requesting re-submission of",
                        " ",
                        "this timesheet.")))))),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].modalFooter },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_12__.PrimaryButton, { onClick: handleAction, disabled: confirmDisabled, styles: { root: { borderRadius: 6 } }, className: reviewAction === "approve"
                        ? _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].fluentBtnApprove
                        : reviewAction === "reject"
                            ? _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].fluentBtnReject
                            : _ManagerDashboard_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].fluentBtnResubmit }, actionLoading ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_13__.Spinner, { size: _fluentui_react__WEBPACK_IMPORTED_MODULE_14__.SpinnerSize.small }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { style: { marginLeft: 6 } }, TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.Processing))) : (confirmBtnLabel)),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_15__.DefaultButton, { text: TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.Cancel, onClick: closeModal, disabled: actionLoading, styles: defaultBtnStyles })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ManagerDashboard);


/***/ })

}]);
//# sourceMappingURL=chunk.lib_webparts_timeSheet_views_ManagerDashboard_js.js.map