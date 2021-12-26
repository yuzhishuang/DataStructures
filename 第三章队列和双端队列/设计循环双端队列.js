/**
 * @param {number} k
 */
var MyCircularDeque = function (k) {
  this.k = k;
  this.count = 0;
  this.lowestCount = 0;
  this.items = {};
};

/** 
 * 将一个元素添加到双端队列头部。 如果操作成功返回 true
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function (value) {
  if (this.isFull()) return false;
  if (this.isEmpty()) {
    this.insertLast(value)
  } else if (this.lowestCount > 0) {
    this.lowestCount--;
    this.items[this.lowestCount] = value
  } else {
    for (let i = this.count; i > 0; i--) {
      this.items[i] = this.items[i - 1]
    }
    this.count++;
    this.lowestCount = 0;
    this.items[0] = value;
  }
  return true;
};

/** 
 * 将一个元素添加到双端队列尾部。如果操作成功返回 true
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function (value) {
  if (!this.isFull()) {
    this.items[this.count] = value
    this.count++;
    return true;
  }
  return false;
};

/**
 * 从双端队列头部删除一个元素。 如果操作成功返回 true
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function () {
  if (this.isEmpty()) {
    return false;
  }
  delete this.items[this.lowestCount];
  this.lowestCount++;
  return true;
};

/**
 * 从双端队列尾部删除一个元素。如果操作成功返回 true
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function () {
  if (this.isEmpty()) {
    return false;
  }
  delete this.items[this.count - 1];
  this.count--;
  return true;
};

/**
 * 从双端队列头部获得一个元素。如果双端队列为空，返回 -1
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function () {
  if (this.isEmpty()) {
    return -1
  }
  return this.items[this.lowestCount]
};

/**
 * 获得双端队列的最后一个元素。 如果双端队列为空，返回 -1
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function () {
  if (this.isEmpty()) {
    return -1;
  }
  return this.items[this.count - 1]
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function () {
  return this.count - this.lowestCount === 0;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function () {
  return this.count - this.lowestCount === this.k;
};


let circularDeque = new MyCircularDeque(3); // 设置容量大小为3
console.log(circularDeque.insertLast(1));			        // 返回 true
console.log(circularDeque.insertLast(2));			        // 返回 true
console.log(circularDeque.insertFront(3));			        // 返回 true
console.log(circularDeque.insertFront(4));			        // 已经满了，返回 false
console.log(circularDeque.getRear());  				// 返回 2
console.log(circularDeque.isFull());				        // 返回 true
console.log(circularDeque.deleteLast());			        // 返回 true
console.log(circularDeque.insertFront(4));			        // 返回 true
console.log(circularDeque.getFront());

