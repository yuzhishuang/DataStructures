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
