import React from "react";
import "./Modal.css";
import Backdrop from "../Backdrop/Backdrop";

//Modal props: showModal, closedModalHandler(), message
// showModal - For Backdrop & Modal components - boolean
// closedModalHandler() - Changes the showModal prop to false
// type - Indicates a Successful upload or Error message

const Modal = props => {
  return (
    <>
      <Backdrop showModal={props.showModal} clicked={props.closeModalHandler} />
      <div
        className="Modal"
        style={{
          transform: props.showModal ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.showModal ? "1" : "0"
        }}
      >
        {props.type ? (
          <h4 style={{ color: "green" }}>
            The image has been successfully uploaded!
          </h4>
        ) : (
          <h4 style={{ color: "red" }}>The selected file is not an image!</h4>
        )}
      </div>
    </>
  );
};
export default Modal;
