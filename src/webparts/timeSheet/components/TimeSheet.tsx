import * as React from 'react';
import { Spinner, SpinnerSize, MessageBar, MessageBarType } from '@fluentui/react';

import { ITimeSheetProps } from './ITimeSheetProps';
import { ICurrentUser, IAppNavigationState, AppView } from '../models/ITimesheetModels';
import { AppContext } from '../context/AppContext';
import { getCurrentUser } from '../services/UserService';

// ─── Views ────────────────────────────────────────────────────────────────────
const HomePage = React.lazy(() => import('../views/HomePage'));
const DailyTimesheetForm = React.lazy(() => import('../views/DailyTimesheetForm'));
const MyTimesheetHistory = React.lazy(() => import('../views/MyTimesheetHistory'));
const ManagerDashboard = React.lazy(() => import('../views/ManagerDashboard'));
const AdminPanel = React.lazy(() => import('../views/AdminPanel'));
const ExportPanel = React.lazy(() => import('../views/ExportPanel'));

interface ITimeSheetState {
  currentUser?: ICurrentUser;
  navState: IAppNavigationState;
  loading: boolean;
  error?: string;
}

export default class TimeSheet extends React.Component<ITimeSheetProps, ITimeSheetState> {

  constructor(props: ITimeSheetProps) {
    super(props);
    this.state = {
      navState: { currentView: 'Home' },
      loading: true,
    };
  }

  public async componentDidMount(): Promise<void> {
    try {
      const currentUser = await getCurrentUser();
      this.setState({ currentUser, loading: false });
    } catch {
      this.setState({
        loading: false,
        error: 'Failed to load user profile. Defaulting to Employee role.',
        currentUser: {
          id: 0,
          displayName: this.props.userDisplayName,
          email: '',
          loginName: '',
          role: 'Employee',
        },
      });
    }
  }

  private navigateTo = (view: AppView, params?: Partial<IAppNavigationState>): void => {
    this.setState((prev) => ({
      navState: { ...prev.navState, currentView: view, ...params },
    }));
  };

  private navigateHome = (): void => {
    this.setState({ navState: { currentView: 'Home' } });
  };

  private renderView(): React.ReactNode {
    const { navState } = this.state;

    switch (navState.currentView) {
      case 'Home':             return <HomePage />;
      case 'DailyForm':        return <DailyTimesheetForm selectedDate={navState.selectedDate ?? new Date()} />;
      case 'MyHistory':        return <MyTimesheetHistory />;
      case 'ManagerDashboard': return <ManagerDashboard />;
      case 'AdminPanel':       return <AdminPanel />;
      case 'ExportPanel':      return <ExportPanel />;
      default:                 return <HomePage />;
    }
  }

  public render(): React.ReactElement {
    const { loading, error, currentUser, navState } = this.state;

    if (loading) {
      return (
        <div style={{ padding: 40, textAlign: 'center' }}>
          <Spinner size={SpinnerSize.large} label="Loading Timesheet App..." />
        </div>
      );
    }

    if (!currentUser) {
      return (
        <MessageBar messageBarType={MessageBarType.error}>
          Unable to load the application. Please refresh the page.
        </MessageBar>
      );
    }

    return (
      <AppContext.Provider
        value={{
          currentUser,
          navState,
          navigateTo: this.navigateTo,
          navigateHome: this.navigateHome,
        }}
      >
        {error && (
          <MessageBar messageBarType={MessageBarType.warning} isMultiline={false}>
            {error}
          </MessageBar>
        )}
        <React.Suspense fallback={<Spinner size={SpinnerSize.medium} label="Loading..." />}>
          {this.renderView()}
        </React.Suspense>
      </AppContext.Provider>
    );
  }
}
