/* global test, expect */
const { distinctLetterCount } = require('./app')

test('Expect the return the length of a string that contains distinct counts of letters', () => {
  expect(distinctLetterCount('aabbccddeeffgg')).toBe(3)
  expect(distinctLetterCount('hello')).toBe(3)
  expect(distinctLetterCount('thesecanbetricky')).toBe(6)
  expect(distinctLetterCount('example')).toBe(3)
  expect(distinctLetterCount('eeee')).toBe(4)
  expect(distinctLetterCount('bonnnoo')).toBe(6)
  expect(distinctLetterCount('aabfgshhhhwtllla')).toBe(10)
  expect(distinctLetterCount('bobsyouruncle')).toBe(3)
})

