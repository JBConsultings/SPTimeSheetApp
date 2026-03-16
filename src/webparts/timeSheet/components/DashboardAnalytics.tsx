import * as React from 'react';
import { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import { ITimesheetEntry } from '../models/ITimesheetModels';
import { getAnalyticsData, IAnalyticsData, IChartData } from '../services/AnalyticsService';
import { formatDateShort } from '../utils/dateUtils';
import SimpleChart from './SimpleChart';
import styles from './DashboardAnalytics.module.scss';

// Chart wrapper component
interface IChartProps {
  data: IChartData;
  type: 'line' | 'pie' | 'bar' | 'doughnut';
  title: string;
  className?: string;
}

const Chart: React.FC<IChartProps> = ({ data, type, title, className }) => {
  return (
    <div className={`${styles.chartContainer} ${className || ''}`}>
      <h3 className={styles.chartTitle}>{title}</h3>
      <SimpleChart
        data={data}
        type={type}
        title={title}
        className={styles.chart}
        height={200}
        width={400}
      />
    </div>
  );
};

// Quick Stats Card Component
interface IStatsCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: React.ReactNode;
  color: 'blue' | 'green' | 'purple' | 'orange';
  trend?: {
    value: number;
    direction: 'up' | 'down';
  };
}

const StatsCard: React.FC<IStatsCardProps> = ({ title, value, subtitle, icon, color, trend }) => {
  // Get color-specific class
  const getColorClass = (): string => {
    switch (color) {
      case 'blue': return styles['statsCardBlue'] || '';
      case 'green': return styles['statsCardGreen'] || '';
      case 'purple': return styles['statsCardPurple'] || '';
      case 'orange': return styles['statsCardOrange'] || '';
      default: return '';
    }
  };
  
  return (
    <div className={`${styles.statsCard} ${getColorClass()}`}>
      <div className={styles.statsIcon}>
        {icon}
      </div>
      <div className={styles.statsContent}>
        <h4 className={styles.statsTitle}>{title}</h4>
        <div className={styles.statsValue}>{value}</div>
        {subtitle && <p className={styles.statsSubtitle}>{subtitle}</p>}
        {trend && (
          <div className={`${styles.statsTrend} ${trend.direction === 'up' ? styles.trendUp : styles.trendDown}`}>
            <span className={styles.trendIcon}>
              {trend.direction === 'up' ? '↗' : '↘'}
            </span>
            <span>{Math.abs(trend.value)}%</span>
          </div>
        )}
      </div>
    </div>
  );
};

// Recent Activity Component
interface IRecentActivityProps {
  activities: Array<{
    id: string;
    type: 'submitted' | 'approved' | 'rejected';
    description: string;
    timestamp: Date;
  }>;
}

const RecentActivity: React.FC<IRecentActivityProps> = ({ activities }) => {
  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'submitted':
        return (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 2a6 6 0 100 12A6 6 0 008 2zM7 5a1 1 0 112 0v2a1 1 0 11-2 0V5zM8 9a1 1 0 100 2 1 1 0 000-2z"/>
          </svg>
        );
      case 'approved':
        return (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z"/>
          </svg>
        );
      case 'rejected':
        return (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M4.646 4.646a.5.5 0 01.708 0L8 7.293l2.646-2.647a.5.5 0 01.708.708L8.707 8l2.647 2.646a.5.5 0 01-.708.708L8 8.707l-2.646 2.647a.5.5 0 01-.708-.708L7.293 8 4.646 5.354a.5.5 0 010-.708z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  const getActivityColor = (type: string) => {
    switch (type) {
      case 'submitted': return 'blue';
      case 'approved': return 'green';
      case 'rejected': return 'red';
      default: return 'gray';
    }
  };

  return (
    <div className={styles.recentActivity}>
      <h3 className={styles.activityTitle}>Recent Activity</h3>
      <div className={styles.activityList}>
        {activities.length === 0 ? (
          <div className={styles.emptyActivity}>
            <span>No recent activity</span>
          </div>
        ) : (
          activities.map((activity) => (
            <div key={activity.id} className={styles.activityItem}>
              <div className={`${styles.activityIcon} ${(() => {
                const color = getActivityColor(activity.type);
                switch (color) {
                  case 'blue': return styles['activityBlue'];
                  case 'green': return styles['activityGreen'];
                  case 'red': return styles['activityRed'];
                  case 'gray': return styles['activityGray'];
                  default: return '';
                }
              })()}`}>
                {getActivityIcon(activity.type)}
              </div>
              <div className={styles.activityContent}>
                <p className={styles.activityDescription}>{activity.description}</p>
                <span className={styles.activityTime}>
                  {formatDateShort(activity.timestamp)}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

// Main Dashboard Analytics Component
const DashboardAnalytics: React.FC = () => {
  const { currentUser } = useContext(AppContext);
  const [analyticsData, setAnalyticsData] = useState<IAnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadAnalytics = async (): Promise<void> => {
      try {
        setLoading(true);
        setError('');
        const data = await getAnalyticsData(currentUser.email);
        setAnalyticsData(data);
      } catch (err) {
        setError('Failed to load analytics data');
        console.error('Analytics error:', err);
      } finally {
        setLoading(false);
      }
    };

    void loadAnalytics();
  }, [currentUser.email]);

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.spinner} />
        <span>Loading analytics...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.errorContainer}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
        <span>{error}</span>
      </div>
    );
  }

  if (!analyticsData) {
    return (
      <div className={styles.emptyContainer}>
        <span>No analytics data available</span>
      </div>
    );
  }

  const {
    last7Days,
    monthlyHours,
    weeklyDistribution,
    quickStats,
    recentActivity
  } = analyticsData;

  return (
    <div className={styles.analyticsContainer}>
      <div className={styles.analyticsHeader}>
        <h2 className={styles.analyticsTitle}>Dashboard Analytics</h2>
        <p className={styles.analyticsSubtitle}>Your timesheet insights and trends</p>
      </div>

      {/* Quick Stats Grid */}
      <div className={styles.statsGrid}>
        <StatsCard
          title="Total Hours"
          value={quickStats.totalHours}
          subtitle="This month"
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
            </svg>
          }
          color="blue"
          trend={quickStats.hoursChange ? {
            value: quickStats.hoursChange,
            direction: quickStats.hoursChange > 0 ? 'up' : 'down'
          } : undefined}
        />

        <StatsCard
          title="Avg Daily"
          value={`${quickStats.avgDaily.toFixed(1)}h`}
          subtitle="Last 7 days"
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
            </svg>
          }
          color="green"
        />

        <StatsCard
          title="Submitted"
          value={quickStats.submittedEntries}
          subtitle="This week"
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
            </svg>
          }
          color="purple"
        />

        <StatsCard
          title="Approved"
          value={quickStats.approvedEntries}
          subtitle="This month"
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          }
          color="orange"
        />
      </div>

      {/* Charts Grid - Enhanced Full Width Layout */}
      <div className={styles.chartsGrid}>
        <Chart
          data={last7Days}
          type="line"
          title="Last 7 Days Hours Trend"
          className={styles.chartFullWidth}
        />
        
        <div className={styles.chartsRow}>
          <Chart
            data={monthlyHours}
            type="doughnut"
            title="Monthly Hours by Project"
            className={styles.chartMedium}
          />
          
          <Chart
            data={weeklyDistribution}
            type="bar"
            title="This Week's Distribution"
            className={styles.chartMedium}
          />
        </div>
      </div>

      {/* Recent Activity */}
      <RecentActivity activities={recentActivity} />
    </div>
  );
};

export default DashboardAnalytics;