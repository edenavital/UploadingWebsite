import React from "react";
import "./Button.css";
const button = props => (
  <div className="Button" type="submit">
    {props.name}
  </div>
);

export default button;
