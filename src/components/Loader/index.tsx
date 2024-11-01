import React from "react";
import classNames from "classnames";

type LoaderProps = { onPage?: boolean };

export const Loader = ({ onPage }: LoaderProps) => {
  return (
    <span
      className={classNames("flex justify-center", [
        onPage ? "loader__three" : "loader",
      ])}
    />
  );
};

export const PageLoader = ({ onPage }: LoaderProps) => {
  return (
    <div
      className={classNames("flex justify-center items-center w-full", [
        onPage ? "grow py-40" : " h-screen bg-primary",
      ])}
    >
      <Loader onPage={onPage} />
    </div>
  );
};
