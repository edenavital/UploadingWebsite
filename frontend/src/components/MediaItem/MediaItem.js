import React from "react";
import "./MediaItem.css";
import DeleteButton from "../DeleteButton/DeleteButton";
//props: id, name, path, deleteImageHandler(id), enlargeImageHandler(path)
import EnlargedImage from "../EnlargedImage/EnlargedImage";

const MediaItem = props => (
  <div className="MediaItem">
    <DeleteButton id={props.id} />
    <EnlargedImage path={props.path} />
    <img src={props.path} alt="Media" />
    <h4>{props.name}</h4>
  </div>
);

export default MediaItem;
