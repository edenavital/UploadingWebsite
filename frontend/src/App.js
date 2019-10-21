import React, { Component } from "react";
import "./App.css";
import Layout from "./hoc/Layout/Layout";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home/Home";
import MediaItems from "./components/MediaItems/MediaItems";
import axios from "axios";
class App extends Component {
  //Initialize "Context" state (global) without Redux, just have to pass it to the children components
  state = {
    media: [],
    loading: false
  };

  updateLoadingHandler = () => {
    this.setState({ loading: !this.state.loading });
  };

  componentDidMount() {
    console.log(
      "The media [] state is initialized (client Mount of Home component)"
    );
    this.updateMediaHandler();
  }

  //Request get media [] - using in Mount (componentDidMount) and when Updating the media (After sending any other requests, e.g Post)
  updateMediaHandler = () => {
    console.log("updateMediaHandler invoked");
    this.updateLoadingHandler();
    axios
      .get("/api/media")
      .then(media => {
        this.setState({ media: media.data });
        this.updateLoadingHandler();
      })
      .catch(err => console.log(err), this.updateLoadingHandler());
  };

  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route
              path="/media"
              render={props => (
                <MediaItems
                  media={this.state.media}
                  update={this.updateMediaHandler}
                  {...props}
                />
              )}
            />
            <Route
              path="/"
              render={props => (
                <Home
                  media={this.state.media}
                  loading={this.state.loading}
                  updateLoadingHandler={this.updateLoadingHandler}
                  updateMediaHandler={this.updateMediaHandler}
                  {...props}
                />
              )}
            />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
