import LinkedList from '../linked-list/LinkedList';

export default class Queue {
  constructor() {
    this.queue = [];
    this.index = 0;
  }

  isEmpty() {
    return this.index === 0;
  }

  enqueue(item) {
    this.queue[this.index] = item;
    this.index++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    } else {
      let temp = this.queue[0];
      let i = 0;
      while (i < this.index) {
        this.queue[i] = this.queue[i + 1];
        this.queue[i + 1] = null;
        i++;
      }
      this.index--;
      return temp;
    }
  }

  peek() {
    return this.isEmpty() ? null : this.queue[0];
  }

  toString(stringifier = x => x) {
    return this.queue.slice(0, this.index).map(stringifier).toString();
  }

}
