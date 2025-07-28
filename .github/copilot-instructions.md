# Copilot Instructions for Interview Preparation Codebase

## Project Overview
This repository contains a collection of interview coding challenge implementations, each in its own directory. Each challenge is a standalone JavaScript module that implements game logic or simulation tasks commonly used in technical interviews.

## Architecture
- Each project uses ES modules (`type: "module"` in package.json)
- Projects are completely independent, with no shared code between them
- Each project follows the structure:
  - `index.js` - Main implementation file
  - `index.test.js` - Test file using Node.js built-in test runner
  - `package.json` - Project metadata and scripts
  - `README.md` - Project requirements and specifications

## Development Workflow
- **Running tests**: Use `node --test` in the project directory
- **Starting project**: Use `node index.js` in the project directory
- **Test framework**: Built-in Node.js test runner with `node:test` and `node:assert`

## Project-specific Patterns
- All projects start with a basic `sum` function as a template
- Function exports are done using named exports (e.g., `export function sum()`)
- Tests follow a pattern of multiple `describe` blocks with specific test cases
- Functions should be pure and handle edge cases gracefully

## Challenge Types
1. **simple-poker-hand**: Evaluate 5-card poker hands with different rankings
2. **tic-tac-toe**: Game engine for tracking state and determining winners
3. **simple-slot-machine**: Slot machine simulator with reels and payouts
4. **rock-paper-scissors**: Tournament system with multiple players and rounds
5. **dice-game-simulator**: Yahtzee-style dice game with scoring combinations

## Coding Guidelines
- Prefer pure functions with clear inputs and outputs
- Use ES6+ features (arrow functions, destructuring, etc.)
- Include thorough test coverage for all functions
- Follow the requirements in each project's README.md closely
- Functions should validate inputs and handle edge cases

## Key Files
- `/simple-poker-hand/index.js` - Example implementation file to follow
- `/simple-poker-hand/index.test.js` - Example test structure to follow
- Project README.md files contain detailed requirements and extensions

## Testing Approach
Tests should cover:
- Happy path cases
- Edge cases (empty arrays, invalid inputs)
- Boundary conditions
- Multiple input combinations

When implementing new features, add corresponding tests to verify the behavior.
