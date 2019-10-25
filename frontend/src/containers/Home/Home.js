import React, { Component } from "react";
import "./Home.css";
import Button from "../../components/Button/Button";
import axios from "axios";
import Modal from "../../components/UI/Modal/Modal";

class Home extends Component {
  state = {
    selectedFile: { name: "null" },
    isUploadDisabled: true,
    isModalVisible: false,
    isModalPositive: false
  };

  //Returns true if a file's type is an image
  isFileImage = file => {
    return file && file["type"].split("/")[0] === "image";
  };

  //Invokes when the user picks a file by the Browse button - Manipulates the states according to the selected file
  fileSelectedHandler = e => {
    console.log("fileSelectedHandler invoked");
    console.log("The selected file is: ", e.target.files[0]);
    if (!this.isFileImage(e.target.files[0])) {
      this.setState({
        selectedFile: null,
        isUploadDisabled: true,
        isModalVisible: true,
        isModalPositive: false
      });
    } else {
      this.setState({
        selectedFile: e.target.files[0],
        isUploadDisabled: false
      });
    }
  };

  //Invokes when the user clicks on the Upload button - Uploads the file to the server's database
  fileUploadHandler = e => {
    e.preventDefault();
    console.log("fileUploadHandler invoked");

    const newImage = {
      name: this.state.selectedFile.name,
      path: window.URL.createObjectURL(this.state.selectedFile)
    };

    axios
      .post("/api/media", newImage)
      .then(() => {
        this.setState({ isModalVisible: true, isModalPositive: true });
      })
      .catch(err => console.log(err));

    this.setState(prevState => ({
      selectedFile: null,
      isUploadDisabled: !prevState.isUploadDisabled
    }));
  };

  //Manipulation of the Modal component - Closes it
  closeModalHandler = () => {
    this.setState({ isModalVisible: false });
  };

  render() {
    return (
      <>
        <Modal
          isModalVisible={this.state.isModalVisible}
          closeModalHandler={this.closeModalHandler}
          isModalPositive={this.state.isModalPositive}
        />

        <div className="Home">
          <h1>Welcome to my Uploading website</h1>
          <h2>Click on the browse button in order to upload media!</h2>
          <input
            type="file"
            onChange={this.fileSelectedHandler}
            accept="image/*"
            style={{ display: "none" }}
            ref={fileInput => (this.fileInput = fileInput)}
          />
          <Button
            name="Browse"
            click={() => this.fileInput.click()}
            type="button"
          />

          <Button
            name="Upload"
            click={this.fileUploadHandler}
            disabled={this.state.isUploadDisabled}
          />
        </div>
      </>
    );
  }
}

export default Home;
