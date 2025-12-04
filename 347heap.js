/**
 * 
将字符和出现次数整体塞入数组中，
使用最大堆排序,能够在数组末尾获得最大的几个数
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const map = {}
    nums.forEach(num => {
        if (map[num]) {
            map[num]++
        } else {
            map[num] = 1
        }
    })
    const arr = Object.keys(map).map(key => ({ key: Number(key), count: map[key] }))
    console.log(arr)
    const len = arr.length;
    for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
        maxHeap(arr, len, i)
    }
    let res = []
    for (let i = len; i > len - k; i--) {
        [arr[0], arr[i - 1]] = [arr[i - 1], arr[0]]
        res.push(arr[i - 1].key)
        maxHeap(arr, i - 1, 0)
    }
    return res

};
const maxHeap = (arr, heapSize, rootIndex) => {
    const left = 2 * rootIndex + 1
    const right = 2 * rootIndex + 2
    let largest = rootIndex
    if (left < heapSize && arr[left].count > arr[largest].count) {
        largest = left
    }
    if (right < heapSize && arr[right].count > arr[largest].count) {
        largest = right
    }
    if (largest !== rootIndex) {
        [arr[largest], arr[rootIndex]] = [arr[rootIndex], arr[largest]]
        maxHeap(arr, heapSize, largest)
    }
}
console.log(topKFrequent([1, 1, 1, 1, 2, 2, 2, 3, 3], 2))//[1,2]
console.log(topKFrequent([1], 1))//[1]
console.log(topKFrequent([1, 2, 1, 2, 1, 2, 3, 1, 3, 2], 2))//[1,2]
console.log(topKFrequent([5, 2, 5, 3, 5, 3, 1, 1, 3], 2))//[3,5]

