
export default class Stack {
  constructor() {
    this.data = [];
    this.index = 0
  }

  push(item) {
    this.data[this.index] = item;
    this.index++;
  }

  isEmpty() {
    return this.index === 0;
  }

  pop() {
    if (this.isEmpty()) {
      return null
    } else {
      const temp = this.data[--this.index];
      this.data[this.index] = null;
      return temp;
    }
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    } else {
      return this.data[this.index - 1];
    }
  }

  toString(stringifier = x => x) {
    return this.data.map(stringifier).reverse().toString();
  }

  toArray() {
    return [...this.data.reverse()];
  }
}
