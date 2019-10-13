import React from "react";
import NavBar from "../NavBar/NavBar";
import Home from "../../containers/Home/Home";
import Footer from "../Footer/Footer";

const layout = props => {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
};

export default layout;
