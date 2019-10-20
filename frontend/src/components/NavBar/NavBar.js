import React from "react";
import "./NavBar.css";
import NavItem from "./NavItem/NavItem";

const navbar = () => (
  <nav className="NavBar">
    <ul>
      <NavItem link="/">Home</NavItem>
      <NavItem link="/media">Media</NavItem>
    </ul>
  </nav>
);

export default navbar;
