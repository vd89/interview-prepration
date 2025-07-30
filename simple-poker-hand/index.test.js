import { describe, it } from 'node:test';
import assert from 'node:assert';
import { compareHands, dealCards, evaluateHandRank, generateDeck, generateDeckWithJokersAndShuffle, sum } from "./index.js";

describe('test the sum function with positive numbers', () => {
  it('should return the sum of all numbers in the array', () => {
    assert.strictEqual(sum([1, 2, 3, 4, 5]), 15);
  });
});

describe('test the sum function with negative numbers', () => {
  it('should return the sum of all numbers in the array', () => {
    assert.strictEqual(sum([-1, -2, -3, -4, -5]), -15);
  });
});

describe('test the sum function with mixed numbers', () => {
  it('should return the sum of all numbers in the array', () => {
    assert.strictEqual(sum([-1, 2, -3, 4, -5]), -3);
  });
});



describe('test for the Create deck', () => {
  const deck = generateDeck();
  it('should return a deck of 52 cards', () => {
    assert.strictEqual(deck.length, 52);
    assert.deepStrictEqual(deck[0], 'H2'); // Check first card
    assert.deepStrictEqual(deck[51], 'SAce'); // Check last card
  });


  it('should not have any duplicate cards', () => {
    const uniqueCards = new Set(deck);
    assert.strictEqual(uniqueCards.size, 52);
  });

  it('should have specific cards at expected positions', () => {
    assert.strictEqual(deck[12], 'HAce');  // Last card of Hearts
    assert.strictEqual(deck[13], 'D2');    // First card of Diamonds
    assert.strictEqual(deck[25], 'DAce');  // Last card of Diamonds
    assert.strictEqual(deck[26], 'C2');    // First card of Clubs
  });

});


describe('test for the Create deck with Jokers and Shuffle', () => {
  const shuffledDeck = generateDeckWithJokersAndShuffle();
  it('should return a deck of 54 cards', () => {
    assert.strictEqual(shuffledDeck.length, 54);
  });

  it('should contain Jokers', () => {
    assert(shuffledDeck.includes('Joker1'));
    assert(shuffledDeck.includes('Joker2'));
  });

  it('should not have any duplicate cards', () => {
    const uniqueCards = new Set(shuffledDeck);
    assert.strictEqual(uniqueCards.size, 54);
  });
}
);


describe('test for the deal for the 5 cards ', () => {
  it('should give 5 cards from the deck', () => {
    const deck = generateDeck();
    const dealtCards = dealCards(deck);
    assert.strictEqual(dealtCards.length, 5);
    assert.strictEqual(deck.length, 47); // 52 - 5 = 47
  });

  it('should throw an error if there are not enough cards in the deck', () => {
    const smallDeck = generateDeck().slice(0, 4);
    assert.throws(() => dealCards(smallDeck), {
      message: 'Not enough cards in the deck to deal 5 cards'
    });
  });
  describe('evaluateHandRank tests', () => {
    it('should identify Straight Flush', () => {
      const hand = ['H2', 'H3', 'H4', 'H5', 'H6'];
      assert.strictEqual(evaluateHandRank(hand), 'Straight Flush');

    });

    it('should identify Four of a Kind', () => {
      const hand = ['H2', 'D2', 'C2', 'S2', 'H6'];
      assert.strictEqual(evaluateHandRank(hand), 'Four of a Kind');
    });

    it('should identify Full House', () => {
      const hand = ['H2', 'D2', 'C2', 'H3', 'D3'];
      assert.strictEqual(evaluateHandRank(hand), 'Full House');
    });

    it('should identify Flush', () => {
      const hand = ['H2', 'H5', 'H7', 'H9', 'HJack'];
      assert.strictEqual(evaluateHandRank(hand), 'Flush');
    });

    it('should identify Straight', () => {
      const hand = ['H2', 'D3', 'C4', 'H5', 'D6'];
      assert.strictEqual(evaluateHandRank(hand), 'Straight');
    });

    it('should identify Ace-low Straight', () => {
      const hand = ['HAce', 'D2', 'C3', 'H4', 'D5'];
      assert.strictEqual(evaluateHandRank(hand), 'Straight');
    });

    it('should identify Three of a Kind', () => {
      const hand = ['H2', 'D2', 'C2', 'H5', 'D6'];
      assert.strictEqual(evaluateHandRank(hand), 'Three of a Kind');
    });

    it('should identify Two Pair', () => {
      const hand = ['H2', 'D2', 'C3', 'H3', 'D6'];
      assert.strictEqual(evaluateHandRank(hand), 'Two Pair');
    });

    it('should identify Pair', () => {
      const hand = ['H2', 'D2', 'C4', 'H5', 'D6'];
      assert.strictEqual(evaluateHandRank(hand), 'Pair');
    });

    it('should identify High Card', () => {
      const hand = ['H2', 'D4', 'C6', 'H8', 'D10'];
      assert.strictEqual(evaluateHandRank(hand), 'High Card');
    });
  });

  describe('compareHands tests', () => {
    it('should identify Player 1 winning with higher rank', () => {
      const hand1 = ['H2', 'H3', 'H4', 'H5', 'H6']; // Straight Flush
      const hand2 = ['H2', 'D2', 'C2', 'S2', 'H6']; // Four of a Kind
      assert.strictEqual(compareHands(hand1, hand2), 'Player 1 wines with Straight Flush');
    });

    it('should identify Player 2 winning with higher rank', () => {
      const hand1 = ['H2', 'D4', 'C6', 'H8', 'D10']; // High Card
      const hand2 = ['H2', 'D2', 'C4', 'H5', 'D6'];  // Pair
      assert.strictEqual(compareHands(hand1, hand2), 'Player 2 wines with Pair');
    });

    it('should identify tie with same rank', () => {
      const hand1 = ['H2', 'D2', 'C4', 'H5', 'D6']; // Pair
      const hand2 = ['S2', 'C2', 'D7', 'H8', 'D9']; // Pair
      assert.strictEqual(compareHands(hand1, hand2), 'Its a tie');
    });
  });
})

