import { getGraph } from './PnPSetup';
import '@pnp/graph/users';

export interface IDirectReport {
  id: string;
  displayName: string;
  mail: string;
  jobTitle: string;
  department: string;
}

/**
 * Fetch the current user's direct reports from Microsoft Graph
 * using @pnp/graph graphfi + SPFx behaviour.
 */
export function getDirectReports(): Promise<IDirectReport[]> {
  const graph = getGraph();
  return graph.me.directReports
    .select('id,displayName,mail,jobTitle,department')()
    .then((result) => (result as IDirectReport[]) || []);
}
