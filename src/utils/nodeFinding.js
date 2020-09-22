export function findNode(nodeId, grid) {
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
}

export function findNodeRef(nodeId, grid) {
  const dimensions = {
    row: grid.length,
    column: grid[0].length,
  };

  for (let r = 0; r < dimensions.row; r++) {
    for (let c = 0; c < dimensions.column; c++) {
      if (grid[r][c].id === nodeId) {
        return { r, c };
      }
    }
  }
}

export function findStart(grid) {
  const dimensions = {
    row: grid.length,
    column: grid[0].length,
  };

  for (let r = 0; r < dimensions.row; r++) {
    for (let c = 0; c < dimensions.column; c++) {
      if (grid[r][c].isStart) {
        return grid[r][c];
      }
    }
  }
}

export function findEnd(grid) {
  const dimensions = {
    row: grid.length,
    column: grid[0].length,
  };

  for (let r = 0; r < dimensions.row; r++) {
    for (let c = 0; c < dimensions.column; c++) {
      if (grid[r][c].isEnd) {
        return grid[r][c];
      }
    }
  }
}
