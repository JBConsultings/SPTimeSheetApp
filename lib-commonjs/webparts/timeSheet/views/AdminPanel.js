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
// ─── Shared button styles (theme colour) ─────────────────────────────────────
var primaryBtnStyles = {
    root: { backgroundColor: "#667eea", borderColor: "#667eea", borderRadius: 6 },
    rootHovered: { backgroundColor: "#5a6fd6", borderColor: "#5a6fd6" },
    rootPressed: { backgroundColor: "#4d5fbc", borderColor: "#4d5fbc" },
    rootDisabled: { backgroundColor: "#c5cbf8", borderColor: "#c5cbf8" },
};
var defaultBtnStyles = {
    root: { borderRadius: 6 },
    rootHovered: { borderColor: "#667eea", color: "#667eea" },
    rootPressed: { borderColor: "#5a6fd6", color: "#5a6fd6" },
};
var dangerBtnStyles = {
    root: { borderRadius: 6, borderColor: "#da1e28", color: "#da1e28" },
    rootHovered: {
        borderColor: "#ba1b23",
        color: "#ba1b23",
        backgroundColor: "#fff1f1",
    },
    rootPressed: { borderColor: "#a2191f", color: "#a2191f" },
};
var iconBtnThemeStyles = {
    root: { borderRadius: 6, color: "#667eea" },
    rootHovered: { backgroundColor: "rgba(102,126,234,0.08)", color: "#5a6fd6" },
};
var homeBtnStyles = {
    root: {
        borderRadius: 6,
        color: "white",
        border: "1px solid rgba(255,255,255,0.3)",
        backgroundColor: "rgba(255,255,255,0.15)",
        width: 36,
        height: 36,
    },
    rootHovered: { backgroundColor: "rgba(255,255,255,0.25)", color: "white" },
    rootPressed: { backgroundColor: "rgba(255,255,255,0.35)", color: "white" },
    icon: { color: "white" },
};
var iconBtnDangerStyles = {
    root: { borderRadius: 6, color: "#da1e28" },
    rootHovered: { backgroundColor: "#fff1f1", color: "#ba1b23" },
};
var iconBtnSuccessStyles = {
    root: { borderRadius: 6, color: "#198038" },
    rootHovered: { backgroundColor: "#defbe6", color: "#0e6027" },
};
var addIcon = { iconName: "Add" };
var editIcon = { iconName: "Edit" };
var deleteIcon = { iconName: "Delete" };
var viewIcon = { iconName: "View" };
var hideIcon = { iconName: "Hide" };
var checkIcon = { iconName: "CheckMark" };
var cancelIcon = { iconName: "Cancel" };
var modalStyles = {
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
};
// ─── Projects Tab ──────────────────────────────────────────────────────────────
var ProjectsTab = function () {
    var _a, _b, _c, _d, _f;
    var _g = (0, react_1.useState)([]), projects = _g[0], setProjects = _g[1];
    var _h = (0, react_1.useState)(true), loading = _h[0], setLoading = _h[1];
    var _j = (0, react_1.useState)(""), message = _j[0], setMessage = _j[1];
    var _k = (0, react_1.useState)(false), isError = _k[0], setIsError = _k[1];
    var _l = (0, react_1.useState)(false), drawerOpen = _l[0], setDrawerOpen = _l[1];
    var _m = (0, react_1.useState)({}), editProject = _m[0], setEditProject = _m[1];
    var _o = (0, react_1.useState)(false), saving = _o[0], setSaving = _o[1];
    var _p = (0, react_1.useState)({}), formErrors = _p[0], setFormErrors = _p[1];
    var _q = (0, react_1.useState)(null), confirmDeleteId = _q[0], setConfirmDeleteId = _q[1];
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
                        errors.title = "Project Name is required.";
                    if (!editProject.projectCode || !editProject.projectCode.trim())
                        errors.projectCode = "Project Code is required.";
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
            React.createElement(react_2.PrimaryButton, { text: strings.AddProject, iconProps: addIcon, styles: primaryBtnStyles, onClick: openAdd })),
        message && (React.createElement(react_2.MessageBar, { messageBarType: isError ? react_2.MessageBarType.error : react_2.MessageBarType.success, isMultiline: false, onDismiss: function () { return setMessage(""); }, dismissButtonAriaLabel: "Close", styles: { root: { borderRadius: 6, marginBottom: 12 } } }, message)),
        loading ? (React.createElement("div", { className: AdminPanel_module_scss_1.default.loading },
            React.createElement(react_2.Spinner, { size: react_2.SpinnerSize.medium, label: strings.LoadingProjects }))) : (React.createElement("div", { className: AdminPanel_module_scss_1.default.tableWrap },
            React.createElement("table", { className: AdminPanel_module_scss_1.default.table },
                React.createElement("thead", { className: AdminPanel_module_scss_1.default.thead },
                    React.createElement("tr", null,
                        React.createElement("th", { className: AdminPanel_module_scss_1.default.th }, strings.Code),
                        React.createElement("th", { className: AdminPanel_module_scss_1.default.th }, strings.ProjectName),
                        React.createElement("th", { className: AdminPanel_module_scss_1.default.th }, strings.ClientName),
                        React.createElement("th", { className: AdminPanel_module_scss_1.default.th }, strings.Status),
                        React.createElement("th", { className: AdminPanel_module_scss_1.default.th, style: { width: 150 } }, strings.Actions))),
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
                                React.createElement(react_2.TooltipHost, { content: "Edit" },
                                    React.createElement(react_2.IconButton, { iconProps: editIcon, styles: iconBtnThemeStyles, onClick: function () { return openEdit(p); } })),
                                confirmDeleteId === p.id ? (React.createElement(React.Fragment, null,
                                    React.createElement("span", { style: {
                                            fontSize: 11,
                                            color: "#6f6f6f",
                                            whiteSpace: "nowrap",
                                        } }, "Delete?"),
                                    React.createElement(react_2.TooltipHost, { content: "Confirm delete" },
                                        React.createElement(react_2.IconButton, { iconProps: checkIcon, styles: iconBtnDangerStyles, onClick: function () {
                                                return (0, ProjectService_1.deleteProject)(p.id)
                                                    .then(function () {
                                                    setConfirmDeleteId(null);
                                                    load();
                                                })
                                                    .catch(function () {
                                                    setMessage(strings.ProjectSaveFailed);
                                                    setIsError(true);
                                                    setConfirmDeleteId(null);
                                                });
                                            } })),
                                    React.createElement(react_2.TooltipHost, { content: "Cancel" },
                                        React.createElement(react_2.IconButton, { iconProps: cancelIcon, styles: iconBtnThemeStyles, onClick: function () { return setConfirmDeleteId(null); } })))) : (React.createElement(react_2.TooltipHost, { content: "Delete" },
                                    React.createElement(react_2.IconButton, { iconProps: deleteIcon, styles: iconBtnDangerStyles, onClick: function () { return setConfirmDeleteId(p.id); } }))),
                                React.createElement(react_2.TooltipHost, { content: p.isActive ? strings.Deactivate : strings.Activate },
                                    React.createElement(react_2.IconButton, { iconProps: p.isActive ? hideIcon : viewIcon, styles: p.isActive
                                            ? iconBtnDangerStyles
                                            : iconBtnSuccessStyles, onClick: function () {
                                            return (p.isActive
                                                ? (0, ProjectService_1.deactivateProject)(p.id)
                                                : (0, ProjectService_1.activateProject)(p.id)).then(load);
                                        } }))))));
                })))))),
        React.createElement(react_2.Modal, { isOpen: drawerOpen, onDismiss: closeDrawer, isBlocking: false, styles: modalStyles },
            React.createElement("div", { className: AdminPanel_module_scss_1.default.drawerHeader },
                React.createElement("h3", { className: AdminPanel_module_scss_1.default.drawerTitle }, editProject.id ? strings.EditProject : strings.AddProjectModal),
                React.createElement(react_2.IconButton, { iconProps: cancelIcon, ariaLabel: "Close", onClick: closeDrawer, styles: iconBtnThemeStyles })),
            React.createElement("div", { className: AdminPanel_module_scss_1.default.drawerBody },
                React.createElement(react_2.TextField, { label: strings.ProjectName, required: true, placeholder: strings.ProjectNamePlaceholder, value: (_a = editProject.title) !== null && _a !== void 0 ? _a : "", errorMessage: formErrors.title, onChange: function (_e, val) {
                        setEditProject(function (p) { return (tslib_1.__assign(tslib_1.__assign({}, p), { title: val || "" })); });
                        if (formErrors.title)
                            setFormErrors(function (prev) { return (tslib_1.__assign(tslib_1.__assign({}, prev), { title: undefined })); });
                    }, styles: { fieldGroup: { borderRadius: 6 } } }),
                React.createElement("div", { style: { marginTop: 14 } },
                    React.createElement(react_2.TextField, { label: strings.ProjectCode, required: true, placeholder: strings.ProjectCodePlaceholder, value: (_b = editProject.projectCode) !== null && _b !== void 0 ? _b : "", errorMessage: formErrors.projectCode, onChange: function (_e, val) {
                            setEditProject(function (p) { return (tslib_1.__assign(tslib_1.__assign({}, p), { projectCode: val || "" })); });
                            if (formErrors.projectCode)
                                setFormErrors(function (prev) { return (tslib_1.__assign(tslib_1.__assign({}, prev), { projectCode: undefined })); });
                        }, styles: { fieldGroup: { borderRadius: 6 } } })),
                React.createElement("div", { style: { marginTop: 14 } },
                    React.createElement(react_2.TextField, { label: strings.ClientName, placeholder: strings.ClientNamePlaceholder, value: (_c = editProject.clientName) !== null && _c !== void 0 ? _c : "", onChange: function (_e, val) {
                            return setEditProject(function (p) { return (tslib_1.__assign(tslib_1.__assign({}, p), { clientName: val || "" })); });
                        }, styles: { fieldGroup: { borderRadius: 6 } } })),
                React.createElement("div", { style: { marginTop: 14 } },
                    React.createElement(react_2.TextField, { label: strings.Description, multiline: true, rows: 3, placeholder: strings.OptionalDescription, value: (_d = editProject.description) !== null && _d !== void 0 ? _d : "", onChange: function (_e, val) {
                            return setEditProject(function (p) { return (tslib_1.__assign(tslib_1.__assign({}, p), { description: val || "" })); });
                        }, styles: { fieldGroup: { borderRadius: 6 } } })),
                React.createElement("div", { style: { marginTop: 16 } },
                    React.createElement(react_2.Toggle, { label: strings.Active, checked: (_f = editProject.isActive) !== null && _f !== void 0 ? _f : true, onChange: function (_e, checked) {
                            return setEditProject(function (p) { return (tslib_1.__assign(tslib_1.__assign({}, p), { isActive: checked })); });
                        }, styles: {
                            thumb: {
                                backgroundColor: editProject.isActive ? "#667eea" : undefined,
                            },
                            pill: {
                                backgroundColor: editProject.isActive
                                    ? "rgba(102,126,234,0.3)"
                                    : undefined,
                            },
                        } }))),
            React.createElement("div", { className: AdminPanel_module_scss_1.default.drawerFooter },
                React.createElement(react_2.PrimaryButton, { text: saving
                        ? strings.Saving
                        : editProject.id
                            ? strings.UpdateProject
                            : strings.AddProjectModal, disabled: saving, styles: primaryBtnStyles, onRenderIcon: saving ? function () { return React.createElement(react_2.Spinner, { size: react_2.SpinnerSize.small }); } : undefined, onClick: handleSave }),
                React.createElement(react_2.DefaultButton, { text: strings.Cancel, styles: defaultBtnStyles, onClick: closeDrawer })))));
};
// ─── Categories Tab ────────────────────────────────────────────────────────────
var CategoriesTab = function () {
    var _a, _b, _c, _d;
    var _f = (0, react_1.useState)([]), categories = _f[0], setCategories = _f[1];
    var _g = (0, react_1.useState)(true), loading = _g[0], setLoading = _g[1];
    var _h = (0, react_1.useState)(""), message = _h[0], setMessage = _h[1];
    var _j = (0, react_1.useState)(false), isError = _j[0], setIsError = _j[1];
    var _k = (0, react_1.useState)(false), drawerOpen = _k[0], setDrawerOpen = _k[1];
    var _l = (0, react_1.useState)({}), editCat = _l[0], setEditCat = _l[1];
    var _m = (0, react_1.useState)(false), saving = _m[0], setSaving = _m[1];
    var _o = (0, react_1.useState)({}), formErrors = _o[0], setFormErrors = _o[1];
    var _p = (0, react_1.useState)(null), confirmDeleteId = _p[0], setConfirmDeleteId = _p[1];
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
                        setFormErrors({ title: "Category Name is required." });
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
            React.createElement(react_2.PrimaryButton, { text: strings.AddCategory, iconProps: addIcon, styles: primaryBtnStyles, onClick: openAdd })),
        message && (React.createElement(react_2.MessageBar, { messageBarType: isError ? react_2.MessageBarType.error : react_2.MessageBarType.success, isMultiline: false, onDismiss: function () { return setMessage(""); }, dismissButtonAriaLabel: "Close", styles: { root: { borderRadius: 6, marginBottom: 12 } } }, message)),
        loading ? (React.createElement("div", { className: AdminPanel_module_scss_1.default.loading },
            React.createElement(react_2.Spinner, { size: react_2.SpinnerSize.medium, label: strings.LoadingCategories }))) : (React.createElement("div", { className: AdminPanel_module_scss_1.default.tableWrap },
            React.createElement("table", { className: AdminPanel_module_scss_1.default.table },
                React.createElement("thead", { className: AdminPanel_module_scss_1.default.thead },
                    React.createElement("tr", null,
                        React.createElement("th", { className: AdminPanel_module_scss_1.default.th }, strings.Category),
                        React.createElement("th", { className: AdminPanel_module_scss_1.default.th }, strings.Description),
                        React.createElement("th", { className: AdminPanel_module_scss_1.default.th, style: { width: 70 } }, strings.SortOrder),
                        React.createElement("th", { className: AdminPanel_module_scss_1.default.th }, strings.Status),
                        React.createElement("th", { className: AdminPanel_module_scss_1.default.th, style: { width: 150 } }, strings.Actions))),
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
                                React.createElement(react_2.TooltipHost, { content: "Edit" },
                                    React.createElement(react_2.IconButton, { iconProps: editIcon, styles: iconBtnThemeStyles, onClick: function () { return openEdit(c); } })),
                                confirmDeleteId === c.id ? (React.createElement(React.Fragment, null,
                                    React.createElement("span", { style: {
                                            fontSize: 11,
                                            color: "#6f6f6f",
                                            whiteSpace: "nowrap",
                                        } }, "Delete?"),
                                    React.createElement(react_2.TooltipHost, { content: "Confirm delete" },
                                        React.createElement(react_2.IconButton, { iconProps: checkIcon, styles: iconBtnDangerStyles, onClick: function () {
                                                return (0, CategoryService_1.deleteCategory)(c.id)
                                                    .then(function () {
                                                    setConfirmDeleteId(null);
                                                    load();
                                                })
                                                    .catch(function () {
                                                    setMessage(strings.CategorySaveFailed);
                                                    setIsError(true);
                                                    setConfirmDeleteId(null);
                                                });
                                            } })),
                                    React.createElement(react_2.TooltipHost, { content: "Cancel" },
                                        React.createElement(react_2.IconButton, { iconProps: cancelIcon, styles: iconBtnThemeStyles, onClick: function () { return setConfirmDeleteId(null); } })))) : (React.createElement(react_2.TooltipHost, { content: "Delete" },
                                    React.createElement(react_2.IconButton, { iconProps: deleteIcon, styles: iconBtnDangerStyles, onClick: function () { return setConfirmDeleteId(c.id); } }))),
                                React.createElement(react_2.TooltipHost, { content: c.isActive ? strings.Deactivate : strings.Activate },
                                    React.createElement(react_2.IconButton, { iconProps: c.isActive ? hideIcon : viewIcon, styles: c.isActive
                                            ? iconBtnDangerStyles
                                            : iconBtnSuccessStyles, onClick: function () {
                                            return (c.isActive
                                                ? (0, CategoryService_1.deactivateCategory)(c.id)
                                                : (0, CategoryService_1.activateCategory)(c.id)).then(load);
                                        } }))))));
                })))))),
        React.createElement(react_2.Modal, { isOpen: drawerOpen, onDismiss: closeDrawer, isBlocking: false, styles: modalStyles },
            React.createElement("div", { className: AdminPanel_module_scss_1.default.drawerHeader },
                React.createElement("h3", { className: AdminPanel_module_scss_1.default.drawerTitle }, editCat.id ? strings.EditCategory : strings.AddCategoryModal),
                React.createElement(react_2.IconButton, { iconProps: cancelIcon, ariaLabel: "Close", onClick: closeDrawer, styles: iconBtnThemeStyles })),
            React.createElement("div", { className: AdminPanel_module_scss_1.default.drawerBody },
                React.createElement(react_2.TextField, { label: strings.Category, required: true, placeholder: strings.CategoryNamePlaceholder, value: (_a = editCat.title) !== null && _a !== void 0 ? _a : "", errorMessage: formErrors.title, onChange: function (_e, val) {
                        setEditCat(function (c) { return (tslib_1.__assign(tslib_1.__assign({}, c), { title: val || "" })); });
                        if (formErrors.title)
                            setFormErrors({});
                    }, styles: { fieldGroup: { borderRadius: 6 } } }),
                React.createElement("div", { style: { marginTop: 14 } },
                    React.createElement(react_2.TextField, { label: strings.Description, multiline: true, rows: 3, placeholder: strings.OptionalDescription, value: (_b = editCat.description) !== null && _b !== void 0 ? _b : "", onChange: function (_e, val) {
                            return setEditCat(function (c) { return (tslib_1.__assign(tslib_1.__assign({}, c), { description: val || "" })); });
                        }, styles: { fieldGroup: { borderRadius: 6 } } })),
                React.createElement("div", { style: { marginTop: 14 } },
                    React.createElement(react_2.SpinButton, { label: strings.SortOrder, min: 0, max: 9999, step: 1, value: String((_c = editCat.sortOrder) !== null && _c !== void 0 ? _c : 0), onIncrement: function (val) {
                            setEditCat(function (c) { return (tslib_1.__assign(tslib_1.__assign({}, c), { sortOrder: Math.min((parseInt(val, 10) || 0) + 1, 9999) })); });
                        }, onDecrement: function (val) {
                            setEditCat(function (c) { return (tslib_1.__assign(tslib_1.__assign({}, c), { sortOrder: Math.max((parseInt(val, 10) || 0) - 1, 0) })); });
                        }, onValidate: function (val) {
                            setEditCat(function (c) { return (tslib_1.__assign(tslib_1.__assign({}, c), { sortOrder: parseInt(val, 10) || 0 })); });
                            return val;
                        }, styles: {
                            spinButtonWrapper: { borderRadius: 6 },
                            root: { maxWidth: 120 },
                        } })),
                React.createElement("div", { style: { marginTop: 16 } },
                    React.createElement(react_2.Toggle, { label: strings.Active, checked: (_d = editCat.isActive) !== null && _d !== void 0 ? _d : true, onChange: function (_e, checked) {
                            return setEditCat(function (c) { return (tslib_1.__assign(tslib_1.__assign({}, c), { isActive: checked })); });
                        }, styles: {
                            thumb: {
                                backgroundColor: editCat.isActive ? "#667eea" : undefined,
                            },
                            pill: {
                                backgroundColor: editCat.isActive
                                    ? "rgba(102,126,234,0.3)"
                                    : undefined,
                            },
                        } }))),
            React.createElement("div", { className: AdminPanel_module_scss_1.default.drawerFooter },
                React.createElement(react_2.PrimaryButton, { text: saving
                        ? strings.Saving
                        : editCat.id
                            ? strings.UpdateCategory
                            : strings.AddCategoryModal, disabled: saving, styles: primaryBtnStyles, onRenderIcon: saving ? function () { return React.createElement(react_2.Spinner, { size: react_2.SpinnerSize.small }); } : undefined, onClick: handleSave }),
                React.createElement(react_2.DefaultButton, { text: strings.Cancel, styles: defaultBtnStyles, onClick: closeDrawer })))));
};
var AdminPanel = function () {
    var navigateHome = (0, react_1.useContext)(AppContext_1.AppContext).navigateHome;
    var _a = (0, react_1.useState)("projects"), activeTab = _a[0], setActiveTab = _a[1];
    return (React.createElement("div", { className: AdminPanel_module_scss_1.default.container },
        React.createElement("div", { className: AdminPanel_module_scss_1.default.header },
            React.createElement("div", { className: AdminPanel_module_scss_1.default.headerContent },
                React.createElement(react_2.IconButton, { iconProps: { iconName: "Home" }, title: "Back to Home", styles: homeBtnStyles, onClick: navigateHome }),
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