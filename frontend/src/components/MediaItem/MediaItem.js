import React from "react";
import "./MediaItem.css";
import DeleteButton from "../DeleteButton/DeleteButton";
import axios from "axios";
//per ITEM gets id, name, path
const mediaitem = props => (
  <div className="MediaItem">
    <DeleteButton id={props.id} click={props.deleteImage} />
    <img src={props.path} alt="Media" />
    <div>
      <h4>
        <b>{props.name}</b>
      </h4>
    </div>
  </div>
);

export default mediaitem;
