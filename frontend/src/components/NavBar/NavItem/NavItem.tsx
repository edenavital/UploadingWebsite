import React from "react";
import "./NavItem.css";
import { NavLink } from "react-router-dom";

interface Props {
  link: string;
}

const NavItem: React.FC<Props> = ({ link, children }) => (
  <li className="NavItem">
    <NavLink to={link}>{children}</NavLink>
  </li>
);

export default NavItem;
