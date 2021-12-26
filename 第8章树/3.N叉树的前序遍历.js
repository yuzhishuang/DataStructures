// 给定一个 N 叉树，返回其节点值的 前序遍历 。
// N 叉树 在输入中按层序遍历进行序列化表示，每组子节点由空值 null 分隔（请参见示例）

/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

function Node(val, children) {
  this.val = val;
  this.children = children;
};

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder1 = function (root) {
  const result = [];
  const renderChild = (root, result) => {
    if (root) {
      result.push(root.val)
      const curChildren = root.children
      if (curChildren && curChildren.length > 0) {
        for (let i = 0; i < curChildren.length; i++) {
          renderChild(curChildren[i], result)
        }
      }
    }
  }
  renderChild(root, result)
  return result;
};

// 迭代方式
var preorder = function (root) {
  const stack = []
  const result = []
  if (root) {
    stack.push(root)
    while (stack.length > 0) {
      const node = stack.pop()
      result.push(node.val)
      const child = node.children
      if (child && child.length > 0) {
        for (let i = child.length - 1; i >= 0; i--) {
          stack.push(child[i])
        }
      }
    }
  }
  return result
}

const node1 = new Node(5)
const node2 = new Node(6)
const node3 = new Node(3, [node1, node2])
const node4 = new Node(2)
const node5 = new Node(4)
const node6 = new Node(1, [node3, node4, node5])
console.log(preorder(node6))


