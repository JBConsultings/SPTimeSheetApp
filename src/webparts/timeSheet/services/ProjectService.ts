import { getSP } from './PnPSetup';
import { IProject } from '../models/ITimesheetModels';
import { LISTS, PROJECT_COLS } from '../utils/constants';

import '@pnp/sp/lists';
import '@pnp/sp/items';

const SELECT_FIELDS = [
  'Id',
  'Title',
  PROJECT_COLS.PROJECT_CODE,
  PROJECT_COLS.DESCRIPTION,
  PROJECT_COLS.IS_ACTIVE,
  PROJECT_COLS.CLIENT_NAME,
  PROJECT_COLS.START_DATE,
  PROJECT_COLS.END_DATE,
];

function mapItem(item: Record<string, unknown>): IProject {
  return {
    id: item.Id as number,
    title: item.Title as string,
    projectCode: item[PROJECT_COLS.PROJECT_CODE] as string,
    description: item[PROJECT_COLS.DESCRIPTION] as string | undefined,
    isActive: item[PROJECT_COLS.IS_ACTIVE] as boolean,
    clientName: item[PROJECT_COLS.CLIENT_NAME] as string | undefined,
    startDate: item[PROJECT_COLS.START_DATE] ? new Date(item[PROJECT_COLS.START_DATE] as string) : undefined,
    endDate: item[PROJECT_COLS.END_DATE] ? new Date(item[PROJECT_COLS.END_DATE] as string) : undefined,
  };
}

/**
 * Get all active projects (for employee dropdowns).
 */
export async function getActiveProjects(): Promise<IProject[]> {
  const sp = getSP();
  const items = await sp.web.lists
    .getByTitle(LISTS.PROJECTS)
    .items
    .select(...SELECT_FIELDS)
    .filter(`${PROJECT_COLS.IS_ACTIVE} eq 1`)
    .orderBy('Title', true)
    .top(500)();

  return items.map(mapItem);
}

/**
 * Get all projects (active and inactive) for the admin panel.
 */
export async function getAllProjects(): Promise<IProject[]> {
  const sp = getSP();
  const items = await sp.web.lists
    .getByTitle(LISTS.PROJECTS)
    .items
    .select(...SELECT_FIELDS)
    .orderBy('Title', true)
    .top(500)();

  return items.map(mapItem);
}

/**
 * Add a new project.
 */
export async function addProject(project: Omit<IProject, 'id'>): Promise<IProject> {
  const sp = getSP();
  const result = await sp.web.lists
    .getByTitle(LISTS.PROJECTS)
    .items.add({
      Title: project.title,
      [PROJECT_COLS.PROJECT_CODE]: project.projectCode,
      [PROJECT_COLS.DESCRIPTION]: project.description ?? '',
      [PROJECT_COLS.IS_ACTIVE]: project.isActive,
      [PROJECT_COLS.CLIENT_NAME]: project.clientName ?? '',
      [PROJECT_COLS.START_DATE]: project.startDate?.toISOString() ?? null,
      [PROJECT_COLS.END_DATE]: project.endDate?.toISOString() ?? null,
    });

  return mapItem(result as unknown as Record<string, unknown>);
}

/**
 * Update an existing project.
 */
export async function updateProject(id: number, changes: Partial<Omit<IProject, 'id'>>): Promise<void> {
  const sp = getSP();
  const payload: Record<string, unknown> = {};

  if (changes.title !== undefined) payload.Title = changes.title;
  if (changes.projectCode !== undefined) payload[PROJECT_COLS.PROJECT_CODE] = changes.projectCode;
  if (changes.description !== undefined) payload[PROJECT_COLS.DESCRIPTION] = changes.description;
  if (changes.isActive !== undefined) payload[PROJECT_COLS.IS_ACTIVE] = changes.isActive;
  if (changes.clientName !== undefined) payload[PROJECT_COLS.CLIENT_NAME] = changes.clientName;
  if (changes.startDate !== undefined) payload[PROJECT_COLS.START_DATE] = changes.startDate?.toISOString() ?? null;
  if (changes.endDate !== undefined) payload[PROJECT_COLS.END_DATE] = changes.endDate?.toISOString() ?? null;

  await sp.web.lists
    .getByTitle(LISTS.PROJECTS)
    .items.getById(id)
    .update(payload);
}

/**
 * Soft-delete a project (set IsActive = false).
 */
export async function deactivateProject(id: number): Promise<void> {
  await updateProject(id, { isActive: false });
}

/**
 * Re-activate a previously deactivated project.
 */
export async function activateProject(id: number): Promise<void> {
  await updateProject(id, { isActive: true });
}
