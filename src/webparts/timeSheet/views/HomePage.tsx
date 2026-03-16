import * as React from 'react';
import { useContext } from 'react';
import { Icon, TooltipHost, TooltipDelay } from '@fluentui/react';
import { AppContext } from '../context/AppContext';
import { AppView } from '../models/ITimesheetModels';
import DashboardAnalytics from '../components/DashboardAnalytics';
import styles from './HomePage.module.scss';

interface INavCard {
  view: AppView;
  iconName: string;
  value: string;
  label: string;
  subtitle: string;
  color: string;
  roles: ('Employee' | 'Manager' | 'Admin')[];
}

const NAV_CARDS: INavCard[] = [
  {
    view: 'DailyForm',
    iconName: 'CalendarDay',
    value: "Today",
    label: "My Timesheet",
    subtitle: "Enter today's hours",
    color: '#0078d4',
    roles: ['Employee', 'Manager', 'Admin'],
  },
  {
    view: 'MyHistory',
    iconName: 'History',
    value: "History",
    label: "My Submissions",
    subtitle: "Past timesheets",
    color: '#107c41',
    roles: ['Employee', 'Manager', 'Admin'],
  },
  {
    view: 'ManagerDashboard',
    iconName: 'People',
    value: "Team",
    label: "Team Timesheets",
    subtitle: "Review & approve",
    color: '#e8a600',
    roles: ['Manager', 'Admin'],
  },
  {
    view: 'ExportPanel',
    iconName: 'ExcelDocument',
    value: "Export",
    label: "Export Report",
    subtitle: "Excel or PDF",
    color: '#107c41',
    roles: ['Manager', 'Admin'],
  },
  {
    view: 'AdminPanel',
    iconName: 'Settings',
    value: "Admin",
    label: "Manage Projects",
    subtitle: "Projects & categories",
    color: '#c4314b',
    roles: ['Manager', 'Admin'],
  },
];

const HomePage: React.FC = () => {
  const { currentUser, navigateTo } = useContext(AppContext);

  const visibleCards = NAV_CARDS.filter(
    (c) => c.roles.indexOf(currentUser.role) !== -1
  );

  return (
    <div className={styles['webpart-container']}>
      <div className={styles['dashboard-root']}>

        {/* Header */}
        <div className={styles['dashboard-header']}>
          <div className={styles['header-content']}>
            <h1 className={styles['dashboard-page-title']}>TimeSheet Dashboard</h1>
            <p className={styles['dashboard-section-title']}>
              Welcome, <strong>{currentUser.displayName}</strong> · {currentUser.role}
            </p>
          </div>
        </div>

        {/* Quick Access Navigation Cards */}
        <div className={styles['quick-access-section']}>
          <div className={styles['section-header']}>
            <h2 className={styles['section-title']}>Quick Access</h2>
            <p className={styles['section-subtitle']}>Choose an action to get started</p>
          </div>

          <div className={styles['navigation-grid']}>
            {visibleCards.map((card, index) => (
              <TooltipHost
                key={card.view}
                content={card.subtitle}
                delay={TooltipDelay.medium}
              >
                <div
                  className={`${styles['nav-card']}${index === 0 ? ` ${styles['nav-card-primary']}` : ''}`}
                  onClick={() => navigateTo(card.view)}
                  role="button"
                  tabIndex={0}
                  aria-label={`${card.label} - ${card.subtitle}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      navigateTo(card.view);
                    }
                  }}
                  style={{ '--accent-color': card.color } as React.CSSProperties}
                >
                  <div className={styles['nav-card-icon-wrap']}>
                    <Icon
                      iconName={card.iconName}
                      styles={{ root: { fontSize: 20, color: card.color } }}
                    />
                  </div>

                  <div className={styles['nav-card-info']}>
                    <h3 className={styles['nav-card-title']}>{card.label}</h3>
                    <p className={styles['nav-card-description']}>{card.subtitle}</p>
                  </div>

                  <div className={styles['nav-card-footer']}>
                    <span className={styles['nav-card-tag']}>{card.value}</span>
                    <Icon iconName="ChevronRight" className={styles['action-icon']} />
                  </div>
                </div>
              </TooltipHost>
            ))}
          </div>
        </div>

        {/* Dashboard Analytics Section */}
        <DashboardAnalytics />

      </div>
    </div>
  );
};

export default HomePage;
