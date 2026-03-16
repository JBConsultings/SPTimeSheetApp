import * as React from 'react';
import { IChartData } from '../services/AnalyticsService';
declare global {
    interface Window {
        Chart: any;
    }
}
interface IChartComponentProps {
    data: IChartData;
    type: 'line' | 'pie' | 'bar' | 'doughnut';
    title: string;
    className?: string;
    height?: number;
    width?: number;
}
declare const ChartComponent: React.FC<IChartComponentProps>;
export default ChartComponent;
//# sourceMappingURL=ChartComponent.d.ts.map