import { findStart, findEnd } from "../utils/nodeFinding";
import { createNewGrid } from "../utils/generateGrid";

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
  let shortestDistance = 0;
  while (!currentNode.isEnd) {
    currentNode = findClosestUnvisited(dijkstraGrid);
    if (currentNode.distanceToStart === Infinity) {
      return { shortestPath: [], visitedNodes };
    }
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
  shortestDistance = currentNode.distanceToStart;

  while (!currentNode.isStart) {
    shortestPath.unshift([{ id: currentNode.id }]);
    currentNode = currentNode.prevNode;
  }
  shortestPath.unshift([{ id: currentNode.id }]);

  // console.log(shortestPath);
  // console.log(visitedNodes);

  return { shortestPath, visitedNodes, shortestDistance };
}

export function dijkstraCheckpoints(grid, checkpoints) {
  const start = findStart(grid);
  const end = findEnd(grid);

  let shortestPath = [];
  let visitedNodes = [];
  let shortestDistance = 0;

  for (let c = 0; c <= checkpoints.length; c++) {
    const newGrid = createNewGrid(grid);
    if (c === 0) {
      newGrid[start.location.row][start.location.column].isStart = true;
      newGrid[checkpoints[c].location.row][
        checkpoints[c].location.column
      ].isEnd = true;
      let {
        shortestPath: short,
        visitedNodes: visited,
        shortestDistance: distance,
      } = dijkstra(newGrid);
      // console.log(short);
      shortestPath.push(...short);
      visitedNodes.push(...visited);
      shortestDistance += distance;
    } else if (c === checkpoints.length) {
      newGrid[checkpoints[c - 1].location.row][
        checkpoints[c - 1].location.column
      ].isStart = true;
      newGrid[end.location.row][end.location.column].isEnd = true;
      let {
        shortestPath: short,
        visitedNodes: visited,
        shortestDistance: distance,
      } = dijkstra(newGrid);
      short.splice(0, 1);
      shortestPath.push(...short);
      visitedNodes.push(...visited);
      shortestDistance += distance;
    } else {
      newGrid[checkpoints[c - 1].location.row][
        checkpoints[c - 1].location.column
      ].isStart = true;
      newGrid[checkpoints[c].location.row][
        checkpoints[c].location.column
      ].isEnd = true;
      let {
        shortestPath: short,
        visitedNodes: visited,
        shortestDistance: distance,
      } = dijkstra(newGrid);
      short.splice(0, 1);
      shortestPath.push(...short);
      visitedNodes.push(...visited);
      shortestDistance += distance;
    }
  }
  return { shortestPath, visitedNodes, shortestDistance };
}
