class Queue {
  constructor () {
    this.items = []
  }

  enqueue (data) {
    this.items.push(data)
  }

  dequeue () {
    return this.isEmpty() ? null: this.items.shift()
  }

  isEmpty () {
    return this.items.length === 0
  }
}

module.exports = Queue