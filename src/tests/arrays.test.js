import * as arrays from '../arrays.js';

describe('arrays.js', () => {
  describe('greaterThanTen', () => {
    test('should return an array of numbers greater than 10', async () => {
      expect(arrays.greaterThanTen([1, 2, 3, 11, 12, 13])).toEqual([11, 12, 13]);
      expect(arrays.greaterThanTen([1, 2, 3, 10])).toEqual([]);
      expect(arrays.greaterThanTen([])).toEqual([]);
    });
  });

  describe('bWords', () => {
    test('should return an array of words that start with "b" or "B"', async () => {
      expect(arrays.bWords(['b', 'B'])).toEqual(['b', 'B']);
      expect(arrays.bWords(['banana', 'orange', 'apple', 'Bonobo', 'kiwi', 'pear'])).toEqual([
        'banana',
        'Bonobo',
      ]);
      expect(arrays.bWords(['apple', 'cherry', 'orange'])).toEqual([]);
    });
  });

  describe('extend', () => {
    test('should return an array with the contents of the two input arrays', async () => {
      expect(arrays.extend([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
      expect(arrays.extend(['apple', 'berry'], ['cherry'])).toEqual(['apple', 'berry', 'cherry']);
      expect(arrays.extend([1], [])).toEqual([1]);
    });
  });

  describe('itemsWithLength', () => {
    test('should return an array of items with the given length', async () => {
      expect(arrays.itemsWithLength(['a', 'bbb', 'cccc', 'dddddd', 'eee'], 3)).toEqual([
        'bbb',
        'eee',
      ]);
      expect(arrays.itemsWithLength(['a', 'b', 'c', 'd', 'e'], 1)).toEqual([
        'a',
        'b',
        'c',
        'd',
        'e',
      ]);
      expect(arrays.itemsWithLength(['a', 'b', 'c', 'd', 'e'], 0)).toEqual([]);
    });
  });

  describe('everyOtherItem', () => {
    test('should return an array with every other item from the input array', async () => {
      expect(arrays.everyOtherItem(['a', 'b', 'c', 'd', 'e'])).toEqual(['a', 'c', 'e']);
      expect(arrays.everyOtherItem([1, 2, 3, 4, 5, 6])).toEqual([1, 3, 5]);
      expect(arrays.everyOtherItem(['hi'])).toEqual(['hi']);
    });
  });

  describe('findWordsStartingWith', () => {
    test('should return the indexes of words that start with the given letter', async () => {
      expect(arrays.findWordsStartingWith(['aardvark', 'apple', 'banana', 'boat'], 'b')).toEqual([
        2, 3,
      ]);
      expect(arrays.findWordsStartingWith(['aardvark', 'apple'], 'c')).toEqual([]);
    });
  });

  describe('smallestNItems', () => {
    test('should return an array with the smallest n items from the input array in descending order', async () => {
      expect(arrays.smallestNItems([1, 30, 4, 21, 100000], 3)).toEqual([21, 4, 1]);
      expect(arrays.smallestNItems([100, 100, 30, 100, 50], 1)).toEqual([30]);
      expect(arrays.smallestNItems([1, 2, 3, 4], 0)).toEqual([]);
    });
  });

  describe('findIndex', () => {
    test('should return the index of the first item that matches the given value', async () => {
      expect(arrays.findIndex(['a', 'b', 'c', 'd', 'e'], 'c')).toBe(2);
      expect(arrays.findIndex(['c', 'c', 'c'], 'c')).toBe(0);
      expect(arrays.findIndex([1, 2, 3], 55)).toBeUndefined();
    });
  });

  describe('range', () => {
    test('should return an array of numbers between the given start and end values', async () => {
      expect(arrays.range(1, 5)).toEqual([1, 2, 3, 4, 5]);
      expect(arrays.range(-3, 0)).toEqual([-3, -2, -1, 0]);
    });
  });
});
