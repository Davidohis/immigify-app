import React from "react";

const HomePage = React.lazy(() => import("./Home"));
const EligibilityAgentPage = React.lazy(() => import("./EligibilityAgent"));

export { HomePage, EligibilityAgentPage };
