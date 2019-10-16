import React from "react";
import "./Button.css";

const button = props => {
  return (
    <button
      className="Button"
      type={props.type}
      onClick={props.click}
      disabled={props.disabled}
    >
      {props.name}
    </button>
  );
};
export default button;
