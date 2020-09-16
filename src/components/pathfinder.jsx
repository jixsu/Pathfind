import React, { Component } from "react";
import Controlbar from "./controlbar";
import Node from "./node";
import { dijkstra } from "./../algorithms/dijkstra";
import "../css/pathfinder.css";

class Pathfinder extends Component {
  state = {
    grid: [],
    start: {
      row: 10,
      column: 20,
    },
    end: {
      row: 0,
      column: 59,
    },
    algorithm: "dijkstra",
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

  isStart = (row, column) => {
    const { start } = this.state;

    if (start.row === row && start.column === column) return true;
    return false;
  };

  isEnd = (row, column) => {
    const { end } = this.state;

    if (end.row === row && end.column === column) return true;
    return false;
  };

  generateGrid({ row, column }) {
    let grid = [];

    for (let r = 0; r < row; r++) {
      let currentRow = [];

      for (let c = 0; c < column; c++) {
        currentRow.push({
          id: r.toString() + "-" + c.toString(),
          location: { row: r, column: c },
          weight: 1,
          isStart: this.isStart(r, c),
          isEnd: this.isEnd(r, c),
        });
      }
      grid.push(currentRow);
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
          {row.map((node) => {
            return (
              <Node
                key={node.id}
                id={node.id}
                location={node.location}
                weight={node.weight}
                isStart={node.isStart}
                isEnd={node.isEnd}
              />
            );
          })}
        </tr>
      );
    });
  };

  handleVisualize = () => {
    const { grid, algorithm } = this.state;
    if (algorithm === "dijkstra") {
      return dijkstra(grid);
    }
  };

  render() {
    const { grid } = this.state;
    return (
      <React.Fragment>
        <Controlbar onVisualize={this.handleVisualize} />
        <div>{this.renderContainer(grid)}</div>;
      </React.Fragment>
    );
  }
}

export default Pathfinder;
