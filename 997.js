/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
  let graph = {};
  const notTrustSet = new Set(Array.from({ length: n }, (_, i) => i + 1));
  trust.forEach((arr) => {
    if (graph[arr[0]]) {
      graph[arr[0]].push(arr[1]);
    } else {
      graph[arr[0]] = [arr[1]];
    }
    notTrustSet.delete(arr[0]);
  });
  if (notTrustSet.size !== 1) {
    return -1;
  }
  const rest = Array.from(notTrustSet)[0];
  return Object.keys(graph).every((key) => graph[key].includes(rest))
    ? rest
    : -1;
};

console.log(findJudge(2, [[1, 2]])); // 2
console.log(
  findJudge(3, [
    [1, 3],
    [2, 3],
  ])
); // 3
console.log(
  findJudge(3, [
    [1, 3],
    [2, 3],
    [3, 1],
  ])
); // -1
