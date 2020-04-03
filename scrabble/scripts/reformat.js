const fs = require('fs')
const textByLine = fs
  .readFileSync('../assets/twl06.txt')
  .toString()
  .toUpperCase()
  .split('\n')