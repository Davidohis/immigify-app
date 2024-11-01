import { pageSteps } from "@/constants";
import React from "react";

const StepProgress: React.FC = () => {
  const currentStep = 0
  return (
    <div className="flex justify-center items-center space-x-4">
      {pageSteps.map((step, index) => (
        <React.Fragment key={index}>
          {/* Step Circle */}
          <div className="flex flex-col items-center">
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full 
                ${index < currentStep ? "bg-blue-500 text-white" : ""} 
                ${index === currentStep ? "border-2 border-blue-500" : "bg-gray-200"}
              `}
            >
              {index < currentStep ? (
                <span className="text-white">{index + 1}</span>
              ) : index === currentStep ? (
                <span className="w-2 h-2 rounded-full bg-blue-500" />
              ) : (
                index + 1
              )}
            </div>
            <span
              className={`text-sm font-medium mt-2 ${
                index <= currentStep ? "text-blue-500" : "text-gray-400"
              }`}
            >
              {step.label}
            </span>
          </div>

          {/* Line between steps, except after the last step */}
          {index < pageSteps.length - 1 && (
            <div
              className={`flex-1 h-[20px] ${
                index < currentStep ? "bg-[red]" : "bg-[green]"
              }`}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default StepProgress;


