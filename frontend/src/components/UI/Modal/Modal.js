import React, { useState, useEffect } from "react";
import "./Modal.css";
import Backdrop from "../Backdrop/Backdrop";

//props: isModalVisible, closedModalHandler(), isModalPositive
// isModalVisible - The whole Modal appears according to this boolean
// closedModalHandler() - Changes the isModalVisible prop to false - Which hides the Modal & Backdrop
// isModalPositive - Indicates a Successful upload or an Error message
// addClass - Select an extra CSS class to the Modal component (Image / Text)

const Modal = ({ toggleModal, children, modalType }) => {
  //Animates the Modal Pop up functionality by toggling addClass which can be 'Image' or 'Text'

  return (
    <>
      <Backdrop closeModalHandler={toggleModal} />
      <div className={`${modalType}`}>{children}</div>
    </>
  );
};
export default Modal;
