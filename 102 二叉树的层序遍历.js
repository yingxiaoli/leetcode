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
 * @return {number[][]}
 */
// 一个while循环，通过一个变量来判断不同的层级，时间会快很多
var levelOrder = function (root) {
    if (!root) {
        return []
    }
    let queue = [{ ...root, depth: 1 }]
    let lastNodeDepth = 1
    let res = []
    let temp = []
    while (queue.length) {
        let node = queue.shift()
        if (node.depth === lastNodeDepth) {
            temp.push(node.val)
        } else {
            res.push(temp)
            temp = [node.val]
        }
        lastNodeDepth = node.depth
        if (node.left) {
            queue.push({ ...node.left, depth: node.depth + 1 })
        }

        if (node.right) {
            queue.push({ ...node.right, depth: node.depth + 1 })
        }
    }
    res.push(temp)
    return res
};
// while 里套for循环后，时间显著增多
var levelOrder2 = function (root) {
    if (!root) {
        return []
    }
    let queue = [root]
    let res = []
    while (queue.length) {
        let len = queue.length
        let level = []
        for (let i = 0; i < len; i++) {
            let node = queue.shift()
            level.push(node.val)
            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
        }
        res.push(level)
    }
    return res
};
const root = arrayToTree([3, 9, 20, null, null, 15, 7])
console.log(levelOrder2(root))
