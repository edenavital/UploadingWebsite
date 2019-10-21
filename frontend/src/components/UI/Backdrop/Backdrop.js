import React from "react";
import "./Backdrop.css";

//Backdrop props: show, clicked
const Backdrop = props =>
  props.showModal ? (
    <div className="Backdrop" onClick={props.clicked}></div>
  ) : null;

export default Backdrop;
