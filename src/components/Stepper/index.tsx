import React, { useRef } from "react";
import { Icon } from "@iconify-icon/react";
import { StepperProps } from "@/types";

const Stepper: React.FC<StepperProps> = ({
  steps,
  currentPage,
  onStepClick,
}) => {
  const scrollAreaRef = useRef<HTMLDivElement | null>(null);

  const scrollToCurrentPage = (stepIndex: number) => {
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
    scrollToCurrentPage(currentPage - 1);
  }, [currentPage]);

  return (
    <div className="w-full whitespace-nowrap rounded-md overflow-y-hidden">
      <div className="flex items-center lg:px-4 pb-6" ref={scrollAreaRef}>
        {steps.map((step, index) => (
          <div key={step.number} className="flex flex-col items-center">
            <div className="flex items-center">
              <div className="flex flex-col items-center justify-center">
                <div
                  onClick={() => onStepClick(step.number)}
                  className={`
                      w-14 h-14 rounded-full flex items-center justify-center text-sm font-bold
                      ${
                        step.number === currentPage
                          ? "bg-[#F3F3F3] text-primary"
                          : step.number < currentPage
                            ? "bg-[#F3F3F3] text-primary"
                            : "bg-white text-[#F3F3F3]"
                      }
                    `}
                >
                  <Icon
                    icon="la:dot-circle"
                    height={45}
                    style={{
                      color:
                        step.number === currentPage ? "#000000" : "#F3F3F3",
                    }}
                  />
                </div>
                <div className="lg:mt-2 mt-4 text-[14px]  lg:font-[Poppins-SemiBold] font-[Poppins-Medium] text-center w-16">
                  {step.label}
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="lg:w-32 w-24 h-[2px] lg:mb-8 mb-10 -mx-[8px] bg-[#F3F3F3]" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stepper;
