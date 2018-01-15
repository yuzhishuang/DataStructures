<template>
  <div class="hello">
  </div>
</template>

<script>
export default {
  methods: {
    demo () {
      console.log('队列')
      //  队列是遵循FIFO（先进先出）原则的一组有序的项
      //  队列在尾部添加新元素，并从顶部移除元素。最新添加的元素必须排在队列的末尾
      //  创建自己的类来表示一个队列
      let items = []
      function Queue () {
        //  这里是属性和方法
        //  向队列添加元素
        //  新的项只能添加到队列末尾
        this.enqueue = function (element) {
          items.push(element)
        }
        //  从队列移除元素
        //  最先添加的项也是最先被移除的
        this.dequeue = function () {
          return items.shift()
        }
        //  查看队列头元素
        //  返回队列最前面的项
        this.front = function () {
          return items[0]
        }
        //  检查队列是否为空
        this.isEmpty = function () {
          return items.length === 0
        }
        //  打印队列元素
        this.print = function () {
          console.log(items.toString())
        }
      }
      let queue = new Queue()
      console.log(queue.isEmpty())
      queue.enqueue('John')
      queue.enqueue('Jack')
      queue.enqueue('Camila')
      queue.print()
      console.log(queue.isEmpty())
      queue.dequeue()
      queue.dequeue()
      queue.print()
      this.es6Demo()
      //  优先队列，元素的添加和移除是基于优先级的
      function PriorityQueue () {
        let items = []
	      function QueueElement (element, priority) {
	        this.element = element
	        this.priority = priority
	      }
	      this.enqueue = function (element, priority) {
	        let queueElement = new QueueElement(element, priority)
	        let added = false
	        for (let i = 0; i < items.length; i++) {
	          if (queueElement.priority < items[i].priority) {
	            items.splice(i, 0, queueElement)
	            added = true
	            break
	          }
	        }
	        if (!added) {
	          items.push(queueElement)
	        }
	      }
	      this.print = function () {
	        console.log(items)
	        for (let i = 0; i < items.length; i++) {
	          console.log(`${items[i].element}-${items[i].priority}`)
	        }
	      }
	      //  其他方法和默认的Queue实现相同
      }
      let priorityQueue = new PriorityQueue()
      priorityQueue.enqueue('John', 2)
      priorityQueue.enqueue('Jack', 1)
      priorityQueue.enqueue('Camila', 1)
      priorityQueue.print()
      //  循环队列--击鼓传花
      function hotPotato (nameList, num) {
        let queue1 = new Queue()
        for (let i = 0; i < nameList.length; i++) {
          queue1.enqueue(nameList[i])
        }
        let eliminated = ''
        while (queue.size > 1) {
          for (let i = 0; i < num; i++) {
            queue1.enqueue(queue.dequeue())
          }
          eliminated = queue1.dequeue()
          console.log(elliminated + '在击鼓传花游戏中被淘汰。')
        }
        return queue.dequeue()
      }
      let names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl']
      let winner = hotPotato(names, 7)
      console.log('The winner is:' + winner)
    },
    es6Demo () {
      console.log('用ECMAScript6语法实现Queue类')
      let Queue2 = (function () {
        const items = new WeakMap()
        class Queue2 {
          constructor () {
            items.set(this, [])
          }
          enqueue (element) {
            let q = items.get(this)
            q.push(element)
          }
          dequeue () {
            let q = items.get(this)
            let r = q.shift()
            return r
          }
          isEmpty () {
            let q = items.get(this)
            return q.length === 0
          }
        }
        return Queue2
      })()
      let queue = new Queue2()
      console.log(queue.isEmpty())
      queue.enqueue('1')
      console.log(queue.isEmpty())
    }
  },
  created () {
    this.demo()
  }
}
</script>
