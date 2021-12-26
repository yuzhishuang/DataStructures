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
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  let less = new ListNode(0);
  let more = new ListNode(0);
  let headMore = more;
  let headLess = less;
  let cur = head;
  while (cur != null) {
    if (cur.val < x) {
      less.next = cur;
      less = less.next;
    } else {
      more.next = cur;
      more = more.next
    }
    cur = cur.next;
  }
  more.next = null;
  less.next = headMore.next
  return headLess.next;
};

let node1 = new ListNode(1)
let node2 = new ListNode(4)
let node3 = new ListNode(3)
let node4 = new ListNode(2)
let node5 = new ListNode(5)
let node6 = new ListNode(2)
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;

console.log(partition(node1, 3))
