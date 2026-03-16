"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentUser = getCurrentUser;
exports.isUserInGroup = isUserInGroup;
exports.getGroupMembers = getGroupMembers;
var tslib_1 = require("tslib");
var PnPSetup_1 = require("./PnPSetup");
var constants_1 = require("../utils/constants");
// Import required PnPjs sub-modules
require("@pnp/sp/site-users/web");
require("@pnp/sp/site-groups/web");
/**
 * Fetch the current user's profile and determine their role by checking
 * SharePoint group membership.
 *
 * Role precedence: Timesheet-Admins > Timesheet-Managers > Employee
 */
function getCurrentUser() {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var sp, userInfo, groups, groupNames, role;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    sp = (0, PnPSetup_1.getSP)();
                    return [4 /*yield*/, sp.web.currentUser
                            .select('Id', 'Title', 'Email', 'LoginName')()];
                case 1:
                    userInfo = _a.sent();
                    return [4 /*yield*/, sp.web.currentUser.groups
                            .select('Title')()];
                case 2:
                    groups = _a.sent();
                    groupNames = groups.map(function (g) { return g.Title; });
                    role = 'Employee';
                    if (groupNames.indexOf(constants_1.GROUPS.ADMINS) !== -1) {
                        role = 'Admin';
                    }
                    else if (groupNames.indexOf(constants_1.GROUPS.MANAGERS) !== -1) {
                        role = 'Manager';
                    }
                    return [2 /*return*/, {
                            id: userInfo.Id,
                            displayName: userInfo.Title,
                            email: userInfo.Email,
                            loginName: userInfo.LoginName,
                            role: role,
                        }];
            }
        });
    });
}
/**
 * Check whether a specific user (by email) is in a named SharePoint group.
 * Useful for ad-hoc permission checks.
 */
function isUserInGroup(groupName, email) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var sp, members, _a;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    sp = (0, PnPSetup_1.getSP)();
                    return [4 /*yield*/, sp.web.siteGroups
                            .getByName(groupName)
                            .users
                            .select('Email')()];
                case 1:
                    members = _b.sent();
                    return [2 /*return*/, members.filter(function (m) {
                            return m.Email.toLowerCase() === email.toLowerCase();
                        }).length > 0];
                case 2:
                    _a = _b.sent();
                    return [2 /*return*/, false];
                case 3: return [2 /*return*/];
            }
        });
    });
}
/**
 * Get all members of a SharePoint group (for manager dropdowns, etc.).
 */
function getGroupMembers(groupName) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var sp, members, _a;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    sp = (0, PnPSetup_1.getSP)();
                    return [4 /*yield*/, sp.web.siteGroups
                            .getByName(groupName)
                            .users
                            .select('Id', 'Title', 'Email')()];
                case 1:
                    members = _b.sent();
                    return [2 /*return*/, members.map(function (m) { return ({
                            id: m.Id,
                            displayName: m.Title,
                            email: m.Email,
                        }); })];
                case 2:
                    _a = _b.sent();
                    return [2 /*return*/, []];
                case 3: return [2 /*return*/];
            }
        });
    });
}
//# sourceMappingURL=UserService.js.map