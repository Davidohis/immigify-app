import { DocumentIcon, EligibilityIcon, FormIcon, HistoryIcon, HomeIcon, InterviewIcon, SettingsIcon, SubscriptionIcon } from "@/assets";
import {
  DASHBOARD_DOCUMENT_ROUTE,
  DASHBOARD_ELIGIBILITY_ROUTE,
  DASHBOARD_FORMAGENT_ROUTE,
  DASHBOARD_HISTORY_ROUTE,
  DASHBOARD_HOME_ROUTE,
  DASHBOARD_INTERVIEW_ROUTE,
  DASHBOARD_SETTINGS_ROUTE,
  DASHBOARD_SUBSCRIPTION_ROUTE,
} from "@/constants/paths";

const useDashboardLinks = () => {
  const navLinks = {
    top: [
      {
        label: "Home",
        icon: HomeIcon,
        to: DASHBOARD_HOME_ROUTE,
        display: true,
      },
      {
        label: "Eligibility Agent",
        icon: EligibilityIcon,
        to: DASHBOARD_ELIGIBILITY_ROUTE,
        display: true,
      },
      {
        label: "Document Agent",
        icon: DocumentIcon,
        to: DASHBOARD_DOCUMENT_ROUTE,
        display: true,
      },
      {
        label: "Form-filling Agent",
        icon: FormIcon,
        to: DASHBOARD_FORMAGENT_ROUTE,
        display: true,
      },

      {
        label: "Interview Prep Agent",
        icon: InterviewIcon,
        to: DASHBOARD_INTERVIEW_ROUTE,
        display: true,
      },
      {
        label: "Subscription",
        icon: SubscriptionIcon,
        to: DASHBOARD_SUBSCRIPTION_ROUTE,
        display: true,
      },
      {
        label: "History",
        icon: HistoryIcon,
        to: DASHBOARD_HISTORY_ROUTE,
        display: true,
      },
      {
        label: "Settings",
        icon: SettingsIcon,
        to: DASHBOARD_SETTINGS_ROUTE,
        display: true,
      },
    ],
  };

  return {
    navLinks,
  };
};

export default useDashboardLinks;
