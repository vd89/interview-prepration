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
      desk.push(suit + rank);
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
  const randomIndices = new Set();

  // Generate 5 unique random indices
  while (randomIndices.size < 5) {
    const index = Math.floor(Math.random() * deck.length);
    randomIndices.add(index);
  }

  const hand = [];
  // Convert Set to Array and sort in descending order
  const indices = [...randomIndices].sort((a, b) => b - a);

  // Use for...of to iterate through the random indices
  for (const index of indices) {
    // Remove card at random index and add to hand
    const [removedCard] = deck.splice(index, 1);
    hand.unshift(removedCard);
  }

  return hand;
}


// ### Step 3: Evaluate Hand Rank
// **Straight Flush** - 5 consecutive cards of same suit
/*
  1. **Straight Flush** - 5 consecutive cards of same suit
  2. **Four of a Kind** - 4 cards of same rank
  3. **Full House** - 3 of a kind + pair
  4. **Flush** - 5 cards of same suit
  5. **Straight** - 5 consecutive cards (A-2-3-4-5 is valid)
  6. **Three of a Kind** - 3 cards of same rank
  7. **Two Pair** - 2 pairs of different ranks
  8. **Pair** - 2 cards of same rank
  9. **High Card** - No other combination
 */


export function evaluateHandRank(hand) {
  const suits = hand.map(card => card[0]);
  const ranks = hand.map(card => card.slice(1));

  // Helper to convert rank to value
  const rankToValue = rank => {
    if (rank === 'Ace') return 14;
    if (rank === 'King') return 13;
    if (rank === 'Queen') return 12;
    if (rank === 'Jack') return 11;
    return parseInt(rank, 10);
  };

  // Count occurrences of each rank
  const rankCount = {};
  for (const rank of ranks) {
    rankCount[rank] = (rankCount[rank] || 0) + 1;
  }
  const counts = Object.values(rankCount).sort((a, b) => b - a);

  // Check for flush
  const isFlush = new Set(suits).size === 1;

  // Check for straight
  const rankValues = ranks.map(rankToValue).sort((a, b) => a - b);
  let isStraight = true;
  for (let i = 0; i < rankValues.length - 1; i++) {
    if (rankValues[i + 1] - rankValues[i] !== 1) {
      isStraight = false;
      break;
    }
  }
  // Special case: Ace can be low in A-2-3-4-5
  const lowAceStraight = [2, 3, 4, 5, 14];
  if (!isStraight && rankValues.toString() === lowAceStraight.toString()) {
    isStraight = true;
  }

  // Check for hand ranks in order
  const handRankings = {
    'Straight Flush': () => isFlush && isStraight,
    'Four of a Kind': () => counts[0] === 4,
    'Full House': () => counts[0] === 3 && counts[1] === 2,
    'Flush': () => isFlush,
    'Straight': () => isStraight,
    'Three of a Kind': () => counts[0] === 3,
    'Two Pair': () => counts[0] === 2 && counts[1] === 2,
    'Pair': () => counts[0] === 2,
    'High Card': () => true
  };

  for (const [rank, checkFn] of Object.entries(handRankings)) {
    if (checkFn()) return rank;
  }
}

/*
### Step 4: Compare Hands
- Write a function to compare two 5-card hands
- Return winner ("hand1", "hand2", or "tie")
- Handle tie-breaking within same hand ranks
*/

export function compareHands(hand1, hand2) {
  const rank1 = evaluateHandRank(hand1);
  const rank2 = evaluateHandRank(hand2);

  if (rank1 === rank2) {
    return 'Its a tie';
  }

  const handRanks = [
    'High Card', 'Pair', 'Two Pair', 'Three of a Kind',
    'Straight', 'Flush', 'Full House', 'Four of a Kind',
    'Straight Flush'
  ];

  return handRanks.indexOf(rank1) >
    handRanks.indexOf(rank2)
    ? `Player 1 wines with ${rank1}`
    : `Player 2 wines with ${rank2}`;
}
