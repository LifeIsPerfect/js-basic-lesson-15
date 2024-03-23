import { sum, doubleArrayValues, findMaxMin } from './homework';

describe('Homework #5, task #1', () => {
  describe('Typical cases', () => {
    it('Case #1', () => {
      expect(sum([1, 2, 3])).toBe(6);
    });
  });

  describe('Edge cases', () => {
    it('Case #1. Empty array', () => {
      expect(sum([])).toBe(0);
    });

    it('Case #2. Single element array', () => {
      expect(sum([7])).toBe(7);
    });
  });
});

describe('Homework #5, task #2', () => {
  describe('Typical cases', () => {
    it('Case #1', () => {
      expect(doubleArrayValues([1, 2, 3])).toStrictEqual([2, 4, 6]);
    });
  });

  describe('Edge cases', () => {
    it('Case #1. Empty array', () => {
      expect(doubleArrayValues([])).toStrictEqual([]);
    });
  });
});

describe('Homework #5, task #3', () => {
  describe('Typical cases', () => {
    it('Case #1', () => {
      expect(findMaxMin([1, 2, 3, 4])).toStrictEqual({
        max: 4,
        min: 1,
      });
    });

    it('Case #2', () => {
      expect(findMaxMin([4, 3, 2, 1])).toStrictEqual({
        max: 4,
        min: 1,
      });
    });

    it('Case #3', () => {
      expect(findMaxMin([4, -3, 7, 1])).toStrictEqual({
        max: 7,
        min: -3,
      });
    });

    it('Case #4', () => {
      expect(findMaxMin([-4, -3, -7, -1])).toStrictEqual({
        max: -1,
        min: -7,
      });
    });
  });

  describe('Edge cases', () => {
    it('Case #1. Empty array', () => {
      expect(findMaxMin([])).toStrictEqual({
        max: undefined,
        min: undefined,
      });
    });

    it('Case #2. Single element array', () => {
      expect(findMaxMin([7])).toStrictEqual({
        max: 7,
        min: 7,
      });
    });

    it('Case #3. Same array elements', () => {
      expect(findMaxMin([5, 5, 5, 5])).toStrictEqual({
        max: 5,
        min: 5,
      });
    });
  });
});
