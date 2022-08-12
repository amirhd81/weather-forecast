import React, { FC, ReactNode } from "react";
import Modal from "react-modal";

interface MainModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: ReactNode;
}

export const MainModal: FC<MainModalProps> = (props) => {
  const { isOpen, onClose, content } = props;

  return (
    <Modal shouldCloseOnOverlayClick onRequestClose={onClose} isOpen={isOpen}>
      {content}
    </Modal>
  );
};
