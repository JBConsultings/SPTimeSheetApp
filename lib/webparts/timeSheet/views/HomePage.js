import * as React from 'react';
import { useContext } from 'react';
import { Icon, TooltipHost, TooltipDelay } from '@fluentui/react';
import { AppContext } from '../context/AppContext';
import DashboardAnalytics from '../components/DashboardAnalytics';
import * as strings from 'TimeSheetWebPartStrings';
import styles from './HomePage.module.scss';
function getNavCards() {
    return [
        {
            view: 'CalendarView',
            iconName: 'Calendar',
            value: "Calendar",
            label: strings.NavMyTimesheet,
            subtitle: strings.NavMyTimesheetSub,
            color: '#667eea',
            roles: ['Employee', 'Manager', 'Admin'],
        },
        {
            view: 'MyHistory',
            iconName: 'History',
            value: "History",
            label: strings.NavMySubmissions,
            subtitle: strings.NavMySubmissionsSub,
            color: '#107c41',
            roles: ['Employee', 'Manager', 'Admin'],
        },
        {
            view: 'ManagerDashboard',
            iconName: 'People',
            value: "Team",
            label: strings.NavTeamTimesheets,
            subtitle: strings.NavTeamTimesheetsSub,
            color: '#e8a600',
            roles: ['Manager', 'Admin'],
        },
        {
            view: 'ExportPanel',
            iconName: 'ExcelDocument',
            value: "Export",
            label: strings.NavExportReport,
            subtitle: strings.NavExportReportSub,
            color: '#107c41',
            roles: ['Manager', 'Admin'],
        },
        {
            view: 'AdminPanel',
            iconName: 'Settings',
            value: "Admin",
            label: strings.NavManageProjects,
            subtitle: strings.NavManageProjectsSub,
            color: '#c4314b',
            roles: ['Manager', 'Admin'],
        },
    ];
}
var HomePage = function () {
    var _a = useContext(AppContext), currentUser = _a.currentUser, navigateTo = _a.navigateTo;
    var NAV_CARDS = getNavCards();
    var visibleCards = NAV_CARDS.filter(function (c) { return c.roles.indexOf(currentUser.role) !== -1; });
    return (React.createElement("div", { className: styles['webpart-container'] },
        React.createElement("div", { className: styles['dashboard-root'] },
            React.createElement("div", { className: styles['dashboard-header'] },
                React.createElement("div", { className: styles['header-content'] },
                    React.createElement("h1", { className: styles['dashboard-page-title'] }, strings.DashboardTitle),
                    React.createElement("p", { className: styles['dashboard-section-title'] }, strings.WelcomeMessage.replace('{name}', currentUser.displayName).replace('{role}', currentUser.role)))),
            React.createElement("div", { className: styles['quick-access-section'] },
                React.createElement("div", { className: styles['section-header'] },
                    React.createElement("h2", { className: styles['section-title'] }, strings.QuickAccess),
                    React.createElement("p", { className: styles['section-subtitle'] }, strings.QuickAccessSubtitle)),
                React.createElement("div", { className: styles['navigation-grid'] }, visibleCards.map(function (card, index) { return (React.createElement(TooltipHost, { key: card.view, content: card.subtitle, delay: TooltipDelay.medium, styles: { root: { flex: '1 1 0', minWidth: 0 } } },
                    React.createElement("div", { className: "".concat(styles['nav-card']).concat(index === 0 ? " ".concat(styles['nav-card-primary']) : ''), onClick: function () { return navigateTo(card.view); }, role: "button", tabIndex: 0, "aria-label": "".concat(card.label, " - ").concat(card.subtitle), onKeyDown: function (e) {
                            if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                navigateTo(card.view);
                            }
                        }, style: { '--accent-color': card.color } },
                        React.createElement("div", { className: styles['nav-card-icon-wrap'] },
                            React.createElement(Icon, { iconName: card.iconName, styles: { root: { fontSize: 20, color: card.color } } })),
                        React.createElement("div", { className: styles['nav-card-info'] },
                            React.createElement("h3", { className: styles['nav-card-title'] }, card.label),
                            React.createElement("p", { className: styles['nav-card-description'] }, card.subtitle)),
                        React.createElement("div", { className: styles['nav-card-footer'] },
                            React.createElement("span", { className: styles['nav-card-tag'] }, card.value),
                            React.createElement(Icon, { iconName: "ChevronRight", className: styles['action-icon'] }))))); }))),
            React.createElement(DashboardAnalytics, null))));
};
export default HomePage;
//# sourceMappingURL=HomePage.js.map