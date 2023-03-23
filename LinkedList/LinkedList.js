class Node {
  constructor (data, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor (data = []) {
    this.head = null

    data.reverse().forEach(item => {
      this.head = new Node(item, this.head)
    })

    this.size = data.length
  }

  insertFirst (data) {
    this.head = new Node(data, this.head)
    this.size++
  }

  deleteFirst () {
    this.head = this.head.next
    this.size--
  }

  insertLast (data) {
    let current = this.head

    if (current) {
      while ( current.next ) {
        current = current.next
      }
    } else {
      this.head = new Node(data)
    }

    this.size++
  }

  deleteLast () {
    let result

    if ( !this.head ) return null

    if ( !this.head.next ) {
      result = this.head.data
      this.head = null
      this.size--
      return result
    }

    let current = this.head
    let previous

    while ( current.next ) {
      previous = current
      current = current.next
    }
    
    current = null
    this.size--
  }

  insertAtIndex (data, index) {
    if ( index === 0 ) {
      this.insertFirst(data)
      return
    }

    let current = this.head
    let currentIndex = 0

    while ( current ) {
      if ( currentIndex === index - 1 ) {
        current.next = new Node(data, current.next)
        break
      }
      current = current.next
      currentIndex++
    }
    this.size++
  }

  deleteAtIndex (index) {
    let current = this.head
    let currentIndex = 0
    let previous
    let result

    if ( index < this.size ) {
      while ( current ) {
        if ( currentIndex === index ) {
          previous.next = current.next
          result = current.data
          current = null
          break
        }
        currentIndex++
        previous = current
        current = current.next
      }
      this.size--
      return result
    } else {
      return null
    }
  }

  printData () {
    let current = this.head
    let out = []

    while ( current ) {
      out.push(current.data)
      current = current.next
    }

    return out.join(' ')
  }
}

module.exports = LinkedList