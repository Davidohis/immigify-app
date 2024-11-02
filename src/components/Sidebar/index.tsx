import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { scootLeftRight, sidebarVariants } from "@/utils";
import classNames from "classnames";
import { useLocation, useNavigate } from "react-router-dom";
import { useDashboardLink } from "@/hooks";

const Sidebar = () => {
  const { navLinks } = useDashboardLink();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <>
      {/* Desktop Navigation */}
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
              {values.map(({ label, icon: Icon, to }) => (
                <div
                  key={label}
                  className={classNames("mb-2 pb-2", {
                    "pb-[20px]": key === "bottom",
                  })}
                >
                  <div className="flex flex-col gap-4">
                    <motion.div
                      onClick={() => navigate(to)}
                      title={""}
                      className={classNames(
                        "flex justify-between items-center z-[1] rounded-[6px] cursor-pointer transition-all duration-700 relative w-full"
                      )}
                    >
                      <div
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
                      </div>

                      <div
                        className={classNames({
                          "border-r-[3px] border-primary h-[26px] rounded-[30px]":
                            !!pathname.match(to),
                        })}
                      />
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </motion.aside>

      {/* Mobile Navigation */}
      <motion.div
        initial="hidden"
        animate={"visible"}
        transition={{
          ease: "backInOut",
          duration: 1,
        }}
        className="fixed bottom-0 left-0 right-0 bg-white shadow-lg lg:hidden block z-50"
      >
        {Object.entries(navLinks).map(([key, values]) => (
          <div
            key={key}
            className="flex justify-between items-center px-4 py-2 cursor-pointer"
          >
            {values.slice(0, 5).map(({ short, icon: Icon, to }) => (
              <div
                key={short}
                onClick={() => navigate(to)}
                className="flex flex-col  items-center cursor-pointer"
              >
                <motion.span layout className="cursor-pointer">
                  <Icon active={!!pathname.match(to)} />
                </motion.span>

                <div className="flex flex-col items-center text-primary hover:text-blue-600 mt-2">
                  <motion.span
                    layout
                    className={classNames(`text-xs`, {
                      "font-[Poppins-SemiBold]": !!pathname.match(to),
                      "font-[Poppins]": !pathname.match(to),
                    })}
                  >
                    {short}
                  </motion.span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default Sidebar;
