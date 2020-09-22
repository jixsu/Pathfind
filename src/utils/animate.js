export function animateNodes(currentNodes, style, interval) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      for (const node of currentNodes) {
        let element = document.getElementById(node.id);
        if (element.classList.contains(style)) {
          element.classList.remove(style);
          void element.offsetWidth;
          //   element.classList.add(style);
          // } else {
          //   element.className = style;
          // }
        }
        element.classList.add(style);
      }
      resolve(true);
    }, interval);
  });
}
