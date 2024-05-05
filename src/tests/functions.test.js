import * as functions from '../functions.js';

describe('functions.js', () => {
  describe('divide', () => {
    test('should return the quotient of x and y', async () => {
      expect(functions.divide(10, 2)).toBe(5);
    });
  });

  describe('average', () => {
    test('should return the average of x and y', async () => {
      expect(functions.average(10, 2)).toBe(6);
    });
  });

  describe('approximatelyEqual', () => {
    test('should return true if x and y are mostly equivalent up to a tolerance of 0.001', async () => {
      expect(functions.approximatelyEqual(10.001, 10)).toBe(true);
    });
  });

  describe('fullName', () => {
    test('should return a full name in the format "FIRST LAST"', async () => {
      expect(functions.fullName('John', 'Doe')).toBe('John Doe');
    });
  });

  describe('generateSentence', () => {
    test('should generate the sentence "PERSON was drinking BEVERAGE at LOCATION" using the person, beverage and location provided', async () => {
      expect(functions.generateSentence('Kay', 'coffee', 'the local cafe')).toBe(
        'Kay was drinking coffee at the local cafe.',
      );
    });
  });

  describe('censorVowels', () => {
    test('should return the given string with all vowels replced with "*" characters', async () => {
      expect(functions.censorVowels('javascript')).toBe('j*v*scr*pt');
    });
  });

  describe('stickyCase', () => {
    test('should return the given string with alternating lower and upper case characters', async () => {
      expect(functions.stickyCase('javascript')).toBe('jAvAsCrIpT');
    });
  });

  describe('leetspeak', () => {
    test('should return the given string with all vowels replaced with numbers', async () => {
      expect(functions.leetspeak('javascript')).toBe('j4v45cr1p7');
      expect(functions.leetspeak('aeiost')).toBe('431057');
    });
  });
});
