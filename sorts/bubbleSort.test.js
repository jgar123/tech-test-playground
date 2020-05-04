const bubble = require('./bubbleSort')

test('expect bubble sort to return an array the length as the input array', () => {
  expect(bubble.bubbleSort([6,5,4,3,1]).length).toBe(5)
})

test('expect bubble sort to return sorted array', () => {
  expect(bubble.bubbleSort([1,5,2,6,3,4])).toStrictEqual([1,2,3,4,5,6])
})