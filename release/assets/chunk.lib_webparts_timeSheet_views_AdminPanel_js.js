"use strict";
(self["webpackJsonp_c7e5e177-9baf-42a9-91c9-2ea9fecc19a8_0.0.1"] = self["webpackJsonp_c7e5e177-9baf-42a9-91c9-2ea9fecc19a8_0.0.1"] || []).push([["lib_webparts_timeSheet_views_AdminPanel_js"],{

/***/ 14408:
/*!****************************************************!*\
  !*** ./lib/webparts/timeSheet/views/AdminPanel.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 10196);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 85959);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fluentui/react */ 21314);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fluentui/react */ 29425);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fluentui/react */ 63208);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fluentui/react */ 46643);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fluentui/react */ 80954);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fluentui/react */ 49885);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fluentui/react */ 44533);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fluentui/react */ 27006);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fluentui/react */ 18681);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fluentui/react */ 67102);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fluentui/react */ 16264);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fluentui/react */ 5613);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @fluentui/react */ 73064);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @fluentui/react */ 72674);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @fluentui/react */ 92070);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @fluentui/react */ 15369);
/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/AppContext */ 24770);
/* harmony import */ var _services_ProjectService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/ProjectService */ 15607);
/* harmony import */ var _services_CategoryService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/CategoryService */ 64268);



var thStyle = { padding: '10px 12px', textAlign: 'left', fontWeight: 600, fontSize: 13 };
var tdStyle = { padding: '8px 12px', borderBottom: '1px solid #edebe9', fontSize: 13, verticalAlign: 'middle' };




// ─── Projects Tab ─────────────────────────────────────────────────────────────
var ProjectsTab = function () {
    var _a, _b, _c, _d, _e;
    var _f = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]), projects = _f[0], setProjects = _f[1];
    var _g = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true), loading = _g[0], setLoading = _g[1];
    var _h = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''), message = _h[0], setMessage = _h[1];
    var _j = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), isError = _j[0], setIsError = _j[1];
    var _k = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), panelOpen = _k[0], setPanelOpen = _k[1];
    var _l = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}), editProject = _l[0], setEditProject = _l[1];
    var _m = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), saving = _m[0], setSaving = _m[1];
    var load = function () {
        setLoading(true);
        var finish = function () { return setLoading(false); };
        (0,_services_ProjectService__WEBPACK_IMPORTED_MODULE_2__.getAllProjects)()
            .then(function (items) { setProjects(items); finish(); })
            .catch(function () { setMessage('Failed to load projects.'); setIsError(true); finish(); });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () { load(); }, []);
    var openAdd = function () {
        setEditProject({ isActive: true });
        setPanelOpen(true);
    };
    var openEdit = function (p) {
        setEditProject((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, p));
        setPanelOpen(true);
    };
    var handleSave = function () { return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(void 0, void 0, void 0, function () {
        var _a;
        var _b;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(this, function (_c) {
            switch (_c.label) {
                case 0:
                    if (!editProject.title || !editProject.projectCode) {
                        setMessage('Project Name and Project Code are required.');
                        setIsError(true);
                        return [2 /*return*/];
                    }
                    setSaving(true);
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 6, 7, 8]);
                    if (!editProject.id) return [3 /*break*/, 3];
                    return [4 /*yield*/, (0,_services_ProjectService__WEBPACK_IMPORTED_MODULE_2__.updateProject)(editProject.id, editProject)];
                case 2:
                    _c.sent();
                    setMessage('Project updated successfully.');
                    setIsError(false);
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, (0,_services_ProjectService__WEBPACK_IMPORTED_MODULE_2__.addProject)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, editProject), { isActive: (_b = editProject.isActive) !== null && _b !== void 0 ? _b : true }))];
                case 4:
                    _c.sent();
                    setMessage('Project added successfully.');
                    setIsError(false);
                    _c.label = 5;
                case 5:
                    setPanelOpen(false);
                    load();
                    return [3 /*break*/, 8];
                case 6:
                    _a = _c.sent();
                    setMessage('Failed to save project.');
                    setIsError(true);
                    return [3 /*break*/, 8];
                case 7:
                    setSaving(false);
                    return [7 /*endfinally*/];
                case 8: return [2 /*return*/];
            }
        });
    }); };
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_5__.Stack, { tokens: { childrenGap: 12 } },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_5__.Stack, { horizontal: true, horizontalAlign: "end" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_6__.PrimaryButton, { iconProps: { iconName: 'Add' }, text: "Add Project", onClick: openAdd })),
        message && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_7__.MessageBar, { messageBarType: isError ? _fluentui_react__WEBPACK_IMPORTED_MODULE_8__.MessageBarType.error : _fluentui_react__WEBPACK_IMPORTED_MODULE_8__.MessageBarType.success, onDismiss: function () { return setMessage(''); } }, message)),
        loading ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_9__.Spinner, { size: _fluentui_react__WEBPACK_IMPORTED_MODULE_10__.SpinnerSize.medium }) : (react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", { style: { width: '100%', borderCollapse: 'collapse' } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", { style: { background: '#0078d4', color: '#fff' } },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", { style: thStyle }, "Code"),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", { style: thStyle }, "Project Name"),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", { style: thStyle }, "Client"),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", { style: thStyle }, "Status"),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", { style: (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, thStyle), { width: 120 }) }, "Actions"))),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, projects.map(function (p, i) {
                var _a;
                return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", { key: p.id, style: { background: i % 2 === 0 ? '#fff' : '#f5f7fa' } },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", { style: tdStyle }, p.projectCode),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", { style: tdStyle }, p.title),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", { style: tdStyle }, (_a = p.clientName) !== null && _a !== void 0 ? _a : '—'),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", { style: tdStyle },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { style: { color: p.isActive ? '#107c10' : '#a19f9d', fontWeight: 600 } }, p.isActive ? 'Active' : 'Inactive')),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", { style: tdStyle },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_5__.Stack, { horizontal: true, tokens: { childrenGap: 4 } },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_11__.IconButton, { iconProps: { iconName: 'Edit' }, title: "Edit", onClick: function () { return openEdit(p); } }),
                            p.isActive
                                ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_11__.IconButton, { iconProps: { iconName: 'Hide' }, title: "Deactivate", onClick: function () { return (0,_services_ProjectService__WEBPACK_IMPORTED_MODULE_2__.deactivateProject)(p.id).then(load); } })
                                : react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_11__.IconButton, { iconProps: { iconName: 'View' }, title: "Activate", onClick: function () { return (0,_services_ProjectService__WEBPACK_IMPORTED_MODULE_2__.activateProject)(p.id).then(load); } })))));
            })))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_12__.Panel, { isOpen: panelOpen, onDismiss: function () { return setPanelOpen(false); }, type: _fluentui_react__WEBPACK_IMPORTED_MODULE_13__.PanelType.medium, headerText: editProject.id ? 'Edit Project' : 'Add Project' },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_5__.Stack, { tokens: { childrenGap: 12 }, style: { padding: '16px 0' } },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_14__.TextField, { label: "Project Name", required: true, value: (_a = editProject.title) !== null && _a !== void 0 ? _a : '', onChange: function (_, v) { return setEditProject(function (p) { return ((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, p), { title: v })); }); } }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_14__.TextField, { label: "Project Code", required: true, value: (_b = editProject.projectCode) !== null && _b !== void 0 ? _b : '', onChange: function (_, v) { return setEditProject(function (p) { return ((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, p), { projectCode: v })); }); } }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_14__.TextField, { label: "Client Name", value: (_c = editProject.clientName) !== null && _c !== void 0 ? _c : '', onChange: function (_, v) { return setEditProject(function (p) { return ((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, p), { clientName: v })); }); } }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_14__.TextField, { label: "Description", multiline: true, rows: 3, value: (_d = editProject.description) !== null && _d !== void 0 ? _d : '', onChange: function (_, v) { return setEditProject(function (p) { return ((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, p), { description: v })); }); } }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_15__.Toggle, { label: "Active", checked: (_e = editProject.isActive) !== null && _e !== void 0 ? _e : true, onChange: function (_, c) { return setEditProject(function (p) { return ((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, p), { isActive: c })); }); } }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_5__.Stack, { horizontal: true, tokens: { childrenGap: 8 } },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_6__.PrimaryButton, { text: "Save", onClick: handleSave, disabled: saving }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_16__.DefaultButton, { text: "Cancel", onClick: function () { return setPanelOpen(false); } })),
                saving && react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_9__.Spinner, { size: _fluentui_react__WEBPACK_IMPORTED_MODULE_10__.SpinnerSize.small })))));
};
// ─── Categories Tab ───────────────────────────────────────────────────────────
var CategoriesTab = function () {
    var _a, _b, _c, _d;
    var _e = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]), categories = _e[0], setCategories = _e[1];
    var _f = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true), loading = _f[0], setLoading = _f[1];
    var _g = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''), message = _g[0], setMessage = _g[1];
    var _h = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), isError = _h[0], setIsError = _h[1];
    var _j = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), panelOpen = _j[0], setPanelOpen = _j[1];
    var _k = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}), editCat = _k[0], setEditCat = _k[1];
    var _l = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), saving = _l[0], setSaving = _l[1];
    var load = function () {
        setLoading(true);
        var finish = function () { return setLoading(false); };
        (0,_services_CategoryService__WEBPACK_IMPORTED_MODULE_3__.getAllCategories)()
            .then(function (items) { setCategories(items); finish(); })
            .catch(function () { setMessage('Failed to load categories.'); setIsError(true); finish(); });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () { load(); }, []);
    var openAdd = function () { setEditCat({ isActive: true, sortOrder: 0 }); setPanelOpen(true); };
    var openEdit = function (c) { setEditCat((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, c)); setPanelOpen(true); };
    var handleSave = function () { return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(void 0, void 0, void 0, function () {
        var _a;
        var _b;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(this, function (_c) {
            switch (_c.label) {
                case 0:
                    if (!editCat.title) {
                        setMessage('Category Name is required.');
                        setIsError(true);
                        return [2 /*return*/];
                    }
                    setSaving(true);
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 6, 7, 8]);
                    if (!editCat.id) return [3 /*break*/, 3];
                    return [4 /*yield*/, (0,_services_CategoryService__WEBPACK_IMPORTED_MODULE_3__.updateCategory)(editCat.id, editCat)];
                case 2:
                    _c.sent();
                    setMessage('Category updated.');
                    setIsError(false);
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, (0,_services_CategoryService__WEBPACK_IMPORTED_MODULE_3__.addCategory)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, editCat), { isActive: (_b = editCat.isActive) !== null && _b !== void 0 ? _b : true }))];
                case 4:
                    _c.sent();
                    setMessage('Category added.');
                    setIsError(false);
                    _c.label = 5;
                case 5:
                    setPanelOpen(false);
                    load();
                    return [3 /*break*/, 8];
                case 6:
                    _a = _c.sent();
                    setMessage('Failed to save category.');
                    setIsError(true);
                    return [3 /*break*/, 8];
                case 7:
                    setSaving(false);
                    return [7 /*endfinally*/];
                case 8: return [2 /*return*/];
            }
        });
    }); };
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_5__.Stack, { tokens: { childrenGap: 12 } },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_5__.Stack, { horizontal: true, horizontalAlign: "end" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_6__.PrimaryButton, { iconProps: { iconName: 'Add' }, text: "Add Category", onClick: openAdd })),
        message && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_7__.MessageBar, { messageBarType: isError ? _fluentui_react__WEBPACK_IMPORTED_MODULE_8__.MessageBarType.error : _fluentui_react__WEBPACK_IMPORTED_MODULE_8__.MessageBarType.success, onDismiss: function () { return setMessage(''); } }, message)),
        loading ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_9__.Spinner, { size: _fluentui_react__WEBPACK_IMPORTED_MODULE_10__.SpinnerSize.medium }) : (react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", { style: { width: '100%', borderCollapse: 'collapse' } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", { style: { background: '#0078d4', color: '#fff' } },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", { style: thStyle }, "Category Name"),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", { style: thStyle }, "Description"),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", { style: (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, thStyle), { width: 80 }) }, "Sort"),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", { style: thStyle }, "Status"),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", { style: (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, thStyle), { width: 120 }) }, "Actions"))),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, categories.map(function (c, i) {
                var _a, _b;
                return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", { key: c.id, style: { background: i % 2 === 0 ? '#fff' : '#f5f7fa' } },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", { style: tdStyle }, c.title),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", { style: tdStyle }, (_a = c.description) !== null && _a !== void 0 ? _a : '—'),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", { style: tdStyle }, (_b = c.sortOrder) !== null && _b !== void 0 ? _b : 0),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", { style: tdStyle },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { style: { color: c.isActive ? '#107c10' : '#a19f9d', fontWeight: 600 } }, c.isActive ? 'Active' : 'Inactive')),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", { style: tdStyle },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_5__.Stack, { horizontal: true, tokens: { childrenGap: 4 } },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_11__.IconButton, { iconProps: { iconName: 'Edit' }, title: "Edit", onClick: function () { return openEdit(c); } }),
                            c.isActive
                                ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_11__.IconButton, { iconProps: { iconName: 'Hide' }, title: "Deactivate", onClick: function () { return (0,_services_CategoryService__WEBPACK_IMPORTED_MODULE_3__.deactivateCategory)(c.id).then(load); } })
                                : react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_11__.IconButton, { iconProps: { iconName: 'View' }, title: "Activate", onClick: function () { return (0,_services_CategoryService__WEBPACK_IMPORTED_MODULE_3__.activateCategory)(c.id).then(load); } })))));
            })))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_12__.Panel, { isOpen: panelOpen, onDismiss: function () { return setPanelOpen(false); }, type: _fluentui_react__WEBPACK_IMPORTED_MODULE_13__.PanelType.medium, headerText: editCat.id ? 'Edit Category' : 'Add Category' },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_5__.Stack, { tokens: { childrenGap: 12 }, style: { padding: '16px 0' } },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_14__.TextField, { label: "Category Name", required: true, value: (_a = editCat.title) !== null && _a !== void 0 ? _a : '', onChange: function (_, v) { return setEditCat(function (c) { return ((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, c), { title: v })); }); } }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_14__.TextField, { label: "Description", multiline: true, rows: 3, value: (_b = editCat.description) !== null && _b !== void 0 ? _b : '', onChange: function (_, v) { return setEditCat(function (c) { return ((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, c), { description: v })); }); } }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_17__.SpinButton, { label: "Sort Order", value: String((_c = editCat.sortOrder) !== null && _c !== void 0 ? _c : 0), min: 0, max: 9999, step: 1, onChange: function (_, v) { return setEditCat(function (c) { return ((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, c), { sortOrder: parseInt(v !== null && v !== void 0 ? v : '0', 10) })); }); }, style: { maxWidth: 120 } }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_15__.Toggle, { label: "Active", checked: (_d = editCat.isActive) !== null && _d !== void 0 ? _d : true, onChange: function (_, c) { return setEditCat(function (prev) { return ((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, prev), { isActive: c })); }); } }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_5__.Stack, { horizontal: true, tokens: { childrenGap: 8 } },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_6__.PrimaryButton, { text: "Save", onClick: handleSave, disabled: saving }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_16__.DefaultButton, { text: "Cancel", onClick: function () { return setPanelOpen(false); } })),
                saving && react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_9__.Spinner, { size: _fluentui_react__WEBPACK_IMPORTED_MODULE_10__.SpinnerSize.small })))));
};
// ─── Main Admin Panel ─────────────────────────────────────────────────────────
var AdminPanel = function () {
    var navigateHome = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_AppContext__WEBPACK_IMPORTED_MODULE_1__.AppContext).navigateHome;
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { padding: 24 } },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_5__.Stack, { horizontal: true, verticalAlign: "center", tokens: { childrenGap: 8 }, style: { marginBottom: 16 } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_11__.IconButton, { iconProps: { iconName: 'Home' }, title: "Home", onClick: navigateHome }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_18__.Text, { variant: "xLarge" }, "Manage Projects & Categories")),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_19__.Pivot, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_20__.PivotItem, { headerText: "Projects", itemIcon: "KnowledgeArticle" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { paddingTop: 16 } },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(ProjectsTab, null))),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_20__.PivotItem, { headerText: "Activity Categories", itemIcon: "Tag" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { paddingTop: 16 } },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(CategoriesTab, null))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminPanel);


/***/ })

}]);
//# sourceMappingURL=chunk.lib_webparts_timeSheet_views_AdminPanel_js.js.map