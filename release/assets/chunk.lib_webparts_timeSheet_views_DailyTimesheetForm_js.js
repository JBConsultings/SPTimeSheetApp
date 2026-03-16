"use strict";
(self["webpackJsonp_c7e5e177-9baf-42a9-91c9-2ea9fecc19a8_0.0.1"] = self["webpackJsonp_c7e5e177-9baf-42a9-91c9-2ea9fecc19a8_0.0.1"] || []).push([["lib_webparts_timeSheet_views_DailyTimesheetForm_js"],{

/***/ 67002:
/*!*************************************************************************!*\
  !*** ./lib/webparts/timeSheet/views/DailyTimesheetForm.module.scss.css ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_microsoft_sp_css_loader_node_modules_microsoft_load_themed_styles_lib_es6_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/@microsoft/sp-css-loader/node_modules/@microsoft/load-themed-styles/lib-es6/index.js */ 96323);
// Imports


_node_modules_microsoft_sp_css_loader_node_modules_microsoft_load_themed_styles_lib_es6_index_js__WEBPACK_IMPORTED_MODULE_0__.loadStyles("@charset \"UTF-8\";.container_a3f30866{animation:fadeIn_a3f30866 .25s ease both;color:#161616;font-family:IBM Plex Sans,Segoe UI,sans-serif;margin:0 auto;max-width:1100px;padding:32px}@keyframes fadeIn_a3f30866{0%{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}.header_a3f30866{align-items:center;display:flex;gap:12px;margin-bottom:28px}.header_a3f30866 .homeBtn_a3f30866{align-items:center;background:#fff;border:1px solid #e0e0e0;border-radius:8px;color:#525252;cursor:pointer;display:flex;flex-shrink:0;height:36px;justify-content:center;transition:background .15s cubic-bezier(.4,0,.2,1),box-shadow .15s cubic-bezier(.4,0,.2,1),color .15s cubic-bezier(.4,0,.2,1);width:36px}.header_a3f30866 .homeBtn_a3f30866:hover{background:#edf4ff;box-shadow:0 1px 3px rgba(0,0,0,.08),0 1px 2px rgba(0,0,0,.06);color:#0f62fe}.header_a3f30866 .title_a3f30866{color:#161616;font-size:22px;font-weight:700;letter-spacing:-.3px;margin:0}.dayNav_a3f30866{align-items:center;display:flex;gap:8px;margin-bottom:20px}.dayNav_a3f30866 .navBtn_a3f30866{align-items:center;background:#fff;border:1px solid #e0e0e0;border-radius:8px;color:#525252;cursor:pointer;display:flex;flex-shrink:0;height:36px;justify-content:center;transition:background .15s cubic-bezier(.4,0,.2,1),box-shadow .15s cubic-bezier(.4,0,.2,1),color .15s cubic-bezier(.4,0,.2,1);width:36px}.dayNav_a3f30866 .navBtn_a3f30866:hover:not(:disabled){background:#0f62fe;border-color:#0f62fe;box-shadow:0 1px 3px rgba(0,0,0,.08),0 1px 2px rgba(0,0,0,.06);color:#fff}.dayNav_a3f30866 .navBtn_a3f30866:disabled{cursor:not-allowed;opacity:.35}.dayNav_a3f30866 .dateLabel_a3f30866{background:#fff;border:1px solid #e0e0e0;border-radius:8px;box-shadow:0 1px 3px rgba(0,0,0,.08),0 1px 2px rgba(0,0,0,.06);color:#161616;flex:1;font-size:17px;font-weight:600;min-width:240px;padding:8px 20px;text-align:center}.statusBar_a3f30866{align-items:center;border-radius:8px;border-style:solid;border-width:1px;display:flex;font-size:13.5px;font-weight:500;gap:10px;margin-bottom:16px;padding:10px 16px}.statusBar_a3f30866.approved_a3f30866{background:#defbe6;border-color:#a7f0ba;color:#044317}.statusBar_a3f30866.submitted_a3f30866{background:#edf4ff;border-color:#badeff;color:#003a8c}.statusBar_a3f30866.rejected_a3f30866{background:#fff1f1;border-color:#ffd7d9;color:#750e13}.statusBar_a3f30866.draft_a3f30866{background:#fdf6d8;border-color:#f5d73b;color:#5b4105}.statusBar_a3f30866 .statusDot_a3f30866{border-radius:50%;flex-shrink:0;height:8px;width:8px}.statusBar_a3f30866 .approved_a3f30866 .statusDot_a3f30866{background:#24a148}.statusBar_a3f30866 .submitted_a3f30866 .statusDot_a3f30866{background:#0f62fe}.statusBar_a3f30866 .rejected_a3f30866 .statusDot_a3f30866{background:#da1e28}.statusBar_a3f30866 .draft_a3f30866 .statusDot_a3f30866{background:#b28600}.statusBar_a3f30866 .dismissBtn_a3f30866{background:none;border:none;color:inherit;cursor:pointer;margin-left:auto;opacity:.6;padding:2px}.statusBar_a3f30866 .dismissBtn_a3f30866:hover{opacity:1}.messageBar_a3f30866{align-items:flex-start;border-radius:8px;border-style:solid;border-width:1px;display:flex;font-size:13.5px;gap:10px;margin-bottom:12px;padding:10px 16px}.messageBar_a3f30866.success_a3f30866{background:#defbe6;border-color:#a7f0ba;color:#044317}.messageBar_a3f30866.error_a3f30866{background:#fff1f1;border-color:#ffd7d9;color:#750e13}.messageBar_a3f30866.warning_a3f30866{background:#fdf6d8;border-color:#f5d73b;color:#5b4105}.messageBar_a3f30866.info_a3f30866{background:#edf4ff;border-color:#badeff;color:#003a8c}.messageBar_a3f30866 .dismissBtn_a3f30866{background:none;border:none;color:inherit;cursor:pointer;margin-left:auto;opacity:.6;padding:2px 4px}.messageBar_a3f30866 .dismissBtn_a3f30866:hover{opacity:1}.validationList_a3f30866{display:flex;flex-direction:column;gap:3px;list-style:none;margin:0;padding:0}.validationList_a3f30866 li:before{content:\"• \";font-weight:700}.tableCard_a3f30866{background:#fff;border:1px solid #e0e0e0;border-radius:12px;box-shadow:0 4px 12px rgba(0,0,0,.1),0 2px 4px rgba(0,0,0,.06);margin-bottom:16px;overflow:hidden}.tableWrap_a3f30866{overflow-x:auto}table.timesheetTable_a3f30866{border-collapse:collapse;width:100%}table.timesheetTable_a3f30866 thead tr{background:#0f62fe;color:#fff}table.timesheetTable_a3f30866 thead tr th{font-size:12px;font-weight:600;letter-spacing:.5px;padding:12px 14px;text-align:left;text-transform:uppercase;white-space:nowrap}table.timesheetTable_a3f30866 thead tr th.colDelete_a3f30866{text-align:center;width:48px}table.timesheetTable_a3f30866 thead tr th.colHours_a3f30866{text-align:center;width:90px}table.timesheetTable_a3f30866 thead tr th.colDesc_a3f30866{min-width:260px}table.timesheetTable_a3f30866 tbody tr{border-bottom:1px solid #e0e0e0;transition:background .15s cubic-bezier(.4,0,.2,1)}table.timesheetTable_a3f30866 tbody tr:last-child{border-bottom:none}table.timesheetTable_a3f30866 tbody tr:nth-child(2n){background:#f4f4f4}table.timesheetTable_a3f30866 tbody tr:hover{background:#edf4ff}table.timesheetTable_a3f30866 tbody tr td{padding:6px 10px;vertical-align:top}table.timesheetTable_a3f30866 tbody tr td.tdCenter_a3f30866{text-align:center;vertical-align:middle}.numberInput_a3f30866,.select_a3f30866,.textarea_a3f30866{background:#fff;border:1px solid #e0e0e0;border-radius:4px;color:#161616;font-family:inherit;font-size:13.5px;outline:none;padding:7px 10px;transition:border-color .15s cubic-bezier(.4,0,.2,1),box-shadow .15s cubic-bezier(.4,0,.2,1);width:100%}.numberInput_a3f30866:focus,.select_a3f30866:focus,.textarea_a3f30866:focus{border-color:#0f62fe;box-shadow:0 0 0 3px rgba(15,98,254,.15)}.numberInput_a3f30866:disabled,.select_a3f30866:disabled,.textarea_a3f30866:disabled{background:#f4f4f4;color:#8d8d8d;cursor:not-allowed}.select_a3f30866{appearance:none;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8'%3E%3Cpath fill='%23525252' d='m1 1 5 5 5-5'/%3E%3C/svg%3E\");background-position:right 10px center;background-repeat:no-repeat;cursor:pointer;padding-right:28px}.textarea_a3f30866{box-sizing:border-box;display:block;height:64px;line-height:1.5;max-height:120px;min-height:64px;resize:none}.numberInput_a3f30866{-moz-appearance:textfield;box-sizing:border-box;font-size:14px;font-variant-numeric:tabular-nums;font-weight:600;text-align:center;width:100%}.numberInput_a3f30866::-webkit-inner-spin-button,.numberInput_a3f30866::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.deleteBtn_a3f30866{align-items:center;background:none;border:1px solid transparent;border-radius:4px;color:#8d8d8d;cursor:pointer;display:flex;height:30px;justify-content:center;margin:0 auto;transition:background .15s cubic-bezier(.4,0,.2,1),color .15s cubic-bezier(.4,0,.2,1),border-color .15s cubic-bezier(.4,0,.2,1);width:30px}.deleteBtn_a3f30866:hover:not(:disabled){background:#fff1f1;border-color:#ffd7d9;color:#da1e28}.deleteBtn_a3f30866:disabled{cursor:not-allowed;opacity:.3}.totalsRow_a3f30866{align-items:center;background:#f4f4f4;border-radius:0 0 12px 12px;border-top:2px solid #e0e0e0;display:flex;justify-content:flex-end;padding:10px 16px}.totalsRow_a3f30866 .totalLabel_a3f30866{color:#161616;font-size:14px;font-variant-numeric:tabular-nums;font-weight:700}.totalsRow_a3f30866 .totalExceeds_a3f30866{background:#fff1f1;border:1px solid #ffd7d9;border-radius:20px;color:#da1e28;font-size:12px;font-weight:600;margin-left:10px;padding:2px 10px}.actions_a3f30866{align-items:center;display:flex;flex-wrap:wrap;gap:8px;margin-top:4px}.btn_a3f30866{align-items:center;border:1px solid #e0e0e0;border-radius:8px;cursor:pointer;display:inline-flex;font-family:inherit;font-size:13.5px;font-weight:500;gap:6px;outline:none;padding:8px 16px;transition:background .15s cubic-bezier(.4,0,.2,1),box-shadow .15s cubic-bezier(.4,0,.2,1),border-color .15s cubic-bezier(.4,0,.2,1),color .15s cubic-bezier(.4,0,.2,1);white-space:nowrap}.btn_a3f30866:disabled{cursor:not-allowed;opacity:.45}.btn_a3f30866.btnDefault_a3f30866{background:#fff;color:#161616}.btn_a3f30866.btnDefault_a3f30866:hover:not(:disabled){background:#f4f4f4;border-color:#c6c6c6;box-shadow:0 1px 3px rgba(0,0,0,.08),0 1px 2px rgba(0,0,0,.06)}.btn_a3f30866.btnPrimary_a3f30866{background:#0f62fe;border-color:#0f62fe;color:#fff}.btn_a3f30866.btnPrimary_a3f30866:hover:not(:disabled){background:#0353e9;border-color:#0353e9;box-shadow:0 4px 12px rgba(15,98,254,.35)}.btn_a3f30866.btnConfirm_a3f30866{background:#42be65;border-color:#42be65;color:#fff}.btn_a3f30866.btnConfirm_a3f30866:hover:not(:disabled){background:#37a055;border-color:#37a055;box-shadow:0 4px 12px rgba(66,190,101,.3)}.confirmRow_a3f30866{align-items:center;background:#fdf6d8;border:1px solid #f5d73b;border-radius:8px;display:flex;flex-wrap:wrap;gap:8px;padding:8px 14px}.confirmRow_a3f30866 .confirmText_a3f30866{color:#4b3800;font-size:13.5px;font-weight:500}.readOnlyNotice_a3f30866{align-items:center;background:#edf4ff;border:1px solid #badeff;border-radius:8px;color:#003a8c;display:flex;font-size:13.5px;gap:8px;margin-top:4px;padding:10px 16px}.loadingWrap_a3f30866{align-items:center;color:#525252;display:flex;flex-direction:column;font-size:14px;gap:16px;justify-content:center;min-height:200px}.spinner_a3f30866{animation:spin_a3f30866 .7s linear infinite;border:3px solid #e0e0e0;border-radius:50%;border-top-color:#0f62fe;height:36px;width:36px}@keyframes spin_a3f30866{to{transform:rotate(1turn)}}", true);

// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  fadeIn: "fadeIn_a3f30866",
  header: "header_a3f30866",
  homeBtn: "homeBtn_a3f30866",
  title: "title_a3f30866",
  dayNav: "dayNav_a3f30866",
  navBtn: "navBtn_a3f30866",
  dateLabel: "dateLabel_a3f30866",
  statusBar: "statusBar_a3f30866",
  approved: "approved_a3f30866",
  submitted: "submitted_a3f30866",
  rejected: "rejected_a3f30866",
  draft: "draft_a3f30866",
  statusDot: "statusDot_a3f30866",
  dismissBtn: "dismissBtn_a3f30866",
  messageBar: "messageBar_a3f30866",
  success: "success_a3f30866",
  error: "error_a3f30866",
  warning: "warning_a3f30866",
  info: "info_a3f30866",
  validationList: "validationList_a3f30866",
  tableCard: "tableCard_a3f30866",
  tableWrap: "tableWrap_a3f30866",
  timesheetTable: "timesheetTable_a3f30866",
  colDelete: "colDelete_a3f30866",
  colHours: "colHours_a3f30866",
  colDesc: "colDesc_a3f30866",
  tdCenter: "tdCenter_a3f30866",
  select: "select_a3f30866",
  textarea: "textarea_a3f30866",
  numberInput: "numberInput_a3f30866",
  deleteBtn: "deleteBtn_a3f30866",
  totalsRow: "totalsRow_a3f30866",
  totalLabel: "totalLabel_a3f30866",
  totalExceeds: "totalExceeds_a3f30866",
  actions: "actions_a3f30866",
  btn: "btn_a3f30866",
  btnDefault: "btnDefault_a3f30866",
  btnPrimary: "btnPrimary_a3f30866",
  btnConfirm: "btnConfirm_a3f30866",
  confirmRow: "confirmRow_a3f30866",
  confirmText: "confirmText_a3f30866",
  readOnlyNotice: "readOnlyNotice_a3f30866",
  loadingWrap: "loadingWrap_a3f30866",
  spinner: "spinner_a3f30866",
  spin: "spin_a3f30866",
  container: "container_a3f30866"
});


/***/ }),

/***/ 54796:
/*!*********************************************************!*\
  !*** ./lib/webparts/timeSheet/utils/validationUtils.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRowErrors: () => (/* binding */ getRowErrors),
/* harmony export */   validateTaskRows: () => (/* binding */ validateTaskRows)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ 47293);

/**
 * Validate all task rows for a daily timesheet submission.
 */
function validateTaskRows(rows) {
    var errors = [];
    rows.forEach(function (row) {
        if (!row.projectId) {
            errors.push({ rowKey: row.rowKey, field: 'projectId', message: 'Project is required.' });
        }
        if (!row.activityCategoryId) {
            errors.push({ rowKey: row.rowKey, field: 'activityCategoryId', message: 'Activity category is required.' });
        }
        if (!row.taskDescription || row.taskDescription.trim().length === 0) {
            errors.push({ rowKey: row.rowKey, field: 'taskDescription', message: 'Task description is required.' });
        }
        if (!row.hoursSpent || row.hoursSpent < _constants__WEBPACK_IMPORTED_MODULE_0__.MIN_HOURS_PER_TASK) {
            errors.push({ rowKey: row.rowKey, field: 'hoursSpent', message: "Minimum ".concat(_constants__WEBPACK_IMPORTED_MODULE_0__.MIN_HOURS_PER_TASK, " hour required.") });
        }
    });
    var totalHours = rows.reduce(function (sum, r) { return sum + (r.hoursSpent || 0); }, 0);
    var dayTotalError;
    if (totalHours > _constants__WEBPACK_IMPORTED_MODULE_0__.MAX_HOURS_PER_DAY) {
        dayTotalError = "Total hours (".concat(totalHours, ") exceed the maximum of ").concat(_constants__WEBPACK_IMPORTED_MODULE_0__.MAX_HOURS_PER_DAY, " hours per day.");
    }
    return {
        valid: errors.length === 0 && !dayTotalError,
        errors: errors,
        dayTotalError: dayTotalError,
    };
}
/**
 * Get field-level errors for a specific row.
 */
function getRowErrors(errors, rowKey) {
    return errors
        .filter(function (e) { return e.rowKey === rowKey; })
        .reduce(function (acc, e) {
        acc[e.field] = e.message;
        return acc;
    }, {});
}


/***/ }),

/***/ 51566:
/*!************************************************************!*\
  !*** ./lib/webparts/timeSheet/views/DailyTimesheetForm.js ***!
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
/* harmony import */ var _services_ProjectService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/ProjectService */ 15607);
/* harmony import */ var _services_CategoryService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/CategoryService */ 64268);
/* harmony import */ var _utils_dateUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/dateUtils */ 28613);
/* harmony import */ var _utils_validationUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/validationUtils */ 54796);
/* harmony import */ var _DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DailyTimesheetForm.module.scss */ 67002);










var rowCounter = 0;
function newRowKey() {
    return "row-".concat(++rowCounter);
}
function emptyRow() {
    return {
        rowKey: newRowKey(),
        projectId: 0,
        projectName: '',
        activityCategoryId: 0,
        activityCategoryName: '',
        taskDescription: '',
        hoursSpent: 0,
        isDirty: true,
    };
}
// ─── Inline SVG icons (no icon-font dependency) ──────────────────────────────
var IconHome = function () { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "currentColor" },
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M8 1L1 7h2v7h4v-4h2v4h4V7h2L8 1z" }))); };
var IconLeft = function () { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "currentColor" },
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M10 3L5 8l5 5", stroke: "currentColor", strokeWidth: "1.5", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }))); };
var IconRight = function () { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "currentColor" },
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M6 3l5 5-5 5", stroke: "currentColor", strokeWidth: "1.5", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }))); };
var IconAdd = function () { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "currentColor" },
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M7 1v12M1 7h12", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round" }))); };
var IconSave = function () { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "currentColor" },
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M2 2h8l2 2v8a1 1 0 01-1 1H3a1 1 0 01-1-1V2z", stroke: "currentColor", strokeWidth: "1.2", fill: "none" }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", { x: "4", y: "1", width: "6", height: "3", rx: ".5", fill: "currentColor" }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", { x: "3", y: "7", width: "8", height: "5", rx: ".5", fill: "currentColor" }))); };
var IconSend = function () { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "currentColor" },
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M1 1l12 6-12 6V8.5l8-1.5-8-1.5V1z" }))); };
var IconTrash = function () { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "currentColor" },
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M2 4h10M5 4V2h4v2M6 6v5M8 6v5M3 4l1 8h6l1-8", stroke: "currentColor", strokeWidth: "1.3", fill: "none", strokeLinecap: "round" }))); };
var IconClose = function () { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "currentColor" },
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M1 1l10 10M11 1L1 11", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }))); };
var IconCheck = function () { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "currentColor" },
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M2 7l4 4 6-6", stroke: "currentColor", strokeWidth: "1.8", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }))); };
var IconInfo = function () { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "currentColor" },
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", { cx: "8", cy: "8", r: "7", stroke: "currentColor", strokeWidth: "1.3", fill: "none" }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M8 7v4M8 5v.5", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "round" }))); };
// ─── Status badge config ──────────────────────────────────────────────────────
function statusClass(status) {
    if (status === 'Approved')
        return _DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].approved;
    if (status === 'Submitted')
        return _DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].submitted;
    if (status === 'Rejected')
        return _DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].rejected;
    return _DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].draft;
}
// ─── Component ────────────────────────────────────────────────────────────────
var DailyTimesheetForm = function (_a) {
    var selectedDate = _a.selectedDate;
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_AppContext__WEBPACK_IMPORTED_MODULE_1__.AppContext), currentUser = _b.currentUser, navigateHome = _b.navigateHome;
    var _c = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function () {
        var d = new Date(selectedDate);
        d.setHours(0, 0, 0, 0);
        return d;
    }), currentDate = _c[0], setCurrentDate = _c[1];
    var _d = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([emptyRow()]), rows = _d[0], setRows = _d[1];
    var _e = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]), deletedIds = _e[0], setDeletedIds = _e[1];
    var _f = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]), projects = _f[0], setProjects = _f[1];
    var _g = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]), categories = _g[0], setCategories = _g[1];
    var _h = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true), loading = _h[0], setLoading = _h[1];
    var _j = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), saving = _j[0], setSaving = _j[1];
    var _k = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), submitConfirm = _k[0], setSubmitConfirm = _k[1];
    var _l = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null), dayStatus = _l[0], setDayStatus = _l[1];
    var _m = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''), managerComments = _m[0], setManagerComments = _m[1];
    var _o = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''), successMessage = _o[0], setSuccessMessage = _o[1];
    var _p = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''), errorMessage = _p[0], setErrorMessage = _p[1];
    var _q = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]), validationErrors = _q[0], setValidationErrors = _q[1];
    var isReadOnly = dayStatus === 'Submitted' || dayStatus === 'Approved';
    // ─── Data Loading ───────────────────────────────────────────────────────────
    var loadData = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (date) { return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(void 0, void 0, void 0, function () {
        var _a, entries, projs, cats, _b;
        var _c;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__generator)(this, function (_d) {
            switch (_d.label) {
                case 0:
                    setLoading(true);
                    setSuccessMessage('');
                    setErrorMessage('');
                    setValidationErrors([]);
                    _d.label = 1;
                case 1:
                    _d.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, Promise.all([
                            (0,_services_TimesheetService__WEBPACK_IMPORTED_MODULE_2__.getEntriesForDate)(date, currentUser.email),
                            (0,_services_ProjectService__WEBPACK_IMPORTED_MODULE_3__.getActiveProjects)(),
                            (0,_services_CategoryService__WEBPACK_IMPORTED_MODULE_4__.getActiveCategories)(),
                        ])];
                case 2:
                    _a = _d.sent(), entries = _a[0], projs = _a[1], cats = _a[2];
                    setProjects(projs);
                    setCategories(cats);
                    if (entries.length > 0) {
                        setDayStatus(entries[0].status);
                        setManagerComments((_c = entries[0].managerComments) !== null && _c !== void 0 ? _c : '');
                        setRows(entries.map(function (e) { return ({
                            rowKey: newRowKey(),
                            id: e.id,
                            projectId: e.projectId,
                            projectName: e.projectName,
                            activityCategoryId: e.activityCategoryId,
                            activityCategoryName: e.activityCategoryName,
                            taskDescription: e.taskDescription,
                            hoursSpent: e.hoursSpent,
                            isDirty: false,
                        }); }));
                        setDeletedIds([]);
                    }
                    else {
                        setDayStatus(null);
                        setManagerComments('');
                        setRows([emptyRow()]);
                        setDeletedIds([]);
                    }
                    return [3 /*break*/, 5];
                case 3:
                    _b = _d.sent();
                    setErrorMessage('Failed to load timesheet data. Please try again.');
                    return [3 /*break*/, 5];
                case 4:
                    setLoading(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); }, [currentUser.email]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () { void loadData(currentDate); }, [currentDate, loadData]);
    // ─── Navigation ─────────────────────────────────────────────────────────────
    var changeDate = function (offset) {
        var d = new Date(currentDate);
        d.setDate(d.getDate() + offset);
        d.setHours(0, 0, 0, 0);
        if (!(0,_utils_dateUtils__WEBPACK_IMPORTED_MODULE_8__.isFutureDate)(d))
            setCurrentDate(d);
    };
    var nextDay = function () {
        var n = new Date(currentDate);
        n.setDate(n.getDate() + 1);
        n.setHours(0, 0, 0, 0);
        return n;
    };
    // ─── Row Actions ────────────────────────────────────────────────────────────
    var updateRow = function (rowKey, changes) {
        return setRows(function (prev) { return prev.map(function (r) { return r.rowKey === rowKey ? (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_7__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_7__.__assign)({}, r), changes), { isDirty: true }) : r; }); });
    };
    var addRow = function () { return setRows(function (prev) { return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_7__.__spreadArray)([], prev, true), [emptyRow()], false); }); };
    var deleteRow = function (rowKey, id) {
        if (rows.length === 1)
            return;
        setRows(function (prev) { return prev.filter(function (r) { return r.rowKey !== rowKey; }); });
        if (id)
            setDeletedIds(function (prev) { return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_7__.__spreadArray)([], prev, true), [id], false); });
    };
    var totalHours = rows.reduce(function (s, r) { return s + (r.hoursSpent || 0); }, 0);
    // ─── Save Draft ─────────────────────────────────────────────────────────────
    var handleSaveDraft = function () { return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(void 0, void 0, void 0, function () {
        var baseEntry, updatedRows, _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__generator)(this, function (_b) {
            switch (_b.label) {
                case 0:
                    setSaving(true);
                    setSuccessMessage('');
                    setErrorMessage('');
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, 4, 5]);
                    baseEntry = {
                        employeeId: currentUser.id,
                        employeeName: currentUser.displayName,
                        employeeEmail: currentUser.email,
                        entryDate: currentDate,
                    };
                    return [4 /*yield*/, (0,_services_TimesheetService__WEBPACK_IMPORTED_MODULE_2__.saveDraftEntries)(rows, deletedIds, baseEntry)];
                case 2:
                    updatedRows = _b.sent();
                    setRows(updatedRows);
                    setDeletedIds([]);
                    setDayStatus('Draft');
                    setSuccessMessage('Draft saved successfully.');
                    return [3 /*break*/, 5];
                case 3:
                    _a = _b.sent();
                    setErrorMessage('Failed to save draft. Please try again.');
                    return [3 /*break*/, 5];
                case 4:
                    setSaving(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    // ─── Submit ─────────────────────────────────────────────────────────────────
    var handleSubmit = function () { return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(void 0, void 0, void 0, function () {
        var result, msgs, baseEntry, savedRows, ids, _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__generator)(this, function (_b) {
            switch (_b.label) {
                case 0:
                    setValidationErrors([]);
                    result = (0,_utils_validationUtils__WEBPACK_IMPORTED_MODULE_5__.validateTaskRows)(rows);
                    if (!result.valid) {
                        msgs = result.errors.map(function (e) { return e.message; });
                        if (result.dayTotalError)
                            msgs.push(result.dayTotalError);
                        setValidationErrors(msgs);
                        setSubmitConfirm(false);
                        return [2 /*return*/];
                    }
                    setSaving(true);
                    setSuccessMessage('');
                    setErrorMessage('');
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 4, 5, 6]);
                    baseEntry = {
                        employeeId: currentUser.id,
                        employeeName: currentUser.displayName,
                        employeeEmail: currentUser.email,
                        entryDate: currentDate,
                    };
                    return [4 /*yield*/, (0,_services_TimesheetService__WEBPACK_IMPORTED_MODULE_2__.saveDraftEntries)(rows, deletedIds, baseEntry)];
                case 2:
                    savedRows = _b.sent();
                    ids = savedRows.filter(function (r) { return r.id !== undefined; }).map(function (r) { return r.id; });
                    return [4 /*yield*/, (0,_services_TimesheetService__WEBPACK_IMPORTED_MODULE_2__.submitDayEntries)(ids)];
                case 3:
                    _b.sent();
                    setDayStatus('Submitted');
                    setRows(savedRows.map(function (r) { return ((0,tslib__WEBPACK_IMPORTED_MODULE_7__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_7__.__assign)({}, r), { isDirty: false })); }));
                    setDeletedIds([]);
                    setSuccessMessage('Timesheet submitted successfully.');
                    return [3 /*break*/, 6];
                case 4:
                    _a = _b.sent();
                    setErrorMessage('Failed to submit timesheet. Please try again.');
                    return [3 /*break*/, 6];
                case 5:
                    setSaving(false);
                    setSubmitConfirm(false);
                    return [7 /*endfinally*/];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    // ─── Loading State ──────────────────────────────────────────────────────────
    if (loading) {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].loadingWrap },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].spinner }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Loading timesheet\u2026")));
    }
    // ─── Render ─────────────────────────────────────────────────────────────────
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].container },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].header },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: _DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].homeBtn, title: "Home", onClick: navigateHome },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconHome, null)),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", { className: _DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].title }, "Daily Timesheet")),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].dayNav },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: _DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].navBtn, title: "Previous day", onClick: function () { return changeDate(-1); } },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconLeft, null)),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].dateLabel }, (0,_utils_dateUtils__WEBPACK_IMPORTED_MODULE_8__.formatDateLabel)(currentDate)),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: _DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].navBtn, title: "Next day", onClick: function () { return changeDate(1); }, disabled: (0,_utils_dateUtils__WEBPACK_IMPORTED_MODULE_8__.isFutureDate)(nextDay()) },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconRight, null))),
        dayStatus && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "".concat(_DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].statusBar, " ").concat(statusClass(dayStatus)) },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null,
                "Status: ",
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, dayStatus)),
            dayStatus === 'Rejected' && managerComments && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null,
                " \u2014 Manager: ",
                managerComments)))),
        successMessage && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "".concat(_DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].messageBar, " ").concat(_DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].success) },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconCheck, null),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, successMessage),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: _DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].dismissBtn, onClick: function () { return setSuccessMessage(''); } },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconClose, null)))),
        errorMessage && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "".concat(_DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].messageBar, " ").concat(_DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].error) },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, errorMessage),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: _DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].dismissBtn, onClick: function () { return setErrorMessage(''); } },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconClose, null)))),
        validationErrors.length > 0 && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "".concat(_DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].messageBar, " ").concat(_DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].warning) },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", { className: _DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].validationList }, validationErrors.map(function (e, i) { return react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", { key: i }, e); })))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].tableCard },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].tableWrap },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", { className: _DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].timesheetTable },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null,
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null,
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Project"),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Activity Category"),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", { className: _DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].colDesc }, "Task Description"),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", { className: _DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].colHours }, "Hours"),
                            !isReadOnly && react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", { className: _DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].colDelete }))),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, rows.map(function (row) { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", { key: row.rowKey },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null,
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", { className: _DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].select, disabled: isReadOnly, value: row.projectId, onChange: function (e) {
                                    var _a;
                                    var proj = projects.find(function (p) { return p.id === Number(e.target.value); });
                                    updateRow(row.rowKey, { projectId: Number(e.target.value), projectName: (_a = proj === null || proj === void 0 ? void 0 : proj.title) !== null && _a !== void 0 ? _a : '' });
                                } },
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { value: 0 }, "\u2014 Select project \u2014"),
                                projects.map(function (p) { return react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { key: p.id, value: p.id }, p.title); }))),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null,
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", { className: _DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].select, disabled: isReadOnly, value: row.activityCategoryId, onChange: function (e) {
                                    var _a;
                                    var cat = categories.find(function (c) { return c.id === Number(e.target.value); });
                                    updateRow(row.rowKey, { activityCategoryId: Number(e.target.value), activityCategoryName: (_a = cat === null || cat === void 0 ? void 0 : cat.title) !== null && _a !== void 0 ? _a : '' });
                                } },
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { value: 0 }, "\u2014 Select category \u2014"),
                                categories.map(function (c) { return react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { key: c.id, value: c.id }, c.title); }))),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null,
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("textarea", { className: _DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].textarea, disabled: isReadOnly, rows: 2, value: row.taskDescription, onChange: function (e) { return updateRow(row.rowKey, { taskDescription: e.target.value }); }, placeholder: "Describe the task\u2026" })),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", { className: _DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].tdCenter },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { type: "number", className: _DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].numberInput, disabled: isReadOnly, value: row.hoursSpent, min: 0.25, max: 24, step: 0.25, onChange: function (e) { return updateRow(row.rowKey, { hoursSpent: parseFloat(e.target.value) || 0 }); } })),
                        !isReadOnly && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", { className: _DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].tdCenter },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: _DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].deleteBtn, title: "Remove row", disabled: rows.length === 1, onClick: function () { return deleteRow(row.rowKey, row.id); } },
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconTrash, null)))))); })))),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].totalsRow },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].totalLabel },
                    "Total: ",
                    totalHours.toFixed(2),
                    " hrs"),
                totalHours > 24 && react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].totalExceeds }, "Exceeds 24 hr limit"))),
        !isReadOnly && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].actions },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "".concat(_DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].btn, " ").concat(_DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].btnDefault), onClick: addRow, disabled: saving },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconAdd, null),
                " Add Task"),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "".concat(_DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].btn, " ").concat(_DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].btnDefault), onClick: handleSaveDraft, disabled: saving },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconSave, null),
                " Save Draft"),
            !submitConfirm ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "".concat(_DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].btn, " ").concat(_DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].btnPrimary), onClick: function () { return setSubmitConfirm(true); }, disabled: saving },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconSend, null),
                " Submit")) : (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].confirmRow },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].confirmText },
                    "Submit timesheet for ",
                    (0,_utils_dateUtils__WEBPACK_IMPORTED_MODULE_8__.formatDateLabel)(currentDate),
                    "?"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "".concat(_DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].btn, " ").concat(_DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].btnConfirm), onClick: handleSubmit, disabled: saving },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconCheck, null),
                    " Confirm"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "".concat(_DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].btn, " ").concat(_DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].btnDefault), onClick: function () { return setSubmitConfirm(false); }, disabled: saving }, "Cancel"))))),
        isReadOnly && dayStatus !== 'Approved' && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].readOnlyNotice },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconInfo, null),
            "This timesheet has been submitted and is awaiting review."))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DailyTimesheetForm);


/***/ })

}]);
//# sourceMappingURL=chunk.lib_webparts_timeSheet_views_DailyTimesheetForm_js.js.map