import { mergeSort } from "../mergeSort/index.js";

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

export default class Tree {
  constructor() {
    this.root = null;
  }

  buildTree(array) {
    const set = new Set(array);
    const sorted = mergeSort([...set]);
    const build = (array, start = 0, end = array.length - 1) => {
      if (start > end) return null;
      const mid = Math.floor((end + start) / 2);
      const root = new Node(array[mid]);

      root.left = build(array, start, mid - 1);
      root.right = build(array, mid + 1, end);

      return root;
    };
    this.root = build(sorted);
  }

  insert(value) {
    const node = new Node(value);
    const traverse = (root) => {
      if (!root) return node;
      if (root.data === value) return root;
      if (value < root.data) {
        root.left = traverse(root.left);
      } else if (value > root.data) {
        root.right = traverse(root.right);
      }
      return root;
    };
    traverse(this.root);
  }

  deleteItem(value) {
    const traverse = (root, value) => {
      if (!root) return root;
      if (root.data > value) {
        root.left = traverse(root.left, value);
      } else if (root.data < value) {
        root.right = traverse(root.right, value);
      } else {
        if (!root.left) {
          return root.right;
        }
        if (!root.right) {
          return root.left;
        }

        let successor = getInorderSuccessor(root);
        root.data = successor.data;
        root.right = traverse(root.right, successor.data);
      }
      return root;
    };

    function getInorderSuccessor(root) {
      root = root.right;
      while (root && root.left) {
        root = root.left;
      }
      return root;
    }

    traverse(this.root, value);
  }

  find(value) {
    const traverse = (root) => {
      if (!root) return null;
      if (root.data === value) return root;
      if (root.data > value) {
        return traverse(root.left);
      }
      if (root.data < value) {
        return traverse(root.right);
      }

      return root;
    };

    return traverse(this.root);
  }

  levelOrder(callback) {
    const q = [this.root];
    const traverse = (queue) => {
      if (!queue.length) return;
      const curr = queue.shift();
      callback(curr.data);
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
      traverse(queue);
    };
    traverse(q);
  }

  inOrder(callback) {
    const traverse = (root) => {
      if (!root) return;
      traverse(root.left);
      callback(root.data);
      traverse(root.right);
    };

    traverse(this.root);
  }

  preOrder(callback) {
    const traverse = (root) => {
      if (!root) return;
      callback(root.data);
      traverse(root.left);
      traverse(root.right);
    };
    traverse(this.root);
  }

  postOrder(callback) {
    const traverse = (root) => {
      if (!root) return;
      traverse(root.left);
      traverse(root.right);
      callback(root.data);
    };
    traverse(this.root);
  }

  height(node) {
    // find the node
    const traverse = (root, h = 0) => {
      if (!root) return h;
      return Math.max(traverse(root.left, h + 1), traverse(root.right, h + 1));
    };

    return traverse(node);
  }

  depth(node) {
    const traverse = (root, d = 1) => {
      if (!root) return d;
      if (node.data === root.data) {
        return d;
      }
      if (root.data > node.data) {
        return traverse(root.left, d + 1);
      }
      if (root.data < node.data) {
        return traverse(root.right, d + 1);
      }
      return d;
    };

    return traverse(this.root);
  }

  isBalanced() {
    const traverse = (root, h = 0) => {
      if (!root) return h;
      return Math.max(traverse(root.left, h + 1), traverse(root.right, h + 1));
    };
    const left = traverse(this.root.left);
    const right = traverse(this.root.right);

    return left > right ? left - right <= 1 : right - left <= 1;
  }

  reBalance() {
    const sorted = [];
    this.inOrder((data) => sorted.push(data));
    this.buildTree(sorted);
  }
}
