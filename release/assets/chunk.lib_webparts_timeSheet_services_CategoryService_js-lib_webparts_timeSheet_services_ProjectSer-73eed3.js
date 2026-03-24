"use strict";
(self["webpackJsonp_c7e5e177-9baf-42a9-91c9-2ea9fecc19a8_0.0.1"] = self["webpackJsonp_c7e5e177-9baf-42a9-91c9-2ea9fecc19a8_0.0.1"] || []).push([["lib_webparts_timeSheet_services_CategoryService_js-lib_webparts_timeSheet_services_ProjectSer-73eed3"],{

/***/ 64268:
/*!************************************************************!*\
  !*** ./lib/webparts/timeSheet/services/CategoryService.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   activateCategory: () => (/* binding */ activateCategory),
/* harmony export */   addCategory: () => (/* binding */ addCategory),
/* harmony export */   deactivateCategory: () => (/* binding */ deactivateCategory),
/* harmony export */   deleteCategory: () => (/* binding */ deleteCategory),
/* harmony export */   getActiveCategories: () => (/* binding */ getActiveCategories),
/* harmony export */   getAllCategories: () => (/* binding */ getAllCategories),
/* harmony export */   updateCategory: () => (/* binding */ updateCategory)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 10196);
/* harmony import */ var _PnPSetup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PnPSetup */ 89916);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/constants */ 47293);
/* harmony import */ var _pnp_sp_lists__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pnp/sp/lists */ 52185);
/* harmony import */ var _pnp_sp_items__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pnp/sp/items */ 95324);





var SELECT_FIELDS = [
    'Id',
    'Title',
    _utils_constants__WEBPACK_IMPORTED_MODULE_1__.CATEGORY_COLS.DESCRIPTION,
    _utils_constants__WEBPACK_IMPORTED_MODULE_1__.CATEGORY_COLS.IS_ACTIVE,
    _utils_constants__WEBPACK_IMPORTED_MODULE_1__.CATEGORY_COLS.SORT_ORDER,
];
function mapItem(item) {
    return {
        id: item.Id,
        title: item.Title,
        description: item[_utils_constants__WEBPACK_IMPORTED_MODULE_1__.CATEGORY_COLS.DESCRIPTION],
        isActive: item[_utils_constants__WEBPACK_IMPORTED_MODULE_1__.CATEGORY_COLS.IS_ACTIVE],
        sortOrder: item[_utils_constants__WEBPACK_IMPORTED_MODULE_1__.CATEGORY_COLS.SORT_ORDER],
    };
}
/**
 * Get all active activity categories ordered by SortOrder (for employee dropdowns).
 */
function getActiveCategories() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function () {
        var sp, items;
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(this, function (_b) {
            switch (_b.label) {
                case 0:
                    sp = (0,_PnPSetup__WEBPACK_IMPORTED_MODULE_0__.getSP)();
                    return [4 /*yield*/, (_a = sp.web.lists
                            .getByTitle(_utils_constants__WEBPACK_IMPORTED_MODULE_1__.LISTS.ACTIVITY_CATEGORIES)
                            .items)
                            .select.apply(_a, SELECT_FIELDS).filter("".concat(_utils_constants__WEBPACK_IMPORTED_MODULE_1__.CATEGORY_COLS.IS_ACTIVE, " eq 1"))
                            .orderBy(_utils_constants__WEBPACK_IMPORTED_MODULE_1__.CATEGORY_COLS.SORT_ORDER, true)
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
    return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function () {
        var sp, items;
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(this, function (_b) {
            switch (_b.label) {
                case 0:
                    sp = (0,_PnPSetup__WEBPACK_IMPORTED_MODULE_0__.getSP)();
                    return [4 /*yield*/, (_a = sp.web.lists
                            .getByTitle(_utils_constants__WEBPACK_IMPORTED_MODULE_1__.LISTS.ACTIVITY_CATEGORIES)
                            .items)
                            .select.apply(_a, SELECT_FIELDS).orderBy(_utils_constants__WEBPACK_IMPORTED_MODULE_1__.CATEGORY_COLS.SORT_ORDER, true)
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
    return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function () {
        var sp, result;
        var _a;
        var _b, _c;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(this, function (_d) {
            switch (_d.label) {
                case 0:
                    sp = (0,_PnPSetup__WEBPACK_IMPORTED_MODULE_0__.getSP)();
                    return [4 /*yield*/, sp.web.lists
                            .getByTitle(_utils_constants__WEBPACK_IMPORTED_MODULE_1__.LISTS.ACTIVITY_CATEGORIES)
                            .items.add((_a = {
                                Title: category.title
                            },
                            _a[_utils_constants__WEBPACK_IMPORTED_MODULE_1__.CATEGORY_COLS.DESCRIPTION] = (_b = category.description) !== null && _b !== void 0 ? _b : '',
                            _a[_utils_constants__WEBPACK_IMPORTED_MODULE_1__.CATEGORY_COLS.IS_ACTIVE] = category.isActive,
                            _a[_utils_constants__WEBPACK_IMPORTED_MODULE_1__.CATEGORY_COLS.SORT_ORDER] = (_c = category.sortOrder) !== null && _c !== void 0 ? _c : 0,
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
    return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function () {
        var sp, payload;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    sp = (0,_PnPSetup__WEBPACK_IMPORTED_MODULE_0__.getSP)();
                    payload = {};
                    if (changes.title !== undefined)
                        payload.Title = changes.title;
                    if (changes.description !== undefined)
                        payload[_utils_constants__WEBPACK_IMPORTED_MODULE_1__.CATEGORY_COLS.DESCRIPTION] = changes.description;
                    if (changes.isActive !== undefined)
                        payload[_utils_constants__WEBPACK_IMPORTED_MODULE_1__.CATEGORY_COLS.IS_ACTIVE] = changes.isActive;
                    if (changes.sortOrder !== undefined)
                        payload[_utils_constants__WEBPACK_IMPORTED_MODULE_1__.CATEGORY_COLS.SORT_ORDER] = changes.sortOrder;
                    return [4 /*yield*/, sp.web.lists
                            .getByTitle(_utils_constants__WEBPACK_IMPORTED_MODULE_1__.LISTS.ACTIVITY_CATEGORIES)
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
    return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(this, function (_a) {
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
    return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(this, function (_a) {
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
function deleteCategory(id) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function () {
        var sp;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    sp = (0,_PnPSetup__WEBPACK_IMPORTED_MODULE_0__.getSP)();
                    return [4 /*yield*/, sp.web.lists
                            .getByTitle(_utils_constants__WEBPACK_IMPORTED_MODULE_1__.LISTS.ACTIVITY_CATEGORIES)
                            .items.getById(id)
                            .delete()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}


/***/ }),

/***/ 15607:
/*!***********************************************************!*\
  !*** ./lib/webparts/timeSheet/services/ProjectService.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   activateProject: () => (/* binding */ activateProject),
/* harmony export */   addProject: () => (/* binding */ addProject),
/* harmony export */   deactivateProject: () => (/* binding */ deactivateProject),
/* harmony export */   deleteProject: () => (/* binding */ deleteProject),
/* harmony export */   getActiveProjects: () => (/* binding */ getActiveProjects),
/* harmony export */   getAllProjects: () => (/* binding */ getAllProjects),
/* harmony export */   updateProject: () => (/* binding */ updateProject)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 10196);
/* harmony import */ var _PnPSetup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PnPSetup */ 89916);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/constants */ 47293);
/* harmony import */ var _pnp_sp_lists__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pnp/sp/lists */ 52185);
/* harmony import */ var _pnp_sp_items__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pnp/sp/items */ 95324);





var SELECT_FIELDS = [
    'Id',
    'Title',
    _utils_constants__WEBPACK_IMPORTED_MODULE_1__.PROJECT_COLS.PROJECT_CODE,
    _utils_constants__WEBPACK_IMPORTED_MODULE_1__.PROJECT_COLS.DESCRIPTION,
    _utils_constants__WEBPACK_IMPORTED_MODULE_1__.PROJECT_COLS.IS_ACTIVE,
    _utils_constants__WEBPACK_IMPORTED_MODULE_1__.PROJECT_COLS.CLIENT_NAME,
    _utils_constants__WEBPACK_IMPORTED_MODULE_1__.PROJECT_COLS.START_DATE,
    _utils_constants__WEBPACK_IMPORTED_MODULE_1__.PROJECT_COLS.END_DATE,
];
function mapItem(item) {
    return {
        id: item.Id,
        title: item.Title,
        projectCode: item[_utils_constants__WEBPACK_IMPORTED_MODULE_1__.PROJECT_COLS.PROJECT_CODE],
        description: item[_utils_constants__WEBPACK_IMPORTED_MODULE_1__.PROJECT_COLS.DESCRIPTION],
        isActive: item[_utils_constants__WEBPACK_IMPORTED_MODULE_1__.PROJECT_COLS.IS_ACTIVE],
        clientName: item[_utils_constants__WEBPACK_IMPORTED_MODULE_1__.PROJECT_COLS.CLIENT_NAME],
        startDate: item[_utils_constants__WEBPACK_IMPORTED_MODULE_1__.PROJECT_COLS.START_DATE] ? new Date(item[_utils_constants__WEBPACK_IMPORTED_MODULE_1__.PROJECT_COLS.START_DATE]) : undefined,
        endDate: item[_utils_constants__WEBPACK_IMPORTED_MODULE_1__.PROJECT_COLS.END_DATE] ? new Date(item[_utils_constants__WEBPACK_IMPORTED_MODULE_1__.PROJECT_COLS.END_DATE]) : undefined,
    };
}
/**
 * Get all active projects (for employee dropdowns).
 */
function getActiveProjects() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function () {
        var sp, items;
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(this, function (_b) {
            switch (_b.label) {
                case 0:
                    sp = (0,_PnPSetup__WEBPACK_IMPORTED_MODULE_0__.getSP)();
                    return [4 /*yield*/, (_a = sp.web.lists
                            .getByTitle(_utils_constants__WEBPACK_IMPORTED_MODULE_1__.LISTS.PROJECTS)
                            .items)
                            .select.apply(_a, SELECT_FIELDS).filter("".concat(_utils_constants__WEBPACK_IMPORTED_MODULE_1__.PROJECT_COLS.IS_ACTIVE, " eq 1"))
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
function getAllProjects() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function () {
        var sp, items;
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(this, function (_b) {
            switch (_b.label) {
                case 0:
                    sp = (0,_PnPSetup__WEBPACK_IMPORTED_MODULE_0__.getSP)();
                    return [4 /*yield*/, (_a = sp.web.lists
                            .getByTitle(_utils_constants__WEBPACK_IMPORTED_MODULE_1__.LISTS.PROJECTS)
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
function addProject(project) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function () {
        var sp, result;
        var _a;
        var _b, _c, _d, _e, _f, _g;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(this, function (_h) {
            switch (_h.label) {
                case 0:
                    sp = (0,_PnPSetup__WEBPACK_IMPORTED_MODULE_0__.getSP)();
                    return [4 /*yield*/, sp.web.lists
                            .getByTitle(_utils_constants__WEBPACK_IMPORTED_MODULE_1__.LISTS.PROJECTS)
                            .items.add((_a = {
                                Title: project.title
                            },
                            _a[_utils_constants__WEBPACK_IMPORTED_MODULE_1__.PROJECT_COLS.PROJECT_CODE] = project.projectCode,
                            _a[_utils_constants__WEBPACK_IMPORTED_MODULE_1__.PROJECT_COLS.DESCRIPTION] = (_b = project.description) !== null && _b !== void 0 ? _b : '',
                            _a[_utils_constants__WEBPACK_IMPORTED_MODULE_1__.PROJECT_COLS.IS_ACTIVE] = project.isActive,
                            _a[_utils_constants__WEBPACK_IMPORTED_MODULE_1__.PROJECT_COLS.CLIENT_NAME] = (_c = project.clientName) !== null && _c !== void 0 ? _c : '',
                            _a[_utils_constants__WEBPACK_IMPORTED_MODULE_1__.PROJECT_COLS.START_DATE] = (_e = (_d = project.startDate) === null || _d === void 0 ? void 0 : _d.toISOString()) !== null && _e !== void 0 ? _e : null,
                            _a[_utils_constants__WEBPACK_IMPORTED_MODULE_1__.PROJECT_COLS.END_DATE] = (_g = (_f = project.endDate) === null || _f === void 0 ? void 0 : _f.toISOString()) !== null && _g !== void 0 ? _g : null,
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
function updateProject(id, changes) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function () {
        var sp, payload;
        var _a, _b, _c, _d;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(this, function (_e) {
            switch (_e.label) {
                case 0:
                    sp = (0,_PnPSetup__WEBPACK_IMPORTED_MODULE_0__.getSP)();
                    payload = {};
                    if (changes.title !== undefined)
                        payload.Title = changes.title;
                    if (changes.projectCode !== undefined)
                        payload[_utils_constants__WEBPACK_IMPORTED_MODULE_1__.PROJECT_COLS.PROJECT_CODE] = changes.projectCode;
                    if (changes.description !== undefined)
                        payload[_utils_constants__WEBPACK_IMPORTED_MODULE_1__.PROJECT_COLS.DESCRIPTION] = changes.description;
                    if (changes.isActive !== undefined)
                        payload[_utils_constants__WEBPACK_IMPORTED_MODULE_1__.PROJECT_COLS.IS_ACTIVE] = changes.isActive;
                    if (changes.clientName !== undefined)
                        payload[_utils_constants__WEBPACK_IMPORTED_MODULE_1__.PROJECT_COLS.CLIENT_NAME] = changes.clientName;
                    if (changes.startDate !== undefined)
                        payload[_utils_constants__WEBPACK_IMPORTED_MODULE_1__.PROJECT_COLS.START_DATE] = (_b = (_a = changes.startDate) === null || _a === void 0 ? void 0 : _a.toISOString()) !== null && _b !== void 0 ? _b : null;
                    if (changes.endDate !== undefined)
                        payload[_utils_constants__WEBPACK_IMPORTED_MODULE_1__.PROJECT_COLS.END_DATE] = (_d = (_c = changes.endDate) === null || _c === void 0 ? void 0 : _c.toISOString()) !== null && _d !== void 0 ? _d : null;
                    return [4 /*yield*/, sp.web.lists
                            .getByTitle(_utils_constants__WEBPACK_IMPORTED_MODULE_1__.LISTS.PROJECTS)
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
function deactivateProject(id) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(this, function (_a) {
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
function activateProject(id) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(this, function (_a) {
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
function deleteProject(id) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function () {
        var sp;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    sp = (0,_PnPSetup__WEBPACK_IMPORTED_MODULE_0__.getSP)();
                    return [4 /*yield*/, sp.web.lists
                            .getByTitle(_utils_constants__WEBPACK_IMPORTED_MODULE_1__.LISTS.PROJECTS)
                            .items.getById(id)
                            .delete()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}


/***/ })

}]);
//# sourceMappingURL=chunk.lib_webparts_timeSheet_services_CategoryService_js-lib_webparts_timeSheet_services_ProjectSer-73eed3.js.map