"use strict";
self["webpackHotUpdatec7e5e177_9baf_42a9_91c9_2ea9fecc19a8_0_0_1"]("lib_webparts_timeSheet_views_HomePage_js",{

/***/ 46695:
/*!*****************************************************************!*\
  !*** ./lib/webparts/timeSheet/components/DashboardAnalytics.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 10196);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 85959);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/AppContext */ 24770);
/* harmony import */ var _services_AnalyticsService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/AnalyticsService */ 77164);
/* harmony import */ var _utils_dateUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/dateUtils */ 28613);
/* harmony import */ var _SimpleChart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SimpleChart */ 65565);
/* harmony import */ var _DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DashboardAnalytics.module.scss */ 78165);








var Chart = function (_a) {
    var data = _a.data, type = _a.type, title = _a.title, className = _a.className;
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "".concat(_DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].chartContainer, " ").concat(className || '') },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", { className: _DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].chartTitle }, title),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SimpleChart__WEBPACK_IMPORTED_MODULE_3__["default"], { data: data, type: type, title: title, className: _DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].chart, height: 200, width: 400 })));
};
var StatsCard = function (_a) {
    var title = _a.title, value = _a.value, subtitle = _a.subtitle, icon = _a.icon, color = _a.color, trend = _a.trend;
    // Get color-specific class
    var getColorClass = function () {
        switch (color) {
            case 'blue': return _DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]['statsCardBlue'] || '';
            case 'green': return _DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]['statsCardGreen'] || '';
            case 'purple': return _DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]['statsCardPurple'] || '';
            case 'orange': return _DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]['statsCardOrange'] || '';
            default: return '';
        }
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "".concat(_DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].statsCard, " ").concat(getColorClass()) },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].statsIcon }, icon),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].statsContent },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", { className: _DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].statsTitle }, title),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].statsValue }, value),
            subtitle && react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { className: _DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].statsSubtitle }, subtitle),
            trend && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "".concat(_DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].statsTrend, " ").concat(trend.direction === 'up' ? _DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].trendUp : _DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].trendDown) },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].trendIcon }, trend.direction === 'up' ? '↗' : '↘'),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null,
                    Math.abs(trend.value),
                    "%"))))));
};
var RecentActivity = function (_a) {
    var activities = _a.activities;
    var getActivityIcon = function (type) {
        switch (type) {
            case 'submitted':
                return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "currentColor" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M8 2a6 6 0 100 12A6 6 0 008 2zM7 5a1 1 0 112 0v2a1 1 0 11-2 0V5zM8 9a1 1 0 100 2 1 1 0 000-2z" })));
            case 'approved':
                return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "currentColor" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z" })));
            case 'rejected':
                return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "currentColor" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M4.646 4.646a.5.5 0 01.708 0L8 7.293l2.646-2.647a.5.5 0 01.708.708L8.707 8l2.647 2.646a.5.5 0 01-.708.708L8 8.707l-2.646 2.647a.5.5 0 01-.708-.708L7.293 8 4.646 5.354a.5.5 0 010-.708z" })));
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
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].recentActivity },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", { className: _DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].activityTitle }, "Recent Activity"),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].activityList }, activities.length === 0 ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].emptyActivity },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "No recent activity"))) : (activities.map(function (activity) { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { key: activity.id, className: _DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].activityItem },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "".concat(_DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].activityIcon, " ").concat((function () {
                    var color = getActivityColor(activity.type);
                    switch (color) {
                        case 'blue': return _DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]['activityBlue'];
                        case 'green': return _DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]['activityGreen'];
                        case 'red': return _DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]['activityRed'];
                        case 'gray': return _DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]['activityGray'];
                        default: return '';
                    }
                })()) }, getActivityIcon(activity.type)),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].activityContent },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { className: _DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].activityDescription }, activity.description),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].activityTime }, (0,_utils_dateUtils__WEBPACK_IMPORTED_MODULE_5__.formatDateShort)(activity.timestamp))))); })))));
};
// Main Dashboard Analytics Component
var DashboardAnalytics = function () {
    var currentUser = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_AppContext__WEBPACK_IMPORTED_MODULE_1__.AppContext).currentUser;
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null), analyticsData = _a[0], setAnalyticsData = _a[1];
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true), loading = _b[0], setLoading = _b[1];
    var _c = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''), error = _c[0], setError = _c[1];
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        var loadAnalytics = function () { return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(void 0, void 0, void 0, function () {
            var data, err_1;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, 3, 4]);
                        setLoading(true);
                        setError('');
                        return [4 /*yield*/, (0,_services_AnalyticsService__WEBPACK_IMPORTED_MODULE_2__.getAnalyticsData)(currentUser.email)];
                    case 1:
                        data = _a.sent();
                        setAnalyticsData(data);
                        return [3 /*break*/, 4];
                    case 2:
                        err_1 = _a.sent();
                        setError('Failed to load analytics data');
                        console.error('Analytics error:', err_1);
                        return [3 /*break*/, 4];
                    case 3:
                        setLoading(false);
                        return [7 /*endfinally*/];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        void loadAnalytics();
    }, [currentUser.email]);
    if (loading) {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].loadingContainer },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].spinner }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Loading analytics...")));
    }
    if (error) {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].errorContainer },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "currentColor" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" })),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, error)));
    }
    if (!analyticsData) {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].emptyContainer },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "No analytics data available")));
    }
    var last7Days = analyticsData.last7Days, monthlyHours = analyticsData.monthlyHours, weeklyDistribution = analyticsData.weeklyDistribution, quickStats = analyticsData.quickStats, recentActivity = analyticsData.recentActivity;
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].analyticsContainer },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].analyticsHeader },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", { className: _DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].analyticsTitle }, "Dashboard Analytics"),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { className: _DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].analyticsSubtitle }, "Your timesheet insights and trends")),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].statsGrid },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(StatsCard, { title: "Total Hours", value: quickStats.totalHours, subtitle: "This month", icon: react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "currentColor" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" })), color: "blue", trend: quickStats.hoursChange ? {
                    value: quickStats.hoursChange,
                    direction: quickStats.hoursChange > 0 ? 'up' : 'down'
                } : undefined }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(StatsCard, { title: "Avg Daily", value: "".concat(quickStats.avgDaily.toFixed(1), "h"), subtitle: "Last 7 days", icon: react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "currentColor" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" })), color: "green" }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(StatsCard, { title: "Submitted", value: quickStats.submittedEntries, subtitle: "This week", icon: react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "currentColor" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" })), color: "purple" }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(StatsCard, { title: "Approved", value: quickStats.approvedEntries, subtitle: "This month", icon: react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "currentColor" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" })), color: "orange" })),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].chartsGrid },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(Chart, { data: last7Days, type: "line", title: "Last 7 Days Hours Trend", className: _DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].chartFullWidth }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].chartsRow },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(Chart, { data: monthlyHours, type: "doughnut", title: "Monthly Hours by Project", className: _DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].chartMedium }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(Chart, { data: weeklyDistribution, type: "bar", title: "This Week's Distribution", className: _DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].chartMedium }))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(RecentActivity, { activities: recentActivity })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DashboardAnalytics);


/***/ })

});
//# sourceMappingURL=lib_webparts_timeSheet_views_HomePage_js.311e09cd69beb30f9479.hot-update.js.map