import React, { Component } from "react";
import Pathfinder from "./pathfinder";
import InfoMenu from "./infoMenu";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../css/App.css";

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
