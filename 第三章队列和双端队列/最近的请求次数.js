const queue = require('./Queue');
var RecentCounter = function () {
  this.items = new queue();
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.items.enqueue(t);
  while (this.items.peek() < t - 3000) {
    this.items.dequeue()
  }
  return this.items.size()
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
const recentCounter = new RecentCounter();
console.log(recentCounter.ping(1));     // requests = [1]，范围是 [-2999,1]，返回 1
console.log(recentCounter.ping(100));   // requests = [1, 100]，范围是 [-2900,100]，返回 2
console.log(recentCounter.ping(3001));  // requests = [1, 100, 3001]，范围是 [1,3001]，返回 3
console.log(recentCounter.ping(3002));  // requests = [1, 100, 3001, 3002]，范围是 [2,3002]，返回 3
