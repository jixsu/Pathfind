import { dijkstra, dijkstraCheckpoints } from "./../algorithms/dijkstra";
import { aStar, aStarCheckpoints } from "../algorithms/aStar";

export function runAlgorithm(algorithm, grid, checkpoints) {
  if (algorithm === "dijkstra") {
    if (checkpoints.length === 0) {
      return dijkstra(grid);
    } else {
      return dijkstraCheckpoints(grid, checkpoints);
    }
  } else if (algorithm === "a*") {
    if (checkpoints.length === 0) {
      return aStar(grid);
    } else {
      return aStarCheckpoints(grid, checkpoints);
    }
  }
}
