import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { scootLeftRight } from "@/utils";
import classNames from "classnames";
export { default as DashboardLogo } from "./svg/logo.svg";
export { default as ImmigifyLogo } from "./svg/logo-icon.svg";
export { default as NotificationIcon } from "./svg/BellOutline.svg";
export { default as ShareIcon } from "./svg/share-icon.svg";

export const HomeIcon = ({ active }: { active: boolean }) => {
  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        initial="hidden"
        key={String(active)}
        animate="visible"
        variants={scootLeftRight}
        exit="exit"
        transition={{
          duration: 1,
          ease: "backInOut",
        }}
      >
        {active ? (
          <svg
            width="20"
            height="20"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.75 15L6.25 12.5M6.25 12.5L15 3.75L23.75 12.5M6.25 12.5V25C6.25 25.3315 6.3817 25.6495 6.61612 25.8839C6.85054 26.1183 7.16848 26.25 7.5 26.25H11.25M23.75 12.5L26.25 15M23.75 12.5V25C23.75 25.3315 23.6183 25.6495 23.3839 25.8839C23.1495 26.1183 22.8315 26.25 22.5 26.25H18.75M11.25 26.25C11.5815 26.25 11.8995 26.1183 12.1339 25.8839C12.3683 25.6495 12.5 25.3315 12.5 25V20C12.5 19.6685 12.6317 19.3505 12.8661 19.1161C13.1005 18.8817 13.4185 18.75 13.75 18.75H16.25C16.5815 18.75 16.8995 18.8817 17.1339 19.1161C17.3683 19.3505 17.5 19.6685 17.5 20V25C17.5 25.3315 17.6317 25.6495 17.8661 25.8839C18.1005 26.1183 18.4185 26.25 18.75 26.25M11.25 26.25H18.75"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg
            width="20"
            height="20"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.75 15L6.25 12.5M6.25 12.5L15 3.75L23.75 12.5M6.25 12.5V25C6.25 25.3315 6.3817 25.6495 6.61612 25.8839C6.85054 26.1183 7.16848 26.25 7.5 26.25H11.25M23.75 12.5L26.25 15M23.75 12.5V25C23.75 25.3315 23.6183 25.6495 23.3839 25.8839C23.1495 26.1183 22.8315 26.25 22.5 26.25H18.75M11.25 26.25C11.5815 26.25 11.8995 26.1183 12.1339 25.8839C12.3683 25.6495 12.5 25.3315 12.5 25V20C12.5 19.6685 12.6317 19.3505 12.8661 19.1161C13.1005 18.8817 13.4185 18.75 13.75 18.75H16.25C16.5815 18.75 16.8995 18.8817 17.1339 19.1161C17.3683 19.3505 17.5 19.6685 17.5 20V25C17.5 25.3315 17.6317 25.6495 17.8661 25.8839C18.1005 26.1183 18.4185 26.25 18.75 26.25M11.25 26.25H18.75"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export const EligibilityIcon = ({ active }: { active: boolean }) => {
  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        initial="hidden"
        key={String(active)}
        animate="visible"
        variants={scootLeftRight}
        exit="exit"
        transition={{
          duration: 1,
          ease: "backInOut",
        }}
      >
        {active ? (
          <svg
            width="20"
            height="20"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.3125 6.25C21.9837 6.25 18.74 5.07125 15.5625 2.6875C15.4002 2.56579 15.2028 2.5 15 2.5C14.7972 2.5 14.5998 2.56579 14.4375 2.6875C11.26 5.07125 8.01625 6.25 4.6875 6.25C4.43886 6.25 4.2004 6.34877 4.02459 6.52459C3.84877 6.7004 3.75 6.93886 3.75 7.1875V13.75C3.75 20.0012 7.4475 24.595 14.6562 27.435C14.8771 27.5221 15.1229 27.5221 15.3438 27.435C22.5525 24.595 26.25 20 26.25 13.75V7.1875C26.25 6.93886 26.1512 6.7004 25.9754 6.52459C25.7996 6.34877 25.5611 6.25 25.3125 6.25ZM20.9463 11.6288L13.4462 18.5037C13.2681 18.6669 13.0339 18.7549 12.7924 18.7496C12.5509 18.7442 12.3207 18.6459 12.15 18.475L9.025 15.35C8.93289 15.2642 8.85901 15.1607 8.80777 15.0457C8.75653 14.9307 8.72898 14.8065 8.72676 14.6807C8.72454 14.5548 8.7477 14.4297 8.79485 14.313C8.842 14.1963 8.91218 14.0902 9.0012 14.0012C9.09023 13.9122 9.19627 13.842 9.313 13.7948C9.42974 13.7477 9.55477 13.7245 9.68065 13.7268C9.80653 13.729 9.93067 13.7565 10.0457 13.8078C10.1607 13.859 10.2642 13.9329 10.35 14.025L12.8412 16.515L19.6788 10.2462C19.8621 10.0782 20.1047 9.9898 20.3532 10.0006C20.6016 10.0114 20.8357 10.1204 21.0037 10.3038C21.1718 10.4871 21.2602 10.7297 21.2494 10.9782C21.2386 11.2266 21.1296 11.4607 20.9463 11.6288Z"
              fill="black"
            />
          </svg>
        ) : (
          <svg
            width="20"
            height="20"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.3125 6.25C21.9837 6.25 18.74 5.07125 15.5625 2.6875C15.4002 2.56579 15.2028 2.5 15 2.5C14.7972 2.5 14.5998 2.56579 14.4375 2.6875C11.26 5.07125 8.01625 6.25 4.6875 6.25C4.43886 6.25 4.2004 6.34877 4.02459 6.52459C3.84877 6.7004 3.75 6.93886 3.75 7.1875V13.75C3.75 20.0012 7.4475 24.595 14.6562 27.435C14.8771 27.5221 15.1229 27.5221 15.3438 27.435C22.5525 24.595 26.25 20 26.25 13.75V7.1875C26.25 6.93886 26.1512 6.7004 25.9754 6.52459C25.7996 6.34877 25.5611 6.25 25.3125 6.25ZM20.9463 11.6288L13.4462 18.5037C13.2681 18.6669 13.0339 18.7549 12.7924 18.7496C12.5509 18.7442 12.3207 18.6459 12.15 18.475L9.025 15.35C8.93289 15.2642 8.85901 15.1607 8.80777 15.0457C8.75653 14.9307 8.72898 14.8065 8.72676 14.6807C8.72454 14.5548 8.7477 14.4297 8.79485 14.313C8.842 14.1963 8.91218 14.0902 9.0012 14.0012C9.09023 13.9122 9.19627 13.842 9.313 13.7948C9.42974 13.7477 9.55477 13.7245 9.68065 13.7268C9.80653 13.729 9.93067 13.7565 10.0457 13.8078C10.1607 13.859 10.2642 13.9329 10.35 14.025L12.8412 16.515L19.6788 10.2462C19.8621 10.0782 20.1047 9.9898 20.3532 10.0006C20.6016 10.0114 20.8357 10.1204 21.0037 10.3038C21.1718 10.4871 21.2602 10.7297 21.2494 10.9782C21.2386 11.2266 21.1296 11.4607 20.9463 11.6288Z"
              fill="black"
            />
          </svg>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export const DocumentIcon = ({ active }: { active: boolean }) => {
  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        initial="hidden"
        key={String(active)}
        animate="visible"
        variants={scootLeftRight}
        exit="exit"
        transition={{
          duration: 1,
          ease: "backInOut",
        }}
      >
        {active ? (
          <svg
            width="20"
            height="20"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.2875 13.7875C21.3796 13.7017 21.4535 13.5982 21.5047 13.4832C21.556 13.3682 21.5835 13.244 21.5857 13.1182C21.588 12.9923 21.5648 12.8672 21.5177 12.7505C21.4705 12.6338 21.4003 12.5277 21.3113 12.4387C21.2223 12.3497 21.1162 12.2795 20.9995 12.2323C20.8828 12.1852 20.7577 12.162 20.6318 12.1643C20.506 12.1665 20.3818 12.194 20.2668 12.2453C20.1518 12.2965 20.0483 12.3704 19.9625 12.4625L13.75 18.675L11.2875 16.2125C11.1098 16.0469 10.8747 15.9567 10.6318 15.961C10.389 15.9653 10.1572 16.0637 9.98547 16.2355C9.81371 16.4072 9.71532 16.639 9.71103 16.8818C9.70675 17.1247 9.7969 17.3598 9.9625 17.5375L13.0875 20.6625C13.2633 20.8381 13.5016 20.9367 13.75 20.9367C13.9984 20.9367 14.2367 20.8381 14.4125 20.6625L21.2875 13.7875ZM19.9925 5.105C19.9401 4.3969 19.6218 3.73483 19.1016 3.25165C18.5813 2.76847 17.8975 2.49996 17.1875 2.5H12.8125C12.1207 2.50002 11.4532 2.75501 10.9376 3.21621C10.4219 3.67742 10.0944 4.31249 10.0175 5H7.8125C7.06658 5 6.35121 5.29632 5.82376 5.82376C5.29632 6.35121 5 7.06658 5 7.8125V24.6875C5 25.4334 5.29632 26.1488 5.82376 26.6762C6.35121 27.2037 7.06658 27.5 7.8125 27.5H22.1875C22.5568 27.5 22.9226 27.4273 23.2638 27.2859C23.605 27.1446 23.9151 26.9374 24.1762 26.6762C24.4374 26.4151 24.6446 26.105 24.7859 25.7638C24.9273 25.4226 25 25.0568 25 24.6875V7.8125C25 7.44316 24.9273 7.07743 24.7859 6.7362C24.6446 6.39497 24.4374 6.08493 24.1762 5.82376C23.9151 5.5626 23.605 5.35543 23.2638 5.21409C22.9226 5.07275 22.5568 5 22.1875 5H19.9825L19.9925 5.105ZM19.9925 5.12L20 5.3125C20 5.2475 19.9967 5.18333 19.9925 5.12ZM12.8125 8.125H17.1875C18.1625 8.125 19.0213 7.62875 19.5263 6.875H22.1875C22.4361 6.875 22.6746 6.97377 22.8504 7.14959C23.0262 7.3254 23.125 7.56386 23.125 7.8125V24.6875C23.125 24.9361 23.0262 25.1746 22.8504 25.3504C22.6746 25.5262 22.4361 25.625 22.1875 25.625H7.8125C7.56386 25.625 7.3254 25.5262 7.14959 25.3504C6.97377 25.1746 6.875 24.9361 6.875 24.6875V7.8125C6.875 7.56386 6.97377 7.3254 7.14959 7.14959C7.3254 6.97377 7.56386 6.875 7.8125 6.875H10.4737C10.9787 7.62875 11.8375 8.125 12.8125 8.125ZM12.8125 4.375H17.1875C17.4361 4.375 17.6746 4.47377 17.8504 4.64959C18.0262 4.8254 18.125 5.06386 18.125 5.3125C18.125 5.56114 18.0262 5.7996 17.8504 5.97541C17.6746 6.15123 17.4361 6.25 17.1875 6.25H12.8125C12.5639 6.25 12.3254 6.15123 12.1496 5.97541C11.9738 5.7996 11.875 5.56114 11.875 5.3125C11.875 5.06386 11.9738 4.8254 12.1496 4.64959C12.3254 4.47377 12.5639 4.375 12.8125 4.375Z"
              fill="black"
            />
          </svg>
        ) : (
          <svg
            width="20"
            height="20"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.2875 13.7875C21.3796 13.7017 21.4535 13.5982 21.5047 13.4832C21.556 13.3682 21.5835 13.244 21.5857 13.1182C21.588 12.9923 21.5648 12.8672 21.5177 12.7505C21.4705 12.6338 21.4003 12.5277 21.3113 12.4387C21.2223 12.3497 21.1162 12.2795 20.9995 12.2323C20.8828 12.1852 20.7577 12.162 20.6318 12.1643C20.506 12.1665 20.3818 12.194 20.2668 12.2453C20.1518 12.2965 20.0483 12.3704 19.9625 12.4625L13.75 18.675L11.2875 16.2125C11.1098 16.0469 10.8747 15.9567 10.6318 15.961C10.389 15.9653 10.1572 16.0637 9.98547 16.2355C9.81371 16.4072 9.71532 16.639 9.71103 16.8818C9.70675 17.1247 9.7969 17.3598 9.9625 17.5375L13.0875 20.6625C13.2633 20.8381 13.5016 20.9367 13.75 20.9367C13.9984 20.9367 14.2367 20.8381 14.4125 20.6625L21.2875 13.7875ZM19.9925 5.105C19.9401 4.3969 19.6218 3.73483 19.1016 3.25165C18.5813 2.76847 17.8975 2.49996 17.1875 2.5H12.8125C12.1207 2.50002 11.4532 2.75501 10.9376 3.21621C10.4219 3.67742 10.0944 4.31249 10.0175 5H7.8125C7.06658 5 6.35121 5.29632 5.82376 5.82376C5.29632 6.35121 5 7.06658 5 7.8125V24.6875C5 25.4334 5.29632 26.1488 5.82376 26.6762C6.35121 27.2037 7.06658 27.5 7.8125 27.5H22.1875C22.5568 27.5 22.9226 27.4273 23.2638 27.2859C23.605 27.1446 23.9151 26.9374 24.1762 26.6762C24.4374 26.4151 24.6446 26.105 24.7859 25.7638C24.9273 25.4226 25 25.0568 25 24.6875V7.8125C25 7.44316 24.9273 7.07743 24.7859 6.7362C24.6446 6.39497 24.4374 6.08493 24.1762 5.82376C23.9151 5.5626 23.605 5.35543 23.2638 5.21409C22.9226 5.07275 22.5568 5 22.1875 5H19.9825L19.9925 5.105ZM19.9925 5.12L20 5.3125C20 5.2475 19.9967 5.18333 19.9925 5.12ZM12.8125 8.125H17.1875C18.1625 8.125 19.0213 7.62875 19.5263 6.875H22.1875C22.4361 6.875 22.6746 6.97377 22.8504 7.14959C23.0262 7.3254 23.125 7.56386 23.125 7.8125V24.6875C23.125 24.9361 23.0262 25.1746 22.8504 25.3504C22.6746 25.5262 22.4361 25.625 22.1875 25.625H7.8125C7.56386 25.625 7.3254 25.5262 7.14959 25.3504C6.97377 25.1746 6.875 24.9361 6.875 24.6875V7.8125C6.875 7.56386 6.97377 7.3254 7.14959 7.14959C7.3254 6.97377 7.56386 6.875 7.8125 6.875H10.4737C10.9787 7.62875 11.8375 8.125 12.8125 8.125ZM12.8125 4.375H17.1875C17.4361 4.375 17.6746 4.47377 17.8504 4.64959C18.0262 4.8254 18.125 5.06386 18.125 5.3125C18.125 5.56114 18.0262 5.7996 17.8504 5.97541C17.6746 6.15123 17.4361 6.25 17.1875 6.25H12.8125C12.5639 6.25 12.3254 6.15123 12.1496 5.97541C11.9738 5.7996 11.875 5.56114 11.875 5.3125C11.875 5.06386 11.9738 4.8254 12.1496 4.64959C12.3254 4.47377 12.5639 4.375 12.8125 4.375Z"
              fill="black"
            />
          </svg>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export const FormIcon = ({ active }: { active: boolean }) => {
  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        initial="hidden"
        key={String(active)}
        animate="visible"
        variants={scootLeftRight}
        exit="exit"
        transition={{
          duration: 1,
          ease: "backInOut",
        }}
      >
        {active ? (
          <svg
            width="20"
            height="20"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26.3 15.1625C26.475 15.1625 26.6375 15.2375 26.775 15.375L28.375 16.975C28.65 17.2375 28.65 17.675 28.375 17.9375L27.125 19.1875L24.5625 16.625L25.8125 15.375C25.95 15.2375 26.125 15.1625 26.3 15.1625ZM23.8375 17.35L26.4 19.9125L18.825 27.5H16.25V24.925L23.8375 17.35ZM13.75 23.75L11.25 26.25H6.25C4.875 26.25 3.75 25.125 3.75 23.75V6.25C3.75 4.875 4.875 3.75 6.25 3.75H11.475C12 2.3 13.375 1.25 15 1.25C16.625 1.25 18 2.3 18.525 3.75H23.75C25.125 3.75 26.25 4.875 26.25 6.25V11.25L23.75 13.75V6.25H21.25V8.75H8.75V6.25H6.25V23.75H13.75ZM15 3.75C14.3125 3.75 13.75 4.3125 13.75 5C13.75 5.6875 14.3125 6.25 15 6.25C15.6875 6.25 16.25 5.6875 16.25 5C16.25 4.3125 15.6875 3.75 15 3.75Z"
              fill="black"
            />
          </svg>
        ) : (
          <svg
            width="20"
            height="20"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26.3 15.1625C26.475 15.1625 26.6375 15.2375 26.775 15.375L28.375 16.975C28.65 17.2375 28.65 17.675 28.375 17.9375L27.125 19.1875L24.5625 16.625L25.8125 15.375C25.95 15.2375 26.125 15.1625 26.3 15.1625ZM23.8375 17.35L26.4 19.9125L18.825 27.5H16.25V24.925L23.8375 17.35ZM13.75 23.75L11.25 26.25H6.25C4.875 26.25 3.75 25.125 3.75 23.75V6.25C3.75 4.875 4.875 3.75 6.25 3.75H11.475C12 2.3 13.375 1.25 15 1.25C16.625 1.25 18 2.3 18.525 3.75H23.75C25.125 3.75 26.25 4.875 26.25 6.25V11.25L23.75 13.75V6.25H21.25V8.75H8.75V6.25H6.25V23.75H13.75ZM15 3.75C14.3125 3.75 13.75 4.3125 13.75 5C13.75 5.6875 14.3125 6.25 15 6.25C15.6875 6.25 16.25 5.6875 16.25 5C16.25 4.3125 15.6875 3.75 15 3.75Z"
              fill="black"
            />
          </svg>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export const HistoryIcon = ({ active }: { active: boolean }) => {
  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        initial="hidden"
        key={String(active)}
        animate="visible"
        variants={scootLeftRight}
        exit="exit"
        transition={{
          duration: 1,
          ease: "backInOut",
        }}
      >
        {active ? (
          <svg
            width="20"
            height="20"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.575 0.750029C8.21248 0.575029 2.99998 5.68753 2.99998 12H0.762477C0.199977 12 -0.0750229 12.675 0.324977 13.0625L3.81248 16.5625C4.06248 16.8125 4.44998 16.8125 4.69998 16.5625L8.18748 13.0625C8.27386 12.9744 8.33222 12.8627 8.35521 12.7415C8.3782 12.6202 8.36478 12.4949 8.31666 12.3813C8.26854 12.2676 8.18786 12.1708 8.08479 12.103C7.98172 12.0351 7.86087 11.9993 7.73748 12H5.49998C5.49998 7.12503 9.47498 3.18753 14.375 3.25003C19.025 3.31253 22.9375 7.22503 23 11.875C23.0625 16.7625 19.125 20.75 14.25 20.75C12.2375 20.75 10.375 20.0625 8.89998 18.9C8.66056 18.7114 8.36016 18.6174 8.05593 18.6358C7.75171 18.6543 7.46487 18.7839 7.24998 19C6.72498 19.525 6.76248 20.4125 7.34998 20.8625C9.31398 22.4154 11.7462 23.257 14.25 23.25C20.5625 23.25 25.675 18.0375 25.5 11.675C25.3375 5.81253 20.4375 0.912529 14.575 0.750029ZM13.9375 7.00003C13.425 7.00003 13 7.42503 13 7.93753V12.5375C13 12.975 13.2375 13.3875 13.6125 13.6125L17.5125 15.925C17.9625 16.1875 18.5375 16.0375 18.8 15.6C19.0625 15.15 18.9125 14.575 18.475 14.3125L14.875 12.175V7.92503C14.875 7.42503 14.45 7.00003 13.9375 7.00003Z"
              fill="black"
            />
          </svg>
        ) : (
          <svg
            width="20"
            height="20"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.575 0.750029C8.21248 0.575029 2.99998 5.68753 2.99998 12H0.762477C0.199977 12 -0.0750229 12.675 0.324977 13.0625L3.81248 16.5625C4.06248 16.8125 4.44998 16.8125 4.69998 16.5625L8.18748 13.0625C8.27386 12.9744 8.33222 12.8627 8.35521 12.7415C8.3782 12.6202 8.36478 12.4949 8.31666 12.3813C8.26854 12.2676 8.18786 12.1708 8.08479 12.103C7.98172 12.0351 7.86087 11.9993 7.73748 12H5.49998C5.49998 7.12503 9.47498 3.18753 14.375 3.25003C19.025 3.31253 22.9375 7.22503 23 11.875C23.0625 16.7625 19.125 20.75 14.25 20.75C12.2375 20.75 10.375 20.0625 8.89998 18.9C8.66056 18.7114 8.36016 18.6174 8.05593 18.6358C7.75171 18.6543 7.46487 18.7839 7.24998 19C6.72498 19.525 6.76248 20.4125 7.34998 20.8625C9.31398 22.4154 11.7462 23.257 14.25 23.25C20.5625 23.25 25.675 18.0375 25.5 11.675C25.3375 5.81253 20.4375 0.912529 14.575 0.750029ZM13.9375 7.00003C13.425 7.00003 13 7.42503 13 7.93753V12.5375C13 12.975 13.2375 13.3875 13.6125 13.6125L17.5125 15.925C17.9625 16.1875 18.5375 16.0375 18.8 15.6C19.0625 15.15 18.9125 14.575 18.475 14.3125L14.875 12.175V7.92503C14.875 7.42503 14.45 7.00003 13.9375 7.00003Z"
              fill="black"
            />
          </svg>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export const InterviewIcon = ({ active }: { active: boolean }) => {
  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        initial="hidden"
        key={String(active)}
        animate="visible"
        variants={scootLeftRight}
        exit="exit"
        transition={{
          duration: 1,
          ease: "backInOut",
        }}
      >
        {active ? (
          <svg
            width="20"
            height="20"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.75 17.5V21.25C23.75 21.9375 23.1875 22.5 22.5 22.5H21.25V17.5H23.75ZM8.75 17.5V22.5H7.5C6.8125 22.5 6.25 21.9375 6.25 21.25V17.5H8.75ZM15 1.25C12.0163 1.25 9.15483 2.43526 7.04505 4.54505C4.93526 6.65483 3.75 9.51631 3.75 12.5V21.25C3.75 23.325 5.425 25 7.5 25H11.25V15H6.25V12.5C6.25 7.6625 10.1625 3.75 15 3.75C19.8375 3.75 23.75 7.6625 23.75 12.5V15H18.75V25H22.5C24.575 25 26.25 23.325 26.25 21.25V12.5C26.25 9.51631 25.0647 6.65483 22.955 4.54505C20.8452 2.43526 17.9837 1.25 15 1.25Z"
              fill="black"
            />
          </svg>
        ) : (
          <svg
            width="20"
            height="20"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.75 17.5V21.25C23.75 21.9375 23.1875 22.5 22.5 22.5H21.25V17.5H23.75ZM8.75 17.5V22.5H7.5C6.8125 22.5 6.25 21.9375 6.25 21.25V17.5H8.75ZM15 1.25C12.0163 1.25 9.15483 2.43526 7.04505 4.54505C4.93526 6.65483 3.75 9.51631 3.75 12.5V21.25C3.75 23.325 5.425 25 7.5 25H11.25V15H6.25V12.5C6.25 7.6625 10.1625 3.75 15 3.75C19.8375 3.75 23.75 7.6625 23.75 12.5V15H18.75V25H22.5C24.575 25 26.25 23.325 26.25 21.25V12.5C26.25 9.51631 25.0647 6.65483 22.955 4.54505C20.8452 2.43526 17.9837 1.25 15 1.25Z"
              fill="black"
            />
          </svg>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export const SettingsIcon = ({ active }: { active: boolean }) => {
  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        initial="hidden"
        key={String(active)}
        animate="visible"
        variants={scootLeftRight}
        exit="exit"
        transition={{
          duration: 1,
          ease: "backInOut",
        }}
      >
        {active ? (
          <svg
            width="20"
            height="20"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 10C16.3261 10 17.5978 10.5268 18.5355 11.4645C19.4732 12.4021 20 13.6739 20 15C20 16.3261 19.4732 17.5979 18.5355 18.5355C17.5978 19.4732 16.3261 20 15 20C13.6739 20 12.4021 19.4732 11.4645 18.5355C10.5268 17.5979 9.99999 16.3261 9.99999 15C9.99999 13.6739 10.5268 12.4021 11.4645 11.4645C12.4021 10.5268 13.6739 10 15 10ZM15 12.5C14.3369 12.5 13.7011 12.7634 13.2322 13.2322C12.7634 13.7011 12.5 14.337 12.5 15C12.5 15.663 12.7634 16.2989 13.2322 16.7678C13.7011 17.2366 14.3369 17.5 15 17.5C15.663 17.5 16.2989 17.2366 16.7678 16.7678C17.2366 16.2989 17.5 15.663 17.5 15C17.5 14.337 17.2366 13.7011 16.7678 13.2322C16.2989 12.7634 15.663 12.5 15 12.5ZM12.5 27.5C12.1875 27.5 11.925 27.275 11.875 26.975L11.4125 23.6625C10.625 23.35 9.94999 22.925 9.29999 22.425L6.18749 23.6875C5.91249 23.7875 5.57499 23.6875 5.42499 23.4125L2.92499 19.0875C2.84848 18.9587 2.82151 18.8065 2.84912 18.6592C2.87673 18.512 2.95702 18.3798 3.07499 18.2875L5.71249 16.2125L5.62499 15L5.71249 13.75L3.07499 11.7125C2.95702 11.6202 2.87673 11.488 2.84912 11.3408C2.82151 11.1935 2.84848 11.0413 2.92499 10.9125L5.42499 6.5875C5.57499 6.3125 5.91249 6.2 6.18749 6.3125L9.29999 7.5625C9.94999 7.075 10.625 6.65 11.4125 6.3375L11.875 3.025C11.925 2.725 12.1875 2.5 12.5 2.5H17.5C17.8125 2.5 18.075 2.725 18.125 3.025L18.5875 6.3375C19.375 6.65 20.05 7.075 20.7 7.5625L23.8125 6.3125C24.0875 6.2 24.425 6.3125 24.575 6.5875L27.075 10.9125C27.2375 11.1875 27.1625 11.525 26.925 11.7125L24.2875 13.75L24.375 15L24.2875 16.25L26.925 18.2875C27.1625 18.475 27.2375 18.8125 27.075 19.0875L24.575 23.4125C24.425 23.6875 24.0875 23.8 23.8125 23.6875L20.7 22.4375C20.05 22.925 19.375 23.35 18.5875 23.6625L18.125 26.975C18.075 27.275 17.8125 27.5 17.5 27.5H12.5ZM14.0625 5L13.6 8.2625C12.1 8.575 10.775 9.375 9.81249 10.4875L6.79999 9.1875L5.86249 10.8125L8.49999 12.75C7.99999 14.2083 7.99999 15.7917 8.49999 17.25L5.84999 19.2L6.78749 20.825L9.82499 19.525C10.7875 20.625 12.1 21.425 13.5875 21.725L14.05 25H15.95L16.4125 21.7375C17.9 21.425 19.2125 20.625 20.175 19.525L23.2125 20.825L24.15 19.2L21.5 17.2625C22 15.8 22 14.2125 21.5 12.75L24.1375 10.8125L23.2 9.1875L20.1875 10.4875C19.2053 9.3504 17.8729 8.57209 16.4 8.275L15.9375 5H14.0625Z"
              fill="black"
            />
          </svg>
        ) : (
          <svg
            width="20"
            height="20"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 10C16.3261 10 17.5978 10.5268 18.5355 11.4645C19.4732 12.4021 20 13.6739 20 15C20 16.3261 19.4732 17.5979 18.5355 18.5355C17.5978 19.4732 16.3261 20 15 20C13.6739 20 12.4021 19.4732 11.4645 18.5355C10.5268 17.5979 9.99999 16.3261 9.99999 15C9.99999 13.6739 10.5268 12.4021 11.4645 11.4645C12.4021 10.5268 13.6739 10 15 10ZM15 12.5C14.3369 12.5 13.7011 12.7634 13.2322 13.2322C12.7634 13.7011 12.5 14.337 12.5 15C12.5 15.663 12.7634 16.2989 13.2322 16.7678C13.7011 17.2366 14.3369 17.5 15 17.5C15.663 17.5 16.2989 17.2366 16.7678 16.7678C17.2366 16.2989 17.5 15.663 17.5 15C17.5 14.337 17.2366 13.7011 16.7678 13.2322C16.2989 12.7634 15.663 12.5 15 12.5ZM12.5 27.5C12.1875 27.5 11.925 27.275 11.875 26.975L11.4125 23.6625C10.625 23.35 9.94999 22.925 9.29999 22.425L6.18749 23.6875C5.91249 23.7875 5.57499 23.6875 5.42499 23.4125L2.92499 19.0875C2.84848 18.9587 2.82151 18.8065 2.84912 18.6592C2.87673 18.512 2.95702 18.3798 3.07499 18.2875L5.71249 16.2125L5.62499 15L5.71249 13.75L3.07499 11.7125C2.95702 11.6202 2.87673 11.488 2.84912 11.3408C2.82151 11.1935 2.84848 11.0413 2.92499 10.9125L5.42499 6.5875C5.57499 6.3125 5.91249 6.2 6.18749 6.3125L9.29999 7.5625C9.94999 7.075 10.625 6.65 11.4125 6.3375L11.875 3.025C11.925 2.725 12.1875 2.5 12.5 2.5H17.5C17.8125 2.5 18.075 2.725 18.125 3.025L18.5875 6.3375C19.375 6.65 20.05 7.075 20.7 7.5625L23.8125 6.3125C24.0875 6.2 24.425 6.3125 24.575 6.5875L27.075 10.9125C27.2375 11.1875 27.1625 11.525 26.925 11.7125L24.2875 13.75L24.375 15L24.2875 16.25L26.925 18.2875C27.1625 18.475 27.2375 18.8125 27.075 19.0875L24.575 23.4125C24.425 23.6875 24.0875 23.8 23.8125 23.6875L20.7 22.4375C20.05 22.925 19.375 23.35 18.5875 23.6625L18.125 26.975C18.075 27.275 17.8125 27.5 17.5 27.5H12.5ZM14.0625 5L13.6 8.2625C12.1 8.575 10.775 9.375 9.81249 10.4875L6.79999 9.1875L5.86249 10.8125L8.49999 12.75C7.99999 14.2083 7.99999 15.7917 8.49999 17.25L5.84999 19.2L6.78749 20.825L9.82499 19.525C10.7875 20.625 12.1 21.425 13.5875 21.725L14.05 25H15.95L16.4125 21.7375C17.9 21.425 19.2125 20.625 20.175 19.525L23.2125 20.825L24.15 19.2L21.5 17.2625C22 15.8 22 14.2125 21.5 12.75L24.1375 10.8125L23.2 9.1875L20.1875 10.4875C19.2053 9.3504 17.8729 8.57209 16.4 8.275L15.9375 5H14.0625Z"
              fill="black"
            />
          </svg>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export const SubscriptionIcon = ({ active }: { active: boolean }) => {
  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        initial="hidden"
        key={String(active)}
        animate="visible"
        variants={scootLeftRight}
        exit="exit"
        transition={{
          duration: 1,
          ease: "backInOut",
        }}
      >
        {active ? (
          <svg
            width="20"
            height="20"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26.25 13.75C26.25 20.6875 21.45 27.175 15 28.75C8.55 27.175 3.75 20.6875 3.75 13.75V6.25L15 1.25L26.25 6.25V13.75ZM15 26.25C19.6875 25 23.75 19.425 23.75 14.025V7.875L15 3.975L6.25 7.875V14.025C6.25 19.425 10.3125 25 15 26.25ZM18.8125 20L14.9625 17.6875L11.125 20L12.1375 15.625L8.75 12.7L13.225 12.3125L14.9625 8.1875L16.7125 12.3L21.1875 12.6875L17.7875 15.625L18.8125 20Z"
              fill="black"
            />
          </svg>
        ) : (
          <svg
            width="20"
            height="20"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26.25 13.75C26.25 20.6875 21.45 27.175 15 28.75C8.55 27.175 3.75 20.6875 3.75 13.75V6.25L15 1.25L26.25 6.25V13.75ZM15 26.25C19.6875 25 23.75 19.425 23.75 14.025V7.875L15 3.975L6.25 7.875V14.025C6.25 19.425 10.3125 25 15 26.25ZM18.8125 20L14.9625 17.6875L11.125 20L12.1375 15.625L8.75 12.7L13.225 12.3125L14.9625 8.1875L16.7125 12.3L21.1875 12.6875L17.7875 15.625L18.8125 20Z"
              fill="black"
            />
          </svg>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export const BackWardIcon = ({
  active,
  className,
}: {
  active: boolean;
  className?: string;
}) => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.2509 14.9396L6.36086 10.0496C5.78336 9.47207 5.78336 8.52707 6.36086 7.94957L11.2509 3.05957"
      className={classNames([
        !active ? "stroke-white" : "stroke-primary",
        className,
      ])}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);