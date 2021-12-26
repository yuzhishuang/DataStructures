// AVL树是一种自平衡树.添加或移除节点时,AVL树会尝试保持自平衡.
// 任何一个节点(不论深度)的左子树和右子树高度最多相差1.
// 添加或移除节点时,AVL树会尽可能尝试转换为完全树.

const BinarySearchTree = require("./1.BinarySearchTree");

const BalanceFactor = {
  UNBALANCEO_RIGHT: 1,
  SLIGHTLY_UNABLANCED_RIGHT: 2,
  BALANCED: 3,
  SLIGHTLY_UNBALANCED_LEFT: 4,
  UNBALANCED_LEFT: 5
}

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
  // 计算一个节点高度的代码如下
  getNodeHeight(node) {
    if (node == null) {
      return -1;
    }
    return Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) + 1;
  }
  // 计算一个节点的平衡因子并返回其值
  getBalanceFactor(node) {
    const heightDifference = this.getNodeHeight(node.left) - this.getNodeHeight(node.right);
    switch (heightDifference) {
      case -2:
        return BalanceFactor.UNBALANCEO_RIGHT;
      case -1:
        return BalanceFactor.SLIGHTLY_UNABLANCED_RIGHT;
      case 1:
        return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT;
      case 2:
        return BalanceFactor.UNBALANCED_LEFT;
      default:
        return BalanceFactor.BALANCED;
    }
  }
  // 左-左 LL 向右旋转
  // 节点左侧子节点的高度大于右侧子节点的高度,并且左侧子节点也是平衡或左侧较重
  rotationLL(node) {
    const tmp = node.left;
    node.left = tmp.right;
    tmp.right = node;
    return tmp;
  }
  // 右-右 RR 向左旋转
  // 右侧子节点高度大于左侧子节点的告诉,并且右侧子节点也是平衡或右侧较重
  rotationRR(node) {
    const tmp = node.right;
    node.right = tmp.left;
    tmp.left = node;
    return tmp;
  }
  // 左-右(LR): 向右的双旋转
  // 左侧子节点告诉大于右侧子节点的高度,并且左侧子节点右侧较重
}
const tree = new AVLTree()
tree.insert(11);
tree.insert(7);
tree.insert(15);
console.log(tree.getNodeHeight(tree.root))
