import { SPFI } from '@pnp/sp';
import { GraphFI } from '@pnp/graph';
import { WebPartContext } from '@microsoft/sp-webpart-base';
import '@pnp/sp/webs';
import '@pnp/sp/lists';
import '@pnp/sp/items';
import '@pnp/sp/site-users/web';
import '@pnp/sp/site-groups/web';
import '@pnp/sp/fields';
import '@pnp/sp/batching';
/**
 * Initialise PnPjs (SP + Graph) with the SPFx web part context.
 * Call this once from TimeSheetWebPart.onInit().
 */
export declare function initPnP(context: WebPartContext): void;
/**
 * Return the configured SPFI instance.
 * Throws if initPnP() has not been called yet.
 */
export declare function getSP(): SPFI;
/**
 * Return the configured GraphFI instance.
 * Throws if initPnP() has not been called yet.
 */
export declare function getGraph(): GraphFI;
//# sourceMappingURL=PnPSetup.d.ts.map