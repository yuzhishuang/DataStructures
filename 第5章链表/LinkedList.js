
function defaultEquals(a, b) {
  return a === b;
}

class Node {
  constructor(element) {
    this.element = element;
    this.next = undefined;
  }
}

class LinkedList {
  constructor(equalFn = defaultEquals) {
    this.count = 0; // 用来存储链表中的元素数量
    this.head = undefined;
    this.equalFn = equalFn;
  }
  // 向链表尾部添加元素
  push(element) {
    const node = new Node(element);
    let current;
    if (this.head === undefined) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.count += 1;
  }
  // 从链表中移出元素
  removeAt(index) {
    // 自由
    // if (index === 0) {
    //   this.head = this.head.next;
    // } else {
    //   let currentIndex = 0;
    //   let current = this.head;
    //   while (current.next) {
    //     currentIndex += 1;
    //     if (currentIndex === index && index !== this.count - 1) {
    //       current.next = current.next.next;
    //       break;
    //     } else if (currentIndex === index) {
    //       current.next = undefined;
    //       break;
    //     }
    //     current = current.next
    //   }
    // }
    // this.count -= 1

    // 官方
    // 检查越界值
    if (index >= 0 && index < this.count) {
      let current = this.head;
      // 移出第一项
      if (index === 0) {
        this.head = current.next;
      } else {
        // let previous;
        // for (let i = 0; i < index; i++) {
        //   previous = current;
        //   current = current.next;
        // }

        // 重构
        const previous = this.getElementAt(index - 1);
        current = previous.next;

        // 将previous与current的下一项链接起来,跳过current,从而移除它
        previous.next = current.next;
      }
      this.count--;
      return current.element;
    }
    return undefined;
  }
  // 获取某个index的节点
  getElementAt(index) {
    if (index >= 0 && index <= this.count) {
      let node = this.head;
      for (let i = 0; i < index && node != null; i++) {
        node = node.next
      }
      return node;
    }
    return undefined;
  }
  // 在任意位置插入元素
  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element);
      if (index === 0) {
        node.next = this.head
        this.head = node;
      } else {
        const previous = this.getElementAt(index - 1);
        node.next = previous.next;
        previous.next = node;
      }
      this.count += 1;
      return true;
    }
    return false;
  }
  // 返回一个元素的位置
  indexOf(element) {
    let current = this.head;
    let index = -1;
    for (let i = 0; i < this.count && current != null; i++) {
      if (this.equalFn(element, current.element)) {
        return i
      }
      current = current.next;
    }
    return -1;
  }
  // 从链表中移出元素
  remove(element) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }
  size() {
    return this.count;
  }
  isEmpty() {
    return this.size() === 0;
  }
  getHead() {
    return this.head;
  }
  toString() {
    if (this.head == null) {
      return ''
    }
    let objString = `${this.head.element}`;
    let current = this.head.next;
    for (let i = 1; i < this.size() && current != null; i++) {
      objString = `${objString}, ${current.element}`;
      current = current.next;
    }
    return objString;
  }
}

// const list = new LinkedList()
// list.push(15)
// list.push(10)
// list.push(5)
// console.log(list)
// list.removeAt(0)
// console.log(list.indexOf(5))
// console.log(list.toString())

module.exports = LinkedList
