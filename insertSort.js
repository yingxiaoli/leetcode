/**
 * 
定区间：已排序区初始只有第一个元素，未排序区是剩余元素；
取元素：每次拿未排序区第一个元素当 “待插元素”；
找位置：从已排序区末尾往前比，比待插元素大的就后移；
插元素：找到合适位置（前一个元素≤待插元素），把待插元素放进去；
循环来：重复 2-4，直到所有元素都插入到已排序区。
 */
function insertSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let j = i - 1;
        let temp = arr[i];
        while (j >= 0) {
            if (arr[j] > temp) {
                arr[j + 1] = arr[j]
            } else {
                break
            }
            j--
        }
        arr[j + 1] = temp
    }
    return arr
}

console.log(insertSort([12, 11, 13, 5, 6, 10]))
