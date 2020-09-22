import { findNode, findNodeRef } from "./nodeFinding";

export function toggleNode(
  button,
  nodeId,
  grid,
  selectedAddon,
  selectedWeight,
  checkpoints
) {
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
        const checkpointNode = findNode(checkpoint.id, newGrid);
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
  return { newGrid, newCheckpoints };
}

export function moveStart(oldNode, newNode, grid) {
  let newNodeClone = newNode;
  let oldNodeClone = oldNode;
  let oldNodeRef = findNodeRef(oldNode.id, grid);
  let newNodeRef = findNodeRef(newNode.id, grid);
  let newGrid = grid;
  if (
    !(
      newNode.isBarrier ||
      newNode.isCheckpoint ||
      newNode.isWeight ||
      newNode.isEnd
    )
  ) {
    newNodeClone.isStart = true;
    oldNodeClone.isStart = false;
    newGrid[oldNodeRef.r][oldNodeRef.c] = oldNodeClone;
    newGrid[newNodeRef.r][newNodeRef.c] = newNodeClone;
  }
  return { newGrid, newNodeClone };
}

export function moveEnd(oldNode, newNode, grid) {
  let newNodeClone = newNode;
  let oldNodeClone = oldNode;
  let oldNodeRef = findNodeRef(oldNode.id, grid);
  let newNodeRef = findNodeRef(newNode.id, grid);
  let newGrid = grid;
  if (
    !(
      newNode.isBarrier ||
      newNode.isCheckpoint ||
      newNode.isWeight ||
      newNode.isStart
    )
  ) {
    newNodeClone.isEnd = true;
    oldNodeClone.isEnd = false;
    newGrid[oldNodeRef.r][oldNodeRef.c] = oldNodeClone;
    newGrid[newNodeRef.r][newNodeRef.c] = newNodeClone;
  }
  return { newGrid, newNodeClone };
}
