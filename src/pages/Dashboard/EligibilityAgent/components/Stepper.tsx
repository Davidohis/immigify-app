import React, { useRef } from "react";
import { Icon } from "@iconify-icon/react";


interface Step {
  number: number;
  label: string;
}

interface StepperProps {
  steps: Step[];
  currentStep: number;
  onStepClick: (stepNumber: number) => void;
}

const Stepper: React.FC<StepperProps> = ({
  steps,
  currentStep,
  onStepClick,
}) => {
  const scrollAreaRef = useRef<HTMLDivElement | null>(null);

  const scrollToCurrentStep = (stepIndex: number) => {
    const scrollArea = scrollAreaRef.current;
    if (scrollArea && scrollArea.children.length) {
      const stepElement = scrollArea.children[stepIndex] as HTMLElement;

      if (stepElement) {
        stepElement.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      }
    }
  };

  React.useEffect(() => {
    scrollToCurrentStep(currentStep - 1);
  }, [currentStep]);

  return (
    <>
      <div className="w-full whitespace-nowrap rounded-md">
        <div className="flex items-center p-4" ref={scrollAreaRef}>
          {steps.map((step, index) => (
            <div key={step.number} className="flex flex-col items-center">
              <div className="flex items-center">
                <div className="flex flex-col items-center justify-center">
                  <div
                    onClick={() => onStepClick(step.number)}
                    className={`
                      w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold
                      ${
                        step.number === currentStep
                          ? "bg-primary text-primary-foreground"
                          : step.number < currentStep
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-secondary-foreground"
                      }
                    `}
                  >
                    {step.number < currentStep ? (
                      <Icon
                        icon="ant-design:reload-outlined"
                        height={15}
                        style={{
                          color: "white",
                        }}
                      />
                    ) : (
                      step.number
                    )}
                  </div>
                  <div
                    className={`
                      mt-2 text-xs text-center w-20
                      ${
                        step.number === currentStep
                          ? "text-black font-bold"
                          : "text-black"
                      }`}
                  >
                    {step.label}
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`
                      w-16 h-[2px] mb-5 -mx-5
                      ${step.number <= currentStep ? "bg-primary" : "bg-slate-200"}
                    `}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Stepper;
