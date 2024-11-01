import React, { forwardRef } from "react";
import classNames from "classnames";
import { Icon } from "@iconify-icon/react";
import { twMerge } from "tailwind-merge";
import { ButtonCompProps } from "@/types";
import { BackWardIcon } from "@/assets";

const Button = forwardRef<HTMLButtonElement, ButtonCompProps>(
  (
    { loading, children, disabled, type, className,styles, onClick, plain },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled}
        type={type}
        onClick={onClick}
        style={styles}
        className={twMerge(
          classNames(
            "relative px-[20px] h-[40px] rounded-[6px] overflow-hidden text-white font-bold text-[14px] transition-all hover:scale-[1.03] active:scale-[1] duration-500",
            [loading || disabled ? "bg-neutral-400 w-full" : "bg-primary"],
            className,
            {
              "bg-transparent border border-neutral-300 text-neutral-500":
                plain,
            }
          )
        )}
      >
        <span
          className={classNames(
            "w-full h-full flex justify-center items-center transition-all duration-500",
            [loading ? "top-[-100%] absolute" : "top-0"]
          )}
        >
          {children}
        </span>
        <span
          className={classNames(
            "absolute w-full h-full flex justify-center items-center transition-all duration-500",
            [loading ? "top-0" : "top-[100%]"]
          )}
        >
          <Icon
            icon="eos-icons:three-dots-loading"
            style={{ color: "#111827" }}
            color={"#111827"}
            height="50"
          />
        </span>
      </button>
    );
  },
);

export const BackButton = ({
  onClick,
  className,
}: Pick<ButtonCompProps, "onClick" | "className">) => {
  return (
    <button
      className={classNames("flex items-center gap-2", className)}
      onClick={onClick}
    >
      <BackWardIcon active={false} className="!stroke-neutral-500" />
      <span className="text-[14px] text-neutral-500 font-bold">Back</span>
    </button>
  );
};

Button.displayName = "Button";

Button.defaultProps = {
  type: "submit",
};

export default Button;
