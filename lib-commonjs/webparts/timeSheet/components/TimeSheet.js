"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("@fluentui/react");
var AppContext_1 = require("../context/AppContext");
var UserService_1 = require("../services/UserService");
// ─── Views ────────────────────────────────────────────────────────────────────
var HomePage = React.lazy(function () { return Promise.resolve().then(function () { return tslib_1.__importStar(require('../views/HomePage')); }); });
var DailyTimesheetForm = React.lazy(function () { return Promise.resolve().then(function () { return tslib_1.__importStar(require('../views/DailyTimesheetForm')); }); });
var MyTimesheetHistory = React.lazy(function () { return Promise.resolve().then(function () { return tslib_1.__importStar(require('../views/MyTimesheetHistory')); }); });
var ManagerDashboard = React.lazy(function () { return Promise.resolve().then(function () { return tslib_1.__importStar(require('../views/ManagerDashboard')); }); });
var AdminPanel = React.lazy(function () { return Promise.resolve().then(function () { return tslib_1.__importStar(require('../views/AdminPanel')); }); });
var ExportPanel = React.lazy(function () { return Promise.resolve().then(function () { return tslib_1.__importStar(require('../views/ExportPanel')); }); });
var TimeSheet = /** @class */ (function (_super) {
    tslib_1.__extends(TimeSheet, _super);
    function TimeSheet(props) {
        var _this = _super.call(this, props) || this;
        _this.navigateTo = function (view, params) {
            _this.setState(function (prev) { return ({
                navState: tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, prev.navState), { currentView: view }), params),
            }); });
        };
        _this.navigateHome = function () {
            _this.setState({ navState: { currentView: 'Home' } });
        };
        _this.state = {
            navState: { currentView: 'Home' },
            loading: true,
        };
        return _this;
    }
    TimeSheet.prototype.componentDidMount = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var currentUser, _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, (0, UserService_1.getCurrentUser)()];
                    case 1:
                        currentUser = _b.sent();
                        this.setState({ currentUser: currentUser, loading: false });
                        return [3 /*break*/, 3];
                    case 2:
                        _a = _b.sent();
                        this.setState({
                            loading: false,
                            error: 'Failed to load user profile. Defaulting to Employee role.',
                            currentUser: {
                                id: 0,
                                displayName: this.props.userDisplayName,
                                email: '',
                                loginName: '',
                                role: 'Employee',
                            },
                        });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TimeSheet.prototype.renderView = function () {
        var _a;
        var navState = this.state.navState;
        switch (navState.currentView) {
            case 'Home': return React.createElement(HomePage, null);
            case 'DailyForm': return React.createElement(DailyTimesheetForm, { selectedDate: (_a = navState.selectedDate) !== null && _a !== void 0 ? _a : new Date() });
            case 'MyHistory': return React.createElement(MyTimesheetHistory, null);
            case 'ManagerDashboard': return React.createElement(ManagerDashboard, null);
            case 'AdminPanel': return React.createElement(AdminPanel, null);
            case 'ExportPanel': return React.createElement(ExportPanel, null);
            default: return React.createElement(HomePage, null);
        }
    };
    TimeSheet.prototype.render = function () {
        var _a = this.state, loading = _a.loading, error = _a.error, currentUser = _a.currentUser, navState = _a.navState;
        if (loading) {
            return (React.createElement("div", { style: { padding: 40, textAlign: 'center' } },
                React.createElement(react_1.Spinner, { size: react_1.SpinnerSize.large, label: "Loading Timesheet App..." })));
        }
        if (!currentUser) {
            return (React.createElement(react_1.MessageBar, { messageBarType: react_1.MessageBarType.error }, "Unable to load the application. Please refresh the page."));
        }
        return (React.createElement(AppContext_1.AppContext.Provider, { value: {
                currentUser: currentUser,
                navState: navState,
                navigateTo: this.navigateTo,
                navigateHome: this.navigateHome,
            } },
            error && (React.createElement(react_1.MessageBar, { messageBarType: react_1.MessageBarType.warning, isMultiline: false }, error)),
            React.createElement(React.Suspense, { fallback: React.createElement(react_1.Spinner, { size: react_1.SpinnerSize.medium, label: "Loading..." }) }, this.renderView())));
    };
    return TimeSheet;
}(React.Component));
exports.default = TimeSheet;
//# sourceMappingURL=TimeSheet.js.map