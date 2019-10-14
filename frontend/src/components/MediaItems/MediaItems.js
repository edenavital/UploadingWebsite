import React from "react";
import "./MediaItems.css";
import MediaItem from "../../components/MediaItem/MediaItem";
import axios from "axios";
// I HAVE MEDIA []

const mediaitems = props => {
  //delete request to the server...
  const deleteFileHandler = () => {
    axios.delete("./api/media/:id", props.id).then(() => {
      //I SHOULD FETCH the new media [] from the backend... the question is how ?
    });
  };

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
