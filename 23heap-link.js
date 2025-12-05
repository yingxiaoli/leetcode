
class MinHeap {
    constructor() {
        this.heap = []
    }
    getParentIndex(index) {
        return Math.floor((index - 1) / 2)
    }
    swap(i1, i2) {
        [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]]
    }
    heapUp(index) {
        let parent = this.getParentIndex(index)
        if (parent >= 0 && this.heap[index].val < this.heap[parent].val) {
            this.swap(index, parent)
            this.heapUp(parent)
        }
    }
    heapDown(index) {
        let left = 2 * index + 1;
        let right = 2 * index + 2;
        let smallest = index
        if (left < this.heap.length && this.heap[left].val < this.heap[smallest].val) {
            smallest = left
        }
        if (right < this.heap.length && this.heap[right].val < this.heap[smallest].val) {
            smallest = right
        }
        if (smallest !== index) {
            this.swap(smallest, index)
            this.heapDown(smallest)
        }
    }

    insert(item) {
        this.heap.push(item)
        this.heapUp(this.heap.length - 1)
    }
    extractMin() {
        let min = this.heap[0]
        if (min.next) {
            this.heap[0] = min.next
            this.heapDown(0)
        } else {
            let last = this.heap[this.heap.length - 1]
            this.heap.pop()
            if (this.heap.length) {
                this.heap[0] = last
                this.heapDown(0)
            }
        }
        return min.val
    }

}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    const minHeap = new MinHeap()
    lists.forEach(link => link &&minHeap.insert(link))
    if(!minHeap.heap.length){
        return null
    }
    const head = new ListNode('head', null)
    let cur = head
    while (minHeap.heap.length) {
        let node = new ListNode(minHeap.extractMin())
        cur.next = node;
        cur = cur.next
    }
    return head.next
};
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
function createLinkList(arr) {
    if (!arr?.length) {
        return null
    }
    const head = new ListNode(arr[0])
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        let newNode = new ListNode(arr[i])
        current.next = newNode
        current = current.next
    }
    return head
}
const l1 = createLinkList([1, 4, 5])
const l2 = createLinkList([1, 3, 4,])
const l3 = createLinkList([2, 6,])
console.log(mergeKLists([l1, l2, l3]))
console.log(mergeKLists([createLinkList([])]))


// const arr = [6, 1, 3, 9, 5]
// function sort(arr) {
//     const minHeap = new MinHeap()
//     arr.forEach(num => minHeap.insert(num))
//     console.log(minHeap.heap)
//     let res = []
//     while (minHeap.heap.length) {
//         res.push(minHeap.extractMin())
//     }
//     return (res)
// }
// console.log(sort(arr))
