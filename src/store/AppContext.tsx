// AppContext.tsx
import React, { createContext, useState, ReactNode, useEffect } from "react";
import { steps } from "@/constants";
import { AppContextType } from "@/types";

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [showAgent, setShowAgent] = useState<boolean>(false);
  const [questions, setQuestions] = useState(steps);
  const [currentStep, setCurrentStep] = useState(0);

  // Load saved answers from localStorage on initial render
  useEffect(() => {
    const savedAnswers = JSON.parse(
      localStorage.getItem("eligibility-agent-answers") || "{}"
    );
    if (savedAnswers) {
      setQuestions(savedAnswers?.agent ?? steps);
      setCurrentStep(savedAnswers?.currentStep ?? 0);
    }
  }, [setQuestions]);

  return (
    <AppContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        showAgent,
        setShowAgent,
        questions,
        setQuestions,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
