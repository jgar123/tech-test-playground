const unformattedData = ['Cardiff West, 11014, C, 17803, L, 4923, UKIP, 2069, LD', 'Islington South & Finsbury, 22547, L, 9389, C, 4829, LD, 3375, UKIP, 3371, G, 309, Ind']

const splitData = unformattedData.map(elem => elem.split(','))
let count

for (let i = 0; i < splitData.length; i++) {
  count = 0
  for (let j = 0; j < splitData[i].length; j++) {
    if (j !== 0) {
      splitData[i][j] = splitData[i][j].replace(/\s/g, '')
    }
    switch (splitData[i][j]) {
      case 'C':
        splitData[i][j - 1] = parseInt(splitData[i][j - 1])
        count += splitData[i][j - 1]
        splitData[i][j] = `Conservative Party: ${splitData[i][j - 1]}`
        break
      case 'L':
        splitData[i][j - 1] = parseInt(splitData[i][j - 1])
        count += splitData[i][j - 1]
        splitData[i][j] = `Labour Party: ${splitData[i][j - 1]}`
        break
      case 'LD':
        splitData[i][j - 1] = parseInt(splitData[i][j - 1])
        count += splitData[i][j - 1]
        splitData[i][j] = `Liberal Democrats: ${splitData[i][j - 1]}`
        break
      case 'G':
        splitData[i][j - 1] = parseInt(splitData[i][j - 1])
        count += splitData[i][j - 1]
        splitData[i][j] = `Green Party: ${splitData[i][j - 1]}`
        break
      case 'Ind':
        splitData[i][j - 1] = parseInt(splitData[i][j - 1])
        count += splitData[i][j - 1]
        splitData[i][j] = `Independent: ${splitData[i][j - 1]}`
        break
      case 'SNP':
        splitData[i][j - 1] = parseInt(splitData[i][j - 1])
        count += splitData[i][j - 1]
        splitData[i][j] = `SNP: ${splitData[i][j - 1]}`
        break
      case 'UKIP':
        splitData[i][j - 1] = parseInt(splitData[i][j - 1])
        count += splitData[i][j - 1]
        splitData[i][j] = `UKIP: ${splitData[i][j - 1]}`
        break
      default:
        break
    }
  }
  splitData[i].push(`Total count: ${count}`)
}

const finalDataStructure = splitData
  .map(elem => {
    return elem.filter(subElem => typeof subElem === 'string')
  })

console.log(finalDataStructure)
