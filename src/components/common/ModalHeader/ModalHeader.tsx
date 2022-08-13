import React, { FC } from "react";
import { SVGs } from "../../../assets";
import classes from "./ModalHeader.module.css";

interface ModalHeaderProps {
  title: string;
  onClose: () => void;
}

export const ModalHeader: FC<ModalHeaderProps> = (props) => {
  const { title, onClose } = props;
  return (
    <div className={classes.Container}>
      <p className={classes.Title}>{title}</p>
      <img
        onClick={onClose}
        alt="close-icon"
        className={classes.CloseIcon}
        src={SVGs.CloseIcon}
      />
    </div>
  );
};
