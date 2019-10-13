import React, { Component } from "react";
import "./MediaItems.css";
import MediaItem from "../../components/MediaItem/MediaItem";
import axios from "axios";

class MediaItems extends Component {
  state = {
    media: []
  };

  componentDidMount() {
    axios.get("/api/media").then(media => this.setState({ media: media.data }));
  }

  componentDidUpdate() {
    axios.get("/api/media").then(media => this.setState({ media: media.data }));
  }

  render() {
    let media = null;

    if (this.state.media.length > 0) {
      media = this.state.media.map(image => (
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
  }
}

export default MediaItems;
