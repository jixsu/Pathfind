import React, { Component } from "react";
import Controlbar from "./controlbar";
import Node from "./node";
import { animateNodes } from "../utils/animate";
import { reset } from "./../utils/reset";
import { clear } from "./../utils/clear";
import { mouseDown, mouseEnter } from "./../utils/onMouseChange";
import { runAlgorithm } from "./../utils/runAlgorithm";
import { generateGrid } from "../utils/generateGrid";
import { toast } from "react-toastify";
import "../css/pathfinder.css";

var assert = require("assert");

class Pathfinder extends Component {
  state = {
    grid: [],
    algorithm: "dijkstra",
    algorithms: ["dijkstra", "algorithm 1", "algorithm 2", "algorithm 3"],
    animateState: false,
    animateCompletion: 1, //1 for not started, 2 for algorithm animated started, 3 for shortestpath started, 4 for completed
    visitedNodes: [],
    shortestPath: [],
    algorithmIndex: 0,
    shortestPathIndex: 0,
    checkpoints: [],
    selectedAddon: "barriers",
    selectedWeight: 5,
    mouse: { down: false, button: NaN, onStart: false, onEnd: false },
  };

  dimensions = {
    //if these values are to be modified, change node.css dimensions to match
    row: 21,
    column: 60,
  };

  start = {
    row: 10,
    column: 20,
  };

  end = {
    row: 10,
    column: 40,
  };

  componentDidMount() {
    const grid = generateGrid(this.dimensions, this.start, this.end);
    this.setState({ grid });
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

    const { shortestPath, visitedNodes } = runAlgorithm(
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
    const { grid } = this.state;
    this.setState({ animateState: false }); //stops animation
    setTimeout(() => {
      //resets everything
      reset(grid);
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

  handleClear = (clearSelection) => {
    const { grid, animateCompletion } = this.state;
    if (animateCompletion !== 1) {
      return toast.error(
        "Please reset or wait for visualization to complete before clearing :)"
      );
    }
    const newGrid = clear(clearSelection, grid);

    if (clearSelection === "checkpoints" || clearSelection === "board") {
      this.setState({ checkpoints: [] });
    }
    this.setState({ grid: newGrid });
  };

  handleMouseDown = (e, nodeId) => {
    const {
      animateCompletion,
      grid,
      selectedAddon,
      selectedWeight,
      checkpoints,
    } = this.state;
    if (animateCompletion !== 1) {
      return toast.error(
        "Please reset or clear the board before making changes!"
      );
    }
    const { newGrid, newCheckpoints, mouse } = mouseDown(
      e,
      nodeId,
      grid,
      selectedAddon,
      selectedWeight,
      checkpoints
    );
    if (newGrid !== null && newCheckpoints !== null) {
      this.setState({ grid: newGrid, checkpoints: newCheckpoints });
    }
    this.setState({ mouse });
  };

  handleMouseEnter = (nodeId) => {
    const {
      mouse,
      grid,
      selectedAddon,
      selectedWeight,
      checkpoints,
    } = this.state;
    if (mouse.down) {
      const { newGrid, newNodeClone, changedNode, newCheckpoints } = mouseEnter(
        nodeId,
        mouse,
        grid,
        selectedAddon,
        selectedWeight,
        checkpoints
      );
      if (mouse.onStart || mouse.onEnd) {
        this.setState({
          [changedNode]: {
            row: newNodeClone.location.row,
            column: newNodeClone.location.column,
          },
        });
      } else {
        this.setState({ checkpoints: newCheckpoints });
      }
      this.setState({ grid: newGrid });
    }
  };

  handleMouseUp = () => {
    const mouse = {
      down: false,
      button: NaN,
      onStart: false,
      onEnd: false,
    };
    this.setState({ mouse });
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
          onClear={this.handleClear}
        />
        <div>{this.renderContainer(grid)}</div>
      </React.Fragment>
    );
  }
}

export default Pathfinder;
