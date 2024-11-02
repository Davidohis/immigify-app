import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { PageLoader } from "@/components";
import { EligibilityAgentPage, ErrorFallbackPage, HomePage } from "@/pages";
import { DashboardLayout } from "@/layouts";
import {
  DASHBOARD_ELIGIBILITY_ROUTE,
  DASHBOARD_HOME_ROUTE,
} from "@/constants/paths";

const Router = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route element={<Navigate to={DASHBOARD_ELIGIBILITY_ROUTE} />} path={"/"} />
        <Route
          path={DASHBOARD_HOME_ROUTE}
          element={<DashboardLayout component={<HomePage />} />}
        />
        <Route
          path={DASHBOARD_ELIGIBILITY_ROUTE}
          element={<DashboardLayout component={<EligibilityAgentPage />} />}
        />
        <Route element={<ErrorFallbackPage />} path="/*" />
      </Routes>
    </Suspense>
  );
};

export default Router;
