/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    let l1 = list1;
    let l2 = list2;
    let res = new ListNode(-1, null);
    let resHead = res;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            res.next = l1
            l1 = l1.next
        } else {
            res.next = l2
            l2 = l2.next
        }
        res = res.next
    }
    if (l1 && !l2) {
        res.next = l1
    } else if (l2 && !l1) {
        res.next = l2;
    }
    return resHead.next
};

let l1 = new ListNode(1, new ListNode(2, new ListNode(4, null)))
let l2 = new ListNode(1, new ListNode(3, new ListNode(4, null)))
console.log(mergeTwoLists(l1, l2))
