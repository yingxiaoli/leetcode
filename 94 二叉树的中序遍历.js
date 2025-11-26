function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}
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

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  if (!root) {
    return [];
  }
  let stack = [root];
  let res = [];
  while (stack.length) {
    let node = stack.pop();
    if (!node.left && !node.right) {
      res.push(node.val);
      continue;
    }
    if (node.right) {
      stack.push(node.right);
    }
    stack.push({ val: node.val, left: null, right: null });
    if (node.left) {
      stack.push(node.left);
    }
  }
  return res;
};
let root = arrayToTree([1, 2, 3, 4, 5, 6]);
// console.log(root);
console.log(inorderTraversal(root));
