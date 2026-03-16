"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAnalyticsData = getAnalyticsData;
exports.getLast7Days = getLast7Days;
exports.getCurrentMonth = getCurrentMonth;
exports.getCurrentWeek = getCurrentWeek;
exports.groupEntriesByDate = groupEntriesByDate;
exports.groupEntriesByProject = groupEntriesByProject;
var tslib_1 = require("tslib");
var TimesheetService_1 = require("./TimesheetService");
var dateUtils_1 = require("../utils/dateUtils");
require("@pnp/sp/lists");
require("@pnp/sp/items");
// ─── Helper Functions ──────────────────────────────────────────────────────────────────────────
function getLast7Days() {
    var dates = [];
    var today = new Date();
    for (var i = 6; i >= 0; i--) {
        var date = new Date(today);
        date.setDate(date.getDate() - i);
        date.setHours(0, 0, 0, 0);
        dates.push(date);
    }
    return dates;
}
function getCurrentMonth() {
    var now = new Date();
    var start = new Date(now.getFullYear(), now.getMonth(), 1);
    var end = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    end.setHours(23, 59, 59, 999);
    return { start: start, end: end };
}
function getCurrentWeek() {
    var start = (0, dateUtils_1.getWeekStart)(new Date());
    var end = new Date(start);
    end.setDate(end.getDate() + 6);
    end.setHours(23, 59, 59, 999);
    return { start: start, end: end };
}
function getPreviousMonth() {
    var now = new Date();
    var start = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    var end = new Date(now.getFullYear(), now.getMonth(), 0);
    end.setHours(23, 59, 59, 999);
    return { start: start, end: end };
}
function groupEntriesByDate(entries) {
    var grouped = new Map();
    entries.forEach(function (entry) {
        var dateKey = entry.entryDate.toISOString().split('T')[0];
        var currentHours = grouped.get(dateKey) || 0;
        grouped.set(dateKey, currentHours + entry.hoursSpent);
    });
    return grouped;
}
function groupEntriesByProject(entries) {
    var grouped = new Map();
    entries.forEach(function (entry) {
        var currentHours = grouped.get(entry.projectName) || 0;
        grouped.set(entry.projectName, currentHours + entry.hoursSpent);
    });
    return grouped;
}
function getWeekdayName(date) {
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return days[date.getDay()];
}
// ─── Chart Data Generators ─────────────────────────────────────────────────────────────────────
function generateLast7DaysChart(entries) {
    var dates = getLast7Days();
    var grouped = groupEntriesByDate(entries);
    var labels = dates.map(function (date) { return getWeekdayName(date); });
    var data = dates.map(function (date) {
        var dateKey = date.toISOString().split('T')[0];
        return grouped.get(dateKey) || 0;
    });
    // If no real data, provide sample data for demo
    if (data.every(function (val) { return val === 0; })) {
        data = [6.5, 7.2, 8.0, 7.5, 6.8, 5.5, 4.0];
    }
    return {
        labels: labels,
        datasets: [{
                label: 'Hours',
                data: data,
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                borderColor: '#3b82f6',
                borderWidth: 3,
                fill: true
            }]
    };
}
function generateMonthlyHoursChart(entries) {
    var grouped = groupEntriesByProject(entries);
    var sortedProjects = Array.from(grouped.entries())
        .sort(function (_a, _b) {
        var a = _a[1];
        var b = _b[1];
        return b - a;
    })
        .slice(0, 6); // Top 6 projects
    // If no real data, provide sample data for demo
    if (sortedProjects.length === 0) {
        sortedProjects = [
            ['Project Alpha', 45],
            ['Project Beta', 32],
            ['Project Gamma', 28],
            ['Project Delta', 19],
            ['Maintenance', 12]
        ];
    }
    var labels = sortedProjects.map(function (_a) {
        var project = _a[0];
        return project;
    });
    var data = sortedProjects.map(function (_a) {
        var hours = _a[1];
        return hours;
    });
    var colors = [
        '#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4'
    ];
    return {
        labels: labels,
        datasets: [{
                label: 'Hours',
                data: data,
                backgroundColor: colors.slice(0, data.length),
                borderWidth: 0
            }]
    };
}
function generateWeeklyDistributionChart(entries) {
    var start = getCurrentWeek().start;
    var dates = [];
    // Generate all 7 days of current week
    for (var i = 0; i < 7; i++) {
        var date = new Date(start);
        date.setDate(date.getDate() + i);
        dates.push(date);
    }
    var grouped = groupEntriesByDate(entries);
    var labels = dates.map(function (date) { return getWeekdayName(date); });
    var data = dates.map(function (date) {
        var dateKey = date.toISOString().split('T')[0];
        return grouped.get(dateKey) || 0;
    });
    // If no real data, provide sample data for demo
    if (data.every(function (val) { return val === 0; })) {
        data = [8, 7.5, 8, 7, 6, 0, 0]; // Typical work week
    }
    return {
        labels: labels,
        datasets: [{
                label: 'Hours',
                data: data,
                backgroundColor: '#3b82f6',
                borderColor: '#1e40af',
                borderWidth: 1
            }]
    };
}
// ─── Quick Stats Calculator ────────────────────────────────────────────────────────────────────
function calculateQuickStats(currentEntries, previousEntries, weekEntries) {
    var totalHours = currentEntries.reduce(function (sum, entry) { return sum + entry.hoursSpent; }, 0);
    var previousTotal = previousEntries.reduce(function (sum, entry) { return sum + entry.hoursSpent; }, 0);
    var last7Days = getLast7Days();
    var recentEntries = currentEntries.filter(function (entry) {
        return last7Days.some(function (date) {
            return date.toDateString() === entry.entryDate.toDateString();
        });
    });
    var avgDaily = recentEntries.length > 0
        ? recentEntries.reduce(function (sum, entry) { return sum + entry.hoursSpent; }, 0) / 7
        : 0;
    var submittedEntries = weekEntries.filter(function (entry) {
        return entry.status === 'Submitted';
    }).length;
    var approvedEntries = currentEntries.filter(function (entry) {
        return entry.status === 'Approved';
    }).length;
    // If no real data, provide sample data for demo
    if (totalHours === 0) {
        totalHours = 156.5;
        previousTotal = 142.0;
        avgDaily = 7.2;
        submittedEntries = 3;
        approvedEntries = 12;
    }
    var hoursChange = previousTotal > 0
        ? Math.round(((totalHours - previousTotal) / previousTotal) * 100)
        : undefined;
    return {
        totalHours: Math.round(totalHours * 100) / 100,
        avgDaily: Math.round(avgDaily * 100) / 100,
        submittedEntries: submittedEntries,
        approvedEntries: approvedEntries,
        hoursChange: hoursChange
    };
}
// ─── Recent Activity Generator ─────────────────────────────────────────────────────────────────
function generateRecentActivity(entries) {
    var recentEntries = entries
        .filter(function (entry) { return entry.submittedOn || entry.reviewedOn; })
        .sort(function (a, b) {
        var aTime = a.reviewedOn || a.submittedOn || new Date(0);
        var bTime = b.reviewedOn || b.submittedOn || new Date(0);
        return bTime.getTime() - aTime.getTime();
    })
        .slice(0, 10);
    return recentEntries.map(function (entry) {
        var _a;
        var timestamp = entry.reviewedOn || entry.submittedOn || new Date();
        var type;
        var description;
        if (entry.status === 'Submitted' && entry.submittedOn) {
            type = 'submitted';
            description = "Submitted timesheet for ".concat((0, dateUtils_1.formatDateShort)(entry.entryDate), " - ").concat(entry.projectName);
        }
        else if (entry.status === 'Approved') {
            type = 'approved';
            description = "Timesheet approved for ".concat((0, dateUtils_1.formatDateShort)(entry.entryDate), " - ").concat(entry.projectName);
        }
        else if (entry.status === 'Rejected') {
            type = 'rejected';
            description = "Timesheet rejected for ".concat((0, dateUtils_1.formatDateShort)(entry.entryDate), " - ").concat(entry.projectName);
        }
        else {
            type = 'submitted';
            description = "Updated timesheet for ".concat((0, dateUtils_1.formatDateShort)(entry.entryDate), " - ").concat(entry.projectName);
        }
        return {
            id: ((_a = entry.id) === null || _a === void 0 ? void 0 : _a.toString()) || "".concat(entry.entryDate.getTime(), "-").concat(entry.projectId),
            type: type,
            description: description,
            timestamp: timestamp
        };
    });
}
// ─── Main Analytics Data Function ──────────────────────────────────────────────────────────────
function getAnalyticsData(employeeEmail) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var _a, currentMonthStart, currentMonthEnd, _b, previousMonthStart, previousMonthEnd, _c, currentWeekStart, currentWeekEnd, last7DaysStart, _d, currentMonthEntries, previousMonthEntries, currentWeekEntries, last7DaysEntries, last7Days, monthlyHours, weeklyDistribution, quickStats, recentActivity, error_1;
        return tslib_1.__generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    _e.trys.push([0, 2, , 3]);
                    _a = getCurrentMonth(), currentMonthStart = _a.start, currentMonthEnd = _a.end;
                    _b = getPreviousMonth(), previousMonthStart = _b.start, previousMonthEnd = _b.end;
                    _c = getCurrentWeek(), currentWeekStart = _c.start, currentWeekEnd = _c.end;
                    last7DaysStart = getLast7Days()[0];
                    return [4 /*yield*/, Promise.all([
                            (0, TimesheetService_1.getEntriesForDateRange)(currentMonthStart, currentMonthEnd, employeeEmail),
                            (0, TimesheetService_1.getEntriesForDateRange)(previousMonthStart, previousMonthEnd, employeeEmail),
                            (0, TimesheetService_1.getEntriesForDateRange)(currentWeekStart, currentWeekEnd, employeeEmail),
                            (0, TimesheetService_1.getEntriesForDateRange)(last7DaysStart, new Date(), employeeEmail)
                        ])];
                case 1:
                    _d = _e.sent(), currentMonthEntries = _d[0], previousMonthEntries = _d[1], currentWeekEntries = _d[2], last7DaysEntries = _d[3];
                    last7Days = generateLast7DaysChart(last7DaysEntries);
                    monthlyHours = generateMonthlyHoursChart(currentMonthEntries);
                    weeklyDistribution = generateWeeklyDistributionChart(currentWeekEntries);
                    quickStats = calculateQuickStats(currentMonthEntries, previousMonthEntries, currentWeekEntries);
                    recentActivity = generateRecentActivity(currentMonthEntries);
                    return [2 /*return*/, {
                            last7Days: last7Days,
                            monthlyHours: monthlyHours,
                            weeklyDistribution: weeklyDistribution,
                            quickStats: quickStats,
                            recentActivity: recentActivity
                        }];
                case 2:
                    error_1 = _e.sent();
                    console.error('Error fetching analytics data:', error_1);
                    throw new Error('Failed to load analytics data');
                case 3: return [2 /*return*/];
            }
        });
    });
}
//# sourceMappingURL=AnalyticsService.js.map