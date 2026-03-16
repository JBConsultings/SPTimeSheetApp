"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var react_2 = require("@fluentui/react");
var AppContext_1 = require("../context/AppContext");
var DashboardAnalytics_1 = tslib_1.__importDefault(require("../components/DashboardAnalytics"));
var HomePage_module_scss_1 = tslib_1.__importDefault(require("./HomePage.module.scss"));
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
    var _a = (0, react_1.useContext)(AppContext_1.AppContext), currentUser = _a.currentUser, navigateTo = _a.navigateTo;
    var visibleCards = NAV_CARDS.filter(function (c) { return c.roles.indexOf(currentUser.role) !== -1; });
    return (React.createElement("div", { className: HomePage_module_scss_1.default['webpart-container'] },
        React.createElement("div", { className: HomePage_module_scss_1.default['dashboard-root'] },
            React.createElement("div", { className: HomePage_module_scss_1.default['dashboard-header'] },
                React.createElement("div", { className: HomePage_module_scss_1.default['header-content'] },
                    React.createElement("h1", { className: HomePage_module_scss_1.default['dashboard-page-title'] }, "TimeSheet Dashboard"),
                    React.createElement("p", { className: HomePage_module_scss_1.default['dashboard-section-title'] },
                        "Welcome, ",
                        React.createElement("strong", null, currentUser.displayName),
                        " \u00B7 ",
                        currentUser.role))),
            React.createElement("div", { className: HomePage_module_scss_1.default['quick-access-section'] },
                React.createElement("div", { className: HomePage_module_scss_1.default['section-header'] },
                    React.createElement("h2", { className: HomePage_module_scss_1.default['section-title'] }, "Quick Access"),
                    React.createElement("p", { className: HomePage_module_scss_1.default['section-subtitle'] }, "Choose an action to get started")),
                React.createElement("div", { className: HomePage_module_scss_1.default['navigation-grid'] }, visibleCards.map(function (card, index) { return (React.createElement(react_2.TooltipHost, { key: card.view, content: card.subtitle, delay: react_2.TooltipDelay.medium },
                    React.createElement("div", { className: "".concat(HomePage_module_scss_1.default['nav-card']).concat(index === 0 ? " ".concat(HomePage_module_scss_1.default['nav-card-primary']) : ''), onClick: function () { return navigateTo(card.view); }, role: "button", tabIndex: 0, "aria-label": "".concat(card.label, " - ").concat(card.subtitle), onKeyDown: function (e) {
                            if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                navigateTo(card.view);
                            }
                        }, style: { '--accent-color': card.color } },
                        React.createElement("div", { className: HomePage_module_scss_1.default['nav-card-icon-wrap'] },
                            React.createElement(react_2.Icon, { iconName: card.iconName, styles: { root: { fontSize: 20, color: card.color } } })),
                        React.createElement("div", { className: HomePage_module_scss_1.default['nav-card-info'] },
                            React.createElement("h3", { className: HomePage_module_scss_1.default['nav-card-title'] }, card.label),
                            React.createElement("p", { className: HomePage_module_scss_1.default['nav-card-description'] }, card.subtitle)),
                        React.createElement("div", { className: HomePage_module_scss_1.default['nav-card-footer'] },
                            React.createElement("span", { className: HomePage_module_scss_1.default['nav-card-tag'] }, card.value),
                            React.createElement(react_2.Icon, { iconName: "ChevronRight", className: HomePage_module_scss_1.default['action-icon'] }))))); }))),
            React.createElement(DashboardAnalytics_1.default, null))));
};
exports.default = HomePage;
//# sourceMappingURL=HomePage.js.map