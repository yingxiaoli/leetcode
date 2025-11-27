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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (!root) {
    return false;
  }
  let stack = [{ ...root, sum: root.val }];
  while (stack.length) {
    let node = stack.pop();
    if (!node.left && !node.right) {
      if (node.sum === targetSum) {
        return true;
      }
      continue;
    }
    if (node.right) {
      stack.push({ ...node.right, sum: node.right.val + node.sum });
    }
    if (node.left) {
      stack.push({ ...node.left, sum: node.left.val + node.sum });
    }
  }
  return false;
};

console.log(
  hasPathSum(
    arrayToTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]),
    22
  )
); // true
console.log(hasPathSum(arrayToTree([1, 2, 3]), 5)); // false
