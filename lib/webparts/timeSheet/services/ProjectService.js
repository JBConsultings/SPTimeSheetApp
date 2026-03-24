import { __awaiter, __generator } from "tslib";
import { getSP } from './PnPSetup';
import { LISTS, PROJECT_COLS } from '../utils/constants';
import '@pnp/sp/lists';
import '@pnp/sp/items';
var SELECT_FIELDS = [
    'Id',
    'Title',
    PROJECT_COLS.PROJECT_CODE,
    PROJECT_COLS.DESCRIPTION,
    PROJECT_COLS.IS_ACTIVE,
    PROJECT_COLS.CLIENT_NAME,
    PROJECT_COLS.START_DATE,
    PROJECT_COLS.END_DATE,
];
function mapItem(item) {
    return {
        id: item.Id,
        title: item.Title,
        projectCode: item[PROJECT_COLS.PROJECT_CODE],
        description: item[PROJECT_COLS.DESCRIPTION],
        isActive: item[PROJECT_COLS.IS_ACTIVE],
        clientName: item[PROJECT_COLS.CLIENT_NAME],
        startDate: item[PROJECT_COLS.START_DATE] ? new Date(item[PROJECT_COLS.START_DATE]) : undefined,
        endDate: item[PROJECT_COLS.END_DATE] ? new Date(item[PROJECT_COLS.END_DATE]) : undefined,
    };
}
/**
 * Get all active projects (for employee dropdowns).
 */
export function getActiveProjects() {
    return __awaiter(this, void 0, void 0, function () {
        var sp, items;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    sp = getSP();
                    return [4 /*yield*/, (_a = sp.web.lists
                            .getByTitle(LISTS.PROJECTS)
                            .items)
                            .select.apply(_a, SELECT_FIELDS).filter("".concat(PROJECT_COLS.IS_ACTIVE, " eq 1"))
                            .orderBy('Title', true)
                            .top(500)()];
                case 1:
                    items = _b.sent();
                    return [2 /*return*/, items.map(mapItem)];
            }
        });
    });
}
/**
 * Get all projects (active and inactive) for the admin panel.
 */
export function getAllProjects() {
    return __awaiter(this, void 0, void 0, function () {
        var sp, items;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    sp = getSP();
                    return [4 /*yield*/, (_a = sp.web.lists
                            .getByTitle(LISTS.PROJECTS)
                            .items)
                            .select.apply(_a, SELECT_FIELDS).orderBy('Title', true)
                            .top(500)()];
                case 1:
                    items = _b.sent();
                    return [2 /*return*/, items.map(mapItem)];
            }
        });
    });
}
/**
 * Add a new project.
 */
export function addProject(project) {
    return __awaiter(this, void 0, void 0, function () {
        var sp, result;
        var _a;
        var _b, _c, _d, _e, _f, _g;
        return __generator(this, function (_h) {
            switch (_h.label) {
                case 0:
                    sp = getSP();
                    return [4 /*yield*/, sp.web.lists
                            .getByTitle(LISTS.PROJECTS)
                            .items.add((_a = {
                                Title: project.title
                            },
                            _a[PROJECT_COLS.PROJECT_CODE] = project.projectCode,
                            _a[PROJECT_COLS.DESCRIPTION] = (_b = project.description) !== null && _b !== void 0 ? _b : '',
                            _a[PROJECT_COLS.IS_ACTIVE] = project.isActive,
                            _a[PROJECT_COLS.CLIENT_NAME] = (_c = project.clientName) !== null && _c !== void 0 ? _c : '',
                            _a[PROJECT_COLS.START_DATE] = (_e = (_d = project.startDate) === null || _d === void 0 ? void 0 : _d.toISOString()) !== null && _e !== void 0 ? _e : null,
                            _a[PROJECT_COLS.END_DATE] = (_g = (_f = project.endDate) === null || _f === void 0 ? void 0 : _f.toISOString()) !== null && _g !== void 0 ? _g : null,
                            _a))];
                case 1:
                    result = _h.sent();
                    return [2 /*return*/, mapItem(result)];
            }
        });
    });
}
/**
 * Update an existing project.
 */
export function updateProject(id, changes) {
    return __awaiter(this, void 0, void 0, function () {
        var sp, payload;
        var _a, _b, _c, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    sp = getSP();
                    payload = {};
                    if (changes.title !== undefined)
                        payload.Title = changes.title;
                    if (changes.projectCode !== undefined)
                        payload[PROJECT_COLS.PROJECT_CODE] = changes.projectCode;
                    if (changes.description !== undefined)
                        payload[PROJECT_COLS.DESCRIPTION] = changes.description;
                    if (changes.isActive !== undefined)
                        payload[PROJECT_COLS.IS_ACTIVE] = changes.isActive;
                    if (changes.clientName !== undefined)
                        payload[PROJECT_COLS.CLIENT_NAME] = changes.clientName;
                    if (changes.startDate !== undefined)
                        payload[PROJECT_COLS.START_DATE] = (_b = (_a = changes.startDate) === null || _a === void 0 ? void 0 : _a.toISOString()) !== null && _b !== void 0 ? _b : null;
                    if (changes.endDate !== undefined)
                        payload[PROJECT_COLS.END_DATE] = (_d = (_c = changes.endDate) === null || _c === void 0 ? void 0 : _c.toISOString()) !== null && _d !== void 0 ? _d : null;
                    return [4 /*yield*/, sp.web.lists
                            .getByTitle(LISTS.PROJECTS)
                            .items.getById(id)
                            .update(payload)];
                case 1:
                    _e.sent();
                    return [2 /*return*/];
            }
        });
    });
}
/**
 * Soft-delete a project (set IsActive = false).
 */
export function deactivateProject(id) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, updateProject(id, { isActive: false })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
/**
 * Re-activate a previously deactivated project.
 */
export function activateProject(id) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, updateProject(id, { isActive: true })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
/**
 * Permanently delete a project from the list.
 */
export function deleteProject(id) {
    return __awaiter(this, void 0, void 0, function () {
        var sp;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    sp = getSP();
                    return [4 /*yield*/, sp.web.lists
                            .getByTitle(LISTS.PROJECTS)
                            .items.getById(id)
                            .delete()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
//# sourceMappingURL=ProjectService.js.map