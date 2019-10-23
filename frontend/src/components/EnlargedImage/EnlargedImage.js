import React from "react";
import Backdrop from "../UI/Backdrop/Backdrop";
import "./EnlargedImage.css";
const EnlargedImage = props => (
  <>
    <Backdrop showModal={props.showModal} clicked={props.closeModalHandler} />
    <div className="EnlargedImage"></div>
  </>
);

export default EnlargedImage;
