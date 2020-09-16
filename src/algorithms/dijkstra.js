function mapGrid(grid) {
  return grid.map((row) => {
    return row.map((node) => {
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

// function findStart(grid) {
//   const dimensions = {
//     row: grid.length,
//     column: grid[0].length,
//   };

//   for (let r = 0; r < dimensions.row; r++) {
//     for (let c = 0; c < dimensions.column; c++) {
//       if (grid[r][c].isStart) {
//         return grid[r][c];
//       }
//     }
//   }
// }

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
  const dijkstraGrid = mapGrid(grid);

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
    visitedNodes.push(currentNode);
  }

  // const startNode = findStart(dijkstraGrid);

  // const endNode = currentNode;

  let shortestPath = [];

  while (!currentNode.isStart) {
    shortestPath.push({ id: currentNode.id });
    currentNode = currentNode.prevNode;
  }

  console.log(shortestPath);
  console.log(visitedNodes);

  const data = {
    shortestPath: shortestPath,
    visitedNodes: visitedNodes,
  };

  return data;
}

export function animateDijkstra(visitedNodes) {
  for (let n = 0; n < visitedNodes.length; n++) {
    setTimeout(() => {
      const node = visitedNodes[n];
      document.getElementById(node.id).className = "node visited";
    }, 10 * n);
  }
}

export function animateShortestPath(shortestPath) {
  for (let n = shortestPath.length - 1; n >= 0; n++) {
    setTimeout(() => {
      const node = shortestPath[n];
      document.getElementById(node.id).className = "node shortest-path";
    }, 10 * n);
  }
}
