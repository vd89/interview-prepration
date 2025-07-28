import { sum } from "./index.js";

describe('test the sum function with positive numbers', () => {
  it('should return the sum of all numbers in the array', () => {
    expect(sum([1, 2, 3, 4, 5])).toBe(15);
  });
});

describe('test the sum function with negative numbers', () => {
  it('should return the sum of all numbers in the array', () => {
    expect(sum([-1, -2, -3, -4, -5])).toBe(-15);
  });
});

describe('test the sum function with mixed numbers', () => {
  it('should return the sum of all numbers in the array', () => {
    expect(sum([-1, 2, -3, 4, -5])).toBe(-3);
  });
});