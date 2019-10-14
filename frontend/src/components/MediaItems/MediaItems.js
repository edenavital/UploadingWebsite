import React from "react";
import "./MediaItems.css";
import MediaItem from "../../components/MediaItem/MediaItem";

const mediaitems = props => {
  let media = null;

  if (props.media.length > 0) {
    media = props.media.map(image => (
      <li key={image.id}>
        <MediaItem id={image.id} name={image.name} path={image.path} />
      </li>
    ));
  }
  return (
    <div className="MediaItems">
      <ul>{media}</ul>
    </div>
  );
};

export default mediaitems;
