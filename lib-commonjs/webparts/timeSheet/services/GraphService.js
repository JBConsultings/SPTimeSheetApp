"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDirectReports = getDirectReports;
var PnPSetup_1 = require("./PnPSetup");
require("@pnp/graph/users");
/**
 * Fetch the current user's direct reports from Microsoft Graph
 * using @pnp/graph graphfi + SPFx behaviour.
 */
function getDirectReports() {
    var graph = (0, PnPSetup_1.getGraph)();
    return graph.me.directReports
        .select('id,displayName,mail,jobTitle,department')()
        .then(function (result) { return result || []; });
}
//# sourceMappingURL=GraphService.js.map