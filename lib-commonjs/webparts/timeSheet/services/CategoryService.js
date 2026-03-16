"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getActiveCategories = getActiveCategories;
exports.getAllCategories = getAllCategories;
exports.addCategory = addCategory;
exports.updateCategory = updateCategory;
exports.deactivateCategory = deactivateCategory;
exports.activateCategory = activateCategory;
var tslib_1 = require("tslib");
var PnPSetup_1 = require("./PnPSetup");
var constants_1 = require("../utils/constants");
require("@pnp/sp/lists");
require("@pnp/sp/items");
var SELECT_FIELDS = [
    'Id',
    'Title',
    constants_1.CATEGORY_COLS.DESCRIPTION,
    constants_1.CATEGORY_COLS.IS_ACTIVE,
    constants_1.CATEGORY_COLS.SORT_ORDER,
];
function mapItem(item) {
    return {
        id: item.Id,
        title: item.Title,
        description: item[constants_1.CATEGORY_COLS.DESCRIPTION],
        isActive: item[constants_1.CATEGORY_COLS.IS_ACTIVE],
        sortOrder: item[constants_1.CATEGORY_COLS.SORT_ORDER],
    };
}
/**
 * Get all active activity categories ordered by SortOrder (for employee dropdowns).
 */
function getActiveCategories() {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var sp, items;
        var _a;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    sp = (0, PnPSetup_1.getSP)();
                    return [4 /*yield*/, (_a = sp.web.lists
                            .getByTitle(constants_1.LISTS.ACTIVITY_CATEGORIES)
                            .items)
                            .select.apply(_a, SELECT_FIELDS).filter("".concat(constants_1.CATEGORY_COLS.IS_ACTIVE, " eq 1"))
                            .orderBy(constants_1.CATEGORY_COLS.SORT_ORDER, true)
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
function getAllCategories() {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var sp, items;
        var _a;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    sp = (0, PnPSetup_1.getSP)();
                    return [4 /*yield*/, (_a = sp.web.lists
                            .getByTitle(constants_1.LISTS.ACTIVITY_CATEGORIES)
                            .items)
                            .select.apply(_a, SELECT_FIELDS).orderBy(constants_1.CATEGORY_COLS.SORT_ORDER, true)
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
function addCategory(category) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var sp, result;
        var _a;
        var _b, _c;
        return tslib_1.__generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    sp = (0, PnPSetup_1.getSP)();
                    return [4 /*yield*/, sp.web.lists
                            .getByTitle(constants_1.LISTS.ACTIVITY_CATEGORIES)
                            .items.add((_a = {
                                Title: category.title
                            },
                            _a[constants_1.CATEGORY_COLS.DESCRIPTION] = (_b = category.description) !== null && _b !== void 0 ? _b : '',
                            _a[constants_1.CATEGORY_COLS.IS_ACTIVE] = category.isActive,
                            _a[constants_1.CATEGORY_COLS.SORT_ORDER] = (_c = category.sortOrder) !== null && _c !== void 0 ? _c : 0,
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
function updateCategory(id, changes) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var sp, payload;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    sp = (0, PnPSetup_1.getSP)();
                    payload = {};
                    if (changes.title !== undefined)
                        payload.Title = changes.title;
                    if (changes.description !== undefined)
                        payload[constants_1.CATEGORY_COLS.DESCRIPTION] = changes.description;
                    if (changes.isActive !== undefined)
                        payload[constants_1.CATEGORY_COLS.IS_ACTIVE] = changes.isActive;
                    if (changes.sortOrder !== undefined)
                        payload[constants_1.CATEGORY_COLS.SORT_ORDER] = changes.sortOrder;
                    return [4 /*yield*/, sp.web.lists
                            .getByTitle(constants_1.LISTS.ACTIVITY_CATEGORIES)
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
function deactivateCategory(id) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
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
function activateCategory(id) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, updateCategory(id, { isActive: true })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
//# sourceMappingURL=CategoryService.js.map