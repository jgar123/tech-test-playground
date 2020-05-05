/* global test, expect */
const bubble = require('./bubbleSort')

test('expect bubble sort to return an array the length as the input array', () => {
  expect(bubble.bubbleSort([6,5,4,3,1]).length).toBe(5)
})

test('expect bubble sort to return sorted array', () => {
  expect(bubble.bubbleSort([1,5,2,6,3,4])).toStrictEqual([1,2,3,4,5,6])
})

test('expect sort to handle duplicate values', () => {
  expect(bubble.bubbleSort([3,3,3,4,5,2,2,1,1,1])).toStrictEqual([1,1,1,2,2,3,3,3,4,5])
})

