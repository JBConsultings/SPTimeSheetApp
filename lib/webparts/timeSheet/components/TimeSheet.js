import { __assign, __awaiter, __extends, __generator } from "tslib";
import * as React from 'react';
import { Spinner, SpinnerSize, MessageBar, MessageBarType } from '@fluentui/react';
import { AppContext } from '../context/AppContext';
import { getCurrentUser } from '../services/UserService';
// ─── Views ────────────────────────────────────────────────────────────────────
var HomePage = React.lazy(function () { return import('../views/HomePage'); });
var DailyTimesheetForm = React.lazy(function () { return import('../views/DailyTimesheetForm'); });
var MyTimesheetHistory = React.lazy(function () { return import('../views/MyTimesheetHistory'); });
var ManagerDashboard = React.lazy(function () { return import('../views/ManagerDashboard'); });
var AdminPanel = React.lazy(function () { return import('../views/AdminPanel'); });
var ExportPanel = React.lazy(function () { return import('../views/ExportPanel'); });
var TimeSheet = /** @class */ (function (_super) {
    __extends(TimeSheet, _super);
    function TimeSheet(props) {
        var _this = _super.call(this, props) || this;
        _this.navigateTo = function (view, params) {
            _this.setState(function (prev) { return ({
                navState: __assign(__assign(__assign({}, prev.navState), { currentView: view }), params),
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
        return __awaiter(this, void 0, void 0, function () {
            var currentUser, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, getCurrentUser()];
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
                React.createElement(Spinner, { size: SpinnerSize.large, label: "Loading Timesheet App..." })));
        }
        if (!currentUser) {
            return (React.createElement(MessageBar, { messageBarType: MessageBarType.error }, "Unable to load the application. Please refresh the page."));
        }
        return (React.createElement(AppContext.Provider, { value: {
                currentUser: currentUser,
                navState: navState,
                navigateTo: this.navigateTo,
                navigateHome: this.navigateHome,
            } },
            error && (React.createElement(MessageBar, { messageBarType: MessageBarType.warning, isMultiline: false }, error)),
            React.createElement(React.Suspense, { fallback: React.createElement(Spinner, { size: SpinnerSize.medium, label: "Loading..." }) }, this.renderView())));
    };
    return TimeSheet;
}(React.Component));
export default TimeSheet;
//# sourceMappingURL=TimeSheet.js.map