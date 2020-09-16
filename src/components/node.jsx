import React, { Component } from "react";
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
    const { id } = this.props;
    return <td className={this.handleClass()} id={id}></td>;
  }
}

export default Node;
