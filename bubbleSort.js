/**
1.从数组第一个元素开始，依次比较相邻的两个元素。
2.如果前面的元素比后面的元素大，就交换它们的位置。
3.重复以上步骤，直到一轮比较结束。
4.每完成一轮，最大的元素就会“冒泡”到数组的最右端（即位置靠后）。
5.重复上述过程，每轮减少一个比较次数（因为末尾已有序）。
6.如果某一轮中没有发生任何交换，说明数组已经有序，可以提前结束。
*/
function bubbleSort(arr) {
    let count = arr.length;
    while (count > 0) {
        for (let i = 0; i < count - 1; i++) {
            if (arr[i] < arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
            }
        }
        count--
    }
    return arr
}

console.log(bubbleSort([4, 2, 8, 5, 1]))
