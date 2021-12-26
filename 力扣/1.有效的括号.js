// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
// 有效字符串需满足
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
var isValid = function (s) {
  if (s.length === 1) return false
  const arr = []
  const map = new Map([
    ['(', ')'],
    ['{', '}'],
    ['[', ']']
  ])
  for (let i of s) {
    if (map.has(i)) {
      arr.push(i)
    } else if (i === ']' || i === '}' || i === ')') {
      const pre = arr.pop()
      if (map.get(pre) != i) {
        return false
      }
    }
  }
  if (arr.length > 0) return false
  return true
};

console.log(isValid('(('))
