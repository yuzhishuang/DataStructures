
// 从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行

const { ar } = require("date-fns/locale");

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  const result = []
  const stack = []
  if (root) {
    stack.push(root)
    while (stack.length > 0) {
      const arr = []
      const len = stack.length
      for (let i = 0; i < len; i++) {
        const node = stack.shift()
        arr.push(node.val)
        if (node && node.left) stack.push(node.left)
        if (node && node.right) stack.push(node.right)
      }
      result.push(arr)
    }
  }
  return result.reverse()
};

const node1 = new TreeNode(15)
const node2 = new TreeNode(7)
const node3 = new TreeNode(20)
node3.left = node1
node3.right = node2
const node4 = new TreeNode(9)
const node5 = new TreeNode(3)
node5.left = node4
node5.right = node3

// console.log(node5)
console.log(levelOrderBottom(node5))
