import React from "react";
import "./Backdrop.css";
//props: isModalVisible, clicked()
const Backdrop = props =>
  props.isModalVisible ? (
    <div className="Backdrop" onClick={props.clicked}></div>
  ) : null;

export default Backdrop;
