import React, { Component } from "react";
import "./Home.css";
import Button from "../../components/Button/Button";
//import Customers from "../../containers/Customers/Customers";
import MediaItems from "../../components/MediaItems/MediaItems";
import axios from "axios";

class Home extends Component {
  state = {
    selectedFile: null,
    media: [],
    uploadDisabled: true
  };
  //Request get media - using in Mount (componentDidMount) and when Updating the media (Sending any other requests, e.g Post)
  updateMediaHandler = () => {
    console.log("The current array: " + this.state.media);
    axios.get("/api/media").then(media => this.setState({ media: media.data }));
  };

  componentDidMount() {
    this.updateMediaHandler();
  }

  fileSelectedHandler = event => {
    console.log(event.target.files[0]);
    this.setState({
      selectedFile: event.target.files[0]
    });

    if (this.state.selectedFile != null) {
      this.setState({
        uploadDisabled: !this.state.uploadDisabled
      });
    }
  };
  fileUploadHandler = e => {
    e.preventDefault();
    if (this.state.selectedFile == null) {
      console.log(
        " fileUploadHandler invoked - YOU CANT SEND NOTHING TO THE SERVER... CHANGE IN POP UP MESSAGE"
      );
    } else {
      const newImage = {
        name: this.state.selectedFile.name,
        path: window.URL.createObjectURL(this.state.selectedFile)
      };

      axios
        .post("/api/media", newImage)
        .then(res => {
          console.log(res.data);
          this.updateMediaHandler();
        })
        .catch(err => console.log(err));
    }
    this.setState({
      selectedFile: null,
      uploadDisabled: !this.state.uploadDisabled
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="backgroundHome"></div>
        <div className="Home">
          <h1>Welcome to my Uploading website</h1>
          <h2>Click on the browse button in order to upload media!</h2>
          <form onSubmit={this.fileUploadHandler}>
            <input
              type="file"
              onChange={this.fileSelectedHandler}
              accept="image/*"
              style={{ display: "none" }}
              ref={fileInput => (this.fileInput = fileInput)}
            />
            <Button name="Browse" click={() => this.fileInput.click()}></Button>
            <Button
              name="Upload"
              type="submit"
              disabled={this.state.uploadDisabled}
            />
          </form>

          <MediaItems
            media={this.state.media}
            update={this.updateMediaHandler}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
