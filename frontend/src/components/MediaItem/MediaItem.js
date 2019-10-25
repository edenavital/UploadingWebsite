import React from "react";
import "./MediaItem.css";
import DeleteButton from "../DeleteButton/DeleteButton";
//props: id, name, path, deleteImage(id)

const MediaItem = props => {
  return (
    <div
      className="MediaItem"
      onClick={() => props.openModalHandler(props.path)}
    >
      <DeleteButton id={props.id} click={() => props.deleteImage(props.id)} />
      <img src={props.path} alt="Media" />
      <h4>{props.name}</h4>
    </div>
  );
};
export default MediaItem;
