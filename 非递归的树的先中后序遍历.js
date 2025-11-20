// 使用js 实现树的先中后序遍历,不能使用递归
function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

function preOrderTraversal(root) {
  if (!root) {
    return [];
  }
  let res = [];
  let stack = [root];
  while (stack.length) {
    let top = stack.pop();
    res.push(top.val);
    if (top.right) {
      stack.push(top.right);
    }
    if (top.left) {
      stack.push(top.left);
    }
  }
  return res;
}

function InOrderTraversal(root) {
  if (!root) {
    return [];
  }
  let res = [];
  let stack = [root];
  while (
    stack.length &&
    (!!stack[stack.length - 1].left || !!stack[stack.length - 1].right)
  ) {
    let top = stack.pop();
    if (top.right) {
      stack.push(top.right);
    }
    stack.push({ val: top.val });
    if (top.left) {
      stack.push(top.left);
    }
  }
  while (stack.length) {
    let top = stack.pop();
    res.push(top.val);
  }
  return res;
}
function PostOrderTraversal(root) {
  if (!root) {
    return [];
  }
  let res = [];
  let stack = [root];
  while (
    stack.length &&
    (!!stack[stack.length - 1].left || !!stack[stack.length - 1].right)
  ) {
    let top = stack.pop();
    stack.push({ val: top.val });
    if (top.right) {
      stack.push(top.right);
    }
    if (top.left) {
      stack.push(top.left);
    }
  }
  while (stack.length) {
    let top = stack.pop();
    res.push(top.val);
  }
  return res;
}
console.log(InOrderTraversal(root)); //[ 4, 2, 5, 1, 3 ]
console.log(preOrderTraversal(root)); //[ 1, 2, 4, 5, 3 ]
console.log(PostOrderTraversal(root)); //[ 4, 5, 2, 3, 1 ]
