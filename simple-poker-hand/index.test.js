import { describe, it } from 'node:test';
import assert from 'node:assert';
import { sum } from "./index.js";

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