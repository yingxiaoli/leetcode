var cloneGraph = function (node) {
  const graph = [];
  const queue = [node];
  const visited = new Set();
  while (queue.length) {
    const n = queue.shift();
    if (visited.has(n)) return;
    visited.add(n);
    let arr = [];
    for (let neighbor of node.neighbors) {
      queue.push(neighbor);
      arr.push(neighbor.val);
    }
    graph[node.val] = arr;
  }
};
