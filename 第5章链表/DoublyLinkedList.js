
const LinkedList = require('./LinkedList')
function defaultEquals(a, b) {
  return a === b;
}
class Node {
  constructor(element, next) {
    this.element = element;
    this.next = next;
  }
}

class DoublyNode extends Node {
  constructor(element, next, prev) {
    super(element, next);
    this.prev = prev;
  }
}
class DoublyLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn);
    this.tail = undefined;
  }
  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new DoublyNode(element);
      let current = this.head;
      if (index === 0) {
        if (this.head === null) {
          this.head = node;
          this.tail = node;
        } else {
          node.next = this.head
          current.prev = node;
          this.head = node;
        }
      } else if (index === this.count) {
        current = this.tail
        current.next = node;
        node.prev = current;
        this.tail = node;
      } else {
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        node.next = current;
        previous.next = node;
        node.prev = previous;
      }
      this.count += 1;
      return true;
    }
    return false;
  }
  // 从任意位置移除元素
  removeAt(index) {
    if (index >= 0 && index < this.count) {
      const current = this.head;
      if (index === 0) {
        this.head = current.next;
        // 如果只有一项,更新tail
        if (this.count === 1) {
          this.tail = undefined;
        } else {
          this.head.prev = undefined;
        }
      } else if (index === this.count - 1) { // 最后一项
        current = this.tail;
        this.tail = current.prev;
        this.tail.next = undefined;
      } else {
        current = this.getElementAt(index);
        const previous = current.prev;
        // 将previous与current的下一项链接起来,跳过current
        previous.next = current.next;
        current.next.prev = previous;
      }
      this.count -= 1;
      return current.element;
    }
    return undefined;
  }
}

module.exports = DoublyLinkedList
