import React from "react";
import "./Backdrop.css";
//props: isModalVisible, clicked()

interface Props {
  closeModalHandler: () => void;
}

const Backdrop: React.FC<Props> = ({ closeModalHandler }) => (
  <div className={"Backdrop"} onClick={closeModalHandler}></div>
);

export default Backdrop;
