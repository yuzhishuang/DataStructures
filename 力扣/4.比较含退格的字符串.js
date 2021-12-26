/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  let sArr = []
  let tArr = []
  let operationMap = new Map([
    ['#', (arr) => { arr.splice(-1, 1) }]
  ])
  const deal = (str, arr) => {
    for (let item of str) {
      if (operationMap.has(item)) {
        operationMap.get(item)(arr)
      } else {
        arr.push(item)
      }
    }
  }
  deal(s, sArr)
  deal(t, tArr)
  // console.log(sArr)
  // console.log(tArr)
  return sArr.join() === tArr.join()
}



// 双指针
var backspaceCompare1 = function (s, t) {
  let i = s.length - 1, j = t.length - 1
  let skipS = 0, skipT = 0
  while (i >= 0 || j >= 0) {
    while (i >= 0) {
      if (s[i] === '#') {
        skipS++
        i--
      } else if (skipS > 0) {
        skipS--
        i--
      } else {
        break
      }
    }
    while (j >= 0) {
      if (t[j] === '#') {
        skipT++
        j--
      } else if (skipT > 0) {
        skipT--
        j--
      } else {
        break
      }
    }
    if (i >= 0 && j >= 0) {
      if (s[i] !== t[j]) return false
    } else {
      if (i >= 0 || j >= 0) return false
    }
    i--
    j--
  }
  return true
}
const s = "bbbextm"
const t = "bbb#extm"
console.log(backspaceCompare1(s, t))
