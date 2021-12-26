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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (root) {
    const left = invertTree(root.left)
    const right = invertTree(root.right)
    const tmp = left
    root.left = right
    root.right = tmp
  }
  return root
};

const node1 = new TreeNode(1)
const node2 = new TreeNode(3)
const node3 = new TreeNode(2, node1, node2)
const node4 = new TreeNode(6)
const node5 = new TreeNode(9)
const node6 = new TreeNode(7, node4, node5)
const node7 = new TreeNode(4, node3, node6)

console.log(invertTree(node7))
