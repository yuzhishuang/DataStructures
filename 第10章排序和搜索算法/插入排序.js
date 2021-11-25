//

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

console.log(insertionSort([3, 5, 1, 4, 2]))
