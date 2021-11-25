// 选择排序的大致思路是:找到数据结构中的最小值并将其放置在第一位,接着找到第二小的值,并将其放到第二位,以此类推
// 复杂度为O(n方)

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

function selectionSort(array, compareFn = defaultCompare) {
  const { length } = array;
  let indexMin;
  for (let i = 0; i < length - 1; i++) {
    indexMin = i;
    for (let j = i; j < length; j++) {
      if (compareFn(array[indexMin], array[j]) === Compare.BIGGER_THAN) {
        indexMin = j;
      }
    }
    if (i !== indexMin) {
      swap(array, i, indexMin);
    }
  }
  return array;
}
const arr = [1, 9, 7, 5, 2, 3];
console.log(selectionSort(arr))
