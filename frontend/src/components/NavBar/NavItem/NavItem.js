import React from "react";
import "./NavItem.css";

const navitem = props => (
  <li className="NavItem">
    <a href={props.link}>{props.children}</a>
  </li>
);

export default navitem;
