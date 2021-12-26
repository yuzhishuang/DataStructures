/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
  const map = new Map([
    ['C', (arr) => { arr.splice(-1, 1) }],
    ['D', (arr) => { arr.push(2 * +arr[arr.length - 1]) }],
    ['+', (arr) => { arr.push((+arr[arr.length - 1] + +arr[arr.length - 2])) }]
  ])
  const arr = []
  if (Array.isArray(ops)) {
    for (let i = 0; i < ops.length; i++) {
      const cur = ops[i]
      if (map.has(cur)) {
        map.get(cur)(arr)
      } else {
        arr.push(ops[i])
      }
    }
  }
  return arr.reduce((pre, next) => +pre + +next, 0)
};

console.log(calPoints(["C", "C", "C"]))
