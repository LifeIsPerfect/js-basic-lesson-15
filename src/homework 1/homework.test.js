import { getMulAndSum, getSummaryLenght, getDigitSum } from './homework';

describe('Homework #1, Task #1', () => {
  it('Case #1', () => {
    jest.spyOn(window, 'prompt').mockReturnValueOnce(3).mockReturnValueOnce(4);
    const logSpy = jest.spyOn(console, 'log');
    getMulAndSum();
    expect(logSpy).toHaveBeenCalledTimes(2);
    expect(logSpy).toHaveBeenNthCalledWith(1, 'Mul of 3 and 4 is 12;');
    expect(logSpy).toHaveBeenNthCalledWith(2, 'Sum of 3 and 4 is 7;');
  });

  it('Case #2', () => {
    jest
      .spyOn(window, 'prompt')
      .mockReturnValueOnce(0)
      .mockReturnValueOnce('4');
    const logSpy = jest.spyOn(console, 'log');
    getMulAndSum();
    expect(logSpy).toHaveBeenCalledTimes(2);
    expect(logSpy).toHaveBeenNthCalledWith(1, 'Mul of 0 and 4 is 0;');
    expect(logSpy).toHaveBeenNthCalledWith(2, 'Sum of 0 and 4 is 4;');
  });

  it('Case #3', () => {
    jest
      .spyOn(window, 'prompt')
      .mockReturnValueOnce('7')
      .mockReturnValueOnce('1');

    const logSpy = jest.spyOn(console, 'log');

    getMulAndSum();

    expect(logSpy).toHaveBeenCalledTimes(2);
    expect(logSpy).toHaveBeenNthCalledWith(1, 'Mul of 7 and 1 is 7;');
    expect(logSpy).toHaveBeenNthCalledWith(2, 'Sum of 7 and 1 is 8;');
  });
});

describe('Homework #1, Task #2', () => {
  it('Case #1', () => {
    jest
      .spyOn(window, 'prompt')
      .mockReturnValueOnce('Test')
      .mockReturnValueOnce('String');

    const logSpy = jest.spyOn(console, 'log');

    getSummaryLenght();

    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(logSpy).toHaveBeenCalledWith(
      "Sum lenght of 'Test' and 'String' is 10;",
    );
  });

  it('Case #2', () => {
    jest
      .spyOn(window, 'prompt')
      .mockReturnValueOnce('Test')
      .mockReturnValueOnce('');

    const logSpy = jest.spyOn(console, 'log');

    getSummaryLenght();

    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(logSpy).toHaveBeenCalledWith("Sum lenght of 'Test' and '' is 4;");
  });
});

describe('Homework #1, Task #3', () => {
  it('Case #1', () => {
    jest.spyOn(window, 'prompt').mockReturnValueOnce('123');

    const logSpy = jest.spyOn(console, 'log');

    getDigitSum();

    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(logSpy).toHaveBeenCalledWith('Sum of digits of number 123 is 6;');
  });

  it('Case #2', () => {
    jest.spyOn(window, 'prompt').mockReturnValueOnce('100');

    const logSpy = jest.spyOn(console, 'log');

    getDigitSum();

    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(logSpy).toHaveBeenCalledWith('Sum of digits of number 100 is 1;');
  });
});
