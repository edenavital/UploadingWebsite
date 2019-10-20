import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import "./Layout.css";

const layout = props => {
  return (
    <div className="App">
      <div className="background"></div>
      <NavBar />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export default layout;
