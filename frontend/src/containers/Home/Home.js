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
    isModalPositive: true
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
        isUploadDisabled: false,
        isModalPositive: true
      });
    }
  };

  //Invokes when the user clicks on the Upload button - Uploads the file to the server's database
  fileUploadHandler = async e => {
    e.preventDefault();
    console.log("fileUploadHandler invoked");

    const toBase64 = file =>
      new Promise((res, rej) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          res(reader.result);
        };
        reader.onerror = err => {
          rej(err);
        };
      });

    const newImage = {
      name: this.state.selectedFile.name,
      path: await toBase64(this.state.selectedFile)
    };

    axios
      .post("/api/media", newImage)
      .then(() => {
        this.setState({ isModalVisible: true });
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
    //Modal's message to the user, depending on the state - isModalPositive
    let message = this.state.isModalPositive ? (
      <h4 style={{ color: "green" }}>
        The image has been successfully uploaded!
      </h4>
    ) : (
      <h4 style={{ color: "red" }}>The selected file is not an image!</h4>
    );

    return (
      <>
        <Modal
          isModalVisible={this.state.isModalVisible}
          closeModalHandler={this.closeModalHandler}
          modalType="Modal-text"
        >
          <div className="TextOfModal">{message}</div>
        </Modal>

        <div className="Home">
          <h1>Welcome to my Uploading website</h1>
          <h2>Click on the browse button in order to upload media!</h2>
          <input
            type="file"
            onChange={this.fileSelectedHandler}
            style={{ display: "none" }}
            ref={fileInput => (this.fileInput = fileInput)}
          />
          <Button name="Browse" click={() => this.fileInput.click()} />

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
