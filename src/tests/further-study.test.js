import * as furtherStudy from '../further-study.js';

describe('further-study.js', () => {
  describe('commonStrings', () => {
    test('should return the strings common to both input arrays', async () => {
      expect(furtherStudy.commonStrings(['a', 'b', 'c'], ['a', 'd', 'e'])).toEqual(['a']);
      expect(furtherStudy.commonStrings([], ['a', 'd', 'e'])).toEqual([]);
    });

    test('should not return duplicates', async () => {
      const result = furtherStudy.commonStrings(['zoo', 'space', 'zoo'], ['zoo', 'space', 'boat']);
      expect(result).toContain('zoo');
      expect(result).toContain('space');
      expect(result).toHaveLength(2);
    });
  });

  describe('divisibleByEither', () => {
    test('should return a list of numbers from 1 to 100 that are divisible by at least one of a, b or c', async () => {
      expect(furtherStudy.divisibleByEither(50, 30, 29)).toEqual([29, 30, 50, 58, 60, 87, 90, 100]);
    });
  });

  describe('compressString', () => {
    test('should return a compressed string', async () => {
      expect(furtherStudy.compressString('aaa')).toBe('3a');
      expect(furtherStudy.compressString('ssssbb')).toBe('4s2b');
      expect(furtherStudy.compressString('ssssbbba')).toBe('4s3ba');
    });
  });
});
