export function animateNodes(currentNodes, style, interval) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      for (const node of currentNodes) {
        document.getElementById(node.id).className = style;
      }
      resolve(true);
    }, interval);
  });
}

// export function animateDijkstra(visitedNodes) {
//   return new Promise((resolve, reject) => {
//     for (let n = 0; n < visitedNodes.length; n++) {
//       setTimeout(() => {
//         const node = visitedNodes[n];
//         document.getElementById(node.id).className = "node visited";
//       }, 10 * n);
//     }
//     setTimeout(() => {
//       resolve(true);
//     }, 10 * visitedNodes.length);
//   });
// }

// export function animateShortestPath(shortestPath) {
//   return new Promise((resolve, reject) => {
//     for (let n = shortestPath.length - 1; n >= 0; n--) {
//       setTimeout(() => {
//         const node = shortestPath[n];
//         document.getElementById(node.id).className = "node shortest-path";
//       }, 40 * (shortestPath.length - n - 1));
//     }
//     setTimeout(() => {
//       resolve(true);
//     }, 10 * shortestPath.length);
//   });
// }
