import React from "react";
import "./Modal.css";
import Backdrop from "../Backdrop/Backdrop";
import { CSSTransition } from "react-transition-group";
//props: isModalVisible, closedModalHandler()
// isModalVisible - The whole Modal appears according to this boolean
// closedModalHandler() - Changes the isModalVisible prop to false - Which hides the Modal & Backdrop
// modalType - Select the Modal animation type (text / img)

const Modal = props => {
  return (
    <>
      <CSSTransition
        in={props.isModalVisible}
        classNames={"Backdrop"}
        timeout={750}
        unmountOnExit
        appear
      >
        <Backdrop closeModalHandler={props.closeModalHandler} />
      </CSSTransition>

      <CSSTransition
        in={props.isModalVisible}
        classNames={"Modal " + props.modalType}
        timeout={750}
        unmountOnExit
        appear
      >
        {props.children}
      </CSSTransition>
    </>
  );
};
export default Modal;
