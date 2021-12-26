/**
 * @param {number} k
 */
var MyCircularQueue = function (k) {
  this.k = k;
  this.count = 0;
  this.lowestCount = 0;
  this.items = {};
};

/** 
 * 向循环队列插入一个元素。如果成功插入则返回真
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
  if (this.count - this.lowestCount >= this.k) {
    return false;
  }
  this.items[this.count] = value;
  this.count++;
  return true;
};

/**
 * 从循环队列中删除一个元素。如果成功删除则返回真
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  if (this.isEmpty()) {
    return false;
  }
  delete this.items[this.lowestCount];
  this.lowestCount++;
  return true;
};

/**
 * 从队首获取元素。如果队列为空，返回 -1 
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  if (this.isEmpty()) {
    return -1;
  }
  return this.items[this.lowestCount];
};

/**
 * 获取队尾元素。如果队列为空，返回 -1
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  if (this.isEmpty()) {
    return -1;
  }
  return this.items[this.count - 1];
};

/**
 * 检查循环队列是否为空
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  return this.count - this.lowestCount === 0
};

/**
 * 检查循环队列是否已满
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  return this.count - this.lowestCount === this.k
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */

const circularQueue = new MyCircularQueue(3); // 设置长度为 3
console.log(circularQueue.enQueue(1));  // 返回 true
console.log(circularQueue.enQueue(2));  // 返回 true
console.log(circularQueue.enQueue(3));  // 返回 true
console.log(circularQueue.enQueue(4));  // 返回 false，队列已满
console.log(circularQueue.Rear());  // 返回 3
console.log(circularQueue.isFull());  // 返回 true
console.log(circularQueue.deQueue());  // 返回 true
console.log(circularQueue.enQueue(4));  // 返回 true
console.log(circularQueue.Rear());  // 返回 4
