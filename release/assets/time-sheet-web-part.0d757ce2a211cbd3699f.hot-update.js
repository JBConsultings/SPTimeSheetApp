"use strict";
self["webpackHotUpdatec7e5e177_9baf_42a9_91c9_2ea9fecc19a8_0_0_1"]("time-sheet-web-part",{

/***/ 42039:
/*!********************************************************!*\
  !*** ./lib/webparts/timeSheet/components/TimeSheet.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 10196);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 85959);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fluentui/react */ 80954);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fluentui/react */ 49885);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fluentui/react */ 63208);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fluentui/react */ 46643);
/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/AppContext */ 24770);
/* harmony import */ var _services_UserService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/UserService */ 68445);





// ─── Views ────────────────────────────────────────────────────────────────────
var HomePage = react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () { return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_microsoft_sp-css-loader_node_modules_microsoft_load-themed-styles_lib-es-29a805"), __webpack_require__.e("lib_webparts_timeSheet_services_TimesheetService_js"), __webpack_require__.e("lib_webparts_timeSheet_views_HomePage_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ../views/HomePage */ 50831)); });
var DailyTimesheetForm = react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () { return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_microsoft_sp-css-loader_node_modules_microsoft_load-themed-styles_lib-es-29a805"), __webpack_require__.e("lib_webparts_timeSheet_services_TimesheetService_js"), __webpack_require__.e("lib_webparts_timeSheet_services_CategoryService_js-lib_webparts_timeSheet_services_ProjectSer-73eed3"), __webpack_require__.e("lib_webparts_timeSheet_views_DailyTimesheetForm_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ../views/DailyTimesheetForm */ 51566)); });
var MyTimesheetHistory = react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () { return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_microsoft_sp-css-loader_node_modules_microsoft_load-themed-styles_lib-es-29a805"), __webpack_require__.e("lib_webparts_timeSheet_services_TimesheetService_js"), __webpack_require__.e("lib_webparts_timeSheet_views_MyTimesheetHistory_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ../views/MyTimesheetHistory */ 34205)); });
var ManagerDashboard = react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () { return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_microsoft_sp-css-loader_node_modules_microsoft_load-themed-styles_lib-es-29a805"), __webpack_require__.e("lib_webparts_timeSheet_services_TimesheetService_js"), __webpack_require__.e("lib_webparts_timeSheet_views_ManagerDashboard_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ../views/ManagerDashboard */ 50734)); });
var AdminPanel = react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () { return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_fluentui_react_lib_components_Button_PrimaryButton_PrimaryButton_js-node-1312b3"), __webpack_require__.e("lib_webparts_timeSheet_services_CategoryService_js-lib_webparts_timeSheet_services_ProjectSer-73eed3"), __webpack_require__.e("lib_webparts_timeSheet_views_AdminPanel_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ../views/AdminPanel */ 14408)); });
var ExportPanel = react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () { return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_microsoft_sp-css-loader_node_modules_microsoft_load-themed-styles_lib-es-29a805"), __webpack_require__.e("lib_webparts_timeSheet_services_TimesheetService_js"), __webpack_require__.e("lib_webparts_timeSheet_views_ExportPanel_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ../views/ExportPanel */ 10695)); });
var TimeSheet = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(TimeSheet, _super);
    function TimeSheet(props) {
        var _this = _super.call(this, props) || this;
        _this.navigateTo = function (view, params) {
            _this.setState(function (prev) { return ({
                navState: (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, prev.navState), { currentView: view }), params),
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function () {
            var currentUser, _a;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__generator)(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, (0,_services_UserService__WEBPACK_IMPORTED_MODULE_2__.getCurrentUser)()];
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
            case 'Home': return react__WEBPACK_IMPORTED_MODULE_0__.createElement(HomePage, null);
            case 'DailyForm': return react__WEBPACK_IMPORTED_MODULE_0__.createElement(DailyTimesheetForm, { selectedDate: (_a = navState.selectedDate) !== null && _a !== void 0 ? _a : new Date() });
            case 'MyHistory': return react__WEBPACK_IMPORTED_MODULE_0__.createElement(MyTimesheetHistory, null);
            case 'ManagerDashboard': return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ManagerDashboard, null);
            case 'AdminPanel': return react__WEBPACK_IMPORTED_MODULE_0__.createElement(AdminPanel, null);
            case 'ExportPanel': return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ExportPanel, null);
            default: return react__WEBPACK_IMPORTED_MODULE_0__.createElement(HomePage, null);
        }
    };
    TimeSheet.prototype.render = function () {
        var _a = this.state, loading = _a.loading, error = _a.error, currentUser = _a.currentUser, navState = _a.navState;
        if (loading) {
            return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { padding: 40, textAlign: 'center' } },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_4__.Spinner, { size: _fluentui_react__WEBPACK_IMPORTED_MODULE_5__.SpinnerSize.large, label: "Loading Timesheet App..." })));
        }
        if (!currentUser) {
            return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_6__.MessageBar, { messageBarType: _fluentui_react__WEBPACK_IMPORTED_MODULE_7__.MessageBarType.error }, "Unable to load the application. Please refresh the page."));
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_context_AppContext__WEBPACK_IMPORTED_MODULE_1__.AppContext.Provider, { value: {
                currentUser: currentUser,
                navState: navState,
                navigateTo: this.navigateTo,
                navigateHome: this.navigateHome,
            } },
            error && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_6__.MessageBar, { messageBarType: _fluentui_react__WEBPACK_IMPORTED_MODULE_7__.MessageBarType.warning, isMultiline: false }, error)),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, { fallback: react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_4__.Spinner, { size: _fluentui_react__WEBPACK_IMPORTED_MODULE_5__.SpinnerSize.medium, label: "Loading..." }) }, this.renderView())));
    };
    return TimeSheet;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TimeSheet);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("bb8185c4a86b28b6bab7")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=time-sheet-web-part.0d757ce2a211cbd3699f.hot-update.js.map