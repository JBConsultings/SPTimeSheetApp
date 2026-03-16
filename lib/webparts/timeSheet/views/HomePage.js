import * as React from 'react';
import { useContext } from 'react';
import { Icon, TooltipHost, TooltipDelay } from '@fluentui/react';
import { AppContext } from '../context/AppContext';
import DashboardAnalytics from '../components/DashboardAnalytics';
import './HomePage.module.scss';
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
    var _a = useContext(AppContext), currentUser = _a.currentUser, navigateTo = _a.navigateTo;
    var visibleCards = NAV_CARDS.filter(function (c) { return c.roles.indexOf(currentUser.role) !== -1; });
    return (React.createElement("div", { className: "webpart-container", style: { border: '1px solid #d5d5d5', padding: '20px', borderRadius: '20px', backgroundColor: '#f3f4f4' } },
        React.createElement("div", { className: "dashboard-root" },
            React.createElement("div", { className: "dashboard-header" },
                React.createElement("div", { className: "header-content" },
                    React.createElement("h1", { className: "dashboard-page-title" }, "TimeSheet Dashboard"),
                    React.createElement("p", { className: "dashboard-section-title" },
                        "Welcome, ",
                        React.createElement("strong", null, currentUser.displayName),
                        " \u00B7 ",
                        currentUser.role))),
            React.createElement("div", { className: "quick-access-section" },
                React.createElement("div", { className: "section-header" },
                    React.createElement("h2", { className: "section-title" }, "Quick Access"),
                    React.createElement("p", { className: "section-subtitle" }, "Choose an action to get started")),
                React.createElement("div", { className: "navigation-grid" }, visibleCards.map(function (card, index) { return (React.createElement(TooltipHost, { key: card.view, content: card.subtitle, delay: TooltipDelay.medium },
                    React.createElement("div", { className: "nav-card ".concat(index === 0 ? 'nav-card-primary' : ''), onClick: function () { return navigateTo(card.view); }, role: "button", tabIndex: 0, "aria-label": "".concat(card.label, " - ").concat(card.subtitle), onKeyDown: function (e) {
                            if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                navigateTo(card.view);
                            }
                        }, style: { '--accent-color': card.color } },
                        React.createElement("div", { className: "nav-card-header" },
                            React.createElement("div", { className: "nav-card-icon" },
                                React.createElement(Icon, { iconName: card.iconName, styles: {
                                        root: {
                                            fontSize: 24,
                                            color: card.color,
                                        }
                                    } })),
                            React.createElement("div", { className: "nav-card-badge" },
                                React.createElement("span", { className: "badge-text" }, card.value))),
                        React.createElement("div", { className: "nav-card-content" },
                            React.createElement("h3", { className: "nav-card-title" }, card.label),
                            React.createElement("p", { className: "nav-card-description" }, card.subtitle)),
                        React.createElement("div", { className: "nav-card-action" },
                            React.createElement(Icon, { iconName: "ChevronRight", className: "action-icon" })),
                        React.createElement("div", { className: "nav-card-glow" })))); }))),
            React.createElement(DashboardAnalytics, null))));
};
export default HomePage;
//# sourceMappingURL=HomePage.js.map