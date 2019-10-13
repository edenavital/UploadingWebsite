import React, { Component } from "react";
import "./Home.css";
import Button from "../../components/Button/Button";
//import Customers from "../../containers/Customers/Customers";
import MediaItems from "../MediaItems/MediaItems";
import axios from "axios";

class Home extends Component {
  state = {
    selectedFile: null
  };

  fileSelectedHandler = event => {
    console.log(event.target.files[0]);
    this.setState({ selectedFile: event.target.files[0] });
  };

  fileUploadHandler = () => {
    const newImage = {
      name: this.state.selectedFile.name,
      path: window.URL.createObjectURL(this.state.selectedFile)
    };
    axios
      .post("/api/media", newImage)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <React.Fragment>
        <div className="backgroundHome"></div>
        <div className="Home">
          <h1>Welcome to my Uploading website</h1>
          <h2>Click on the browse button in order to upload media!</h2>
          <input type="file" onChange={this.fileSelectedHandler} />
          <input type="submit" onClick={this.fileUploadHandler} />
          <Button
            type="submit"
            name="Upload"
            onClick={this.fileUploadHandler}
          />
          <MediaItems />
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
