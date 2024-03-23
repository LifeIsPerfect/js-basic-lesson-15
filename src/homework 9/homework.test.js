const {
  isRightTriangle,
  getAreaAndCircumference,
  solveQuadraticEquation,
} = require('./homework');

describe('Homework #9, Task #1', () => {
  it('Case #1', () => {
    expect(isRightTriangle(3, 4, 5)).toBe(true);
  });

  it('Case #2', () => {
    expect(isRightTriangle(1, 1, 2)).toBe(false);
  });
});

describe('Homework #9, Task #2', () => {
  it('Case #1', () => {
    jest.spyOn(window, 'prompt').mockReturnValueOnce(3);
    const logSpy = jest.spyOn(console, 'log');

    getAreaAndCircumference();

    expect(logSpy).toHaveBeenCalledTimes(2);
    expect(logSpy).toHaveBeenNthCalledWith(1, Math.PI * 3 * 3);
    expect(logSpy).toHaveBeenNthCalledWith(2, 2 * Math.PI * 3);
  });

  it('Case #2', () => {
    jest.spyOn(window, 'prompt').mockReturnValueOnce(0);
    const logSpy = jest.spyOn(console, 'log');

    getAreaAndCircumference();

    expect(logSpy).toHaveBeenCalledTimes(2);
    expect(logSpy).toHaveBeenNthCalledWith(1, 0);
    expect(logSpy).toHaveBeenNthCalledWith(2, 0);
  });
});

describe('Homework #9, Task #3', () => {
  it('Case #1', () => {
    // 2*(x+3)*(x-1)=2*(x^2+3x-x-3)=2*(x^2+2x-3)=2x^2+4x-6
    jest
      .spyOn(window, 'prompt')
      .mockReturnValueOnce(2)
      .mockReturnValueOnce(4)
      .mockReturnValueOnce(-6);

    const logSpy = jest.spyOn(console, 'log');

    solveQuadraticEquation();

    expect(logSpy).toHaveBeenCalledTimes(2);
    expect(logSpy).toHaveBeenNthCalledWith(1, 1);
    expect(logSpy).toHaveBeenNthCalledWith(2, -3);
  });

  it('Case #2', () => {
    // (x-1)*(x-1) = x^2-2x+1
    jest
      .spyOn(window, 'prompt')
      .mockReturnValueOnce(1)
      .mockReturnValueOnce(-2)
      .mockReturnValueOnce(1);

    const logSpy = jest.spyOn(console, 'log');

    solveQuadraticEquation();

    expect(logSpy).toHaveBeenCalledTimes(2);
    expect(logSpy).toHaveBeenNthCalledWith(1, 1);
    expect(logSpy).toHaveBeenNthCalledWith(2, 1);
  });
});
