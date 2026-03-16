import { __assign, __awaiter, __generator } from "tslib";
import * as React from 'react';
import { useContext, useState, useEffect } from 'react';
var thStyle = { padding: '10px 12px', textAlign: 'left', fontWeight: 600, fontSize: 13 };
var tdStyle = { padding: '8px 12px', borderBottom: '1px solid #edebe9', fontSize: 13, verticalAlign: 'middle' };
import { Stack, Text, Pivot, PivotItem, PrimaryButton, DefaultButton, Panel, PanelType, TextField, Toggle, SpinButton, Spinner, SpinnerSize, MessageBar, MessageBarType, IconButton, } from '@fluentui/react';
import { AppContext } from '../context/AppContext';
import { getAllProjects, addProject, updateProject, deactivateProject, activateProject, } from '../services/ProjectService';
import { getAllCategories, addCategory, updateCategory, deactivateCategory, activateCategory, } from '../services/CategoryService';
// ─── Projects Tab ─────────────────────────────────────────────────────────────
var ProjectsTab = function () {
    var _a, _b, _c, _d, _e;
    var _f = useState([]), projects = _f[0], setProjects = _f[1];
    var _g = useState(true), loading = _g[0], setLoading = _g[1];
    var _h = useState(''), message = _h[0], setMessage = _h[1];
    var _j = useState(false), isError = _j[0], setIsError = _j[1];
    var _k = useState(false), panelOpen = _k[0], setPanelOpen = _k[1];
    var _l = useState({}), editProject = _l[0], setEditProject = _l[1];
    var _m = useState(false), saving = _m[0], setSaving = _m[1];
    var load = function () {
        setLoading(true);
        var finish = function () { return setLoading(false); };
        getAllProjects()
            .then(function (items) { setProjects(items); finish(); })
            .catch(function () { setMessage('Failed to load projects.'); setIsError(true); finish(); });
    };
    useEffect(function () { load(); }, []);
    var openAdd = function () {
        setEditProject({ isActive: true });
        setPanelOpen(true);
    };
    var openEdit = function (p) {
        setEditProject(__assign({}, p));
        setPanelOpen(true);
    };
    var handleSave = function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a;
        var _b;
        return __generator(this, function (_c) {
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
                    return [4 /*yield*/, updateProject(editProject.id, editProject)];
                case 2:
                    _c.sent();
                    setMessage('Project updated successfully.');
                    setIsError(false);
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, addProject(__assign(__assign({}, editProject), { isActive: (_b = editProject.isActive) !== null && _b !== void 0 ? _b : true }))];
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
    return (React.createElement(Stack, { tokens: { childrenGap: 12 } },
        React.createElement(Stack, { horizontal: true, horizontalAlign: "end" },
            React.createElement(PrimaryButton, { iconProps: { iconName: 'Add' }, text: "Add Project", onClick: openAdd })),
        message && (React.createElement(MessageBar, { messageBarType: isError ? MessageBarType.error : MessageBarType.success, onDismiss: function () { return setMessage(''); } }, message)),
        loading ? React.createElement(Spinner, { size: SpinnerSize.medium }) : (React.createElement("table", { style: { width: '100%', borderCollapse: 'collapse' } },
            React.createElement("thead", null,
                React.createElement("tr", { style: { background: '#0078d4', color: '#fff' } },
                    React.createElement("th", { style: thStyle }, "Code"),
                    React.createElement("th", { style: thStyle }, "Project Name"),
                    React.createElement("th", { style: thStyle }, "Client"),
                    React.createElement("th", { style: thStyle }, "Status"),
                    React.createElement("th", { style: __assign(__assign({}, thStyle), { width: 120 }) }, "Actions"))),
            React.createElement("tbody", null, projects.map(function (p, i) {
                var _a;
                return (React.createElement("tr", { key: p.id, style: { background: i % 2 === 0 ? '#fff' : '#f5f7fa' } },
                    React.createElement("td", { style: tdStyle }, p.projectCode),
                    React.createElement("td", { style: tdStyle }, p.title),
                    React.createElement("td", { style: tdStyle }, (_a = p.clientName) !== null && _a !== void 0 ? _a : '—'),
                    React.createElement("td", { style: tdStyle },
                        React.createElement("span", { style: { color: p.isActive ? '#107c10' : '#a19f9d', fontWeight: 600 } }, p.isActive ? 'Active' : 'Inactive')),
                    React.createElement("td", { style: tdStyle },
                        React.createElement(Stack, { horizontal: true, tokens: { childrenGap: 4 } },
                            React.createElement(IconButton, { iconProps: { iconName: 'Edit' }, title: "Edit", onClick: function () { return openEdit(p); } }),
                            p.isActive
                                ? React.createElement(IconButton, { iconProps: { iconName: 'Hide' }, title: "Deactivate", onClick: function () { return deactivateProject(p.id).then(load); } })
                                : React.createElement(IconButton, { iconProps: { iconName: 'View' }, title: "Activate", onClick: function () { return activateProject(p.id).then(load); } })))));
            })))),
        React.createElement(Panel, { isOpen: panelOpen, onDismiss: function () { return setPanelOpen(false); }, type: PanelType.medium, headerText: editProject.id ? 'Edit Project' : 'Add Project' },
            React.createElement(Stack, { tokens: { childrenGap: 12 }, style: { padding: '16px 0' } },
                React.createElement(TextField, { label: "Project Name", required: true, value: (_a = editProject.title) !== null && _a !== void 0 ? _a : '', onChange: function (_, v) { return setEditProject(function (p) { return (__assign(__assign({}, p), { title: v })); }); } }),
                React.createElement(TextField, { label: "Project Code", required: true, value: (_b = editProject.projectCode) !== null && _b !== void 0 ? _b : '', onChange: function (_, v) { return setEditProject(function (p) { return (__assign(__assign({}, p), { projectCode: v })); }); } }),
                React.createElement(TextField, { label: "Client Name", value: (_c = editProject.clientName) !== null && _c !== void 0 ? _c : '', onChange: function (_, v) { return setEditProject(function (p) { return (__assign(__assign({}, p), { clientName: v })); }); } }),
                React.createElement(TextField, { label: "Description", multiline: true, rows: 3, value: (_d = editProject.description) !== null && _d !== void 0 ? _d : '', onChange: function (_, v) { return setEditProject(function (p) { return (__assign(__assign({}, p), { description: v })); }); } }),
                React.createElement(Toggle, { label: "Active", checked: (_e = editProject.isActive) !== null && _e !== void 0 ? _e : true, onChange: function (_, c) { return setEditProject(function (p) { return (__assign(__assign({}, p), { isActive: c })); }); } }),
                React.createElement(Stack, { horizontal: true, tokens: { childrenGap: 8 } },
                    React.createElement(PrimaryButton, { text: "Save", onClick: handleSave, disabled: saving }),
                    React.createElement(DefaultButton, { text: "Cancel", onClick: function () { return setPanelOpen(false); } })),
                saving && React.createElement(Spinner, { size: SpinnerSize.small })))));
};
// ─── Categories Tab ───────────────────────────────────────────────────────────
var CategoriesTab = function () {
    var _a, _b, _c, _d;
    var _e = useState([]), categories = _e[0], setCategories = _e[1];
    var _f = useState(true), loading = _f[0], setLoading = _f[1];
    var _g = useState(''), message = _g[0], setMessage = _g[1];
    var _h = useState(false), isError = _h[0], setIsError = _h[1];
    var _j = useState(false), panelOpen = _j[0], setPanelOpen = _j[1];
    var _k = useState({}), editCat = _k[0], setEditCat = _k[1];
    var _l = useState(false), saving = _l[0], setSaving = _l[1];
    var load = function () {
        setLoading(true);
        var finish = function () { return setLoading(false); };
        getAllCategories()
            .then(function (items) { setCategories(items); finish(); })
            .catch(function () { setMessage('Failed to load categories.'); setIsError(true); finish(); });
    };
    useEffect(function () { load(); }, []);
    var openAdd = function () { setEditCat({ isActive: true, sortOrder: 0 }); setPanelOpen(true); };
    var openEdit = function (c) { setEditCat(__assign({}, c)); setPanelOpen(true); };
    var handleSave = function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a;
        var _b;
        return __generator(this, function (_c) {
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
                    return [4 /*yield*/, updateCategory(editCat.id, editCat)];
                case 2:
                    _c.sent();
                    setMessage('Category updated.');
                    setIsError(false);
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, addCategory(__assign(__assign({}, editCat), { isActive: (_b = editCat.isActive) !== null && _b !== void 0 ? _b : true }))];
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
    return (React.createElement(Stack, { tokens: { childrenGap: 12 } },
        React.createElement(Stack, { horizontal: true, horizontalAlign: "end" },
            React.createElement(PrimaryButton, { iconProps: { iconName: 'Add' }, text: "Add Category", onClick: openAdd })),
        message && (React.createElement(MessageBar, { messageBarType: isError ? MessageBarType.error : MessageBarType.success, onDismiss: function () { return setMessage(''); } }, message)),
        loading ? React.createElement(Spinner, { size: SpinnerSize.medium }) : (React.createElement("table", { style: { width: '100%', borderCollapse: 'collapse' } },
            React.createElement("thead", null,
                React.createElement("tr", { style: { background: '#0078d4', color: '#fff' } },
                    React.createElement("th", { style: thStyle }, "Category Name"),
                    React.createElement("th", { style: thStyle }, "Description"),
                    React.createElement("th", { style: __assign(__assign({}, thStyle), { width: 80 }) }, "Sort"),
                    React.createElement("th", { style: thStyle }, "Status"),
                    React.createElement("th", { style: __assign(__assign({}, thStyle), { width: 120 }) }, "Actions"))),
            React.createElement("tbody", null, categories.map(function (c, i) {
                var _a, _b;
                return (React.createElement("tr", { key: c.id, style: { background: i % 2 === 0 ? '#fff' : '#f5f7fa' } },
                    React.createElement("td", { style: tdStyle }, c.title),
                    React.createElement("td", { style: tdStyle }, (_a = c.description) !== null && _a !== void 0 ? _a : '—'),
                    React.createElement("td", { style: tdStyle }, (_b = c.sortOrder) !== null && _b !== void 0 ? _b : 0),
                    React.createElement("td", { style: tdStyle },
                        React.createElement("span", { style: { color: c.isActive ? '#107c10' : '#a19f9d', fontWeight: 600 } }, c.isActive ? 'Active' : 'Inactive')),
                    React.createElement("td", { style: tdStyle },
                        React.createElement(Stack, { horizontal: true, tokens: { childrenGap: 4 } },
                            React.createElement(IconButton, { iconProps: { iconName: 'Edit' }, title: "Edit", onClick: function () { return openEdit(c); } }),
                            c.isActive
                                ? React.createElement(IconButton, { iconProps: { iconName: 'Hide' }, title: "Deactivate", onClick: function () { return deactivateCategory(c.id).then(load); } })
                                : React.createElement(IconButton, { iconProps: { iconName: 'View' }, title: "Activate", onClick: function () { return activateCategory(c.id).then(load); } })))));
            })))),
        React.createElement(Panel, { isOpen: panelOpen, onDismiss: function () { return setPanelOpen(false); }, type: PanelType.medium, headerText: editCat.id ? 'Edit Category' : 'Add Category' },
            React.createElement(Stack, { tokens: { childrenGap: 12 }, style: { padding: '16px 0' } },
                React.createElement(TextField, { label: "Category Name", required: true, value: (_a = editCat.title) !== null && _a !== void 0 ? _a : '', onChange: function (_, v) { return setEditCat(function (c) { return (__assign(__assign({}, c), { title: v })); }); } }),
                React.createElement(TextField, { label: "Description", multiline: true, rows: 3, value: (_b = editCat.description) !== null && _b !== void 0 ? _b : '', onChange: function (_, v) { return setEditCat(function (c) { return (__assign(__assign({}, c), { description: v })); }); } }),
                React.createElement(SpinButton, { label: "Sort Order", value: String((_c = editCat.sortOrder) !== null && _c !== void 0 ? _c : 0), min: 0, max: 9999, step: 1, onChange: function (_, v) { return setEditCat(function (c) { return (__assign(__assign({}, c), { sortOrder: parseInt(v !== null && v !== void 0 ? v : '0', 10) })); }); }, style: { maxWidth: 120 } }),
                React.createElement(Toggle, { label: "Active", checked: (_d = editCat.isActive) !== null && _d !== void 0 ? _d : true, onChange: function (_, c) { return setEditCat(function (prev) { return (__assign(__assign({}, prev), { isActive: c })); }); } }),
                React.createElement(Stack, { horizontal: true, tokens: { childrenGap: 8 } },
                    React.createElement(PrimaryButton, { text: "Save", onClick: handleSave, disabled: saving }),
                    React.createElement(DefaultButton, { text: "Cancel", onClick: function () { return setPanelOpen(false); } })),
                saving && React.createElement(Spinner, { size: SpinnerSize.small })))));
};
// ─── Main Admin Panel ─────────────────────────────────────────────────────────
var AdminPanel = function () {
    var navigateHome = useContext(AppContext).navigateHome;
    return (React.createElement("div", { style: { padding: 24 } },
        React.createElement(Stack, { horizontal: true, verticalAlign: "center", tokens: { childrenGap: 8 }, style: { marginBottom: 16 } },
            React.createElement(IconButton, { iconProps: { iconName: 'Home' }, title: "Home", onClick: navigateHome }),
            React.createElement(Text, { variant: "xLarge" }, "Manage Projects & Categories")),
        React.createElement(Pivot, null,
            React.createElement(PivotItem, { headerText: "Projects", itemIcon: "KnowledgeArticle" },
                React.createElement("div", { style: { paddingTop: 16 } },
                    React.createElement(ProjectsTab, null))),
            React.createElement(PivotItem, { headerText: "Activity Categories", itemIcon: "Tag" },
                React.createElement("div", { style: { paddingTop: 16 } },
                    React.createElement(CategoriesTab, null))))));
};
export default AdminPanel;
//# sourceMappingURL=AdminPanel.js.map