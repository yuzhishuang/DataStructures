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

var removeNthFromEnd = function (head, n) {
  let current = head;
  let len = 0;
  while (current) {
    len++;
    current = current.next;
  }
  if (n === 0 || n > len) return head;
  if (n === len) {
    return head.next
  } else {
    current = head;
    for (let i = 0; i < len - n; i++) {
      if (i === len - n - 1) {
        const next = current.next.next;
        current.next = next
      } else {
        current = current.next
      }
    }
    return head
  }
}
console.log(removeNthFromEnd(head, 1))
