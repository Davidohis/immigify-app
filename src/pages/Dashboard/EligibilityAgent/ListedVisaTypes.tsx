import React from "react";
import { Icon } from "@iconify-icon/react";
import { eligibilityAgent } from "@/constants";
import { useAppContext } from "@/store/useAppContext";

export default function ListedVisaTypes() {
  const { currentStep } = useAppContext();
  const data =
    currentStep === 3
      ? eligibilityAgent.filter((item) => item.key === currentStep)
      : eligibilityAgent;

  return (
    <div
      className="flex justify-start items-start h-screen bg-white w-full hidden lg:block"
      style={{
        boxShadow: "0px -4px 12px 0px rgba(0, 0, 0, 0.05)",
      }}
    >
      <div className="p-6 pt-10">
        <div className="flex items-center mb-2">
          <Icon
            icon="stash:shield-check"
            height={25}
            style={{
              color: "#000000",
            }}
          />
          <h2 className="text-[18px] font-[Poppins-SemiBold] pl-1">
            Eligibility Agent
          </h2>
        </div>
        <p className="text-primary mb-6 font-[Poppins]">
          Based on your profile, Below are the listed Visa Type you are eligible
          for
        </p>

        {data?.map(({ label, options }) => (
          <div
            className="bg-white rounded-[20px] p-6 mb-6"
            style={{
              boxShadow: "0px 3px 8px 0px rgba(0, 0, 0, 0.15)",
            }}
          >
            <h3 className="text-[14px] font-[Poppins-SemiBold] text-primary">
              {label}
            </h3>
            <p className="text-primary font-[Poppins] mt-2 text-[14px]">
              Key Eligibility Criteria Met:
            </p>

            <ul className="text-[14px] list-disc list-inside font-[Poppins] text-primary mt-2 space-y-1">
              {options.map((text) => (
                <li>{text}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
