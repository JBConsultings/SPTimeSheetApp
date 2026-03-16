import * as React from 'react';
import { ICurrentUser, AppView, IAppNavigationState } from '../models/ITimesheetModels';
export interface IAppContext {
    currentUser: ICurrentUser;
    navState: IAppNavigationState;
    navigateTo: (view: AppView, params?: Partial<IAppNavigationState>) => void;
    navigateHome: () => void;
}
export declare const AppContext: React.Context<IAppContext>;
//# sourceMappingURL=AppContext.d.ts.map