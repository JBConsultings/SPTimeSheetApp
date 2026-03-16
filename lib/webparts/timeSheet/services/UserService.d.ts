import { ICurrentUser } from '../models/ITimesheetModels';
import '@pnp/sp/site-users/web';
import '@pnp/sp/site-groups/web';
/**
 * Fetch the current user's profile and determine their role by checking
 * SharePoint group membership.
 *
 * Role precedence: Timesheet-Admins > Timesheet-Managers > Employee
 */
export declare function getCurrentUser(): Promise<ICurrentUser>;
/**
 * Check whether a specific user (by email) is in a named SharePoint group.
 * Useful for ad-hoc permission checks.
 */
export declare function isUserInGroup(groupName: string, email: string): Promise<boolean>;
/**
 * Get all members of a SharePoint group (for manager dropdowns, etc.).
 */
export declare function getGroupMembers(groupName: string): Promise<{
    id: number;
    displayName: string;
    email: string;
}[]>;
//# sourceMappingURL=UserService.d.ts.map