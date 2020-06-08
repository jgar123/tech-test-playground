/* global test, expect */
const { alternatingSequence } = require('./app')

test('Expect the minimum number of swaps to be returned', () => {
  expect(alternatingSequence([1,0,1,0,1,1])).toBe(1)
  expect(alternatingSequence([1,1,0,1,1])).toBe(2)
  expect(alternatingSequence([0,1,1,0])).toBe(2)
  expect(alternatingSequence([1,0,1])).toBe(0)
  expect(alternatingSequence([1,1,1,1,1])).toBe(2)
})

