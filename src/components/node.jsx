import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWeightHanging,
  faCircle,
  faPlayCircle,
  faStopCircle,
} from "@fortawesome/free-solid-svg-icons";
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
      isCheckpoint,
      checkpointNumber,
      isWeight,
      weight,
      onMouseDown,
      onMouseUp,
      onMouseEnter,
    } = this.props;
    return (
      <td
        className={this.handleClass()}
        id={id}
        onMouseDown={(e) => onMouseDown(e, id)}
        onMouseUp={(e) => onMouseUp()}
        onMouseEnter={(e) => onMouseEnter(id)}
        onContextMenu={(e) => e.preventDefault()}
      >
        {isStart && <FontAwesomeIcon icon={faPlayCircle} />}
        {isEnd && <FontAwesomeIcon icon={faStopCircle} />}
        {isCheckpoint && (
          <span className="fa-layers">
            <span className={"fa-layers-text checkpoint-label"}>
              {checkpointNumber.toString()}
            </span>
            <FontAwesomeIcon icon={faCircle} />
          </span>
        )}
        {isWeight && (
          <span className="fa-layers">
            <span className={"fa-layers-text weight-label"}>
              {weight.toString()}
            </span>
            <FontAwesomeIcon icon={faWeightHanging} />
          </span>
        )}
      </td>
    );
  }
}

export default Node;
