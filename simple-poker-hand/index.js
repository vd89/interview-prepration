export function sum(params) {
  return params.reduce((acc, curr) => acc + curr, 0);
}



// Generate the deck of 52 cards

export function generateDeck() {
  const desk = [];
  const suits = ['H', 'D', 'C', 'S'];
  const ranks = [
    '2', '3', '4', '5', '6', '7',
    '8', '9', '10', 'Jack', 'Queen', 'King',
    'Ace'
  ];
  for (const suit of suits) {
    for (const rank of ranks) {
      desk.push( suit + rank );
    }
  }
  return desk;
}

export function generateDeckWithJokersAndShuffle() {
  const deck = generateDeck();
  deck.push('Joker1', 'Joker2');
  const shuffledDeck = deck.sort(() => Math.random() - 0.5);
  return shuffledDeck;
}


// **Deal Cards** - Deal 5 cards from the deck

export function dealCards(deck) {
  if (deck.length < 5) {
    throw new Error('Not enough cards in the deck to deal 5 cards');
  }
  return deck.splice(0, 5);
}

