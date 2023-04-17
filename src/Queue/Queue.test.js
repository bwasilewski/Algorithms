const Queue = require('./Queue');

describe('Queue', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  test('enqueue adds items to the queue', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.items).toEqual([1, 2]);
  });

  test('dequeue removes and returns the first item in the queue', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.dequeue()).toBe(1);
    expect(queue.items).toEqual([2]);
  });

  test('dequeue returns null if the queue is empty', () => {
    expect(queue.dequeue()).toBeNull();
  });

  test('isEmpty returns true if the queue is empty', () => {
    expect(queue.isEmpty()).toBe(true);
  });

  test('isEmpty returns false if the queue is not empty', () => {
    queue.enqueue(1);
    expect(queue.isEmpty()).toBe(false);
  });
});