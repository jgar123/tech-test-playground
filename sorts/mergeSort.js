function merge(left, right) {

  const exportArray = []
  let leftIndex = 0
  let rightIndex = 0

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      exportArray.push(left[leftIndex])
      leftIndex++
    } else {
      exportArray.push(right[rightIndex])
      rightIndex++
    }
  }

  return exportArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex))

}

function mergeSort(unsortedArray) {

  if (unsortedArray.length <= 1) {
    return unsortedArray
  }

  const middle = Math.floor(unsortedArray.length / 2) 
  const left = unsortedArray.slice(0, middle)
  const right = unsortedArray.slice(middle)

  return merge(mergeSort(left), mergeSort(right))

}

module.exports = mergeSort