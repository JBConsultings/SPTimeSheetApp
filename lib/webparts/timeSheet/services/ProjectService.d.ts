import { IProject } from '../models/ITimesheetModels';
import '@pnp/sp/lists';
import '@pnp/sp/items';
/**
 * Get all active projects (for employee dropdowns).
 */
export declare function getActiveProjects(): Promise<IProject[]>;
/**
 * Get all projects (active and inactive) for the admin panel.
 */
export declare function getAllProjects(): Promise<IProject[]>;
/**
 * Add a new project.
 */
export declare function addProject(project: Omit<IProject, 'id'>): Promise<IProject>;
/**
 * Update an existing project.
 */
export declare function updateProject(id: number, changes: Partial<Omit<IProject, 'id'>>): Promise<void>;
/**
 * Soft-delete a project (set IsActive = false).
 */
export declare function deactivateProject(id: number): Promise<void>;
/**
 * Re-activate a previously deactivated project.
 */
export declare function activateProject(id: number): Promise<void>;
//# sourceMappingURL=ProjectService.d.ts.map