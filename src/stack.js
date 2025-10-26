const { NotImplementedError } = require("../lib/errors");

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
  constructor() {
    this.storage = {};
    this.size = 0;
  }
  push(value) {
    this.size++;
    this.storage[this.size] = value;
  }

  pop() {
    const removed = this.storage[this.size];
    delete this.storage[this.size];
    this.size--;
    return removed;
  }

  peek() {
    return this.storage[this.size];
  }
}

const stack = new Stack();

stack.push("cat");
stack.push("bird");
stack.push("fish");

const rem = stack.pop();

const size = stack.peek();

console.log(stack);
console.log(rem);
console.log(size);
module.exports = {
  Stack,
};
