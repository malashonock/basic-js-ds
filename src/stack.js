const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  #values;

  constructor() {
    this.#values = [];
  }

  get count() {
    return this.#values.length;
  }

  push(value) {
    this.#values.push(value);
  }

  pop() {
    return this.#values.pop();
  }

  peek() {
    if (this.#values.length > 0) {
      return this.#values[this.count - 1];
    } else {
      return undefined;
    }
  }
}

// const stack = new Stack();

// stack.push(1); // adds the element to the stack
// stack.peek(); // returns the peek, but doesn't delete it, returns 1
// stack.pop(); // returns the top element from stack and deletes it, returns 1
// stack.pop(); // undefined

module.exports = {
  Stack,
};
