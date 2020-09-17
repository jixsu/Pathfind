import React, { Component } from "react";
import { Icon } from "semantic-ui-react";
import "../css/node.css";

class Node extends Component {
  state = {};

  handleClass = () => {
    const { isStart, isEnd, isBarrier, isCheckpoint, isWeight } = this.props;
    if (isStart) return "node start";
    if (isEnd) return "node end";
    if (isBarrier) return "node barrier";
    if (isWeight) return "node weight";
    if (isCheckpoint) return "node checkpoint";
    return "node default";
  };

  render() {
    const {
      id,
      isStart,
      isEnd,
      onMouseDown,
      onMouseUp,
      onMouseEnter,
    } = this.props;
    return (
      <td
        className={this.handleClass()}
        id={id}
        onMouseDown={() => onMouseDown(id)}
        onMouseUp={() => onMouseUp()}
        onMouseEnter={() => onMouseEnter(id)}
      >
        {isStart && <Icon name="play circle" id="start" />}
        {isEnd && <Icon name="stop circle" id="end" />}
      </td>
    );
  }
}

export default Node;
