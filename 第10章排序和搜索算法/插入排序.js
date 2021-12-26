// 通过构建有序序列,对于未排序数据,在已排序序列中从后向前扫描,找到相应位置并插入
// 最好的情况,排好序的序列,时间复杂度n
// 最坏的情况,逆序排列,时间复杂度为n方
// 空间复杂度是o(1)

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

function insertionSort(array, compareFn = defaultCompare) {
  const { length } = array;
  let temp;
  for (let i = 1; i < length; i++) { // 算法是从第二个位置(索引1)而不是0位置开始的,默认第一个已排序
    let j = i;
    temp = array[i]; // 2 1
    while (j > 0 && compareFn(array[j - 1], temp) === Compare.BIGGER_THAN) {
      array[j] = array[j - 1];
      j--;
    }
    array[j] = temp;
  }
  return array;
}

function insertionSort1(array) {
  for (let i = 1; i < array.length; i++) {
    let tmp = array[i], j = i - 1;
    for (; j >= 0 && array[j] > tmp; j--) {
      array[j + 1] = array[j]
    }
    array[j + 1] = tmp
  }
  return array;
}

function insertionSort2(array) {
  if (Array.isArray(array)) {
    for (let i = 1; i < array.length; i++) {

    }
  }
  return array
}



console.log(insertionSort2([3, 5, 1, 4, 2]))

