/*
数组堆排序
1. 从第一个非叶子节点开始堆化，直到根节点是最大值
2. 将根节点放到最后一个位置（交换），然后再对前n-1个元素进行排序
3.从根节点开始下滤，直到恢复堆结构，此时，根节点又是当前最大了，再重复第2步

直到完成
*/
// 使用最大堆，给数组升序排序
function maxHeapSort(arr) {
  let len = arr.length;
  for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
    maxHeap(arr, len, i);
  }
  for (let i = len - 1; i >= 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    maxHeap(arr, i, 0);
  }
  return arr;
}

const maxHeap = (arr, size, index) => {
  const left = 2 * index + 1;
  const right = 2 * index + 2;
  let largest = index;
  if (left < size && arr[left] > arr[largest]) {
    largest = left;
  }
  if (right < size && arr[right] > arr[largest]) {
    largest = right;
  }
  if (largest !== index) {
    [arr[largest], arr[index]] = [arr[index], arr[largest]];
    maxHeap(arr, size, largest);
  }
};
const arr = [2, 12, 3, 4, 9];
console.log(maxHeapSort(arr));
  
=========================================================
//小顶堆
class MinHeap {
  constructor() {
    this.heap = [];
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }
  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  // 从末尾插入值后，再堆化
  heapifyUp(index) {
    while (index > 0) {
      const parent = this.getParentIndex(index);
      if (this.heap[parent] < this.heap[index]) {
        break;
      }
      this.swap(parent, index);
      index = parent;
    }
  }

  // 删除堆顶后，把末尾放到堆顶后，再堆化
  heapifyDown(index) {
    let left = 2 * index + 1;
    let right = 2 * index + 2;
    let smallest = index;
    if (this.heap[left] < this.heap[smallest]) {
      smallest = left;
    }
    if (this.heap[right] < this.heap[smallest]) {
      smallest = right;
    }
    if (smallest !== index) {
      this.swap(smallest, index);
      this.heapifyDown(smallest);
    }
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
  }

  // 删除最小值并重新堆化
  extractMin() {
    if (!this.heap.length) {
      return null;
    }
    const min = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length) {
      this.heap[0] = last;
      this.heapifyDown(0);
    }
    return min;
  }
}
// 使用小顶堆进行排序
function sort(arr) {
  const heap = new MinHeap();
  arr.forEach((item) => heap.insert(item));
  const res = [];
  while (heap.heap.length) {
    const min = heap.extractMin();
    res.push(min);
  }
  return res;
}
const arr = [2, 12, 3, 4, 9];
console.log(sort(arr));

====================
