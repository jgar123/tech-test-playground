const cards = require('./blackjack')

const deckClass = new cards.Deck()

test('Deck class should contain deck array with length of 52', () => {
  expect(deckClass.deck.length).toBe(52)
})

test('Deck shuffle method should return an array with a length of 52', () => {
  expect(deckClass.shuffle().length).toBe(52)
})
