"use client";

import React from "react";
import Router from "@/routes";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallbackPage } from "@/pages";
import { AppProvider } from "@/store/AppContext";

function App() {
  return (
    <ErrorBoundary fallback={<ErrorFallbackPage />}>
      <AppProvider>
        <Router />
      </AppProvider>
    </ErrorBoundary>
  );
}

export default App;
