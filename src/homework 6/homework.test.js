import { diff, isWord, pow } from './homework';

describe('Homework #6, task #1', () => {
  describe('Typical cases', () => {
    it('Case #1', () => {
      expect(diff(3, 7)).toBe(4);
    });

    it('Case #2', () => {
      expect(diff(-3, -7)).toBe(4);
    });

    it('Case #3', () => {
      expect(diff(-0.5, 0.5)).toBe(1);
    });

    it('Case #4', () => {
      expect(diff(2.5, 1.5)).toBe(1);
    });
  });

  describe('Edge cases', () => {
    it('Case #1. Same numbers', () => {
      expect(diff(4, 4)).toBe(0);
    });
  });
});

describe('Homework #6, task #2', () => {
  describe('Typical cases', () => {
    it('Case #1', () => {
      expect(isWord('word')).toBe(true);
    });

    it('Case #2', () => {
      expect(isWord('a few words')).toBe(false);
    });

    it('Case #3', () => {
      expect(isWord('wordwithnumbers123')).toBe(false);
    });

    it('Case #4', () => {
      expect(isWord('!wordwithspecialcharacter%')).toBe(false);
    });

    it('Case #5', () => {
      expect(isWord('wordWithCapitalLetters')).toBe(true);
    });
  });

  describe('Edge cases', () => {
    it('Case #1. Empty string', () => {
      expect(isWord('')).toBe(false);
    });
  });
});

describe('Homework #6, task #3', () => {
  describe('Typical cases', () => {
    it('Case #1', () => {
      expect(pow(2, 3)).toBe(8);
    });
  });

  describe('Edge cases', () => {
    it('Case #1. Power is 0', () => {
      expect(pow(3, 0)).toBe(1);
    });

    it('Case #2. Base is 0', () => {
      expect(pow(0, 2)).toBe(0);
    });

    it('Case #2. Power and base are 0', () => {
      // https://ru.wikipedia.org/wiki/%D0%9D%D0%BE%D0%BB%D1%8C_%D0%B2_%D0%BD%D1%83%D0%BB%D0%B5%D0%B2%D0%BE%D0%B9_%D1%81%D1%82%D0%B5%D0%BF%D0%B5%D0%BD%D0%B8
      expect(pow(0, 0)).toBe(undefined);
    });

    it('Case #3. Power is 1', () => {
      expect(pow(4, 1)).toBe(4);
    });

    it('Case #4. Base is 1', () => {
      expect(pow(1, 999)).toBe(1);
    });

    it('Case #5. Base is negative', () => {
      expect(pow(-2, 2)).toBe(4);
    });

    it('Case #6. Power is negative', () => {
      expect(pow(2, -2)).toBe(undefined); // Предполагаю, что с дробями не работаем.
    });
  });
});
