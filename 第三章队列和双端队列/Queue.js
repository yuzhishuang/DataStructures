// 创建队列
class Queue {
  constructor() {
    this.count = 0; // 控制队列的大小
    this.lowestCount = 0; // 需要一个变量来帮助我们追踪第一个元素
    this.items = {}; // 需要
  }
  // 向队尾添加一个或者多个的项
  enqueue(element) {
    this.items[this.count] = element;
    this.count++;
  }
  // 移除队列的第一项并返回被移除的元素
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }
  // 返回队列的第一个元素
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }
  isEmpty() {
    return this.size() === 0;
  }
  size() {
    return this.count - this.lowestCount;
  }
  clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }
  toString() {
    if (this.isEmpty()) {
      return '';
    }
    let objString = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }
}

// const queue = new Queue();
// console.log(queue.isEmpty())
// queue.enqueue('John')
// queue.enqueue('Jack')
// console.log(queue.toString())
// queue.enqueue('Camila');
// console.log(queue.toString())
// console.log(queue.size());
// console.log(queue.isEmpty());
// queue.dequeue();
// queue.dequeue();
// console.log(queue.toString())

module.exports = Queue;
