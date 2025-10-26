const { NotImplementedError } = require("../lib/errors");
// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(data) {
    const newNode = new Node(data);
    if (!this._root) {
      this._root = newNode;
      return;
    }
    let current = this._root;
    while (true) {
      if (data < current.data) {
        if (!current.left) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else if (data > current.data) {
        if (!current.right) {
          current.right = newNode;
          return;
        }
        current = current.right;
      } else {
        return;
      }
    }
  }

  has(data) {
    return !!this.find(data);
  }

  find(data) {
    let current = this._root;
    while (current) {
      if (data < current.data) {
        current = current.left;
      } else if (data > current.data) {
        current = current.right;
      } else {
        return current;
      }
    }
    return null;
  }

  remove(data) {
    function removeNode(node, data) {
      if (!node) return null;
      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      }
      if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      }
      // node.data === data
      if (!node.left && !node.right) return null;
      if (!node.left) return node.right;
      if (!node.right) return node.left;
      // 2 потомка
      let minNode = node.right;
      while (minNode.left) minNode = minNode.left;
      node.data = minNode.data;
      node.right = removeNode(node.right, minNode.data);
      return node;
    }
    this._root = removeNode(this._root, data);
  }

  min() {
    if (!this._root) return null;
    let current = this._root;
    while (current.left) current = current.left;
    return current.data;
  }

  max() {
    if (!this._root) return null;
    let current = this._root;
    while (current.right) current = current.right;
    return current.data;
  }
}

module.exports = {
  BinarySearchTree,
};

module.exports = {
  BinarySearchTree,
};
