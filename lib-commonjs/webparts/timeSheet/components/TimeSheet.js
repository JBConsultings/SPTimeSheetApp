"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
var react_1 = require("@fluentui/react");
var UserService_1 = require("../services/UserService");
var strings = tslib_1.__importStar(require("TimeSheetWebPartStrings"));
var AppShell_1 = tslib_1.__importDefault(require("./AppShell"));
var TimeSheet = /** @class */ (function (_super) {
    tslib_1.__extends(TimeSheet, _super);
    function TimeSheet(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { loading: true };
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
                            error: strings.UserProfileFailed,
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
    TimeSheet.prototype.render = function () {
        var _a = this.state, loading = _a.loading, currentUser = _a.currentUser, error = _a.error;
        if (loading) {
            return (React.createElement("div", { style: { padding: 40, textAlign: 'center' } },
                React.createElement(react_1.Spinner, { size: react_1.SpinnerSize.large, label: strings.LoadingApp })));
        }
        if (!currentUser) {
            return (React.createElement(react_1.MessageBar, { messageBarType: react_1.MessageBarType.error }, strings.LoadFailedApp));
        }
        // HashRouter keeps routing within the # fragment so SharePoint's URL is untouched.
        // The full URL for each view looks like:
        //   https://tenant.sharepoint.com/sites/...#/daily-form?date=2026-03-23
        // This survives page refresh and can be copied & shared.
        return (React.createElement(react_router_dom_1.HashRouter, null,
            React.createElement(AppShell_1.default, { currentUser: currentUser, error: error })));
    };
    return TimeSheet;
}(React.Component));
exports.default = TimeSheet;
//# sourceMappingURL=TimeSheet.js.map