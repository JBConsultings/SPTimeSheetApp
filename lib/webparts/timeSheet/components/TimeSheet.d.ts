import * as React from 'react';
import { ITimeSheetProps } from './ITimeSheetProps';
import { ICurrentUser } from '../models/ITimesheetModels';
interface ITimeSheetState {
    currentUser?: ICurrentUser;
    loading: boolean;
    error?: string;
}
export default class TimeSheet extends React.Component<ITimeSheetProps, ITimeSheetState> {
    constructor(props: ITimeSheetProps);
    componentDidMount(): Promise<void>;
    render(): React.ReactElement;
}
export {};
//# sourceMappingURL=TimeSheet.d.ts.map