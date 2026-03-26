"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var ReactDom = tslib_1.__importStar(require("react-dom"));
var sp_core_library_1 = require("@microsoft/sp-core-library");
var sp_webpart_base_1 = require("@microsoft/sp-webpart-base");
var PnPSetup_1 = require("./services/PnPSetup");
var TimeSheet_1 = tslib_1.__importDefault(require("./components/TimeSheet"));
var TimeSheetWebPart = /** @class */ (function (_super) {
    tslib_1.__extends(TimeSheetWebPart, _super);
    function TimeSheetWebPart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isDarkTheme = false;
        return _this;
    }
    TimeSheetWebPart.prototype.render = function () {
        var element = React.createElement(TimeSheet_1.default, {
            spContext: this.context,
            isDarkTheme: this._isDarkTheme,
            hasTeamsContext: !!this.context.sdks.microsoftTeams,
            userDisplayName: this.context.pageContext.user.displayName,
        });
        ReactDom.render(element, this.domElement);
    };
    TimeSheetWebPart.prototype.onInit = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Initialise PnPjs once with the web part context
                        (0, PnPSetup_1.initPnP)(this.context);
                        return [4 /*yield*/, _super.prototype.onInit.call(this)];
                    case 1:
                        _a.sent();
                        console.log("Locale:-=-=-=-=-=-=-", this.context.pageContext.cultureInfo.currentUICultureName);
                        return [2 /*return*/];
                }
            });
        });
    };
    TimeSheetWebPart.prototype.onThemeChanged = function (currentTheme) {
        if (!currentTheme) {
            return;
        }
        this._isDarkTheme = !!currentTheme.isInverted;
        var semanticColors = currentTheme.semanticColors;
        if (semanticColors) {
            this.domElement.style.setProperty("--bodyText", semanticColors.bodyText || null);
            this.domElement.style.setProperty("--link", semanticColors.link || null);
            this.domElement.style.setProperty("--linkHovered", semanticColors.linkHovered || null);
        }
    };
    TimeSheetWebPart.prototype.onDispose = function () {
        ReactDom.unmountComponentAtNode(this.domElement);
    };
    Object.defineProperty(TimeSheetWebPart.prototype, "dataVersion", {
        get: function () {
            return sp_core_library_1.Version.parse("1.0");
        },
        enumerable: false,
        configurable: true
    });
    TimeSheetWebPart.prototype.getPropertyPaneConfiguration = function () {
        return { pages: [] };
    };
    return TimeSheetWebPart;
}(sp_webpart_base_1.BaseClientSideWebPart));
exports.default = TimeSheetWebPart;
//# sourceMappingURL=TimeSheetWebPart.js.map