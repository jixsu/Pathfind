import React, { Component } from "react";
import Controlbar from "./controlbar";
import Node from "./node";
import { dijkstra } from "./../algorithms/dijkstra";
import { animateNodes } from "../algorithms/animate";
import "../css/pathfinder.css";

var assert = require("assert");

class Pathfinder extends Component {
  state = {
    grid: [],
    start: {
      row: 10,
      column: 20,
    },
    end: {
      row: 10,
      column: 40,
    },
    algorithm: "dijkstra",
    animateState: false,
    animateCompletion: 1, //1 for not started, 2 for algorithm animated started, 3 for shortestpath started, 4 for completed
    visitedNodes: [],
    shortestPath: [],
    algorithmIndex: 0,
    shortestPathIndex: 0,
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

  runAlgorithm = (algorithm, grid) => {
    if (algorithm === "dijkstra") return dijkstra(grid);
  };

  animateAlgorithms = async (
    animateCompletion,
    visitedNodes,
    shortestPath,
    algorithmIndex,
    shortestPathIndex
  ) => {
    //needed in this file since function does state checking through every iteration

    let localCompletion = animateCompletion;

    let aIndex = algorithmIndex;
    let aStateChecker = localCompletion === 2 ? true : false;
    while (aStateChecker) {
      await animateNodes(visitedNodes[aIndex], "node visited", 10);
      aIndex++;
      aStateChecker = this.state.animateState;
      if (aIndex === visitedNodes.length) {
        aStateChecker = false;
        localCompletion = 3;
      }
    }

    let sIndex = shortestPathIndex;
    let sStateChecker = localCompletion === 3 ? true : false;
    while (sStateChecker) {
      await animateNodes(shortestPath[sIndex], "node shortest-path", 40);
      sIndex++;
      sStateChecker = this.state.animateState;
      if (sIndex === shortestPath.length) {
        localCompletion = 4;
        console.log("Completed");
        sStateChecker = false;
      }
    }
    this.setState({
      algorithmIndex: aIndex,
      shortestPathIndex: sIndex,
      animateCompletion: localCompletion,
      animateState: false,
    });
  };

  handleVisualize = async () => {
    const {
      animateState,
      animateCompletion,
      grid,
      algorithm,
      shortestPathIndex,
      algorithmIndex,
    } = this.state;
    assert(animateState === false && animateCompletion === 1);
    this.setState({ animateState: true, animateCompletion: 2 });

    const { shortestPath, visitedNodes } = this.runAlgorithm(algorithm, grid);
    this.setState({ shortestPath, visitedNodes });

    console.log("Initiating");

    await this.animateAlgorithms(
      2,
      visitedNodes,
      shortestPath,
      algorithmIndex,
      shortestPathIndex
    );
  };

  handlePausePlay = async () => {
    const {
      animateState,
      animateCompletion,
      shortestPath,
      visitedNodes,
      shortestPathIndex,
      algorithmIndex,
    } = this.state;
    assert(animateCompletion === 2 || animateCompletion === 3);

    let newState = !animateState;
    this.setState({ animateState: newState });

    if (newState === true) {
      console.log("Resuming");
      await this.animateAlgorithms(
        animateCompletion,
        visitedNodes,
        shortestPath,
        algorithmIndex,
        shortestPathIndex
      );
    } else {
      console.log("Paused");
    }
  };

  handleReset = () => {
    const { animateCompletion } = this.state;
    assert(animateCompletion !== 1);
    this.setState({ animateState: false }); //stops animation
    setTimeout(() => {
      //resets everything
      this.setState({
        animateCompletion: 1,
        algorithmIndex: 0,
        shortestPathIndex: 0,
        visitedNodes: [],
        shortestPath: [],
      });
    }, 11);
  };

  render() {
    const { grid, animateState, animateCompletion } = this.state;
    return (
      <React.Fragment>
        <Controlbar
          onVisualize={this.handleVisualize}
          onPause={this.handlePausePlay}
          onReset={this.handleReset}
          animateState={animateState}
          animateCompletion={animateCompletion}
        />
        <div>{this.renderContainer(grid)}</div>
      </React.Fragment>
    );
  }
}

export default Pathfinder;
