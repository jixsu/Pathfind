import React, { Component } from "react";
import { Button, Icon } from "semantic-ui-react";

class Controlbar extends Component {
  renderTitle = () => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginRight: "50px",
          marginLeft: "35px",
        }}
      >
        <p style={{ fontSize: "30px", marginBottom: "5px", marginTop: "5px" }}>
          Pathfind
        </p>
        <p style={{ fontSize: "15px", marginBottom: "5px", marginTop: "5px" }}>
          Visualization Tool
        </p>
      </div>
    );
  };

  renderAlgorithms = () => {
    const {
      algorithm,
      algorithms,
      onAlgorithmSelect,
      animateCompletion,
    } = this.props;
    let algorithmsArray = [];
    for (const algorithm of algorithms) {
      algorithmsArray.push(
        <Button
          className="dropdown-item"
          onClick={() => onAlgorithmSelect(algorithm)}
        >
          {algorithm.charAt(0).toUpperCase() + algorithm.slice(1)}
        </Button>
      );
    }

    return (
      <React.Fragment>
        <li className="nav-item">
          <p className="nav-link" style={{ color: "black" }}>
            Algorithm:
          </p>
        </li>
        <li className="nav-item dropdown">
          <Button
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            disabled={animateCompletion === 2 || animateCompletion === 3}
          >
            {algorithm.charAt(0).toUpperCase() + algorithm.slice(1)}
          </Button>
          <div
            className="dropdown-menu"
            aria-labelledby="navbarDropdown"
            style={{
              fontSize: "15px",
              padding: "0",
              margin: "0",
              border: "0px solid black",
            }}
          >
            {algorithmsArray}
          </div>
        </li>
      </React.Fragment>
    );
  };

  renderAddons = () => {
    return (
      <React.Fragment>
        <li className="nav-item">
          <p className="nav-link" style={{ color: "black" }}>
            Add-on Nodes:
          </p>
        </li>
        <li className="nav-item">
          <Button.Group>
            <Button>Weighted</Button>
            <Button>Checkpoint</Button>
            <Button>Barrier</Button>
          </Button.Group>
        </li>
      </React.Fragment>
    );
  };

  renderControlButtons = () => {
    const {
      onVisualize,
      onPause,
      onReset,
      animateState,
      animateCompletion,
    } = this.props;
    return (
      <div className="m-auto align-items-center">
        <Button animated onClick={onReset} disabled={animateCompletion === 1}>
          <Button.Content visible>
            <Icon name="redo alternate" />
          </Button.Content>
          <Button.Content hidden>Reset</Button.Content>
        </Button>
        <Button
          color="purple"
          onClick={onVisualize}
          disabled={animateCompletion !== 1}
          animated
        >
          <Button.Content visible>Visualize!</Button.Content>
          <Button.Content hidden>Visualize!</Button.Content>
        </Button>
        <Button
          animated
          onClick={onPause}
          disabled={animateCompletion === 1 || animateCompletion === 4}
        >
          <Button.Content visible>
            <Icon
              name={
                !animateState &&
                animateCompletion !== 1 &&
                animateCompletion !== 4
                  ? "play"
                  : "pause"
              }
            />
          </Button.Content>
          <Button.Content hidden>
            {!animateState && animateCompletion !== 1 && animateCompletion !== 4
              ? "Play"
              : "Pause"}
          </Button.Content>
        </Button>
      </div>
    );
  };

  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {this.renderTitle()}
        <ul className="navbar-nav" style={{ fontSize: "15px" }}>
          {this.renderAlgorithms()}
        </ul>
        {this.renderControlButtons()}
        <ul className="navbar-nav" style={{ fontSize: "15px" }}>
          {this.renderAddons()}
        </ul>
      </nav>
    );
  }
}

export default Controlbar;
