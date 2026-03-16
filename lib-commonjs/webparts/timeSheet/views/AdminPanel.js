"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var thStyle = { padding: '10px 12px', textAlign: 'left', fontWeight: 600, fontSize: 13 };
var tdStyle = { padding: '8px 12px', borderBottom: '1px solid #edebe9', fontSize: 13, verticalAlign: 'middle' };
var react_2 = require("@fluentui/react");
var AppContext_1 = require("../context/AppContext");
var ProjectService_1 = require("../services/ProjectService");
var CategoryService_1 = require("../services/CategoryService");
// ─── Projects Tab ─────────────────────────────────────────────────────────────
var ProjectsTab = function () {
    var _a, _b, _c, _d, _e;
    var _f = (0, react_1.useState)([]), projects = _f[0], setProjects = _f[1];
    var _g = (0, react_1.useState)(true), loading = _g[0], setLoading = _g[1];
    var _h = (0, react_1.useState)(''), message = _h[0], setMessage = _h[1];
    var _j = (0, react_1.useState)(false), isError = _j[0], setIsError = _j[1];
    var _k = (0, react_1.useState)(false), panelOpen = _k[0], setPanelOpen = _k[1];
    var _l = (0, react_1.useState)({}), editProject = _l[0], setEditProject = _l[1];
    var _m = (0, react_1.useState)(false), saving = _m[0], setSaving = _m[1];
    var load = function () {
        setLoading(true);
        var finish = function () { return setLoading(false); };
        (0, ProjectService_1.getAllProjects)()
            .then(function (items) { setProjects(items); finish(); })
            .catch(function () { setMessage('Failed to load projects.'); setIsError(true); finish(); });
    };
    (0, react_1.useEffect)(function () { load(); }, []);
    var openAdd = function () {
        setEditProject({ isActive: true });
        setPanelOpen(true);
    };
    var openEdit = function (p) {
        setEditProject(tslib_1.__assign({}, p));
        setPanelOpen(true);
    };
    var handleSave = function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var _a;
        var _b;
        return tslib_1.__generator(this, function (_c) {
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
                    return [4 /*yield*/, (0, ProjectService_1.updateProject)(editProject.id, editProject)];
                case 2:
                    _c.sent();
                    setMessage('Project updated successfully.');
                    setIsError(false);
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, (0, ProjectService_1.addProject)(tslib_1.__assign(tslib_1.__assign({}, editProject), { isActive: (_b = editProject.isActive) !== null && _b !== void 0 ? _b : true }))];
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
    return (React.createElement(react_2.Stack, { tokens: { childrenGap: 12 } },
        React.createElement(react_2.Stack, { horizontal: true, horizontalAlign: "end" },
            React.createElement(react_2.PrimaryButton, { iconProps: { iconName: 'Add' }, text: "Add Project", onClick: openAdd })),
        message && (React.createElement(react_2.MessageBar, { messageBarType: isError ? react_2.MessageBarType.error : react_2.MessageBarType.success, onDismiss: function () { return setMessage(''); } }, message)),
        loading ? React.createElement(react_2.Spinner, { size: react_2.SpinnerSize.medium }) : (React.createElement("table", { style: { width: '100%', borderCollapse: 'collapse' } },
            React.createElement("thead", null,
                React.createElement("tr", { style: { background: '#0078d4', color: '#fff' } },
                    React.createElement("th", { style: thStyle }, "Code"),
                    React.createElement("th", { style: thStyle }, "Project Name"),
                    React.createElement("th", { style: thStyle }, "Client"),
                    React.createElement("th", { style: thStyle }, "Status"),
                    React.createElement("th", { style: tslib_1.__assign(tslib_1.__assign({}, thStyle), { width: 120 }) }, "Actions"))),
            React.createElement("tbody", null, projects.map(function (p, i) {
                var _a;
                return (React.createElement("tr", { key: p.id, style: { background: i % 2 === 0 ? '#fff' : '#f5f7fa' } },
                    React.createElement("td", { style: tdStyle }, p.projectCode),
                    React.createElement("td", { style: tdStyle }, p.title),
                    React.createElement("td", { style: tdStyle }, (_a = p.clientName) !== null && _a !== void 0 ? _a : '—'),
                    React.createElement("td", { style: tdStyle },
                        React.createElement("span", { style: { color: p.isActive ? '#107c10' : '#a19f9d', fontWeight: 600 } }, p.isActive ? 'Active' : 'Inactive')),
                    React.createElement("td", { style: tdStyle },
                        React.createElement(react_2.Stack, { horizontal: true, tokens: { childrenGap: 4 } },
                            React.createElement(react_2.IconButton, { iconProps: { iconName: 'Edit' }, title: "Edit", onClick: function () { return openEdit(p); } }),
                            p.isActive
                                ? React.createElement(react_2.IconButton, { iconProps: { iconName: 'Hide' }, title: "Deactivate", onClick: function () { return (0, ProjectService_1.deactivateProject)(p.id).then(load); } })
                                : React.createElement(react_2.IconButton, { iconProps: { iconName: 'View' }, title: "Activate", onClick: function () { return (0, ProjectService_1.activateProject)(p.id).then(load); } })))));
            })))),
        React.createElement(react_2.Panel, { isOpen: panelOpen, onDismiss: function () { return setPanelOpen(false); }, type: react_2.PanelType.medium, headerText: editProject.id ? 'Edit Project' : 'Add Project' },
            React.createElement(react_2.Stack, { tokens: { childrenGap: 12 }, style: { padding: '16px 0' } },
                React.createElement(react_2.TextField, { label: "Project Name", required: true, value: (_a = editProject.title) !== null && _a !== void 0 ? _a : '', onChange: function (_, v) { return setEditProject(function (p) { return (tslib_1.__assign(tslib_1.__assign({}, p), { title: v })); }); } }),
                React.createElement(react_2.TextField, { label: "Project Code", required: true, value: (_b = editProject.projectCode) !== null && _b !== void 0 ? _b : '', onChange: function (_, v) { return setEditProject(function (p) { return (tslib_1.__assign(tslib_1.__assign({}, p), { projectCode: v })); }); } }),
                React.createElement(react_2.TextField, { label: "Client Name", value: (_c = editProject.clientName) !== null && _c !== void 0 ? _c : '', onChange: function (_, v) { return setEditProject(function (p) { return (tslib_1.__assign(tslib_1.__assign({}, p), { clientName: v })); }); } }),
                React.createElement(react_2.TextField, { label: "Description", multiline: true, rows: 3, value: (_d = editProject.description) !== null && _d !== void 0 ? _d : '', onChange: function (_, v) { return setEditProject(function (p) { return (tslib_1.__assign(tslib_1.__assign({}, p), { description: v })); }); } }),
                React.createElement(react_2.Toggle, { label: "Active", checked: (_e = editProject.isActive) !== null && _e !== void 0 ? _e : true, onChange: function (_, c) { return setEditProject(function (p) { return (tslib_1.__assign(tslib_1.__assign({}, p), { isActive: c })); }); } }),
                React.createElement(react_2.Stack, { horizontal: true, tokens: { childrenGap: 8 } },
                    React.createElement(react_2.PrimaryButton, { text: "Save", onClick: handleSave, disabled: saving }),
                    React.createElement(react_2.DefaultButton, { text: "Cancel", onClick: function () { return setPanelOpen(false); } })),
                saving && React.createElement(react_2.Spinner, { size: react_2.SpinnerSize.small })))));
};
// ─── Categories Tab ───────────────────────────────────────────────────────────
var CategoriesTab = function () {
    var _a, _b, _c, _d;
    var _e = (0, react_1.useState)([]), categories = _e[0], setCategories = _e[1];
    var _f = (0, react_1.useState)(true), loading = _f[0], setLoading = _f[1];
    var _g = (0, react_1.useState)(''), message = _g[0], setMessage = _g[1];
    var _h = (0, react_1.useState)(false), isError = _h[0], setIsError = _h[1];
    var _j = (0, react_1.useState)(false), panelOpen = _j[0], setPanelOpen = _j[1];
    var _k = (0, react_1.useState)({}), editCat = _k[0], setEditCat = _k[1];
    var _l = (0, react_1.useState)(false), saving = _l[0], setSaving = _l[1];
    var load = function () {
        setLoading(true);
        var finish = function () { return setLoading(false); };
        (0, CategoryService_1.getAllCategories)()
            .then(function (items) { setCategories(items); finish(); })
            .catch(function () { setMessage('Failed to load categories.'); setIsError(true); finish(); });
    };
    (0, react_1.useEffect)(function () { load(); }, []);
    var openAdd = function () { setEditCat({ isActive: true, sortOrder: 0 }); setPanelOpen(true); };
    var openEdit = function (c) { setEditCat(tslib_1.__assign({}, c)); setPanelOpen(true); };
    var handleSave = function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var _a;
        var _b;
        return tslib_1.__generator(this, function (_c) {
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
                    return [4 /*yield*/, (0, CategoryService_1.updateCategory)(editCat.id, editCat)];
                case 2:
                    _c.sent();
                    setMessage('Category updated.');
                    setIsError(false);
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, (0, CategoryService_1.addCategory)(tslib_1.__assign(tslib_1.__assign({}, editCat), { isActive: (_b = editCat.isActive) !== null && _b !== void 0 ? _b : true }))];
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
    return (React.createElement(react_2.Stack, { tokens: { childrenGap: 12 } },
        React.createElement(react_2.Stack, { horizontal: true, horizontalAlign: "end" },
            React.createElement(react_2.PrimaryButton, { iconProps: { iconName: 'Add' }, text: "Add Category", onClick: openAdd })),
        message && (React.createElement(react_2.MessageBar, { messageBarType: isError ? react_2.MessageBarType.error : react_2.MessageBarType.success, onDismiss: function () { return setMessage(''); } }, message)),
        loading ? React.createElement(react_2.Spinner, { size: react_2.SpinnerSize.medium }) : (React.createElement("table", { style: { width: '100%', borderCollapse: 'collapse' } },
            React.createElement("thead", null,
                React.createElement("tr", { style: { background: '#0078d4', color: '#fff' } },
                    React.createElement("th", { style: thStyle }, "Category Name"),
                    React.createElement("th", { style: thStyle }, "Description"),
                    React.createElement("th", { style: tslib_1.__assign(tslib_1.__assign({}, thStyle), { width: 80 }) }, "Sort"),
                    React.createElement("th", { style: thStyle }, "Status"),
                    React.createElement("th", { style: tslib_1.__assign(tslib_1.__assign({}, thStyle), { width: 120 }) }, "Actions"))),
            React.createElement("tbody", null, categories.map(function (c, i) {
                var _a, _b;
                return (React.createElement("tr", { key: c.id, style: { background: i % 2 === 0 ? '#fff' : '#f5f7fa' } },
                    React.createElement("td", { style: tdStyle }, c.title),
                    React.createElement("td", { style: tdStyle }, (_a = c.description) !== null && _a !== void 0 ? _a : '—'),
                    React.createElement("td", { style: tdStyle }, (_b = c.sortOrder) !== null && _b !== void 0 ? _b : 0),
                    React.createElement("td", { style: tdStyle },
                        React.createElement("span", { style: { color: c.isActive ? '#107c10' : '#a19f9d', fontWeight: 600 } }, c.isActive ? 'Active' : 'Inactive')),
                    React.createElement("td", { style: tdStyle },
                        React.createElement(react_2.Stack, { horizontal: true, tokens: { childrenGap: 4 } },
                            React.createElement(react_2.IconButton, { iconProps: { iconName: 'Edit' }, title: "Edit", onClick: function () { return openEdit(c); } }),
                            c.isActive
                                ? React.createElement(react_2.IconButton, { iconProps: { iconName: 'Hide' }, title: "Deactivate", onClick: function () { return (0, CategoryService_1.deactivateCategory)(c.id).then(load); } })
                                : React.createElement(react_2.IconButton, { iconProps: { iconName: 'View' }, title: "Activate", onClick: function () { return (0, CategoryService_1.activateCategory)(c.id).then(load); } })))));
            })))),
        React.createElement(react_2.Panel, { isOpen: panelOpen, onDismiss: function () { return setPanelOpen(false); }, type: react_2.PanelType.medium, headerText: editCat.id ? 'Edit Category' : 'Add Category' },
            React.createElement(react_2.Stack, { tokens: { childrenGap: 12 }, style: { padding: '16px 0' } },
                React.createElement(react_2.TextField, { label: "Category Name", required: true, value: (_a = editCat.title) !== null && _a !== void 0 ? _a : '', onChange: function (_, v) { return setEditCat(function (c) { return (tslib_1.__assign(tslib_1.__assign({}, c), { title: v })); }); } }),
                React.createElement(react_2.TextField, { label: "Description", multiline: true, rows: 3, value: (_b = editCat.description) !== null && _b !== void 0 ? _b : '', onChange: function (_, v) { return setEditCat(function (c) { return (tslib_1.__assign(tslib_1.__assign({}, c), { description: v })); }); } }),
                React.createElement(react_2.SpinButton, { label: "Sort Order", value: String((_c = editCat.sortOrder) !== null && _c !== void 0 ? _c : 0), min: 0, max: 9999, step: 1, onChange: function (_, v) { return setEditCat(function (c) { return (tslib_1.__assign(tslib_1.__assign({}, c), { sortOrder: parseInt(v !== null && v !== void 0 ? v : '0', 10) })); }); }, style: { maxWidth: 120 } }),
                React.createElement(react_2.Toggle, { label: "Active", checked: (_d = editCat.isActive) !== null && _d !== void 0 ? _d : true, onChange: function (_, c) { return setEditCat(function (prev) { return (tslib_1.__assign(tslib_1.__assign({}, prev), { isActive: c })); }); } }),
                React.createElement(react_2.Stack, { horizontal: true, tokens: { childrenGap: 8 } },
                    React.createElement(react_2.PrimaryButton, { text: "Save", onClick: handleSave, disabled: saving }),
                    React.createElement(react_2.DefaultButton, { text: "Cancel", onClick: function () { return setPanelOpen(false); } })),
                saving && React.createElement(react_2.Spinner, { size: react_2.SpinnerSize.small })))));
};
// ─── Main Admin Panel ─────────────────────────────────────────────────────────
var AdminPanel = function () {
    var navigateHome = (0, react_1.useContext)(AppContext_1.AppContext).navigateHome;
    return (React.createElement("div", { style: { padding: 24 } },
        React.createElement(react_2.Stack, { horizontal: true, verticalAlign: "center", tokens: { childrenGap: 8 }, style: { marginBottom: 16 } },
            React.createElement(react_2.IconButton, { iconProps: { iconName: 'Home' }, title: "Home", onClick: navigateHome }),
            React.createElement(react_2.Text, { variant: "xLarge" }, "Manage Projects & Categories")),
        React.createElement(react_2.Pivot, null,
            React.createElement(react_2.PivotItem, { headerText: "Projects", itemIcon: "KnowledgeArticle" },
                React.createElement("div", { style: { paddingTop: 16 } },
                    React.createElement(ProjectsTab, null))),
            React.createElement(react_2.PivotItem, { headerText: "Activity Categories", itemIcon: "Tag" },
                React.createElement("div", { style: { paddingTop: 16 } },
                    React.createElement(CategoriesTab, null))))));
};
exports.default = AdminPanel;
//# sourceMappingURL=AdminPanel.js.map