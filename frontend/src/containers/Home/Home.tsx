import React, { Component, createRef } from "react";
import "./Home.css";
import Button from "../../components/Button/Button";
import axios from "axios";
import Modal from "../../components/UI/Modal/Modal";
import Spinner from "../../components/UI/Spinner/Spinner";

interface State {
  selectedFile: any;
  isUploadDisabled: boolean;
  isModalVisible: boolean;
  modalTextType: string;
  loading: boolean;
}

class Home extends Component<{}, State> {
  private fileInput = createRef<HTMLInputElement>();

  state = {
    selectedFile: { name: "Initial file" },
    isUploadDisabled: true,
    isModalVisible: false,
    modalTextType: "",
    loading: false
  };

  //Returns true if a file's type is an image
  isFileImage = (file: File): boolean => {
    return file && file["type"].split("/")[0] === "image";
  };

  //Returns true if a file's size is bigger than 3mb
  isFileSizeLegit = (file: File): boolean => {
    return file.size < 3000000;
  };

  //Invokes when the user selects a file by the Browse button - Manipulates the states according to the selected file
  fileSelectedHandler = (e: any): void => {
    console.log("fileSelectedHandler invoked");
    const selectedFile = e.target.files[0];
    console.log("The selected file is: ", selectedFile);

    //If the file is NOT an image...
    if (!this.isFileImage(selectedFile)) {
      this.setState({
        selectedFile: null,
        isUploadDisabled: true,
        isModalVisible: true,
        modalTextType: "type"
      });
      //If the file's size is greater than 3MB...
    } else if (!this.isFileSizeLegit(selectedFile)) {
      this.setState({
        selectedFile: null,
        isUploadDisabled: true,
        isModalVisible: true,
        modalTextType: "size"
      });
      //If the file can be uploaded than
    } else {
      this.setState({
        selectedFile: selectedFile,
        isUploadDisabled: false,
        modalTextType: "success"
      });
    }
  };

  //Invokes when the user clicks on the Upload button - Uploads the image to the server's database
  fileUploadHandler = async (e: React.SyntheticEvent): Promise<void> => {
    console.log("fileUploadHandler invoked");
    e.preventDefault();

    this.setState({ loading: true });

    const toBase64 = (file: any) =>
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
        this.setState({ isModalVisible: true, loading: false });
      })
      .catch(err => {
        console.log(err);
        this.setState({ loading: false });
      });

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
    //Shows a Spinner depending on the loading state, appears when posting data to the server
    let spinner = this.state.loading ? <Spinner /> : null;

    //Modal's message to the user, depending on the state - modalTextType - size, type, success
    let message: React.ReactNode = "";
    switch (this.state.modalTextType) {
      case "type": {
        message = (
          <h4 style={{ color: "red" }}>The selected file is not an image!</h4>
        );
        break;
      }
      case "size": {
        message = (
          <h4 style={{ color: "red" }}>
            The selected file's size is more than 3MB!
          </h4>
        );
        break;
      }
      default:
        message = (
          <h4 style={{ color: "green" }}>
            The image has been successfully uploaded!
          </h4>
        );
    }

    return (
      <>
        {spinner}

        <Modal
          isModalVisible={this.state.isModalVisible}
          closeModalHandler={this.closeModalHandler}
          modalType="text"
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
            ref={this.fileInput}
          />
          <Button
            name="Browse"
            click={() => {
              const node = this.fileInput.current;
              if (node) {
                node.click();
              }
            }}
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
