import { ITimesheetEntry } from '../models/ITimesheetModels';
import '@pnp/sp/lists';
import '@pnp/sp/items';
export interface IChartData {
    labels: string[];
    datasets: Array<{
        label: string;
        data: number[] | {
            [key: string]: number;
        };
        backgroundColor?: string | string[];
        borderColor?: string | string[];
        borderWidth?: number;
        fill?: boolean;
    }>;
}
export interface IQuickStats {
    totalHours: number;
    avgDaily: number;
    submittedEntries: number;
    approvedEntries: number;
    hoursChange?: number;
}
export interface IAnalyticsData {
    last7Days: IChartData;
    monthlyHours: IChartData;
    weeklyDistribution: IChartData;
    quickStats: IQuickStats;
    recentActivity: Array<{
        id: string;
        type: 'submitted' | 'approved' | 'rejected';
        description: string;
        timestamp: Date;
    }>;
}
declare function getLast7Days(): Date[];
declare function getCurrentMonth(): {
    start: Date;
    end: Date;
};
declare function getCurrentWeek(): {
    start: Date;
    end: Date;
};
declare function groupEntriesByDate(entries: ITimesheetEntry[]): Map<string, number>;
declare function groupEntriesByProject(entries: ITimesheetEntry[]): Map<string, number>;
export declare function getAnalyticsData(employeeEmail: string): Promise<IAnalyticsData>;
export { getLast7Days, getCurrentMonth, getCurrentWeek, groupEntriesByDate, groupEntriesByProject };
//# sourceMappingURL=AnalyticsService.d.ts.map