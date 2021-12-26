
// 冒泡排序: 复杂度 N方

function bubbleSort(array) {
  if (Array.isArray(array)) {
    let i = 0, len = array.length, j;
    for (i = 0; i < len - 1; i++) {
      for (j = i; j < len - i - i; j++) {
        let cur = array[j];
        let next = array[j + 1];
        let middle;
        if (cur > next) {
          middle = cur;
          array[j] = next;
          array[j + 1] = middle;
        }
      }
    }
  }
  return array
}

const result = bubbleSort([1, 3, 9, 5, 4, 6])
const result1 = bubbleSort([])
// console.log(result1)

// 官方
const Compare = {
  LESS_THAN: 'less',
  BIGGER_THAN: 'big'
}
function defaultCompare(a, b) {
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}
function swap(array, a, b) {
  // const temp = array[a];
  // array[a] = array[b]
  // array[b] = temp
  [array[a], array[b]] = [array[b], array[a]];
}
function bubbleSort1(array, compareFn = defaultCompare) {
  const { length } = array;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1; j++) {
      if (compareFn(array[j], array[j + 1]) === Compare.BIGGER_THAN) {
        swap(array, j, j + 1);
      }
    }
  }
  return array;
}

// 改进后的冒泡排序
function bubbleSort2(array, compareFn = defaultCompare) {
  const { length } = array;
  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      if (compareFn(array[j], array[j + 1]) === Compare.BIGGER_THAN) {
        swap(array, j, j + 1);
      }
    }
  }
  return array
}

function bubbleSort3(array) {
  if (Array.isArray(array)) {
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = 0; j < array.length - i - 1; j++) {
        if (array[j] > array[j + 1]) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]]
        }
      }
    }
  }
  return array
}

const arr = [3, 2, 1];
console.log(bubbleSort3(arr))
