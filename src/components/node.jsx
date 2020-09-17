import React, { Component } from "react";
import { Icon } from "semantic-ui-react";
import "../css/node.css";

class Node extends Component {
  state = {};

  handleClass = () => {
    const { isStart, isEnd } = this.props;
    if (isStart) return "node start";
    if (isEnd) return "node end";
    return "node default";
  };

  render() {
    const { id, isStart, isEnd } = this.props;
    return (
      <td className={this.handleClass()} id={id}>
        {isStart && <Icon name="play circle" id="start" />}
        {isEnd && <Icon name="stop circle" id="end" />}
      </td>
    );
  }
}

export default Node;
