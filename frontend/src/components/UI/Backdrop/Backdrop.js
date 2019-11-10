import React from "react";
import "./Backdrop.css";
//props: isModalVisible, clicked()
const Backdrop = props => (
  <div className={"Backdrop"} onClick={props.closeModalHandler}></div>
);

export default Backdrop;
