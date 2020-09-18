function mapGrid(grid) {
  return grid.map((row) => {
    return row.map((node) => {
      if (node.isBarrier) {
        return {
          ...node,
          visited: true,
          distanceToStart: node.isStart ? 0 : Infinity,
          prevNode: {
            row: NaN,
            column: NaN,
          },
        };
      }
      return {
        ...node,
        visited: false,
        distanceToStart: node.isStart ? 0 : Infinity,
        prevNode: {
          row: NaN,
          column: NaN,
        },
      };
    });
  });
}

function findClosestUnvisited(grid) {
  const dimensions = {
    row: grid.length,
    column: grid[0].length,
  };

  let closestUnvisited = { distanceToStart: Infinity };

  for (let row = 0; row < dimensions.row; row++) {
    for (let column = 0; column < dimensions.column; column++) {
      if (!grid[row][column].visited) {
        if (
          grid[row][column].distanceToStart < closestUnvisited.distanceToStart
        ) {
          closestUnvisited = grid[row][column];
        }
      }
    }
  }

  return closestUnvisited;
}

function findUnvisitedNeighbors(currentNode, grid) {
  let neighbors = [];
  if (grid[currentNode.location.row + 1]) {
    if (
      !grid[currentNode.location.row + 1][currentNode.location.column].visited
    ) {
      neighbors.push(
        grid[currentNode.location.row + 1][currentNode.location.column]
      );
    }
  }
  if (grid[currentNode.location.row][currentNode.location.column + 1]) {
    if (
      !grid[currentNode.location.row][currentNode.location.column + 1].visited
    ) {
      neighbors.push(
        grid[currentNode.location.row][currentNode.location.column + 1]
      );
    }
  }
  if (grid[currentNode.location.row - 1]) {
    if (
      !grid[currentNode.location.row - 1][currentNode.location.column].visited
    ) {
      neighbors.push(
        grid[currentNode.location.row - 1][currentNode.location.column]
      );
    }
  }
  if (grid[currentNode.location.row][currentNode.location.column - 1]) {
    if (
      !grid[currentNode.location.row][currentNode.location.column - 1].visited
    ) {
      neighbors.push(
        grid[currentNode.location.row][currentNode.location.column - 1]
      );
    }
  }
  return neighbors;
}

export function dijkstra(grid) {
  let dijkstraGrid = mapGrid(grid);

  let visitedNodes = [];
  let currentNode = { isEnd: false };
  while (!currentNode.isEnd) {
    currentNode = findClosestUnvisited(dijkstraGrid);
    currentNode.visited = true;
    // console.log(currentNode);

    const unvisitedNeighbors = findUnvisitedNeighbors(
      currentNode,
      dijkstraGrid
    );
    // console.log(neighbors);

    for (let neighbor of unvisitedNeighbors) {
      const newDistance = currentNode.distanceToStart + neighbor.weight;
      if (newDistance < neighbor.distanceToStart) {
        neighbor.distanceToStart = newDistance;
        neighbor.prevNode = currentNode;
      }
      dijkstraGrid[neighbor.location.row][neighbor.location.column] = neighbor;
    }

    dijkstraGrid[currentNode.location.row][
      currentNode.location.column
    ] = currentNode;
    visitedNodes.push([{ id: currentNode.id }]);
  }

  // const startNode = findStart(dijkstraGrid);

  // const endNode = currentNode;

  let shortestPath = [];

  while (!currentNode.isStart) {
    shortestPath.unshift([{ id: currentNode.id }]);
    currentNode = currentNode.prevNode;
  }
  shortestPath.unshift([{ id: currentNode.id }]);

  // console.log(shortestPath);
  // console.log(visitedNodes);

  return { shortestPath, visitedNodes };
}

function findStart(grid) {
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

function findEnd(grid) {
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

function createNewGrid(grid) {
  let newGrid = [];
  for (let r = 0; r < grid.length; r++) {
    let newRow = [];
    for (let c = 0; c < grid[0].length; c++) {
      newRow.push({
        id: r.toString() + "-" + c.toString(),
        location: { row: r, column: c },
        weight: 1,
        isStart: false,
        isEnd: false,
        isBarrier: false,
        isCheckpoint: false,
        isWeight: false,
      });
    }
    newGrid.push(newRow);
  }
  return newGrid;
}

export function dijkstraCheckpoints(grid, checkpoints) {
  const start = findStart(grid);
  const end = findEnd(grid);

  let shortestPath = [];
  let visitedNodes = [];

  for (let c = 0; c <= checkpoints.length; c++) {
    const newGrid = createNewGrid(grid);
    if (c === 0) {
      newGrid[start.location.row][start.location.column].isStart = true;
      newGrid[checkpoints[c].location.row][
        checkpoints[c].location.column
      ].isEnd = true;
      let { shortestPath: short, visitedNodes: visited } = dijkstra(newGrid);
      console.log(short);
      shortestPath.push(...short);
      visitedNodes.push(...visited);
    } else if (c === checkpoints.length) {
      newGrid[checkpoints[c - 1].location.row][
        checkpoints[c - 1].location.column
      ].isStart = true;
      newGrid[end.location.row][end.location.column].isEnd = true;
      let { shortestPath: short, visitedNodes: visited } = dijkstra(newGrid);
      short.splice(0, 1);
      shortestPath.push(...short);
      visitedNodes.push(...visited);
    } else {
      newGrid[checkpoints[c - 1].location.row][
        checkpoints[c - 1].location.column
      ].isStart = true;
      newGrid[checkpoints[c].location.row][
        checkpoints[c].location.column
      ].isEnd = true;
      let { shortestPath: short, visitedNodes: visited } = dijkstra(newGrid);
      short.splice(0, 1);
      shortestPath.push(...short);
      visitedNodes.push(...visited);
    }
  }
  return { shortestPath, visitedNodes };
}
