import React from "react";
import "./NavItem.css";
import { NavLink } from "react-router-dom";
const navitem = props => (
  <li className="NavItem">
    <NavLink to={props.link}>{props.children}</NavLink>
  </li>
);

export default navitem;
