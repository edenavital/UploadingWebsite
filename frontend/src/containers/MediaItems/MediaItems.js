import React, { Component } from "react";
import "./MediaItems.css";
import MediaItem from "../../components/MediaItem/MediaItem";
import axios from "axios";
import Spinner from "../../components/UI/Spinner/Spinner";
import Modal from "../../components/UI/Modal/Modal";
class MediaItems extends Component {
  state = {
    images: [],
    loading: true,
    isModalVisible: false,
    imagePath: null
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
  deleteImageHandler = idOfImage => {
    console.log("deleteImageHandler invoked");
    axios.delete("./api/media/" + idOfImage).then(() => {
      this.getImagesHandler();
    });
  };
  //Expand the selected image by opening it through the Modal component
  enlargeImageHandler = pathOfImage => {
    console.log("enlargeImageHandler invoked");
    this.setState({ isModalVisible: true, imagePath: pathOfImage });
  };

  //Manipulation of the Modal component - Closes it
  closeModalHandler = () => {
    this.setState({ isModalVisible: false });
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
          deleteImageHandler={this.deleteImageHandler}
          enlargeImageHandler={this.enlargeImageHandler}
        />
      </li>
    ));
    return (
      <>
        <Modal
          isModalVisible={this.state.isModalVisible}
          closeModalHandler={this.closeModalHandler}
          addClass="Image"
        >
          <img
            src={this.state.imagePath}
            alt="Media"
            style={{
              width: "70vw",
              height: "85vh"
            }}
          />
        </Modal>

        <div className="MediaItems">
          <ul>{media}</ul>
        </div>
      </>
    );
  }
}
export default MediaItems;