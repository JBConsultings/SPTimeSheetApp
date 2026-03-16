import { getSP } from './PnPSetup';
import { ICurrentUser, UserRole } from '../models/ITimesheetModels';
import { GROUPS } from '../utils/constants';

// Import required PnPjs sub-modules
import '@pnp/sp/site-users/web';
import '@pnp/sp/site-groups/web';

/**
 * Fetch the current user's profile and determine their role by checking
 * SharePoint group membership.
 *
 * Role precedence: Timesheet-Admins > Timesheet-Managers > Employee
 */
export async function getCurrentUser(): Promise<ICurrentUser> {
  const sp = getSP();

  // Fetch current user info
  const userInfo = await sp.web.currentUser
    .select('Id', 'Title', 'Email', 'LoginName')();

  // Fetch all groups this user belongs to
  const groups = await sp.web.currentUser.groups
    .select('Title')();

  const groupNames = groups.map((g: { Title: string }) => g.Title);

  let role: UserRole = 'Employee';
  if (groupNames.indexOf(GROUPS.ADMINS) !== -1) {
    role = 'Admin';
  } else if (groupNames.indexOf(GROUPS.MANAGERS) !== -1) {
    role = 'Manager';
  }

  return {
    id: userInfo.Id,
    displayName: userInfo.Title,
    email: userInfo.Email,
    loginName: userInfo.LoginName,
    role,
  };
}

/**
 * Check whether a specific user (by email) is in a named SharePoint group.
 * Useful for ad-hoc permission checks.
 */
export async function isUserInGroup(groupName: string, email: string): Promise<boolean> {
  try {
    const sp = getSP();
    const members = await sp.web.siteGroups
      .getByName(groupName)
      .users
      .select('Email')();

    return members.filter((m: { Email: string }) =>
      m.Email.toLowerCase() === email.toLowerCase()
    ).length > 0;
  } catch {
    return false;
  }
}

/**
 * Get all members of a SharePoint group (for manager dropdowns, etc.).
 */
export async function getGroupMembers(groupName: string): Promise<{ id: number; displayName: string; email: string }[]> {
  try {
    const sp = getSP();
    const members = await sp.web.siteGroups
      .getByName(groupName)
      .users
      .select('Id', 'Title', 'Email')();

    return members.map((m: { Id: number; Title: string; Email: string }) => ({
      id: m.Id,
      displayName: m.Title,
      email: m.Email,
    }));
  } catch {
    return [];
  }
}
