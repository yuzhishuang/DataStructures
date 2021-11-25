function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

const head = new ListNode(1);
const node1 = new ListNode(2);
const node2 = new ListNode(3);
const node3 = new ListNode(4);
// const node4 = new ListNode(5);
// const node5 = new ListNode(6);
head.next = node1;
node1.next = node2;
node2.next = node3;
// node3.next = node4;
// node4.next = node5;
// console.log(head)

var swapPairs = function (head) {
  const dummyNode = new ListNode(-1)
  dummyNode.next = head
  let current = dummyNode;
  while (current.next != null && current.next.next != null) {
    const node1 = current.next;
    const node2 = current.next.next;
    current.next = node2;
    node1.next = node2.next;
    node2.next = node1;
    current = node1;
  }
  return dummyNode.next;
}

var swapPairs1 = function (head) {
  if (head == null || head.next == null) {
    return head;
  }
  let newHead = head.next;
  head.next = swapPairs1(newHead.next)
  newHead.next = head;
  return newHead;


}

console.log(swapPairs1(head))
