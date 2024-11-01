export const scootLeftRight = {
  hidden: { x: -50, opacity: 0, scale: 0 },
  visible: { x: 0, opacity: 1, scale: 1 },
  exit: { x: -50, opacity: 0, scale: 0 },
};

export const sidebarVariants = {
  visible: { width: "259px", paddingLeft: "12px", paddingRight: "24px" },
  visibleCollapsed: { width: "80px", paddingLeft: "6px", paddingRight: "18px" },
  hidden: { width: "0px" },
};

export const fadeInVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
  exiting: {
    opacity: 0,
    x: 1200,
  },
};

export const slideModalInVariants = {
  visible: { right: "-100%", opacity: 1 },
  hidden: { right: "-200%", opacity: 0 },
  exit: { right: "-200%", opacity: 0 },
};

export const slideTopBottomVariants = {
  visible: { top: "50%", opacity: 1 },
  hidden: { top: "-100%", opacity: 0 },
  exit: { top: "100%", opacity: 0 },
};

export const scootSearchBoxInOut = {
  hidden: { x: -500, opacity: 0 },
  visible: { x: 0, opacity: 1 },
  exit: { x: -500, opacity: 0 },
};
export const scootInOut = {
  hidden: { y: -10, opacity: 0 },
  visible: { y: 0, opacity: 1 },
  exit: { y: -10, opacity: 0 },
};

export const revealInOut = {
  hidden: {
    height: "0",
  },
  visible: {
    height: "100%",
  },
  exit: {
    height: "0",
  },
};