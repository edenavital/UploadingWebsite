import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import "./Layout.css";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <div className="Layout" />
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
