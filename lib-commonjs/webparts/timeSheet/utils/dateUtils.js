"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDateLabel = formatDateLabel;
exports.toISODateString = toISODateString;
exports.formatDateShort = formatDateShort;
exports.getWeekStart = getWeekStart;
exports.isSameDay = isSameDay;
exports.today = today;
exports.isFutureDate = isFutureDate;
exports.currentMonthRange = currentMonthRange;
exports.currentWeekRange = currentWeekRange;
exports.toODataDate = toODataDate;
exports.toODataEndOfDay = toODataEndOfDay;
/**
 * Format a Date to a readable label: "Monday, 9 March 2026"
 */
function formatDateLabel(date) {
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
function toISODateString(date) {
    return date.toISOString().split('T')[0];
}
/**
 * Format a Date to a compact display string: "09/03/2026"
 */
function formatDateShort(date) {
    return date.toLocaleDateString('en-GB');
}
/**
 * Get the start of the week (Monday) for a given date.
 */
function getWeekStart(date) {
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
function isSameDay(a, b) {
    return (a.getFullYear() === b.getFullYear() &&
        a.getMonth() === b.getMonth() &&
        a.getDate() === b.getDate());
}
/**
 * Return today's date with time zeroed out.
 */
function today() {
    var d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
}
/**
 * Check if a date is in the future (strictly after today).
 */
function isFutureDate(date) {
    return date > today();
}
/**
 * Return the start and end of the current month.
 */
function currentMonthRange() {
    var now = new Date();
    var start = new Date(now.getFullYear(), now.getMonth(), 1);
    var end = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    return { start: start, end: end };
}
/**
 * Return the start and end of the current week (Mon–Sun).
 */
function currentWeekRange() {
    var start = getWeekStart(today());
    var end = new Date(start);
    end.setDate(start.getDate() + 6);
    return { start: start, end: end };
}
/**
 * Build a SharePoint OData filter date string (UTC midnight).
 */
function toODataDate(date) {
    var d = new Date(date);
    d.setHours(0, 0, 0, 0);
    return d.toISOString();
}
/**
 * Build a SharePoint OData filter end-of-day date string (UTC 23:59:59).
 */
function toODataEndOfDay(date) {
    var d = new Date(date);
    d.setHours(23, 59, 59, 999);
    return d.toISOString();
}
//# sourceMappingURL=dateUtils.js.map