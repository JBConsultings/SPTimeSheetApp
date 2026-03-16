import * as React from 'react';
import { IChartData } from '../services/AnalyticsService';
interface ISimpleChartProps {
    data: IChartData;
    type: 'line' | 'pie' | 'bar' | 'doughnut';
    title: string;
    className?: string;
    height?: number;
    width?: number;
}
declare const SimpleChart: React.FC<ISimpleChartProps>;
export default SimpleChart;
//# sourceMappingURL=SimpleChart.d.ts.map