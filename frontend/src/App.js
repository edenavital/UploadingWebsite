import React from "react";
import "./App.css";
import Layout from "./hoc/Layout/Layout";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home/Home";
import MediaItems from "./containers/MediaItems/MediaItems";

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/media" component={MediaItems} />
          <Route path="/" component={Home} />
        </Switch>
      </Layout>
    </div>
  );
};

export default App;
