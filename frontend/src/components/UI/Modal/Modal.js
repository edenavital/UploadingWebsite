import React from "react";
import "./Modal.css";
import Backdrop from "../Backdrop/Backdrop";

//props: isModalVisible, closedModalHandler(), modalType, modalImagePath
// isModalVisible - The whole Modal appears according to this boolean
// closedModalHandler() - Changes the isModalVisible prop to false - Which hides the Modal & Backdrop
// modalType - Indicates which type of Modal will appear.
// modalImagePath - Path to the image it should display

//TASK:
// Change isModalPositive to ModalType string, add a switch case for modalType === "green" || "red" || "image"
// In the MediaItems component, generate new states and import Modal component, use it when clicking on one of the MediaItem components
// change 'content' variable to 'content'

const Modal = props => {
  //Animates the Modal Pop up by toggling class 'On'
  let className = props.isModalVisible ? "Modal On" : "Modal";

  //Modal's content to the user, depending on the prop.modalType
  let content = null;

  //Modal's switch case depending on the modalType
  switch (props.modalType) {
    case "green":
      content = (
        <h4 style={{ color: "green" }}>
          The image has been successfully uploaded!
        </h4>
      );
      break;
    case "red":
      content = (
        <h4 style={{ color: "red" }}>The selected file is not an image!</h4>
      );
      break;
    case "image":
      {
        className += " Image";
        content = (
          <img
            style={{ width: "100%", height: "100%" }}
            src={props.modalImagePath}
            alt="Media"
          />
        );
      }
      break;
    default: {
      content = null;
      className = "Modal";
    }
  }

  return (
    <>
      <Backdrop
        isModalVisible={props.isModalVisible}
        clicked={props.closeModalHandler}
      />
      <div className={className}>{content}</div>
    </>
  );
};
export default Modal;
