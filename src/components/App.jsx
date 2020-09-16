import React, { Component } from "react";
import Pathfinder from "./pathfinder";
import "../css/App.css";

class App extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <Pathfinder />
      </React.Fragment>
    );
  }
}

export default App;
