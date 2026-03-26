import { __awaiter, __extends, __generator } from "tslib";
import * as React from "react";
import * as ReactDom from "react-dom";
import { Version } from "@microsoft/sp-core-library";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import { initPnP } from "./services/PnPSetup";
import TimeSheet from "./components/TimeSheet";
var TimeSheetWebPart = /** @class */ (function (_super) {
    __extends(TimeSheetWebPart, _super);
    function TimeSheetWebPart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isDarkTheme = false;
        return _this;
    }
    TimeSheetWebPart.prototype.render = function () {
        var element = React.createElement(TimeSheet, {
            spContext: this.context,
            isDarkTheme: this._isDarkTheme,
            hasTeamsContext: !!this.context.sdks.microsoftTeams,
            userDisplayName: this.context.pageContext.user.displayName,
        });
        ReactDom.render(element, this.domElement);
    };
    TimeSheetWebPart.prototype.onInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Initialise PnPjs once with the web part context
                        initPnP(this.context);
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
            return Version.parse("1.0");
        },
        enumerable: false,
        configurable: true
    });
    TimeSheetWebPart.prototype.getPropertyPaneConfiguration = function () {
        return { pages: [] };
    };
    return TimeSheetWebPart;
}(BaseClientSideWebPart));
export default TimeSheetWebPart;
//# sourceMappingURL=TimeSheetWebPart.js.map