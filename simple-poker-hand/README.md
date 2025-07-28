## 🎯 Problem Statement

Build a poker hand evaluator that can determine the rank of a 5-card poker hand and compare hands to determine winners.

## 📋 Requirements

### Core Functions to Implement:
1. **Create Deck** - Generate a standard 52-card deck
2. **Deal Cards** - Deal 5 cards from the deck
3. **Evaluate Hand** - Determine the poker hand rank
4. **Compare Hands** - Determine winner between two hands

### Hand Rankings (Highest to Lowest):
1. **Straight Flush** - 5 consecutive cards of same suit
2. **Four of a Kind** - 4 cards of same rank
3. **Full House** - 3 of a kind + pair
4. **Flush** - 5 cards of same suit
5. **Straight** - 5 consecutive cards
6. **Three of a Kind** - 3 cards of same rank
7. **Two Pair** - 2 pairs of different ranks
8. **Pair** - 2 cards of same rank
9. **High Card** - No other combination


## 🎯 Follow-up Questions & Extensions

### Tie Breaking:
- How do you handle ties when comparing hands of the same rank?
- What about community cards (Texas Hold'em style)?

### Advanced Features:
- Support for wild cards (jokers)
- Different poker variants (Omaha, Seven-card stud)
- Tournament scoring systems
- Probability calculations for drawing certain hands

### Performance Optimizations:
- Memoization for hand evaluations
- Optimized comparison algorithms
- Batch processing multiple hands

## 🔍 Key Concepts Tested

- **Data Structures**: Arrays, objects, sets for card representation
- **Algorithms**: Sorting, counting, pattern matching
- **Logic**: Complex conditional statements and comparisons
- **Error Handling**: Input validation and edge cases
- **Object-Oriented Design**: Class structure and method organization