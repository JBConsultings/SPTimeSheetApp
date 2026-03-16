import { getSP } from './PnPSetup';
import { IActivityCategory } from '../models/ITimesheetModels';
import { LISTS, CATEGORY_COLS } from '../utils/constants';

import '@pnp/sp/lists';
import '@pnp/sp/items';

const SELECT_FIELDS = [
  'Id',
  'Title',
  CATEGORY_COLS.DESCRIPTION,
  CATEGORY_COLS.IS_ACTIVE,
  CATEGORY_COLS.SORT_ORDER,
];

function mapItem(item: Record<string, unknown>): IActivityCategory {
  return {
    id: item.Id as number,
    title: item.Title as string,
    description: item[CATEGORY_COLS.DESCRIPTION] as string | undefined,
    isActive: item[CATEGORY_COLS.IS_ACTIVE] as boolean,
    sortOrder: item[CATEGORY_COLS.SORT_ORDER] as number | undefined,
  };
}

/**
 * Get all active activity categories ordered by SortOrder (for employee dropdowns).
 */
export async function getActiveCategories(): Promise<IActivityCategory[]> {
  const sp = getSP();
  const items = await sp.web.lists
    .getByTitle(LISTS.ACTIVITY_CATEGORIES)
    .items
    .select(...SELECT_FIELDS)
    .filter(`${CATEGORY_COLS.IS_ACTIVE} eq 1`)
    .orderBy(CATEGORY_COLS.SORT_ORDER, true)
    .top(500)();

  return items.map(mapItem);
}

/**
 * Get all categories (active and inactive) for the admin panel.
 */
export async function getAllCategories(): Promise<IActivityCategory[]> {
  const sp = getSP();
  const items = await sp.web.lists
    .getByTitle(LISTS.ACTIVITY_CATEGORIES)
    .items
    .select(...SELECT_FIELDS)
    .orderBy(CATEGORY_COLS.SORT_ORDER, true)
    .top(500)();

  return items.map(mapItem);
}

/**
 * Add a new activity category.
 */
export async function addCategory(category: Omit<IActivityCategory, 'id'>): Promise<IActivityCategory> {
  const sp = getSP();
  const result = await sp.web.lists
    .getByTitle(LISTS.ACTIVITY_CATEGORIES)
    .items.add({
      Title: category.title,
      [CATEGORY_COLS.DESCRIPTION]: category.description ?? '',
      [CATEGORY_COLS.IS_ACTIVE]: category.isActive,
      [CATEGORY_COLS.SORT_ORDER]: category.sortOrder ?? 0,
    });

  return mapItem(result as unknown as Record<string, unknown>);
}

/**
 * Update an existing category.
 */
export async function updateCategory(id: number, changes: Partial<Omit<IActivityCategory, 'id'>>): Promise<void> {
  const sp = getSP();
  const payload: Record<string, unknown> = {};

  if (changes.title !== undefined) payload.Title = changes.title;
  if (changes.description !== undefined) payload[CATEGORY_COLS.DESCRIPTION] = changes.description;
  if (changes.isActive !== undefined) payload[CATEGORY_COLS.IS_ACTIVE] = changes.isActive;
  if (changes.sortOrder !== undefined) payload[CATEGORY_COLS.SORT_ORDER] = changes.sortOrder;

  await sp.web.lists
    .getByTitle(LISTS.ACTIVITY_CATEGORIES)
    .items.getById(id)
    .update(payload);
}

/**
 * Soft-delete a category.
 */
export async function deactivateCategory(id: number): Promise<void> {
  await updateCategory(id, { isActive: false });
}

/**
 * Re-activate a category.
 */
export async function activateCategory(id: number): Promise<void> {
  await updateCategory(id, { isActive: true });
}
