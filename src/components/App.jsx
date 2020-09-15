import React, { Component } from "react";
import Navbar from "./navbar";
import Pathfinder from "./pathfinder";
import "../css/App.css";

class App extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Pathfinder />
      </React.Fragment>
    );
  }
}

export default App;
