const fs = require('fs')
const textByLine = fs.readFileSync('../assets/twl06.txt').toString().split('\n')

const pointsArray = [
  {
    points: 1,
    letters: 'E,A,I,O,N,R,T,L,S,U'
  }, {
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

