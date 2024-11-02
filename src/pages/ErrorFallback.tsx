import { Button } from "@/components";
import {
  DASHBOARD_ELIGIBILITY_ROUTE,
} from "@/constants/paths";
import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorFallbackPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-[#000] text-white">
      <p className="text-xl font-medium">
        <span className="border-r border-white font-normal mr-2 pr-2">404</span>
        Page not found
      </p>

      <Button
        className="border mt-10"
        onClick={() => navigate(DASHBOARD_ELIGIBILITY_ROUTE)}
      >
        Go Home
      </Button>
    </div>
  );
};

export default ErrorFallbackPage;
