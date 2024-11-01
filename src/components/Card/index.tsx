import classNames from "classnames";
import React from "react";
import { CardProps } from "@/types";

const Card = ({ children, className, ...rest }: CardProps) => {
  return (
    <div
      className={classNames(
        "rounded-[8px]",
        { "bg-white": !className?.includes("bg-") },
        className
      )}
      onClick={rest?.onClick}
      style={rest.style}
    >
      {children}
    </div>
  );
};

export default Card;
