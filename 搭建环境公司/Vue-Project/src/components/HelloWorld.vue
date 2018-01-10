<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    demo () {
      console.log('学习JavaScript数据结构与算法')
      let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
      let numbers1 = numbers
      numbers1[0] = 100
      console.log(numbers1[0])
      console.log(numbers[0])
      //  Array.from方法根据已有的数组创建一个新数组
      //  复制numbers数组
      let numbers3 = Array.from(numbers)
      numbers3[0] = 200
      console.log(numbers[0])
      console.log(numbers3[0])
      //  还可以传入一个用来过滤值的函数
      let events = Array.from(numbers, x => (x % 2 === 0))
      console.log(events)
      //  Array.of方法根据传入的参数创建一个新数组
      let numbers4 = Array.of(1)  //  let numbers4 = [1]
      console.log(numbers4)
      let numbers5 = Array.of(1, 2, 3, 4, 5)  //  let numbers5 = [1, 2, 3, 4, 5]
      console.log(numbers5)
      //  也可以用这个方法复制已有的数组
      let numberCopy = Array.of(...numbers5)
      console.log(numberCopy)
      //  fill方法用静态值填充数组
      numberCopy.fill(0)
      console.log(numberCopy)
      //  可以指定开始填充的索引
      numberCopy.fill(2, 1)
      console.log(numberCopy)
      //  可以指定结束填充的索引
      numberCopy.fill(1, 3, 5)
      console.log(numberCopy)
      //  创建数组并初始化值的时候，fill方法非常好用
      let ones = Array(6).fill(1)
      console.log(ones)
      //  copyWithin方法复制数组中的一系列元素到同一数组指定的起始位置
      let copyArray = [1, 2, 3, 4, 5, 6]
      copyArray.copyWithin(0, 3)
      //  sort排序
      this.sortContent()
      //  可以对任何对象类型的数组排序，也可以创建compareFunction来比较元素
      let friends = [
        {name: 'yzs', age: 20},
        {name: 'yy', age: 18},
        {name: 'lyn', age: 19}
      ]
      function comparePerson (a, b) {
        if (a.age < b.age) {
          return -1
        }
        if (a.age > b.age) {
          return 1
        }
        return 0
      }
      console.log(friends.sort(comparePerson))
      this.searchContent()
      this.arrToString()
    },
    arrToString () {
      //  如果想把数组里所有元素输出为一个字符串，可以用toString方法
      let numbers = [2, 9, 4, 6, 1]
      console.log(numbers.toString())
      //  如果想用一个不同的分隔符（不如-）把元素隔开，可以用join方法
      console.log(numbers.join('-'))
    },
    sortContent () {
      let numbers = [2, 9, 4, 6, 1]
      numbers.sort((a, b) => a - b)
      console.log(numbers)
    },
    searchContent () {
      let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
      console.log(numbers.indexOf(10))
      console.log(numbers.indexOf(100))
      //  find和findIndex方法接收一个回调函数，搜索一个满足回调函数条件的值
      function multipleOf13 (element, index, array) {
        return (element % 13 === 0)
      }
      console.log('find方法' + numbers.find(multipleOf13))
      console.log('findIndex方法' + numbers.findIndex(multipleOf13))
      //  ECMAScript7--使用includes方法
      //  如果数组里存在某个元素，includes方法会返回true，否则返回false
      console.log(numbers.includes(15))
      console.log(numbers.includes(100))
      //  如果给includes方法传入一个起始索引，搜索会从索引指定的位置开始
      console.log(numbers.includes(5, 6))
    }
  },
  created () {
    this.demo()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
