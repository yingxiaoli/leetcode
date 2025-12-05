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
