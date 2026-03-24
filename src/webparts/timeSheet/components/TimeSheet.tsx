import * as React from 'react';
import { HashRouter } from 'react-router-dom';
import { Spinner, SpinnerSize, MessageBar, MessageBarType } from '@fluentui/react';

import { ITimeSheetProps } from './ITimeSheetProps';
import { ICurrentUser } from '../models/ITimesheetModels';
import { getCurrentUser } from '../services/UserService';
import * as strings from 'TimeSheetWebPartStrings';
import AppShell from './AppShell';

interface ITimeSheetState {
  currentUser?: ICurrentUser;
  loading: boolean;
  error?: string;
}

export default class TimeSheet extends React.Component<ITimeSheetProps, ITimeSheetState> {

  constructor(props: ITimeSheetProps) {
    super(props);
    this.state = { loading: true };
  }

  public async componentDidMount(): Promise<void> {
    try {
      const currentUser = await getCurrentUser();
      this.setState({ currentUser, loading: false });
    } catch {
      this.setState({
        loading: false,
        error: strings.UserProfileFailed,
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

  public render(): React.ReactElement {
    const { loading, currentUser, error } = this.state;

    if (loading) {
      return (
        <div style={{ padding: 40, textAlign: 'center' }}>
          <Spinner size={SpinnerSize.large} label={strings.LoadingApp} />
        </div>
      );
    }

    if (!currentUser) {
      return (
        <MessageBar messageBarType={MessageBarType.error}>
          {strings.LoadFailedApp}
        </MessageBar>
      );
    }

    // HashRouter keeps routing within the # fragment so SharePoint's URL is untouched.
    // The full URL for each view looks like:
    //   https://tenant.sharepoint.com/sites/...#/daily-form?date=2026-03-23
    // This survives page refresh and can be copied & shared.
    return (
      <HashRouter>
        <AppShell currentUser={currentUser} error={error} />
      </HashRouter>
    );
  }
}
