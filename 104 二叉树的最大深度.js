// 104  二叉树的最大深度

function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

root = [3, 9, 20, null, null, 15, 7];
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) {
    return 0;
  }
  let max = 0;
  root.depth = 1;
  let queue = [root];
  while (queue.length) {
    let node = queue.shift();
    max = Math.max(max, node.depth);
    if (node.left) {
      node.left.depth = node.depth + 1;
      queue.push(node.left);
    }
    if (node.right) {
      node.right.depth = node.depth + 1;
      queue.push(node.right);
    }
  }
  return max;
};

root = [3, 9, 20, null, null, 15, 7];
function arrayToTree(arr) {
  if (!arr || arr.length === 0) return null;

  const root = new TreeNode(arr[0]);
  const queue = [root]; // 使用队列进行层序构建
  let i = 1; // 数组索引，从第二个元素开始

  while (i < arr.length && queue.length > 0) {
    const node = queue.shift(); // 取出当前节点

    // 处理左子节点
    if (arr[i] !== null) {
      node.left = new TreeNode(arr[i]);
      queue.push(node.left);
    }
    i++;

    // 处理右子节点
    if (i < arr.length && arr[i] !== null) {
      node.right = new TreeNode(arr[i]);
      queue.push(node.right);
    }
    i++;
  }

  return root;
}
let tree = arrayToTree(root);
console.log(maxDepth(tree));
