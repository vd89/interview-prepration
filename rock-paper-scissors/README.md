# Question 5: Rock Paper Scissors Tournament

## 🎯 Problem Statement
Build a Rock Paper Scissors tournament system with multiple players, elimination rounds, and AI strategies.

## 📋 Core Requirements

### Step 1: Basic Game Logic
- Implement core RPS rules: Rock beats Scissors, Scissors beats Paper, Paper beats Rock
- Handle ties (same choice from both players)
- Validate player moves (only Rock, Paper, or Scissors allowed)
- Return game result with winner/loser/tie

### Step 2: Player Management
- Create player objects with names and IDs
- Support human players and AI players with different strategies
- Track player statistics (wins, losses, ties)
- Handle player registration and validation

### Step 3: Tournament Bracket System
- Generate single-elimination bracket from player list
- Handle odd numbers of players (automatic byes)
- Track bracket progression through rounds
- Pair players for each match appropriately

### Step 4: Match Management
- Conduct individual matches between two players
- Support best-of-N format (best of 1, 3, 5, etc.)
- Track match results and advance winners
- Handle match timeouts or forfeits

### Step 5: Tournament Progression
- Advance winners to next round automatically
- Generate new bracket pairings after each round
- Track tournament state (current round, remaining players)
- Determine tournament winner and final rankings

### Step 6: Results and Statistics
- Display tournament bracket visually
- Show match results and player statistics
- Track tournament history and past winners
- Generate tournament summary report

## 🏆 Bonus Challenges

### Challenge 1: AI Strategy Systems
Implement different AI personalities:
- **Random Player**: Completely random choices
- **Pattern Player**: Looks for opponent patterns
- **Counter Player**: Tries to counter opponent's last move
- **Frequency Player**: Uses statistical analysis of opponent history
- **Adaptive Player**: Changes strategy based on opponent type

### Challenge 2: Advanced Tournament Formats
- **Round Robin**: Everyone plays everyone else
- **Double Elimination**: Losers bracket for second chances
- **Swiss System**: Pair players with similar records
- **Group Stage + Knockout**: Combined format like World Cup

### Challenge 3: Tournament Features
- **Seeding System**: Rank players and avoid early strong matchups
- **Tournament History**: Track all past tournaments and results
- **Rating System**: ELO-style ratings that change based on results
- **Spectator Mode**: Watch AI tournaments run automatically

### Challenge 4: Game Variations
- **Rock Paper Scissors Lizard Spock**: 5-choice variant
- **Timed Matches**: Players must choose within time limit
- **Best of Series**: Championship series (best of 7, etc.)
- **Team Tournaments**: Teams of players with substitutions

## 🤔 Interview Discussion Points
- How do you handle bracket generation with irregular player counts?
- What's the most efficient way to store tournament history?
- How would you implement fair seeding algorithms?
- How to detect and prevent cheating in online tournaments?