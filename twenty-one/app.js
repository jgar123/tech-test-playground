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

// deck == shuffled deck, nCards == number of cards to deal out to each player, players as strings
function dealOut(deck, nCards, ...players) {

  const initialHands = {}

  for (let i = 0; i < players.length; i++) {

    initialHands[players[i]] = []

    for (let j = 0; j < nCards; j++) {
      const cardIndex = randomCardIndex(deck)
      initialHands[players[i]].push(deck[cardIndex])
      deck.splice(cardIndex, 1)
    }
  }

  return initialHands

}


const shuffledDeck = new Deck().shuffle()

const startingHand = dealOut(shuffledDeck, 2, 'sam', 'dealer')

