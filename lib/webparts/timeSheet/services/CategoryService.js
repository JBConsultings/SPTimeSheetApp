import { __awaiter, __generator } from "tslib";
import { getSP } from './PnPSetup';
import { LISTS, CATEGORY_COLS } from '../utils/constants';
import '@pnp/sp/lists';
import '@pnp/sp/items';
var SELECT_FIELDS = [
    'Id',
    'Title',
    CATEGORY_COLS.DESCRIPTION,
    CATEGORY_COLS.IS_ACTIVE,
    CATEGORY_COLS.SORT_ORDER,
];
function mapItem(item) {
    return {
        id: item.Id,
        title: item.Title,
        description: item[CATEGORY_COLS.DESCRIPTION],
        isActive: item[CATEGORY_COLS.IS_ACTIVE],
        sortOrder: item[CATEGORY_COLS.SORT_ORDER],
    };
}
/**
 * Get all active activity categories ordered by SortOrder (for employee dropdowns).
 */
export function getActiveCategories() {
    return __awaiter(this, void 0, void 0, function () {
        var sp, items;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    sp = getSP();
                    return [4 /*yield*/, (_a = sp.web.lists
                            .getByTitle(LISTS.ACTIVITY_CATEGORIES)
                            .items)
                            .select.apply(_a, SELECT_FIELDS).filter("".concat(CATEGORY_COLS.IS_ACTIVE, " eq 1"))
                            .orderBy(CATEGORY_COLS.SORT_ORDER, true)
                            .top(500)()];
                case 1:
                    items = _b.sent();
                    return [2 /*return*/, items.map(mapItem)];
            }
        });
    });
}
/**
 * Get all categories (active and inactive) for the admin panel.
 */
export function getAllCategories() {
    return __awaiter(this, void 0, void 0, function () {
        var sp, items;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    sp = getSP();
                    return [4 /*yield*/, (_a = sp.web.lists
                            .getByTitle(LISTS.ACTIVITY_CATEGORIES)
                            .items)
                            .select.apply(_a, SELECT_FIELDS).orderBy(CATEGORY_COLS.SORT_ORDER, true)
                            .top(500)()];
                case 1:
                    items = _b.sent();
                    return [2 /*return*/, items.map(mapItem)];
            }
        });
    });
}
/**
 * Add a new activity category.
 */
export function addCategory(category) {
    return __awaiter(this, void 0, void 0, function () {
        var sp, result;
        var _a;
        var _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    sp = getSP();
                    return [4 /*yield*/, sp.web.lists
                            .getByTitle(LISTS.ACTIVITY_CATEGORIES)
                            .items.add((_a = {
                                Title: category.title
                            },
                            _a[CATEGORY_COLS.DESCRIPTION] = (_b = category.description) !== null && _b !== void 0 ? _b : '',
                            _a[CATEGORY_COLS.IS_ACTIVE] = category.isActive,
                            _a[CATEGORY_COLS.SORT_ORDER] = (_c = category.sortOrder) !== null && _c !== void 0 ? _c : 0,
                            _a))];
                case 1:
                    result = _d.sent();
                    return [2 /*return*/, mapItem(result)];
            }
        });
    });
}
/**
 * Update an existing category.
 */
export function updateCategory(id, changes) {
    return __awaiter(this, void 0, void 0, function () {
        var sp, payload;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    sp = getSP();
                    payload = {};
                    if (changes.title !== undefined)
                        payload.Title = changes.title;
                    if (changes.description !== undefined)
                        payload[CATEGORY_COLS.DESCRIPTION] = changes.description;
                    if (changes.isActive !== undefined)
                        payload[CATEGORY_COLS.IS_ACTIVE] = changes.isActive;
                    if (changes.sortOrder !== undefined)
                        payload[CATEGORY_COLS.SORT_ORDER] = changes.sortOrder;
                    return [4 /*yield*/, sp.web.lists
                            .getByTitle(LISTS.ACTIVITY_CATEGORIES)
                            .items.getById(id)
                            .update(payload)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
/**
 * Soft-delete a category.
 */
export function deactivateCategory(id) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, updateCategory(id, { isActive: false })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
/**
 * Re-activate a category.
 */
export function activateCategory(id) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, updateCategory(id, { isActive: true })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
/**
 * Permanently delete a category from the list.
 */
export function deleteCategory(id) {
    return __awaiter(this, void 0, void 0, function () {
        var sp;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    sp = getSP();
                    return [4 /*yield*/, sp.web.lists
                            .getByTitle(LISTS.ACTIVITY_CATEGORIES)
                            .items.getById(id)
                            .delete()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
//# sourceMappingURL=CategoryService.js.map