import * as React from 'react';
import { useContext, useState, useEffect } from 'react';
import { DefaultButton, IButtonStyles } from '@fluentui/react';
import { AppContext } from '../context/AppContext';
import { ITimesheetEntry } from '../models/ITimesheetModels';
import { getAnalyticsData, IAnalyticsData, IChartData } from '../services/AnalyticsService';
import { getTeamAnalyticsData } from '../services/TeamAnalyticsService';
import { formatDateShort } from '../utils/dateUtils';
import * as strings from 'TimeSheetWebPartStrings';
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

// Toggle button styles — active uses the project theme purple, inactive is transparent
const toggleButtonStyles = (isActive: boolean): IButtonStyles => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    padding: '6px 14px',
    border: 'none',
    borderRadius: 8,
    fontSize: 12,
    fontWeight: isActive ? 600 : 500,
    color: isActive ? '#667eea' : '#64748b',
    background: isActive ? '#ffffff' : 'transparent',
    boxShadow: isActive ? '0 1px 4px rgba(0,0,0,0.1), 0 0 0 1px rgba(102,126,234,0.15)' : 'none',
    minWidth: 'auto',
    height: 'auto',
    whiteSpace: 'nowrap',
  },
  rootHovered: {
    background: isActive ? '#ffffff' : 'rgba(255,255,255,0.6)',
    color: isActive ? '#667eea' : '#334155',
    border: 'none',
  },
  rootPressed: {
    background: '#ffffff',
    color: '#667eea',
    border: 'none',
  },
  label: {
    fontSize: 12,
    fontWeight: isActive ? 600 : 500,
    color: isActive ? '#667eea' : '#64748b',
  },
  icon: {
    fontSize: 14,
    color: isActive ? '#667eea' : '#94a3b8',
  },
});

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
      <h3 className={styles.activityTitle}>{strings.RecentActivity}</h3>
      <div className={styles.activityList}>
        {activities.length === 0 ? (
          <div className={styles.emptyActivity}>
            <span>{strings.NoRecentActivity}</span>
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

  const isManagerOrAdmin = currentUser.role === 'Manager' || currentUser.role === 'Admin';
  const [isTeamView, setIsTeamView] = useState(false);

  useEffect(() => {
    const loadAnalytics = async (): Promise<void> => {
      try {
        setLoading(true);
        setError('');
        const data = isTeamView
          ? await getTeamAnalyticsData()
          : await getAnalyticsData(currentUser.email);
        setAnalyticsData(data);
      } catch (err) {
        setError(strings.AnalyticsFailed);
        console.error('Analytics error:', err);
      } finally {
        setLoading(false);
      }
    };

    void loadAnalytics();
  }, [currentUser.email, isTeamView]);

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.spinner} />
        <span>{strings.LoadingAnalytics}</span>
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
        <span>{strings.NoAnalyticsData}</span>
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
        <div className={styles.analyticsHeaderLeft}>
          <h2 className={styles.analyticsTitle}>
            {isTeamView ? strings.TeamAnalyticsTitle : strings.AnalyticsTitle}
          </h2>
          <p className={styles.analyticsSubtitle}>
            {isTeamView ? strings.TeamAnalyticsSubtitle : strings.AnalyticsSubtitle}
          </p>
        </div>

        {/* Toggle — only visible to Manager / Admin */}
        {isManagerOrAdmin && (
          <div className={styles.viewToggle} role="group" aria-label="Dashboard view">
            <DefaultButton
              text={strings.MyAnalyticsToggle}
              iconProps={{ iconName: 'Contact' }}
              onClick={() => setIsTeamView(false)}
              aria-pressed={!isTeamView}
              styles={toggleButtonStyles(!isTeamView)}
            />
            <DefaultButton
              text={strings.TeamAnalyticsToggle}
              iconProps={{ iconName: 'Group' }}
              onClick={() => setIsTeamView(true)}
              aria-pressed={isTeamView}
              styles={toggleButtonStyles(isTeamView)}
            />
          </div>
        )}
      </div>

      {/* Quick Stats Grid */}
      <div className={styles.statsGrid}>
        <StatsCard
          title={isTeamView ? strings.TotalTeamHoursCard : strings.TotalHoursCard}
          value={quickStats.totalHours}
          subtitle={strings.ThisMonth}
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
          title={isTeamView ? strings.ActiveEmployeesCard : strings.AvgDaily}
          value={isTeamView ? quickStats.avgDaily : `${quickStats.avgDaily.toFixed(1)}h`}
          subtitle={isTeamView ? strings.ThisMonth : strings.Last7Days}
          icon={
            isTeamView ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
              </svg>
            )
          }
          color="green"
        />

        <StatsCard
          title={isTeamView ? strings.PendingApprovalsCard : strings.SubmittedCard}
          value={quickStats.submittedEntries}
          subtitle={strings.ThisWeek}
          icon={
            isTeamView ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
              </svg>
            )
          }
          color="purple"
        />

        <StatsCard
          title={isTeamView ? strings.ApprovedThisMonthCard : strings.ApprovedCard}
          value={quickStats.approvedEntries}
          subtitle={strings.ThisMonth}
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          }
          color="orange"
        />
      </div>

      {/* Charts Grid */}
      <div className={styles.chartsGrid}>
        <Chart
          data={last7Days}
          type="line"
          title={isTeamView ? strings.TeamLast7DaysChart : strings.Last7DaysChart}
          className={styles.chartFullWidth}
        />

        <div className={styles.chartsRow}>
          <Chart
            data={weeklyDistribution}
            type="bar"
            title={isTeamView ? strings.TeamWeekDistribution : strings.WeekDistribution}
            className={styles.chartMedium}
          />

          <Chart
            data={monthlyHours}
            type="doughnut"
            title={isTeamView ? strings.HoursByEmployee : strings.MonthlyByProject}
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