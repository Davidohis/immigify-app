import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify-icon/react";
import { ImmigifyLogo, ShareIcon } from "@/assets";
import { useAppContext } from "@/store/useAppContext";
import { Button, StepperComponent } from "@/components";
import { pageSteps, steps } from "@/constants";
import { fadeInVariants, getCountryFlag, scootLeftRight } from "@/utils";

const EligibilityAgentBot: React.FC = () => {
  const { questions, setQuestions, setShowAgent, currentStep, setCurrentStep } =
    useAppContext();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const checkSteps = currentStep < questions.length - 1;

  const handleStepClick = (stepNumber: number) => {
    setCurrentPage(stepNumber);
  };

  const handleSelect = (selectedAnswer: string) => {
    const updatedQuestions = [...questions];
    updatedQuestions[currentStep].answer = selectedAnswer;

    if (checkSteps) {
      // Update state and move to the next question
      setQuestions(updatedQuestions as []);
      localStorage.setItem(
        "eligibility-agent-answers",
        JSON.stringify({
          currentStep: currentStep + 1,
          agent: updatedQuestions,
        })
      );

      setCurrentStep(currentStep + 1);
    }
  };

  const handleRestart = () => {
    const resetQuestions = steps.map((question) => ({
      ...question,
      answer: "",
    }));
    setQuestions(resetQuestions as []);
    setShowAgent(false);
    setCurrentStep(0);
    localStorage.removeItem("eligibility-agent-answers");
  };

  return (
    <div className="flex flex-col justify-center items-center bg-white rounded-lg  py-6 lg:px-8 px-4 w-full lg:mt-0 mt-2 mb-20">
      <StepperComponent
        steps={pageSteps}
        currentPage={currentPage}
        onStepClick={handleStepClick}
      />
      <div
        className={`lg:mt-0 mt-4 border border-[#DADADA] border-[1px] px-6 py-8 rounded-[30px] lg:w-[700px] ${currentStep === 0 && "lg:mr-20"}`}
      >
        <div className="flex flex-col justify-start items-start">
          <div className="flex flex-row gap-2">
            <img
              src={ImmigifyLogo}
              alt="immigify-icon"
              width={30}
              height={28.75}
            />
            <h6 className="lg:text-[20px] text-[18px] text-primary font-[Poppins-Bold] lg:leading-[35px] leading-[28px] lg:mt-0">
              Hello, Anthony
            </h6>
          </div>
          <div className="flex justify-between items-center w-full lg:mt-0 mt-2">
            <p className="lg:text-[14px] text-[12px] text-[#686868] font-[Poppins-Light] leading-[20px] lg:text-center lg:w-full w-[60%]">
              Keep interacting with your personal immigration assistant
            </p>
            <Button
              className="border-none text-[#262626] w-[100px] bg-white"
              onClick={() => handleRestart()}
              styles={{
                boxShadow: "0px 2px 2px 0px #0000001A",
              }}
            >
              <Icon
                icon="ant-design:reload-outlined"
                height={15}
                style={{
                  color: "#000000",
                }}
              />
              <span className="pl-1 text-[14px] font-[Poppins-Medium]">
                Restart
              </span>
            </Button>
          </div>
        </div>

        <div className="bg-[#FAFAFA] py-6 px-6 rounded-[30px] mt-12">
          {questions[currentStep - 1]?.answer && (
            <>
              <h6 className="text-end text-[14px] text-primary font-[Poppins-Bold] leading-[35px]">
                Anthony
              </h6>
              <div className="bg-white  py-4 px-6 rounded-[10px] w-full mb-4">
                <p className="font-semibold text-primary text-[14px] text-end">
                  {questions[currentStep - 1]?.answer}
                </p>
              </div>
            </>
          )}

          <h6 className="text-[14px] text-primary font-[Poppins-Bold] leading-[35px]">
            Agent
          </h6>

          {currentStep < questions?.length && (
            <AnimatePresence mode="wait">
              <div className="bg-white py-8 px-8 rounded-[10px] w-full  mx-auto">
                <motion.p
                  key={String(questions[currentStep]?.question)}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{
                    duration: 0.5,
                    ease: "anticipate",
                  }}
                  variants={fadeInVariants}
                  className="font-semibold mb-4 lg:text-[16px] text-[14px] text-primary border-[#DEDEDE] border-b-[1px] pb-2"
                >
                  {questions[currentStep]?.question}
                </motion.p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {questions[currentStep].options.map((option, index) => (
                    <motion.div
                      key={index}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      transition={{
                        duration: 0.5,
                        ease: "anticipate",
                      }}
                      variants={scootLeftRight}
                    >
                      <Button
                        disabled={!checkSteps}
                        onClick={() => handleSelect(option)}
                        className="border lg:px-6 px-4 text-[14px] border-[#CCCCCC] text-[#262626] bg-white"
                      >
                        {option}
                        {getCountryFlag(option)}
                      </Button>
                    </motion.div>
                  ))}

                  {currentStep === 1 && (
                    <Button className="ml-1 w-auto px-[16px] h-[40px] rounded-[8px] bg-primary text-white">
                      <Icon
                        icon="tabler:search"
                        height={18}
                        style={{
                          color: "white",
                        }}
                      />
                    </Button>
                  )}

                  {currentStep === 2 && (
                    <div className="flex lg:items-center lg:flex-row flex-col  mt-4 w-full">
                      <span className=" text-primary text-[14px] w-[70%]">
                        Occupation Not Listed above?
                      </span>
                      <div className="w-full flex justify-between items-center">
                        <input
                          type="text"
                          placeholder="Type in your occupation"
                          className="flex-grow outline-none text-primary placeholder-[#A6A6A6] text-[14px] border-b border-[#BCBCBC]"
                        />
                        <Button className="ml-2 w-auto px-[8px] h-[28px] rounded-[8px] bg-primary text-white">
                          <img
                            src={ShareIcon}
                            alt="share-outline"
                            width={18}
                            height={18}
                          />
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </AnimatePresence>
          )}
        </div>
      </div>
    </div>
  );
};

export default EligibilityAgentBot;
