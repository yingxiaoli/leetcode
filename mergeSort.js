/**
先将数组不断拆分程左右数组
再分别合并，直到合并完成
 */
function mergeSort(arr) {
    if (arr.length < 2) return arr;
    let middle = Math.floor(arr.length / 2)
    let left = arr.slice(0, middle)
    let right = arr.slice(middle, arr.length)
    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
    let arr = []
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            arr.push(left[i])
            i++
        } else {
            arr.push(right[j])
            j++
        }
    }
    if(i<left.length){
        arr.push(...left.slice(i,left.length))
    }
    if(j<right.length){
        arr.push(...right.slice(j,right.length))
    }
    return arr
}

function merge2(left,right){
    let res = []
    while(left.length&& right.length){
        if(left[0]<right[0]){
            res.push(left.shift())
        }else{
            res.push(right.shift())
        }
    }
    while(left.length){
        res.push(left.shift())
    }
    while(right.length){
        res.push(right.shift())
    }
    return res
}
console.log(mergeSort([1, 12, 4, 5, 3, 9]))
