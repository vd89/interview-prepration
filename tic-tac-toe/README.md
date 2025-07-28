# Question 2: Tic-Tac-Toe Game Engine

## 🎯 Problem Statement
Create a complete Tic-Tac-Toe game engine that can track game state, validate moves, and determine winners.

## 📋 Core Requirements

### Step 1: Initialize Game Board
- Create a 3x3 grid representation
- Track current player (X or O)
- Set up game state variables (game over, winner, move count)

### Step 2: Move Validation
- Write a function to validate moves
- Check if position is within bounds (0-2 for row/col)
- Verify position is empty
- Ensure game is not already over

### Step 3: Make Move
- Place X or O on the board at specified position
- Switch current player after valid move
- Record move in game history
- Return success/failure with appropriate message

### Step 4: Check Win Conditions
Write functions to detect:
- **Rows**: 3 in a row horizontally
- **Columns**: 3 in a row vertically
- **Diagonals**: Both diagonal directions
- Return winning player or null

### Step 5: Check Draw Condition
- Detect when board is full with no winner
- Game ends in tie/draw state

### Step 6: Game Management
- Reset game to initial state
- Display current board state
- Get list of available moves
- Track move history

## 🏆 Bonus Challenges

### Challenge 1: Variable Board Size
- Support NxN boards (4x4, 5x5, etc.)
- Adjust win condition (M-in-a-row)
- Handle edge cases for different dimensions

### Challenge 2: AI Player
- Implement basic strategy (random moves)
- Add minimax algorithm for optimal play
- Create difficulty levels (easy, medium, hard)
- Add strategy preferences (center, corners, blocking)

### Challenge 3: Advanced Features
- **Undo/Redo**: Allow taking back moves
- **Game Statistics**: Win/loss tracking, move analysis
- **Tournament Mode**: Best of N games
- **Time Limits**: Add move timers

### Challenge 4: Multi-Game Variants
- **3D Tic-Tac-Toe**: 3x3x3 cube
- **Quantum Tic-Tac-Toe**: Superposition moves
- **Ultimate Tic-Tac-Toe**: 9 small boards in large board
- **Team Play**: Multiple players per side

## 🤔 Interview Discussion Points
- How would you optimize win checking?
- What's the best data structure for the board?
- How to handle network/multiplayer scenarios?
- How would you implement save/load functionality?