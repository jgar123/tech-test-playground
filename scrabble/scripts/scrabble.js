const fs = require('fs')

class Scrabble {
  // Originally had theBag as an array of objects (tileCount) but random selection of tiles would have an uneven distribution and so I decided to hard code the letters to represent distribution.
  constructor(dictionary) {
    this.dictionary = dictionary
    this.theBag = [
      'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'N', 'N', 'N', 'N', 'N', 'N', 'R', 'R', 'R', 'R', 'R', 'R', 'T', 'T', 'T', 'T', 'T', 'T', 'L', 'L', 'L', 'L', 'S', 'S', 'S', 'S', 'U', 'U', 'U', 'U', 'D', 'D', 'D', 'D', 'G', 'G', 'G', 'B', 'B', 'C', 'C', 'M', 'M', 'P', 'P', 'F', 'F', 'H', 'H', 'W', 'W', 'V', 'V', 'Y', 'Y', 'K', 'J', 'X', 'Q', 'Z'
    ]
    this.letterPoints = [
      {
        points: 1,
        letters: ['E', 'A', 'I', 'O', 'N', 'R', 'T', 'L', 'S', 'U']
      },
      {
        points: 2,
        letters: ['D', 'G']
      },
      {
        points: 3,
        letters: ['B', 'C', 'M', 'P']
      },
      {
        points: 4,
        letters: ['F', 'H', 'V', 'W', 'Y']
      },
      {
        points: 5,
        letters: ['K']
      },
      {
        points: 8,
        letters: ['J', 'X']
      },
      {
        points: 10,
        letters: ['Q', 'Z']
      }
    ]
  }
}

function randomTileIndex(array) {
  return Math.floor(Math.random() * array.length)
}

// Here tiles remaining would be those in the bag
function initPlayerTiles(tileBag, ...playernames) {

  const players = {}

  for (let i = 0; i < playernames.length; i++) {

    players[playernames[i]] = { currentLetters: [], points: 0 }

    while (players[playernames[i]].currentLetters.length < 7) {

      const tileIndex = randomTileIndex(tileBag)
      players[playernames[i]].currentLetters.push(tileBag[tileIndex])
      tileBag.splice(tileIndex, 1)

    }

    players[playernames[i]].currentLetters.sort()

  }

  return players

}

// remove letters in myLetters that don't exist in dictword
function letterCount(array) {
  const result = array.reduce((obj, char) => {
    if (obj[char]) {
      obj[char] = obj[char] + 1
      return obj
    } else {
      obj[char] = 1
      return obj
    }
  }, {})
  return result
}

function subArrayMatcher(word, letters) {

  // Move away from pointer
  const localWord = word.join('')
  const splitLocalWord = localWord.split('').sort()
  const localLetters = letters.join('')
  const splitLocalLetters = localLetters.split('').sort()

  const trimLetters = splitLocalLetters.filter(letter => {
    return splitLocalWord.includes(letter)
  })

  if (new Set(trimLetters).size === new Set(splitLocalWord).size) {

    // ! might want to have test as a count instead

    const reducedLetters = letterCount(trimLetters)
    const reducedWord = letterCount(splitLocalWord)
    let test = false

    for (const letter in reducedLetters) {

      if (reducedLetters[letter] >= reducedWord[letter]) {
        test = true
      } else {
        return false
      }

    }

    return test

  }

  return false

} 

function viableWords(playerLetters, dictionary) {

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  // Players upper bound to stop splitting dictionary at
  let upperLimit

  if (playerLetters[playerLetters.length - 1] !== 'Z') {
    upperLimit = alphabet[alphabet.indexOf(playerLetters[playerLetters.length - 1]) + 1]
  } else {
    upperLimit = 'Z'
  }

  const reducedDictionary = dictionary.filter(wordArray => {
    // Check if the upper bound is Z and that the original playerLetter was in fact, a 'Z'
    if (upperLimit === 'Z' && playerLetters[playerLetters.length - 1] !== 'Y') {
      return wordArray[0] >= playerLetters[0]
    } else {
      return wordArray[0] >= playerLetters[0] && wordArray[wordArray.length - 1] < upperLimit
    }
  })

  const matches = reducedDictionary.filter(word => {
    return subArrayMatcher(word, playerLetters)
  })

  return matches
}

const textByLine = fs
  .readFileSync('../assets/twl06.txt')
  .toString()
  .toUpperCase()
  .split('\n')
  .map(word => word.split(''))

const newGame = new Scrabble(textByLine)

const tileBag = newGame.theBag

const players = initPlayerTiles(tileBag, 'jonny')

const matches = viableWords(players.jonny.currentLetters, newGame.dictionary)

console.log(players.jonny)
console.log(matches)
