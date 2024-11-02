import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "@iconify-icon/react";
import { fadeInVariants, scootSearchBoxInOut } from "@/utils";
import { DashboardLogo, NotificationIcon } from "@/assets";

const Header = () => {
  return (
    <header
      className="flex justify-between items-center pl-6 pr-10 py-0 gap-24 bg-white overflow-hidden h-[80px] mb-[5px] bg-white"
      style={{
        boxShadow: "0px 2px 6px 0px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="w-full flex items-center justify-between">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{
            delay: 0.7,
          }}
          variants={fadeInVariants}
        >
          <img src={DashboardLogo} alt="app-icon" width={152.21} height={70} />
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex justify-center items-center gap-8"
            transition={{
              duration: 0.5,
              ease: "anticipate",
            }}
            variants={scootSearchBoxInOut}
          >
            <div className="flex items-center gap-6 justify-end">
              <button className="admin-img hover:scale-[1.08] transition-all flex items-center bell-icon-btn">
                <img
                  src={NotificationIcon}
                  alt="app-icon"
                  width={25}
                  height={25}
                />
              </button>
              <div className="flex items-center gap-1">
                <div className="py-1 px-[10px] rounded-[20px] bg-primary text-white text-[16px] font-[Poppins-Bold]">
                  A
                </div>
                <Icon
                  icon="iconamoon:arrow-down-2-bold"
                  height={25}
                  style={{
                    color: "#000000",
                  }}
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
