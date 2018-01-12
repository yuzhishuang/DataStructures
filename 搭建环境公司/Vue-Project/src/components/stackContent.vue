<template>
  <div class="hello">
    <h1>栈</h1>
  </div>
</template>

<script>
export default {
  methods: {
    demo () {
      console.log('栈')
      //  栈是一种遵从后进先出原则的有序集合
      //  创建一个类来表示栈
      //  需要一种数据结构来保存栈内的元素，可以选择数组
      let items = []
      function Stack () {
        //  各种属性和方法的声明
        //  为栈声明一些方法
        //  向栈添加元素
        this.push = function (element) {
          items.push(element)
        }
        //  pop方法，用来移除栈里的元素，移出的是最后添加进去的元素
        this.pop = function () {
          return items.pop()
        }
        //  查看栈顶元素
        this.peek = function () {
          return items[items.length - 1]
        }
        //  检查栈是否为空
        //  实现的方法是isEmpty，如果栈为空的话将返回true，否则就返回false
        this.isEmpty = function () {
          return items.length === 0
        }
        //  清空和打印栈元素
        this.clear = function () {
          items = []
        }
        //  把栈里的元素都输出到控制台
        this.print = function () {
          console.log(items.toString())
        }
      }
      let stack = new Stack()
      console.log(stack.isEmpty())  //  输出true
      //  有一种数据类型可以确保属性是私有的，这就是WeakMap
      //  用WeakMap来存储items变量
      //  用一个闭包（外层函数）把Stack类包起来，这样只能在这个函数里访问WeakMap
      let Stack1 = (function () {
        const items = new WeakMap()
        class Stack {
          constructor () {
            items.set(this, [])
          }
          //  其他方法
          push (element) {
            let s = items.get(this)
            s.push(element)
          }
          pop () {
            let s = items.get(this)
            let r = s.pop()
            return r
          }
          isEmpty () {
            let s = items.get(this)
            return s.length === 0
          }
        }
        return Stack
      })()
      //  用栈解决问题：从十进制到二进制
      function divideBy2 (decNumber) {
      	let remStack = new Stack1()				
        let rem
        let binaryString = ''
        while (decNumber > 0) {
  	      rem = Math.floor(decNumber % 2)
  		  	remStack.push(rem)
  		  	decNumber = Math.floor(decNumber / 2)
        }
        while (!remStack.isEmpty()) {
  		  binaryString += remStack.pop().toString()
  	    }
  	    return binaryString
      }
      console.log('divideBy2(10)=' + divideBy2(10))
      //  可以传入其他任意进制的基数为参数
      function baseConverter (decNumber, base) {
        let remStack = new Stack1()       
        let rem
        let baseString = ''
        let digits = '0123456789ABCDEF'
        while (decNumber > 0) {
          rem = Math.floor(decNumber % base)
          remStack.push(rem)
          decNumber = Math.floor(decNumber / base)
        }
        while (!remStack.isEmpty()) {
        binaryString += digits[remStack.pop()]
        }
        return baseString 
      }
    }
  },
  created () {
    this.demo()
  }
}
</script>
