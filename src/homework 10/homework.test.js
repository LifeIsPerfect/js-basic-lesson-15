const {
  validateDate,
  validateEmail,
  validatePhoneNumber,
} = require('./homework');

const mockInput = (str) =>
  jest.spyOn(window, 'prompt').mockReturnValueOnce(str);

describe('Homework #10, Task #1', () => {
  it('Case #1', () => {
    mockInput('07/03/2024');
    expect(validateDate()).toBe(true);
  });

  it('Case #6', () => {
    mockInput('31/03/2024');
    expect(validateDate()).toBe(true);
  });

  it('Case #7', () => {
    mockInput('32/03/2024');
    expect(validateDate()).toBe(false);
  });

  it('Case #8', () => {
    mockInput('29/02/2024');
    expect(validateDate()).toBe(true);
  });

  it('Case #9', () => {
    mockInput('30/02/2024');
    expect(validateDate()).toBe(false);
  });

  it('Case #2', () => {
    mockInput('12/43/2024');
    expect(validateDate()).toBe(false);
  });

  it('Case #3', () => {
    mockInput('23/03/24');
    expect(validateDate()).toBe(false);
  });

  it('Case #4', () => {
    mockInput('23d/03y/24m');
    expect(validateDate()).toBe(false);
  });

  it('Case #5', () => {
    mockInput('123/03/2024');
    expect(validateDate()).toBe(false);
  });
});

describe('Homework #10, Task #2', () => {
  it('Case #1', () => {
    mockInput('test@gmail.com');
    expect(validateEmail()).toBe(true);
  });

  it('Case #2', () => {
    mockInput('TEST@gmail.com');
    expect(validateEmail()).toBe(true);
  });

  it('Case #3', () => {
    mockInput("!#$%&'*+-/=?^_`{|}~@gmail.com");
    expect(validateEmail()).toBe(true);
  });

  it('Case #4', () => {
    mockInput('test.test@gmail.com');
    expect(validateEmail()).toBe(true);
  });

  it('Case #5', () => {
    mockInput('.test@gmail.com');
    expect(validateEmail()).toBe(false);
  });

  it('Case #6', () => {
    mockInput('test.@gmail.com');
    expect(validateEmail()).toBe(false);
  });

  it('Case #7', () => {
    mockInput('test..test@gmail.com');
    expect(validateEmail()).toBe(false);
  });

  it('Case #11', () => {
    mockInput('..test@gmail.com');
    expect(validateEmail()).toBe(false);
  });

  it('Case #12', () => {
    mockInput('test..@gmail.com');
    expect(validateEmail()).toBe(false);
  });

  it('Case #8', () => {
    mockInput('123test123@gmail.com');
    expect(validateEmail()).toBe(true);
  });

  it('Case #9', () => {
    mockInput('test-@gmail.com');
    expect(validateEmail()).toBe(true);
  });

  it('Case #10', () => {
    mockInput('test_@gmail.com');
    expect(validateEmail()).toBe(true);
  });

  it('Case #13', () => {
    mockInput('test@gmail');
    expect(validateEmail()).toBe(false);
  });

  it('Case #14', () => {
    mockInput('test@.com');
    expect(validateEmail()).toBe(false);
  });

  it('Case #15', () => {
    mockInput('test@');
    expect(validateEmail()).toBe(false);
  });

  it('Case #16', () => {
    mockInput('test.com');
    expect(validateEmail()).toBe(false);
  });
});

describe('Homework #10, Task #3', () => {
  it('Case #1', () => {
    mockInput('89123456789');
    expect(validatePhoneNumber()).toBe(true);
  });

  it('Case #2', () => {
    mockInput('891234567890');
    expect(validatePhoneNumber()).toBe(false);
  });

  it('Case #3', () => {
    mockInput('8912345678');
    expect(validatePhoneNumber()).toBe(false);
  });

  it('Case #4', () => {
    mockInput('69123456789');
    expect(validatePhoneNumber()).toBe(false);
  });

  it('Case #5', () => {
    mockInput('87123456789');
    expect(validatePhoneNumber()).toBe(false);
  });
});
