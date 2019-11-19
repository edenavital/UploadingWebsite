import React from "react";
import "./Modal.css";
import Backdrop from "../Backdrop/Backdrop";
import { CSSTransition } from "react-transition-group";
//props: isModalVisible, closedModalHandler()
// isModalVisible - The whole Modal appears according to this boolean
// closedModalHandler() - Changes the isModalVisible prop to false - Which hides the Modal & Backdrop
// modalType - Select the Modal animation type (text / img)

interface Props {
  isModalVisible: boolean;
  closeModalHandler: () => void;
  modalType: string;
}

const Modal: React.FC<Props> = ({
  modalType,
  isModalVisible,
  closeModalHandler,
  children
}) => {
  return (
    <>
      <CSSTransition
        in={isModalVisible}
        classNames={"Backdrop"}
        timeout={750}
        unmountOnExit
        appear
      >
        <Backdrop closeModalHandler={closeModalHandler} />
      </CSSTransition>

      <CSSTransition
        in={isModalVisible}
        classNames={"Modal " + modalType}
        timeout={750}
        unmountOnExit
        appear
      >
        {children}
      </CSSTransition>
    </>
  );
};
export default Modal;
