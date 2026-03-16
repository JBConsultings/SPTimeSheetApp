import { ITimesheetEntry, IExportFilter } from '../models/ITimesheetModels';
/**
 * Export filtered timesheet data to an Excel workbook (.xlsx).
 * SheetJS is loaded dynamically to keep the initial bundle lean.
 */
export declare function exportToExcel(entries: ITimesheetEntry[], filter: IExportFilter): Promise<void>;
/**
 * Export filtered timesheet data to a PDF report.
 * jsPDF and jspdf-autotable are loaded dynamically.
 */
export declare function exportToPDF(entries: ITimesheetEntry[], filter: IExportFilter): Promise<void>;
//# sourceMappingURL=ExportService.d.ts.map