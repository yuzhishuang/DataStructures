/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  const result = []
  let stack = []
  if (root) {
    stack.push(root)
    let j = 0
    while (stack.length > 0) {
      const arr = []
      const len = stack.length
      const leftToRightArr = j % 2 === 0 ? stack.slice(0) : stack.slice(0).reverse()
      stack = []
      for (let i = 0; i < len; i++) {
        const node = leftToRightArr.shift()
        arr.push(node.val)
        if (j % 2 !== 0) {
          if (node.right) stack.unshift(node.right)
          if (node.left) stack.unshift(node.left)
        } else {
          if (node.left) stack.push(node.left)
          if (node.right) stack.push(node.right)
        }
      }
      j++
      result.push(arr)
    }
  }
  return result
};

// [1,2,3,4,null,null,5]
const node1 = new TreeNode(5)
const node2 = new TreeNode(3, undefined, node1)
const node3 = new TreeNode(4)
const node4 = new TreeNode(2, node3, undefined)
const node5 = new TreeNode(1, node4, node2)

// [3,9,20,null,null,15,7]
// const node1 = new TreeNode(15)
// const node2 = new TreeNode(7)
// const node3 = new TreeNode(20, node1, node2)
// const node4 = new TreeNode(9)
// const node5 = new TreeNode(3, node4, node3)


console.log(zigzagLevelOrder(node5))

