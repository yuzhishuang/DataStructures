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

var rotateRight = function (head, k) {
  if (k === 0 || !head || !head.next) {
    return head;
  }
  let current = head;
  let width = 0;
  let pre = null;
  while (current) {
    pre = current;
    current = current.next;
    width++;
  }
  pre.next = head;
  const step = k % width;
  let curStep = 0
  let result = head;
  current = head;
  while (current) {
    if (width - step - 1 === curStep) {
      result = current.next;
      current.next = null
      break
    }
    curStep++;
    current = current.next;
  }
  return result;
}

console.log(rotateRight(head, 9))

