const {
  getDayOfWeek,
  getMinutesSinceDayStart,
  findYoungest,
} = require('./homework');

describe('Homework #8, Task #1', () => {
  it('Case #1', () => {
    jest.spyOn(window, 'prompt').mockReturnValueOnce('11.03.2024');

    const logSpy = jest.spyOn(console, 'log');

    getDayOfWeek();

    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(logSpy).toHaveBeenNthCalledWith(1, 1 /* Monday */);
  });

  it('Case #2', () => {
    jest.spyOn(window, 'prompt').mockReturnValueOnce('10.03.2024');

    const logSpy = jest.spyOn(console, 'log');

    getDayOfWeek();

    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(logSpy).toHaveBeenNthCalledWith(1, 0 /* Sanday */);
  });

  it('Case #3', () => {
    jest.spyOn(window, 'prompt').mockReturnValueOnce('30.12.2023');

    const logSpy = jest.spyOn(console, 'log');

    getDayOfWeek();

    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(logSpy).toHaveBeenNthCalledWith(1, 6 /* Saturday */);
  });
});

describe('Homework #8, Task #2', () => {
  it('Case #1', () => {
    const currentSystemDate = new Date();

    jest
      .useFakeTimers()
      .setSystemTime(
        new Date(
          currentSystemDate.getFullYear(),
          currentSystemDate.getMonth(),
          currentSystemDate.getDay(),
          0 /* hours */,
          30 /* minutes */,
        ),
      );

    const logSpy = jest.spyOn(console, 'log');

    getMinutesSinceDayStart();

    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(logSpy).toHaveBeenNthCalledWith(1, 30);
  });

  it('Case #2', () => {
    const currentSystemDate = new Date();

    jest
      .useFakeTimers()
      .setSystemTime(
        new Date(
          currentSystemDate.getFullYear(),
          currentSystemDate.getMonth(),
          currentSystemDate.getDay(),
          12 /* hours */,
          30 /* minutes */,
        ),
      );

    const logSpy = jest.spyOn(console, 'log');

    getMinutesSinceDayStart();

    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(logSpy).toHaveBeenNthCalledWith(1, 12 * 60 + 30);
  });
});

describe('Homework #8, Task #3', () => {
  it('Case #1', () => {
    const first = '01.03.1999';
    const second = '03.09.1993';

    expect(findYoungest(first, second)).toBe('01.03.1999');
  });

  it('Case #2', () => {
    const first = '01.02.1973';
    const second = '07.04.2001';

    expect(findYoungest(first, second)).toBe('07.04.2001');
  });

  it('Case #3', () => {
    const first = '01.02.1973';
    const second = '01.02.1973';

    expect(findYoungest(first, second)).toBe('01.02.1973');
  });
});
