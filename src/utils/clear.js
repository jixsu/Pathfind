export function clear(clearSelection, grid) {
  let newGrid = grid;
  let selection = null;

  if (clearSelection === "board") {
    selection = ["isBarrier", "isWeight", "isCheckpoint"];
    for (let count = 0; count < 3; count++) {
      newGrid = clearGridBySelection(selection[count], newGrid);
    }
  } else {
    if (clearSelection === "barriers") {
      selection = "isBarrier";
    } else if (clearSelection === "weights") {
      selection = "isWeight";
    } else if (clearSelection === "checkpoints") {
      selection = "isCheckpoint";
    }
    newGrid = clearGridBySelection(selection, grid);
  }
  return newGrid;
}

export function clearGridBySelection(selection, grid) {
  let newGrid = grid;
  for (let row of newGrid) {
    for (let node of row) {
      node[selection] = false;
      if (selection === "isCheckpoint") {
        node.checkpointNumber = NaN;
      } else if (selection === "isWeight") {
        node.weight = 1;
      }
    }
  }
  return newGrid;
}
