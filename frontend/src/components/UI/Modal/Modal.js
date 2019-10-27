import React from "react";
import "./Modal.css";
import Backdrop from "../Backdrop/Backdrop";

//props: isModalVisible, closedModalHandler(), isModalPositive
// isModalVisible - The whole Modal appears according to this boolean
// closedModalHandler() - Changes the isModalVisible prop to false - Which hides the Modal & Backdrop
// isModalPositive - Indicates a Successful upload or an Error message
// addClass - Select an extra CSS class to the Modal component (Image / Text)

const Modal = props => {
  //Animates the Modal Pop up functionality by toggling addClass which can be 'Image' or 'Text'
  let className = props.isModalVisible ? "Modal " + props.addClass : "Modal";

  return (
    <>
      <Backdrop
        isModalVisible={props.isModalVisible}
        closeModalHandler={props.closeModalHandler}
      />
      <div className={className}>{props.children}</div>
    </>
  );
};
export default Modal;
