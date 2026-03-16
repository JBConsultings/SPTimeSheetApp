import { ITimesheetEntry, IExportFilter } from '../models/ITimesheetModels';
import { formatDateShort, toISODateString } from '../utils/dateUtils';

// ─── Excel Export (SheetJS — lazy-loaded) ─────────────────────────────────────

/**
 * Export filtered timesheet data to an Excel workbook (.xlsx).
 * SheetJS is loaded dynamically to keep the initial bundle lean.
 */
export async function exportToExcel(entries: ITimesheetEntry[], filter: IExportFilter): Promise<void> {
  const XLSX = await import(/* webpackChunkName: 'xlsx' */ 'xlsx');

  // Detail sheet rows
  const detailRows = entries.map((e) => ({
    'Employee Name': e.employeeName,
    'Employee Email': e.employeeEmail,
    'Date': formatDateShort(e.entryDate),
    'Project': e.projectName,
    'Category': e.activityCategoryName,
    'Task Description': e.taskDescription,
    'Hours': e.hoursSpent,
    'Status': e.status,
    'Manager Comments': e.managerComments ?? '',
    'Submitted On': e.submittedOn ? formatDateShort(e.submittedOn) : '',
    'Reviewed By': e.reviewedBy ?? '',
  }));

  // Summary sheet — total hours per employee
  const summaryMap = new Map<string, { name: string; totalHours: number }>();
  entries.forEach((e) => {
    const existing = summaryMap.get(e.employeeEmail);
    if (existing) {
      existing.totalHours += e.hoursSpent;
    } else {
      summaryMap.set(e.employeeEmail, { name: e.employeeName, totalHours: e.hoursSpent });
    }
  });
  const summaryRows = Array.from(summaryMap.entries()).map(([email, data]) => ({
    'Employee Name': data.name,
    'Employee Email': email,
    'Total Hours': Math.round(data.totalHours * 100) / 100,
  }));

  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(detailRows), 'Timesheet Detail');
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(summaryRows), 'Summary');

  const fileName = `Timesheet_Report_${toISODateString(filter.startDate)}_${toISODateString(filter.endDate)}.xlsx`;
  XLSX.writeFile(wb, fileName);
}

// ─── PDF Export (jsPDF + jspdf-autotable — lazy-loaded) ───────────────────────

/**
 * Export filtered timesheet data to a PDF report.
 * jsPDF and jspdf-autotable are loaded dynamically.
 */
export async function exportToPDF(entries: ITimesheetEntry[], filter: IExportFilter): Promise<void> {
  try {
    // Import jsPDF and autotable using a different strategy
    const jsPDFModule = await import(/* webpackChunkName: 'jspdf' */ 'jspdf');
    
    // Import the autoTable plugin which should extend jsPDF prototype
    const autoTableModule = await import(/* webpackChunkName: 'jspdf-autotable' */ 'jspdf-autotable');
    
    // For SPFx compatibility, try multiple ways to get the jsPDF constructor
    let jsPDFConstructor;
    if ((jsPDFModule as any).jsPDF) {
      jsPDFConstructor = (jsPDFModule as any).jsPDF;
    } else if ((jsPDFModule as any).default && (jsPDFModule as any).default.jsPDF) {
      jsPDFConstructor = (jsPDFModule as any).default.jsPDF;
    } else if (typeof (jsPDFModule as any).default === 'function') {
      jsPDFConstructor = (jsPDFModule as any).default;
    } else {
      throw new Error('Could not find jsPDF constructor');
    }
    
    console.log('jsPDF constructor:', jsPDFConstructor);
    console.log('autoTable module loaded:', !!autoTableModule);
    
    // Create the PDF document
    const doc = new jsPDFConstructor({
      orientation: 'landscape',
      unit: 'mm', 
      format: 'a4'
    });
    
    // Check if autoTable is available and try manual attachment if not
    if (typeof (doc as any).autoTable !== 'function') {
      console.log('autoTable not found, attempting manual attachment...');
      
      // Check if autoTable function exists in the module
      const autoTableFn = (autoTableModule as any).default || 
                          (autoTableModule as any).autoTable ||
                          (autoTableModule as any);
                          
      if (typeof autoTableFn === 'function') {
        // Manually attach to the instance
        (doc as any).autoTable = function(options: any) {
          return autoTableFn.call(this, this, options);
        };
        console.log('Successfully attached autoTable manually');
      } else {
        // Last resort: try to get autoTable from global scope after import
        const globalJsPDF = (window as any).jsPDF;
        if (globalJsPDF && typeof globalJsPDF.prototype.autoTable === 'function') {
          (doc as any).autoTable = globalJsPDF.prototype.autoTable.bind(doc);
          console.log('Used global jsPDF autoTable');
        } else {
          throw new Error('autoTable plugin could not be loaded. Please ensure jspdf-autotable is properly installed.');
        }
      }
    }
    
    // Final verification
    if (typeof (doc as any).autoTable !== 'function') {
      throw new Error('PDF table plugin is not available. Please refresh the page and try again.');
    }
    
    console.log('PDF generation ready, autoTable available:', typeof (doc as any).autoTable);

  // Header
  doc.setFontSize(16);
  doc.setTextColor(0, 120, 212);   // Fluent UI blue
  doc.text('Timesheet Report', 14, 18);

  doc.setFontSize(10);
  doc.setTextColor(50, 50, 50);
  doc.text(
    `Period: ${formatDateShort(filter.startDate)} – ${formatDateShort(filter.endDate)}`,
    14,
    26
  );
  if (filter.employeeEmail) {
    doc.text(`Employee: ${filter.employeeEmail}`, 14, 32);
  }

  // Table
  const head = [['Employee', 'Date', 'Project', 'Category', 'Description', 'Hours', 'Status']];
  const body = entries.map((e) => [
    e.employeeName,
    formatDateShort(e.entryDate),
    e.projectName,
    e.activityCategoryName,
    e.taskDescription.length > 60 ? `${e.taskDescription.substring(0, 57)}...` : e.taskDescription,
    e.hoursSpent.toString(),
    e.status,
  ]);

    // Use autoTable plugin (dynamically added to jsPDF instance)
    (doc as any).autoTable({
      startY: filter.employeeEmail ? 38 : 32,
      head,
      body,
      styles: { fontSize: 8, cellPadding: 2 },
      headStyles: { fillColor: [0, 120, 212], textColor: 255, fontStyle: 'bold' },
      alternateRowStyles: { fillColor: [245, 247, 250] },
      columnStyles: {
        0: { cellWidth: 35 },   // Employee
        1: { cellWidth: 22 },   // Date
        2: { cellWidth: 35 },   // Project
        3: { cellWidth: 30 },   // Category
        4: { cellWidth: 'auto' }, // Description (flexible)
        5: { cellWidth: 16, halign: 'right' },  // Hours
        6: { cellWidth: 22 },   // Status
      },
      didDrawPage: (data: { pageNumber: number; settings: { margin: { left: number } } }) => {
        const pageSize = doc.internal.pageSize;
        const pageHeight = pageSize.height;
        doc.setFontSize(8);
        doc.setTextColor(120, 120, 120);
        doc.text(
          `Generated: ${formatDateShort(new Date())}  |  Page ${data.pageNumber}`,
          data.settings.margin.left,
          pageHeight - 8
        );
      },
    });

    const fileName = `Timesheet_${toISODateString(filter.startDate)}_${toISODateString(filter.endDate)}.pdf`;
    doc.save(fileName);
  } catch (error) {
    console.error('PDF export failed:', error);
    throw new Error('Failed to generate PDF. Please try again.');
  }
}
