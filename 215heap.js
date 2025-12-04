/**
 * 最大堆排序，在数组末尾取第k个最大的
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    let size = nums.length
    for (let i = Math.floor(size / 2) - 1; i >= 0; i--) {
        maxHeap(nums, size, i)
    }
    for (let i = size; i > size - k; i--) {
        [nums[0], nums[i - 1]] = [nums[i - 1], nums[0]]
        maxHeap(nums, i - 1, 0)
    }
    return nums[nums.length - k]

};
const maxHeap = (arr, heapSize, rootIndex) => {
    let left = 2 * rootIndex + 1;
    let right = 2 * rootIndex + 2
    let largest = rootIndex;
    if (left < heapSize && arr[left] > arr[largest]) {
        largest = left
    }
    if (right < heapSize && arr[right] > arr[largest]) {
        largest = right
    }
    if (largest !== rootIndex) {
        [arr[largest], arr[rootIndex]] = [arr[rootIndex], arr[largest]]
        maxHeap(arr, heapSize, largest)
    }
}
const minHeap = (arr, heapSize, rootIndex) => {
    let left = 2 * rootIndex + 1;
    let right = 2 * rootIndex + 2
    let smallest = rootIndex;
    if (left < heapSize && arr[left] < arr[smallest]) {
        smallest = left
    }
    if (right < heapSize && arr[right] < arr[smallest]) {
        smallest = right
    }
    if (smallest !== rootIndex) {
        [arr[smallest], arr[rootIndex]] = [arr[rootIndex], arr[smallest]]
        minHeap(arr, heapSize, smallest)
    }
}
console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2))//5
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4))//4
