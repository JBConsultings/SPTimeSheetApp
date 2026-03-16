import * as React from "react";
import { useContext, useState, useEffect } from "react";
import { Modal } from "@fluentui/react";
import { AppContext } from "../context/AppContext";
import { IProject, IActivityCategory } from "../models/ITimesheetModels";
import {
  getAllProjects,
  addProject,
  updateProject,
  deactivateProject,
  activateProject,
} from "../services/ProjectService";
import {
  getAllCategories,
  addCategory,
  updateCategory,
  deactivateCategory,
  activateCategory,
} from "../services/CategoryService";
import styles from "./AdminPanel.module.scss";

// ─── Shared helpers ────────────────────────────────────────────────────────────

interface IMessageProps {
  text: string;
  isError: boolean;
  onDismiss: () => void;
}
const MessageBar: React.FC<IMessageProps> = ({ text, isError, onDismiss }) => (
  <div
    className={`${styles.message} ${isError ? styles.messageError : styles.messageSuccess}`}
  >
    <span>{text}</span>
    <button className={styles.messageDismiss} onClick={onDismiss}>
      ×
    </button>
  </div>
);

// ─── Projects Tab ──────────────────────────────────────────────────────────────

const ProjectsTab: React.FC = () => {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [editProject, setEditProject] = useState<Partial<IProject>>({});
  const [saving, setSaving] = useState(false);

  const load = (): void => {
    setLoading(true);
    getAllProjects()
      .then((items) => {
        setProjects(items);
        setLoading(false);
      })
      .catch(() => {
        setMessage("Failed to load projects.");
        setIsError(true);
        setLoading(false);
      });
  };

  useEffect(() => {
    load();
  }, []);

  const openAdd = (): void => {
    setEditProject({ isActive: true });
    setDrawerOpen(true);
  };
  const openEdit = (p: IProject): void => {
    setEditProject({ ...p });
    setDrawerOpen(true);
  };
  const closeDrawer = (): void => {
    setDrawerOpen(false);
  };

  const handleSave = async (): Promise<void> => {
    if (!editProject.title || !editProject.projectCode) {
      setMessage("Project Name and Project Code are required.");
      setIsError(true);
      return;
    }
    setSaving(true);
    try {
      if (editProject.id) {
        await updateProject(editProject.id, editProject);
        setMessage("Project updated successfully.");
        setIsError(false);
      } else {
        await addProject({
          ...editProject,
          isActive: editProject.isActive ?? true,
        } as Omit<IProject, "id">);
        setMessage("Project added successfully.");
        setIsError(false);
      }
      setDrawerOpen(false);
      load();
    } catch {
      setMessage("Failed to save project.");
      setIsError(true);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className={styles.tabContent}>
      <div className={styles.toolbar}>
        <span className={styles.sectionLabel}>Projects</span>
        <button className={styles.addBtn} onClick={openAdd}>
          <svg width="13" height="13" viewBox="0 0 13 13" fill="currentColor">
            <path d="M6.5 1a.75.75 0 01.75.75v4h4a.75.75 0 010 1.5h-4v4a.75.75 0 01-1.5 0v-4h-4a.75.75 0 010-1.5h4v-4A.75.75 0 016.5 1z" />
          </svg>
          Add Project
        </button>
      </div>

      {message && (
        <MessageBar
          text={message}
          isError={isError}
          onDismiss={() => setMessage("")}
        />
      )}

      {loading ? (
        <div className={styles.loading}>
          <div className={styles.spinner} />
          <span>Loading projects…</span>
        </div>
      ) : (
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead className={styles.thead}>
              <tr>
                <th className={styles.th}>Code</th>
                <th className={styles.th}>Project Name</th>
                <th className={styles.th}>Client</th>
                <th className={styles.th}>Status</th>
                <th className={styles.th} style={{ width: 90 }}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {projects.length === 0 ? (
                <tr>
                  <td colSpan={5} className={styles.empty}>
                    No projects found.
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
                        {p.isActive ? "Active" : "Inactive"}
                      </span>
                    </td>
                    <td className={styles.td}>
                      <div className={styles.actions}>
                        <button
                          className={styles.iconBtn}
                          title="Edit"
                          onClick={() => openEdit(p)}
                        >
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                          >
                            <path d="M12.146.146a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-10 10a.5.5 0 01-.168.11l-5 2a.5.5 0 01-.65-.65l2-5a.5.5 0 01.11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 01.5.5v.5h.5a.5.5 0 01.5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 015 12.5V12h-.5a.5.5 0 01-.5-.5V11h-.5a.5.5 0 01-.468-.325z" />
                          </svg>
                        </button>
                        {p.isActive ? (
                          <button
                            className={`${styles.iconBtn} ${styles.iconBtnSuccess}`}
                            title="Activate"
                            onClick={() => deactivateProject(p.id).then(load)}
                          >
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 16 16"
                              fill="currentColor"
                            >
                              <path d="M10.5 8a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                              <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" />
                            </svg>
                          </button>
                        ) : (
                          <button
                            className={`${styles.iconBtn} ${styles.iconBtnDanger}`}
                            title="Deactivate"
                            onClick={() => activateProject(p.id).then(load)}
                          >
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 16 16"
                              fill="currentColor"
                            >
                              <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 00-2.79.588l.77.771A5.944 5.944 0 018 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0114.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                              <path d="M11.297 9.176a3.5 3.5 0 00-4.474-4.474l.823.823a2.5 2.5 0 012.829 2.829l.822.822zm-2.943 1.299l.822.822a3.5 3.5 0 01-4.474-4.474l.823.823a2.5 2.5 0 002.829 2.829z" />
                              <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 001.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 018 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884l-12-12 .708-.708 12 12-.708.708z" />
                            </svg>
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}

      <Modal
        isOpen={drawerOpen}
        onDismiss={closeDrawer}
        isBlocking={false}
        styles={{
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
        }}
      >
        <div className={styles.drawerHeader}>
          <h3 className={styles.drawerTitle}>
            {editProject.id ? "Edit Project" : "Add Project"}
          </h3>
          <button className={styles.drawerClose} onClick={closeDrawer}>
            ×
          </button>
        </div>
        <div className={styles.drawerBody}>
          <div className={styles.field}>
            <label className={styles.fieldLabel}>
              Project Name <span className={styles.required}>*</span>
            </label>
            <input
              className={styles.fieldInput}
              placeholder="Enter project name"
              value={editProject.title ?? ""}
              onChange={(e) =>
                setEditProject((p) => ({ ...p, title: e.target.value }))
              }
            />
          </div>
          <div className={styles.field}>
            <label className={styles.fieldLabel}>
              Project Code <span className={styles.required}>*</span>
            </label>
            <input
              className={styles.fieldInput}
              placeholder="e.g. PROJ-001"
              value={editProject.projectCode ?? ""}
              onChange={(e) =>
                setEditProject((p) => ({
                  ...p,
                  projectCode: e.target.value,
                }))
              }
            />
          </div>
          <div className={styles.field}>
            <label className={styles.fieldLabel}>Client Name</label>
            <input
              className={styles.fieldInput}
              placeholder="Enter client name"
              value={editProject.clientName ?? ""}
              onChange={(e) =>
                setEditProject((p) => ({
                  ...p,
                  clientName: e.target.value,
                }))
              }
            />
          </div>
          <div className={styles.field}>
            <label className={styles.fieldLabel}>Description</label>
            <textarea
              className={`${styles.fieldInput} ${styles.fieldTextarea}`}
              placeholder="Optional description"
              value={editProject.description ?? ""}
              onChange={(e) =>
                setEditProject((p) => ({
                  ...p,
                  description: e.target.value,
                }))
              }
            />
          </div>
          <div className={styles.toggleRow}>
            <span className={styles.toggleLabel}>Active</span>
            <label className={styles.toggle}>
              <input
                type="checkbox"
                checked={editProject.isActive ?? true}
                onChange={(e) =>
                  setEditProject((p) => ({
                    ...p,
                    isActive: e.target.checked,
                  }))
                }
              />
              <span className={styles.track} />
              <span className={styles.thumb} />
            </label>
          </div>
          {message && (
            <MessageBar
              text={message}
              isError={isError}
              onDismiss={() => setMessage("")}
            />
          )}
        </div>
        <div className={styles.drawerFooter}>
          <button
            className={styles.saveBtn}
            onClick={handleSave}
            disabled={saving}
          >
            {saving
              ? "Saving…"
              : editProject.id
                ? "Update Project"
                : "Add Project"}
          </button>
          <button className={styles.cancelBtn} onClick={closeDrawer}>
            Cancel
          </button>
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

  const load = (): void => {
    setLoading(true);
    getAllCategories()
      .then((items) => {
        setCategories(items);
        setLoading(false);
      })
      .catch(() => {
        setMessage("Failed to load categories.");
        setIsError(true);
        setLoading(false);
      });
  };

  useEffect(() => {
    load();
  }, []);

  const openAdd = (): void => {
    setEditCat({ isActive: true, sortOrder: 0 });
    setDrawerOpen(true);
  };
  const openEdit = (c: IActivityCategory): void => {
    setEditCat({ ...c });
    setDrawerOpen(true);
  };
  const closeDrawer = (): void => {
    setDrawerOpen(false);
  };

  const handleSave = async (): Promise<void> => {
    if (!editCat.title) {
      setMessage("Category Name is required.");
      setIsError(true);
      return;
    }
    setSaving(true);
    try {
      if (editCat.id) {
        await updateCategory(editCat.id, editCat);
        setMessage("Category updated.");
        setIsError(false);
      } else {
        await addCategory({
          ...editCat,
          isActive: editCat.isActive ?? true,
        } as Omit<IActivityCategory, "id">);
        setMessage("Category added.");
        setIsError(false);
      }
      setDrawerOpen(false);
      load();
    } catch {
      setMessage("Failed to save category.");
      setIsError(true);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className={styles.tabContent}>
      <div className={styles.toolbar}>
        <span className={styles.sectionLabel}>Activity Categories</span>
        <button className={styles.addBtn} onClick={openAdd}>
          <svg width="13" height="13" viewBox="0 0 13 13" fill="currentColor">
            <path d="M6.5 1a.75.75 0 01.75.75v4h4a.75.75 0 010 1.5h-4v4a.75.75 0 01-1.5 0v-4h-4a.75.75 0 010-1.5h4v-4A.75.75 0 016.5 1z" />
          </svg>
          Add Category
        </button>
      </div>

      {message && (
        <MessageBar
          text={message}
          isError={isError}
          onDismiss={() => setMessage("")}
        />
      )}

      {loading ? (
        <div className={styles.loading}>
          <div className={styles.spinner} />
          <span>Loading categories…</span>
        </div>
      ) : (
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead className={styles.thead}>
              <tr>
                <th className={styles.th}>Category Name</th>
                <th className={styles.th}>Description</th>
                <th className={styles.th} style={{ width: 70 }}>
                  Sort
                </th>
                <th className={styles.th}>Status</th>
                <th className={styles.th} style={{ width: 90 }}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {categories.length === 0 ? (
                <tr>
                  <td colSpan={5} className={styles.empty}>
                    No categories found.
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
                        {c.isActive ? "Active" : "Inactive"}
                      </span>
                    </td>
                    <td className={styles.td}>
                      <div className={styles.actions}>
                        <button
                          className={styles.iconBtn}
                          title="Edit"
                          onClick={() => openEdit(c)}
                        >
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                          >
                            <path d="M12.146.146a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-10 10a.5.5 0 01-.168.11l-5 2a.5.5 0 01-.65-.65l2-5a.5.5 0 01.11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 01.5.5v.5h.5a.5.5 0 01.5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 015 12.5V12h-.5a.5.5 0 01-.5-.5V11h-.5a.5.5 0 01-.468-.325z" />
                          </svg>
                        </button>
                        {c.isActive ? (
                          <button
                            className={`${styles.iconBtn} ${styles.iconBtnSuccess}`}
                            title="Activate"
                            onClick={() => deactivateCategory(c.id).then(load)}
                          >
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 16 16"
                              fill="currentColor"
                            >
                              <path d="M10.5 8a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                              <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" />
                            </svg>
                          </button>
                        ) : (
                          <button
                            className={`${styles.iconBtn} ${styles.iconBtnDanger}`}
                            title="Deactivate"
                            onClick={() => activateCategory(c.id).then(load)}
                          >
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 16 16"
                              fill="currentColor"
                            >
                              <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 00-2.79.588l.77.771A5.944 5.944 0 018 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0114.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                              <path d="M11.297 9.176a3.5 3.5 0 00-4.474-4.474l.823.823a2.5 2.5 0 012.829 2.829l.822.822zm-2.943 1.299l.822.822a3.5 3.5 0 01-4.474-4.474l.823.823a2.5 2.5 0 002.829 2.829z" />
                              <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 001.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 018 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884l-12-12 .708-.708 12 12-.708.708z" />
                            </svg>
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}

      <Modal
        isOpen={drawerOpen}
        onDismiss={closeDrawer}
        isBlocking={false}
        styles={{
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
        }}
      >
        <div className={styles.drawerHeader}>
          <h3 className={styles.drawerTitle}>
            {editCat.id ? "Edit Category" : "Add Category"}
          </h3>
          <button className={styles.drawerClose} onClick={closeDrawer}>
            ×
          </button>
        </div>
        <div className={styles.drawerBody}>
          <div className={styles.field}>
            <label className={styles.fieldLabel}>
              Category Name <span className={styles.required}>*</span>
            </label>
            <input
              className={styles.fieldInput}
              placeholder="Enter category name"
              value={editCat.title ?? ""}
              onChange={(e) =>
                setEditCat((c) => ({ ...c, title: e.target.value }))
              }
            />
          </div>
          <div className={styles.field}>
            <label className={styles.fieldLabel}>Description</label>
            <textarea
              className={`${styles.fieldInput} ${styles.fieldTextarea}`}
              placeholder="Optional description"
              value={editCat.description ?? ""}
              onChange={(e) =>
                setEditCat((c) => ({ ...c, description: e.target.value }))
              }
            />
          </div>
          <div className={styles.field}>
            <label className={styles.fieldLabel}>Sort Order</label>
            <input
              type="number"
              className={styles.fieldInput}
              min={0}
              max={9999}
              value={editCat.sortOrder ?? 0}
              onChange={(e) =>
                setEditCat((c) => ({
                  ...c,
                  sortOrder: parseInt(e.target.value, 10) || 0,
                }))
              }
            />
          </div>
          <div className={styles.toggleRow}>
            <span className={styles.toggleLabel}>Active</span>
            <label className={styles.toggle}>
              <input
                type="checkbox"
                checked={editCat.isActive ?? true}
                onChange={(e) =>
                  setEditCat((c) => ({ ...c, isActive: e.target.checked }))
                }
              />
              <span className={styles.track} />
              <span className={styles.thumb} />
            </label>
          </div>
          {message && (
            <MessageBar
              text={message}
              isError={isError}
              onDismiss={() => setMessage("")}
            />
          )}
        </div>
        <div className={styles.drawerFooter}>
          <button
            className={styles.saveBtn}
            onClick={handleSave}
            disabled={saving}
          >
            {saving
              ? "Saving…"
              : editCat.id
                ? "Update Category"
                : "Add Category"}
          </button>
          <button className={styles.cancelBtn} onClick={closeDrawer}>
            Cancel
          </button>
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
          <button
            className={styles.homeBtn}
            title="Back to Home"
            onClick={navigateHome}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8.354 1.146a.5.5 0 00-.708 0l-6 6A.5.5 0 002 7.5v7a.5.5 0 00.5.5h4a.5.5 0 00.5-.5v-4h2v4a.5.5 0 00.5.5h4a.5.5 0 00.5-.5v-7a.5.5 0 00-.146-.354L13 5.793V2.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5v1.293L8.354 1.146z" />
            </svg>
          </button>
          <div>
            <h2 className={styles.headerTitle}>
              Manage Projects &amp; Categories
            </h2>
            <p className={styles.headerSubtitle}>
              Configure projects and activity categories
            </p>
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
            Projects
          </button>
          <button
            className={`${styles.tab} ${activeTab === "categories" ? styles.tabActive : ""}`}
            onClick={() => setActiveTab("categories")}
          >
            <span className={styles.tabIcon}>🏷️</span>
            Activity Categories
          </button>
        </div>

        {activeTab === "projects" ? <ProjectsTab /> : <CategoriesTab />}
      </div>
    </div>
  );
};

export default AdminPanel;
