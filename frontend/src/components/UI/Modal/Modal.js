import React from "react";
import "./Modal.css";
import Backdrop from "../Backdrop/Backdrop";
import { CSSTransition } from "react-transition-group";
//props: isModalVisible, closedModalHandler()
// isModalVisible - The whole Modal appears according to this boolean
// closedModalHandler() - Changes the isModalVisible prop to false - Which hides the Modal & Backdrop
// addClass - Select an extra CSS class to the Modal component (Image / Text)

const Modal = props => {
  return (
    <>
      <Backdrop
        isModalVisible={props.isModalVisible}
        closeModalHandler={props.closeModalHandler}
      />
      <CSSTransition
        in={props.isModalVisible}
        classNames={props.modalType}
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
