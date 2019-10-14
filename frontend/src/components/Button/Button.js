import React from "react";
import "./Button.css";

const button = props => (
  <button className="Button" type={props.type} onClick={props.click}>
    {props.name}
  </button>
);

export default button;
