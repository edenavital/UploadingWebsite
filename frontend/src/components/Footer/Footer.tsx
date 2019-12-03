import React from "react";
import "./Footer.scss";
import Button from "../Button/Button";

const navigationToLinkdin = () => {
  window.open("https://www.linkedin.com/in/edenavital/", "_blank");
};

const Footer = () => (
  <div className="Footer">
    <div className="Footer-top">
      <p>My Linkdin Profile</p>
      <Button name="Click Me" click={navigationToLinkdin} />
    </div>
    <div className="Footer-bottom">
      <p>
        <span>© 2019 Copyright:</span> Eden Avital
      </p>
    </div>
  </div>
);

export default Footer;
