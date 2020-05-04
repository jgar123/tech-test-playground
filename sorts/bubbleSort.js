function swap(array, leftIndex, rightIndex) {
  const temp = array[leftIndex]
  array[leftIndex] = array[rightIndex]
  array[rightIndex] = temp
}

function bubbleSort(unsortedArray) {

  if (unsortedArray.length <= 1) {
    return unsortedArray
  }

  let i = 0

  while (i < unsortedArray.length) {
    if (unsortedArray[i] > unsortedArray[i + 1]) {
      swap(unsortedArray, i, i + 1)
      i = 0
    } else {
      i++
    }
  }
  return unsortedArray
}

module.exports = { bubbleSort }