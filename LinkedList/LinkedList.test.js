const LinkedList = require('./LinkedList')

describe('LinkedList', () => {

  describe('constructor', () => {
    it('should create a new linked list', () => {
      const linkedList = new LinkedList()
      expect(linkedList.head).toBeNull()
      expect(linkedList.size).toBe(0)
    })

    it('should create a new linked list from an array', () => {
      const linkedList = new LinkedList([1, 2, 3])
      expect(linkedList.head.data).toBe(1)
      expect(linkedList.size).toBe(3)
    })
  })

  describe('getFirst', () => {
    it('should return the first node of the list', () => {
      const linkedList = new LinkedList([1,2,3])
      expect(linkedList.getFirst()).toBe(1)
    })

    it('should return null if the list is empty', () => {
      const linkedList = new LinkedList()
      expect(linkedList.getFirst()).toBeNull()
    })
  })

  describe('getLast', () => {
    it('should return the last node of the list', () => {
      const linkedList = new LinkedList([1,2,3])
      expect(linkedList.getLast()).toBe(3)
    })

    it('should return null if the list is empty', () => {
      const linkedList = new LinkedList()
      expect(linkedList.getLast()).toBeNull()
    })
  })

  describe('insertFirst', () => {
    it('should insert a new node at the beginning of the list', () => {
      const linkedList = new LinkedList([1,2,3])
      linkedList.insertFirst(4)
      expect(linkedList.head.data).toBe(4)
      expect(linkedList.size).toBe(4)
    })

    it('should insert a new node at the beginning of an empty list', () => {
      const linkedList = new LinkedList()
      linkedList.insertFirst(4)
      expect(linkedList.head.data).toBe(4)
      expect(linkedList.size).toBe(1)
    })
  })

  describe('insertLast', () => {
    it('should insert a new node at the end of the list', () => {
      const linkedList = new LinkedList([1,2,3])
      linkedList.insertLast(4)
      expect(linkedList.head.data).toBe(1)
      expect(linkedList.size).toBe(4)
    })

    it('should insert a new node at the end of an empty list', () => {
      const linkedList = new LinkedList()
      linkedList.insertLast(4)
      expect(linkedList.head.data).toBe(4)
      expect(linkedList.size).toBe(1)
    })

    it('should insert a new node at the end of the list', () => {
      const linkedList = new LinkedList()
      linkedList.insertLast(3)
      linkedList.insertLast(2)
      linkedList.insertLast(1)
      expect(linkedList.head.data).toBe(3)
      expect(linkedList.size).toBe(3)
    })
  })

  describe('insertAtIndex', () => {
    it('should insert a new node at a given index', () => {
      const linkedList = new LinkedList([1,2,3])
      linkedList.insertAtIndex('A', 1)
      expect(linkedList.printData()).toBe('1 A 2 3')
      expect(linkedList.size).toBe(4)
    })

    it('should insert a new node at the beginning of the list', () => {
      const linkedList = new LinkedList([1,2,3])
      linkedList.insertAtIndex('A', 0)
      expect(linkedList.printData()).toBe('A 1 2 3')
      expect(linkedList.size).toBe(4)
    })

    it('should insert a new node at the end of the list', () => {
      const linkedList = new LinkedList([1,2,3])
      linkedList.insertAtIndex('A', 3)
      expect(linkedList.printData()).toBe('1 2 3 A')
      expect(linkedList.size).toBe(4)
    })

    it('should throw an error if the index is out of bounds', () => {
      const linkedList = new LinkedList([1,2,3])
      expect(() => linkedList.insertAtIndex('A', 4)).toThrow()
    })
  })

  describe('deleteFirst', () => {
    it('should delete the first node of the list', () => {
      const linkedList = new LinkedList([1, 2, 3])

      linkedList.deleteFirst()
      expect(linkedList.head.data).toBe(2)
      expect(linkedList.size).toBe(2)
    })

    it('should delete the first node of the list', () => {
      const linkedList = new LinkedList([1])

      linkedList.deleteFirst()
      expect(linkedList.head).toBeNull()
      expect(linkedList.size).toBe(0)
    })

    it('should throw an error if the list is empty', () => {
      const linkedList = new LinkedList()
      expect(() => linkedList.deleteFirst()).toThrow()
    })
  })

  describe('deleteLast', () => {
    it('should delete the last node of the list', () => {
      const linkedList = new LinkedList([1, 2, 3])

      linkedList.deleteLast()
      expect(linkedList.head.data).toBe(1)
      expect(linkedList.size).toBe(2)
    })

    it('should delete the last node of the list', () => {
      const linkedList = new LinkedList([1])

      linkedList.deleteLast()
      expect(linkedList.head).toBeNull()
      expect(linkedList.size).toBe(0)
    })

    it('should throw an error if the list is empty', () => {
      const linkedList = new LinkedList()
      expect(() => linkedList.deleteLast()).toThrow()
    })
  })

  describe('deleteAtIndex', () => {
    it('should delete a node at a given index', () => {
      const linkedList = new LinkedList([1,2,3])
      linkedList.deleteAtIndex(1)
      expect(linkedList.printData()).toBe('1 3')
      expect(linkedList.size).toBe(2)
    })
  
    it('should delete the first node of the list', () => {
      const linkedList = new LinkedList([1,2,3])
      linkedList.deleteAtIndex(0)
      expect(linkedList.printData()).toBe('2 3')
      expect(linkedList.size).toBe(2)
    })

    it('should delete the last node of the list', () => {
      const linkedList = new LinkedList([1,2,3])
      linkedList.deleteAtIndex(2)
      expect(linkedList.printData()).toBe('1 2')
      expect(linkedList.size).toBe(2)
    })

    it('should throw an error if the index is out of bounds', () => {
      const linkedList = new LinkedList([1,2,3])
      expect(() => linkedList.deleteAtIndex(4)).toThrow()
    })

    it('should throw an error if the list is empty', () => {
      const linkedList = new LinkedList()
      expect(() => linkedList.deleteAtIndex(0)).toThrow()
    })
  })

  describe('printData', () => {
    it('should print the data of the list', () => {
      const linkedList = new LinkedList()
      linkedList.insertFirst(1)
      linkedList.insertFirst(2)
      linkedList.insertFirst(3)
      expect(linkedList.printData()).toBe('3 2 1')
    })

    it('should print the data of the list', () => {
      const linkedList = new LinkedList()
      expect(linkedList.printData()).toBe('')
    })

    it('should print the data of the list', () => {
      const linkedList = new LinkedList([1,2,3])
      expect(linkedList.printData()).toBe('1 2 3')
    })
  })
})