import { dijkstra, dijkstraCheckpoints } from "./../algorithms/dijkstra";

export function runAlgorithm(algorithm, grid, checkpoints) {
  if (algorithm === "dijkstra") {
    if (checkpoints.length === 0) {
      return dijkstra(grid);
    } else {
      return dijkstraCheckpoints(grid, checkpoints);
    }
  }
}
