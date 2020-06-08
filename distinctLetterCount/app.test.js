/* global test, expect */
const { distinctLetterCount } = require('./app')

test('Expect the return the length of a string that contains distinct counts of letters', () => {
  expect(distinctLetterCount('aabbccddeeffgg')).toBe(3)
  expect(distinctLetterCount('hello')).toBe(3)
  expect(distinctLetterCount('thesecanbetricky')).toBe(6)
})

