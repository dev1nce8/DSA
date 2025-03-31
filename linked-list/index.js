export default class LinkedList {
  #root;
  #size;
  constructor() {
    this.#root = null;
    this.#size = 0;
  }

  append(value) {
    const node = new Node(value);
    if (!this.#root) {
      this.#root = node;
      this.#size += 1;
      return;
    }

    const traverse = (root) => {
      if (root === null) {
        return;
      }
      if (root.next === null) {
        root.next = node;
        this.#size += 1;
        return;
      }
      traverse(root.next);
    };

    traverse(this.#root);
  }

  prepend(value) {
    const temp = this.#root;
    this.#root = new Node(value);
    this.#root.next = temp;
    this.#size += 1;
  }

  size() {
    return this.#size;
  }

  head() {
    return this.#root;
  }

  tail() {
    if (!this.#root) return null;

    const traverse = (root) => {
      if (!root.next) return root;
      return traverse(root.next);
    };

    return traverse(this.#root);
  }

  at(index) {
    if (!this.#root) return null;

    let counter = 0;
    const traverse = (root) => {
      if (!root.next) return null;
      if (counter === index) {
        return root;
      }
      counter++;
      return traverse(root.next);
    };

    return traverse(this.#root);
  }

  pop() {
    if (!this.#root) return;

    const traverse = (root) => {
      if (!root) return;
      if (!root.next.next) {
        root.next = null;
        this.#size -= 1;
        return;
      }
      traverse(root.next);
    };

    traverse(this.#root);
  }

  contains(value) {
    if (!this.#root) return false;

    const traverse = (root) => {
      if (!root) return false;
      if (root.value === value) {
        return true;
      }

      return traverse(root.next);
    };

    return traverse(this.#root);
  }

  find(value) {
    if (!this.#root) return null;

    let counter = 0;
    const traverse = (root) => {
      if (!root) {
        counter = null;
        return;
      }
      if (root.value === value) {
        return counter;
      }
      counter++;
      return traverse(root.next);
    };
    traverse(this.#root);
    return counter;
  }

  toString() {
    if (!this.#root) return null;

    let string = "";
    const traverse = (root) => {
      if (!root) {
        string += null;
        return null;
      }
      string += `( ${root.value} ) -> `;
      traverse(root.next);
    };

    traverse(this.#root);
    return string;
  }

  insertAt(value, index) {
    const node = new Node(value);
    if (!this.#root) {
      this.#root = node;
      this.#size += 1;
      return;
    }
    if (index === 0) {
      this.prepend(value);
      return;
    }
    if (index > this.#size) {
      this.append(v);
      return;
    }

    let counter = 0;
    const traverse = (root) => {
      if (!root) return;
      if (index === counter + 1) {
        const temp = root.next;
        node.next = temp;
        root.next = node;
        this.#size += 1;
        return;
      }
      counter += 1;
      traverse(root.next);
    };
    traverse(this.#root);
  }

  removeAt(index) {
    if (!this.#root) {
      return;
    }
    if (index === 0) {
      this.#root = this.#root.next;
      this.#size -= 1;
      return;
    }
    if (index === this.#size) {
      this.pop();
      return;
    }

    let counter = 0;
    const traverse = (root) => {
      if (!root) return;
      if (index === counter + 1) {
        const temp = root.next.next;
        root.next = temp;
        this.#size -= 1;
        return;
      }
      counter += 1;
      traverse(root.next);
    };
    traverse(this.#root);
  }
}

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}
