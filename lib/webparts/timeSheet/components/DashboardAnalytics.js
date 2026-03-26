import { __awaiter, __generator } from "tslib";
import * as React from 'react';
import { useContext, useState, useEffect } from 'react';
import { DefaultButton } from '@fluentui/react';
import { AppContext } from '../context/AppContext';
import { getAnalyticsData } from '../services/AnalyticsService';
import { getTeamAnalyticsData } from '../services/TeamAnalyticsService';
import { formatDateShort } from '../utils/dateUtils';
import * as strings from 'TimeSheetWebPartStrings';
import SimpleChart from './SimpleChart';
import styles from './DashboardAnalytics.module.scss';
var Chart = function (_a) {
    var data = _a.data, type = _a.type, title = _a.title, className = _a.className;
    return (React.createElement("div", { className: "".concat(styles.chartContainer, " ").concat(className || '') },
        React.createElement("h3", { className: styles.chartTitle }, title),
        React.createElement(SimpleChart, { data: data, type: type, title: title, className: styles.chart, height: 200, width: 400 })));
};
var StatsCard = function (_a) {
    var title = _a.title, value = _a.value, subtitle = _a.subtitle, icon = _a.icon, color = _a.color, trend = _a.trend;
    // Get color-specific class
    var getColorClass = function () {
        switch (color) {
            case 'blue': return styles['statsCardBlue'] || '';
            case 'green': return styles['statsCardGreen'] || '';
            case 'purple': return styles['statsCardPurple'] || '';
            case 'orange': return styles['statsCardOrange'] || '';
            default: return '';
        }
    };
    return (React.createElement("div", { className: "".concat(styles.statsCard, " ").concat(getColorClass()) },
        React.createElement("div", { className: styles.statsIcon }, icon),
        React.createElement("div", { className: styles.statsContent },
            React.createElement("h4", { className: styles.statsTitle }, title),
            React.createElement("div", { className: styles.statsValue }, value),
            subtitle && React.createElement("p", { className: styles.statsSubtitle }, subtitle),
            trend && (React.createElement("div", { className: "".concat(styles.statsTrend, " ").concat(trend.direction === 'up' ? styles.trendUp : styles.trendDown) },
                React.createElement("span", { className: styles.trendIcon }, trend.direction === 'up' ? '↗' : '↘'),
                React.createElement("span", null,
                    Math.abs(trend.value),
                    "%"))))));
};
// Toggle button styles — active uses the project theme purple, inactive is transparent
var toggleButtonStyles = function (isActive) { return ({
    root: {
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        padding: '6px 14px',
        border: 'none',
        borderRadius: 8,
        fontSize: 12,
        fontWeight: isActive ? 600 : 500,
        color: isActive ? '#667eea' : '#64748b',
        background: isActive ? '#ffffff' : 'transparent',
        boxShadow: isActive ? '0 1px 4px rgba(0,0,0,0.1), 0 0 0 1px rgba(102,126,234,0.15)' : 'none',
        minWidth: 'auto',
        height: 'auto',
        whiteSpace: 'nowrap',
    },
    rootHovered: {
        background: isActive ? '#ffffff' : 'rgba(255,255,255,0.6)',
        color: isActive ? '#667eea' : '#334155',
        border: 'none',
    },
    rootPressed: {
        background: '#ffffff',
        color: '#667eea',
        border: 'none',
    },
    label: {
        fontSize: 12,
        fontWeight: isActive ? 600 : 500,
        color: isActive ? '#667eea' : '#64748b',
    },
    icon: {
        fontSize: 14,
        color: isActive ? '#667eea' : '#94a3b8',
    },
}); };
var RecentActivity = function (_a) {
    var activities = _a.activities;
    var getActivityIcon = function (type) {
        switch (type) {
            case 'submitted':
                return (React.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "currentColor" },
                    React.createElement("path", { d: "M8 2a6 6 0 100 12A6 6 0 008 2zM7 5a1 1 0 112 0v2a1 1 0 11-2 0V5zM8 9a1 1 0 100 2 1 1 0 000-2z" })));
            case 'approved':
                return (React.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "currentColor" },
                    React.createElement("path", { d: "M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z" })));
            case 'rejected':
                return (React.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "currentColor" },
                    React.createElement("path", { d: "M4.646 4.646a.5.5 0 01.708 0L8 7.293l2.646-2.647a.5.5 0 01.708.708L8.707 8l2.647 2.646a.5.5 0 01-.708.708L8 8.707l-2.646 2.647a.5.5 0 01-.708-.708L7.293 8 4.646 5.354a.5.5 0 010-.708z" })));
            default:
                return null;
        }
    };
    var getActivityColor = function (type) {
        switch (type) {
            case 'submitted': return 'blue';
            case 'approved': return 'green';
            case 'rejected': return 'red';
            default: return 'gray';
        }
    };
    return (React.createElement("div", { className: styles.recentActivity },
        React.createElement("h3", { className: styles.activityTitle }, strings.RecentActivity),
        React.createElement("div", { className: styles.activityList }, activities.length === 0 ? (React.createElement("div", { className: styles.emptyActivity },
            React.createElement("span", null, strings.NoRecentActivity))) : (activities.map(function (activity) { return (React.createElement("div", { key: activity.id, className: styles.activityItem },
            React.createElement("div", { className: "".concat(styles.activityIcon, " ").concat((function () {
                    var color = getActivityColor(activity.type);
                    switch (color) {
                        case 'blue': return styles['activityBlue'];
                        case 'green': return styles['activityGreen'];
                        case 'red': return styles['activityRed'];
                        case 'gray': return styles['activityGray'];
                        default: return '';
                    }
                })()) }, getActivityIcon(activity.type)),
            React.createElement("div", { className: styles.activityContent },
                React.createElement("p", { className: styles.activityDescription }, activity.description),
                React.createElement("span", { className: styles.activityTime }, formatDateShort(activity.timestamp))))); })))));
};
// Main Dashboard Analytics Component
var DashboardAnalytics = function () {
    var currentUser = useContext(AppContext).currentUser;
    var _a = useState(null), analyticsData = _a[0], setAnalyticsData = _a[1];
    var _b = useState(true), loading = _b[0], setLoading = _b[1];
    var _c = useState(''), error = _c[0], setError = _c[1];
    var isManagerOrAdmin = currentUser.role === 'Manager' || currentUser.role === 'Admin';
    var _d = useState(false), isTeamView = _d[0], setIsTeamView = _d[1];
    useEffect(function () {
        var loadAnalytics = function () { return __awaiter(void 0, void 0, void 0, function () {
            var data, _a, err_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 5, 6, 7]);
                        setLoading(true);
                        setError('');
                        if (!isTeamView) return [3 /*break*/, 2];
                        return [4 /*yield*/, getTeamAnalyticsData()];
                    case 1:
                        _a = _b.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, getAnalyticsData(currentUser.email)];
                    case 3:
                        _a = _b.sent();
                        _b.label = 4;
                    case 4:
                        data = _a;
                        setAnalyticsData(data);
                        return [3 /*break*/, 7];
                    case 5:
                        err_1 = _b.sent();
                        setError(strings.AnalyticsFailed);
                        console.error('Analytics error:', err_1);
                        return [3 /*break*/, 7];
                    case 6:
                        setLoading(false);
                        return [7 /*endfinally*/];
                    case 7: return [2 /*return*/];
                }
            });
        }); };
        void loadAnalytics();
    }, [currentUser.email, isTeamView]);
    if (loading) {
        return (React.createElement("div", { className: styles.loadingContainer },
            React.createElement("div", { className: styles.spinner }),
            React.createElement("span", null, strings.LoadingAnalytics)));
    }
    if (error) {
        return (React.createElement("div", { className: styles.errorContainer },
            React.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "currentColor" },
                React.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" })),
            React.createElement("span", null, error)));
    }
    if (!analyticsData) {
        return (React.createElement("div", { className: styles.emptyContainer },
            React.createElement("span", null, strings.NoAnalyticsData)));
    }
    var last7Days = analyticsData.last7Days, monthlyHours = analyticsData.monthlyHours, weeklyDistribution = analyticsData.weeklyDistribution, quickStats = analyticsData.quickStats, recentActivity = analyticsData.recentActivity;
    return (React.createElement("div", { className: styles.analyticsContainer },
        React.createElement("div", { className: styles.analyticsHeader },
            React.createElement("div", { className: styles.analyticsHeaderLeft },
                React.createElement("h2", { className: styles.analyticsTitle }, isTeamView ? strings.TeamAnalyticsTitle : strings.AnalyticsTitle),
                React.createElement("p", { className: styles.analyticsSubtitle }, isTeamView ? strings.TeamAnalyticsSubtitle : strings.AnalyticsSubtitle)),
            isManagerOrAdmin && (React.createElement("div", { className: styles.viewToggle, role: "group", "aria-label": "Dashboard view" },
                React.createElement(DefaultButton, { text: strings.MyAnalyticsToggle, iconProps: { iconName: 'Contact' }, onClick: function () { return setIsTeamView(false); }, "aria-pressed": !isTeamView, styles: toggleButtonStyles(!isTeamView) }),
                React.createElement(DefaultButton, { text: strings.TeamAnalyticsToggle, iconProps: { iconName: 'Group' }, onClick: function () { return setIsTeamView(true); }, "aria-pressed": isTeamView, styles: toggleButtonStyles(isTeamView) })))),
        React.createElement("div", { className: styles.statsGrid },
            React.createElement(StatsCard, { title: isTeamView ? strings.TotalTeamHoursCard : strings.TotalHoursCard, value: quickStats.totalHours, subtitle: strings.ThisMonth, icon: React.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "currentColor" },
                    React.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" })), color: "blue", trend: quickStats.hoursChange ? {
                    value: quickStats.hoursChange,
                    direction: quickStats.hoursChange > 0 ? 'up' : 'down'
                } : undefined }),
            React.createElement(StatsCard, { title: isTeamView ? strings.ActiveEmployeesCard : strings.AvgDaily, value: isTeamView ? quickStats.avgDaily : "".concat(quickStats.avgDaily.toFixed(1), "h"), subtitle: isTeamView ? strings.ThisMonth : strings.Last7Days, icon: isTeamView ? (React.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "currentColor" },
                    React.createElement("path", { d: "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" }))) : (React.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "currentColor" },
                    React.createElement("path", { d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" }))), color: "green" }),
            React.createElement(StatsCard, { title: isTeamView ? strings.PendingApprovalsCard : strings.SubmittedCard, value: quickStats.submittedEntries, subtitle: strings.ThisWeek, icon: isTeamView ? (React.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "currentColor" },
                    React.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" }))) : (React.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "currentColor" },
                    React.createElement("path", { d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" }))), color: "purple" }),
            React.createElement(StatsCard, { title: isTeamView ? strings.ApprovedThisMonthCard : strings.ApprovedCard, value: quickStats.approvedEntries, subtitle: strings.ThisMonth, icon: React.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "currentColor" },
                    React.createElement("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" })), color: "orange" })),
        React.createElement("div", { className: styles.chartsGrid },
            React.createElement(Chart, { data: last7Days, type: "line", title: isTeamView ? strings.TeamLast7DaysChart : strings.Last7DaysChart, className: styles.chartFullWidth }),
            React.createElement("div", { className: styles.chartsRow },
                React.createElement(Chart, { data: weeklyDistribution, type: "bar", title: isTeamView ? strings.TeamWeekDistribution : strings.WeekDistribution, className: styles.chartMedium }),
                React.createElement(Chart, { data: monthlyHours, type: "doughnut", title: isTeamView ? strings.HoursByEmployee : strings.MonthlyByProject, className: styles.chartMedium }))),
        React.createElement(RecentActivity, { activities: recentActivity })));
};
export default DashboardAnalytics;
//# sourceMappingURL=DashboardAnalytics.js.map