import React from "react";
import "./Backdrop.css";
//props: isModalVisible, clicked()
const Backdrop = ({ closeModalHandler }) => (
  <div className="Backdrop" onClick={closeModalHandler}></div>
);

export default Backdrop;
