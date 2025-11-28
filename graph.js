/**
邻接矩阵、邻接表

A:B C
B: A D
C:A
D:B

    A  B  C  D
A   0  1  1  0
B   1  0  0  1
C   1  0  0  0
D   0  1  0  0

const graph ={
  A:['B','C'],
  B:['D','E'],
  C:['F'],
  D:[],
  E:[],
  F:[],
}
    A
  B   C
 D E    F
**/
const graph = {
  A: ["B", "C"],
  B: ["D", "E"],
  C: ["F"],
  D: [],
  E: [],
  F: [],
};

// 深度优先遍历 DFS -- 记忆优化
function dfsGraph(graph, start) {
  const visited = new Set();
  function dfs(node) {
    if (visited.has(node)) return;
    visited.add(node);
    console.log(node);
    for (let neighbor of graph[node]) {
      dfs(neighbor);
    }
  }
  dfs(start);
}

// 广度优先遍历 -- 队列
function bfsGraph(graph, start) {
  const queue = [start];
  const visited = new Set();
  while (queue.length) {
    let node = queue.shift();
    if (visited.has(node)) return;
    visited.add(node);
    console.log(node);
    const neighbors = graph[node];
    for (let neighbor of neighbors) {
      queue.push(neighbor);
    }
  }
}
dfsGraph(graph, "A");
bfsGraph(graph, "A");
