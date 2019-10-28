import React, { useContext } from "react";
import "./DeleteButton.css";
import { ImageManipulationContext } from "../../containers/MediaItems/MediaItems";

const DeleteButton = props => {
  const { deleteHandler, ...rest } = useContext(ImageManipulationContext);
  return (
    <svg
      className="DeleteButton"
      width="17px"
      height="17px"
      viewBox="0 0 511.992 511.992"
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => deleteHandler(props.id)}
    >
      <path
        d="m415.402344 495.421875-159.40625-159.410156-159.40625 159.410156c-22.097656 22.09375-57.921875 22.09375-80.019532 0-22.09375-22.097656-22.09375-57.921875 0-80.019531l159.410157-159.40625-159.410157-159.40625c-22.09375-22.097656-22.09375-57.921875 0-80.019532 22.097657-22.09375 57.921876-22.09375 80.019532 0l159.40625 159.410157 159.40625-159.410157c22.097656-22.09375 57.921875-22.09375 80.019531 0 22.09375 22.097657 22.09375 57.921876 0 80.019532l-159.410156 159.40625 159.410156 159.40625c22.09375 22.097656 22.09375 57.921875 0 80.019531-22.097656 22.09375-57.921875 22.09375-80.019531 0zm0 0"
        fill="#e76e54"
      />
    </svg>
  );
};
export default DeleteButton;
