import * as React from 'react';
import { useContext, useState, useEffect } from 'react';

const thStyle: React.CSSProperties = { padding: '10px 12px', textAlign: 'left', fontWeight: 600, fontSize: 13 };
const tdStyle: React.CSSProperties = { padding: '8px 12px', borderBottom: '1px solid #edebe9', fontSize: 13, verticalAlign: 'middle' };
import {
  Stack,
  Text,
  Pivot,
  PivotItem,
  PrimaryButton,
  DefaultButton,
  Panel,
  PanelType,
  TextField,
  Toggle,
  SpinButton,
  Spinner,
  SpinnerSize,
  MessageBar,
  MessageBarType,
  IconButton,
} from '@fluentui/react';
import { AppContext } from '../context/AppContext';
import { IProject, IActivityCategory } from '../models/ITimesheetModels';
import {
  getAllProjects,
  addProject,
  updateProject,
  deactivateProject,
  activateProject,
} from '../services/ProjectService';
import {
  getAllCategories,
  addCategory,
  updateCategory,
  deactivateCategory,
  activateCategory,
} from '../services/CategoryService';

// ─── Projects Tab ─────────────────────────────────────────────────────────────

const ProjectsTab: React.FC = () => {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);
  const [editProject, setEditProject] = useState<Partial<IProject>>({});
  const [saving, setSaving] = useState(false);

  const load = (): void => {
    setLoading(true);
    const finish = (): void => setLoading(false);
    getAllProjects()
      .then((items) => { setProjects(items); finish(); })
      .catch(() => { setMessage('Failed to load projects.'); setIsError(true); finish(); });
  };

  useEffect(() => { load(); }, []);

  const openAdd = (): void => {
    setEditProject({ isActive: true });
    setPanelOpen(true);
  };

  const openEdit = (p: IProject): void => {
    setEditProject({ ...p });
    setPanelOpen(true);
  };

  const handleSave = async (): Promise<void> => {
    if (!editProject.title || !editProject.projectCode) {
      setMessage('Project Name and Project Code are required.'); setIsError(true); return;
    }
    setSaving(true);
    try {
      if (editProject.id) {
        await updateProject(editProject.id, editProject);
        setMessage('Project updated successfully.'); setIsError(false);
      } else {
        await addProject({ ...editProject, isActive: editProject.isActive ?? true } as Omit<IProject, 'id'>);
        setMessage('Project added successfully.'); setIsError(false);
      }
      setPanelOpen(false);
      load();
    } catch {
      setMessage('Failed to save project.'); setIsError(true);
    } finally {
      setSaving(false);
    }
  };

  return (
    <Stack tokens={{ childrenGap: 12 }}>
      <Stack horizontal horizontalAlign="end">
        <PrimaryButton iconProps={{ iconName: 'Add' }} text="Add Project" onClick={openAdd} />
      </Stack>

      {message && (
        <MessageBar
          messageBarType={isError ? MessageBarType.error : MessageBarType.success}
          onDismiss={() => setMessage('')}
        >{message}</MessageBar>
      )}

      {loading ? <Spinner size={SpinnerSize.medium} /> : (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#0078d4', color: '#fff' }}>
              <th style={thStyle}>Code</th>
              <th style={thStyle}>Project Name</th>
              <th style={thStyle}>Client</th>
              <th style={thStyle}>Status</th>
              <th style={{ ...thStyle, width: 120 }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((p, i) => (
              <tr key={p.id} style={{ background: i % 2 === 0 ? '#fff' : '#f5f7fa' }}>
                <td style={tdStyle}>{p.projectCode}</td>
                <td style={tdStyle}>{p.title}</td>
                <td style={tdStyle}>{p.clientName ?? '—'}</td>
                <td style={tdStyle}>
                  <span style={{ color: p.isActive ? '#107c10' : '#a19f9d', fontWeight: 600 }}>
                    {p.isActive ? 'Active' : 'Inactive'}
                  </span>
                </td>
                <td style={tdStyle}>
                  <Stack horizontal tokens={{ childrenGap: 4 }}>
                    <IconButton iconProps={{ iconName: 'Edit' }} title="Edit" onClick={() => openEdit(p)} />
                    {p.isActive
                      ? <IconButton iconProps={{ iconName: 'Hide' }} title="Deactivate" onClick={() => deactivateProject(p.id).then(load)} />
                      : <IconButton iconProps={{ iconName: 'View' }} title="Activate" onClick={() => activateProject(p.id).then(load)} />
                    }
                  </Stack>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <Panel
        isOpen={panelOpen}
        onDismiss={() => setPanelOpen(false)}
        type={PanelType.medium}
        headerText={editProject.id ? 'Edit Project' : 'Add Project'}
      >
        <Stack tokens={{ childrenGap: 12 }} style={{ padding: '16px 0' }}>
          <TextField
            label="Project Name" required value={editProject.title ?? ''}
            onChange={(_, v) => setEditProject((p) => ({ ...p, title: v }))}
          />
          <TextField
            label="Project Code" required value={editProject.projectCode ?? ''}
            onChange={(_, v) => setEditProject((p) => ({ ...p, projectCode: v }))}
          />
          <TextField
            label="Client Name" value={editProject.clientName ?? ''}
            onChange={(_, v) => setEditProject((p) => ({ ...p, clientName: v }))}
          />
          <TextField
            label="Description" multiline rows={3} value={editProject.description ?? ''}
            onChange={(_, v) => setEditProject((p) => ({ ...p, description: v }))}
          />
          <Toggle
            label="Active"
            checked={editProject.isActive ?? true}
            onChange={(_, c) => setEditProject((p) => ({ ...p, isActive: c }))}
          />
          <Stack horizontal tokens={{ childrenGap: 8 }}>
            <PrimaryButton text="Save" onClick={handleSave} disabled={saving} />
            <DefaultButton text="Cancel" onClick={() => setPanelOpen(false)} />
          </Stack>
          {saving && <Spinner size={SpinnerSize.small} />}
        </Stack>
      </Panel>
    </Stack>
  );
};

// ─── Categories Tab ───────────────────────────────────────────────────────────

const CategoriesTab: React.FC = () => {
  const [categories, setCategories] = useState<IActivityCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);
  const [editCat, setEditCat] = useState<Partial<IActivityCategory>>({});
  const [saving, setSaving] = useState(false);

  const load = (): void => {
    setLoading(true);
    const finish = (): void => setLoading(false);
    getAllCategories()
      .then((items) => { setCategories(items); finish(); })
      .catch(() => { setMessage('Failed to load categories.'); setIsError(true); finish(); });
  };

  useEffect(() => { load(); }, []);

  const openAdd = (): void => { setEditCat({ isActive: true, sortOrder: 0 }); setPanelOpen(true); };
  const openEdit = (c: IActivityCategory): void => { setEditCat({ ...c }); setPanelOpen(true); };

  const handleSave = async (): Promise<void> => {
    if (!editCat.title) { setMessage('Category Name is required.'); setIsError(true); return; }
    setSaving(true);
    try {
      if (editCat.id) {
        await updateCategory(editCat.id, editCat);
        setMessage('Category updated.'); setIsError(false);
      } else {
        await addCategory({ ...editCat, isActive: editCat.isActive ?? true } as Omit<IActivityCategory, 'id'>);
        setMessage('Category added.'); setIsError(false);
      }
      setPanelOpen(false);
      load();
    } catch {
      setMessage('Failed to save category.'); setIsError(true);
    } finally {
      setSaving(false);
    }
  };

  return (
    <Stack tokens={{ childrenGap: 12 }}>
      <Stack horizontal horizontalAlign="end">
        <PrimaryButton iconProps={{ iconName: 'Add' }} text="Add Category" onClick={openAdd} />
      </Stack>

      {message && (
        <MessageBar messageBarType={isError ? MessageBarType.error : MessageBarType.success} onDismiss={() => setMessage('')}>
          {message}
        </MessageBar>
      )}

      {loading ? <Spinner size={SpinnerSize.medium} /> : (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#0078d4', color: '#fff' }}>
              <th style={thStyle}>Category Name</th>
              <th style={thStyle}>Description</th>
              <th style={{ ...thStyle, width: 80 }}>Sort</th>
              <th style={thStyle}>Status</th>
              <th style={{ ...thStyle, width: 120 }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((c, i) => (
              <tr key={c.id} style={{ background: i % 2 === 0 ? '#fff' : '#f5f7fa' }}>
                <td style={tdStyle}>{c.title}</td>
                <td style={tdStyle}>{c.description ?? '—'}</td>
                <td style={tdStyle}>{c.sortOrder ?? 0}</td>
                <td style={tdStyle}>
                  <span style={{ color: c.isActive ? '#107c10' : '#a19f9d', fontWeight: 600 }}>
                    {c.isActive ? 'Active' : 'Inactive'}
                  </span>
                </td>
                <td style={tdStyle}>
                  <Stack horizontal tokens={{ childrenGap: 4 }}>
                    <IconButton iconProps={{ iconName: 'Edit' }} title="Edit" onClick={() => openEdit(c)} />
                    {c.isActive
                      ? <IconButton iconProps={{ iconName: 'Hide' }} title="Deactivate" onClick={() => deactivateCategory(c.id).then(load)} />
                      : <IconButton iconProps={{ iconName: 'View' }} title="Activate" onClick={() => activateCategory(c.id).then(load)} />
                    }
                  </Stack>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <Panel
        isOpen={panelOpen}
        onDismiss={() => setPanelOpen(false)}
        type={PanelType.medium}
        headerText={editCat.id ? 'Edit Category' : 'Add Category'}
      >
        <Stack tokens={{ childrenGap: 12 }} style={{ padding: '16px 0' }}>
          <TextField
            label="Category Name" required value={editCat.title ?? ''}
            onChange={(_, v) => setEditCat((c) => ({ ...c, title: v }))}
          />
          <TextField
            label="Description" multiline rows={3} value={editCat.description ?? ''}
            onChange={(_, v) => setEditCat((c) => ({ ...c, description: v }))}
          />
          <SpinButton
            label="Sort Order"
            value={String(editCat.sortOrder ?? 0)}
            min={0} max={9999} step={1}
            onChange={(_, v) => setEditCat((c) => ({ ...c, sortOrder: parseInt(v ?? '0', 10) }))}
            style={{ maxWidth: 120 }}
          />
          <Toggle
            label="Active"
            checked={editCat.isActive ?? true}
            onChange={(_, c) => setEditCat((prev) => ({ ...prev, isActive: c }))}
          />
          <Stack horizontal tokens={{ childrenGap: 8 }}>
            <PrimaryButton text="Save" onClick={handleSave} disabled={saving} />
            <DefaultButton text="Cancel" onClick={() => setPanelOpen(false)} />
          </Stack>
          {saving && <Spinner size={SpinnerSize.small} />}
        </Stack>
      </Panel>
    </Stack>
  );
};

// ─── Main Admin Panel ─────────────────────────────────────────────────────────

const AdminPanel: React.FC = () => {
  const { navigateHome } = useContext(AppContext);

  return (
    <div style={{ padding: 24 }}>
      <Stack horizontal verticalAlign="center" tokens={{ childrenGap: 8 }} style={{ marginBottom: 16 }}>
        <IconButton iconProps={{ iconName: 'Home' }} title="Home" onClick={navigateHome} />
        <Text variant="xLarge">Manage Projects &amp; Categories</Text>
      </Stack>

      <Pivot>
        <PivotItem headerText="Projects" itemIcon="KnowledgeArticle">
          <div style={{ paddingTop: 16 }}>
            <ProjectsTab />
          </div>
        </PivotItem>
        <PivotItem headerText="Activity Categories" itemIcon="Tag">
          <div style={{ paddingTop: 16 }}>
            <CategoriesTab />
          </div>
        </PivotItem>
      </Pivot>
    </div>
  );
};

export default AdminPanel;
