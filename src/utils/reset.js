export function reset(grid) {
  for (let nodes of grid) {
    for (let node of nodes) {
      if (node.isStart) {
        document.getElementById(node.id).className = "node start";
      } else if (node.isEnd) {
        document.getElementById(node.id).className = "node end";
      } else if (node.isBarrier) {
        document.getElementById(node.id).className = "node barrier";
      } else if (node.isCheckpoint) {
        document.getElementById(node.id).className = "node checkpoint";
      } else if (node.isWeight) {
        document.getElementById(node.id).className = "node weight";
      } else {
        document.getElementById(node.id).className = "node default";
      }
    }
  }
}
