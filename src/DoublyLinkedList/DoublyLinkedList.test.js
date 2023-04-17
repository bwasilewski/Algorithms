const DoublyLinkedList = require('./DoublyLinkedList')

describe('DoublyLinkedList', () => {
  let dll

  beforeEach(() => {
    dll = new DoublyLinkedList()
  })

  it('should have methods named "addToHead", "addToTail", "removeHead", "removeTail", "search", and "indexOf"', () => {
    expect(dll.addToHead).toBeDefined()
    expect(dll.addToTail).toBeDefined()
    expect(dll.removeHead).toBeDefined()
    expect(dll.removeTail).toBeDefined()
    expect(dll.indexOf).toBeDefined()
  })

  it('should designate a new head when new nodes are added to the head', () => {
    dll.addToHead(4)
    expect(dll.head.data).toEqual(4)
    dll.addToHead(5)
    expect(dll.head.data).toEqual(5)
  })

  it('should designate a new tail when new nodes are added to the tail', () => {
    dll.addToTail(4)
    expect(dll.tail.data).toEqual(4)
    dll.addToTail(5)
    expect(dll.tail.data).toEqual(5)
  })

  it('should remove the head from the list when removeHead is called', () => {
    dll.addToHead(4)
    dll.addToHead(5)
    expect(dll.head.data).toEqual(5)
    dll.removeHead()
    expect(dll.head.data).toEqual(4)
    dll.removeHead()
    expect(dll.head).toEqual(null)
  })

  it('should remove the tail from the list when removeTail is called', () => {
    dll.addToTail(4)
    dll.addToTail(5)
    expect(dll.tail.data).toEqual(5)
    dll.removeTail()
    expect(dll.tail.data).toEqual(4)
    dll.removeTail()
    expect(dll.tail).toEqual(null)
  })

  it('should contain a value that was added', () => {
    dll.addToTail(4)
    dll.addToHead(4)
    expect(dll.contains(4)).toBe(true)
  })

  it('should not contain a value that was removed', () => {
    dll.addToTail(2)
    dll.addToHead(1)
    dll.removeHead()
    expect(dll.contains(1)).toBe(false)
  })

  it('should not contain a value that was removed', () => {
    dll.addToTail(2)
    dll.addToHead(1)
    dll.removeTail()
    expect(dll.contains(2)).toBe(false)
  })

  it('should print out its data', () => {
    dll.addToHead(1)
    dll.addToHead(2)
    dll.addToHead(3)
    expect(dll.printData()).toEqual('3, 2, 1')
  })

  it('should return the correct index when indexOf is called', () => {
    dll.addToHead(1)
    dll.addToHead(2)
    dll.addToHead(3)
    expect(dll.indexOf(3)).toEqual(0)
  })

  it('should return -1 when the value is not in the list', () => {
    dll.addToTail(4)
    dll.addToHead(4)
    expect(dll.indexOf(5)).toEqual(-1)
  })
})