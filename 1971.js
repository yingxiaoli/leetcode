// 深度优先遍历才能通过，广度优先遍历会超时

// 深度优先遍历
var validPath = function (n, edges, source, destination) {
    const graph = {};
    edges.forEach((edge) => {
        if (graph[edge[0]]) {
            graph[edge[0]].push(edge[1]);
        } else {
            graph[edge[0]] = [edge[1]];
        }
        if (graph[edge[1]]) {
            graph[edge[1]].push(edge[0]);
        } else {
            graph[edge[1]] = [edge[0]];
        }
    });
    let visited = new Set();
    function dfs(node) {
        if (node === destination) {
            return true
        }
        if (visited.has(node)) return
        visited.add(node)
        for (let neighbor of graph[node]) {
            if (dfs(neighbor)) return true;
        }
        return false
    }
    return dfs(source)
};
// 广度优先遍历
var validPath = function (n, edges, source, destination) {
  const graph = {};
  edges.forEach((edge) => {
    if (graph[edge[0]]) {
      graph[edge[0]].push(edge[1]);
    } else {
      graph[edge[0]] = [edge[1]];
    }
    if (graph[edge[1]]) {
      graph[edge[1]].push(edge[0]);
    } else {
      graph[edge[1]] = [edge[0]];
    }
  });
  let queue = [source];
  let visited = new Set();
  while (queue.length) {
    let node = queue.shift();
    if (visited.has(node)) continue;
    visited.add(node);
    if (node === destination) {
      return true;
    }
    for (let neighbor of graph[node]) {
      queue.push(neighbor);
    }
  }
  return false;
};

console.log(
  validPath(
    3,
    [
      [0, 1],
      [1, 2],
      [2, 0],
    ],
    0,
    2
  )
); // true

console.log(
  validPath(
    6,
    [
      [0, 1],
      [0, 2],
      [3, 5],
      [5, 4],
      [4, 3],
    ],
    0,
    5
  )
); // false
