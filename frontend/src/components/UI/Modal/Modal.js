import React from "react";
import "./Modal.css";
import Backdrop from "../Backdrop/Backdrop";

//props: isModalVisible, closedModalHandler(), isModalPositive
// isModalVisible - The whole Modal appears according to this boolean
// closedModalHandler() - Changes the isModalVisible prop to false - Which hides the Modal & Backdrop
// isModalPositive - Indicates a Successful upload or an Error message

//TASK:
//Make the Modal dynamic by rendering props.children and then in the father components which calls Modal, just add what you want
//to the Modal... for example: <Modal parameters> <h4>The image has been successfully uploaded!/</h4> </Modal>
//You can pass many parameters and make this component much more flexible

const Modal = props => {
  //Animates the Modal Pop up by toggling class 'On'
  let className = props.isModalVisible ? "Modal On" : "Modal";

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
