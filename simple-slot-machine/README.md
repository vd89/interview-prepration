# Question 3: Simple Slot Machine

## 🎯 Problem Statement
Build a slot machine simulator with reels, symbols, payout calculations, and player balance tracking.

## 📋 Core Requirements

### Step 1: Define Symbols and Reels
- Create symbol set: Cherry, Lemon, Orange, Plum, Bell, Bar, Seven
- Set up 3 reels with different symbol frequencies
- Each symbol has different rarity/weight for probability

### Step 2: Spin Mechanism
- Write function to generate random spin results
- Return 3 symbols (one per reel)
- Use weighted randomization for realistic odds
- Ensure proper randomness distribution

### Step 3: Payout Calculation
Calculate winnings based on symbol combinations:
- **Three Sevens**: Jackpot (1000x bet)
- **Three Bars**: 100x bet
- **Three Bells**: 50x bet
- **Three Fruits** (any): 20x bet
- **Two Matching**: 2x bet
- **One Cherry**: 1x bet
- **No Match**: 0x (lose bet)

### Step 4: Player Balance Management
- Track player's current balance
- Validate sufficient funds before spin
- Deduct bet amount and add winnings
- Handle bankrupt/insufficient funds scenarios

### Step 5: Betting System
- Allow variable bet amounts (min/max limits)
- Calculate total payout = bet × multiplier
- Track total wagered and total won
- Display win/loss for each spin

### Step 6: Game Statistics
- Track number of spins
- Calculate win percentage
- Show biggest win and current streak
- Reset statistics option

## 🏆 Bonus Challenges

### Challenge 1: Advanced Features
- **Bonus Rounds**: Special combinations trigger bonus games
- **Free Spins**: Certain symbols award extra spins
- **Wild Symbols**: Substitute for any other symbol
- **Scatter Pays**: Win regardless of reel position

### Challenge 2: Progressive Jackpot
- Jackpot grows with each spin
- Small percentage of each bet adds to jackpot
- Reset jackpot after win
- Display current jackpot amount

### Challenge 3: Multiple Paylines
- Support 5, 9, 15, or 25 paylines
- Different betting per line
- Various winning combinations across lines
- Visual representation of winning lines

### Challenge 4: Slot Machine Variants
- **Video Poker**: Replace reels with poker hands
- **Fruit Machine**: UK-style with skill stops
- **Multi-Reel**: 5+ reels with hundreds of paylines
- **Themed Slots**: Different symbol sets and bonus features

## 🤔 Interview Discussion Points
- How do you ensure fair randomness?
- How would you adjust house edge/RTP (Return to Player)?
- What's the best way to handle floating point money calculations?
- How would you implement different volatility levels?