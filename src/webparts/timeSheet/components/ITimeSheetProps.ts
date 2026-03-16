import { WebPartContext } from '@microsoft/sp-webpart-base';

export interface ITimeSheetProps {
  spContext: WebPartContext;
  isDarkTheme: boolean;
  hasTeamsContext: boolean;
  userDisplayName: string;
}
