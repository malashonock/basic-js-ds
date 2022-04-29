const { NotImplementedError } = require("../extensions/index.js");
const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  #root = null;

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

  has(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }
}

const tree = new BinarySearchTree();
tree.add(9);
tree.add(14);
tree.add(54);
tree.add(2);
tree.add(6);
tree.add(8);
tree.add(31);
tree.add(1);
tree.remove(6);
tree.remove(2);

module.exports = {
  BinarySearchTree,
};
