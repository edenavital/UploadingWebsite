import React from "react";
import "./MediaItem.css";
import DeleteButton from "../DeleteButton/DeleteButton";
//Props: id, name, path, deleteImage(id)
const mediaitem = props => {
  return (
    <div className="MediaItem">
      <DeleteButton id={props.id} click={() => props.deleteImage(props.id)} />
      <img src={props.path} alt="Media" />
      <h4>{props.name}</h4>
    </div>
  );
};
export default mediaitem;
