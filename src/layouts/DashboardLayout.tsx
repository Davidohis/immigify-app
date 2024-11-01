import React, { ReactElement, cloneElement } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { fadeInVariants, scootInOut } from "@/utils";
import { useLocation } from "react-router-dom";
import { Header, Sidebar } from "@/components";

const DashboardLayout = ({ component }: { component: ReactElement }) => {
  const { pathname } = useLocation();

  return (
    <div className="overflow-hidden">
      <Header />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        transition={{ duration: 1 }}
        className="w-full h-screen bg-white flex"
      >
        <Sidebar />

        <div className="bg-white flex-1 overflow-hidden flex flex-col pb-20">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={pathname}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex-1 overflow-x-hidden"
              transition={{
                duration: 1,
                ease: "anticipate",
              }}
              variants={scootInOut}
            >
              {cloneElement(component, {})}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

DashboardLayout.Header = ({ content }: { content?: ReactElement }) => {
  return <>{content}</>;
};

export default DashboardLayout;
