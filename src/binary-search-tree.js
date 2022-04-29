const { NotImplementedError } = require("../extensions/index.js");
const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  #root = null;

  constructor(node) {
    if (node) {
      this.#root = node;
    }
  }

  root() {
    return this.#root;
  }

  add(data) {
    const newNode = new Node(data);

    if (this.#root) {
      let node = this.#root;

      while (node) {
        if (data < node.data) {
          // Go to the left child
          if (!node.left) {
            node.left = newNode;
            break;
          }

          node = node.left;
        } else {
          // Go to the right child
          if (!node.right) {
            node.right = newNode;
            break;
          }

          node = node.right;
        }
      }
    } else {
      this.#root = newNode;
    }
  }

  has(data) {
    let node = this.#root;

    while (node) {
      if (data === node.data) {
        return true;
      }

      // Go down the tree
      if (data < node.data) {
        // Go to the left child
        node = node.left;
      } else {
        // Go to the right child
        node = node.right;
      }
    }

    return false;
  }

  find(data) {
    let node = this.#root;

    while (node) {
      if (data === node.data) {
        return node;
      }

      // Go down the tree
      if (data < node.data) {
        // Go to the left child
        node = node.left;
      } else {
        // Go to the right child
        node = node.right;
      }
    }

    return null;
  }

  remove(data) {
    // (1) Find the node to remove and save reference to its parent
    let node = this.#root;
    let parent = null;
    let nodeToRemove;

    while (node) {
      if (data === node.data) {
        nodeToRemove = node;
        break;
      }

      parent = node;

      // Go down the tree
      if (data < node.data) {
        // Go to the left child
        node = node.left;
      } else {
        // Go to the right child
        node = node.right;
      }
    }

    if (!nodeToRemove) {
      return;
    }

    // (2) Construct binary search trees from left and right branches of the node being removed
    let left = new BinarySearchTree(node.left);
    const right = new BinarySearchTree(node.right);

    // (3) Find the rightmost node of the left branch
    let rightmostOfLeft = left.find(left.max());

    // (4) Append right branch to the rightmost node of the left branch, if any
    if (left.root()) {
      rightmostOfLeft.right = right.root();
    } else {
      left = right;
    }

    if (parent && parent.data < nodeToRemove.data) {
      // If the node being removed is the right node of its parent, make the left branch the right node of the parent
      parent.right = left.root();
    } else if (parent && parent.data > nodeToRemove.data) {
      // If the node being removed is the left node of its parent, make the left branch the left node of the parent
      parent.left = left.root();
    } else {
      // If there is no parent, replace root with left branch
      this.#root = left.root();
    }
  }

  min() {
    let node = this.#root;
    let min;

    while (node) {
      min = node.data;

      // Go to the left child, which is always less that current node
      node = node.left;
    }

    return min;
  }

  max() {
    let node = this.#root;
    let max;

    while (node) {
      max = node.data;

      // Go to the right child
      node = node.right;
    }

    return max;
  }
}

const tree = new BinarySearchTree();
tree.add(9);
tree.add(14);
tree.add(2);
tree.add(6);
tree.add(128);
tree.add(8);
tree.add(31);
tree.add(54);
tree.add(1);
tree.remove(14);
tree.remove(8);
tree.remove(9);
tree.has(14) === false;
tree.has(8) === false;
tree.has(9) === false;
tree.has(2) === true;
tree.has(6) === true;
tree.has(128) === true;
tree.has(31) === true;
tree.has(54) === true;
tree.has(1) === true;

module.exports = {
  BinarySearchTree,
};
