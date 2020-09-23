import { dijkstra, dijkstraCheckpoints } from "./../algorithms/dijkstra";
import { aStar, aStarCheckpoints } from "../algorithms/aStar";

export function runAlgorithm(algorithm, grid, checkpoints) {
  const start = performance.now();
  let result = null;
  if (algorithm === "dijkstra") {
    if (checkpoints.length === 0) {
      result = dijkstra(grid);
    } else {
      result = dijkstraCheckpoints(grid, checkpoints);
    }
  } else if (algorithm === "a*") {
    if (checkpoints.length === 0) {
      result = aStar(grid);
    } else {
      result = aStarCheckpoints(grid, checkpoints);
    }
  }
  const end = performance.now();
  result.runtime = (end - start).toFixed(4);
  return result;
}
