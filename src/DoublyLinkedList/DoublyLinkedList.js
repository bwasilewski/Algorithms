class Node {
  constructor(data, next = null, previous = null) {
    this.data = data
    this.next = next
    this.previous = previous
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }

  addToHead(data) {
    this.head = new Node(data, this.head, null)
    this.size++
  }

  addToTail(data) {
    this.tail = new Node(data, null, this.tail)
    this.size++
  }

  removeHead() {
    this.head = this.head.next
    this.size--
  }

  removeTail() {
    if ( this.tail ) {
      this.tail = this.tail.previous
    }

    this.size--
  }

  contains(query) {
    let current = this.head
    while ( current ) {
      if ( current.data === query ) {
        return true
      }
      current = this.next
    }

    return false
  }

  indexOf(query) {
    let current = this.head
    let count = 0
    while ( current ) {
      if ( current.data === query ) {
        return count
      }
      current = this.next
      count++
    }

    return -1
  }

  printData() {
    let current = this.head
    let out = []

    while ( current ) {
      out.push(current.data)
      current = current.next
    }

    return out.join(', ')
  }
}

module.exports = DoublyLinkedList