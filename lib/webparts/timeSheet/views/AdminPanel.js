import { __assign, __awaiter, __generator } from "tslib";
import * as React from "react";
import { useContext, useState, useEffect } from "react";
import { Modal, IconButton, PrimaryButton, DefaultButton, TextField, Toggle, SpinButton, Spinner, SpinnerSize, MessageBar, MessageBarType, TooltipHost, } from "@fluentui/react";
import { AppContext } from "../context/AppContext";
import { getAllProjects, addProject, updateProject, deactivateProject, activateProject, deleteProject, } from "../services/ProjectService";
import { getAllCategories, addCategory, updateCategory, deactivateCategory, activateCategory, deleteCategory, } from "../services/CategoryService";
import * as strings from "TimeSheetWebPartStrings";
import styles from "./AdminPanel.module.scss";
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
    var _g = useState([]), projects = _g[0], setProjects = _g[1];
    var _h = useState(true), loading = _h[0], setLoading = _h[1];
    var _j = useState(""), message = _j[0], setMessage = _j[1];
    var _k = useState(false), isError = _k[0], setIsError = _k[1];
    var _l = useState(false), drawerOpen = _l[0], setDrawerOpen = _l[1];
    var _m = useState({}), editProject = _m[0], setEditProject = _m[1];
    var _o = useState(false), saving = _o[0], setSaving = _o[1];
    var _p = useState({}), formErrors = _p[0], setFormErrors = _p[1];
    var _q = useState(null), confirmDeleteId = _q[0], setConfirmDeleteId = _q[1];
    var load = function () {
        setLoading(true);
        getAllProjects()
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
    useEffect(function () {
        load();
    }, []);
    var openAdd = function () {
        setEditProject({ isActive: true });
        setFormErrors({});
        setDrawerOpen(true);
    };
    var openEdit = function (p) {
        setEditProject(__assign({}, p));
        setFormErrors({});
        setDrawerOpen(true);
    };
    var closeDrawer = function () {
        setFormErrors({});
        setDrawerOpen(false);
    };
    var handleSave = function () { return __awaiter(void 0, void 0, void 0, function () {
        var errors, _a;
        var _b;
        return __generator(this, function (_c) {
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
                    return [4 /*yield*/, updateProject(editProject.id, editProject)];
                case 2:
                    _c.sent();
                    setMessage(strings.ProjectUpdated);
                    setIsError(false);
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, addProject(__assign(__assign({}, editProject), { isActive: (_b = editProject.isActive) !== null && _b !== void 0 ? _b : true }))];
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
    return (React.createElement("div", { className: styles.tabContent },
        React.createElement("div", { className: styles.toolbar },
            React.createElement("span", { className: styles.sectionLabel }, strings.ProjectsTab),
            React.createElement(PrimaryButton, { text: strings.AddProject, iconProps: addIcon, styles: primaryBtnStyles, onClick: openAdd })),
        message && (React.createElement(MessageBar, { messageBarType: isError ? MessageBarType.error : MessageBarType.success, isMultiline: false, onDismiss: function () { return setMessage(""); }, dismissButtonAriaLabel: "Close", styles: { root: { borderRadius: 6, marginBottom: 12 } } }, message)),
        loading ? (React.createElement("div", { className: styles.loading },
            React.createElement(Spinner, { size: SpinnerSize.medium, label: strings.LoadingProjects }))) : (React.createElement("div", { className: styles.tableWrap },
            React.createElement("table", { className: styles.table },
                React.createElement("thead", { className: styles.thead },
                    React.createElement("tr", null,
                        React.createElement("th", { className: styles.th }, strings.Code),
                        React.createElement("th", { className: styles.th }, strings.ProjectName),
                        React.createElement("th", { className: styles.th }, strings.ClientName),
                        React.createElement("th", { className: styles.th }, strings.Status),
                        React.createElement("th", { className: styles.th, style: { width: 150 } }, strings.Actions))),
                React.createElement("tbody", null, projects.length === 0 ? (React.createElement("tr", null,
                    React.createElement("td", { colSpan: 5, className: styles.empty }, strings.NoProjects))) : (projects.map(function (p) {
                    var _a;
                    return (React.createElement("tr", { key: p.id, className: styles.tr },
                        React.createElement("td", { className: styles.td },
                            React.createElement("span", { className: styles.tdCode }, p.projectCode)),
                        React.createElement("td", { className: styles.td }, p.title),
                        React.createElement("td", { className: styles.td }, (_a = p.clientName) !== null && _a !== void 0 ? _a : "—"),
                        React.createElement("td", { className: styles.td },
                            React.createElement("span", { className: "".concat(styles.badge, " ").concat(p.isActive ? styles.badgeActive : styles.badgeInactive) },
                                React.createElement("span", { className: styles.badgeDot }),
                                p.isActive ? strings.Active : strings.Inactive)),
                        React.createElement("td", { className: styles.td },
                            React.createElement("div", { className: styles.actions },
                                React.createElement(TooltipHost, { content: "Edit" },
                                    React.createElement(IconButton, { iconProps: editIcon, styles: iconBtnThemeStyles, onClick: function () { return openEdit(p); } })),
                                confirmDeleteId === p.id ? (React.createElement(React.Fragment, null,
                                    React.createElement("span", { style: {
                                            fontSize: 11,
                                            color: "#6f6f6f",
                                            whiteSpace: "nowrap",
                                        } }, "Delete?"),
                                    React.createElement(TooltipHost, { content: "Confirm delete" },
                                        React.createElement(IconButton, { iconProps: checkIcon, styles: iconBtnDangerStyles, onClick: function () {
                                                return deleteProject(p.id)
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
                                    React.createElement(TooltipHost, { content: "Cancel" },
                                        React.createElement(IconButton, { iconProps: cancelIcon, styles: iconBtnThemeStyles, onClick: function () { return setConfirmDeleteId(null); } })))) : (React.createElement(TooltipHost, { content: "Delete" },
                                    React.createElement(IconButton, { iconProps: deleteIcon, styles: iconBtnDangerStyles, onClick: function () { return setConfirmDeleteId(p.id); } }))),
                                React.createElement(TooltipHost, { content: p.isActive ? strings.Deactivate : strings.Activate },
                                    React.createElement(IconButton, { iconProps: p.isActive ? hideIcon : viewIcon, styles: p.isActive
                                            ? iconBtnDangerStyles
                                            : iconBtnSuccessStyles, onClick: function () {
                                            return (p.isActive
                                                ? deactivateProject(p.id)
                                                : activateProject(p.id)).then(load);
                                        } }))))));
                })))))),
        React.createElement(Modal, { isOpen: drawerOpen, onDismiss: closeDrawer, isBlocking: false, styles: modalStyles },
            React.createElement("div", { className: styles.drawerHeader },
                React.createElement("h3", { className: styles.drawerTitle }, editProject.id ? strings.EditProject : strings.AddProjectModal),
                React.createElement(IconButton, { iconProps: cancelIcon, ariaLabel: "Close", onClick: closeDrawer, styles: iconBtnThemeStyles })),
            React.createElement("div", { className: styles.drawerBody },
                React.createElement(TextField, { label: strings.ProjectName, required: true, placeholder: strings.ProjectNamePlaceholder, value: (_a = editProject.title) !== null && _a !== void 0 ? _a : "", errorMessage: formErrors.title, onChange: function (_e, val) {
                        setEditProject(function (p) { return (__assign(__assign({}, p), { title: val || "" })); });
                        if (formErrors.title)
                            setFormErrors(function (prev) { return (__assign(__assign({}, prev), { title: undefined })); });
                    }, styles: { fieldGroup: { borderRadius: 6 } } }),
                React.createElement("div", { style: { marginTop: 14 } },
                    React.createElement(TextField, { label: strings.ProjectCode, required: true, placeholder: strings.ProjectCodePlaceholder, value: (_b = editProject.projectCode) !== null && _b !== void 0 ? _b : "", errorMessage: formErrors.projectCode, onChange: function (_e, val) {
                            setEditProject(function (p) { return (__assign(__assign({}, p), { projectCode: val || "" })); });
                            if (formErrors.projectCode)
                                setFormErrors(function (prev) { return (__assign(__assign({}, prev), { projectCode: undefined })); });
                        }, styles: { fieldGroup: { borderRadius: 6 } } })),
                React.createElement("div", { style: { marginTop: 14 } },
                    React.createElement(TextField, { label: strings.ClientName, placeholder: strings.ClientNamePlaceholder, value: (_c = editProject.clientName) !== null && _c !== void 0 ? _c : "", onChange: function (_e, val) {
                            return setEditProject(function (p) { return (__assign(__assign({}, p), { clientName: val || "" })); });
                        }, styles: { fieldGroup: { borderRadius: 6 } } })),
                React.createElement("div", { style: { marginTop: 14 } },
                    React.createElement(TextField, { label: strings.Description, multiline: true, rows: 3, placeholder: strings.OptionalDescription, value: (_d = editProject.description) !== null && _d !== void 0 ? _d : "", onChange: function (_e, val) {
                            return setEditProject(function (p) { return (__assign(__assign({}, p), { description: val || "" })); });
                        }, styles: { fieldGroup: { borderRadius: 6 } } })),
                React.createElement("div", { style: { marginTop: 16 } },
                    React.createElement(Toggle, { label: strings.Active, checked: (_f = editProject.isActive) !== null && _f !== void 0 ? _f : true, onChange: function (_e, checked) {
                            return setEditProject(function (p) { return (__assign(__assign({}, p), { isActive: checked })); });
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
            React.createElement("div", { className: styles.drawerFooter },
                React.createElement(PrimaryButton, { text: saving
                        ? strings.Saving
                        : editProject.id
                            ? strings.UpdateProject
                            : strings.AddProjectModal, disabled: saving, styles: primaryBtnStyles, onRenderIcon: saving ? function () { return React.createElement(Spinner, { size: SpinnerSize.small }); } : undefined, onClick: handleSave }),
                React.createElement(DefaultButton, { text: strings.Cancel, styles: defaultBtnStyles, onClick: closeDrawer })))));
};
// ─── Categories Tab ────────────────────────────────────────────────────────────
var CategoriesTab = function () {
    var _a, _b, _c, _d;
    var _f = useState([]), categories = _f[0], setCategories = _f[1];
    var _g = useState(true), loading = _g[0], setLoading = _g[1];
    var _h = useState(""), message = _h[0], setMessage = _h[1];
    var _j = useState(false), isError = _j[0], setIsError = _j[1];
    var _k = useState(false), drawerOpen = _k[0], setDrawerOpen = _k[1];
    var _l = useState({}), editCat = _l[0], setEditCat = _l[1];
    var _m = useState(false), saving = _m[0], setSaving = _m[1];
    var _o = useState({}), formErrors = _o[0], setFormErrors = _o[1];
    var _p = useState(null), confirmDeleteId = _p[0], setConfirmDeleteId = _p[1];
    var load = function () {
        setLoading(true);
        getAllCategories()
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
    useEffect(function () {
        load();
    }, []);
    var openAdd = function () {
        setEditCat({ isActive: true, sortOrder: 0 });
        setFormErrors({});
        setDrawerOpen(true);
    };
    var openEdit = function (c) {
        setEditCat(__assign({}, c));
        setFormErrors({});
        setDrawerOpen(true);
    };
    var closeDrawer = function () {
        setFormErrors({});
        setDrawerOpen(false);
    };
    var handleSave = function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a;
        var _b;
        return __generator(this, function (_c) {
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
                    return [4 /*yield*/, updateCategory(editCat.id, editCat)];
                case 2:
                    _c.sent();
                    setMessage(strings.CategoryUpdated);
                    setIsError(false);
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, addCategory(__assign(__assign({}, editCat), { isActive: (_b = editCat.isActive) !== null && _b !== void 0 ? _b : true }))];
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
    return (React.createElement("div", { className: styles.tabContent },
        React.createElement("div", { className: styles.toolbar },
            React.createElement("span", { className: styles.sectionLabel }, strings.CategoriesTab),
            React.createElement(PrimaryButton, { text: strings.AddCategory, iconProps: addIcon, styles: primaryBtnStyles, onClick: openAdd })),
        message && (React.createElement(MessageBar, { messageBarType: isError ? MessageBarType.error : MessageBarType.success, isMultiline: false, onDismiss: function () { return setMessage(""); }, dismissButtonAriaLabel: "Close", styles: { root: { borderRadius: 6, marginBottom: 12 } } }, message)),
        loading ? (React.createElement("div", { className: styles.loading },
            React.createElement(Spinner, { size: SpinnerSize.medium, label: strings.LoadingCategories }))) : (React.createElement("div", { className: styles.tableWrap },
            React.createElement("table", { className: styles.table },
                React.createElement("thead", { className: styles.thead },
                    React.createElement("tr", null,
                        React.createElement("th", { className: styles.th }, strings.Category),
                        React.createElement("th", { className: styles.th }, strings.Description),
                        React.createElement("th", { className: styles.th, style: { width: 70 } }, strings.SortOrder),
                        React.createElement("th", { className: styles.th }, strings.Status),
                        React.createElement("th", { className: styles.th, style: { width: 150 } }, strings.Actions))),
                React.createElement("tbody", null, categories.length === 0 ? (React.createElement("tr", null,
                    React.createElement("td", { colSpan: 5, className: styles.empty }, strings.NoCategories))) : (categories.map(function (c) {
                    var _a, _b;
                    return (React.createElement("tr", { key: c.id, className: styles.tr },
                        React.createElement("td", { className: styles.td }, c.title),
                        React.createElement("td", { className: styles.td }, (_a = c.description) !== null && _a !== void 0 ? _a : "—"),
                        React.createElement("td", { className: styles.td }, (_b = c.sortOrder) !== null && _b !== void 0 ? _b : 0),
                        React.createElement("td", { className: styles.td },
                            React.createElement("span", { className: "".concat(styles.badge, " ").concat(c.isActive ? styles.badgeActive : styles.badgeInactive) },
                                React.createElement("span", { className: styles.badgeDot }),
                                c.isActive ? strings.Active : strings.Inactive)),
                        React.createElement("td", { className: styles.td },
                            React.createElement("div", { className: styles.actions },
                                React.createElement(TooltipHost, { content: "Edit" },
                                    React.createElement(IconButton, { iconProps: editIcon, styles: iconBtnThemeStyles, onClick: function () { return openEdit(c); } })),
                                confirmDeleteId === c.id ? (React.createElement(React.Fragment, null,
                                    React.createElement("span", { style: {
                                            fontSize: 11,
                                            color: "#6f6f6f",
                                            whiteSpace: "nowrap",
                                        } }, "Delete?"),
                                    React.createElement(TooltipHost, { content: "Confirm delete" },
                                        React.createElement(IconButton, { iconProps: checkIcon, styles: iconBtnDangerStyles, onClick: function () {
                                                return deleteCategory(c.id)
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
                                    React.createElement(TooltipHost, { content: "Cancel" },
                                        React.createElement(IconButton, { iconProps: cancelIcon, styles: iconBtnThemeStyles, onClick: function () { return setConfirmDeleteId(null); } })))) : (React.createElement(TooltipHost, { content: "Delete" },
                                    React.createElement(IconButton, { iconProps: deleteIcon, styles: iconBtnDangerStyles, onClick: function () { return setConfirmDeleteId(c.id); } }))),
                                React.createElement(TooltipHost, { content: c.isActive ? strings.Deactivate : strings.Activate },
                                    React.createElement(IconButton, { iconProps: c.isActive ? hideIcon : viewIcon, styles: c.isActive
                                            ? iconBtnDangerStyles
                                            : iconBtnSuccessStyles, onClick: function () {
                                            return (c.isActive
                                                ? deactivateCategory(c.id)
                                                : activateCategory(c.id)).then(load);
                                        } }))))));
                })))))),
        React.createElement(Modal, { isOpen: drawerOpen, onDismiss: closeDrawer, isBlocking: false, styles: modalStyles },
            React.createElement("div", { className: styles.drawerHeader },
                React.createElement("h3", { className: styles.drawerTitle }, editCat.id ? strings.EditCategory : strings.AddCategoryModal),
                React.createElement(IconButton, { iconProps: cancelIcon, ariaLabel: "Close", onClick: closeDrawer, styles: iconBtnThemeStyles })),
            React.createElement("div", { className: styles.drawerBody },
                React.createElement(TextField, { label: strings.Category, required: true, placeholder: strings.CategoryNamePlaceholder, value: (_a = editCat.title) !== null && _a !== void 0 ? _a : "", errorMessage: formErrors.title, onChange: function (_e, val) {
                        setEditCat(function (c) { return (__assign(__assign({}, c), { title: val || "" })); });
                        if (formErrors.title)
                            setFormErrors({});
                    }, styles: { fieldGroup: { borderRadius: 6 } } }),
                React.createElement("div", { style: { marginTop: 14 } },
                    React.createElement(TextField, { label: strings.Description, multiline: true, rows: 3, placeholder: strings.OptionalDescription, value: (_b = editCat.description) !== null && _b !== void 0 ? _b : "", onChange: function (_e, val) {
                            return setEditCat(function (c) { return (__assign(__assign({}, c), { description: val || "" })); });
                        }, styles: { fieldGroup: { borderRadius: 6 } } })),
                React.createElement("div", { style: { marginTop: 14 } },
                    React.createElement(SpinButton, { label: strings.SortOrder, min: 0, max: 9999, step: 1, value: String((_c = editCat.sortOrder) !== null && _c !== void 0 ? _c : 0), onIncrement: function (val) {
                            setEditCat(function (c) { return (__assign(__assign({}, c), { sortOrder: Math.min((parseInt(val, 10) || 0) + 1, 9999) })); });
                        }, onDecrement: function (val) {
                            setEditCat(function (c) { return (__assign(__assign({}, c), { sortOrder: Math.max((parseInt(val, 10) || 0) - 1, 0) })); });
                        }, onValidate: function (val) {
                            setEditCat(function (c) { return (__assign(__assign({}, c), { sortOrder: parseInt(val, 10) || 0 })); });
                            return val;
                        }, styles: {
                            spinButtonWrapper: { borderRadius: 6 },
                            root: { maxWidth: 120 },
                        } })),
                React.createElement("div", { style: { marginTop: 16 } },
                    React.createElement(Toggle, { label: strings.Active, checked: (_d = editCat.isActive) !== null && _d !== void 0 ? _d : true, onChange: function (_e, checked) {
                            return setEditCat(function (c) { return (__assign(__assign({}, c), { isActive: checked })); });
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
            React.createElement("div", { className: styles.drawerFooter },
                React.createElement(PrimaryButton, { text: saving
                        ? strings.Saving
                        : editCat.id
                            ? strings.UpdateCategory
                            : strings.AddCategoryModal, disabled: saving, styles: primaryBtnStyles, onRenderIcon: saving ? function () { return React.createElement(Spinner, { size: SpinnerSize.small }); } : undefined, onClick: handleSave }),
                React.createElement(DefaultButton, { text: strings.Cancel, styles: defaultBtnStyles, onClick: closeDrawer })))));
};
var AdminPanel = function () {
    var navigateHome = useContext(AppContext).navigateHome;
    var _a = useState("projects"), activeTab = _a[0], setActiveTab = _a[1];
    return (React.createElement("div", { className: styles.container },
        React.createElement("div", { className: styles.header },
            React.createElement("div", { className: styles.headerContent },
                React.createElement(IconButton, { iconProps: { iconName: "Home" }, title: "Back to Home", styles: homeBtnStyles, onClick: navigateHome }),
                React.createElement("div", null,
                    React.createElement("h2", { className: styles.headerTitle }, strings.AdminTitle),
                    React.createElement("p", { className: styles.headerSubtitle }, strings.AdminSubtitle)))),
        React.createElement("div", { className: styles.body },
            React.createElement("div", { className: styles.tabs },
                React.createElement("button", { className: "".concat(styles.tab, " ").concat(activeTab === "projects" ? styles.tabActive : ""), onClick: function () { return setActiveTab("projects"); } },
                    React.createElement("span", { className: styles.tabIcon }, "\uD83D\uDCC1"),
                    strings.ProjectsTab),
                React.createElement("button", { className: "".concat(styles.tab, " ").concat(activeTab === "categories" ? styles.tabActive : ""), onClick: function () { return setActiveTab("categories"); } },
                    React.createElement("span", { className: styles.tabIcon }, "\uD83C\uDFF7\uFE0F"),
                    strings.CategoriesTab)),
            activeTab === "projects" ? React.createElement(ProjectsTab, null) : React.createElement(CategoriesTab, null))));
};
export default AdminPanel;
//# sourceMappingURL=AdminPanel.js.map