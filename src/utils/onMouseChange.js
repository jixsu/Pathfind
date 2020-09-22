import { toggleNode, moveStart, moveEnd } from "./nodeChanging";
import { findNode, findStart, findEnd } from "./nodeFinding";

export function mouseDown(
  e,
  nodeId,
  grid,
  selectedAddon,
  selectedWeight,
  checkpoints
) {
  let mouse = {
    down: true,
    button: e.button,
    onStart: false,
    onEnd: false,
  };
  let newGrid = null;
  let newCheckpoints = null;
  const start = findStart(grid);
  const end = findEnd(grid);
  if (nodeId === start.id) {
    mouse.onStart = true;
  } else if (nodeId === end.id) {
    mouse.onEnd = true;
  } else {
    const {
      newGrid: toggledGrid,
      newCheckpoints: changedCheckpoints,
    } = toggleNode(
      e.button,
      nodeId,
      grid,
      selectedAddon,
      selectedWeight,
      checkpoints
    );
    newGrid = toggledGrid;
    newCheckpoints = changedCheckpoints;
  }
  return { newGrid, newCheckpoints, mouse };
}

export function mouseEnter(
  nodeId,
  mouse,
  grid,
  selectedAddon,
  selectedWeight,
  checkpoints
) {
  let newGrid = [];
  let newNodeClone = {};
  let changedNode = "";
  let newCheckpoints = [];

  if (mouse.onStart) {
    const newNode = findNode(nodeId, grid);
    const start = findStart(grid);
    const { newGrid: toggledGrid, newNodeClone: nodeClone } = moveStart(
      start,
      newNode,
      grid
    );
    newGrid = toggledGrid;
    newNodeClone = nodeClone;
    changedNode = "start";
  } else if (mouse.onEnd) {
    const newNode = findNode(nodeId, grid);
    const end = findEnd(grid);
    const { newGrid: toggledGrid, newNodeClone: nodeClone } = moveEnd(
      end,
      newNode,
      grid
    );
    newGrid = toggledGrid;
    newNodeClone = nodeClone;
    changedNode = "end";
  } else {
    const {
      newGrid: toggledGrid,
      newCheckpoints: changedCheckpoints,
    } = toggleNode(
      mouse.button,
      nodeId,
      grid,
      selectedAddon,
      selectedWeight,
      checkpoints
    );
    newGrid = toggledGrid;
    newCheckpoints = changedCheckpoints;
  }

  return { newGrid, newNodeClone, changedNode, newCheckpoints };
}
