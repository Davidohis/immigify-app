import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { openInNewTab, scootLeftRight, sidebarVariants } from "@/utils";
import classNames from "classnames";
import { useLocation, useNavigate } from "react-router-dom";
import { useDashboardLink } from "@/hooks";

const Sidebar = () => {
  const { navLinks } = useDashboardLink();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleNavigateRoute = (label: string, to: string) => {
    if (label === "Support") {
      openInNewTab(to);
    } else {
      navigate(to);
    }
  };

  return (
    <motion.aside
      initial="hidden"
      animate={"visible"}
      transition={{
        ease: "backInOut",
        duration: 1,
      }}
      className={classNames(
        "pt-14 text-white h-full flex w-[240px] flex-col justify-center items-center  scroll-styled relative z-[5] overflow-x-hidden scroll-styled-grey border-r-[1px] border-white bg-white hidden lg:block"
      )}
      variants={sidebarVariants}
      style={{
        boxShadow: "2px 0px 12px 0px rgba(0, 0, 0, 0.02)",
      }}
    >
      <div className="flex justify-between flex-col grow">
        {Object.entries(navLinks).map(([key, values]) => (
          <div key={key}>
            {values
              .filter(({ display }) => display)
              .map(({ label, icon: Icon, to }) => (
                <div
                  key={label}
                  className={classNames("mb-2 pb-2", {
                    "pb-[20px]": key === "bottom",
                  })}
                >
                  <div className="flex flex-col gap-4">
                    <motion.div
                      onClick={() => handleNavigateRoute(label, to)}
                      title={""}
                      className={classNames(
                        "flex justify-start items-center gap-2 z-[1] py-[10px] px-4 rounded-[6px] cursor-pointer transition-all duration-700 relative w-full",
                        {
                          "bg-[#FAFAFA]": !!pathname.match(to),
                          "hover:bg-[#cbc8c840]": !pathname.match(to),
                        }
                      )}
                    >
                      <motion.span layout>
                        <Icon active={!!pathname.match(to)} />
                      </motion.span>

                      <AnimatePresence mode="wait">
                        <motion.div
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          variants={scootLeftRight}
                        >
                          <span
                            className={classNames(
                              "text-[16px] text-[#000000] font-[Poppins] whitespace-nowrap transition-all duration-500",
                              {
                                "!text-primary": !!pathname.match(to),
                                "!font-bold": !!pathname.match(to),
                              }
                            )}
                          >
                            {label}
                          </span>
                        </motion.div>
                      </AnimatePresence>
                    </motion.div>
                  </div>
                </div>
              ))}
          </div>
        ))}
      </div>
    </motion.aside>
  );
};

export default Sidebar;
