import { describe, it } from 'node:test';
import assert from 'node:assert';
import { dealCards, generateDeck, generateDeckWithJokersAndShuffle, sum } from "./index.js";

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

   })
