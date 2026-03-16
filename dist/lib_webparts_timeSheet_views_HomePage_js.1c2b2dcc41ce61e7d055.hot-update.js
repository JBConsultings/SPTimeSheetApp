"use strict";
self["webpackHotUpdatec7e5e177_9baf_42a9_91c9_2ea9fecc19a8_0_0_1"]("lib_webparts_timeSheet_views_HomePage_js",{

/***/ 50831:
/*!**************************************************!*\
  !*** ./lib/webparts/timeSheet/views/HomePage.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 85959);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fluentui/react */ 880);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fluentui/react */ 637);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fluentui/react */ 52394);
/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/AppContext */ 24770);
/* harmony import */ var _components_DashboardAnalytics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/DashboardAnalytics */ 46695);
/* harmony import */ var _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HomePage.module.scss */ 36033);






var NAV_CARDS = [
    {
        view: 'DailyForm',
        iconName: 'CalendarDay',
        value: "Today",
        label: "My Timesheet",
        subtitle: "Enter today's hours",
        color: '#0078d4',
        roles: ['Employee', 'Manager', 'Admin'],
    },
    {
        view: 'MyHistory',
        iconName: 'History',
        value: "History",
        label: "My Submissions",
        subtitle: "Past timesheets",
        color: '#107c41',
        roles: ['Employee', 'Manager', 'Admin'],
    },
    {
        view: 'ManagerDashboard',
        iconName: 'People',
        value: "Team",
        label: "Team Timesheets",
        subtitle: "Review & approve",
        color: '#e8a600',
        roles: ['Manager', 'Admin'],
    },
    {
        view: 'ExportPanel',
        iconName: 'ExcelDocument',
        value: "Export",
        label: "Export Report",
        subtitle: "Excel or PDF",
        color: '#107c41',
        roles: ['Manager', 'Admin'],
    },
    {
        view: 'AdminPanel',
        iconName: 'Settings',
        value: "Admin",
        label: "Manage Projects",
        subtitle: "Projects & categories",
        color: '#c4314b',
        roles: ['Manager', 'Admin'],
    },
];
var HomePage = function () {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_AppContext__WEBPACK_IMPORTED_MODULE_1__.AppContext), currentUser = _a.currentUser, navigateTo = _a.navigateTo;
    var visibleCards = NAV_CARDS.filter(function (c) { return c.roles.indexOf(currentUser.role) !== -1; });
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "webpart-container", style: { border: '1px solid #d5d5d5', padding: '20px', borderRadius: '20px', backgroundColor: '#f3f4f4' } },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "dashboard-root" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "dashboard-header" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "header-content" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", { className: "dashboard-page-title" }, "TimeSheet Dashboard"),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { className: "dashboard-section-title" },
                        "Welcome, ",
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, currentUser.displayName),
                        " \u00B7 ",
                        currentUser.role))),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "quick-access-section" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "section-header" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", { className: "section-title" }, "Quick Access"),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { className: "section-subtitle" }, "Choose an action to get started")),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "navigation-grid" }, visibleCards.map(function (card, index) { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_4__.TooltipHost, { key: card.view, content: card.subtitle, delay: _fluentui_react__WEBPACK_IMPORTED_MODULE_5__.TooltipDelay.medium },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "nav-card ".concat(index === 0 ? 'nav-card-primary' : ''), onClick: function () { return navigateTo(card.view); }, role: "button", tabIndex: 0, "aria-label": "".concat(card.label, " - ").concat(card.subtitle), onKeyDown: function (e) {
                            if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                navigateTo(card.view);
                            }
                        }, style: { '--accent-color': card.color } },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "nav-card-header" },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "nav-card-icon" },
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_6__.Icon, { iconName: card.iconName, styles: {
                                        root: {
                                            fontSize: 24,
                                            color: card.color,
                                        }
                                    } })),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "nav-card-badge" },
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "badge-text" }, card.value))),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "nav-card-content" },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", { className: "nav-card-title" }, card.label),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { className: "nav-card-description" }, card.subtitle)),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "nav-card-action" },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_6__.Icon, { iconName: "ChevronRight", className: "action-icon" })),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "nav-card-glow" })))); }))),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_DashboardAnalytics__WEBPACK_IMPORTED_MODULE_2__["default"], null))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);


/***/ })

});
//# sourceMappingURL=lib_webparts_timeSheet_views_HomePage_js.1c2b2dcc41ce61e7d055.hot-update.js.map