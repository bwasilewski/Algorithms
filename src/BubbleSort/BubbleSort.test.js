const BubbleSort = require('./BubbleSort')

describe('BubbleSort', () => {
  it('should sort an array', () => {
    expect(
      BubbleSort([4, 1, 7, 8, 9, 0, 3, 2])
    ).toEqual([0, 1, 2, 3, 4, 7, 8, 9])
  })
})