import React, { Component } from "react";
import Pathfinder from "./pathfinder";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../css/App.css";
import InfoMenu from "./infoMenu";

class App extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <Pathfinder />
        <InfoMenu />
      </React.Fragment>
    );
  }
}

export default App;
