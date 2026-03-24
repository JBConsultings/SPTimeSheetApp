import * as React from 'react';
import { Routes, Route, Navigate, useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import { MessageBar, MessageBarType, Spinner, SpinnerSize } from '@fluentui/react';

import { ICurrentUser, IAppNavigationState, AppView } from '../models/ITimesheetModels';
import { AppContext } from '../context/AppContext';

// ─── Lazy-loaded views ────────────────────────────────────────────────────────
const HomePage           = React.lazy(() => import('../views/HomePage'));
const DailyTimesheetForm = React.lazy(() => import('../views/DailyTimesheetForm'));
const CalendarView       = React.lazy(() => import('../views/CalendarView'));
const MyTimesheetHistory = React.lazy(() => import('../views/MyTimesheetHistory'));
const ManagerDashboard   = React.lazy(() => import('../views/ManagerDashboard'));
const AdminPanel         = React.lazy(() => import('../views/AdminPanel'));
const ExportPanel        = React.lazy(() => import('../views/ExportPanel'));

// ─── Route maps ───────────────────────────────────────────────────────────────
const VIEW_TO_PATH: Record<AppView, string> = {
  Home:             '/',
  DailyForm:        '/daily-form',
  CalendarView:     '/calendar',
  MyHistory:        '/my-history',
  ManagerDashboard: '/manager',
  AdminPanel:       '/admin',
  ExportPanel:      '/export',
};

const PATH_TO_VIEW: { [key: string]: AppView } = {
  '/':              'Home',
  '/daily-form':    'DailyForm',
  '/calendar':      'CalendarView',
  '/my-history':    'MyHistory',
  '/manager':       'ManagerDashboard',
  '/admin':         'AdminPanel',
  '/export':        'ExportPanel',
};

// ─── Props ────────────────────────────────────────────────────────────────────
interface IAppShellProps {
  currentUser: ICurrentUser;
  error?: string;
}

// ─── Helper ───────────────────────────────────────────────────────────────────
function formatDate(d: Date): string {
  const yyyy = d.getFullYear();
  const mm   = String(d.getMonth() + 1).padStart(2, '0');
  const dd   = String(d.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

// ─── AppShell ─────────────────────────────────────────────────────────────────
const AppShell: React.FC<IAppShellProps> = ({ currentUser, error }) => {
  const navigate                = useNavigate();
  const location                = useLocation();
  const [searchParams]          = useSearchParams();

  // Derive navigation state purely from the URL so it survives refresh & sharing
  const currentView: AppView    = PATH_TO_VIEW[location.pathname] ?? 'Home';
  const dateParam               = searchParams.get('date');
  const parsedDate              = dateParam ? new Date(dateParam) : undefined;
  const selectedDate            = parsedDate && !isNaN(parsedDate.getTime()) ? parsedDate : undefined;
  const selectedEmployeeEmail   = searchParams.get('employee') ?? undefined;

  const navState: IAppNavigationState = { currentView, selectedDate, selectedEmployeeEmail };

  // navigateTo updates the URL; React Router re-renders the correct view
  const navigateTo = (view: AppView, params?: Partial<IAppNavigationState>): void => {
    const path = VIEW_TO_PATH[view] ?? '/';
    const sp   = new URLSearchParams();
    const date     = params && params.selectedDate;
    const employee = params && params.selectedEmployeeEmail;
    if (date)     sp.set('date', formatDate(date));
    if (employee) sp.set('employee', employee);
    const search = sp.toString() ? ('?' + sp.toString()) : '';
    navigate(path + search);
  };

  const navigateHome = (): void => navigate('/');

  return (
    <AppContext.Provider value={{ currentUser, navState, navigateTo, navigateHome }}>
      {error && (
        <MessageBar messageBarType={MessageBarType.warning} isMultiline={false}>
          {error}
        </MessageBar>
      )}
      <React.Suspense fallback={<Spinner size={SpinnerSize.medium} label="Loading..." />}>
        <Routes>
          <Route path="/"             element={<HomePage />} />
          <Route path="/daily-form"   element={<DailyTimesheetForm selectedDate={selectedDate ?? new Date()} />} />
          <Route path="/calendar"     element={<CalendarView />} />
          <Route path="/my-history"   element={<MyTimesheetHistory />} />
          <Route path="/manager"      element={<ManagerDashboard />} />
          <Route path="/admin"        element={<AdminPanel />} />
          <Route path="/export"       element={<ExportPanel />} />
          {/* Any unknown path falls back to home */}
          <Route path="*"             element={<Navigate to="/" replace />} />
        </Routes>
      </React.Suspense>
    </AppContext.Provider>
  );
};

export default AppShell;
