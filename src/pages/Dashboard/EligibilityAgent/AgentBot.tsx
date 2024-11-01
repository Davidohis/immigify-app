import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify-icon/react";
import StepProgress from "./components/StepProgress";
import { ImmigifyLogo, ShareIcon } from "@/assets";
import { useAppContext } from "@/store/useAppContext";
import { Button } from "@/components";
import { steps } from "@/constants";
import { fadeInVariants, scootLeftRight } from "@/utils";
import Stepper from "./components/Stepper";

interface Step {
  number: number;
  label: string;
}
const EligibilityAgentBot: React.FC = () => {
  const { questions, setQuestions, setShowAgent, currentStep, setCurrentStep } =
    useAppContext();

  const checkSteps = currentStep < questions.length - 1;

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
    } else {
      alert("You have completed all questions!");
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

  console.log(">>>>educationLevel", questions);

  const handleStepClick = (stepNumber: number) => {
    setCurrentStep(stepNumber);
  };

  const steps: Step[] = [
    { number: 1, label: "test" },
    { number: 2, label: "test" },
    { number: 3, label: "test" },
    { number: 4, label: "test" },
  ];
  return (
    <div className="flex flex-col justify-center items-center bg-white rounded-lg  py-6 px-8 w-full">
      {/* <StepProgress /> */}

  <Stepper
        steps={steps}
        currentStep={currentStep}
        onStepClick={handleStepClick}
      />
      <div
        className={
          "border border-[#DADADA] border-[1px] px-6 py-8 rounded-[30px] lg:w-[700px]"
        }
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
          <div className="flex justify-between items-center w-full">
            <p className="lg:text-[14px] text-[12px] text-[#686868] font-[Poppins-Light] lg:leading-[20px] text-center">
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
              <h6 className="text-end lg:text-[14px] text-[18px] text-primary font-[Poppins-Bold] lg:leading-[35px] leading-[28px]">
                Anthony
              </h6>
              <div className="bg-white  py-4 px-6 rounded-[10px] w-full mb-4">
                <p className="font-semibold text-primary text-[14px] text-end">
                  {questions[currentStep - 1]?.answer}
                </p>
              </div>
            </>
          )}

          <h6 className="lg:text-[14px] text-[18px] text-primary font-[Poppins-Bold] lg:leading-[35px] leading-[28px]">
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
                  className="font-semibold mb-4 text-primary border-[#DEDEDE] border-b-[1px] pb-2"
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
                        className="border text-[14px] border-[#CCCCCC] text-[#262626] bg-white"
                      >
                        {option}
                      </Button>
                    </motion.div>
                  ))}

                  {currentStep === 2 && (
                    <div className="flex items-center  mt-4 w-full">
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
