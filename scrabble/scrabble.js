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

// Here tiles remaining would be those in the bag. Player names go in as string, max 4 players
function initPlayerTiles(tileBag, ...playernames) {

  if (playernames.length > 4) {
    return 'TOO MANY PLAYERS, MUST BE 4 OR LOWER'
  }

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

// Could have used a counter & remove from both arrays approach - set i = 0 to go to start of array if letter match is found
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

function longestWords(array) {

  if (array.length < 1) {
    return
  }
  const sortedArray = array.sort((a, b) => b.length - a.length)
  const maxLength = sortedArray[0].length
  const result = []

  for (let i = 0; i < array.length; i++) {

    if (array[i].length === maxLength) {
      result.push(array[i].join(''))
    } else {
      return result
    }

  }

}

function highScoringWords(array) {

  const letterPoints = new Scrabble().letterPoints
  const highestScoring = { words: [], wordPoints: 0 }
  const result = []

  array.forEach(word => {
    let wordPoints = 0
    word.forEach(letter => {
      letterPoints.forEach(pair => {
        if (pair.letters.includes(letter)) {
          wordPoints += pair.points
        }
      })
    })
    result.push({ word: word, totalPoints: wordPoints })
  })

  result.sort((a, b) => b.totalPoints - a.totalPoints)

  const maxPoints = result[0].totalPoints
  highestScoring.wordPoints = maxPoints

  result.forEach(pair => {
    if (pair.totalPoints === maxPoints) {
      highestScoring.words.push(pair.word.join(''))
    }
  })

  return highestScoring

}

const fs = require('fs')

const textByLine = fs
  .readFileSync('./assets/twl06.txt')
  .toString()
  .toUpperCase()
  .split('\n')
  .map(word => word.split(''))

const newGame = new Scrabble(textByLine)

const tileBag = newGame.theBag

const players = initPlayerTiles(tileBag, 'jonny')

const jonnyMatches = viableWords(players.jonny.currentLetters, newGame.dictionary)

const jlw = longestWords(jonnyMatches)

const jhsw = highScoringWords(jonnyMatches)


module.exports = { Scrabble, randomTileIndex, initPlayerTiles, letterCount, subArrayMatcher, viableWords, longestWords, highScoringWords }