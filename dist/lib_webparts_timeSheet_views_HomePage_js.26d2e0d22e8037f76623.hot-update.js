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
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fluentui/react */ 52394);
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
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "webpart-container", style: { border: '1px solid red', padding: '' } },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "dashboard-root" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "dashboard-header" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "header-content" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", { className: "dashboard-page-title" }, "TimeSheet Dashboard"),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { className: "dashboard-section-title" },
                        "Welcome, ",
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, currentUser.displayName),
                        " \u00B7 ",
                        currentUser.role))),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav", { className: "top-navigation" }, visibleCards.map(function (card) { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { key: card.view, className: "nav-item", onClick: function () { return navigateTo(card.view); }, title: card.subtitle },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_4__.Icon, { iconName: card.iconName, styles: { root: { fontSize: 16, color: card.color } } }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "nav-label" }, card.label))); })),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_DashboardAnalytics__WEBPACK_IMPORTED_MODULE_2__["default"], null))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);


/***/ })

});
//# sourceMappingURL=lib_webparts_timeSheet_views_HomePage_js.26d2e0d22e8037f76623.hot-update.js.map