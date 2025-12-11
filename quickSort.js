/**
1.选择数组中间的元素作为基准值pivot
2.小于pivot的放左边，大于pivot的放右边
3.再分别排序左边数组和右边数组
 */
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let midIndex = Math.floor(arr.length / 2);
  const pivot = arr[midIndex];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length; i++) {
    if (midIndex === i) continue;
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}
console.log(quickSort([5, 3, 7, 6, 2, 9]));
