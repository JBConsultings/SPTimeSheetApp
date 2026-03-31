"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initPnP = initPnP;
exports.getSP = getSP;
exports.getGraph = getGraph;
var sp_1 = require("@pnp/sp");
var spfx_1 = require("@pnp/sp/behaviors/spfx");
var graph_1 = require("@pnp/graph");
var spfx_2 = require("@pnp/graph/behaviors/spfx");
// Import all PnPjs sub-modules we use across services
require("@pnp/sp/webs");
require("@pnp/sp/lists");
require("@pnp/sp/items");
require("@pnp/sp/site-users/web");
require("@pnp/sp/site-groups/web");
require("@pnp/sp/fields");
require("@pnp/sp/batching");
var _sp;
var _graph;
/**
 * Initialise PnPjs (SP + Graph) with the SPFx web part context.
 * Call this once from TimeSheetWebPart.onInit().
 */
function initPnP(context) {
    _sp = (0, sp_1.spfi)().using((0, spfx_1.SPFx)(context));
    _graph = (0, graph_1.graphfi)().using((0, spfx_2.SPFx)(context));
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
/**
 * Return the configured GraphFI instance.
 * Throws if initPnP() has not been called yet.
 */
function getGraph() {
    if (!_graph) {
        throw new Error('PnPjs has not been initialised. Call initPnP(context) first.');
    }
    return _graph;
}
//# sourceMappingURL=PnPSetup.js.map