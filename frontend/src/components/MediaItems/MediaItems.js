import React, { Component } from "react";
import "./MediaItems.css";
import MediaItem from "../../components/MediaItem/MediaItem";
import axios from "axios";
import Spinner from "../UI/Spinner/Spinner";

class MediaItems extends Component {
  //delete request to the server
  state = {
    media: [],
<<<<<<< HEAD
    loading: false
=======
    loading: true
>>>>>>> 09c9377ad598e9a60973cf47cadc20ec48b26f3c
  };

  updateMediaHandler = () => {
    console.log("updateMediaHandler invoked");
    this.setState({ loading: true });
    axios
      .get("/api/media")
      .then(media => {
        this.setState({ media: media.data, loading: false });
      })
<<<<<<< HEAD
      .catch(err => {
        console.log(err);
        this.setState({ loading: false });
      });
=======
      .catch(err => console.log(err), this.setState({ loading: false }));
>>>>>>> 09c9377ad598e9a60973cf47cadc20ec48b26f3c
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
