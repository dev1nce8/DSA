import LinkedList from "../linked-list/index.js";

export default class HashMap {
  #bucket;
  #capacity;
  #loadFactor;
  #initial = 16;
  constructor() {
    this.#capacity = this.#initial;
    this.#bucket = new Array(this.#capacity).fill(null);
    this.#loadFactor = 0.75;
  }

  set(key, value) {
    let h = hash(key, this.#capacity);
    if (this.#bucket[h] instanceof LinkedList === false) {
      this.#bucket[h] = new LinkedList();
    }
    if (this.#bucket[h]) {
      this.#bucket[h].forEach((n, i) => {
        if (n[0] === key) {
          this.#bucket[h].insertAt([key, value], i);
          this.#bucket[h].removeAt(i + 1);
        }
      });
    }

    this.#bucket[h].append([key, value]);
    if (this.length() >= this.#bucket.length * this.#loadFactor) {
      this.#capacity += this.#capacity;
      const temp = this.entries();
      this.#bucket = new Array(this.#capacity).fill(null);
      temp.forEach((entry) => {
        this.set(entry[0], entry[1]);
      });
    }
  }

  get(key) {
    const h = hash(key, this.#capacity);

    let res = null;
    this.#bucket[h].forEach((v) => {
      if (v[0] === key) {
        res = v;
      }
    });

    return res;
  }

  has(key) {
    const h = hash(key, this.#capacity);
    let found = false;
    if (this.#bucket[h]) {
      this.#bucket[h].forEach((v, i) => {
        if (!found) {
          if (v[0] === key) {
            found = true;
          }
        }
      });
    }
    return found;
  }

  remove(key) {
    const h = hash(key, this.#capacity);
    if (this.#bucket[h]) {
      this.#bucket[h].forEach((v, i) => {
        if (v[0] === key) {
          this.#bucket[h].removeAt(i);
        }
      });
    }
  }

  length() {
    return this.entries().length;
  }

  entries() {
    let arr = [];
    this.#bucket.forEach((list) => {
      if (list) {
        list.forEach((i) => arr.push([i[0], i[1]]));
      }
    });
    return arr;
  }

  clear() {
    this.#capacity = this.#initial;
    this.#bucket = new Array(this.#capacity).fill(null);
  }

  keys() {
    let arr = [];
    this.#bucket.forEach((list) => {
      if (list) {
        list.forEach((i) => arr.push(i[0]));
      }
    });
    return arr;
  }
  values() {
    let arr = [];
    this.#bucket.forEach((list) => {
      if (list) {
        list.forEach((i) => arr.push(i[1]));
      }
    });
    return arr;
  }
}

function hash(key, capacity) {
  let hashCode = 0;
  const prime = 31;
  for (let i = 0; i < key.length; i++) {
    hashCode = (prime * hashCode + key.charCodeAt(i)) % capacity;
  }

  return hashCode;
}
