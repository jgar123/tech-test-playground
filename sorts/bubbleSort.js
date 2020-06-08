function swap(array, leftIndex, rightIndex) {
  const temp = array[leftIndex]
  array[leftIndex] = array[rightIndex]
  array[rightIndex] = temp
}

function bubbleSort(unsortedArray) {

  if (unsortedArray.length <= 1) {
    return unsortedArray
  }

  for (let i = 0; i < unsortedArray.length; i++) {
    for (let j = 0; j < unsortedArray.length - i - 1; j++) {
      if (unsortedArray[j] > unsortedArray[j + 1]) {
        swap(unsortedArray, j, j + 1)
      }
    }
  }
  
  return unsortedArray
}

module.exports = { bubbleSort }