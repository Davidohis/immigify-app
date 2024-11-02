import { ImmigifyLogo } from "@/assets";
import { Button } from "@/components";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect } from "react";
import EligibilityAgentBot from "./AgentBot";
import { fadeInVariants, scootInOut, slideModalInVariants } from "@/utils";
import { useAppContext } from "@/store/useAppContext";
import ListedVisaTypes from "./ListedVisaTypes";

export default function EligibilityAgent() {
  const { showAgent, questions, setShowAgent, currentStep } = useAppContext();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      {showAgent || questions[0]?.answer ? (
        <div className="flex">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep !== 0 ? currentStep : String(showAgent)}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{
                duration: 0.5,
                ease: "anticipate",
              }}
              variants={currentStep !== 0 ? slideModalInVariants : scootInOut}
              className={`w-full ${currentStep === 0 && "lg:mx-40"}`}
            >
              <EligibilityAgentBot />
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={String(currentStep)}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{
                duration: 0.6,
                ease: "anticipate",
              }}
              variants={slideModalInVariants}
              className={currentStep !== 0 ? "block grow" : "hidden"}
            >
              <ListedVisaTypes />
            </motion.div>
          </AnimatePresence>
        </div>
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            key={String(showAgent)}
            initial="hidden"
            animate="visible"
            transition={{
              delay: 0.7,
            }}
            variants={fadeInVariants}
          >
            <div className="flex flex-col justify-center items-center mt-28 lg:mt-32 lg:mr-48">
              <img
                src={ImmigifyLogo}
                alt="immigify-icon"
                width={68}
                height={65.17}
              />
              <h6 className="lg:text-[28px] text-[22px] text-primary font-[Poppins-Bold] lg:leading-[54px] leading-[28px] lg:mt-0 mt-2">
                Hello, Anthony
              </h6>
              <p className="lg:text-[18px] text-[14px] text-[#686868] font-[Poppins-Light] lg:leading-[20px] text-center">
                Welcome to your personal immigration assistant
              </p>

              <Button
                className="w-[240px] rounded-[30px] mt-14 font-[Poppins-SemiBold] text-[16px]"
                onClick={() => setShowAgent(true)}
              >
                Get Started
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
}
