"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var react_2 = require("@fluentui/react");
var AppContext_1 = require("../context/AppContext");
var ProjectService_1 = require("../services/ProjectService");
var CategoryService_1 = require("../services/CategoryService");
var strings = tslib_1.__importStar(require("TimeSheetWebPartStrings"));
var AdminPanel_module_scss_1 = tslib_1.__importDefault(require("./AdminPanel.module.scss"));
var MessageBar = function (_a) {
    var text = _a.text, isError = _a.isError, onDismiss = _a.onDismiss;
    return (React.createElement("div", { className: "".concat(AdminPanel_module_scss_1.default.message, " ").concat(isError ? AdminPanel_module_scss_1.default.messageError : AdminPanel_module_scss_1.default.messageSuccess) },
        React.createElement("span", null, text),
        React.createElement("button", { className: AdminPanel_module_scss_1.default.messageDismiss, onClick: onDismiss }, "\u00D7")));
};
// ─── Projects Tab ──────────────────────────────────────────────────────────────
var ProjectsTab = function () {
    var _a, _b, _c, _d, _e;
    var _f = (0, react_1.useState)([]), projects = _f[0], setProjects = _f[1];
    var _g = (0, react_1.useState)(true), loading = _g[0], setLoading = _g[1];
    var _h = (0, react_1.useState)(""), message = _h[0], setMessage = _h[1];
    var _j = (0, react_1.useState)(false), isError = _j[0], setIsError = _j[1];
    var _k = (0, react_1.useState)(false), drawerOpen = _k[0], setDrawerOpen = _k[1];
    var _l = (0, react_1.useState)({}), editProject = _l[0], setEditProject = _l[1];
    var _m = (0, react_1.useState)(false), saving = _m[0], setSaving = _m[1];
    var _o = (0, react_1.useState)({}), formErrors = _o[0], setFormErrors = _o[1];
    var _p = (0, react_1.useState)(null), confirmDeleteId = _p[0], setConfirmDeleteId = _p[1];
    var load = function () {
        setLoading(true);
        (0, ProjectService_1.getAllProjects)()
            .then(function (items) {
            setProjects(items);
            setLoading(false);
        })
            .catch(function () {
            setMessage(strings.LoadProjectsFailed);
            setIsError(true);
            setLoading(false);
        });
    };
    (0, react_1.useEffect)(function () {
        load();
    }, []);
    var openAdd = function () {
        setEditProject({ isActive: true });
        setFormErrors({});
        setDrawerOpen(true);
    };
    var openEdit = function (p) {
        setEditProject(tslib_1.__assign({}, p));
        setFormErrors({});
        setDrawerOpen(true);
    };
    var closeDrawer = function () {
        setFormErrors({});
        setDrawerOpen(false);
    };
    var handleSave = function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var errors, _a;
        var _b;
        return tslib_1.__generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    errors = {};
                    if (!editProject.title || !editProject.title.trim())
                        errors.title = 'Project Name is required.';
                    if (!editProject.projectCode || !editProject.projectCode.trim())
                        errors.projectCode = 'Project Code is required.';
                    if (errors.title || errors.projectCode) {
                        setFormErrors(errors);
                        return [2 /*return*/];
                    }
                    setFormErrors({});
                    setSaving(true);
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 6, 7, 8]);
                    if (!editProject.id) return [3 /*break*/, 3];
                    return [4 /*yield*/, (0, ProjectService_1.updateProject)(editProject.id, editProject)];
                case 2:
                    _c.sent();
                    setMessage(strings.ProjectUpdated);
                    setIsError(false);
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, (0, ProjectService_1.addProject)(tslib_1.__assign(tslib_1.__assign({}, editProject), { isActive: (_b = editProject.isActive) !== null && _b !== void 0 ? _b : true }))];
                case 4:
                    _c.sent();
                    setMessage(strings.ProjectAdded);
                    setIsError(false);
                    _c.label = 5;
                case 5:
                    setDrawerOpen(false);
                    load();
                    return [3 /*break*/, 8];
                case 6:
                    _a = _c.sent();
                    setMessage(strings.ProjectSaveFailed);
                    setIsError(true);
                    return [3 /*break*/, 8];
                case 7:
                    setSaving(false);
                    return [7 /*endfinally*/];
                case 8: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement("div", { className: AdminPanel_module_scss_1.default.tabContent },
        React.createElement("div", { className: AdminPanel_module_scss_1.default.toolbar },
            React.createElement("span", { className: AdminPanel_module_scss_1.default.sectionLabel }, strings.ProjectsTab),
            React.createElement("button", { className: AdminPanel_module_scss_1.default.addBtn, onClick: openAdd },
                React.createElement("svg", { width: "13", height: "13", viewBox: "0 0 13 13", fill: "currentColor" },
                    React.createElement("path", { d: "M6.5 1a.75.75 0 01.75.75v4h4a.75.75 0 010 1.5h-4v4a.75.75 0 01-1.5 0v-4h-4a.75.75 0 010-1.5h4v-4A.75.75 0 016.5 1z" })),
                strings.AddProject)),
        message && (React.createElement(MessageBar, { text: message, isError: isError, onDismiss: function () { return setMessage(""); } })),
        loading ? (React.createElement("div", { className: AdminPanel_module_scss_1.default.loading },
            React.createElement("div", { className: AdminPanel_module_scss_1.default.spinner }),
            React.createElement("span", null, strings.LoadingProjects))) : (React.createElement("div", { className: AdminPanel_module_scss_1.default.tableWrap },
            React.createElement("table", { className: AdminPanel_module_scss_1.default.table },
                React.createElement("thead", { className: AdminPanel_module_scss_1.default.thead },
                    React.createElement("tr", null,
                        React.createElement("th", { className: AdminPanel_module_scss_1.default.th }, strings.Code),
                        React.createElement("th", { className: AdminPanel_module_scss_1.default.th }, strings.ProjectName),
                        React.createElement("th", { className: AdminPanel_module_scss_1.default.th }, strings.ClientName),
                        React.createElement("th", { className: AdminPanel_module_scss_1.default.th }, strings.Status),
                        React.createElement("th", { className: AdminPanel_module_scss_1.default.th, style: { width: 130 } }, strings.Actions))),
                React.createElement("tbody", null, projects.length === 0 ? (React.createElement("tr", null,
                    React.createElement("td", { colSpan: 5, className: AdminPanel_module_scss_1.default.empty }, strings.NoProjects))) : (projects.map(function (p) {
                    var _a;
                    return (React.createElement("tr", { key: p.id, className: AdminPanel_module_scss_1.default.tr },
                        React.createElement("td", { className: AdminPanel_module_scss_1.default.td },
                            React.createElement("span", { className: AdminPanel_module_scss_1.default.tdCode }, p.projectCode)),
                        React.createElement("td", { className: AdminPanel_module_scss_1.default.td }, p.title),
                        React.createElement("td", { className: AdminPanel_module_scss_1.default.td }, (_a = p.clientName) !== null && _a !== void 0 ? _a : "—"),
                        React.createElement("td", { className: AdminPanel_module_scss_1.default.td },
                            React.createElement("span", { className: "".concat(AdminPanel_module_scss_1.default.badge, " ").concat(p.isActive ? AdminPanel_module_scss_1.default.badgeActive : AdminPanel_module_scss_1.default.badgeInactive) },
                                React.createElement("span", { className: AdminPanel_module_scss_1.default.badgeDot }),
                                p.isActive ? strings.Active : strings.Inactive)),
                        React.createElement("td", { className: AdminPanel_module_scss_1.default.td },
                            React.createElement("div", { className: AdminPanel_module_scss_1.default.actions },
                                React.createElement("button", { className: AdminPanel_module_scss_1.default.iconBtn, title: "Edit", onClick: function () { return openEdit(p); } },
                                    React.createElement("svg", { width: "14", height: "14", viewBox: "0 0 16 16", fill: "currentColor" },
                                        React.createElement("path", { d: "M12.146.146a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-10 10a.5.5 0 01-.168.11l-5 2a.5.5 0 01-.65-.65l2-5a.5.5 0 01.11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 01.5.5v.5h.5a.5.5 0 01.5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 015 12.5V12h-.5a.5.5 0 01-.5-.5V11h-.5a.5.5 0 01-.468-.325z" }))),
                                confirmDeleteId === p.id ? (React.createElement(React.Fragment, null,
                                    React.createElement("span", { style: { fontSize: 11, color: '#6f6f6f' } }, "Delete?"),
                                    React.createElement("button", { className: "".concat(AdminPanel_module_scss_1.default.iconBtn, " ").concat(AdminPanel_module_scss_1.default.iconBtnDanger), title: "Confirm delete", onClick: function () { return (0, ProjectService_1.deleteProject)(p.id).then(function () { setConfirmDeleteId(null); load(); }).catch(function () { setMessage(strings.ProjectSaveFailed); setIsError(true); setConfirmDeleteId(null); }); } }, "\u2713"),
                                    React.createElement("button", { className: AdminPanel_module_scss_1.default.iconBtn, title: "Cancel", onClick: function () { return setConfirmDeleteId(null); } }, "\u2715"))) : (React.createElement("button", { className: "".concat(AdminPanel_module_scss_1.default.iconBtn, " ").concat(AdminPanel_module_scss_1.default.iconBtnDanger), title: "Delete", onClick: function () { return setConfirmDeleteId(p.id); } },
                                    React.createElement("svg", { width: "13", height: "13", viewBox: "0 0 14 14", fill: "currentColor" },
                                        React.createElement("path", { d: "M2 4h10M5 4V2h4v2M6 6v5M8 6v5M3 4l1 8h6l1-8", stroke: "currentColor", strokeWidth: "1.3", fill: "none", strokeLinecap: "round" })))),
                                p.isActive ? (React.createElement("button", { className: "".concat(AdminPanel_module_scss_1.default.iconBtn, " ").concat(AdminPanel_module_scss_1.default.iconBtnSuccess), title: "Activate", onClick: function () { return (0, ProjectService_1.deactivateProject)(p.id).then(load); } },
                                    React.createElement("svg", { width: "14", height: "14", viewBox: "0 0 16 16", fill: "currentColor" },
                                        React.createElement("path", { d: "M10.5 8a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" }),
                                        React.createElement("path", { d: "M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" })))) : (React.createElement("button", { className: "".concat(AdminPanel_module_scss_1.default.iconBtn, " ").concat(AdminPanel_module_scss_1.default.iconBtnDanger), title: "Deactivate", onClick: function () { return (0, ProjectService_1.activateProject)(p.id).then(load); } },
                                    React.createElement("svg", { width: "14", height: "14", viewBox: "0 0 16 16", fill: "currentColor" },
                                        React.createElement("path", { d: "M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 00-2.79.588l.77.771A5.944 5.944 0 018 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0114.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" }),
                                        React.createElement("path", { d: "M11.297 9.176a3.5 3.5 0 00-4.474-4.474l.823.823a2.5 2.5 0 012.829 2.829l.822.822zm-2.943 1.299l.822.822a3.5 3.5 0 01-4.474-4.474l.823.823a2.5 2.5 0 002.829 2.829z" }),
                                        React.createElement("path", { d: "M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 001.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 018 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884l-12-12 .708-.708 12 12-.708.708z" }))))))));
                })))))),
        React.createElement(react_2.Modal, { isOpen: drawerOpen, onDismiss: closeDrawer, isBlocking: false, styles: {
                main: {
                    width: 540,
                    maxWidth: "96vw",
                    borderRadius: 16,
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    maxHeight: "92vh",
                },
                scrollableContent: {
                    display: "flex",
                    flexDirection: "column",
                    maxHeight: "92vh",
                },
            } },
            React.createElement("div", { className: AdminPanel_module_scss_1.default.drawerHeader },
                React.createElement("h3", { className: AdminPanel_module_scss_1.default.drawerTitle }, editProject.id ? strings.EditProject : strings.AddProjectModal),
                React.createElement("button", { className: AdminPanel_module_scss_1.default.drawerClose, onClick: closeDrawer }, "\u00D7")),
            React.createElement("div", { className: AdminPanel_module_scss_1.default.drawerBody },
                React.createElement("div", { className: AdminPanel_module_scss_1.default.field },
                    React.createElement("label", { className: AdminPanel_module_scss_1.default.fieldLabel },
                        strings.ProjectName,
                        " ",
                        React.createElement("span", { className: AdminPanel_module_scss_1.default.required }, "*")),
                    React.createElement("input", { className: AdminPanel_module_scss_1.default.fieldInput, style: formErrors.title ? { borderColor: '#da1e28' } : {}, placeholder: strings.ProjectNamePlaceholder, value: (_a = editProject.title) !== null && _a !== void 0 ? _a : "", onChange: function (e) {
                            setEditProject(function (p) { return (tslib_1.__assign(tslib_1.__assign({}, p), { title: e.target.value })); });
                            if (formErrors.title)
                                setFormErrors(function (prev) { return (tslib_1.__assign(tslib_1.__assign({}, prev), { title: undefined })); });
                        } }),
                    formErrors.title && React.createElement("span", { style: { color: '#da1e28', fontSize: 12, display: 'block', marginTop: 2 } }, formErrors.title)),
                React.createElement("div", { className: AdminPanel_module_scss_1.default.field },
                    React.createElement("label", { className: AdminPanel_module_scss_1.default.fieldLabel },
                        strings.ProjectCode,
                        " ",
                        React.createElement("span", { className: AdminPanel_module_scss_1.default.required }, "*")),
                    React.createElement("input", { className: AdminPanel_module_scss_1.default.fieldInput, style: formErrors.projectCode ? { borderColor: '#da1e28' } : {}, placeholder: strings.ProjectCodePlaceholder, value: (_b = editProject.projectCode) !== null && _b !== void 0 ? _b : "", onChange: function (e) {
                            setEditProject(function (p) { return (tslib_1.__assign(tslib_1.__assign({}, p), { projectCode: e.target.value })); });
                            if (formErrors.projectCode)
                                setFormErrors(function (prev) { return (tslib_1.__assign(tslib_1.__assign({}, prev), { projectCode: undefined })); });
                        } }),
                    formErrors.projectCode && React.createElement("span", { style: { color: '#da1e28', fontSize: 12, display: 'block', marginTop: 2 } }, formErrors.projectCode)),
                React.createElement("div", { className: AdminPanel_module_scss_1.default.field },
                    React.createElement("label", { className: AdminPanel_module_scss_1.default.fieldLabel }, strings.ClientName),
                    React.createElement("input", { className: AdminPanel_module_scss_1.default.fieldInput, placeholder: strings.ClientNamePlaceholder, value: (_c = editProject.clientName) !== null && _c !== void 0 ? _c : "", onChange: function (e) {
                            return setEditProject(function (p) { return (tslib_1.__assign(tslib_1.__assign({}, p), { clientName: e.target.value })); });
                        } })),
                React.createElement("div", { className: AdminPanel_module_scss_1.default.field },
                    React.createElement("label", { className: AdminPanel_module_scss_1.default.fieldLabel }, strings.Description),
                    React.createElement("textarea", { className: "".concat(AdminPanel_module_scss_1.default.fieldInput, " ").concat(AdminPanel_module_scss_1.default.fieldTextarea), placeholder: strings.OptionalDescription, value: (_d = editProject.description) !== null && _d !== void 0 ? _d : "", onChange: function (e) {
                            return setEditProject(function (p) { return (tslib_1.__assign(tslib_1.__assign({}, p), { description: e.target.value })); });
                        } })),
                React.createElement("div", { className: AdminPanel_module_scss_1.default.toggleRow },
                    React.createElement("span", { className: AdminPanel_module_scss_1.default.toggleLabel }, strings.Active),
                    React.createElement("label", { className: AdminPanel_module_scss_1.default.toggle },
                        React.createElement("input", { type: "checkbox", checked: (_e = editProject.isActive) !== null && _e !== void 0 ? _e : true, onChange: function (e) {
                                return setEditProject(function (p) { return (tslib_1.__assign(tslib_1.__assign({}, p), { isActive: e.target.checked })); });
                            } }),
                        React.createElement("span", { className: AdminPanel_module_scss_1.default.track }),
                        React.createElement("span", { className: AdminPanel_module_scss_1.default.thumb }))),
                message && (React.createElement(MessageBar, { text: message, isError: isError, onDismiss: function () { return setMessage(""); } }))),
            React.createElement("div", { className: AdminPanel_module_scss_1.default.drawerFooter },
                React.createElement("button", { className: AdminPanel_module_scss_1.default.saveBtn, onClick: handleSave, disabled: saving }, saving
                    ? strings.Saving
                    : editProject.id
                        ? strings.UpdateProject
                        : strings.AddProjectModal),
                React.createElement("button", { className: AdminPanel_module_scss_1.default.cancelBtn, onClick: closeDrawer }, strings.Cancel)))));
};
// ─── Categories Tab ────────────────────────────────────────────────────────────
var CategoriesTab = function () {
    var _a, _b, _c, _d;
    var _e = (0, react_1.useState)([]), categories = _e[0], setCategories = _e[1];
    var _f = (0, react_1.useState)(true), loading = _f[0], setLoading = _f[1];
    var _g = (0, react_1.useState)(""), message = _g[0], setMessage = _g[1];
    var _h = (0, react_1.useState)(false), isError = _h[0], setIsError = _h[1];
    var _j = (0, react_1.useState)(false), drawerOpen = _j[0], setDrawerOpen = _j[1];
    var _k = (0, react_1.useState)({}), editCat = _k[0], setEditCat = _k[1];
    var _l = (0, react_1.useState)(false), saving = _l[0], setSaving = _l[1];
    var _m = (0, react_1.useState)({}), formErrors = _m[0], setFormErrors = _m[1];
    var _o = (0, react_1.useState)(null), confirmDeleteId = _o[0], setConfirmDeleteId = _o[1];
    var load = function () {
        setLoading(true);
        (0, CategoryService_1.getAllCategories)()
            .then(function (items) {
            setCategories(items);
            setLoading(false);
        })
            .catch(function () {
            setMessage(strings.LoadCategoriesFailed);
            setIsError(true);
            setLoading(false);
        });
    };
    (0, react_1.useEffect)(function () {
        load();
    }, []);
    var openAdd = function () {
        setEditCat({ isActive: true, sortOrder: 0 });
        setFormErrors({});
        setDrawerOpen(true);
    };
    var openEdit = function (c) {
        setEditCat(tslib_1.__assign({}, c));
        setFormErrors({});
        setDrawerOpen(true);
    };
    var closeDrawer = function () {
        setFormErrors({});
        setDrawerOpen(false);
    };
    var handleSave = function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var _a;
        var _b;
        return tslib_1.__generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    if (!editCat.title || !editCat.title.trim()) {
                        setFormErrors({ title: 'Category Name is required.' });
                        return [2 /*return*/];
                    }
                    setFormErrors({});
                    setSaving(true);
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 6, 7, 8]);
                    if (!editCat.id) return [3 /*break*/, 3];
                    return [4 /*yield*/, (0, CategoryService_1.updateCategory)(editCat.id, editCat)];
                case 2:
                    _c.sent();
                    setMessage(strings.CategoryUpdated);
                    setIsError(false);
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, (0, CategoryService_1.addCategory)(tslib_1.__assign(tslib_1.__assign({}, editCat), { isActive: (_b = editCat.isActive) !== null && _b !== void 0 ? _b : true }))];
                case 4:
                    _c.sent();
                    setMessage(strings.CategoryAdded);
                    setIsError(false);
                    _c.label = 5;
                case 5:
                    setDrawerOpen(false);
                    load();
                    return [3 /*break*/, 8];
                case 6:
                    _a = _c.sent();
                    setMessage(strings.CategorySaveFailed);
                    setIsError(true);
                    return [3 /*break*/, 8];
                case 7:
                    setSaving(false);
                    return [7 /*endfinally*/];
                case 8: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement("div", { className: AdminPanel_module_scss_1.default.tabContent },
        React.createElement("div", { className: AdminPanel_module_scss_1.default.toolbar },
            React.createElement("span", { className: AdminPanel_module_scss_1.default.sectionLabel }, strings.CategoriesTab),
            React.createElement("button", { className: AdminPanel_module_scss_1.default.addBtn, onClick: openAdd },
                React.createElement("svg", { width: "13", height: "13", viewBox: "0 0 13 13", fill: "currentColor" },
                    React.createElement("path", { d: "M6.5 1a.75.75 0 01.75.75v4h4a.75.75 0 010 1.5h-4v4a.75.75 0 01-1.5 0v-4h-4a.75.75 0 010-1.5h4v-4A.75.75 0 016.5 1z" })),
                strings.AddCategory)),
        message && (React.createElement(MessageBar, { text: message, isError: isError, onDismiss: function () { return setMessage(""); } })),
        loading ? (React.createElement("div", { className: AdminPanel_module_scss_1.default.loading },
            React.createElement("div", { className: AdminPanel_module_scss_1.default.spinner }),
            React.createElement("span", null, strings.LoadingCategories))) : (React.createElement("div", { className: AdminPanel_module_scss_1.default.tableWrap },
            React.createElement("table", { className: AdminPanel_module_scss_1.default.table },
                React.createElement("thead", { className: AdminPanel_module_scss_1.default.thead },
                    React.createElement("tr", null,
                        React.createElement("th", { className: AdminPanel_module_scss_1.default.th }, strings.Category),
                        React.createElement("th", { className: AdminPanel_module_scss_1.default.th }, strings.Description),
                        React.createElement("th", { className: AdminPanel_module_scss_1.default.th, style: { width: 70 } }, strings.SortOrder),
                        React.createElement("th", { className: AdminPanel_module_scss_1.default.th }, strings.Status),
                        React.createElement("th", { className: AdminPanel_module_scss_1.default.th, style: { width: 130 } }, strings.Actions))),
                React.createElement("tbody", null, categories.length === 0 ? (React.createElement("tr", null,
                    React.createElement("td", { colSpan: 5, className: AdminPanel_module_scss_1.default.empty }, strings.NoCategories))) : (categories.map(function (c) {
                    var _a, _b;
                    return (React.createElement("tr", { key: c.id, className: AdminPanel_module_scss_1.default.tr },
                        React.createElement("td", { className: AdminPanel_module_scss_1.default.td }, c.title),
                        React.createElement("td", { className: AdminPanel_module_scss_1.default.td }, (_a = c.description) !== null && _a !== void 0 ? _a : "—"),
                        React.createElement("td", { className: AdminPanel_module_scss_1.default.td }, (_b = c.sortOrder) !== null && _b !== void 0 ? _b : 0),
                        React.createElement("td", { className: AdminPanel_module_scss_1.default.td },
                            React.createElement("span", { className: "".concat(AdminPanel_module_scss_1.default.badge, " ").concat(c.isActive ? AdminPanel_module_scss_1.default.badgeActive : AdminPanel_module_scss_1.default.badgeInactive) },
                                React.createElement("span", { className: AdminPanel_module_scss_1.default.badgeDot }),
                                c.isActive ? strings.Active : strings.Inactive)),
                        React.createElement("td", { className: AdminPanel_module_scss_1.default.td },
                            React.createElement("div", { className: AdminPanel_module_scss_1.default.actions },
                                React.createElement("button", { className: AdminPanel_module_scss_1.default.iconBtn, title: "Edit", onClick: function () { return openEdit(c); } },
                                    React.createElement("svg", { width: "14", height: "14", viewBox: "0 0 16 16", fill: "currentColor" },
                                        React.createElement("path", { d: "M12.146.146a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-10 10a.5.5 0 01-.168.11l-5 2a.5.5 0 01-.65-.65l2-5a.5.5 0 01.11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 01.5.5v.5h.5a.5.5 0 01.5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 015 12.5V12h-.5a.5.5 0 01-.5-.5V11h-.5a.5.5 0 01-.468-.325z" }))),
                                confirmDeleteId === c.id ? (React.createElement(React.Fragment, null,
                                    React.createElement("span", { style: { fontSize: 11, color: '#6f6f6f' } }, "Delete?"),
                                    React.createElement("button", { className: "".concat(AdminPanel_module_scss_1.default.iconBtn, " ").concat(AdminPanel_module_scss_1.default.iconBtnDanger), title: "Confirm delete", onClick: function () { return (0, CategoryService_1.deleteCategory)(c.id).then(function () { setConfirmDeleteId(null); load(); }).catch(function () { setMessage(strings.CategorySaveFailed); setIsError(true); setConfirmDeleteId(null); }); } }, "\u2713"),
                                    React.createElement("button", { className: AdminPanel_module_scss_1.default.iconBtn, title: "Cancel", onClick: function () { return setConfirmDeleteId(null); } }, "\u2715"))) : (React.createElement("button", { className: "".concat(AdminPanel_module_scss_1.default.iconBtn, " ").concat(AdminPanel_module_scss_1.default.iconBtnDanger), title: "Delete", onClick: function () { return setConfirmDeleteId(c.id); } },
                                    React.createElement("svg", { width: "13", height: "13", viewBox: "0 0 14 14", fill: "currentColor" },
                                        React.createElement("path", { d: "M2 4h10M5 4V2h4v2M6 6v5M8 6v5M3 4l1 8h6l1-8", stroke: "currentColor", strokeWidth: "1.3", fill: "none", strokeLinecap: "round" })))),
                                c.isActive ? (React.createElement("button", { className: "".concat(AdminPanel_module_scss_1.default.iconBtn, " ").concat(AdminPanel_module_scss_1.default.iconBtnSuccess), title: "Activate", onClick: function () { return (0, CategoryService_1.deactivateCategory)(c.id).then(load); } },
                                    React.createElement("svg", { width: "14", height: "14", viewBox: "0 0 16 16", fill: "currentColor" },
                                        React.createElement("path", { d: "M10.5 8a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" }),
                                        React.createElement("path", { d: "M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" })))) : (React.createElement("button", { className: "".concat(AdminPanel_module_scss_1.default.iconBtn, " ").concat(AdminPanel_module_scss_1.default.iconBtnDanger), title: "Deactivate", onClick: function () { return (0, CategoryService_1.activateCategory)(c.id).then(load); } },
                                    React.createElement("svg", { width: "14", height: "14", viewBox: "0 0 16 16", fill: "currentColor" },
                                        React.createElement("path", { d: "M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 00-2.79.588l.77.771A5.944 5.944 0 018 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0114.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" }),
                                        React.createElement("path", { d: "M11.297 9.176a3.5 3.5 0 00-4.474-4.474l.823.823a2.5 2.5 0 012.829 2.829l.822.822zm-2.943 1.299l.822.822a3.5 3.5 0 01-4.474-4.474l.823.823a2.5 2.5 0 002.829 2.829z" }),
                                        React.createElement("path", { d: "M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 001.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 018 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884l-12-12 .708-.708 12 12-.708.708z" }))))))));
                })))))),
        React.createElement(react_2.Modal, { isOpen: drawerOpen, onDismiss: closeDrawer, isBlocking: false, styles: {
                main: {
                    width: 540,
                    maxWidth: "96vw",
                    borderRadius: 16,
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    maxHeight: "92vh",
                },
                scrollableContent: {
                    display: "flex",
                    flexDirection: "column",
                    maxHeight: "92vh",
                },
            } },
            React.createElement("div", { className: AdminPanel_module_scss_1.default.drawerHeader },
                React.createElement("h3", { className: AdminPanel_module_scss_1.default.drawerTitle }, editCat.id ? strings.EditCategory : strings.AddCategoryModal),
                React.createElement("button", { className: AdminPanel_module_scss_1.default.drawerClose, onClick: closeDrawer }, "\u00D7")),
            React.createElement("div", { className: AdminPanel_module_scss_1.default.drawerBody },
                React.createElement("div", { className: AdminPanel_module_scss_1.default.field },
                    React.createElement("label", { className: AdminPanel_module_scss_1.default.fieldLabel },
                        strings.Category,
                        " ",
                        React.createElement("span", { className: AdminPanel_module_scss_1.default.required }, "*")),
                    React.createElement("input", { className: AdminPanel_module_scss_1.default.fieldInput, style: formErrors.title ? { borderColor: '#da1e28' } : {}, placeholder: strings.CategoryNamePlaceholder, value: (_a = editCat.title) !== null && _a !== void 0 ? _a : "", onChange: function (e) {
                            setEditCat(function (c) { return (tslib_1.__assign(tslib_1.__assign({}, c), { title: e.target.value })); });
                            if (formErrors.title)
                                setFormErrors({});
                        } }),
                    formErrors.title && React.createElement("span", { style: { color: '#da1e28', fontSize: 12, display: 'block', marginTop: 2 } }, formErrors.title)),
                React.createElement("div", { className: AdminPanel_module_scss_1.default.field },
                    React.createElement("label", { className: AdminPanel_module_scss_1.default.fieldLabel }, strings.Description),
                    React.createElement("textarea", { className: "".concat(AdminPanel_module_scss_1.default.fieldInput, " ").concat(AdminPanel_module_scss_1.default.fieldTextarea), placeholder: strings.OptionalDescription, value: (_b = editCat.description) !== null && _b !== void 0 ? _b : "", onChange: function (e) {
                            return setEditCat(function (c) { return (tslib_1.__assign(tslib_1.__assign({}, c), { description: e.target.value })); });
                        } })),
                React.createElement("div", { className: AdminPanel_module_scss_1.default.field },
                    React.createElement("label", { className: AdminPanel_module_scss_1.default.fieldLabel }, strings.SortOrder),
                    React.createElement("input", { type: "number", className: AdminPanel_module_scss_1.default.fieldInput, min: 0, max: 9999, value: (_c = editCat.sortOrder) !== null && _c !== void 0 ? _c : 0, onChange: function (e) {
                            return setEditCat(function (c) { return (tslib_1.__assign(tslib_1.__assign({}, c), { sortOrder: parseInt(e.target.value, 10) || 0 })); });
                        } })),
                React.createElement("div", { className: AdminPanel_module_scss_1.default.toggleRow },
                    React.createElement("span", { className: AdminPanel_module_scss_1.default.toggleLabel }, strings.Active),
                    React.createElement("label", { className: AdminPanel_module_scss_1.default.toggle },
                        React.createElement("input", { type: "checkbox", checked: (_d = editCat.isActive) !== null && _d !== void 0 ? _d : true, onChange: function (e) {
                                return setEditCat(function (c) { return (tslib_1.__assign(tslib_1.__assign({}, c), { isActive: e.target.checked })); });
                            } }),
                        React.createElement("span", { className: AdminPanel_module_scss_1.default.track }),
                        React.createElement("span", { className: AdminPanel_module_scss_1.default.thumb }))),
                message && (React.createElement(MessageBar, { text: message, isError: isError, onDismiss: function () { return setMessage(""); } }))),
            React.createElement("div", { className: AdminPanel_module_scss_1.default.drawerFooter },
                React.createElement("button", { className: AdminPanel_module_scss_1.default.saveBtn, onClick: handleSave, disabled: saving }, saving
                    ? strings.Saving
                    : editCat.id
                        ? strings.UpdateCategory
                        : strings.AddCategoryModal),
                React.createElement("button", { className: AdminPanel_module_scss_1.default.cancelBtn, onClick: closeDrawer }, strings.Cancel)))));
};
var AdminPanel = function () {
    var navigateHome = (0, react_1.useContext)(AppContext_1.AppContext).navigateHome;
    var _a = (0, react_1.useState)("projects"), activeTab = _a[0], setActiveTab = _a[1];
    return (React.createElement("div", { className: AdminPanel_module_scss_1.default.container },
        React.createElement("div", { className: AdminPanel_module_scss_1.default.header },
            React.createElement("div", { className: AdminPanel_module_scss_1.default.headerContent },
                React.createElement("button", { className: AdminPanel_module_scss_1.default.homeBtn, title: "Back to Home", onClick: navigateHome },
                    React.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "currentColor" },
                        React.createElement("path", { d: "M8.354 1.146a.5.5 0 00-.708 0l-6 6A.5.5 0 002 7.5v7a.5.5 0 00.5.5h4a.5.5 0 00.5-.5v-4h2v4a.5.5 0 00.5.5h4a.5.5 0 00.5-.5v-7a.5.5 0 00-.146-.354L13 5.793V2.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5v1.293L8.354 1.146z" }))),
                React.createElement("div", null,
                    React.createElement("h2", { className: AdminPanel_module_scss_1.default.headerTitle }, strings.AdminTitle),
                    React.createElement("p", { className: AdminPanel_module_scss_1.default.headerSubtitle }, strings.AdminSubtitle)))),
        React.createElement("div", { className: AdminPanel_module_scss_1.default.body },
            React.createElement("div", { className: AdminPanel_module_scss_1.default.tabs },
                React.createElement("button", { className: "".concat(AdminPanel_module_scss_1.default.tab, " ").concat(activeTab === "projects" ? AdminPanel_module_scss_1.default.tabActive : ""), onClick: function () { return setActiveTab("projects"); } },
                    React.createElement("span", { className: AdminPanel_module_scss_1.default.tabIcon }, "\uD83D\uDCC1"),
                    strings.ProjectsTab),
                React.createElement("button", { className: "".concat(AdminPanel_module_scss_1.default.tab, " ").concat(activeTab === "categories" ? AdminPanel_module_scss_1.default.tabActive : ""), onClick: function () { return setActiveTab("categories"); } },
                    React.createElement("span", { className: AdminPanel_module_scss_1.default.tabIcon }, "\uD83C\uDFF7\uFE0F"),
                    strings.CategoriesTab)),
            activeTab === "projects" ? React.createElement(ProjectsTab, null) : React.createElement(CategoriesTab, null))));
};
exports.default = AdminPanel;
//# sourceMappingURL=AdminPanel.js.map