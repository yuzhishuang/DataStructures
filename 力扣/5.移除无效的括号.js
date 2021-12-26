/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  let arr = []
  let s1 = s
  for (let item of s) {
    if (item === '(') {
      arr.push(item)
    } else if (item === ')') {
      if (arr.length === 0) {
        s1 = s1.replace(')', '')
      } else {
        arr.pop()
      }
    }
  }
  if (arr.length > 0) {
    s1 = s1.split('').reverse().join('')
    arr.forEach(() => {
      s1 = s1.replace('(', '')
    })
    s1 = s1.split('').reverse().join('')
  }
  return s1
};

// console.log(minRemoveToMakeValid('lee(t(c)o)de)'))
// console.log(minRemoveToMakeValid('a)b(c)d'))
console.log(minRemoveToMakeValid('))(('))
console.log(minRemoveToMakeValid('(a(b(c)d)'))
