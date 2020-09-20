import React, { Component } from "react";
import Controlbar from "./controlbar";
import Node from "./node";
import { dijkstra, dijkstraCheckpoints } from "./../algorithms/dijkstra";
import { animateNodes } from "../algorithms/animate";
import { toast } from "react-toastify";
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
    algorithms: ["dijkstra", "algorithm 1", "algorithm 2", "algorithm 3"],
    animateState: false,
    animateCompletion: 1, //1 for not started, 2 for algorithm animated started, 3 for shortestpath started, 4 for completed
    visitedNodes: [],
    shortestPath: [],
    algorithmIndex: 0,
    shortestPathIndex: 0,
    barriers: [],
    checkpoints: [],
    weights: [],
    selectedAddon: "barriers",
    selectedWeight: 5,
    mouse: { down: false, button: NaN },
  };

  dimensions = {
    //if these values are to be modified, change node.css dimensions to match
    row: 21,
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
          isBarrier: false,
          isCheckpoint: false,
          checkpointNumber: NaN,
          isWeight: false,
        });
      }
      grid.push(currentRow);
    }

    return grid;
  }

  renderContainer = (grid) => {
    return (
      <table className="node-grid" onMouseLeave={() => this.handleMouseUp()}>
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
                isBarrier={node.isBarrier}
                isCheckpoint={node.isCheckpoint}
                checkpointNumber={node.checkpointNumber}
                isWeight={node.isWeight}
                onMouseDown={this.handleMouseDown}
                onMouseUp={this.handleMouseUp}
                onMouseEnter={this.handleMouseEnter}
              />
            );
          })}
        </tr>
      );
    });
  };

  runAlgorithm = (algorithm, grid, checkpoints) => {
    if (algorithm === "dijkstra") {
      if (checkpoints.length === 0) {
        return dijkstra(grid);
      } else {
        return dijkstraCheckpoints(grid, checkpoints);
      }
      // console.log(dijkstraCheckpoints(grid, checkpoints));
      // return dijkstraCheckpoints(grid, checkpoints);
      // return dijkstra(grid);
    }
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
      // await animateNodes(visitedNodes[aIndex], "node visited", 10);
      let animateNodesBind = animateNodes.bind(this);
      await animateNodesBind(visitedNodes[aIndex], "visited", 10);
      aIndex++;
      aStateChecker = this.state.animateState;
      if (aIndex === visitedNodes.length) {
        aStateChecker = false;
        localCompletion = 3;
      }
    }

    let sIndex = 0;
    if (shortestPath.length > 0) {
      sIndex = shortestPathIndex;
      let sStateChecker = localCompletion === 3 ? true : false;
      while (sStateChecker) {
        // await animateNodes(shortestPath[sIndex], "node shortest-path", 40);
        let animateNodesBind = animateNodes.bind(this);
        await animateNodesBind(shortestPath[sIndex], "shortest-path", 40);
        sIndex++;
        sStateChecker = this.state.animateState;
        if (sIndex === shortestPath.length) {
          localCompletion = 4;
          console.log("Completed");
          sStateChecker = false;
        }
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
      checkpoints,
    } = this.state;
    assert(animateState === false && animateCompletion === 1);
    this.setState({ animateState: true, animateCompletion: 2 });

    const { shortestPath, visitedNodes } = this.runAlgorithm(
      algorithm,
      grid,
      checkpoints
    );
    // console.log(visitedNodes);
    // console.log(shortestPath);

    if (shortestPath.length === 0) {
      toast.error("No path to destination was found...");
    }

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
    const { animateCompletion, grid } = this.state;

    // assert(animateCompletion !== 1);
    this.setState({ animateState: false }); //stops animation
    setTimeout(() => {
      //resets everything
      for (let nodes of grid) {
        for (let node of nodes) {
          if (node.isStart) {
            document.getElementById(node.id).className = "node start";
          } else if (node.isEnd) {
            document.getElementById(node.id).className = "node end";
          } else if (node.isBarrier) {
            document.getElementById(node.id).className = "node barrier";
          } else if (node.isCheckpoint) {
            document.getElementById(node.id).className = "node checkpoint";
          } else if (node.isWeight) {
            document.getElementById(node.id).className = "node weight";
          } else {
            document.getElementById(node.id).className = "node default";
          }
        }
      }
      this.setState({
        animateCompletion: 1,
        algorithmIndex: 0,
        shortestPathIndex: 0,
        visitedNodes: [],
        shortestPath: [],
      });
      console.log("Terminated");
    }, 11);
  };

  handleAlgorithmSelect = (algorithm) => {
    this.setState({ algorithm });
    this.handleReset();
  };

  handleAddonSelect = (addon) => {
    this.setState({ selectedAddon: addon });
  };

  findNode = (nodeId, grid) => {
    const dimensions = {
      row: grid.length,
      column: grid[0].length,
    };

    for (let r = 0; r < dimensions.row; r++) {
      for (let c = 0; c < dimensions.column; c++) {
        if (grid[r][c].id === nodeId) {
          return grid[r][c];
        }
      }
    }
  };

  toggleNode = (button, nodeId) => {
    const { grid, selectedAddon, selectedWeight, checkpoints } = this.state;
    let newGrid = grid;

    const preIndex = nodeId.split("-");
    let indexArray = [];
    for (const element of preIndex) {
      indexArray.push(parseInt(element));
    }
    let node = newGrid[indexArray[0]][indexArray[1]];

    let newCheckpoints = checkpoints;
    if (button === 0) {
      if (
        !node.isStart &&
        !node.isEnd &&
        !node.isWeight &&
        !node.isCheckpoint &&
        !node.isBarrier
      ) {
        if (selectedAddon === "barriers") {
          node.isBarrier = true;
        } else if (selectedAddon === "weights") {
          node.isWeight = true;
          node.weight = selectedWeight;
        } else if (selectedAddon === "checkpoints") {
          newCheckpoints.push(node);
          node.checkpointNumber = newCheckpoints.length;
          node.isCheckpoint = true;
        }
      }
    } else if (button === 2) {
      node.isBarrier = false;
      node.isCheckpoint = false;
      const index = checkpoints.findIndex(
        (checkpoint) => checkpoint.id === node.id
      );
      if (index !== -1) {
        newCheckpoints.splice(index, 1);
        let cNumber = 1;
        for (let checkpoint of newCheckpoints) {
          const checkpointNode = this.findNode(checkpoint.id, newGrid);
          newGrid[checkpointNode.location.row][
            checkpointNode.location.column
          ].checkpointNumber = cNumber;
          cNumber++;
        }
      }
      node.checkpointNumber = NaN;
      node.isWeight = false;
      node.weight = 1;
    }

    newGrid[indexArray[0]][indexArray[1]] = node;
    this.setState({ grid: newGrid, checkpoints: newCheckpoints });
  };

  handleMouseDown = (e, nodeId) => {
    this.toggleNode(e.button, nodeId);
    this.setState({ mouse: { down: true, button: e.button } });
  };

  handleMouseEnter = (nodeId) => {
    const { mouse } = this.state;

    if (mouse.down) {
      this.toggleNode(mouse.button, nodeId);
    }
  };

  handleMouseUp = () => {
    this.setState({ mouse: { down: false, button: NaN } });
  };

  render() {
    const {
      grid,
      animateState,
      animateCompletion,
      algorithm,
      algorithms,
      selectedAddon,
    } = this.state;
    return (
      <React.Fragment>
        <Controlbar
          onVisualize={this.handleVisualize}
          onPause={this.handlePausePlay}
          onReset={this.handleReset}
          animateState={animateState}
          animateCompletion={animateCompletion}
          algorithm={algorithm}
          algorithms={algorithms.filter((a) => a !== algorithm)}
          onAlgorithmSelect={this.handleAlgorithmSelect}
          onAddonSelect={this.handleAddonSelect}
          selectedAddon={selectedAddon}
        />
        <div>{this.renderContainer(grid)}</div>
      </React.Fragment>
    );
  }
}

export default Pathfinder;
