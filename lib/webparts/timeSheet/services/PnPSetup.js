import { spfi } from '@pnp/sp';
import { SPFx } from '@pnp/sp/behaviors/spfx';
// Import all PnPjs sub-modules we use across services
import '@pnp/sp/webs';
import '@pnp/sp/lists';
import '@pnp/sp/items';
import '@pnp/sp/site-users/web';
import '@pnp/sp/site-groups/web';
import '@pnp/sp/fields';
import '@pnp/sp/batching';
var _sp;
/**
 * Initialise PnPjs with the SPFx web part context.
 * Call this once from TimeSheetWebPart.onInit().
 */
export function initPnP(context) {
    _sp = spfi().using(SPFx(context));
}
/**
 * Return the configured SPFI instance.
 * Throws if initPnP() has not been called yet.
 */
export function getSP() {
    if (!_sp) {
        throw new Error('PnPjs has not been initialised. Call initPnP(context) first.');
    }
    return _sp;
}
//# sourceMappingURL=PnPSetup.js.map