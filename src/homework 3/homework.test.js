import {
  sumFrom50To100,
  multiplicationTable,
  arithmeticMean,
} from './homework';

describe('Homework #3, Task #1', () => {
  it('Case #1', () => {
    const logSpy = jest.spyOn(console, 'log');
    sumFrom50To100();
    expect(logSpy).toHaveBeenCalledWith(3825);
  });
});

describe('Homework #3, Task #2', () => {
  it('Case #1', () => {
    const logSpy = jest.spyOn(console, 'log');
    multiplicationTable();
    expect(logSpy).toHaveBeenCalledTimes(9);
    expect(logSpy).toHaveBeenNthCalledWith(1, '7 x 1 = 7');
    expect(logSpy).toHaveBeenNthCalledWith(3, '7 x 3 = 21');
    expect(logSpy).toHaveBeenNthCalledWith(9, '7 x 9 = 63');
  });
});

describe('Homework #3, Task #3', () => {
  it('Case #1', () => {
    jest.spyOn(window, 'prompt').mockReturnValueOnce(3);

    const logSpy = jest.spyOn(console, 'log');

    arithmeticMean();

    expect(logSpy).toHaveBeenCalledWith(2);
  });

  it('Case #2', () => {
    jest.spyOn(window, 'prompt').mockReturnValueOnce(21);

    const logSpy = jest.spyOn(console, 'log');

    arithmeticMean();

    expect(logSpy).toHaveBeenCalledWith(11);
  });

  it('Case #3', () => {
    jest.spyOn(window, 'prompt').mockReturnValueOnce(100);

    const logSpy = jest.spyOn(console, 'log');

    arithmeticMean();

    expect(logSpy).toHaveBeenCalledWith(50);
  });
});
