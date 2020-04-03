const fs = require('fs')
const textByLine = fs
  .readFileSync('../assets/twl06.txt')
  .toString()
  .toUpperCase()
  .split('\n')

function randomiser(array) {
  return array[Math.floor(Math.random() * array.length)]
}

const pointsArray = [
  {
    points: 1,
    letters: 'E,A,I,O,N,R,T,L,S,U'
  },
  {
    points: 2,
    letters: 'D, G'
  },
  {
    points: 3,
    letters: 'B,C,M,P'
  },
  {
    points: 4,
    letters: 'F,H,V,W,Y'
  },
  {
    points: 5,
    letters: 'K'
  },
  {
    points: 8,
    letters: 'J,X'
  },
  {
    points: 10,
    letters: 'Q,Z'
  }
]

for (let i = 0; i < pointsArray.length; i++) {
  pointsArray[i].letters = pointsArray[i].letters.split(',')
}

const theBag = [
  {
    tileCount: 12,
    letter: 'E'
  },
  {
    tileCount: 9,
    letter: 'A'
  },
  {
    tileCount: 9,
    letter: 'I'
  },
  {
    tileCount: 8,
    letter: 'O'
  },
  {
    tileCount: 6,
    letter: 'N'
  },
  {
    tileCount: 6,
    letter: 'R'
  },
  {
    tileCount: 6,
    letter: 'T'
  },
  {
    tileCount: 4,
    letter: 'L'
  },
  {
    tileCount: 4,
    letter: 'S'
  },
  {
    tileCount: 4,
    letter: 'U'
  },
  {
    tileCount: 4,
    letter: 'D'
  },
  {
    tileCount: 3,
    letter: 'G'
  },
  {
    tileCount: 2,
    letter: 'B'
  },
  {
    tileCount: 2,
    letter: 'C'
  },
  {
    tileCount: 2,
    letter: 'M'
  },
  {
    tileCount: 2,
    letter: 'P'
  },
  {
    tileCount: 2,
    letter: 'F'
  },
  {
    tileCount: 2,
    letter: 'H'
  },
  {
    tileCount: 2,
    letter: 'V'
  },
  {
    tileCount: 2,
    letter: 'W'
  },
  {
    tileCount: 2,
    letter: 'Y'
  },
  {
    tileCount: 1,
    letter: 'K'
  },
  {
    tileCount: 1,
    letter: 'J'
  },
  {
    tileCount: 1,
    letter: 'X'
  },
  {
    tileCount: 1,
    letter: 'Q'
  },
  {
    tileCount: 1,
    letter: 'Z'
  }
]

const player = { currentLetters: [], points: 0 }

while (player.currentLetters.length < 7) {
  const randomLetter = randomiser(theBag)
  if (randomLetter.tileCount < 1) {
    console.log('no more left')
  } else {
    player.currentLetters.push(randomLetter.letter)
    randomLetter.tileCount -= 1
  }
}

const orderedPlayerLetters = player.currentLetters.sort().join('')

const possibleWords = textByLine
  .filter(word => {
    const orderedWord = word.split('').sort().join('')
    return orderedPlayerLetters.indexOf(orderedWord) > -1
  })
  .filter(elem => !!elem)

console.log(player)
console.log(possibleWords)

