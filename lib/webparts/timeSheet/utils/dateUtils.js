/**
 * Format a Date to a readable label: "Monday, 9 March 2026"
 */
export function formatDateLabel(date) {
    return date.toLocaleDateString('en-GB', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
}
/**
 * Format a Date to ISO date-only string: "2026-03-09"
 */
export function toISODateString(date) {
    return date.toISOString().split('T')[0];
}
/**
 * Format a Date to a compact display string: "09/03/2026"
 */
export function formatDateShort(date) {
    return date.toLocaleDateString('en-GB');
}
/**
 * Get the start of the week (Monday) for a given date.
 */
export function getWeekStart(date) {
    var d = new Date(date);
    var day = d.getDay(); // 0 = Sunday
    var diff = d.getDate() - day + (day === 0 ? -6 : 1); // adjust to Monday
    d.setDate(diff);
    d.setHours(0, 0, 0, 0);
    return d;
}
/**
 * Check if two dates represent the same calendar day.
 */
export function isSameDay(a, b) {
    return (a.getFullYear() === b.getFullYear() &&
        a.getMonth() === b.getMonth() &&
        a.getDate() === b.getDate());
}
/**
 * Return today's date with time zeroed out.
 */
export function today() {
    var d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
}
/**
 * Check if a date is in the future (strictly after today).
 */
export function isFutureDate(date) {
    return date > today();
}
/**
 * Return the start and end of the current month.
 */
export function currentMonthRange() {
    var now = new Date();
    var start = new Date(now.getFullYear(), now.getMonth(), 1);
    var end = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    return { start: start, end: end };
}
/**
 * Return the start and end of the current week (Mon–Sun).
 */
export function currentWeekRange() {
    var start = getWeekStart(today());
    var end = new Date(start);
    end.setDate(start.getDate() + 6);
    return { start: start, end: end };
}
/**
 * Build a SharePoint OData filter date string (UTC midnight).
 */
export function toODataDate(date) {
    var d = new Date(date);
    d.setHours(0, 0, 0, 0);
    return d.toISOString();
}
/**
 * Build a SharePoint OData filter end-of-day date string (UTC 23:59:59).
 */
export function toODataEndOfDay(date) {
    var d = new Date(date);
    d.setHours(23, 59, 59, 999);
    return d.toISOString();
}
//# sourceMappingURL=dateUtils.js.map