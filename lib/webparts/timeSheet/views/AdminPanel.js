import { __assign, __awaiter, __generator } from "tslib";
import * as React from "react";
import { useContext, useState, useEffect } from "react";
import { Modal } from "@fluentui/react";
import { AppContext } from "../context/AppContext";
import { getAllProjects, addProject, updateProject, deactivateProject, activateProject, } from "../services/ProjectService";
import { getAllCategories, addCategory, updateCategory, deactivateCategory, activateCategory, } from "../services/CategoryService";
import styles from "./AdminPanel.module.scss";
var MessageBar = function (_a) {
    var text = _a.text, isError = _a.isError, onDismiss = _a.onDismiss;
    return (React.createElement("div", { className: "".concat(styles.message, " ").concat(isError ? styles.messageError : styles.messageSuccess) },
        React.createElement("span", null, text),
        React.createElement("button", { className: styles.messageDismiss, onClick: onDismiss }, "\u00D7")));
};
// ─── Projects Tab ──────────────────────────────────────────────────────────────
var ProjectsTab = function () {
    var _a, _b, _c, _d, _e;
    var _f = useState([]), projects = _f[0], setProjects = _f[1];
    var _g = useState(true), loading = _g[0], setLoading = _g[1];
    var _h = useState(""), message = _h[0], setMessage = _h[1];
    var _j = useState(false), isError = _j[0], setIsError = _j[1];
    var _k = useState(false), drawerOpen = _k[0], setDrawerOpen = _k[1];
    var _l = useState({}), editProject = _l[0], setEditProject = _l[1];
    var _m = useState(false), saving = _m[0], setSaving = _m[1];
    var load = function () {
        setLoading(true);
        getAllProjects()
            .then(function (items) {
            setProjects(items);
            setLoading(false);
        })
            .catch(function () {
            setMessage("Failed to load projects.");
            setIsError(true);
            setLoading(false);
        });
    };
    useEffect(function () {
        load();
    }, []);
    var openAdd = function () {
        setEditProject({ isActive: true });
        setDrawerOpen(true);
    };
    var openEdit = function (p) {
        setEditProject(__assign({}, p));
        setDrawerOpen(true);
    };
    var closeDrawer = function () {
        setDrawerOpen(false);
    };
    var handleSave = function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a;
        var _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    if (!editProject.title || !editProject.projectCode) {
                        setMessage("Project Name and Project Code are required.");
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
                    setMessage("Project updated successfully.");
                    setIsError(false);
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, addProject(__assign(__assign({}, editProject), { isActive: (_b = editProject.isActive) !== null && _b !== void 0 ? _b : true }))];
                case 4:
                    _c.sent();
                    setMessage("Project added successfully.");
                    setIsError(false);
                    _c.label = 5;
                case 5:
                    setDrawerOpen(false);
                    load();
                    return [3 /*break*/, 8];
                case 6:
                    _a = _c.sent();
                    setMessage("Failed to save project.");
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
            React.createElement("span", { className: styles.sectionLabel }, "Projects"),
            React.createElement("button", { className: styles.addBtn, onClick: openAdd },
                React.createElement("svg", { width: "13", height: "13", viewBox: "0 0 13 13", fill: "currentColor" },
                    React.createElement("path", { d: "M6.5 1a.75.75 0 01.75.75v4h4a.75.75 0 010 1.5h-4v4a.75.75 0 01-1.5 0v-4h-4a.75.75 0 010-1.5h4v-4A.75.75 0 016.5 1z" })),
                "Add Project")),
        message && (React.createElement(MessageBar, { text: message, isError: isError, onDismiss: function () { return setMessage(""); } })),
        loading ? (React.createElement("div", { className: styles.loading },
            React.createElement("div", { className: styles.spinner }),
            React.createElement("span", null, "Loading projects\u2026"))) : (React.createElement("div", { className: styles.tableWrap },
            React.createElement("table", { className: styles.table },
                React.createElement("thead", { className: styles.thead },
                    React.createElement("tr", null,
                        React.createElement("th", { className: styles.th }, "Code"),
                        React.createElement("th", { className: styles.th }, "Project Name"),
                        React.createElement("th", { className: styles.th }, "Client"),
                        React.createElement("th", { className: styles.th }, "Status"),
                        React.createElement("th", { className: styles.th, style: { width: 90 } }, "Actions"))),
                React.createElement("tbody", null, projects.length === 0 ? (React.createElement("tr", null,
                    React.createElement("td", { colSpan: 5, className: styles.empty }, "No projects found."))) : (projects.map(function (p) {
                    var _a;
                    return (React.createElement("tr", { key: p.id, className: styles.tr },
                        React.createElement("td", { className: styles.td },
                            React.createElement("span", { className: styles.tdCode }, p.projectCode)),
                        React.createElement("td", { className: styles.td }, p.title),
                        React.createElement("td", { className: styles.td }, (_a = p.clientName) !== null && _a !== void 0 ? _a : "—"),
                        React.createElement("td", { className: styles.td },
                            React.createElement("span", { className: "".concat(styles.badge, " ").concat(p.isActive ? styles.badgeActive : styles.badgeInactive) },
                                React.createElement("span", { className: styles.badgeDot }),
                                p.isActive ? "Active" : "Inactive")),
                        React.createElement("td", { className: styles.td },
                            React.createElement("div", { className: styles.actions },
                                React.createElement("button", { className: styles.iconBtn, title: "Edit", onClick: function () { return openEdit(p); } },
                                    React.createElement("svg", { width: "14", height: "14", viewBox: "0 0 16 16", fill: "currentColor" },
                                        React.createElement("path", { d: "M12.146.146a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-10 10a.5.5 0 01-.168.11l-5 2a.5.5 0 01-.65-.65l2-5a.5.5 0 01.11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 01.5.5v.5h.5a.5.5 0 01.5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 015 12.5V12h-.5a.5.5 0 01-.5-.5V11h-.5a.5.5 0 01-.468-.325z" }))),
                                p.isActive ? (React.createElement("button", { className: "".concat(styles.iconBtn, " ").concat(styles.iconBtnSuccess), title: "Activate", onClick: function () { return deactivateProject(p.id).then(load); } },
                                    React.createElement("svg", { width: "14", height: "14", viewBox: "0 0 16 16", fill: "currentColor" },
                                        React.createElement("path", { d: "M10.5 8a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" }),
                                        React.createElement("path", { d: "M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" })))) : (React.createElement("button", { className: "".concat(styles.iconBtn, " ").concat(styles.iconBtnDanger), title: "Deactivate", onClick: function () { return activateProject(p.id).then(load); } },
                                    React.createElement("svg", { width: "14", height: "14", viewBox: "0 0 16 16", fill: "currentColor" },
                                        React.createElement("path", { d: "M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 00-2.79.588l.77.771A5.944 5.944 0 018 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0114.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" }),
                                        React.createElement("path", { d: "M11.297 9.176a3.5 3.5 0 00-4.474-4.474l.823.823a2.5 2.5 0 012.829 2.829l.822.822zm-2.943 1.299l.822.822a3.5 3.5 0 01-4.474-4.474l.823.823a2.5 2.5 0 002.829 2.829z" }),
                                        React.createElement("path", { d: "M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 001.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 018 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884l-12-12 .708-.708 12 12-.708.708z" }))))))));
                })))))),
        React.createElement(Modal, { isOpen: drawerOpen, onDismiss: closeDrawer, isBlocking: false, styles: {
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
            React.createElement("div", { className: styles.drawerHeader },
                React.createElement("h3", { className: styles.drawerTitle }, editProject.id ? "Edit Project" : "Add Project"),
                React.createElement("button", { className: styles.drawerClose, onClick: closeDrawer }, "\u00D7")),
            React.createElement("div", { className: styles.drawerBody },
                React.createElement("div", { className: styles.field },
                    React.createElement("label", { className: styles.fieldLabel },
                        "Project Name ",
                        React.createElement("span", { className: styles.required }, "*")),
                    React.createElement("input", { className: styles.fieldInput, placeholder: "Enter project name", value: (_a = editProject.title) !== null && _a !== void 0 ? _a : "", onChange: function (e) {
                            return setEditProject(function (p) { return (__assign(__assign({}, p), { title: e.target.value })); });
                        } })),
                React.createElement("div", { className: styles.field },
                    React.createElement("label", { className: styles.fieldLabel },
                        "Project Code ",
                        React.createElement("span", { className: styles.required }, "*")),
                    React.createElement("input", { className: styles.fieldInput, placeholder: "e.g. PROJ-001", value: (_b = editProject.projectCode) !== null && _b !== void 0 ? _b : "", onChange: function (e) {
                            return setEditProject(function (p) { return (__assign(__assign({}, p), { projectCode: e.target.value })); });
                        } })),
                React.createElement("div", { className: styles.field },
                    React.createElement("label", { className: styles.fieldLabel }, "Client Name"),
                    React.createElement("input", { className: styles.fieldInput, placeholder: "Enter client name", value: (_c = editProject.clientName) !== null && _c !== void 0 ? _c : "", onChange: function (e) {
                            return setEditProject(function (p) { return (__assign(__assign({}, p), { clientName: e.target.value })); });
                        } })),
                React.createElement("div", { className: styles.field },
                    React.createElement("label", { className: styles.fieldLabel }, "Description"),
                    React.createElement("textarea", { className: "".concat(styles.fieldInput, " ").concat(styles.fieldTextarea), placeholder: "Optional description", value: (_d = editProject.description) !== null && _d !== void 0 ? _d : "", onChange: function (e) {
                            return setEditProject(function (p) { return (__assign(__assign({}, p), { description: e.target.value })); });
                        } })),
                React.createElement("div", { className: styles.toggleRow },
                    React.createElement("span", { className: styles.toggleLabel }, "Active"),
                    React.createElement("label", { className: styles.toggle },
                        React.createElement("input", { type: "checkbox", checked: (_e = editProject.isActive) !== null && _e !== void 0 ? _e : true, onChange: function (e) {
                                return setEditProject(function (p) { return (__assign(__assign({}, p), { isActive: e.target.checked })); });
                            } }),
                        React.createElement("span", { className: styles.track }),
                        React.createElement("span", { className: styles.thumb }))),
                message && (React.createElement(MessageBar, { text: message, isError: isError, onDismiss: function () { return setMessage(""); } }))),
            React.createElement("div", { className: styles.drawerFooter },
                React.createElement("button", { className: styles.saveBtn, onClick: handleSave, disabled: saving }, saving
                    ? "Saving…"
                    : editProject.id
                        ? "Update Project"
                        : "Add Project"),
                React.createElement("button", { className: styles.cancelBtn, onClick: closeDrawer }, "Cancel")))));
};
// ─── Categories Tab ────────────────────────────────────────────────────────────
var CategoriesTab = function () {
    var _a, _b, _c, _d;
    var _e = useState([]), categories = _e[0], setCategories = _e[1];
    var _f = useState(true), loading = _f[0], setLoading = _f[1];
    var _g = useState(""), message = _g[0], setMessage = _g[1];
    var _h = useState(false), isError = _h[0], setIsError = _h[1];
    var _j = useState(false), drawerOpen = _j[0], setDrawerOpen = _j[1];
    var _k = useState({}), editCat = _k[0], setEditCat = _k[1];
    var _l = useState(false), saving = _l[0], setSaving = _l[1];
    var load = function () {
        setLoading(true);
        getAllCategories()
            .then(function (items) {
            setCategories(items);
            setLoading(false);
        })
            .catch(function () {
            setMessage("Failed to load categories.");
            setIsError(true);
            setLoading(false);
        });
    };
    useEffect(function () {
        load();
    }, []);
    var openAdd = function () {
        setEditCat({ isActive: true, sortOrder: 0 });
        setDrawerOpen(true);
    };
    var openEdit = function (c) {
        setEditCat(__assign({}, c));
        setDrawerOpen(true);
    };
    var closeDrawer = function () {
        setDrawerOpen(false);
    };
    var handleSave = function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a;
        var _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    if (!editCat.title) {
                        setMessage("Category Name is required.");
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
                    setMessage("Category updated.");
                    setIsError(false);
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, addCategory(__assign(__assign({}, editCat), { isActive: (_b = editCat.isActive) !== null && _b !== void 0 ? _b : true }))];
                case 4:
                    _c.sent();
                    setMessage("Category added.");
                    setIsError(false);
                    _c.label = 5;
                case 5:
                    setDrawerOpen(false);
                    load();
                    return [3 /*break*/, 8];
                case 6:
                    _a = _c.sent();
                    setMessage("Failed to save category.");
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
            React.createElement("span", { className: styles.sectionLabel }, "Activity Categories"),
            React.createElement("button", { className: styles.addBtn, onClick: openAdd },
                React.createElement("svg", { width: "13", height: "13", viewBox: "0 0 13 13", fill: "currentColor" },
                    React.createElement("path", { d: "M6.5 1a.75.75 0 01.75.75v4h4a.75.75 0 010 1.5h-4v4a.75.75 0 01-1.5 0v-4h-4a.75.75 0 010-1.5h4v-4A.75.75 0 016.5 1z" })),
                "Add Category")),
        message && (React.createElement(MessageBar, { text: message, isError: isError, onDismiss: function () { return setMessage(""); } })),
        loading ? (React.createElement("div", { className: styles.loading },
            React.createElement("div", { className: styles.spinner }),
            React.createElement("span", null, "Loading categories\u2026"))) : (React.createElement("div", { className: styles.tableWrap },
            React.createElement("table", { className: styles.table },
                React.createElement("thead", { className: styles.thead },
                    React.createElement("tr", null,
                        React.createElement("th", { className: styles.th }, "Category Name"),
                        React.createElement("th", { className: styles.th }, "Description"),
                        React.createElement("th", { className: styles.th, style: { width: 70 } }, "Sort"),
                        React.createElement("th", { className: styles.th }, "Status"),
                        React.createElement("th", { className: styles.th, style: { width: 90 } }, "Actions"))),
                React.createElement("tbody", null, categories.length === 0 ? (React.createElement("tr", null,
                    React.createElement("td", { colSpan: 5, className: styles.empty }, "No categories found."))) : (categories.map(function (c) {
                    var _a, _b;
                    return (React.createElement("tr", { key: c.id, className: styles.tr },
                        React.createElement("td", { className: styles.td }, c.title),
                        React.createElement("td", { className: styles.td }, (_a = c.description) !== null && _a !== void 0 ? _a : "—"),
                        React.createElement("td", { className: styles.td }, (_b = c.sortOrder) !== null && _b !== void 0 ? _b : 0),
                        React.createElement("td", { className: styles.td },
                            React.createElement("span", { className: "".concat(styles.badge, " ").concat(c.isActive ? styles.badgeActive : styles.badgeInactive) },
                                React.createElement("span", { className: styles.badgeDot }),
                                c.isActive ? "Active" : "Inactive")),
                        React.createElement("td", { className: styles.td },
                            React.createElement("div", { className: styles.actions },
                                React.createElement("button", { className: styles.iconBtn, title: "Edit", onClick: function () { return openEdit(c); } },
                                    React.createElement("svg", { width: "14", height: "14", viewBox: "0 0 16 16", fill: "currentColor" },
                                        React.createElement("path", { d: "M12.146.146a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-10 10a.5.5 0 01-.168.11l-5 2a.5.5 0 01-.65-.65l2-5a.5.5 0 01.11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 01.5.5v.5h.5a.5.5 0 01.5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 015 12.5V12h-.5a.5.5 0 01-.5-.5V11h-.5a.5.5 0 01-.468-.325z" }))),
                                c.isActive ? (React.createElement("button", { className: "".concat(styles.iconBtn, " ").concat(styles.iconBtnSuccess), title: "Activate", onClick: function () { return deactivateCategory(c.id).then(load); } },
                                    React.createElement("svg", { width: "14", height: "14", viewBox: "0 0 16 16", fill: "currentColor" },
                                        React.createElement("path", { d: "M10.5 8a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" }),
                                        React.createElement("path", { d: "M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" })))) : (React.createElement("button", { className: "".concat(styles.iconBtn, " ").concat(styles.iconBtnDanger), title: "Deactivate", onClick: function () { return activateCategory(c.id).then(load); } },
                                    React.createElement("svg", { width: "14", height: "14", viewBox: "0 0 16 16", fill: "currentColor" },
                                        React.createElement("path", { d: "M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 00-2.79.588l.77.771A5.944 5.944 0 018 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0114.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" }),
                                        React.createElement("path", { d: "M11.297 9.176a3.5 3.5 0 00-4.474-4.474l.823.823a2.5 2.5 0 012.829 2.829l.822.822zm-2.943 1.299l.822.822a3.5 3.5 0 01-4.474-4.474l.823.823a2.5 2.5 0 002.829 2.829z" }),
                                        React.createElement("path", { d: "M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 001.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 018 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884l-12-12 .708-.708 12 12-.708.708z" }))))))));
                })))))),
        React.createElement(Modal, { isOpen: drawerOpen, onDismiss: closeDrawer, isBlocking: false, styles: {
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
            React.createElement("div", { className: styles.drawerHeader },
                React.createElement("h3", { className: styles.drawerTitle }, editCat.id ? "Edit Category" : "Add Category"),
                React.createElement("button", { className: styles.drawerClose, onClick: closeDrawer }, "\u00D7")),
            React.createElement("div", { className: styles.drawerBody },
                React.createElement("div", { className: styles.field },
                    React.createElement("label", { className: styles.fieldLabel },
                        "Category Name ",
                        React.createElement("span", { className: styles.required }, "*")),
                    React.createElement("input", { className: styles.fieldInput, placeholder: "Enter category name", value: (_a = editCat.title) !== null && _a !== void 0 ? _a : "", onChange: function (e) {
                            return setEditCat(function (c) { return (__assign(__assign({}, c), { title: e.target.value })); });
                        } })),
                React.createElement("div", { className: styles.field },
                    React.createElement("label", { className: styles.fieldLabel }, "Description"),
                    React.createElement("textarea", { className: "".concat(styles.fieldInput, " ").concat(styles.fieldTextarea), placeholder: "Optional description", value: (_b = editCat.description) !== null && _b !== void 0 ? _b : "", onChange: function (e) {
                            return setEditCat(function (c) { return (__assign(__assign({}, c), { description: e.target.value })); });
                        } })),
                React.createElement("div", { className: styles.field },
                    React.createElement("label", { className: styles.fieldLabel }, "Sort Order"),
                    React.createElement("input", { type: "number", className: styles.fieldInput, min: 0, max: 9999, value: (_c = editCat.sortOrder) !== null && _c !== void 0 ? _c : 0, onChange: function (e) {
                            return setEditCat(function (c) { return (__assign(__assign({}, c), { sortOrder: parseInt(e.target.value, 10) || 0 })); });
                        } })),
                React.createElement("div", { className: styles.toggleRow },
                    React.createElement("span", { className: styles.toggleLabel }, "Active"),
                    React.createElement("label", { className: styles.toggle },
                        React.createElement("input", { type: "checkbox", checked: (_d = editCat.isActive) !== null && _d !== void 0 ? _d : true, onChange: function (e) {
                                return setEditCat(function (c) { return (__assign(__assign({}, c), { isActive: e.target.checked })); });
                            } }),
                        React.createElement("span", { className: styles.track }),
                        React.createElement("span", { className: styles.thumb }))),
                message && (React.createElement(MessageBar, { text: message, isError: isError, onDismiss: function () { return setMessage(""); } }))),
            React.createElement("div", { className: styles.drawerFooter },
                React.createElement("button", { className: styles.saveBtn, onClick: handleSave, disabled: saving }, saving
                    ? "Saving…"
                    : editCat.id
                        ? "Update Category"
                        : "Add Category"),
                React.createElement("button", { className: styles.cancelBtn, onClick: closeDrawer }, "Cancel")))));
};
var AdminPanel = function () {
    var navigateHome = useContext(AppContext).navigateHome;
    var _a = useState("projects"), activeTab = _a[0], setActiveTab = _a[1];
    return (React.createElement("div", { className: styles.container },
        React.createElement("div", { className: styles.header },
            React.createElement("div", { className: styles.headerContent },
                React.createElement("button", { className: styles.homeBtn, title: "Back to Home", onClick: navigateHome },
                    React.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "currentColor" },
                        React.createElement("path", { d: "M8.354 1.146a.5.5 0 00-.708 0l-6 6A.5.5 0 002 7.5v7a.5.5 0 00.5.5h4a.5.5 0 00.5-.5v-4h2v4a.5.5 0 00.5.5h4a.5.5 0 00.5-.5v-7a.5.5 0 00-.146-.354L13 5.793V2.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5v1.293L8.354 1.146z" }))),
                React.createElement("div", null,
                    React.createElement("h2", { className: styles.headerTitle }, "Manage Projects & Categories"),
                    React.createElement("p", { className: styles.headerSubtitle }, "Configure projects and activity categories")))),
        React.createElement("div", { className: styles.body },
            React.createElement("div", { className: styles.tabs },
                React.createElement("button", { className: "".concat(styles.tab, " ").concat(activeTab === "projects" ? styles.tabActive : ""), onClick: function () { return setActiveTab("projects"); } },
                    React.createElement("span", { className: styles.tabIcon }, "\uD83D\uDCC1"),
                    "Projects"),
                React.createElement("button", { className: "".concat(styles.tab, " ").concat(activeTab === "categories" ? styles.tabActive : ""), onClick: function () { return setActiveTab("categories"); } },
                    React.createElement("span", { className: styles.tabIcon }, "\uD83C\uDFF7\uFE0F"),
                    "Activity Categories")),
            activeTab === "projects" ? React.createElement(ProjectsTab, null) : React.createElement(CategoriesTab, null))));
};
export default AdminPanel;
//# sourceMappingURL=AdminPanel.js.map