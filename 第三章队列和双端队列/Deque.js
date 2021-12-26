class Deque {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {}
  }
  // 该方法在双端队列前端添加新的元素
  addFront(element) {
    if (this.isEmpty()) {
      this.addBack(element);
    } else if (this.lowestCount > 0) { // 一个元素已经被从双端队列的前端移除
      this.lowestCount--;
      this.items[this.lowestCount] = element;
    } else {
      for (let i = this.count; i > 0; i++) {
        this.items[i] = this.items[i - 1];
      }
      this.count++;
      this.lowestCount = 0;
      this.items[0] = element;
    }
  }
  // 在双端队列后端添加新的元素
  addBack(element) {
    this.items[this.count] = element;
    this.count += 1;
  }
  // 移除第一个元素
  removeFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }
  removeBack() {
    if (this.isEmpty()) {
      return undefined
    }
    const result = this.items[this.count - 1];
    delete this.items[this.count];
    this.count--;
    return result;
  }
  isEmpty() {
    return this.size() === 0;
  }
  size() {
    return this.count - this.lowestCount;
  }
  toString() {
    if (this.isEmpty()) {
      return ''
    }
    let objString = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString}, ${this.items[i]}`
    }
    return objString;
  }
}
// const deque = new Deque();
// console.log(deque.isEmpty())
// deque.addBack('John')
// deque.addBack('Jack')
// console.log(deque.toString())
// deque.addBack('Camila');
// console.log(deque.toString()); // John, Jack, Camila 
// console.log(deque.size()); // 输出 3 
// console.log(deque.isEmpty()); // 输出 false 
// deque.removeFront(); // 移除 John 
// console.log(deque.toString()); // Jack, Camila 
// deque.removeBack(); // Camila 决定离开
// console.log(deque.toString()); // Jack 
// deque.addFront('John'); // John 回来询问一些信息
// console.log(deque.toString()); // John, Jack

module.exports = Deque;
