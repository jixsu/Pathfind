export function generateGrid({ row, column }, start, end) {
  let grid = [];

  for (let r = 0; r < row; r++) {
    let currentRow = [];

    for (let c = 0; c < column; c++) {
      currentRow.push({
        id: r.toString() + "-" + c.toString(),
        location: { row: r, column: c },
        weight: 1,
        isStart: r === start.row && c === start.column ? true : false,
        isEnd: r === end.row && c === end.column ? true : false,
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

export function createNewGrid(grid) {
  let newGrid = [];
  for (let r = 0; r < grid.length; r++) {
    let newRow = [];
    for (let c = 0; c < grid[0].length; c++) {
      newRow.push({
        id: r.toString() + "-" + c.toString(),
        location: { row: r, column: c },
        weight: grid[r][c].weight,
        isStart: false,
        isEnd: false,
        isBarrier: grid[r][c].isBarrier,
        isCheckpoint: false,
        isWeight: grid[r][c].isWeight,
      });
    }
    newGrid.push(newRow);
  }
  return newGrid;
}
