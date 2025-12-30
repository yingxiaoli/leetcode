// 回溯 树结构
 /**
  *         root
  *     1   2      3
  *   2  3  1 3   1 2
  *   3  2  3 1   2 1
  */
var permute = function(nums) {
    const res = []
    const backTrack = (path)=>{
        if(path.length === nums.length){
            res.push(path)
            // 回到上一层递归
            return
        }
        nums.forEach(n => {
            if(path.includes(n)) return
            backTrack(path.concat(n)) 
        })
    }
    backTrack([])
    return res
};
console.log(permute([1,2,3,4]))
