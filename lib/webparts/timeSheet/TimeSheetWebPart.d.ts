import { Version } from '@microsoft/sp-core-library';
import { type IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IReadonlyTheme } from '@microsoft/sp-component-base';
export interface ITimeSheetWebPartProps {
    description: string;
}
export default class TimeSheetWebPart extends BaseClientSideWebPart<ITimeSheetWebPartProps> {
    private _isDarkTheme;
    render(): void;
    protected onInit(): Promise<void>;
    protected onThemeChanged(currentTheme: IReadonlyTheme | undefined): void;
    protected onDispose(): void;
    protected get dataVersion(): Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=TimeSheetWebPart.d.ts.map