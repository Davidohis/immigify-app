import React from "react";

const ErrorFallbackPage: React.FC = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-[#000] text-white">
      <p className="text-xl font-medium">
        <span className="border-r border-white font-normal mr-2 pr-2">404</span>
        Page not found
      </p>
    </div>
  );
};

export default ErrorFallbackPage;
