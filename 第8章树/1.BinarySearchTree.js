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

class Node {
  constructor(key) {
    this.key = key; // 节点值
    this.left = null; // 左侧子节点引用
    this.right = null; // 右侧子节点引用
  }
}
module.exports = class BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn; // 用来比较节点值
    this.root = null; // Node类型的根节点
  }
  // 向树中插入一个新的键
  insert(key) {
    if (this.root === null) {
      this.root = new Node(key);
    } else {
      this.insertNode(this.root, key);
    }
  }
  insertNode(node, key) {
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      if (node.left === null) {
        node.left = new Node(key);
      } else {
        this.insertNode(node.left, key);
      }
    } else {
      if (node.right === null) {
        node.right = new Node(key);
      } else {
        this.insertNode(node.right, key)
      }
    }
  }
  // 在树中查找一个键.如果节点存在在，则返回 true；如果不存在，则返回false
  search(key) {
    return this.searchNode(this.root, key);
  }
  searchNode(node, key) {
    if (node === false) {
      return false;
    }
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      return this.searchNode(node.left, key);
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THEN) {
      return this.searchNode(node.right, key);
    } else {
      return true;
    }
  }
  // 中序遍历是一种以上行顺序访问所有节点的遍历方式,也就是以从最小到最大的顺序访问所有节点
  // 中序遍历的一种应用就是对树进行排序操作  356   3->5->6
  // 通过中序遍历方式遍历所有节点
  inOrderTraverse(callback) {
    this.inOrderTraverseNode(this.root, callback);
  }
  inOrderTraverseNode(node, callback) {
    if (node != null) {
      this.inOrderTraverseNode(node.left, callback); // 左侧节点
      callback(node.key); // 根节点
      this.inOrderTraverseNode(node.right, callback) // 右侧节点
    }
  }
  // 通过先序遍历方式遍历所有节点
  // 先序遍历是以优先于后代节点的顺序访问每个节点的.
  // 356 5->3->6
  preOrderTraverse(callback) {
    this.preOrderTraverseNode(this.root, callback);
  }
  preOrderTraverseNode(node, callback) {
    if (node !== null) {
      callback(node.key);
      this.preOrderTraverseNode(node.left, callback);
      this.preOrderTraverseNode(node.right, callback)
    }
  }
  // 通过后序遍历方式遍历所有节点
  // 后序遍历则是先访问节点的后代节点,再访问节点本身
  // 356  3->6->5
  postOrderTraverse(callback) {
    this.postOrderTraverseNode(this.root, callback)
  }
  postOrderTraverseNode(node, callback) {
    if (node !== null) {
      this.postOrderTraverseNode(node.left, callback);
      this.postOrderTraverseNode(node.right, callback);
      callback(node.key);
    }
  }
  // 返回树中最小的值/键。
  min() {
    return this.minNode(this.root)
  }
  minNode(node) {
    let current = node;
    while (current !== null && current.left !== null) {
      current = current.left;
    }
    return current;
  }
  // 返回树中最大的值/键
  max() {
    return this.maxNode(this.root)
  }
  maxNode(node) {
    let current = node;
    while (current !== null && current.right !== null) {
      current = current.right;
    }
    return current;
  }
  // 从树中移除某个键
  remove(key) {
    this.root = this.removeNode(this.root, key);
  }
  removeNode(node, key) {
    if (node === null) {
      return null;
    }
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THEN) {
      node.right = this.removeNode(node.right, key);
      return node;
    } else {
      // 键等于node.key
      // 第一种情况
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      // 第二种情况
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }
      // 第三种情况
      const aux = this.minNode(node.right);
      node.key = aux.key;
      node.right = this.removeNode(node.right, aux.key);
      return node;
    }
  }
}
// const tree = new BinarySearchTree();
// tree.insert(11);
// tree.insert(7);
// tree.insert(15);
// tree.insert(5);
// tree.insert(3);
// tree.insert(9);
// tree.insert(8);
// tree.insert(10);
// tree.insert(13);
// tree.insert(12);
// tree.insert(14);
// tree.insert(20);
// tree.insert(18);
// tree.insert(25);
// tree.insert(6);
// const printNode = value => console.log(value)
// tree.inOrderTraverse(printNode)
// tree.preOrderTraverse(printNode)
// tree.remove(15)
// console.log(tree.max())
