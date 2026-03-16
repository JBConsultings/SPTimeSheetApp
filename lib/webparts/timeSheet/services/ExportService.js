import { __awaiter, __generator } from "tslib";
import { formatDateShort, toISODateString } from '../utils/dateUtils';
// ─── Excel Export (SheetJS — lazy-loaded) ─────────────────────────────────────
/**
 * Export filtered timesheet data to an Excel workbook (.xlsx).
 * SheetJS is loaded dynamically to keep the initial bundle lean.
 */
export function exportToExcel(entries, filter) {
    return __awaiter(this, void 0, void 0, function () {
        var XLSX, detailRows, summaryMap, summaryRows, wb, fileName;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, import(/* webpackChunkName: 'xlsx' */ 'xlsx')];
                case 1:
                    XLSX = _a.sent();
                    detailRows = entries.map(function (e) {
                        var _a, _b;
                        return ({
                            'Employee Name': e.employeeName,
                            'Employee Email': e.employeeEmail,
                            'Date': formatDateShort(e.entryDate),
                            'Project': e.projectName,
                            'Category': e.activityCategoryName,
                            'Task Description': e.taskDescription,
                            'Hours': e.hoursSpent,
                            'Status': e.status,
                            'Manager Comments': (_a = e.managerComments) !== null && _a !== void 0 ? _a : '',
                            'Submitted On': e.submittedOn ? formatDateShort(e.submittedOn) : '',
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
                    fileName = "Timesheet_Report_".concat(toISODateString(filter.startDate), "_").concat(toISODateString(filter.endDate), ".xlsx");
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
export function exportToPDF(entries, filter) {
    return __awaiter(this, void 0, void 0, function () {
        var jsPDFModule, autoTableModule, jsPDFConstructor, doc_1, autoTableFn_1, globalJsPDF, head, body, fileName, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, import(/* webpackChunkName: 'jspdf' */ 'jspdf')];
                case 1:
                    jsPDFModule = _a.sent();
                    return [4 /*yield*/, import(/* webpackChunkName: 'jspdf-autotable' */ 'jspdf-autotable')];
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
                    doc_1.text("Period: ".concat(formatDateShort(filter.startDate), " \u2013 ").concat(formatDateShort(filter.endDate)), 14, 26);
                    if (filter.employeeEmail) {
                        doc_1.text("Employee: ".concat(filter.employeeEmail), 14, 32);
                    }
                    head = [['Employee', 'Date', 'Project', 'Category', 'Description', 'Hours', 'Status']];
                    body = entries.map(function (e) { return [
                        e.employeeName,
                        formatDateShort(e.entryDate),
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
                            doc_1.text("Generated: ".concat(formatDateShort(new Date()), "  |  Page ").concat(data.pageNumber), data.settings.margin.left, pageHeight - 8);
                        },
                    });
                    fileName = "Timesheet_".concat(toISODateString(filter.startDate), "_").concat(toISODateString(filter.endDate), ".pdf");
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
//# sourceMappingURL=ExportService.js.map