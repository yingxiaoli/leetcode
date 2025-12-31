// 相比全排列，区别在于： 1、各种长度的路径都存在结果里 2、遍历时，只看比前一个数大的数，避免无效开销
var subsets = function (nums) {
    let res = []
    const backTrack = (path) => {
        if (path.length <= nums.length) {
            res.push(path)
        }
        nums.forEach(n => {
            if (path.includes(n) || n <= path[path.length - 1]) return
            backTrack(path.concat(n))
        })
    }
    backTrack([])
    return res
};

console.log(subsets([1, 2, 3]))
