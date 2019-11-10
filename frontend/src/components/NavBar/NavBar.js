import React from "react";
import "./NavBar.css";
import NavItem from "./NavItem/NavItem";

const Navbar = () => (
  <nav className="NavBar">
    <ul>
      <NavItem link="/">Home</NavItem>
      <NavItem link="/media">Media</NavItem>
    </ul>
  </nav>
);

export default Navbar;
