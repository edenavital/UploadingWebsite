import React, { Component } from "react";
import "./MediaItems.css";
import MediaItem from "../../components/MediaItem/MediaItem";
import axios from "axios";
import Spinner from "../../components/UI/Spinner/Spinner";

class MediaItems extends Component {
  state = {
    images: [],
    loading: true
  };

  //When the user clicks on Media route - fetch the images from the server
  componentDidMount() {
    this.getImagesHandler();
  }

  //Updates the images array in client from the server
  getImagesHandler = () => {
    console.log("getImagesHandler invoked");
    this.setState({ loading: true });
    axios
      .get("/api/media")
      .then(images => {
        this.setState({ images: images.data, loading: false });
      })
      .catch(err => {
        console.log(err);
        this.setState({ loading: false });
      });
  };

  //Sends a request to the backend to delete an image with a specific id
  deleteFileHandler = idOfImage => {
    console.log("deleteFileHandler invoked");
    axios.delete("./api/media/" + idOfImage).then(() => {
      this.getImagesHandler();
    });
  };

  render() {
    //Showing a Spinner while fetching from the server
    if (this.state.loading) return <Spinner />;

    //Dynamically rendering images state, which is fetched from the server
    let media = this.state.images.map(image => (
      <li key={image.id}>
        <MediaItem
          id={image.id}
          name={image.name}
          path={image.path}
          deleteImage={this.deleteFileHandler}
        />
      </li>
    ));

    return (
      <>
        <div className="MediaItems">
          <ul>{media}</ul>
        </div>
      </>
    );
  }
}
export default MediaItems;
