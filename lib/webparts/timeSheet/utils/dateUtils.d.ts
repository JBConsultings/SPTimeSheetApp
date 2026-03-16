/**
 * Format a Date to a readable label: "Monday, 9 March 2026"
 */
export declare function formatDateLabel(date: Date): string;
/**
 * Format a Date to ISO date-only string: "2026-03-09"
 */
export declare function toISODateString(date: Date): string;
/**
 * Format a Date to a compact display string: "09/03/2026"
 */
export declare function formatDateShort(date: Date): string;
/**
 * Get the start of the week (Monday) for a given date.
 */
export declare function getWeekStart(date: Date): Date;
/**
 * Check if two dates represent the same calendar day.
 */
export declare function isSameDay(a: Date, b: Date): boolean;
/**
 * Return today's date with time zeroed out.
 */
export declare function today(): Date;
/**
 * Check if a date is in the future (strictly after today).
 */
export declare function isFutureDate(date: Date): boolean;
/**
 * Return the start and end of the current month.
 */
export declare function currentMonthRange(): {
    start: Date;
    end: Date;
};
/**
 * Return the start and end of the current week (Mon–Sun).
 */
export declare function currentWeekRange(): {
    start: Date;
    end: Date;
};
/**
 * Build a SharePoint OData filter date string (UTC midnight).
 */
export declare function toODataDate(date: Date): string;
/**
 * Build a SharePoint OData filter end-of-day date string (UTC 23:59:59).
 */
export declare function toODataEndOfDay(date: Date): string;
//# sourceMappingURL=dateUtils.d.ts.map