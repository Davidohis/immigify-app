import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { fadeInVariants, scootSearchBoxInOut } from "@/utils";
import { DashboardLogo, NotificationIcon } from "@/assets";

const Header = () => {

  return (
    <header
      className="flex justify-between items-center pl-6 pr-10 py-0 gap-24 bg-white overflow-hidden h-[90px] mb-[5px] bg-white"
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
                  width={30}
                  height={30}
                />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
