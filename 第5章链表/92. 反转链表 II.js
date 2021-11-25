// 给你单链表的头指针 head 和两个整数 left 和 right ，其中 left <= right 。请你反转从位置 left 到位置 right 的链表节点，返回 反转后的链表 。


function toStr(head) {
  const arr = [];
  let current = head;
  while (current) {
    arr.push(current.val);
    current = current.next;
  }
  return arr.toString(',');
}

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

var reverseList = function (head) {
  let pre = null;
  let current = head;
  while (current) {
    const next = current.next;
    current.next = pre;
    pre = current;
    current = next;
  }
  return pre;
};
// console.log(reverseList(head), '反转链表')

var reverseBetween = function (head, left, right) { // 1234 2 3  1324
  // 因为头节点有可能发生变化，使用虚拟头节点可以避免复杂的分类讨论
  const dummyNode = new ListNode(-1);
  dummyNode.next = head;

  let pre = dummyNode;
  // 第 1 步：从虚拟头节点走 left - 1 步，来到 left 节点的前一个节点
  // 建议写在 for 循环里，语义清晰
  for (let i = 0; i < left - 1; i++) {
    pre = pre.next;
  }
  console.log(pre, pre.val, 'pre') // 1234

  // 第 2 步：从 pre 再走 right - left + 1 步，来到 right 节点
  let rightNode = pre;
  for (let i = 0; i < right - left + 1; i++) {
    rightNode = rightNode.next;
  }
  console.log(rightNode, rightNode.val, 'rightNode') // 3 4

  // 第 3 步：切断出一个子链表（截取链表）
  let leftNode = pre.next; // 234
  let curr = rightNode.next; // 4

  // 注意：切断链接
  pre.next = null; // 1
  rightNode.next = null; // 3

  // 第 4 步：同第 206 题，反转链表的子区间
  console.log(leftNode, 'leftNode')
  reverseLinkedList(leftNode);

  console.log(pre, pre.val, 'pre') // 1
  console.log(rightNode, rightNode.val, 'rightNode') // 
  // 第 5 步：接回到原来的链表中
  pre.next = rightNode;
  leftNode.next = curr;
  return dummyNode.next;
};

const reverseLinkedList = (head) => {
  let pre = null;
  let cur = head;

  while (cur) {
    const next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
}

// console.log(reverseBetween(head, 2, 3)) // 123456


var reverseBetween1 = function (head, left, right) {
  const dummyNode = new ListNode(-1);
  dummyNode.next = head;

  // 第一步
  let pre = dummyNode;
  for (let i = 0; i < left - 1; i++) {
    pre = pre.next;
  }
  let rightNode = pre;
  for (let i = 0; i < right - left + 1; i++) {
    rightNode = rightNode.next;
  }
  let leftNode = pre.next; // 234
  let curr = rightNode.next;
  pre.next = null; // 执行此代码-head 1 pre 1
  rightNode.next = null; // 执行此代码 leftNode 变成23
  reverseLinkedList1(leftNode);
  pre.next = rightNode;
  leftNode.next = curr;
  return dummyNode.next;
}
const reverseLinkedList1 = (head) => {
  let pre = null
  let cur = head
  while (cur) {
    const next = cur.next;
    cur.next = pre;
    pre = cur
    cur = next
  }
}


var reverseBetween2 = function (head, left, right) {
  // 设置dummyNode是这一类问题的一般做法
  const dummy_node = new ListNode(-1);
  dummy_node.next = head;
  let pre = dummy_node;
  for (let i = 0; i < left - 1; i++) {
    pre = pre.next;
  }
  let cur = pre.next;
  for (let i = 0; i < right - left; ++i) {
    const next = cur.next;
    cur.next = next.next;
    next.next = pre.next;
    pre.next = next;
  }
  return dummy_node.next;
}
console.log(reverseBetween2(head, 2, 3))
