import { IActivityCategory } from '../models/ITimesheetModels';
import '@pnp/sp/lists';
import '@pnp/sp/items';
/**
 * Get all active activity categories ordered by SortOrder (for employee dropdowns).
 */
export declare function getActiveCategories(): Promise<IActivityCategory[]>;
/**
 * Get all categories (active and inactive) for the admin panel.
 */
export declare function getAllCategories(): Promise<IActivityCategory[]>;
/**
 * Add a new activity category.
 */
export declare function addCategory(category: Omit<IActivityCategory, 'id'>): Promise<IActivityCategory>;
/**
 * Update an existing category.
 */
export declare function updateCategory(id: number, changes: Partial<Omit<IActivityCategory, 'id'>>): Promise<void>;
/**
 * Soft-delete a category.
 */
export declare function deactivateCategory(id: number): Promise<void>;
/**
 * Re-activate a category.
 */
export declare function activateCategory(id: number): Promise<void>;
//# sourceMappingURL=CategoryService.d.ts.map