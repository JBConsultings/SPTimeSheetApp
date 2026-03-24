"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
var react_1 = require("@fluentui/react");
var AppContext_1 = require("../context/AppContext");
// ─── Lazy-loaded views ────────────────────────────────────────────────────────
var HomePage = React.lazy(function () { return Promise.resolve().then(function () { return tslib_1.__importStar(require('../views/HomePage')); }); });
var DailyTimesheetForm = React.lazy(function () { return Promise.resolve().then(function () { return tslib_1.__importStar(require('../views/DailyTimesheetForm')); }); });
var CalendarView = React.lazy(function () { return Promise.resolve().then(function () { return tslib_1.__importStar(require('../views/CalendarView')); }); });
var MyTimesheetHistory = React.lazy(function () { return Promise.resolve().then(function () { return tslib_1.__importStar(require('../views/MyTimesheetHistory')); }); });
var ManagerDashboard = React.lazy(function () { return Promise.resolve().then(function () { return tslib_1.__importStar(require('../views/ManagerDashboard')); }); });
var AdminPanel = React.lazy(function () { return Promise.resolve().then(function () { return tslib_1.__importStar(require('../views/AdminPanel')); }); });
var ExportPanel = React.lazy(function () { return Promise.resolve().then(function () { return tslib_1.__importStar(require('../views/ExportPanel')); }); });
// ─── Route maps ───────────────────────────────────────────────────────────────
var VIEW_TO_PATH = {
    Home: '/',
    DailyForm: '/daily-form',
    CalendarView: '/calendar',
    MyHistory: '/my-history',
    ManagerDashboard: '/manager',
    AdminPanel: '/admin',
    ExportPanel: '/export',
};
var PATH_TO_VIEW = {
    '/': 'Home',
    '/daily-form': 'DailyForm',
    '/calendar': 'CalendarView',
    '/my-history': 'MyHistory',
    '/manager': 'ManagerDashboard',
    '/admin': 'AdminPanel',
    '/export': 'ExportPanel',
};
// ─── Helper ───────────────────────────────────────────────────────────────────
function formatDate(d) {
    var yyyy = d.getFullYear();
    var mm = String(d.getMonth() + 1).padStart(2, '0');
    var dd = String(d.getDate()).padStart(2, '0');
    return "".concat(yyyy, "-").concat(mm, "-").concat(dd);
}
// ─── AppShell ─────────────────────────────────────────────────────────────────
var AppShell = function (_a) {
    var _b, _c;
    var currentUser = _a.currentUser, error = _a.error;
    var navigate = (0, react_router_dom_1.useNavigate)();
    var location = (0, react_router_dom_1.useLocation)();
    var searchParams = (0, react_router_dom_1.useSearchParams)()[0];
    // Derive navigation state purely from the URL so it survives refresh & sharing
    var currentView = (_b = PATH_TO_VIEW[location.pathname]) !== null && _b !== void 0 ? _b : 'Home';
    var dateParam = searchParams.get('date');
    var parsedDate = dateParam ? new Date(dateParam) : undefined;
    var selectedDate = parsedDate && !isNaN(parsedDate.getTime()) ? parsedDate : undefined;
    var selectedEmployeeEmail = (_c = searchParams.get('employee')) !== null && _c !== void 0 ? _c : undefined;
    var navState = { currentView: currentView, selectedDate: selectedDate, selectedEmployeeEmail: selectedEmployeeEmail };
    // navigateTo updates the URL; React Router re-renders the correct view
    var navigateTo = function (view, params) {
        var _a;
        var path = (_a = VIEW_TO_PATH[view]) !== null && _a !== void 0 ? _a : '/';
        var sp = new URLSearchParams();
        var date = params && params.selectedDate;
        var employee = params && params.selectedEmployeeEmail;
        if (date)
            sp.set('date', formatDate(date));
        if (employee)
            sp.set('employee', employee);
        var search = sp.toString() ? ('?' + sp.toString()) : '';
        navigate(path + search);
    };
    var navigateHome = function () { return navigate('/'); };
    return (React.createElement(AppContext_1.AppContext.Provider, { value: { currentUser: currentUser, navState: navState, navigateTo: navigateTo, navigateHome: navigateHome } },
        error && (React.createElement(react_1.MessageBar, { messageBarType: react_1.MessageBarType.warning, isMultiline: false }, error)),
        React.createElement(React.Suspense, { fallback: React.createElement(react_1.Spinner, { size: react_1.SpinnerSize.medium, label: "Loading..." }) },
            React.createElement(react_router_dom_1.Routes, null,
                React.createElement(react_router_dom_1.Route, { path: "/", element: React.createElement(HomePage, null) }),
                React.createElement(react_router_dom_1.Route, { path: "/daily-form", element: React.createElement(DailyTimesheetForm, { selectedDate: selectedDate !== null && selectedDate !== void 0 ? selectedDate : new Date() }) }),
                React.createElement(react_router_dom_1.Route, { path: "/calendar", element: React.createElement(CalendarView, null) }),
                React.createElement(react_router_dom_1.Route, { path: "/my-history", element: React.createElement(MyTimesheetHistory, null) }),
                React.createElement(react_router_dom_1.Route, { path: "/manager", element: React.createElement(ManagerDashboard, null) }),
                React.createElement(react_router_dom_1.Route, { path: "/admin", element: React.createElement(AdminPanel, null) }),
                React.createElement(react_router_dom_1.Route, { path: "/export", element: React.createElement(ExportPanel, null) }),
                React.createElement(react_router_dom_1.Route, { path: "*", element: React.createElement(react_router_dom_1.Navigate, { to: "/", replace: true }) })))));
};
exports.default = AppShell;
//# sourceMappingURL=AppShell.js.map