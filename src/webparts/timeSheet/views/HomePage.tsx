import * as React from "react";
import { useContext } from "react";
import { Icon, TooltipHost, TooltipDelay } from "@fluentui/react";
import { AppContext } from "../context/AppContext";
import { AppView } from "../models/ITimesheetModels";
import DashboardAnalytics from "../components/DashboardAnalytics";
import * as strings from "TimeSheetWebPartStrings";
import styles from "./HomePage.module.scss";

interface INavCard {
  view: AppView;
  iconName: string;
  value: string;
  label: string;
  subtitle: string;
  color: string;
  roles: ("Employee" | "Manager" | "Admin")[];
}

function getNavCards(): INavCard[] {
  return [
    {
      view: "CalendarView",
      iconName: "Calendar",
      value: "Calendar",
      label: strings.NavMyTimesheet,
      subtitle: strings.NavMyTimesheetSub,
      color: "#667eea",
      roles: ["Employee", "Manager", "Admin"],
    },
    {
      view: "MyHistory",
      iconName: "History",
      value: "History",
      label: strings.NavMySubmissions,
      subtitle: strings.NavMySubmissionsSub,
      color: "#107c41",
      roles: ["Employee", "Manager", "Admin"],
    },
    {
      view: "ManagerDashboard",
      iconName: "People",
      value: "Team",
      label: strings.NavTeamTimesheets,
      subtitle: strings.NavTeamTimesheetsSub,
      color: "#e8a600",
      roles: ["Manager", "Admin"],
    },
    {
      view: "ExportPanel",
      iconName: "ExcelDocument",
      value: "Export",
      label: strings.NavExportReport,
      subtitle: strings.NavExportReportSub,
      color: "#107c41",
      roles: ["Manager", "Admin"],
    },
    {
      view: "AdminPanel",
      iconName: "Settings",
      value: "Admin",
      label: strings.NavManageProjects,
      subtitle: strings.NavManageProjectsSub,
      color: "#c4314b",
      roles: ["Manager", "Admin"],
    },
  ];
}

const HomePage: React.FC = () => {
  const { currentUser, navigateTo } = useContext(AppContext);
  
  const NAV_CARDS = getNavCards();
  const visibleCards = NAV_CARDS.filter(
    (c) => c.roles.indexOf(currentUser.role) !== -1,
  );

  return (
    <div className={styles["webpart-container"]}>
      <div className={styles["dashboard-root"]}>
        {/* Header */}
        <div className={styles["dashboard-header"]}>
          <div className={styles["header-content"]}>
            <h1 className={styles["dashboard-page-title"]}>
              {strings.DashboardTitle}
            </h1>
            <p className={styles["dashboard-section-title"]}>
              {strings.WelcomeMessage.replace(
                "{name}",
                currentUser.displayName,
              ).replace("{role}", currentUser.role)}
            </p>
          </div>
        </div>

        {/* Quick Access Navigation Cards */}
        <div className={styles["quick-access-section"]}>
          <div className={styles["section-header"]}>
            <h2 className={styles["section-title"]}>{strings.QuickAccess}</h2>
            <p className={styles["section-subtitle"]}>
              {strings.QuickAccessSubtitle}
            </p>
          </div>

          <div className={styles["navigation-grid"]}>
            {visibleCards.map((card, index) => (
              <TooltipHost
                key={card.view}
                content={card.subtitle}
                delay={TooltipDelay.medium}
                styles={{ root: { flex: "1 1 0", minWidth: 0 } }}
              >
                <div
                  className={`${styles["nav-card"]}${index === 0 ? ` ${styles["nav-card-primary"]}` : ""}`}
                  onClick={() => navigateTo(card.view)}
                  role="button"
                  tabIndex={0}
                  aria-label={`${card.label} - ${card.subtitle}`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      navigateTo(card.view);
                    }
                  }}
                  style={
                    { "--accent-color": card.color } as React.CSSProperties
                  }
                >
                  <div className={styles["nav-card-icon-wrap"]}>
                    <Icon
                      iconName={card.iconName}
                      styles={{ root: { fontSize: 20, color: card.color } }}
                    />
                  </div>

                  <div className={styles["nav-card-info"]}>
                    <h3 className={styles["nav-card-title"]}>{card.label}</h3>
                    <p className={styles["nav-card-description"]}>
                      {card.subtitle}
                    </p>
                  </div>

                  <div className={styles["nav-card-footer"]}>
                    <span className={styles["nav-card-tag"]}>{card.value}</span>
                    <Icon
                      iconName="ChevronRight"
                      className={styles["action-icon"]}
                    />
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
