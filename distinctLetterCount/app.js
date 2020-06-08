function distinctLetterCount(s) {

  const splitString = s.split('')

  const letterCounts = splitString.reduce((obj, char) => {
    if (obj[char]) {
      obj[char]++
      return obj
    } else {
      obj[char] = 1
      return obj
    }
  }, {})

  const sortedString = splitString.filter((char, i) => splitString.indexOf(char) === i).sort()
  const result = []

  sortedString.forEach(letter => {

    if (!result.includes(letterCounts[letter])) {
      result.push(letterCounts[letter])
    } else {
      let decreasing = true
      let count = letterCounts[letter] - 1
      while (decreasing) {

        if (count <= 0) {
          decreasing = false
        }
        if (!result.includes(count)) {
          result.push(count)
          decreasing = false
        } else {
          count--
        }

      }
    }

  })

  return result.reduce((acc, num) => acc + num)


}

module.exports = { distinctLetterCount }



