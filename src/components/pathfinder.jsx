import React, { Component } from "react";
import Node from "./node";
import "../css/pathfinder.css";

class Pathfinder extends Component {
  state = {
    grid: [],
    start: {
      x: 20,
      y: 10,
    },
    end: {
      x: 40,
      y: 10,
    },
  };

  dimensions = {
    //if these values are to be modified, change node.css dimensions to match
    row: 25,
    column: 60,
  };

  componentDidMount() {
    const grid = this.generateGrid(this.dimensions);
    this.setState({ grid });
  }

  isStart = ({ x, y }) => {
    const { start } = this.state;

    if (start.x === x && start.y === y) return true;
    return false;
  };

  isEnd = ({ x, y }) => {
    const { end } = this.state;

    if (end.x === x && end.y === y) return true;
    return false;
  };

  generateGrid({ row, column }) {
    let grid = [];

    for (let r = 0; r < row; r++) {
      let row = [];

      for (let c = 0; c < column; c++) {
        row.push({
          key: r.toString() + "-" + c.toString(),
          coords: { x: c, y: r },
        });
      }
      grid.push(row);
    }

    return grid;
  }

  renderContainer = (grid) => {
    return (
      <table className="node-grid">
        <tbody>{this.renderNodes(grid)}</tbody>
      </table>
    );
  };

  renderNodes = (grid) => {
    return grid.map((row, rowIndex) => {
      return (
        <tr className="node-row" key={rowIndex} id={rowIndex}>
          {row.map((item) => {
            return (
              <Node
                key={item.key}
                id={item.key}
                isStart={this.isStart(item.coords)}
                isEnd={this.isEnd(item.coords)}
              />
            );
          })}
        </tr>
      );
    });
  };

  render() {
    const { grid } = this.state;
    return <div>{this.renderContainer(grid)}</div>;
  }
}

export default Pathfinder;
