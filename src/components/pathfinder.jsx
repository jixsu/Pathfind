import React, { Component } from "react";
import Node from "./node";
import "../css/pathfinder.css";

class Pathfinder extends Component {
  state = {
    grid: [],
  };

  dimensions = {
    row: 25,
    column: 60,
  };

  componentDidMount() {
    const grid = this.generateGrid(this.dimensions);
    this.setState({ grid });
  }

  generateGrid({ row, column }) {
    let grid = [];

    for (let r = 0; r < row; r++) {
      let row = [];

      for (let c = 0; c < column; c++) {
        row.push({ key: r.toString() + c.toString() });
      }
      grid.push(row);
    }

    return grid;
  }

  renderContainer = (grid) => {
    return <div className="node-grid">{this.renderNodes(grid)}</div>;
  };

  renderNodes = (grid) => {
    return grid.map((row, rowIndex) => {
      return (
        <div className="node-row" key={rowIndex}>
          {row.map((item) => {
            return <Node key={item.key} />;
          })}
        </div>
      );
    });
  };

  render() {
    const { grid } = this.state;
    return <div>{this.renderContainer(grid)}</div>;
  }
}

export default Pathfinder;
