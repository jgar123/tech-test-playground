const mergeSort = require('./mergeSort')

test('expect output array to be the same length as output array', () => {
  expect(mergeSort([4,3,2,5,6,1]).length).toBe(6)
})

test('expect input array to be in ascending order', () => {
  expect(mergeSort([4,3,2,5,6,1])).toStrictEqual([1,2,3,4,5,6])
})

