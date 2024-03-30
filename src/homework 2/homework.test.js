import { max, getMonthName, willCircleFitIn } from './homework';

describe('Homework #2, Task #1', () => {
  it('Case #1', () => {
    const logSpy = jest.spyOn(console, 'log');
    max(3, 4);
    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(logSpy).toHaveBeenNthCalledWith(1, 'Max of 3 and 4 is 4;');
  });

  it('Case #1', () => {
    const logSpy = jest.spyOn(console, 'log');
    max(4, 4);
    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(logSpy).toHaveBeenNthCalledWith(1, 'Max of 4 and 4 is 4;');
  });

  it('Case #1', () => {
    const logSpy = jest.spyOn(console, 'log');
    max(-3, -7);
    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(logSpy).toHaveBeenNthCalledWith(1, 'Max of -3 and -7 is -3;');
  });
});

describe('Homework #2, Task #2', () => {
  it('Case #1', () => {
    jest.spyOn(window, 'prompt').mockReturnValueOnce('1');
    const logSpy = jest.spyOn(console, 'log');
    getMonthName();
    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(logSpy).toHaveBeenCalledWith('January');
  });

  it('Case #1', () => {
    jest.spyOn(window, 'prompt').mockReturnValueOnce(3);
    const logSpy = jest.spyOn(console, 'log');
    getMonthName();
    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(logSpy).toHaveBeenCalledWith('March');
  });
});

describe('Homework #2, Task #3', () => {
  it('Case #1', () => {
    // Круг: Pi*R^2
    // Квадрат: x^2
    expect(willCircleFitIn(13.85, 16)).toBe(false);
  });

  it('Case #1', () => {
    expect(willCircleFitIn(12.31, 16)).toBe(true);
  });
});
