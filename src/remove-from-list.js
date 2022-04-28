const { NotImplementedError } = require("../extensions/index.js");
const { ListNode } = require("../extensions/list-node.js");

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} list
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For list = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(list, k) {
  let node = list; // start with first node
  let head = null; // pointer to head of filtered list

  while (node) {
    let nextNode = node.next;

    if (node.value !== k) {
      head = head || node; // assign pointer to head of filtered list

      while (nextNode && nextNode.value === k) {
        nextNode = nextNode.next;
        node.next = nextNode;
      }
    }

    node = nextNode;
  }

  return head;
}

const list = {
  value: 3,
  next: {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: {
            value: 5,
            next: null,
          },
        },
      },
    },
  },
};

const k = 3;

removeKFromList(list, k);

module.exports = {
  removeKFromList,
};
