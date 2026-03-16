import * as React from 'react';
import { useContext } from 'react';
import { Icon, TooltipHost, TooltipDelay } from '@fluentui/react';
import { AppContext } from '../context/AppContext';
import { AppView } from '../models/ITimesheetModels';
import DashboardAnalytics from '../components/DashboardAnalytics';
import './HomePage.module.scss';

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
    <div className="webpart-container" style={{border: '1px solid #d5d5d5', padding: '20px', borderRadius: '20px', backgroundColor: '#f3f4f4'}}>
      <div className="dashboard-root">

        {/* Header */}
        <div className="dashboard-header">
          <div className="header-content">
            <h1 className="dashboard-page-title">TimeSheet Dashboard</h1>
            <p className="dashboard-section-title">
              Welcome, <strong>{currentUser.displayName}</strong> · {currentUser.role}
            </p>
          </div>
        </div>

        {/* Top Navigation Bar */}
        {/* Quick Access Navigation Cards */}
        <div className="quick-access-section">
          <div className="section-header">
            <h2 className="section-title">Quick Access</h2>
            <p className="section-subtitle">Choose an action to get started</p>
          </div>
          
          <div className="navigation-grid">
            {visibleCards.map((card, index) => (
              <TooltipHost
                key={card.view}
                content={card.subtitle}
                delay={TooltipDelay.medium}
              >
                <div
                  className={`nav-card ${index === 0 ? 'nav-card-primary' : ''}`}
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
                  <div className="nav-card-header">
                    <div className="nav-card-icon">
                      <Icon
                        iconName={card.iconName}
                        styles={{
                          root: {
                            fontSize: 24,
                            color: card.color,
                          }
                        }}
                      />
                    </div>
                    <div className="nav-card-badge">
                      <span className="badge-text">{card.value}</span>
                    </div>
                  </div>
                  
                  <div className="nav-card-content">
                    <h3 className="nav-card-title">{card.label}</h3>
                    <p className="nav-card-description">{card.subtitle}</p>
                  </div>
                  
                  <div className="nav-card-action">
                    <Icon iconName="ChevronRight" className="action-icon" />
                  </div>
                  
                  <div className="nav-card-glow" />
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
