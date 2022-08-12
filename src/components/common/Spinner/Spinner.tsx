import React, { CSSProperties, FC } from "react";
import FadeLoader from "react-spinners/FadeLoader";

const override: CSSProperties = {
  position: "absolute",
  left: "50%",
  top: " 50%",
  margin: "0 auto",
  zIndex: 1,
  borderColor: "white",
};

interface SpinnerProps {
  show: boolean;
  spinnerColor: string;
}

export const Spinner: FC<SpinnerProps> = ({ show, spinnerColor }) => {
  return (
    <div className="sweet-loading">
      <FadeLoader color={spinnerColor} loading={show} cssOverride={override} />
    </div>
  );
};
