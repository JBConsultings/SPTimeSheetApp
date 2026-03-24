"use strict";
(self["webpackJsonp_c7e5e177-9baf-42a9-91c9-2ea9fecc19a8_0.0.1"] = self["webpackJsonp_c7e5e177-9baf-42a9-91c9-2ea9fecc19a8_0.0.1"] || []).push([["lib_webparts_timeSheet_views_ExportPanel_js"],{

/***/ 98529:
/*!******************************************************************!*\
  !*** ./lib/webparts/timeSheet/views/ExportPanel.module.scss.css ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_microsoft_sp_css_loader_node_modules_microsoft_load_themed_styles_lib_es6_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/@microsoft/sp-css-loader/node_modules/@microsoft/load-themed-styles/lib-es6/index.js */ 96323);
// Imports


_node_modules_microsoft_sp_css_loader_node_modules_microsoft_load_themed_styles_lib_es6_index_js__WEBPACK_IMPORTED_MODULE_0__.loadStyles(".container_31812b4d{animation:fadeIn_31812b4d .25s ease both;color:#161616;font-family:IBM Plex Sans,Segoe UI,sans-serif;padding:32px}@keyframes fadeIn_31812b4d{0%{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}.header_31812b4d{align-items:center;background:linear-gradient(135deg,#667eea,#764ba2);display:flex;gap:12px;margin:-32px -32px 28px;overflow:hidden;padding:24px 32px;position:relative}.header_31812b4d:before{background:radial-gradient(circle at 20% 50%,hsla(0,0%,100%,.15) 0,transparent 50%),radial-gradient(circle at 80% 20%,hsla(0,0%,100%,.1) 0,transparent 50%);content:\"\";inset:0;pointer-events:none;position:absolute}.header_31812b4d .homeBtn_31812b4d{align-items:center;background:hsla(0,0%,100%,.15);border:1px solid hsla(0,0%,100%,.3);border-radius:8px;color:#fff;cursor:pointer;display:flex;flex-shrink:0;height:36px;justify-content:center;position:relative;transition:background .15s cubic-bezier(.4,0,.2,1);width:36px;z-index:1}.header_31812b4d .homeBtn_31812b4d:hover{background:hsla(0,0%,100%,.28)}.header_31812b4d .title_31812b4d{color:#fff;font-size:22px;font-weight:700;letter-spacing:-.3px;margin:0;position:relative;text-shadow:0 1px 2px rgba(0,0,0,.1);z-index:1}.filterCard_31812b4d{background:#fff;border:1px solid #e0e0e0;border-radius:12px;box-shadow:0 1px 3px rgba(0,0,0,.08),0 1px 2px rgba(0,0,0,.06);margin-bottom:24px;padding:20px 24px}.filterTitle_31812b4d{color:#8d8d8d;font-size:12px;font-weight:700;letter-spacing:.5px;margin:0 0 16px;text-transform:uppercase}.filterRow_31812b4d{display:flex;flex-wrap:wrap;gap:16px;margin-bottom:14px}.filterGroup_31812b4d{display:flex;flex:1;flex-direction:column;gap:5px;min-width:150px}.filterGroup_31812b4d label{color:#525252;font-size:11.5px;font-weight:600;letter-spacing:.4px;text-transform:uppercase}.filterGroup_31812b4d label .optional_31812b4d{color:#8d8d8d;font-size:11px;font-weight:400;letter-spacing:0;margin-left:4px;text-transform:none}.filterGroupFull_31812b4d{flex-basis:100%}.filterInput_31812b4d,.filterSelect_31812b4d{background:#f4f4f4;border:1px solid #e0e0e0;border-radius:4px;box-sizing:border-box;color:#161616;font-family:inherit;font-size:13.5px;height:36px;outline:none;padding:0 10px;transition:border-color .15s cubic-bezier(.4,0,.2,1),box-shadow .15s cubic-bezier(.4,0,.2,1),background .15s cubic-bezier(.4,0,.2,1);width:100%}.filterInput_31812b4d:focus,.filterSelect_31812b4d:focus{background:#fff;border-color:#667eea;box-shadow:0 0 0 3px rgba(15,98,254,.15)}.filterInput_31812b4d:-ms-input-placeholder, .filterSelect_31812b4d:-ms-input-placeholder{color:#8d8d8d}.filterInput_31812b4d::placeholder,.filterSelect_31812b4d::placeholder{color:#8d8d8d}.filterSelect_31812b4d{appearance:none;background-color:#f4f4f4;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8'%3E%3Cpath fill='%23525252' d='m1 1 5 5 5-5'/%3E%3C/svg%3E\");background-position:right 10px center;background-repeat:no-repeat;cursor:pointer;padding-right:28px}.messageBar_31812b4d{align-items:center;border:1px solid transparent;border-radius:8px;display:flex;font-size:13.5px;gap:10px;margin-bottom:16px;max-width:680px;padding:10px 16px}.messageBar_31812b4d.success_31812b4d{background:#defbe6;border-color:#a7f0ba;color:#044317}.messageBar_31812b4d.error_31812b4d{background:#fff1f1;border-color:#ffd7d9;color:#750e13}.messageBar_31812b4d .dismissBtn_31812b4d{align-items:center;background:none;border:none;color:inherit;cursor:pointer;display:flex;margin-left:auto;opacity:.6;padding:2px 4px}.messageBar_31812b4d .dismissBtn_31812b4d:hover{opacity:1}.btn_31812b4d{align-items:center;border:1px solid #e0e0e0;border-radius:8px;cursor:pointer;display:inline-flex;font-family:inherit;font-size:13.5px;font-weight:500;gap:7px;outline:none;padding:8px 16px;transition:background .15s cubic-bezier(.4,0,.2,1),box-shadow .15s cubic-bezier(.4,0,.2,1),border-color .15s cubic-bezier(.4,0,.2,1),color .15s cubic-bezier(.4,0,.2,1);white-space:nowrap}.btn_31812b4d:disabled{cursor:not-allowed;opacity:.4}.btn_31812b4d.btnDefault_31812b4d{background:#fff;color:#161616}.btn_31812b4d.btnDefault_31812b4d:hover:not(:disabled){background:#f4f4f4;border-color:#c6c6c6;box-shadow:0 1px 3px rgba(0,0,0,.08),0 1px 2px rgba(0,0,0,.06)}.btn_31812b4d.btnExcel_31812b4d{background:#107c41;border-color:#107c41;color:#fff}.btn_31812b4d.btnExcel_31812b4d:hover:not(:disabled){background:#0b582e;border-color:#0b582e;box-shadow:0 4px 12px rgba(16,124,65,.35)}.btn_31812b4d.btnPdf_31812b4d{background:#da1e28;border-color:#da1e28;color:#fff}.btn_31812b4d.btnPdf_31812b4d:hover:not(:disabled){background:#b61921;border-color:#b61921;box-shadow:0 4px 12px rgba(218,30,40,.3)}.loadingWrap_31812b4d{align-items:center;color:#525252;display:flex;font-size:14px;gap:12px;padding:24px 0}.spinner_31812b4d{animation:spin_31812b4d .7s linear infinite;border:3px solid #e0e0e0;border-radius:50%;border-top-color:#667eea;flex-shrink:0;height:28px;width:28px}.spinnerSm_31812b4d{border:2px solid hsla(0,0%,100%,.4);border-radius:50%;border-top-color:#fff}.spinnerSmDark_31812b4d,.spinnerSm_31812b4d{animation:spin_31812b4d .7s linear infinite;flex-shrink:0;height:16px;width:16px}.spinnerSmDark_31812b4d{border:2px solid #e0e0e0;border-radius:50%;border-top-color:#667eea}@keyframes spin_31812b4d{to{transform:rotate(1turn)}}.resultsSection_31812b4d{animation:fadeIn_31812b4d .2s ease both}.summaryStrip_31812b4d{background:#fff;border:1px solid #e0e0e0;border-radius:8px;box-shadow:0 1px 3px rgba(0,0,0,.08),0 1px 2px rgba(0,0,0,.06);display:flex;flex-wrap:wrap;gap:0;margin-bottom:16px;overflow:hidden}.summaryItem_31812b4d{border-right:1px solid #e0e0e0;display:flex;flex:1;flex-direction:column;gap:4px;min-width:140px;padding:14px 20px}.summaryItem_31812b4d:last-child{border-right:none}.summaryItem_31812b4d .summaryLabel_31812b4d{color:#8d8d8d;font-size:11px;font-weight:600;letter-spacing:.5px;text-transform:uppercase}.summaryItem_31812b4d .summaryValue_31812b4d{color:#161616;font-size:20px;font-variant-numeric:tabular-nums;font-weight:700;line-height:1.2}.summaryItem_31812b4d .summaryValueSm_31812b4d{color:#161616;font-size:14px;font-weight:600;line-height:1.4}.exportBar_31812b4d{align-items:center;display:flex;flex-wrap:wrap;gap:10px;margin-bottom:20px}.emptyState_31812b4d{align-items:center;border:1px dashed #e0e0e0;border-radius:12px;color:#8d8d8d;display:flex;flex-direction:column;gap:10px;justify-content:center;padding:48px 24px;text-align:center}.emptyState_31812b4d .emptyTitle_31812b4d{color:#525252;font-size:15px;font-weight:600}.emptyState_31812b4d .emptySubtitle_31812b4d{font-size:13px}.tableCard_31812b4d{border:1px solid #e0e0e0;border-radius:12px;box-shadow:0 4px 12px rgba(0,0,0,.1),0 2px 4px rgba(0,0,0,.06);overflow:hidden}.tableWrap_31812b4d{max-height:420px;overflow-x:auto;overflow-y:auto}.tableWrap_31812b4d::-webkit-scrollbar{height:6px;width:6px}.tableWrap_31812b4d::-webkit-scrollbar-track{background:#f4f4f4}.tableWrap_31812b4d::-webkit-scrollbar-thumb{background:#c6c6c6;border-radius:3px}.tableWrap_31812b4d::-webkit-scrollbar-thumb:hover{background:#a8a8a8}.previewTable_31812b4d{border-collapse:collapse;font-size:13px;width:100%}.previewTable_31812b4d thead{position:sticky;top:0;z-index:1}.previewTable_31812b4d thead tr{background:linear-gradient(135deg,#667eea,#764ba2);color:#fff}.previewTable_31812b4d thead tr th{font-size:11.5px;font-weight:600;letter-spacing:.5px;padding:11px 14px;text-align:left;text-transform:uppercase;white-space:nowrap}.previewTable_31812b4d thead tr th.colHours_31812b4d{text-align:center;width:70px}.previewTable_31812b4d thead tr th.colStatus_31812b4d{width:100px}.previewTable_31812b4d thead tr th.colDate_31812b4d{white-space:nowrap;width:100px}.previewTable_31812b4d tbody tr{border-bottom:1px solid #e0e0e0;transition:background .15s cubic-bezier(.4,0,.2,1)}.previewTable_31812b4d tbody tr:last-child{border-bottom:none}.previewTable_31812b4d tbody tr:nth-child(2n){background:#f4f4f4}.previewTable_31812b4d tbody tr:hover{background:rgba(102,126,234,.08)}.previewTable_31812b4d tbody tr td{color:#161616;padding:8px 14px;vertical-align:top}.previewTable_31812b4d tbody tr td.tdHours_31812b4d{font-variant-numeric:tabular-nums;font-weight:600;text-align:center;vertical-align:middle}.previewTable_31812b4d tbody tr td.tdStatus_31812b4d{vertical-align:middle}.badge_31812b4d{align-items:center;border-radius:20px;display:inline-flex;font-size:11px;font-weight:700;gap:4px;letter-spacing:.2px;padding:3px 9px;white-space:nowrap}.badge_31812b4d.approved_31812b4d{background:#defbe6;color:#24a148}.badge_31812b4d.submitted_31812b4d{background:rgba(102,126,234,.08);color:#667eea}.badge_31812b4d.rejected_31812b4d{background:#fff1f1;color:#da1e28}.badge_31812b4d.draft_31812b4d{background:#fdf6d8;color:#b28600}.tableFooter_31812b4d{align-items:center;background:#f4f4f4;border-top:1px solid #e0e0e0;color:#8d8d8d;display:flex;font-size:12px;justify-content:flex-end;padding:8px 14px}", true);

// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  fadeIn: "fadeIn_31812b4d",
  header: "header_31812b4d",
  homeBtn: "homeBtn_31812b4d",
  title: "title_31812b4d",
  filterCard: "filterCard_31812b4d",
  filterTitle: "filterTitle_31812b4d",
  filterRow: "filterRow_31812b4d",
  filterGroup: "filterGroup_31812b4d",
  optional: "optional_31812b4d",
  filterGroupFull: "filterGroupFull_31812b4d",
  filterInput: "filterInput_31812b4d",
  filterSelect: "filterSelect_31812b4d",
  messageBar: "messageBar_31812b4d",
  success: "success_31812b4d",
  error: "error_31812b4d",
  dismissBtn: "dismissBtn_31812b4d",
  btn: "btn_31812b4d",
  btnDefault: "btnDefault_31812b4d",
  btnExcel: "btnExcel_31812b4d",
  btnPdf: "btnPdf_31812b4d",
  loadingWrap: "loadingWrap_31812b4d",
  spinner: "spinner_31812b4d",
  spin: "spin_31812b4d",
  spinnerSm: "spinnerSm_31812b4d",
  spinnerSmDark: "spinnerSmDark_31812b4d",
  resultsSection: "resultsSection_31812b4d",
  summaryStrip: "summaryStrip_31812b4d",
  summaryItem: "summaryItem_31812b4d",
  summaryLabel: "summaryLabel_31812b4d",
  summaryValue: "summaryValue_31812b4d",
  summaryValueSm: "summaryValueSm_31812b4d",
  exportBar: "exportBar_31812b4d",
  emptyState: "emptyState_31812b4d",
  emptyTitle: "emptyTitle_31812b4d",
  emptySubtitle: "emptySubtitle_31812b4d",
  tableCard: "tableCard_31812b4d",
  tableWrap: "tableWrap_31812b4d",
  previewTable: "previewTable_31812b4d",
  colHours: "colHours_31812b4d",
  colStatus: "colStatus_31812b4d",
  colDate: "colDate_31812b4d",
  tdHours: "tdHours_31812b4d",
  tdStatus: "tdStatus_31812b4d",
  badge: "badge_31812b4d",
  approved: "approved_31812b4d",
  submitted: "submitted_31812b4d",
  rejected: "rejected_31812b4d",
  draft: "draft_31812b4d",
  tableFooter: "tableFooter_31812b4d",
  container: "container_31812b4d"
});


/***/ }),

/***/ 22666:
/*!**********************************************************!*\
  !*** ./lib/webparts/timeSheet/services/ExportService.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   exportToExcel: () => (/* binding */ exportToExcel),
/* harmony export */   exportToPDF: () => (/* binding */ exportToPDF)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 10196);
/* harmony import */ var _utils_dateUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/dateUtils */ 28613);


// ─── Excel Export (SheetJS — lazy-loaded) ─────────────────────────────────────
/**
 * Export filtered timesheet data to an Excel workbook (.xlsx).
 * SheetJS is loaded dynamically to keep the initial bundle lean.
 */
function exportToExcel(entries, filter) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function () {
        var XLSX, detailRows, summaryMap, summaryRows, wb, fileName;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, __webpack_require__.e(/*! import() | xlsx */ "xlsx").then(__webpack_require__.bind(__webpack_require__, /*! xlsx */ 3959))];
                case 1:
                    XLSX = _a.sent();
                    detailRows = entries.map(function (e) {
                        var _a, _b;
                        return ({
                            'Employee Name': e.employeeName,
                            'Employee Email': e.employeeEmail,
                            'Date': (0,_utils_dateUtils__WEBPACK_IMPORTED_MODULE_1__.formatDateShort)(e.entryDate),
                            'Project': e.projectName,
                            'Category': e.activityCategoryName,
                            'Task Description': e.taskDescription,
                            'Hours': e.hoursSpent,
                            'Status': e.status,
                            'Manager Comments': (_a = e.managerComments) !== null && _a !== void 0 ? _a : '',
                            'Submitted On': e.submittedOn ? (0,_utils_dateUtils__WEBPACK_IMPORTED_MODULE_1__.formatDateShort)(e.submittedOn) : '',
                            'Reviewed By': (_b = e.reviewedBy) !== null && _b !== void 0 ? _b : '',
                        });
                    });
                    summaryMap = new Map();
                    entries.forEach(function (e) {
                        var existing = summaryMap.get(e.employeeEmail);
                        if (existing) {
                            existing.totalHours += e.hoursSpent;
                        }
                        else {
                            summaryMap.set(e.employeeEmail, { name: e.employeeName, totalHours: e.hoursSpent });
                        }
                    });
                    summaryRows = Array.from(summaryMap.entries()).map(function (_a) {
                        var email = _a[0], data = _a[1];
                        return ({
                            'Employee Name': data.name,
                            'Employee Email': email,
                            'Total Hours': Math.round(data.totalHours * 100) / 100,
                        });
                    });
                    wb = XLSX.utils.book_new();
                    XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(detailRows), 'Timesheet Detail');
                    XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(summaryRows), 'Summary');
                    fileName = "Timesheet_Report_".concat((0,_utils_dateUtils__WEBPACK_IMPORTED_MODULE_1__.toISODateString)(filter.startDate), "_").concat((0,_utils_dateUtils__WEBPACK_IMPORTED_MODULE_1__.toISODateString)(filter.endDate), ".xlsx");
                    XLSX.writeFile(wb, fileName);
                    return [2 /*return*/];
            }
        });
    });
}
// ─── PDF Export (jsPDF + jspdf-autotable — lazy-loaded) ───────────────────────
/**
 * Export filtered timesheet data to a PDF report.
 * jsPDF and jspdf-autotable are loaded dynamically.
 */
function exportToPDF(entries, filter) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function () {
        var jsPDFModule, autoTableModule, jsPDFConstructor, doc_1, autoTableFn_1, globalJsPDF, head, body, fileName, error_1;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, __webpack_require__.e(/*! import() | jspdf */ "jspdf").then(__webpack_require__.bind(__webpack_require__, /*! jspdf */ 28339))];
                case 1:
                    jsPDFModule = _a.sent();
                    return [4 /*yield*/, __webpack_require__.e(/*! import() | jspdf-autotable */ "jspdf-autotable").then(__webpack_require__.bind(__webpack_require__, /*! jspdf-autotable */ 25708))];
                case 2:
                    autoTableModule = _a.sent();
                    jsPDFConstructor = void 0;
                    if (jsPDFModule.jsPDF) {
                        jsPDFConstructor = jsPDFModule.jsPDF;
                    }
                    else if (jsPDFModule.default && jsPDFModule.default.jsPDF) {
                        jsPDFConstructor = jsPDFModule.default.jsPDF;
                    }
                    else if (typeof jsPDFModule.default === 'function') {
                        jsPDFConstructor = jsPDFModule.default;
                    }
                    else {
                        throw new Error('Could not find jsPDF constructor');
                    }
                    console.log('jsPDF constructor:', jsPDFConstructor);
                    console.log('autoTable module loaded:', !!autoTableModule);
                    doc_1 = new jsPDFConstructor({
                        orientation: 'landscape',
                        unit: 'mm',
                        format: 'a4'
                    });
                    // Check if autoTable is available and try manual attachment if not
                    if (typeof doc_1.autoTable !== 'function') {
                        console.log('autoTable not found, attempting manual attachment...');
                        autoTableFn_1 = autoTableModule.default ||
                            autoTableModule.autoTable ||
                            autoTableModule;
                        if (typeof autoTableFn_1 === 'function') {
                            // Manually attach to the instance
                            doc_1.autoTable = function (options) {
                                return autoTableFn_1.call(this, this, options);
                            };
                            console.log('Successfully attached autoTable manually');
                        }
                        else {
                            globalJsPDF = window.jsPDF;
                            if (globalJsPDF && typeof globalJsPDF.prototype.autoTable === 'function') {
                                doc_1.autoTable = globalJsPDF.prototype.autoTable.bind(doc_1);
                                console.log('Used global jsPDF autoTable');
                            }
                            else {
                                throw new Error('autoTable plugin could not be loaded. Please ensure jspdf-autotable is properly installed.');
                            }
                        }
                    }
                    // Final verification
                    if (typeof doc_1.autoTable !== 'function') {
                        throw new Error('PDF table plugin is not available. Please refresh the page and try again.');
                    }
                    console.log('PDF generation ready, autoTable available:', typeof doc_1.autoTable);
                    // Header
                    doc_1.setFontSize(16);
                    doc_1.setTextColor(0, 120, 212); // Fluent UI blue
                    doc_1.text('Timesheet Report', 14, 18);
                    doc_1.setFontSize(10);
                    doc_1.setTextColor(50, 50, 50);
                    doc_1.text("Period: ".concat((0,_utils_dateUtils__WEBPACK_IMPORTED_MODULE_1__.formatDateShort)(filter.startDate), " \u2013 ").concat((0,_utils_dateUtils__WEBPACK_IMPORTED_MODULE_1__.formatDateShort)(filter.endDate)), 14, 26);
                    if (filter.employeeEmail) {
                        doc_1.text("Employee: ".concat(filter.employeeEmail), 14, 32);
                    }
                    head = [['Employee', 'Date', 'Project', 'Category', 'Description', 'Hours', 'Status']];
                    body = entries.map(function (e) { return [
                        e.employeeName,
                        (0,_utils_dateUtils__WEBPACK_IMPORTED_MODULE_1__.formatDateShort)(e.entryDate),
                        e.projectName,
                        e.activityCategoryName,
                        e.taskDescription.length > 60 ? "".concat(e.taskDescription.substring(0, 57), "...") : e.taskDescription,
                        e.hoursSpent.toString(),
                        e.status,
                    ]; });
                    // Use autoTable plugin (dynamically added to jsPDF instance)
                    doc_1.autoTable({
                        startY: filter.employeeEmail ? 38 : 32,
                        head: head,
                        body: body,
                        styles: { fontSize: 8, cellPadding: 2 },
                        headStyles: { fillColor: [0, 120, 212], textColor: 255, fontStyle: 'bold' },
                        alternateRowStyles: { fillColor: [245, 247, 250] },
                        columnStyles: {
                            0: { cellWidth: 35 }, // Employee
                            1: { cellWidth: 22 }, // Date
                            2: { cellWidth: 35 }, // Project
                            3: { cellWidth: 30 }, // Category
                            4: { cellWidth: 'auto' }, // Description (flexible)
                            5: { cellWidth: 16, halign: 'right' }, // Hours
                            6: { cellWidth: 22 }, // Status
                        },
                        didDrawPage: function (data) {
                            var pageSize = doc_1.internal.pageSize;
                            var pageHeight = pageSize.height;
                            doc_1.setFontSize(8);
                            doc_1.setTextColor(120, 120, 120);
                            doc_1.text("Generated: ".concat((0,_utils_dateUtils__WEBPACK_IMPORTED_MODULE_1__.formatDateShort)(new Date()), "  |  Page ").concat(data.pageNumber), data.settings.margin.left, pageHeight - 8);
                        },
                    });
                    fileName = "Timesheet_".concat((0,_utils_dateUtils__WEBPACK_IMPORTED_MODULE_1__.toISODateString)(filter.startDate), "_").concat((0,_utils_dateUtils__WEBPACK_IMPORTED_MODULE_1__.toISODateString)(filter.endDate), ".pdf");
                    doc_1.save(fileName);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error('PDF export failed:', error_1);
                    throw new Error('Failed to generate PDF. Please try again.');
                case 4: return [2 /*return*/];
            }
        });
    });
}


/***/ }),

/***/ 10695:
/*!*****************************************************!*\
  !*** ./lib/webparts/timeSheet/views/ExportPanel.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 10196);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 85959);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/AppContext */ 24770);
/* harmony import */ var _services_TimesheetService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/TimesheetService */ 30264);
/* harmony import */ var _services_ExportService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/ExportService */ 22666);
/* harmony import */ var _utils_dateUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/dateUtils */ 28613);
/* harmony import */ var TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! TimeSheetWebPartStrings */ 31339);
/* harmony import */ var TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ExportPanel_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ExportPanel.module.scss */ 98529);









// ─── Constants ────────────────────────────────────────────────────────────────
function getStatusOptions() {
    return [
        { key: '', text: TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.AllStatuses },
        { key: 'Draft', text: TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.StatusDraft },
        { key: 'Submitted', text: TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.StatusSubmitted },
        { key: 'Approved', text: TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.StatusApproved },
        { key: 'Rejected', text: TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.StatusRejected },
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
        return _ExportPanel_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].approved;
    if (status === 'Submitted')
        return _ExportPanel_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].submitted;
    if (status === 'Rejected')
        return _ExportPanel_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].rejected;
    return _ExportPanel_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].draft;
}
// ─── SVG Icons ────────────────────────────────────────────────────────────────
var IconHome = function () { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "currentColor" },
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M8 1L1 7h2v7h4v-4h2v4h4V7h2L8 1z" }))); };
var IconSearch = function () { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "currentColor" },
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", { cx: "6", cy: "6", r: "4.5", stroke: "currentColor", strokeWidth: "1.5", fill: "none" }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M9.5 9.5l3 3", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }))); };
var IconExcel = function () { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "currentColor" },
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", { x: "1", y: "1", width: "13", height: "13", rx: "2", fill: "none", stroke: "currentColor", strokeWidth: "1.2" }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M4 4l3 3.5L4 11M8 4h3M8 7.5h2.5M8 11h3", stroke: "currentColor", strokeWidth: "1.3", strokeLinecap: "round", fill: "none" }))); };
var IconPdf = function () { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "currentColor" },
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", { x: "1", y: "1", width: "13", height: "13", rx: "2", fill: "none", stroke: "currentColor", strokeWidth: "1.2" }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M4 4h3a2 2 0 010 4H4V4z", stroke: "currentColor", strokeWidth: "1.2", fill: "none", strokeLinecap: "round" }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M4 11v-3M8 8v3M11 4v7", stroke: "currentColor", strokeWidth: "1.3", strokeLinecap: "round" }))); };
var IconClose = function () { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { width: "11", height: "11", viewBox: "0 0 11 11", fill: "currentColor" },
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M1 1l9 9M10 1L1 10", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }))); };
var IconSuccess = function () { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "currentColor" },
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", { cx: "7.5", cy: "7.5", r: "6.5", stroke: "currentColor", strokeWidth: "1.3", fill: "none" }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M4 7.5l2.5 2.5 4-4", stroke: "currentColor", strokeWidth: "1.5", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }))); };
var IconError = function () { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "currentColor" },
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", { cx: "7.5", cy: "7.5", r: "6.5", stroke: "currentColor", strokeWidth: "1.3", fill: "none" }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M7.5 4v4M7.5 9.5v.5", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round" }))); };
var IconNoData = function () { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none" },
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", { x: "6", y: "8", width: "36", height: "32", rx: "4", stroke: "currentColor", strokeWidth: "2.5" }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M14 16h20M14 22h12M14 28h8", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", opacity: ".5" }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", { cx: "36", cy: "36", r: "9", fill: "white", stroke: "currentColor", strokeWidth: "2.5" }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M32 36h8M36 32v8", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", opacity: ".4" }))); };
// ─── Component ────────────────────────────────────────────────────────────────
var ExportPanel = function () {
    var _a;
    var navigateHome = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_AppContext__WEBPACK_IMPORTED_MODULE_1__.AppContext).navigateHome;
    var _b = (0,_utils_dateUtils__WEBPACK_IMPORTED_MODULE_5__.currentMonthRange)(), defaultStart = _b.start, defaultEnd = _b.end;
    var _c = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultStart), startDate = _c[0], setStartDate = _c[1];
    var _d = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultEnd), endDate = _d[0], setEndDate = _d[1];
    var _e = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''), employeeEmail = _e[0], setEmployeeEmail = _e[1];
    var _f = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''), statusFilter = _f[0], setStatusFilter = _f[1];
    var _g = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null), previewData = _g[0], setPreviewData = _g[1];
    var _h = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), loading = _h[0], setLoading = _h[1];
    var _j = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), exporting = _j[0], setExporting = _j[1];
    var _k = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''), error = _k[0], setError = _k[1];
    var _l = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''), successMessage = _l[0], setSuccessMessage = _l[1];
    // ─── Helpers ────────────────────────────────────────────────────────────────
    var buildFilter = function () { return ({
        startDate: startDate,
        endDate: endDate,
        employeeEmail: employeeEmail || undefined,
        status: statusFilter || undefined,
    }); };
    // ─── Handlers ───────────────────────────────────────────────────────────────
    var handlePreview = function () { return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(void 0, void 0, void 0, function () {
        var filter, entries, _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__generator)(this, function (_b) {
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
                    return [4 /*yield*/, (0,_services_TimesheetService__WEBPACK_IMPORTED_MODULE_2__.getEntriesForExport)(filter.startDate, filter.endDate, { employeeEmail: filter.employeeEmail, status: filter.status })];
                case 2:
                    entries = _b.sent();
                    setPreviewData(entries);
                    return [3 /*break*/, 5];
                case 3:
                    _a = _b.sent();
                    setError(TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.LoadExportFailed);
                    return [3 /*break*/, 5];
                case 4:
                    setLoading(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var handleExcelExport = function () { return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(void 0, void 0, void 0, function () {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__generator)(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!previewData)
                        return [2 /*return*/];
                    setExporting(true);
                    setError('');
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, (0,_services_ExportService__WEBPACK_IMPORTED_MODULE_7__.exportToExcel)(previewData, buildFilter())];
                case 2:
                    _b.sent();
                    setSuccessMessage(TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.ExcelSuccess);
                    return [3 /*break*/, 5];
                case 3:
                    _a = _b.sent();
                    setError(TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.ExcelFailed);
                    return [3 /*break*/, 5];
                case 4:
                    setExporting(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var handlePdfExport = function () { return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(void 0, void 0, void 0, function () {
        var err_1;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!previewData)
                        return [2 /*return*/];
                    setExporting(true);
                    setError('');
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, (0,_services_ExportService__WEBPACK_IMPORTED_MODULE_7__.exportToPDF)(previewData, buildFilter())];
                case 2:
                    _a.sent();
                    setSuccessMessage(TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.PdfSuccess);
                    return [3 /*break*/, 5];
                case 3:
                    err_1 = _a.sent();
                    console.error('PDF export error:', err_1);
                    setError(err_1 instanceof Error ? err_1.message : TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.PdfFailed);
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
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ExportPanel_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].container },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ExportPanel_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].header },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: _ExportPanel_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].homeBtn, title: "Home", onClick: navigateHome },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconHome, null)),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", { className: _ExportPanel_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].title }, TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.ExportTitle)),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ExportPanel_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].filterCard },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { className: _ExportPanel_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].filterTitle }, TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.FilterOptions),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ExportPanel_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].filterRow },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ExportPanel_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].filterGroup },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { htmlFor: "exp-from" },
                        TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.From,
                        " ",
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { style: { color: '#da1e28' } }, "*")),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { id: "exp-from", type: "date", className: _ExportPanel_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].filterInput, value: toDateInputValue(startDate), onChange: function (e) { if (e.target.value) {
                            setStartDate(fromDateInputValue(e.target.value));
                            setError('');
                        } } })),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ExportPanel_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].filterGroup },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { htmlFor: "exp-to" },
                        TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.To,
                        " ",
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { style: { color: '#da1e28' } }, "*")),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { id: "exp-to", type: "date", className: _ExportPanel_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].filterInput, style: endDate < startDate ? { borderColor: '#da1e28' } : {}, value: toDateInputValue(endDate), onChange: function (e) { if (e.target.value) {
                            setEndDate(fromDateInputValue(e.target.value));
                            setError('');
                        } } }),
                    endDate < startDate && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { style: { color: '#da1e28', fontSize: 12, display: 'block', marginTop: 2 } }, "Must be on or after the start date")))),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ExportPanel_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].filterRow },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ExportPanel_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].filterGroup },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { htmlFor: "exp-email" },
                        TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.EmployeeEmail,
                        " ",
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _ExportPanel_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].optional }, TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.Optional)),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { id: "exp-email", type: "text", className: _ExportPanel_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].filterInput, value: employeeEmail, onChange: function (e) { return setEmployeeEmail(e.target.value); }, placeholder: TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.EmailPlaceholder })),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ExportPanel_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].filterGroup },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { htmlFor: "exp-status" },
                        TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.Status,
                        " ",
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _ExportPanel_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].optional }, TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.Optional)),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", { id: "exp-status", className: _ExportPanel_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].filterSelect, value: statusFilter, onChange: function (e) { return setStatusFilter(e.target.value); } }, getStatusOptions().map(function (o) { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { key: o.key, value: o.key }, o.text)); })))),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "".concat(_ExportPanel_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].btn, " ").concat(_ExportPanel_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].btnDefault), onClick: handlePreview, disabled: loading }, loading
                ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ExportPanel_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].spinnerSmDark }),
                    " ",
                    TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.LoadingData)
                : react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconSearch, null),
                    " ",
                    TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.PreviewData))),
        error && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "".concat(_ExportPanel_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].messageBar, " ").concat(_ExportPanel_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].error) },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconError, null),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, error),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: _ExportPanel_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].dismissBtn, onClick: function () { return setError(''); } },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconClose, null)))),
        successMessage && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "".concat(_ExportPanel_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].messageBar, " ").concat(_ExportPanel_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].success) },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconSuccess, null),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, successMessage),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: _ExportPanel_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].dismissBtn, onClick: function () { return setSuccessMessage(''); } },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconClose, null)))),
        loading && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ExportPanel_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].loadingWrap },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ExportPanel_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].spinner }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.LoadingData))),
        previewData !== null && !loading && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ExportPanel_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].resultsSection },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ExportPanel_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].summaryStrip },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ExportPanel_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].summaryItem },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _ExportPanel_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].summaryLabel }, TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.Records),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _ExportPanel_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].summaryValue }, previewData.length)),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ExportPanel_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].summaryItem },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _ExportPanel_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].summaryLabel }, TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.TotalHours),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _ExportPanel_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].summaryValue }, totalHours.toFixed(2))),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ExportPanel_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].summaryItem },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _ExportPanel_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].summaryLabel }, TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.Employees),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _ExportPanel_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].summaryValue }, uniqueEmployees)),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ExportPanel_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].summaryItem },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _ExportPanel_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].summaryLabel }, TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.Period),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _ExportPanel_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].summaryValueSm },
                        (0,_utils_dateUtils__WEBPACK_IMPORTED_MODULE_5__.formatDateShort)(startDate),
                        " \u2013 ",
                        (0,_utils_dateUtils__WEBPACK_IMPORTED_MODULE_5__.formatDateShort)(endDate)))),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ExportPanel_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].exportBar },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "".concat(_ExportPanel_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].btn, " ").concat(_ExportPanel_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].btnExcel), onClick: handleExcelExport, disabled: exporting || previewData.length === 0 }, exporting
                    ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ExportPanel_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].spinnerSm }),
                        " ",
                        TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.Exporting)
                    : react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconExcel, null),
                        " ",
                        TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.ExportExcel)),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "".concat(_ExportPanel_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].btn, " ").concat(_ExportPanel_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].btnPdf), onClick: handlePdfExport, disabled: exporting || previewData.length === 0 }, exporting
                    ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ExportPanel_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].spinnerSm }),
                        " ",
                        TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.Exporting)
                    : react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconPdf, null),
                        " ",
                        TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.ExportPdf))),
            previewData.length === 0 ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ExportPanel_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].emptyState },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconNoData, null),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _ExportPanel_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].emptyTitle }, TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.NoDataFound),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _ExportPanel_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].emptySubtitle }, TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.NoDataHint))) : (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ExportPanel_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].tableCard },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ExportPanel_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].tableWrap },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", { className: _ExportPanel_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].previewTable },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null,
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null,
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.Employee),
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", { className: _ExportPanel_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].colDate }, TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.Date),
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.Project),
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.Category),
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.Description),
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", { className: _ExportPanel_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].colHours }, TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.Hours),
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", { className: _ExportPanel_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].colStatus }, TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.Status))),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, previewData.map(function (e) { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", { key: e.id },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, e.employeeName),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, (0,_utils_dateUtils__WEBPACK_IMPORTED_MODULE_5__.formatDateShort)(e.entryDate)),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, e.projectName),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, e.activityCategoryName),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, e.taskDescription),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", { className: _ExportPanel_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].tdHours }, e.hoursSpent),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", { className: _ExportPanel_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].tdStatus },
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "".concat(_ExportPanel_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].badge, " ").concat(badgeClass(e.status)) }, e.status)))); })))),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _ExportPanel_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].tableFooter },
                    previewData.length,
                    " record",
                    previewData.length !== 1 ? 's' : '')))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExportPanel);


/***/ })

}]);
//# sourceMappingURL=chunk.lib_webparts_timeSheet_views_ExportPanel_js.js.map