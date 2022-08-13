import React, { FC, ReactNode } from "react";
import Modal from "react-modal";
import { ModalHeader } from "../ModalHeader/ModalHeader";
import classes from "./MainModal.module.css";

interface MainModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  content: ReactNode;
  title: string;
}

export const MainModal: FC<MainModalProps> = (props) => {
  const { isOpen, onRequestClose, content, title } = props;

  return (
    <Modal
      shouldCloseOnOverlayClick
      onRequestClose={onRequestClose}
      isOpen={isOpen}
      className={classes.Container}
    >
      <ModalHeader title={title} onClose={onRequestClose} />
      <div className={classes.ContentContainer}>{content}</div>
    </Modal>
  );
};
