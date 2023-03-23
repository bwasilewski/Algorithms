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

  getFirst () {
    return this.head ? this.head.data : null
  }

  getLast () {
    if ( !this.head ) return null
    let current = this.head
    while ( current ) {
      if ( current.next === null ) {
        return current.data
      }
      current = current.next
    }
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
    if ( !this.head ) throw new Error('List is empty')

    let result
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
    if ( index > this.size ) throw new Error('Index out of bounds')
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
    let result

    if ( this.size === 0 ) throw new Error('List is empty')
    if ( this.size < index ) throw new Error('Index is out of bounds')

    if ( index === 0 ) {
      result = this.head.data
      this.head = this.head.next
      this.size--
      return result
    }

    let current = this.head
    let currentIndex = 0
    let previous

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

  search (query) {
    if ( this.size === 0 ) return -1
    let index = 0
    let current = this.head

    while ( current.next ) {
      if ( current.data === query ) {
        return index
      }

      current = current.next
      index++
    }

    return -1
  }

  clear () {
    this.head = null
    this.size = 0
  }

  forEach (callback) {
    if ( !this.head ) throw new Error('List is empty')

    let current = this.head

    while ( current ) {
      callback(current)
      current = current.next
    }
  }

  map () {}

  filter () {}

  reduce () {}

  reverse () {}

  toArray () {}

  fromArray () {}

  toString () {}

}

module.exports = LinkedList