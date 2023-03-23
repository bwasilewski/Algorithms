const LinkedList = require('./LinkedList')

describe('LinkedList', () => {
  it('should create a new linked list', () => {
    const linkedList = new LinkedList()
    expect(linkedList.head).toBeNull()
    expect(linkedList.size).toBe(0)
  })

  it('should insert a new node at the beginning of the list', () => {
    const linkedList = new LinkedList()
    linkedList.insertFirst(1)
    linkedList.insertFirst(2)
    linkedList.insertFirst(3)
    expect(linkedList.head.data).toBe(3)
    expect(linkedList.size).toBe(3)
  })

  it('should delete the first node of the list', () => {
    const linkedList = new LinkedList([1, 2, 3])

    linkedList.deleteFirst()
    expect(linkedList.head.data).toBe(2)
    expect(linkedList.size).toBe(2)
  })

  it('should delete the last node of the list', () => {
    const linkedList = new LinkedList([1, 2, 3])

    linkedList.deleteLast()
    expect(linkedList.head.data).toBe(1)
    expect(linkedList.size).toBe(2)
  })

  it('should insert a new node at the end of the list', () => {
    const linkedList = new LinkedList()
    linkedList.insertLast(3)
    linkedList.insertLast(2)
    linkedList.insertLast(1)
    expect(linkedList.head.data).toBe(3)
    expect(linkedList.size).toBe(3)
  })

  it('should insert a new node at a given index', () => {
    const linkedList = new LinkedList([1,2,3])
    linkedList.insertAtIndex('A', 1)
    expect(linkedList.printData()).toBe('1 A 2 3')
    expect(linkedList.size).toBe(4)
  })

  it('should delete a node at a given index', () => {
    const linkedList = new LinkedList([1,2,3])
    linkedList.deleteAtIndex(1)
    expect(linkedList.printData()).toBe('1 3')
    expect(linkedList.size).toBe(2)
  })

  it('should print the data of the list', () => {
    const linkedList = new LinkedList()
    linkedList.insertFirst(1)
    linkedList.insertFirst(2)
    linkedList.insertFirst(3)
    expect(linkedList.printData()).toBe('3 2 1')
  })
})