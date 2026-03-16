"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initPnP = initPnP;
exports.getSP = getSP;
var sp_1 = require("@pnp/sp");
var spfx_1 = require("@pnp/sp/behaviors/spfx");
// Import all PnPjs sub-modules we use across services
require("@pnp/sp/webs");
require("@pnp/sp/lists");
require("@pnp/sp/items");
require("@pnp/sp/site-users/web");
require("@pnp/sp/site-groups/web");
require("@pnp/sp/fields");
require("@pnp/sp/batching");
var _sp;
/**
 * Initialise PnPjs with the SPFx web part context.
 * Call this once from TimeSheetWebPart.onInit().
 */
function initPnP(context) {
    _sp = (0, sp_1.spfi)().using((0, spfx_1.SPFx)(context));
}
/**
 * Return the configured SPFI instance.
 * Throws if initPnP() has not been called yet.
 */
function getSP() {
    if (!_sp) {
        throw new Error('PnPjs has not been initialised. Call initPnP(context) first.');
    }
    return _sp;
}
//# sourceMappingURL=PnPSetup.js.map