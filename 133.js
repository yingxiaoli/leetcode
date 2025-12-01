/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * visited：key为原始节点，value为克隆节点
 * queue里一直推送的是原始节点
 * 函数返回是克隆节点，其中neighbors中不停嵌套，包含了整张图的信息
 */
var cloneGraph = function (node) {
  if (!node) {
    return node;
  }

  const visited = new Set();
  const clone = new Node(node.val, []);
  visited.set(node, clone);
  const queue = [node];
  while (queue.length) {
    const cur = queue.shift();
    const cloneNode = visited.get(cur);
    for (let neighbor of cur.neighbors) {
      if (!visited.has(neighbor)) {
        visited.set(neighbor, new Node(neighbor.val, []));
        queue.push(neighbor);
      }
      cloneNode.neighbors.push(visited.get(neighbor));
    }
  }
  return clone;
};
