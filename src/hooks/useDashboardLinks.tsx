import {
  DocumentIcon,
  EligibilityIcon,
  FormIcon,
  HistoryIcon,
  HomeIcon,
  InterviewIcon,
  SettingsIcon,
  SubscriptionIcon,
} from "@/assets";
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
        short: "Home",
        icon: HomeIcon,
        to: DASHBOARD_HOME_ROUTE,
      },
      {
        label: "Eligibility Agent",
        short: "E-Agent",
        icon: EligibilityIcon,
        to: DASHBOARD_ELIGIBILITY_ROUTE,
      },
      {
        label: "Document Agent",
        short: "D-Agent",
        icon: DocumentIcon,
        to: DASHBOARD_DOCUMENT_ROUTE,
      },
      {
        label: "Form-filling Agent",
        short: "F-Agent",
        icon: FormIcon,
        to: DASHBOARD_FORMAGENT_ROUTE,
      },

      {
        label: "Interview Prep Agent",
        short: "I-Agent",
        icon: InterviewIcon,
        to: DASHBOARD_INTERVIEW_ROUTE,
      },
      {
        label: "Subscription",
        short: "Sub",
        icon: SubscriptionIcon,
        to: DASHBOARD_SUBSCRIPTION_ROUTE,
      },
      {
        label: "History",
        short: "History",
        icon: HistoryIcon,
        to: DASHBOARD_HISTORY_ROUTE,
      },
      {
        label: "Settings",
        short: "Setting",
        icon: SettingsIcon,
        to: DASHBOARD_SETTINGS_ROUTE,
      },
    ],
  };

  return {
    navLinks,
  };
};

export default useDashboardLinks;
