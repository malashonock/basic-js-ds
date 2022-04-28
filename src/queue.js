const { NotImplementedError } = require("../extensions/index.js");
const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  #firstNode;
  #lastNode;

  constructor() {
    this.#firstNode = null;
    this.#lastNode = null;
  }

  getUnderlyingList() {
    return this.#firstNode;
  }

  enqueue(value) {
    const node = new ListNode(value);

    if (this.#lastNode) {
      this.#lastNode.next = node;
      this.#lastNode = node;
    } else {
      this.#firstNode = node;
      this.#lastNode = node;
    }
  }

  dequeue() {
    if (this.#firstNode) {
      const firstNode = this.#firstNode;

      if (this.#firstNode.next) {
        // if next node exists
        this.#firstNode = this.#firstNode.next;
      } else {
        // if there's only one node
        this.#firstNode = null;
      }

      return firstNode.value;
    } else {
      return null;
    }
  }
}

const queue = new Queue();

queue.enqueue(1); // adds the element to the queue
queue.enqueue(3); // adds the element to the queue
console.log(queue.dequeue()); // returns the top element from queue and deletes it, returns 1
console.log(queue.getUnderlyingList()); // returns { value: 3, next: null }

module.exports = {
  Queue,
};
