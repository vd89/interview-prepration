# Question 4: Dice Game Simulator (Yahtzee-style)

## 🎯 Problem Statement
Create a dice game where players roll 5 dice and score based on combinations, with re-rolling mechanics.

## 📋 Core Requirements

### Step 1: Dice Rolling System
- Simulate rolling 5 six-sided dice (1-6)
- Generate random results for each die
- Display current dice values clearly
- Track which dice are "held" vs available for re-roll

### Step 2: Re-rolling Mechanism
- Allow player to select which dice to keep
- Re-roll remaining dice (up to 2 additional rolls per turn)
- Validate dice selection (indices, ranges)
- Track remaining re-rolls available

### Step 3: Scoring Categories
Implement scoring for these combinations:
- **Upper Section**: Ones, Twos, Threes, Fours, Fives, Sixes (sum of matching dice)
- **Three of a Kind**: Sum of all dice if 3+ match
- **Four of a Kind**: Sum of all dice if 4+ match
- **Full House**: 25 points (3 of one + 2 of another)
- **Small Straight**: 30 points (4 consecutive numbers)
- **Large Straight**: 40 points (5 consecutive numbers)
- **Yahtzee**: 50 points (all 5 dice same)
- **Chance**: Sum of all dice (fallback option)

### Step 4: Scorecard Management
- Track which categories have been used
- Validate category selection (unused categories only)
- Calculate and apply bonus (35 points if upper section ≥ 63)
- Show current total score

### Step 5: Game Flow Control
- Manage 13 rounds (one per scoring category)
- Handle turn sequence: roll → re-roll → re-roll → score
- Detect game completion
- Calculate final score with bonuses

### Step 6: Combination Detection
- Write functions to identify each scoring pattern
- Handle edge cases (multiple possible scores)
- Validate dice combinations efficiently

## 🏆 Bonus Challenges

### Challenge 1: Multiple Players
- Support 2-6 players with turn rotation
- Individual scorecards for each player
- Display current standings/rankings
- Handle player elimination or handicapping

### Challenge 2: Advanced Scoring
- **Multiple Yahtzees**: 100 bonus points each after first
- **Joker Rules**: Use Yahtzee as wild for other categories
- **Scratch Scoring**: Option to score 0 in any category
- **Upper Section Bonus**: Graduated bonuses for higher totals

### Challenge 3: Strategy Suggestions
- Recommend optimal dice to keep/re-roll
- Calculate probability of achieving desired combinations
- Suggest best category to use for current dice
- Show expected value for different choices

### Challenge 4: Game Variants
- **Yacht**: Original game with different scoring
- **Generala**: Latin American variant with extra categories
- **Balut**: Filipino variant with 8 dice
- **Custom Rules**: User-defined categories and scoring

## 🤔 Interview Discussion Points
- How do you efficiently detect all possible combinations?
- What's the optimal strategy for dice selection?
- How would you implement probability calculations?
- How to handle tie-breaking in multiplayer games?