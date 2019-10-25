import React from "react";
import "./Modal.css";
import Backdrop from "../Backdrop/Backdrop";

//props: isModalVisible, closedModalHandler(), isModalPositive
// isModalVisible - The whole Modal appears according to this boolean
// closedModalHandler() - Changes the isModalVisible prop to false - Which hides the Modal & Backdrop
// isModalPositive - Indicates a Successful upload or an Error message

//TASK:
// Change isModalPositive to ModalType string, add a switch case for modalType === "green" || "red" || "image"
// In the MediaItems component, generate new states and import Modal component, use it when clicking on one of the MediaItem components
// change 'message' variable to 'content'

const Modal = props => {
  //Animates the Modal Pop up by toggling class 'On'
  let className = props.isModalVisible ? "Modal On" : "Modal";

  //Modal's message to the user, depending on the prop.isModalPositive
  let message = props.isModalPositive ? (
    <h4 style={{ color: "green" }}>
      The image has been successfully uploaded!
    </h4>
  ) : (
    <h4 style={{ color: "red" }}>The selected file is not an image!</h4>
  );

  return (
    <>
      <Backdrop
        isModalVisible={props.isModalVisible}
        clicked={props.closeModalHandler}
      />
      <div className={className}>{message}</div>
    </>
  );
};
export default Modal;
