import { GhanaFlag, NigeriaFlag, SouthAfricaFlag } from "@/assets";
import React from "react";

export const getCountryFlag = (type: string) => {
  switch (type) {
    case "Nigeria":
      return <img className="ml-2" src={NigeriaFlag} width={20} height={20} />;
    case "South Africa.":
      return (
        <img className="ml-2" src={SouthAfricaFlag} width={20} height={20} />
      );
    case "Ghana":
      return <img className="ml-2" src={GhanaFlag} width={20} height={20} />;
    default:
      return;
  }
};
