import React from "react";
import "./Footer.scss";
import Button from "../Button/Button";

const footer = () => (
  <div className="Footer">
    <div className="Footer-top">
      <p>Register for free </p>
      <Button name="Click Me" />
    </div>
    <div className="Footer-bottom">
      <p>
        <span>© 2019 Copyright:</span> Eden Avital
      </p>
    </div>
  </div>
);

export default footer;
