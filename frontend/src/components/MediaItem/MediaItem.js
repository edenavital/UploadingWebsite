import React from "react";
import "./MediaItem.css";
//per ITEM gets id, name, path
const mediaitem = props => (
  <div className="MediaItem">
    <img src={props.path} alt="Media" />
    <div>
      <h4>
        <b>{props.name}</b>
      </h4>
    </div>
  </div>
);

export default mediaitem;
