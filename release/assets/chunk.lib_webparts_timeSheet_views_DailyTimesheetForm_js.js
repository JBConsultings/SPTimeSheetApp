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


_node_modules_microsoft_sp_css_loader_node_modules_microsoft_load_themed_styles_lib_es6_index_js__WEBPACK_IMPORTED_MODULE_0__.loadStyles("@charset \"UTF-8\";@keyframes fadeIn_313c27fd{0%{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}@keyframes cardIn_313c27fd{0%{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}@keyframes spin_313c27fd{to{transform:rotate(1turn)}}.page_313c27fd{animation:fadeIn_313c27fd .25s ease both;background:#f8f8fc;color:#161616;display:flex;flex-direction:column;font-family:IBM Plex Sans,Segoe UI,sans-serif;min-height:100vh}.heroHeader_313c27fd{align-items:center;background:linear-gradient(135deg,#667eea,#764ba2);display:flex;flex-shrink:0;gap:14px;overflow:hidden;padding:20px 28px;position:relative}.heroHeader_313c27fd:before{background:radial-gradient(circle at 15% 50%,hsla(0,0%,100%,.18) 0,transparent 55%),radial-gradient(circle at 85% 15%,hsla(0,0%,100%,.12) 0,transparent 50%);content:\"\";inset:0;pointer-events:none;position:absolute}.heroHeader_313c27fd:after{background:hsla(0,0%,100%,.2);bottom:0;content:\"\";height:1px;left:0;position:absolute;right:0}.homeBtn_313c27fd{align-items:center;background:hsla(0,0%,100%,.18);border:1px solid hsla(0,0%,100%,.35);border-radius:8px;color:#fff;cursor:pointer;display:flex;flex-shrink:0;height:36px;justify-content:center;position:relative;transition:background .15s cubic-bezier(.4,0,.2,1),border-color .15s cubic-bezier(.4,0,.2,1);width:36px;z-index:1}.homeBtn_313c27fd:hover{background:hsla(0,0%,100%,.3);border-color:hsla(0,0%,100%,.55)}.heroText_313c27fd{display:flex;flex:1;flex-direction:column;gap:1px;min-width:0;position:relative;z-index:1}.heroLabel_313c27fd{color:hsla(0,0%,100%,.75);font-size:11px;font-weight:600;letter-spacing:.8px;line-height:1.3;text-transform:uppercase}.heroUser_313c27fd{color:#fff;font-size:16px;font-weight:700;letter-spacing:-.2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.heroBadges_313c27fd{align-items:center;display:flex;flex-shrink:0;gap:8px;position:relative;z-index:1}.hoursPill_313c27fd{align-items:baseline;background:hsla(0,0%,100%,.2);border:1.5px solid hsla(0,0%,100%,.35);border-radius:20px;display:inline-flex;gap:4px;padding:4px 12px}.hoursPillNum_313c27fd{color:#fff;font-size:15px;font-variant-numeric:tabular-nums;font-weight:800;letter-spacing:-.3px;line-height:1}.hoursPillLabel_313c27fd{color:hsla(0,0%,100%,.75);font-size:10px;font-weight:700;letter-spacing:.6px;text-transform:uppercase}.hoursPillExceeds_313c27fd{align-items:center;background:#da1e28;border-radius:50%;color:#fff;display:inline-flex;font-size:11px;font-weight:800;height:16px;justify-content:center;margin-left:2px;width:16px}.otPill_313c27fd{background:rgba(255,152,0,.25);border:1.5px solid rgba(255,152,0,.55);border-radius:20px;color:#fff8e1;font-weight:800;padding:4px 11px;white-space:nowrap}.otPill_313c27fd,.statusPill_313c27fd{align-items:center;display:inline-flex;flex-shrink:0;font-size:11px;letter-spacing:.4px}.statusPill_313c27fd{border:1.5px solid transparent;border-radius:20px;font-weight:700;gap:5px;padding:4px 12px;position:relative;text-transform:uppercase;z-index:1}.statusPill_313c27fd.statusDraft_313c27fd{background:rgba(241,194,27,.25);border-color:rgba(241,194,27,.5);color:#fff8d6}.statusPill_313c27fd.statusSubmitted_313c27fd{background:hsla(0,0%,100%,.2);border-color:hsla(0,0%,100%,.4);color:#fff}.statusPill_313c27fd.statusApproved_313c27fd{background:rgba(36,161,72,.3);border-color:rgba(36,161,72,.5);color:#d3fbe8}.statusPill_313c27fd.statusRejected_313c27fd{background:rgba(218,30,40,.3);border-color:rgba(218,30,40,.5);color:#ffd7d9}.dateNav_313c27fd{border-bottom:1px solid #e0e0e0;gap:12px;padding:16px 28px 12px}.dateNav_313c27fd,.navArrow_313c27fd{align-items:center;background:#fff;display:flex;flex-shrink:0}.navArrow_313c27fd{border:1.5px solid #e0e0e0;border-radius:8px;color:#525252;cursor:pointer;height:38px;justify-content:center;transition:background .15s cubic-bezier(.4,0,.2,1),color .15s cubic-bezier(.4,0,.2,1),border-color .15s cubic-bezier(.4,0,.2,1),box-shadow .15s cubic-bezier(.4,0,.2,1);width:38px}.navArrow_313c27fd:hover:not(:disabled){background:linear-gradient(135deg,#667eea,#764ba2);border-color:#667eea;box-shadow:0 2px 8px rgba(102,126,234,.35);color:#fff}.navArrow_313c27fd:disabled{cursor:not-allowed;opacity:.3}.datePill_313c27fd{align-items:center;background:#f4f4f4;border:1.5px solid #e0e0e0;border-radius:12px;box-shadow:0 1px 3px rgba(0,0,0,.08),0 1px 2px rgba(0,0,0,.06);display:flex;flex:1;flex-direction:column;padding:8px 20px}.datePillDay_313c27fd{color:#667eea;font-size:11px;font-weight:700;letter-spacing:1px;line-height:1.2;text-transform:uppercase}.datePillFull_313c27fd{color:#161616;font-size:15px;font-weight:600;letter-spacing:-.2px;line-height:1.3}.messages_313c27fd{display:flex;flex-direction:column;flex-shrink:0;gap:8px;padding:12px 28px 4px}.validList_313c27fd{display:flex;flex-direction:column;gap:2px;list-style:none;margin:0;padding:0}.validList_313c27fd li:before{content:\"• \";font-weight:700}.taskStack_313c27fd{display:flex;flex:1;flex-direction:column;gap:14px;padding:16px 28px}.taskCard_313c27fd{animation:cardIn_313c27fd .2s ease both;background:#fff;border:1.5px solid #e0e0e0;border-radius:12px;box-shadow:0 1px 3px rgba(0,0,0,.08),0 1px 2px rgba(0,0,0,.06);overflow:hidden;position:relative;transition:box-shadow .15s cubic-bezier(.4,0,.2,1)}.taskCard_313c27fd:before{background:linear-gradient(180deg,#667eea,#764ba2);border-radius:12px 0 0 12px;bottom:0;content:\"\";left:0;position:absolute;top:0;width:4px}.taskCard_313c27fd:hover{box-shadow:0 4px 12px rgba(0,0,0,.1),0 2px 4px rgba(0,0,0,.06)}.cardHeader_313c27fd{align-items:center;background:rgba(102,126,234,.5);border-bottom:1px solid hsla(0,0%,88%,.7);display:flex;justify-content:space-between;padding:12px 16px 8px 20px}.cardBadge_313c27fd{align-items:center;display:inline-flex;gap:6px}.cardBadgeDot_313c27fd{background:linear-gradient(135deg,#667eea,#764ba2);border-radius:50%;flex-shrink:0;height:7px;width:7px}.cardBadgeText_313c27fd{color:#667eea;font-size:12px;font-weight:700;letter-spacing:.5px;text-transform:uppercase}.deleteRowBtn_313c27fd{align-items:center;background:#fff1f1;border:1px solid #ffd7d9;border-radius:4px;color:#da1e28;cursor:pointer;display:inline-flex;font-family:inherit;font-size:12px;font-weight:500;gap:5px;padding:4px 10px;transition:background .15s cubic-bezier(.4,0,.2,1),box-shadow .15s cubic-bezier(.4,0,.2,1)}.deleteRowBtn_313c27fd:hover{background:#fdd;box-shadow:0 2px 6px rgba(218,30,40,.2)}.cardFields_313c27fd{display:flex;gap:14px;padding:14px 20px 10px}@media (max-width:600px){.cardFields_313c27fd{flex-direction:column}}.cardFieldHalf_313c27fd{flex:1;min-width:0}.cardFieldFull_313c27fd{padding:0 20px 10px}.cardFooter_313c27fd{align-items:center;display:flex;gap:12px;padding:10px 20px 14px}.hoursLabel_313c27fd{color:#525252;flex-shrink:0;font-size:12px;font-weight:700;letter-spacing:.4px;text-transform:uppercase}.hoursStepper_313c27fd{align-items:center;background:#fff;border:1.5px solid #e0e0e0;border-radius:8px;display:inline-flex;overflow:hidden;transition:border-color .15s cubic-bezier(.4,0,.2,1),box-shadow .15s cubic-bezier(.4,0,.2,1)}.hoursStepper_313c27fd:hover{border-color:#667eea;box-shadow:0 0 0 3px rgba(102,126,234,.1)}.hoursStepper_313c27fd.hoursError_313c27fd{border-color:#da1e28;box-shadow:0 0 0 3px rgba(218,30,40,.12)}.stepBtn_313c27fd{align-items:center;background:#f4f4f4;border:none;color:#525252;cursor:pointer;display:flex;flex-shrink:0;height:32px;justify-content:center;transition:background .15s cubic-bezier(.4,0,.2,1),color .15s cubic-bezier(.4,0,.2,1);width:32px}.stepBtn_313c27fd:hover:not(:disabled){background:linear-gradient(135deg,#667eea,#764ba2);color:#fff}.stepBtn_313c27fd:disabled{cursor:not-allowed;opacity:.35}.hoursValue_313c27fd{background:#fff;color:#161616;font-size:14px;font-variant-numeric:tabular-nums;font-weight:700;line-height:32px;min-width:52px;padding:0 8px;text-align:center}.hoursErrMsg_313c27fd{color:#da1e28;font-size:11px;font-weight:500}.addTaskBtn_313c27fd{align-items:center;background:transparent;border:2px dashed rgba(102,126,234,.35);border-radius:12px;color:#667eea;cursor:pointer;display:flex;font-family:inherit;font-size:13.5px;font-weight:600;gap:8px;justify-content:center;padding:14px;transition:background .15s cubic-bezier(.4,0,.2,1),border-color .15s cubic-bezier(.4,0,.2,1),box-shadow .15s cubic-bezier(.4,0,.2,1);width:100%}.addTaskBtn_313c27fd:hover:not(:disabled){background:rgba(102,126,234,.08);border-color:rgba(102,126,234,.6);box-shadow:inset 0 0 0 1px rgba(102,126,234,.15)}.addTaskBtn_313c27fd:disabled{cursor:not-allowed;opacity:.4}.addTaskIcon_313c27fd{background:rgba(102,126,234,.08);border-radius:50%;color:#667eea;height:22px;justify-content:center;width:22px}.addTaskIcon_313c27fd,.footerBar_313c27fd{align-items:center;display:flex;flex-shrink:0}.footerBar_313c27fd{background:#fff;border-top:1.5px solid #e0e0e0;box-shadow:0 -4px 16px rgba(0,0,0,.06);flex-wrap:wrap;gap:16px;padding:14px 28px}.footerTotal_313c27fd{align-items:baseline;display:flex;flex-shrink:0;gap:6px}.footerTotalNum_313c27fd{color:#161616;font-size:26px;font-variant-numeric:tabular-nums;font-weight:800;letter-spacing:-.5px;line-height:1}.footerTotalLabel_313c27fd{color:#8d8d8d;font-size:12px;font-weight:600;letter-spacing:.5px;text-transform:uppercase}.footerExceeds_313c27fd{align-items:center;background:#fff1f1;border:1px solid #ffd7d9;border-radius:20px;color:#da1e28;display:inline-flex;font-size:11px;font-weight:700;margin-left:4px;padding:2px 10px}.footerActions_313c27fd{gap:8px;margin-left:auto}.confirmBar_313c27fd,.footerActions_313c27fd{align-items:center;display:flex;flex-wrap:wrap}.confirmBar_313c27fd{background:#fdf6d8;border:1.5px solid #f5d73b;border-radius:8px;gap:10px;padding:10px 16px}.confirmText_313c27fd{color:#4b3800;flex:1;font-size:13px;font-weight:500;min-width:160px}.loadingWrap_313c27fd{align-items:center;background:#f8f8fc;color:#525252;display:flex;flex-direction:column;font-family:IBM Plex Sans,Segoe UI,sans-serif;font-size:14px;gap:16px;justify-content:center;min-height:300px}", true);

// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  fadeIn: "fadeIn_313c27fd",
  heroHeader: "heroHeader_313c27fd",
  homeBtn: "homeBtn_313c27fd",
  heroText: "heroText_313c27fd",
  heroLabel: "heroLabel_313c27fd",
  heroUser: "heroUser_313c27fd",
  heroBadges: "heroBadges_313c27fd",
  hoursPill: "hoursPill_313c27fd",
  hoursPillNum: "hoursPillNum_313c27fd",
  hoursPillLabel: "hoursPillLabel_313c27fd",
  hoursPillExceeds: "hoursPillExceeds_313c27fd",
  otPill: "otPill_313c27fd",
  statusPill: "statusPill_313c27fd",
  statusDraft: "statusDraft_313c27fd",
  statusSubmitted: "statusSubmitted_313c27fd",
  statusApproved: "statusApproved_313c27fd",
  statusRejected: "statusRejected_313c27fd",
  dateNav: "dateNav_313c27fd",
  navArrow: "navArrow_313c27fd",
  datePill: "datePill_313c27fd",
  datePillDay: "datePillDay_313c27fd",
  datePillFull: "datePillFull_313c27fd",
  messages: "messages_313c27fd",
  validList: "validList_313c27fd",
  taskStack: "taskStack_313c27fd",
  taskCard: "taskCard_313c27fd",
  cardIn: "cardIn_313c27fd",
  cardHeader: "cardHeader_313c27fd",
  cardBadge: "cardBadge_313c27fd",
  cardBadgeDot: "cardBadgeDot_313c27fd",
  cardBadgeText: "cardBadgeText_313c27fd",
  deleteRowBtn: "deleteRowBtn_313c27fd",
  cardFields: "cardFields_313c27fd",
  cardFieldHalf: "cardFieldHalf_313c27fd",
  cardFieldFull: "cardFieldFull_313c27fd",
  cardFooter: "cardFooter_313c27fd",
  hoursLabel: "hoursLabel_313c27fd",
  hoursStepper: "hoursStepper_313c27fd",
  hoursError: "hoursError_313c27fd",
  stepBtn: "stepBtn_313c27fd",
  hoursValue: "hoursValue_313c27fd",
  hoursErrMsg: "hoursErrMsg_313c27fd",
  addTaskBtn: "addTaskBtn_313c27fd",
  addTaskIcon: "addTaskIcon_313c27fd",
  footerBar: "footerBar_313c27fd",
  footerTotal: "footerTotal_313c27fd",
  footerTotalNum: "footerTotalNum_313c27fd",
  footerTotalLabel: "footerTotalLabel_313c27fd",
  footerExceeds: "footerExceeds_313c27fd",
  footerActions: "footerActions_313c27fd",
  confirmBar: "confirmBar_313c27fd",
  confirmText: "confirmText_313c27fd",
  loadingWrap: "loadingWrap_313c27fd",
  spin: "spin_313c27fd",
  page: "page_313c27fd"
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 10196);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 85959);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fluentui/react */ 46643);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fluentui/react */ 80954);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fluentui/react */ 49885);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fluentui/react */ 63208);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fluentui/react */ 12042);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @fluentui/react */ 67102);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @fluentui/react */ 5613);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @fluentui/react */ 29425);
/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/AppContext */ 24770);
/* harmony import */ var _services_TimesheetService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/TimesheetService */ 30264);
/* harmony import */ var _services_ProjectService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/ProjectService */ 15607);
/* harmony import */ var _services_CategoryService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/CategoryService */ 64268);
/* harmony import */ var _utils_dateUtils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/dateUtils */ 28613);
/* harmony import */ var _utils_validationUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/validationUtils */ 54796);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/constants */ 47293);
/* harmony import */ var _utils_fmt__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../utils/fmt */ 27583);
/* harmony import */ var TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! TimeSheetWebPartStrings */ 31339);
/* harmony import */ var TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DailyTimesheetForm.module.scss */ 67002);














var rowCounter = 0;
function newRowKey() { return "row-".concat(++rowCounter); }
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
// ─── SVG Icons ────────────────────────────────────────────────────────────────
var IconHome = function () { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "currentColor" },
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M8 1L1 7h2v7h4v-4h2v4h4V7h2L8 1z" }))); };
var IconLeft = function () { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { width: "18", height: "18", viewBox: "0 0 18 18", fill: "none" },
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M11 4L6 9l5 5", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }))); };
var IconRight = function () { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { width: "18", height: "18", viewBox: "0 0 18 18", fill: "none" },
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M7 4l5 5-5 5", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }))); };
var IconTrash = function () { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { width: "15", height: "15", viewBox: "0 0 14 14", fill: "currentColor" },
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M2 4h10M5 4V2h4v2M6 6v5M8 6v5M3 4l1 8h6l1-8", stroke: "currentColor", strokeWidth: "1.3", fill: "none", strokeLinecap: "round" }))); };
var IconPlus = function () { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { width: "15", height: "15", viewBox: "0 0 14 14", fill: "currentColor" },
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M7 1v12M1 7h12", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }))); };
var IconMinus = function () { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { width: "15", height: "15", viewBox: "0 0 14 14", fill: "currentColor" },
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M1 7h12", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }))); };
// ─── Status config ────────────────────────────────────────────────────────────
function statusBarType(status) {
    if (status === 'Approved')
        return _fluentui_react__WEBPACK_IMPORTED_MODULE_9__.MessageBarType.success;
    if (status === 'Submitted')
        return _fluentui_react__WEBPACK_IMPORTED_MODULE_9__.MessageBarType.info;
    if (status === 'Rejected')
        return _fluentui_react__WEBPACK_IMPORTED_MODULE_9__.MessageBarType.error;
    return _fluentui_react__WEBPACK_IMPORTED_MODULE_9__.MessageBarType.warning;
}
function statusLabel(status) {
    if (status === 'Approved')
        return TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_7__.StatusApproved;
    if (status === 'Submitted')
        return TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_7__.StatusSubmitted;
    if (status === 'Rejected')
        return TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_7__.StatusRejected;
    return TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_7__.StatusDraft;
}
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
var DailyTimesheetForm = function (_a) {
    var selectedDate = _a.selectedDate;
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_AppContext__WEBPACK_IMPORTED_MODULE_1__.AppContext), currentUser = _b.currentUser, navigateHome = _b.navigateHome, navigateTo = _b.navigateTo;
    var _c = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function () {
        var d = new Date(selectedDate);
        d.setHours(0, 0, 0, 0);
        return d;
    }), currentDate = _c[0], setCurrentDate = _c[1];
    var _d = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([emptyRow()]), rows = _d[0], setRows = _d[1];
    var _f = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]), deletedIds = _f[0], setDeletedIds = _f[1];
    var _g = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]), projects = _g[0], setProjects = _g[1];
    var _h = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]), categories = _h[0], setCategories = _h[1];
    var _j = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true), loading = _j[0], setLoading = _j[1];
    var _k = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), saving = _k[0], setSaving = _k[1];
    var _l = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), submitConfirm = _l[0], setSubmitConfirm = _l[1];
    var _m = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null), dayStatus = _m[0], setDayStatus = _m[1];
    var _o = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''), managerComments = _o[0], setManagerComments = _o[1];
    var _p = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''), successMessage = _p[0], setSuccessMessage = _p[1];
    var _q = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''), errorMessage = _q[0], setErrorMessage = _q[1];
    var _r = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]), validationErrors = _r[0], setValidationErrors = _r[1];
    var _s = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}), rowErrors = _s[0], setRowErrors = _s[1];
    var isReadOnly = dayStatus === 'Submitted' || dayStatus === 'Approved';
    // ─── Data Loading ─────────────────────────────────────────────────────────
    var loadData = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (date) { return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(void 0, void 0, void 0, function () {
        var _a, entries, projs, cats, _b;
        var _c;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__generator)(this, function (_d) {
            switch (_d.label) {
                case 0:
                    setLoading(true);
                    setSuccessMessage('');
                    setErrorMessage('');
                    setValidationErrors([]);
                    setRowErrors({});
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
                    setErrorMessage(TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_7__.LoadFailed);
                    return [3 /*break*/, 5];
                case 4:
                    setLoading(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); }, [currentUser.email]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () { void loadData(currentDate); }, [currentDate, loadData]);
    // ─── Navigation ───────────────────────────────────────────────────────────
    var changeDate = function (offset) {
        var d = new Date(currentDate);
        d.setDate(d.getDate() + offset);
        d.setHours(0, 0, 0, 0);
        if (!(0,_utils_dateUtils__WEBPACK_IMPORTED_MODULE_11__.isFutureDate)(d)) {
            setCurrentDate(d);
            navigateTo('DailyForm', { selectedDate: d });
        }
    };
    var nextDay = function () {
        var n = new Date(currentDate);
        n.setDate(n.getDate() + 1);
        n.setHours(0, 0, 0, 0);
        return n;
    };
    // ─── Row Actions ──────────────────────────────────────────────────────────
    var updateRow = function (rowKey, changes) {
        setRows(function (prev) { return prev.map(function (r) { return r.rowKey === rowKey ? (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_10__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_10__.__assign)({}, r), changes), { isDirty: true }) : r; }); });
        var changedFields = Object.keys(changes);
        setRowErrors(function (prev) {
            var _a;
            if (!prev[rowKey])
                return prev;
            var rowErrs = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__assign)({}, prev[rowKey]);
            changedFields.forEach(function (f) { delete rowErrs[f]; });
            if (Object.keys(rowErrs).length === 0) {
                var next = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__assign)({}, prev);
                delete next[rowKey];
                return next;
            }
            return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_10__.__assign)({}, prev), (_a = {}, _a[rowKey] = rowErrs, _a));
        });
    };
    var addRow = function () { return setRows(function (prev) { return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_10__.__spreadArray)([], prev, true), [emptyRow()], false); }); };
    var deleteRow = function (rowKey, id) {
        if (rows.length === 1)
            return;
        setRows(function (prev) { return prev.filter(function (r) { return r.rowKey !== rowKey; }); });
        if (id)
            setDeletedIds(function (prev) { return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_10__.__spreadArray)([], prev, true), [id], false); });
    };
    var adjustHours = function (rowKey, current, delta) {
        var next = parseFloat(Math.max(0.25, Math.min(24, current + delta)).toFixed(2));
        updateRow(rowKey, { hoursSpent: next });
    };
    var totalHours = rows.reduce(function (s, r) { return s + (r.hoursSpent || 0); }, 0);
    // ─── Save Draft ───────────────────────────────────────────────────────────
    var handleSaveDraft = function () { return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(void 0, void 0, void 0, function () {
        var result, newRowErrors_1, msgs, baseEntry, updatedRows, _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__generator)(this, function (_b) {
            switch (_b.label) {
                case 0:
                    result = (0,_utils_validationUtils__WEBPACK_IMPORTED_MODULE_5__.validateTaskRows)(rows);
                    if (!result.valid) {
                        newRowErrors_1 = {};
                        result.errors.forEach(function (e) {
                            if (!newRowErrors_1[e.rowKey])
                                newRowErrors_1[e.rowKey] = {};
                            newRowErrors_1[e.rowKey][e.field] = true;
                        });
                        setRowErrors(newRowErrors_1);
                        msgs = result.errors.map(function (e) { return e.message; });
                        if (result.dayTotalError)
                            msgs.push(result.dayTotalError);
                        setValidationErrors(msgs);
                        return [2 /*return*/];
                    }
                    setRowErrors({});
                    setValidationErrors([]);
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
                    setSuccessMessage(TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_7__.SaveDraftSuccess);
                    return [3 /*break*/, 5];
                case 3:
                    _a = _b.sent();
                    setErrorMessage(TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_7__.SaveDraftFailed);
                    return [3 /*break*/, 5];
                case 4:
                    setSaving(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    // ─── Submit ───────────────────────────────────────────────────────────────
    var handleSubmit = function () { return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(void 0, void 0, void 0, function () {
        var result, msgs, baseEntry, savedRows, ids, _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__generator)(this, function (_b) {
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
                    setRows(savedRows.map(function (r) { return ((0,tslib__WEBPACK_IMPORTED_MODULE_10__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_10__.__assign)({}, r), { isDirty: false })); }));
                    setDeletedIds([]);
                    setSuccessMessage(TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_7__.SubmitSuccess);
                    return [3 /*break*/, 6];
                case 4:
                    _a = _b.sent();
                    setErrorMessage(TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_7__.SubmitFailed);
                    return [3 /*break*/, 6];
                case 5:
                    setSaving(false);
                    setSubmitConfirm(false);
                    return [7 /*endfinally*/];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    // ─── Dropdown options ─────────────────────────────────────────────────────
    var projectOptions = projects.map(function (p) { return ({ key: p.id, text: p.title }); });
    var categoryOptions = categories.map(function (c) { return ({ key: c.id, text: c.title }); });
    // ─── Loading ──────────────────────────────────────────────────────────────
    if (loading) {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].loadingWrap },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_12__.Spinner, { size: _fluentui_react__WEBPACK_IMPORTED_MODULE_13__.SpinnerSize.large, label: "".concat(TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_7__.Loading, "\u2026") })));
    }
    // ─── Date parts for display ───────────────────────────────────────────────
    var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var dayOfWeek = dayNames[currentDate.getDay()];
    var dateDisplay = (0,_utils_dateUtils__WEBPACK_IMPORTED_MODULE_11__.formatDateLabel)(currentDate);
    // ─── Render ───────────────────────────────────────────────────────────────
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].page },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].heroHeader },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: _DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].homeBtn, title: TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_7__.Home, onClick: navigateHome },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconHome, null)),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].heroText },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].heroLabel }, TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_7__.DailyTimesheetTitle),
                currentUser.displayName && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].heroUser }, currentUser.displayName))),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].heroBadges },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].hoursPill },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].hoursPillNum }, totalHours.toFixed(2)),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].hoursPillLabel }, TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_7__.Hrs),
                    totalHours > 24 && react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].hoursPillExceeds }, "!")),
                totalHours > _utils_constants__WEBPACK_IMPORTED_MODULE_6__.REGULAR_HOURS_PER_DAY && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].otPill, title: "".concat((totalHours - _utils_constants__WEBPACK_IMPORTED_MODULE_6__.REGULAR_HOURS_PER_DAY).toFixed(2), " hrs overtime") },
                    "OT +",
                    (totalHours - _utils_constants__WEBPACK_IMPORTED_MODULE_6__.REGULAR_HOURS_PER_DAY).toFixed(2),
                    "h")),
                dayStatus && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "".concat(_DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].statusPill, " ").concat(_DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"]["status".concat(dayStatus)]) }, statusLabel(dayStatus))))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].dateNav },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: _DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].navArrow, title: TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_7__.PreviousDay, onClick: function () { return changeDate(-1); } },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconLeft, null)),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].datePill },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].datePillDay }, dayOfWeek),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].datePillFull }, dateDisplay)),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: _DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].navArrow, title: TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_7__.NextDay, onClick: function () { return changeDate(1); }, disabled: (0,_utils_dateUtils__WEBPACK_IMPORTED_MODULE_11__.isFutureDate)(nextDay()) },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconRight, null))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].messages },
            successMessage && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_14__.MessageBar, { messageBarType: _fluentui_react__WEBPACK_IMPORTED_MODULE_9__.MessageBarType.success, isMultiline: false, onDismiss: function () { return setSuccessMessage(''); }, dismissButtonAriaLabel: TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_7__.Close }, successMessage)),
            errorMessage && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_14__.MessageBar, { messageBarType: _fluentui_react__WEBPACK_IMPORTED_MODULE_9__.MessageBarType.error, isMultiline: false, onDismiss: function () { return setErrorMessage(''); }, dismissButtonAriaLabel: TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_7__.Close }, errorMessage)),
            validationErrors.length > 0 && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_14__.MessageBar, { messageBarType: _fluentui_react__WEBPACK_IMPORTED_MODULE_9__.MessageBarType.warning, isMultiline: true, onDismiss: function () { return setValidationErrors([]); }, dismissButtonAriaLabel: TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_7__.Close },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", { className: _DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].validList }, validationErrors.map(function (e, i) { return react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", { key: i }, e); })))),
            dayStatus === 'Rejected' && managerComments && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_14__.MessageBar, { messageBarType: _fluentui_react__WEBPACK_IMPORTED_MODULE_9__.MessageBarType.error, isMultiline: true },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null,
                    TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_7__.ManagerCommentLabel,
                    ":"),
                " ",
                managerComments)),
            isReadOnly && dayStatus !== 'Approved' && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_14__.MessageBar, { messageBarType: _fluentui_react__WEBPACK_IMPORTED_MODULE_9__.MessageBarType.info, isMultiline: false }, TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_7__.SubmittedAwaitingReview))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].taskStack },
            rows.map(function (row, idx) {
                var rErr = rowErrors[row.rowKey] || {};
                return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { key: row.rowKey, className: _DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].taskCard, style: { animationDelay: "".concat(idx * 40, "ms") } },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].cardHeader },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].cardBadge },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].cardBadgeDot }),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].cardBadgeText }, (0,_utils_fmt__WEBPACK_IMPORTED_MODULE_15__.fmt)(TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_7__.TaskLabel, { n: idx + 1 }))),
                        !isReadOnly && rows.length > 1 && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: _DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].deleteRowBtn, title: TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_7__.RemoveRow, onClick: function () { return deleteRow(row.rowKey, row.id); } },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconTrash, null),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_7__.Delete)))),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].cardFields },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].cardFieldHalf },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_16__.Dropdown, { label: TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_7__.Project, placeholder: TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_7__.SelectProjectOpt, selectedKey: row.projectId || null, options: projectOptions, disabled: isReadOnly, errorMessage: rErr.projectId ? 'Project is required.' : undefined, onChange: function (_e, opt) {
                                    var _a;
                                    var proj = projects.find(function (p) { return p.id === Number(opt === null || opt === void 0 ? void 0 : opt.key); });
                                    updateRow(row.rowKey, { projectId: Number(opt === null || opt === void 0 ? void 0 : opt.key) || 0, projectName: (_a = proj === null || proj === void 0 ? void 0 : proj.title) !== null && _a !== void 0 ? _a : '' });
                                }, styles: {
                                    dropdown: { borderRadius: 6 },
                                    title: { borderRadius: 6, fontSize: 13 },
                                    label: { fontSize: 12, fontWeight: 600, color: '#525252' },
                                } })),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].cardFieldHalf },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_16__.Dropdown, { label: TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_7__.ActivityCategory, placeholder: TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_7__.SelectCategoryOpt, selectedKey: row.activityCategoryId || null, options: categoryOptions, disabled: isReadOnly, errorMessage: rErr.activityCategoryId ? 'Category is required.' : undefined, onChange: function (_e, opt) {
                                    var _a;
                                    var cat = categories.find(function (c) { return c.id === Number(opt === null || opt === void 0 ? void 0 : opt.key); });
                                    updateRow(row.rowKey, { activityCategoryId: Number(opt === null || opt === void 0 ? void 0 : opt.key) || 0, activityCategoryName: (_a = cat === null || cat === void 0 ? void 0 : cat.title) !== null && _a !== void 0 ? _a : '' });
                                }, styles: {
                                    dropdown: { borderRadius: 6 },
                                    title: { borderRadius: 6, fontSize: 13 },
                                    label: { fontSize: 12, fontWeight: 600, color: '#525252' },
                                } }))),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].cardFieldFull },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_17__.TextField, { label: TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_7__.TaskDescription, multiline: true, rows: 2, resizable: false, disabled: isReadOnly, value: row.taskDescription, placeholder: TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_7__.DescribePlaceholder, errorMessage: rErr.taskDescription ? 'Description is required.' : undefined, onChange: function (_e, val) { return updateRow(row.rowKey, { taskDescription: val || '' }); }, styles: {
                                field: { fontSize: 13, borderRadius: 6 },
                                fieldGroup: { borderRadius: 6 },
                                subComponentStyles: { label: { root: { fontSize: 12, fontWeight: 600, color: '#525252' } } },
                            } })),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].cardFooter },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].hoursLabel }, TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_7__.Hours),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "".concat(_DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].hoursStepper, " ").concat(rErr.hoursSpent ? _DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].hoursError : '') },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: _DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].stepBtn, disabled: isReadOnly || row.hoursSpent <= 0.25, onClick: function () { return adjustHours(row.rowKey, row.hoursSpent, -0.25); } },
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconMinus, null)),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].hoursValue }, (row.hoursSpent || 0).toFixed(2)),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: _DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].stepBtn, disabled: isReadOnly || row.hoursSpent >= 24, onClick: function () { return adjustHours(row.rowKey, row.hoursSpent, 0.25); } },
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconPlus, null))),
                        rErr.hoursSpent && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].hoursErrMsg }, "Min 0.25 hrs required")))));
            }),
            !isReadOnly && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: _DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].addTaskBtn, onClick: addRow, disabled: saving },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].addTaskIcon },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconPlus, null)),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_7__.AddTask)))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].footerBar }, !isReadOnly && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].footerActions }, !submitConfirm ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_18__.DefaultButton, { text: TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_7__.SaveDraft, iconProps: { iconName: 'Save' }, disabled: saving || totalHours > 24, onClick: handleSaveDraft, styles: defaultBtnStyles }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_19__.PrimaryButton, { text: saving ? TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_7__.Saving : TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_7__.Submit, iconProps: { iconName: 'Send' }, disabled: saving || totalHours > 24, onRenderIcon: saving ? function () { return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_12__.Spinner, { size: _fluentui_react__WEBPACK_IMPORTED_MODULE_13__.SpinnerSize.small }); } : undefined, onClick: function () {
                    var result = (0,_utils_validationUtils__WEBPACK_IMPORTED_MODULE_5__.validateTaskRows)(rows);
                    if (!result.valid) {
                        var newRowErrors_2 = {};
                        result.errors.forEach(function (e) {
                            if (!newRowErrors_2[e.rowKey])
                                newRowErrors_2[e.rowKey] = {};
                            newRowErrors_2[e.rowKey][e.field] = true;
                        });
                        setRowErrors(newRowErrors_2);
                        var msgs = result.errors.map(function (e) { return e.message; });
                        if (result.dayTotalError)
                            msgs.push(result.dayTotalError);
                        setValidationErrors(msgs);
                        return;
                    }
                    setRowErrors({});
                    setValidationErrors([]);
                    setSubmitConfirm(true);
                }, styles: primaryBtnStyles }))) : (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].confirmBar },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _DailyTimesheetForm_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].confirmText }, (0,_utils_fmt__WEBPACK_IMPORTED_MODULE_15__.fmt)(TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_7__.ConfirmSubmitDate, { date: (0,_utils_dateUtils__WEBPACK_IMPORTED_MODULE_11__.formatDateLabel)(currentDate) })),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_19__.PrimaryButton, { text: saving ? TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_7__.Saving : TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_7__.Confirm, iconProps: { iconName: 'CheckMark' }, disabled: saving, onClick: handleSubmit, styles: primaryBtnStyles }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_18__.DefaultButton, { text: TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_7__.Cancel, disabled: saving, onClick: function () { return setSubmitConfirm(false); }, styles: defaultBtnStyles }))))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DailyTimesheetForm);


/***/ })

}]);
//# sourceMappingURL=chunk.lib_webparts_timeSheet_views_DailyTimesheetForm_js.js.map