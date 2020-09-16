import React, { Component } from "react";
import { Button, Icon } from "semantic-ui-react";

class Controlbar extends Component {
  state = {};
  render() {
    const {
      onVisualize,
      onPause,
      onReset,
      animateState,
      animateCompletion,
    } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
        >
          Visualize!
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
      </nav>
    );
  }
}

export default Controlbar;
