import { __awaiter, __extends, __generator } from "tslib";
import * as React from 'react';
import { HashRouter } from 'react-router-dom';
import { Spinner, SpinnerSize, MessageBar, MessageBarType } from '@fluentui/react';
import { getCurrentUser } from '../services/UserService';
import * as strings from 'TimeSheetWebPartStrings';
import AppShell from './AppShell';
var TimeSheet = /** @class */ (function (_super) {
    __extends(TimeSheet, _super);
    function TimeSheet(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { loading: true };
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
                React.createElement(Spinner, { size: SpinnerSize.large, label: strings.LoadingApp })));
        }
        if (!currentUser) {
            return (React.createElement(MessageBar, { messageBarType: MessageBarType.error }, strings.LoadFailedApp));
        }
        // HashRouter keeps routing within the # fragment so SharePoint's URL is untouched.
        // The full URL for each view looks like:
        //   https://tenant.sharepoint.com/sites/...#/daily-form?date=2026-03-23
        // This survives page refresh and can be copied & shared.
        return (React.createElement(HashRouter, null,
            React.createElement(AppShell, { currentUser: currentUser, error: error })));
    };
    return TimeSheet;
}(React.Component));
export default TimeSheet;
//# sourceMappingURL=TimeSheet.js.map