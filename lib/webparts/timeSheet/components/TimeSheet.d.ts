import * as React from 'react';
import { ITimeSheetProps } from './ITimeSheetProps';
import { ICurrentUser, IAppNavigationState } from '../models/ITimesheetModels';
interface ITimeSheetState {
    currentUser?: ICurrentUser;
    navState: IAppNavigationState;
    loading: boolean;
    error?: string;
}
export default class TimeSheet extends React.Component<ITimeSheetProps, ITimeSheetState> {
    constructor(props: ITimeSheetProps);
    componentDidMount(): Promise<void>;
    private navigateTo;
    private navigateHome;
    private renderView;
    render(): React.ReactElement;
}
export {};
//# sourceMappingURL=TimeSheet.d.ts.map