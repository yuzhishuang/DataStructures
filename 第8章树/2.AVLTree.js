// AVL树是一种自平衡树.添加或移除节点时,AVL树会尝试保持自平衡.
// 任何一个节点(不论深度)的左子树和右子树高度最多相差1.
// 添加或移除节点时,AVL树会尽可能尝试转换为完全树.

const BinarySearchTree = require("./1.BinarySearchTree");

const Compare = {
  LESS_THAN: -1,
  BIGGER_THEN: 1
}

function defaultCompare(a, b) {
  if (a === b) {
    return 0;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THEN;
}

class AVLTree extends BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    super(compareFn)
    this.compareFn = compareFn;
    this.root = null

  }
}
