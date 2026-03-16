/**
 * Format a Date to a readable label: "Monday, 9 March 2026"
 */
export function formatDateLabel(date: Date): string {
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
export function toISODateString(date: Date): string {
  return date.toISOString().split('T')[0];
}

/**
 * Format a Date to a compact display string: "09/03/2026"
 */
export function formatDateShort(date: Date): string {
  return date.toLocaleDateString('en-GB');
}

/**
 * Get the start of the week (Monday) for a given date.
 */
export function getWeekStart(date: Date): Date {
  const d = new Date(date);
  const day = d.getDay(); // 0 = Sunday
  const diff = d.getDate() - day + (day === 0 ? -6 : 1); // adjust to Monday
  d.setDate(diff);
  d.setHours(0, 0, 0, 0);
  return d;
}

/**
 * Check if two dates represent the same calendar day.
 */
export function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

/**
 * Return today's date with time zeroed out.
 */
export function today(): Date {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
}

/**
 * Check if a date is in the future (strictly after today).
 */
export function isFutureDate(date: Date): boolean {
  return date > today();
}

/**
 * Return the start and end of the current month.
 */
export function currentMonthRange(): { start: Date; end: Date } {
  const now = new Date();
  const start = new Date(now.getFullYear(), now.getMonth(), 1);
  const end = new Date(now.getFullYear(), now.getMonth() + 1, 0);
  return { start, end };
}

/**
 * Return the start and end of the current week (Mon–Sun).
 */
export function currentWeekRange(): { start: Date; end: Date } {
  const start = getWeekStart(today());
  const end = new Date(start);
  end.setDate(start.getDate() + 6);
  return { start, end };
}

/**
 * Build a SharePoint OData filter date string (UTC midnight).
 */
export function toODataDate(date: Date): string {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d.toISOString();
}

/**
 * Build a SharePoint OData filter end-of-day date string (UTC 23:59:59).
 */
export function toODataEndOfDay(date: Date): string {
  const d = new Date(date);
  d.setHours(23, 59, 59, 999);
  return d.toISOString();
}
