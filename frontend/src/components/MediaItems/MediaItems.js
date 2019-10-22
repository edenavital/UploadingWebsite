import React from "react";
import "./MediaItems.css";
import MediaItem from "../../components/MediaItem/MediaItem";
import axios from "axios";
//MediaItems gets: props.media, //props.update()
const mediaitems = props => {
  //delete request to the server
  const deleteFileHandler = idOfImage => {
    axios.delete("./api/media/" + idOfImage).then(() => {
      props.update();
    });
  };
  //Dynamic MediaItems list
  let media = null;

  if (props.media.length > 0) {
    media = props.media.map(image => (
      <li key={image.id}>
        <MediaItem
          id={image.id}
          name={image.name}
          path={image.path}
          deleteImage={deleteFileHandler}
        />
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
