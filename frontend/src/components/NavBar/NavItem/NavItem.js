import React from "react";
import "./NavItem.css";
import { NavLink } from "react-router-dom";

const NavItem = props => (
  <li className="NavItem">
    <NavLink to={props.link}>{props.children}</NavLink>
  </li>
);

export default NavItem;
