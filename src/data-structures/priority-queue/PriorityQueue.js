export default class PriorityQueue {

  constructor() {
    this.Queue = [];
    this.index = 0
  }


  add(item, priority) {
    console.log(item, priority, 'add')
    if (this.isEmpty()) {
      this.Queue.push([item, priority]);
      this.index++;
      return;
    }
    let i = this.index - 1;
    while (i >= 0) {
      if (priority >= this.Queue[i][1]) {
        this.Queue = [...this.Queue.splice(0, i + 1), [item, priority], ...this.Queue]
        this.index++
        i = -1
      } else if (i === 0) {
        this.Queue.unshift([item, priority]);
        this.index++;
        i = -1
      } else {
        i--
      }
    }
    console.log(this.Queue, 'add')
  }


  poll() {
    if (this.isEmpty()) {
      return null
    }
    return this.Queue.splice(0, 1)[0][0];
  }


  changePriority(item, priority) {
    if (this.isEmpty()) {
      return false
    }

    const itemIndex = this.Queue.findIndex(([im, prio]) => im === item)
    this.Queue.splice(itemIndex, 1)
    this.index--
    this.add(item, priority);
  }


  hasValue(value) {
    if (this.isEmpty()) {
      return false
    }

    return this.Queue.some((item) => item[0] === value);
  }


  isEmpty() {
    return this.Queue.length === 0;
  }


  peek() {
    return this.Queue[0][0];
  }

}
