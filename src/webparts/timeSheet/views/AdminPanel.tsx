import * as React from "react";
import { useContext, useState, useEffect } from "react";
import {
  Modal,
  IconButton,
  PrimaryButton,
  DefaultButton,
  TextField,
  Toggle,
  SpinButton,
  Spinner,
  SpinnerSize,
  MessageBar,
  MessageBarType,
  IButtonStyles,
  IIconProps,
  TooltipHost,
} from "@fluentui/react";
import { AppContext } from "../context/AppContext";
import { IProject, IActivityCategory } from "../models/ITimesheetModels";
import {
  getAllProjects,
  addProject,
  updateProject,
  deactivateProject,
  activateProject,
  deleteProject,
} from "../services/ProjectService";
import {
  getAllCategories,
  addCategory,
  updateCategory,
  deactivateCategory,
  activateCategory,
  deleteCategory,
} from "../services/CategoryService";
import * as strings from "TimeSheetWebPartStrings";
import styles from "./AdminPanel.module.scss";

// ─── Shared button styles (theme colour) ─────────────────────────────────────
const primaryBtnStyles: IButtonStyles = {
  root: { backgroundColor: "#667eea", borderColor: "#667eea", borderRadius: 6 },
  rootHovered: { backgroundColor: "#5a6fd6", borderColor: "#5a6fd6" },
  rootPressed: { backgroundColor: "#4d5fbc", borderColor: "#4d5fbc" },
  rootDisabled: { backgroundColor: "#c5cbf8", borderColor: "#c5cbf8" },
};

const defaultBtnStyles: IButtonStyles = {
  root: { borderRadius: 6 },
  rootHovered: { borderColor: "#667eea", color: "#667eea" },
  rootPressed: { borderColor: "#5a6fd6", color: "#5a6fd6" },
};

const dangerBtnStyles: IButtonStyles = {
  root: { borderRadius: 6, borderColor: "#da1e28", color: "#da1e28" },
  rootHovered: {
    borderColor: "#ba1b23",
    color: "#ba1b23",
    backgroundColor: "#fff1f1",
  },
  rootPressed: { borderColor: "#a2191f", color: "#a2191f" },
};

const iconBtnThemeStyles: IButtonStyles = {
  root: { borderRadius: 6, color: "#667eea" },
  rootHovered: { backgroundColor: "rgba(102,126,234,0.08)", color: "#5a6fd6" },
};

const homeBtnStyles: IButtonStyles = {
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



const iconBtnDangerStyles: IButtonStyles = {
  root: { borderRadius: 6, color: "#da1e28" },
  rootHovered: { backgroundColor: "#fff1f1", color: "#ba1b23" },
};

const iconBtnSuccessStyles: IButtonStyles = {
  root: { borderRadius: 6, color: "#198038" },
  rootHovered: { backgroundColor: "#defbe6", color: "#0e6027" },
};

const addIcon: IIconProps = { iconName: "Add" };
const editIcon: IIconProps = { iconName: "Edit" };
const deleteIcon: IIconProps = { iconName: "Delete" };
const viewIcon: IIconProps = { iconName: "View" };
const hideIcon: IIconProps = { iconName: "Hide" };
const checkIcon: IIconProps = { iconName: "CheckMark" };
const cancelIcon: IIconProps = { iconName: "Cancel" };

const modalStyles = {
  main: {
    width: 540,
    maxWidth: "96vw",
    borderRadius: 16,
    overflow: "hidden" as const,
    display: "flex",
    flexDirection: "column" as const,
    maxHeight: "92vh",
  },
  scrollableContent: {
    display: "flex",
    flexDirection: "column" as const,
    maxHeight: "92vh",
  },
};

// ─── Projects Tab ──────────────────────────────────────────────────────────────
const ProjectsTab: React.FC = () => {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [editProject, setEditProject] = useState<Partial<IProject>>({});
  const [saving, setSaving] = useState(false);
  const [formErrors, setFormErrors] = useState<{
    title?: string;
    projectCode?: string;
  }>({});
  const [confirmDeleteId, setConfirmDeleteId] = useState<number | null>(null);

  const load = (): void => {
    setLoading(true);
    getAllProjects()
      .then((items) => {
        setProjects(items);
        setLoading(false);
      })
      .catch(() => {
        setMessage(strings.LoadProjectsFailed);
        setIsError(true);
        setLoading(false);
      });
  };

  useEffect(() => {
    load();
  }, []);

  const openAdd = (): void => {
    setEditProject({ isActive: true });
    setFormErrors({});
    setDrawerOpen(true);
  };
  const openEdit = (p: IProject): void => {
    setEditProject({ ...p });
    setFormErrors({});
    setDrawerOpen(true);
  };
  const closeDrawer = (): void => {
    setFormErrors({});
    setDrawerOpen(false);
  };

  const handleSave = async (): Promise<void> => {
    const errors: { title?: string; projectCode?: string } = {};
    if (!editProject.title || !editProject.title.trim())
      errors.title = "Project Name is required.";
    if (!editProject.projectCode || !editProject.projectCode.trim())
      errors.projectCode = "Project Code is required.";
    if (errors.title || errors.projectCode) {
      setFormErrors(errors);
      return;
    }
    setFormErrors({});
    setSaving(true);
    try {
      if (editProject.id) {
        await updateProject(editProject.id, editProject);
        setMessage(strings.ProjectUpdated);
        setIsError(false);
      } else {
        await addProject({
          ...editProject,
          isActive: editProject.isActive ?? true,
        } as Omit<IProject, "id">);
        setMessage(strings.ProjectAdded);
        setIsError(false);
      }
      setDrawerOpen(false);
      load();
    } catch {
      setMessage(strings.ProjectSaveFailed);
      setIsError(true);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className={styles.tabContent}>
      {/* Toolbar */}
      <div className={styles.toolbar}>
        <span className={styles.sectionLabel}>{strings.ProjectsTab}</span>
        <PrimaryButton
          text={strings.AddProject}
          iconProps={addIcon}
          styles={primaryBtnStyles}
          onClick={openAdd}
        />
      </div>

      {/* Message */}
      {message && (
        <MessageBar
          messageBarType={
            isError ? MessageBarType.error : MessageBarType.success
          }
          isMultiline={false}
          onDismiss={() => setMessage("")}
          dismissButtonAriaLabel="Close"
          styles={{ root: { borderRadius: 6, marginBottom: 12 } }}
        >
          {message}
        </MessageBar>
      )}

      {/* List */}
      {loading ? (
        <div className={styles.loading}>
          <Spinner size={SpinnerSize.medium} label={strings.LoadingProjects} />
        </div>
      ) : (
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead className={styles.thead}>
              <tr>
                <th className={styles.th}>{strings.Code}</th>
                <th className={styles.th}>{strings.ProjectName}</th>
                <th className={styles.th}>{strings.ClientName}</th>
                <th className={styles.th}>{strings.Status}</th>
                <th className={styles.th} style={{ width: 150 }}>
                  {strings.Actions}
                </th>
              </tr>
            </thead>
            <tbody>
              {projects.length === 0 ? (
                <tr>
                  <td colSpan={5} className={styles.empty}>
                    {strings.NoProjects}
                  </td>
                </tr>
              ) : (
                projects.map((p) => (
                  <tr key={p.id} className={styles.tr}>
                    <td className={styles.td}>
                      <span className={styles.tdCode}>{p.projectCode}</span>
                    </td>
                    <td className={styles.td}>{p.title}</td>
                    <td className={styles.td}>{p.clientName ?? "—"}</td>
                    <td className={styles.td}>
                      <span
                        className={`${styles.badge} ${p.isActive ? styles.badgeActive : styles.badgeInactive}`}
                      >
                        <span className={styles.badgeDot} />
                        {p.isActive ? strings.Active : strings.Inactive}
                      </span>
                    </td>
                    <td className={styles.td}>
                      <div className={styles.actions}>
                        <TooltipHost content="Edit">
                          <IconButton
                            iconProps={editIcon}
                            styles={iconBtnThemeStyles}
                            onClick={() => openEdit(p)}
                          />
                        </TooltipHost>

                        {confirmDeleteId === p.id ? (
                          <>
                            <span
                              style={{
                                fontSize: 11,
                                color: "#6f6f6f",
                                whiteSpace: "nowrap",
                              }}
                            >
                              Delete?
                            </span>
                            <TooltipHost content="Confirm delete">
                              <IconButton
                                iconProps={checkIcon}
                                styles={iconBtnDangerStyles}
                                onClick={() =>
                                  deleteProject(p.id)
                                    .then(() => {
                                      setConfirmDeleteId(null);
                                      load();
                                    })
                                    .catch(() => {
                                      setMessage(strings.ProjectSaveFailed);
                                      setIsError(true);
                                      setConfirmDeleteId(null);
                                    })
                                }
                              />
                            </TooltipHost>
                            <TooltipHost content="Cancel">
                              <IconButton
                                iconProps={cancelIcon}
                                styles={iconBtnThemeStyles}
                                onClick={() => setConfirmDeleteId(null)}
                              />
                            </TooltipHost>
                          </>
                        ) : (
                          <TooltipHost content="Delete">
                            <IconButton
                              iconProps={deleteIcon}
                              styles={iconBtnDangerStyles}
                              onClick={() => setConfirmDeleteId(p.id)}
                            />
                          </TooltipHost>
                        )}

                        <TooltipHost
                          content={
                            p.isActive ? strings.Deactivate : strings.Activate
                          }
                        >
                          <IconButton
                            iconProps={p.isActive ? hideIcon : viewIcon}
                            styles={
                              p.isActive
                                ? iconBtnDangerStyles
                                : iconBtnSuccessStyles
                            }
                            onClick={() =>
                              (p.isActive
                                ? deactivateProject(p.id)
                                : activateProject(p.id)
                              ).then(load)
                            }
                          />
                        </TooltipHost>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}

      {/* Add/Edit Modal */}
      <Modal
        isOpen={drawerOpen}
        onDismiss={closeDrawer}
        isBlocking={false}
        styles={modalStyles}
      >
        <div className={styles.drawerHeader}>
          <h3 className={styles.drawerTitle}>
            {editProject.id ? strings.EditProject : strings.AddProjectModal}
          </h3>
          <IconButton
            iconProps={cancelIcon}
            ariaLabel="Close"
            onClick={closeDrawer}
            styles={iconBtnThemeStyles}
          />
        </div>
        <div className={styles.drawerBody}>
          <TextField
            label={strings.ProjectName}
            required
            placeholder={strings.ProjectNamePlaceholder}
            value={editProject.title ?? ""}
            errorMessage={formErrors.title}
            onChange={(_e, val) => {
              setEditProject((p) => ({ ...p, title: val || "" }));
              if (formErrors.title)
                setFormErrors((prev) => ({ ...prev, title: undefined }));
            }}
            styles={{ fieldGroup: { borderRadius: 6 } }}
          />
          <div style={{ marginTop: 14 }}>
            <TextField
              label={strings.ProjectCode}
              required
              placeholder={strings.ProjectCodePlaceholder}
              value={editProject.projectCode ?? ""}
              errorMessage={formErrors.projectCode}
              onChange={(_e, val) => {
                setEditProject((p) => ({ ...p, projectCode: val || "" }));
                if (formErrors.projectCode)
                  setFormErrors((prev) => ({
                    ...prev,
                    projectCode: undefined,
                  }));
              }}
              styles={{ fieldGroup: { borderRadius: 6 } }}
            />
          </div>
          <div style={{ marginTop: 14 }}>
            <TextField
              label={strings.ClientName}
              placeholder={strings.ClientNamePlaceholder}
              value={editProject.clientName ?? ""}
              onChange={(_e, val) =>
                setEditProject((p) => ({ ...p, clientName: val || "" }))
              }
              styles={{ fieldGroup: { borderRadius: 6 } }}
            />
          </div>
          <div style={{ marginTop: 14 }}>
            <TextField
              label={strings.Description}
              multiline
              rows={3}
              placeholder={strings.OptionalDescription}
              value={editProject.description ?? ""}
              onChange={(_e, val) =>
                setEditProject((p) => ({ ...p, description: val || "" }))
              }
              styles={{ fieldGroup: { borderRadius: 6 } }}
            />
          </div>
          <div style={{ marginTop: 16 }}>
            <Toggle
              label={strings.Active}
              checked={editProject.isActive ?? true}
              onChange={(_e, checked) =>
                setEditProject((p) => ({ ...p, isActive: checked }))
              }
              styles={{
                thumb: {
                  backgroundColor: editProject.isActive ? "#667eea" : undefined,
                },
                pill: {
                  backgroundColor: editProject.isActive
                    ? "rgba(102,126,234,0.3)"
                    : undefined,
                },
              }}
            />
          </div>
        </div>
        <div className={styles.drawerFooter}>
          <PrimaryButton
            text={
              saving
                ? strings.Saving
                : editProject.id
                  ? strings.UpdateProject
                  : strings.AddProjectModal
            }
            disabled={saving}
            styles={primaryBtnStyles}
            onRenderIcon={
              saving ? () => <Spinner size={SpinnerSize.small} /> : undefined
            }
            onClick={handleSave}
          />
          <DefaultButton
            text={strings.Cancel}
            styles={defaultBtnStyles}
            onClick={closeDrawer}
          />
        </div>
      </Modal>
    </div>
  );
};

// ─── Categories Tab ────────────────────────────────────────────────────────────
const CategoriesTab: React.FC = () => {
  const [categories, setCategories] = useState<IActivityCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [editCat, setEditCat] = useState<Partial<IActivityCategory>>({});
  const [saving, setSaving] = useState(false);
  const [formErrors, setFormErrors] = useState<{ title?: string }>({});
  const [confirmDeleteId, setConfirmDeleteId] = useState<number | null>(null);

  const load = (): void => {
    setLoading(true);
    getAllCategories()
      .then((items) => {
        setCategories(items);
        setLoading(false);
      })
      .catch(() => {
        setMessage(strings.LoadCategoriesFailed);
        setIsError(true);
        setLoading(false);
      });
  };

  useEffect(() => {
    load();
  }, []);

  const openAdd = (): void => {
    setEditCat({ isActive: true, sortOrder: 0 });
    setFormErrors({});
    setDrawerOpen(true);
  };
  const openEdit = (c: IActivityCategory): void => {
    setEditCat({ ...c });
    setFormErrors({});
    setDrawerOpen(true);
  };
  const closeDrawer = (): void => {
    setFormErrors({});
    setDrawerOpen(false);
  };

  const handleSave = async (): Promise<void> => {
    if (!editCat.title || !editCat.title.trim()) {
      setFormErrors({ title: "Category Name is required." });
      return;
    }
    setFormErrors({});
    setSaving(true);
    try {
      if (editCat.id) {
        await updateCategory(editCat.id, editCat);
        setMessage(strings.CategoryUpdated);
        setIsError(false);
      } else {
        await addCategory({
          ...editCat,
          isActive: editCat.isActive ?? true,
        } as Omit<IActivityCategory, "id">);
        setMessage(strings.CategoryAdded);
        setIsError(false);
      }
      setDrawerOpen(false);
      load();
    } catch {
      setMessage(strings.CategorySaveFailed);
      setIsError(true);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className={styles.tabContent}>
      {/* Toolbar */}
      <div className={styles.toolbar}>
        <span className={styles.sectionLabel}>{strings.CategoriesTab}</span>
        <PrimaryButton
          text={strings.AddCategory}
          iconProps={addIcon}
          styles={primaryBtnStyles}
          onClick={openAdd}
        />
      </div>

      {/* Message */}
      {message && (
        <MessageBar
          messageBarType={
            isError ? MessageBarType.error : MessageBarType.success
          }
          isMultiline={false}
          onDismiss={() => setMessage("")}
          dismissButtonAriaLabel="Close"
          styles={{ root: { borderRadius: 6, marginBottom: 12 } }}
        >
          {message}
        </MessageBar>
      )}

      {/* List */}
      {loading ? (
        <div className={styles.loading}>
          <Spinner
            size={SpinnerSize.medium}
            label={strings.LoadingCategories}
          />
        </div>
      ) : (
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead className={styles.thead}>
              <tr>
                <th className={styles.th}>{strings.Category}</th>
                <th className={styles.th}>{strings.Description}</th>
                <th className={styles.th} style={{ width: 70 }}>
                  {strings.SortOrder}
                </th>
                <th className={styles.th}>{strings.Status}</th>
                <th className={styles.th} style={{ width: 150 }}>
                  {strings.Actions}
                </th>
              </tr>
            </thead>
            <tbody>
              {categories.length === 0 ? (
                <tr>
                  <td colSpan={5} className={styles.empty}>
                    {strings.NoCategories}
                  </td>
                </tr>
              ) : (
                categories.map((c) => (
                  <tr key={c.id} className={styles.tr}>
                    <td className={styles.td}>{c.title}</td>
                    <td className={styles.td}>{c.description ?? "—"}</td>
                    <td className={styles.td}>{c.sortOrder ?? 0}</td>
                    <td className={styles.td}>
                      <span
                        className={`${styles.badge} ${c.isActive ? styles.badgeActive : styles.badgeInactive}`}
                      >
                        <span className={styles.badgeDot} />
                        {c.isActive ? strings.Active : strings.Inactive}
                      </span>
                    </td>
                    <td className={styles.td}>
                      <div className={styles.actions}>
                        <TooltipHost content="Edit">
                          <IconButton
                            iconProps={editIcon}
                            styles={iconBtnThemeStyles}
                            onClick={() => openEdit(c)}
                          />
                        </TooltipHost>

                        {confirmDeleteId === c.id ? (
                          <>
                            <span
                              style={{
                                fontSize: 11,
                                color: "#6f6f6f",
                                whiteSpace: "nowrap",
                              }}
                            >
                              Delete?
                            </span>
                            <TooltipHost content="Confirm delete">
                              <IconButton
                                iconProps={checkIcon}
                                styles={iconBtnDangerStyles}
                                onClick={() =>
                                  deleteCategory(c.id)
                                    .then(() => {
                                      setConfirmDeleteId(null);
                                      load();
                                    })
                                    .catch(() => {
                                      setMessage(strings.CategorySaveFailed);
                                      setIsError(true);
                                      setConfirmDeleteId(null);
                                    })
                                }
                              />
                            </TooltipHost>
                            <TooltipHost content="Cancel">
                              <IconButton
                                iconProps={cancelIcon}
                                styles={iconBtnThemeStyles}
                                onClick={() => setConfirmDeleteId(null)}
                              />
                            </TooltipHost>
                          </>
                        ) : (
                          <TooltipHost content="Delete">
                            <IconButton
                              iconProps={deleteIcon}
                              styles={iconBtnDangerStyles}
                              onClick={() => setConfirmDeleteId(c.id)}
                            />
                          </TooltipHost>
                        )}

                        <TooltipHost
                          content={
                            c.isActive ? strings.Deactivate : strings.Activate
                          }
                        >
                          <IconButton
                            iconProps={c.isActive ? hideIcon : viewIcon}
                            styles={
                              c.isActive
                                ? iconBtnDangerStyles
                                : iconBtnSuccessStyles
                            }
                            onClick={() =>
                              (c.isActive
                                ? deactivateCategory(c.id)
                                : activateCategory(c.id)
                              ).then(load)
                            }
                          />
                        </TooltipHost>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}

      {/* Add/Edit Modal */}
      <Modal
        isOpen={drawerOpen}
        onDismiss={closeDrawer}
        isBlocking={false}
        styles={modalStyles}
      >
        <div className={styles.drawerHeader}>
          <h3 className={styles.drawerTitle}>
            {editCat.id ? strings.EditCategory : strings.AddCategoryModal}
          </h3>
          <IconButton
            iconProps={cancelIcon}
            ariaLabel="Close"
            onClick={closeDrawer}
            styles={iconBtnThemeStyles}
          />
        </div>
        <div className={styles.drawerBody}>
          <TextField
            label={strings.Category}
            required
            placeholder={strings.CategoryNamePlaceholder}
            value={editCat.title ?? ""}
            errorMessage={formErrors.title}
            onChange={(_e, val) => {
              setEditCat((c) => ({ ...c, title: val || "" }));
              if (formErrors.title) setFormErrors({});
            }}
            styles={{ fieldGroup: { borderRadius: 6 } }}
          />
          <div style={{ marginTop: 14 }}>
            <TextField
              label={strings.Description}
              multiline
              rows={3}
              placeholder={strings.OptionalDescription}
              value={editCat.description ?? ""}
              onChange={(_e, val) =>
                setEditCat((c) => ({ ...c, description: val || "" }))
              }
              styles={{ fieldGroup: { borderRadius: 6 } }}
            />
          </div>
          <div style={{ marginTop: 14 }}>
            <SpinButton
              label={strings.SortOrder}
              min={0}
              max={9999}
              step={1}
              value={String(editCat.sortOrder ?? 0)}
              onIncrement={(val) => {
                setEditCat((c) => ({
                  ...c,
                  sortOrder: Math.min((parseInt(val, 10) || 0) + 1, 9999),
                }));
              }}
              onDecrement={(val) => {
                setEditCat((c) => ({
                  ...c,
                  sortOrder: Math.max((parseInt(val, 10) || 0) - 1, 0),
                }));
              }}
              onValidate={(val) => {
                setEditCat((c) => ({
                  ...c,
                  sortOrder: parseInt(val, 10) || 0,
                }));
                return val;
              }}
              styles={{
                spinButtonWrapper: { borderRadius: 6 },
                root: { maxWidth: 120 },
              }}
            />
          </div>
          <div style={{ marginTop: 16 }}>
            <Toggle
              label={strings.Active}
              checked={editCat.isActive ?? true}
              onChange={(_e, checked) =>
                setEditCat((c) => ({ ...c, isActive: checked }))
              }
              styles={{
                thumb: {
                  backgroundColor: editCat.isActive ? "#667eea" : undefined,
                },
                pill: {
                  backgroundColor: editCat.isActive
                    ? "rgba(102,126,234,0.3)"
                    : undefined,
                },
              }}
            />
          </div>
        </div>
        <div className={styles.drawerFooter}>
          <PrimaryButton
            text={
              saving
                ? strings.Saving
                : editCat.id
                  ? strings.UpdateCategory
                  : strings.AddCategoryModal
            }
            disabled={saving}
            styles={primaryBtnStyles}
            onRenderIcon={
              saving ? () => <Spinner size={SpinnerSize.small} /> : undefined
            }
            onClick={handleSave}
          />
          <DefaultButton
            text={strings.Cancel}
            styles={defaultBtnStyles}
            onClick={closeDrawer}
          />
        </div>
      </Modal>
    </div>
  );
};

// ─── Main Admin Panel ──────────────────────────────────────────────────────────
type TTab = "projects" | "categories";

const AdminPanel: React.FC = () => {
  const { navigateHome } = useContext(AppContext);
  const [activeTab, setActiveTab] = useState<TTab>("projects");

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <IconButton
            iconProps={{ iconName: "Home" }}
            title="Back to Home"
            styles={homeBtnStyles}
            onClick={navigateHome}
          />
          <div>
            <h2 className={styles.headerTitle}>{strings.AdminTitle}</h2>
            <p className={styles.headerSubtitle}>{strings.AdminSubtitle}</p>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className={styles.body}>
        {/* Tabs */}
        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${activeTab === "projects" ? styles.tabActive : ""}`}
            onClick={() => setActiveTab("projects")}
          >
            <span className={styles.tabIcon}>📁</span>
            {strings.ProjectsTab}
          </button>
          <button
            className={`${styles.tab} ${activeTab === "categories" ? styles.tabActive : ""}`}
            onClick={() => setActiveTab("categories")}
          >
            <span className={styles.tabIcon}>🏷️</span>
            {strings.CategoriesTab}
          </button>
        </div>

        {activeTab === "projects" ? <ProjectsTab /> : <CategoriesTab />}
      </div>
    </div>
  );
};

export default AdminPanel;
