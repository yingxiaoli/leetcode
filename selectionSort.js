/**
 *  算法步骤（以升序为例）：
    1.从数组第一个位置开始，假设它是「最小值」。
    2.遍历剩下的所有元素，找到真正的最小值。
    3.把最小值和第一个位置的元素交换。
    4.然后从第二个位置开始，重复以上过程，直到整个数组有序。
    时间复杂度：O(n*n)
 * @param {*} arr 
 * @returns 
 */
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
    }
  }
  return arr;
}

console.log(selectionSort([5, 3, 2, 4, 1]));
