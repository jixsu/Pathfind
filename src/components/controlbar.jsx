import React, { Component } from "react";

class Controlbar extends Component {
  state = {};
  render() {
    const { onVisualize } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="btn btn-dark" onClick={onVisualize}>
          Visualize!
        </button>
      </nav>
    );
  }
}

export default Controlbar;
