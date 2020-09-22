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
