
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

const head = new ListNode(1);
const node1 = new ListNode(1);
const node2 = new ListNode(1);
// const node3 = new ListNode(3);
// const node4 = new ListNode(3);
head.next = node1;
node1.next = node2;
// node2.next = node3;
// node3.next = node4;
// console.log(head)

var deleteDuplicates = function (head) {
  const map = new Map();
  let current = head;
  while (current) {
    if (map.has(current.val)) {
      const previous = map.get(current.val);
      previous.next = current.next;
    } else {
      map.set(current.val, current)
    }
    current = current.next;
  }
  return head;
};
console.log(deleteDuplicates(head))
