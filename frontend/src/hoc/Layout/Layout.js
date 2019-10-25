import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import "./Layout.css";

const Layout = props => {
  return (
    <>
      <div className="Layout" />
      <NavBar />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
