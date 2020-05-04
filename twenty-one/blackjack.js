// ! GENERIC CARD DEAL OUT

class Deck {
  constructor() {

    this.deck = []
    const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
    const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King']

    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < values.length; j++) {
        this.deck.push(`${values[j]} of ${suits[i]}`)
      }
    }
  }

  shuffle() {

    const preShuffle = this.deck
    const postShuffle = []

    while (preShuffle.length > 0) {
      const randomIndex = Math.floor(Math.random() * preShuffle.length)
      postShuffle.push(preShuffle[randomIndex])
      preShuffle.splice(randomIndex, 1)
    }

    return postShuffle
  }

}

function randomCardIndex(currentDeck) {
  return Math.floor(Math.random() * currentDeck.length)
}

// single card value
function cardValue(card) {
  const royals = ['Ace', 'Jack', 'Queen', 'King']
  const splitValue = card.split(' ')[0]
  if (!royals.includes(splitValue)) {
    return parseInt(splitValue)
  } else {
    if (splitValue === 'Ace') {
      return 11
    } else {
      return 10
    }
  }
}

function cardsInHandValue(cards) {

  const tempCards = cards

  if (isNaN(cards[cards.length - 1])) {
    return tempCards.reduce((acc, card) => {
      return acc + cardValue(card)
    }, 0)
  } else {
    tempCards.pop()
    return tempCards.reduce((acc, card) => {
      return acc + cardValue(card)
    }, 0)
  }

}

// deck == shuffled deck, nCards == number of cards to deal out to each player, players as strings
function dealOut(deck, nCards, ...players) {

  const initialHands = {}

  for (let i = 0; i < players.length; i++) {

    initialHands[players[i]] = []

    for (let j = 0; j < nCards + 1; j++) {
      if (j === nCards) {
        initialHands[players[i]].push(cardsInHandValue(initialHands[players[i]]))
      } else {
        const cardIndex = randomCardIndex(deck)
        initialHands[players[i]].push(deck[cardIndex])
        deck.splice(cardIndex, 1)
      }
    }
  }

  return initialHands

}

module.exports = { Deck, randomCardIndex, cardValue, cardsInHandValue, dealOut }


// ! BLACKJACK STARTS HERE

const shuffledDeck = new Deck().shuffle()

const hands = dealOut(shuffledDeck, 2, 'sam', 'dealer')

let sam = hands.sam[hands.sam.length - 1]
let dealer = hands.dealer[hands.dealer.length - 1]

if (sam + dealer === 44) {
  console.log('both bust')
} else if (sam > 21) {
  console.log('sam bust')
} else if (dealer > 21) {
  console.log('dealer bust')
} else if (sam === 21 && dealer === 21) {
  console.log('both blackjack')
} else if (sam === 21) {
  console.log('sam has blackjack', hands)
} else if (dealer === 21) {
  console.log('dealer has blackjack', hands)
} else {
  // Sam begins
  // while Sam's total hand value is less than 17, keep hitting and remove card from deck. Recalculate Sam's hand value
  while (hands.sam[hands.sam.length - 1] < 17) {
    const cardIndex = randomCardIndex(shuffledDeck)
    hands.sam.unshift(shuffledDeck[cardIndex])
    shuffledDeck.slice(cardIndex, 1)
    hands.sam[hands.sam.length - 1] = cardsInHandValue(hands.sam)
  }

  if (hands.sam[hands.sam.length - 1] > 21) {
    console.log('sam has bust', hands)
  } else {

    // Sam's final hand value that is 21 or under
    sam = hands.sam[hands.sam.length - 1]

    // Similar logic to Sam, only difference is keep hitting dealer until dealer hand is more than Sam's
    while (hands.dealer[hands.dealer.length - 1] < 17) {
      const cardIndex = randomCardIndex(shuffledDeck)
      hands.dealer.unshift(shuffledDeck[cardIndex])
      shuffledDeck.slice(cardIndex, 1)
      hands.dealer[hands.dealer.length - 1] = cardsInHandValue(hands.dealer)
    }

    // Dealer's final hand value
    dealer = hands.dealer[hands.dealer.length - 1]

    // Final checks
    if (dealer > 21) {
      console.log('dealer bust', hands)
    } else if (dealer > sam) {
      console.log('dealer wins', hands)
    } else if (sam > dealer) {
      console.log('sam wins', hands)
    }
    
  }

}

