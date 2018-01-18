<template>
  <div class="hello">
    <h1>集合</h1>
  </div>
</template>

<script>
export default {
  methods: {
    demo () {
      console.log('集合')
      function Set () {
        let items = {}
        //  如果值在集合中，返回true，否则返回false
        this.has = function (value) {
          return items.hasOwnProperty(value)
        }
        //  向集合添加一个新的项
        this.add = function (value) {
          if (!this.has(value)) {
            items[value] = value;  //  {1}
            return true;
          }
          return false;
        }
        //  清除一项
        this.remove = function (value) {
          if (this.has(value)) {
            delete items[value];  //  {2}
            return true;
          }
          return false;
        }
        //  移除集合中的所有值
        this.clear = function () {
          items = {}
        }
        //  size方法.第一种方法使用length变量，每当使用add或remove方法时控制它。第二种方法使用JavaScript类的一个内建函数（ECMAScript5以上版本）
        this.size = function () {
          return Object.keys(items).length  //  {4}
        }
        //  第三种方法是手动提取items对象的每一个属性，记录属性的个数并返回这个数字
        this.sizeLegacy = function () {
          let count = 0
          for (let i in items) {
            if (items.hasOwnProperty(i)) {
              ++count
            }
            return count
          }
        }
        //  values方法
        this.values = function () {
          let values = []
          for (let i = 0, keys = Object.keys(items); i < keys.length; i++) {
            values.push(items[keys[i]])
          }
          return values
        }
        this.valuesLegacy = function () {
          let values = []
          for (let key in items) {
            if (items.hasOwnProperty(key)) {
              values.push(items[key])
            }
          }
          return values
        }
        //  并集的数学概念是集合A和集合B的并集
        this.union = function (otherSet) {
          let unionSet = new Set()
          let values = this.values()
          for (let i = 0; i < values.length; i++) {
            unionSet.add(values[i])
          }
          values = otherSet.values()
          for (let i = 0; i < values.length; i++) {
            unionSet.add(values[i])
          }
          return unionSet
        }
        //  交集的实现
        this.intersection = function (otherSet) {
          let intersectionSet = new Set()
          let values = this.values()
          for (let i = 0; i < values.length; i++) {
            if (otherSet.has(values[i])) {
              intersectionSet.add(values[i])
            }
          }
          return intersectionSet;
        }
        //  差集的实现
        this.difference = function (otherSet) {
          let difference = new Set()
          let values = this.values()
          for (let i = 0; i < values.length; i++) {
            if (!otherSet.has(values[i])) {
              difference.add(values[i])
            }
          }
          return difference
        }
        //  子集的实现
        this.subset = function (otherSet) {
          if (this.size() > otherSet.size()) {
            return false
          } else {
          	let subset = new Set()
	          let values = this.values()
	          for (let i = 0; i < values.length; i++) {
	          	if (!otherSet.has(values[i])) {
	          	  return false
	          	}
	          }
	          return true
          }
        }
      }
      let set = new Set()
      set.add(1)
      set.add('a')
      console.log(set.values())
      console.log(set.has('a'))
      //  测试并集
      let setA = new Set()
      setA.add(1)
      setA.add(2)
      setA.add(3)
      let setB = new Set()
      setB.add(3)
      setB.add(4)
      setB.add(5)
      let unionAB = setA.union(setB)
      console.log(unionAB.values())
      //  测试交集
      let setC = new Set()
      setC.add(1)
      setC.add(2)
      setC.add(3)
      let setD = new Set()
      setD.add(3)
      setD.add(4)
      setD.add(5)
      let intersectionCD = setC.intersection(setD)
      console.log(intersectionCD.values())
      //  测试差集
      let differenceCD = setC.difference(setD)
      console.log(differenceCD.values())
      //  测试子集
      let setE = new Set()
      setE.add(1)
      setE.add(2)
      setE.add(3)
      let setF = new Set()
      setF.add(2)
      setF.add(3)
      let setG = new Set()
      setG.add(3)
      setG.add(4)
      console.log(setF.subset(setE))
      console.log(setG.subset(setE))
      //  ES6原生Set类
      this.setContent()
    },
    setContent () {
      console.log('ES6原生Set类')
      let set = new Set()
      set.add(1)
      console.log(set.values())
      console.log(set.has(1))
      console.log(set.size)
      //  可以用delete方法删除set中的元素
      set.delete(1)
    }
  },
  created () {
    this.demo()
  }
}
</script>
