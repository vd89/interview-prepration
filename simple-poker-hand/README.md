# Question 1: Simple Poker Hand Evaluator

## 🎯 Problem Statement
Build a poker hand evaluator that can determine the rank of a 5-card poker hand and compare hands to determine winners.

## 📋 Core Requirements

### Step 1: Create the Deck
- Write a function to generate a standard 52-card deck
- Use string encoding: "AS" = Ace of Spades, "KH" = King of Hearts, etc.
- Suits: S, H, D, C | Values: A, 2-9, T(10), J, Q, K

### Step 2: Deal Cards
- Write a function to deal 5 cards from the deck
- Should remove dealt cards from the deck
- Handle edge cases (not enough cards)

### Step 3: Evaluate Hand Rank
Write a function that identifies these poker hands (highest to lowest):
1. **Straight Flush** - 5 consecutive cards of same suit
2. **Four of a Kind** - 4 cards of same rank
3. **Full House** - 3 of a kind + pair
4. **Flush** - 5 cards of same suit
5. **Straight** - 5 consecutive cards (A-2-3-4-5 is valid)
6. **Three of a Kind** - 3 cards of same rank
7. **Two Pair** - 2 pairs of different ranks
8. **Pair** - 2 cards of same rank
9. **High Card** - No other combination

### Step 4: Compare Hands
- Write a function to compare two 5-card hands
- Return winner ("hand1", "hand2", or "tie")
- Handle tie-breaking within same hand ranks

## 🏆 Bonus Challenges

### Challenge 1: Advanced Tie Breaking
- Implement detailed tie-breaking rules for each hand type
- Handle kickers (remaining cards) properly
- Support comparing multiple hands simultaneously

### Challenge 2: Wild Cards
- Add support for jokers as wild cards
- Modify hand evaluation to find best possible hand with wilds

### Challenge 3: Different Poker Variants
- Texas Hold'em (7 cards, pick best 5)
- Omaha (4 hole cards + 5 community cards)
- Seven-card stud evaluation

### Challenge 4: Statistics & Probability
- Calculate probability of getting each hand type
- Generate hand strength percentages
- Implement "outs" calculation (cards that improve hand)

## 🤔 Interview Discussion Points
- How would you optimize for speed vs memory?
- How to handle different deck sizes or card values?
- What data structures work best for card representation?
- How would you extend this for tournament play?