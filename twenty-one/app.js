function randomCard() {
  const test = cards[Math.floor(Math.random() * cards.length)]
  console.log(test)
  return test
}

const cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

let sam = 0
let dealer = 0

sam = randomCard() + randomCard()
dealer = randomCard() + randomCard()

if (sam + dealer === 44) {
  console.log('both bust')
} else if (sam > 21) {
  console.log('sam bust')
} else if (dealer > 21) {
  console.log('dealer bust')
} else if (sam === 21 && dealer === 21) {
  console.log('both blackjack')
} else if (sam === 21) {
  console.log('sam has blackjack', sam, dealer)
} else if (dealer === 21) {
  console.log('dealer has blackjack', sam, dealer)
} else {
  // Sam begins
  while (sam < 17) {
    sam += randomCard()
  }

  if (sam > 21) {
    console.log('sam has bust', sam, dealer)
  } else {
    // Dealer begins 
    while (dealer < sam) {
      dealer += randomCard()
    }
    if (dealer > 21) {
      console.log('dealer bust', sam, dealer)
    } else if (dealer > sam) {
      console.log('dealer wins', sam, dealer)
    } else if (sam > dealer) {
      console.log('sam wins', sam, dealer)
    }
  }

}


