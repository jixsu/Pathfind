import { findEnd, findStart } from "../utils/nodeFinding";
import { createNewGrid } from "../utils/generateGrid";
function findDistanceToEnd(endId, { row, column }) {
  let endArray = [];
  endId.split("-").forEach((item) => endArray.push(parseInt(item)));
  return Math.abs(row - endArray[0]) + Math.abs(column - endArray[1]);
}

function mapGrid(grid, endId) {
  return grid.map((row) => {
    return row.map((node) => {
      if (node.isBarrier) {
        return {
          ...node,
          visited: true,
          distanceToStart: Infinity,
          distanceToEnd: Infinity,
          combinedDistance: Infinity,
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
        distanceToEnd: findDistanceToEnd(endId, node.location),
        combinedDistance: node.isStart ? 0 : Infinity,
        prevNode: {
          row: NaN,
          column: NaN,
        },
      };
    });
  });
}

function findClosestUnvisited(closestUnvisitedArray) {
  let closestUnvisited = { combinedDistance: Infinity };
  let index = 0;
  let closestIndex = 0;
  for (const unvisited of closestUnvisitedArray) {
    if (unvisited.combinedDistance <= closestUnvisited.combinedDistance) {
      closestUnvisited = unvisited;
      closestIndex = index;
    }
    index++;
  }

  return { closestUnvisited, closestIndex };
}

function findUnvisitedNeighbors(currentNode, grid) {
  let neighbors = [];
  //this order checks up, right, down, left
  if (grid[currentNode.location.row - 1]) {
    if (
      !grid[currentNode.location.row - 1][currentNode.location.column].visited
    ) {
      neighbors.push(
        grid[currentNode.location.row - 1][currentNode.location.column]
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
  if (grid[currentNode.location.row + 1]) {
    if (
      !grid[currentNode.location.row + 1][currentNode.location.column].visited
    ) {
      neighbors.push(
        grid[currentNode.location.row + 1][currentNode.location.column]
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

export function aStar(grid) {
  const end = findEnd(grid);
  let aStarGrid = mapGrid(grid, end.id);

  let visitedNodes = [];
  let currentNode = { isEnd: false };
  let shortestDistance = 0;
  let closestUnvisitedArray = [findStart(aStarGrid)];

  while (!currentNode.isEnd) {
    const { closestUnvisited, closestIndex } = findClosestUnvisited(
      closestUnvisitedArray
    );
    currentNode = closestUnvisited;
    if (currentNode.combinedDistance === Infinity) {
      return { shortestPath: [], visitedNodes };
    }
    currentNode.visited = true;
    closestUnvisitedArray.splice(closestIndex, 1);
    // console.log(currentNode);

    const unvisitedNeighbors = findUnvisitedNeighbors(currentNode, aStarGrid);
    // console.log(neighbors);

    for (let neighbor of unvisitedNeighbors) {
      const newDistanceToStart = currentNode.distanceToStart + neighbor.weight;
      const newCombinedDistance =
        currentNode.distanceToStart + neighbor.weight + neighbor.distanceToEnd;
      if (newDistanceToStart < neighbor.distanceToStart) {
        neighbor.distanceToStart = newDistanceToStart;
      }
      if (newCombinedDistance < neighbor.combinedDistance) {
        neighbor.combinedDistance = newCombinedDistance;
        neighbor.prevNode = currentNode;
      }
      aStarGrid[neighbor.location.row][neighbor.location.column] = neighbor;
      const index = closestUnvisitedArray.findIndex(
        (entry) => entry.id === neighbor.id
      );
      if (index !== -1) {
        closestUnvisitedArray[index] = neighbor;
      } else {
        closestUnvisitedArray.push(neighbor);
      }
    }

    aStarGrid[currentNode.location.row][
      currentNode.location.column
    ] = currentNode;
    visitedNodes.push([{ id: currentNode.id }]);
  }

  // const startNode = findStart(aStarGrid);

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

export function aStarCheckpoints(grid, checkpoints) {
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
      } = aStar(newGrid);
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
      } = aStar(newGrid);
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
      } = aStar(newGrid);
      short.splice(0, 1);
      shortestPath.push(...short);
      visitedNodes.push(...visited);
      shortestDistance += distance;
    }
  }
  return { shortestPath, visitedNodes, shortestDistance };
}
