import React from "react";
import "./Modal.css";
import Backdrop from "../Backdrop/Backdrop";

//Modal props: show - boolean, modalClosed() - changed the show prop to false, message - Error message

const Modal = props => (
  <>
    <Backdrop showModal={props.showModal} clicked={props.closeModalHandler} />
    <div
      className="Modal"
      style={{
        transform: props.showModal ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.showModal ? "1" : "0"
      }}
    >
      <h4>{props.message}</h4>
    </div>
  </>
);

export default Modal;
