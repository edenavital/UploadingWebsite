import React, { Component } from "react";
import "./MediaItems.css";
import MediaItem from "../../components/MediaItem/MediaItem";
import axios from "axios";
import Spinner from "../UI/Spinner/Spinner";

class MediaItems extends Component {
  //delete request to the server
  state = {
    media: [],
    loading: false
  };

  updateMediaHandler = () => {
    console.log("updateMediaHandler invoked");
    this.setState({ loading: true });
    axios
      .get("/api/media")
      .then(media => {
        this.setState({ media: media.data, loading: false });
      })
      .catch(err => {
        console.log(err);
        this.setState({ loading: false });
      });
  };

  componentDidMount() {
    this.updateMediaHandler();
  }

  deleteFileHandler = idOfImage => {
    console.log("deleteFileHandler invoked");
    axios.delete("./api/media/" + idOfImage).then(() => {
      this.updateMediaHandler();
    });
  };

  //Dynamic MediaItems list
  render() {
    if (this.state.loading) return <Spinner />;

    return (
      <>
        <div className="MediaItems">
          <ul>
            {this.state.media.map(image => (
              <li key={image.id}>
                <MediaItem
                  id={image.id}
                  name={image.name}
                  path={image.path}
                  deleteImage={this.deleteFileHandler}
                />
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}
export default MediaItems;
