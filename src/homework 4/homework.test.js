import { getUser, getAdmin, destructivelyAssign } from './homework';

describe('Homework #4, Task #1', () => {
  it('Case #1', () => {
    jest.spyOn(window, 'prompt').mockReturnValueOnce(22);
    const obj = getUser();
    expect(Object.prototype.hasOwnProperty.call(obj, 'age')).toBe(true);
    expect(typeof obj.age).toBe('number');
    expect(obj.age).toBe(22);
    expect(Object.prototype.hasOwnProperty.call(obj, 'name')).toBe(true);
  });

  it('Case #2', () => {
    jest.spyOn(window, 'prompt').mockReturnValueOnce('27');
    const obj = getUser();
    expect(Object.prototype.hasOwnProperty.call(obj, 'age')).toBe(true);
    expect(typeof obj.age).toBe('number');
    expect(obj.age).toBe(27);
    expect(Object.prototype.hasOwnProperty.call(obj, 'name')).toBe(true);
  });
});

describe('Homework #4, Task #2', () => {
  let userObject;

  beforeEach(() => {
    jest.spyOn(window, 'prompt').mockReturnValueOnce('27');
    userObject = getUser();
  });

  it('Case #1', () => {
    // Создать, проверить, что ссылаются на разные объекты
    // Что у user нет role admin

    const adminObject = getAdmin(userObject);

    expect(userObject).not.toBe(adminObject);
    expect(Object.prototype.hasOwnProperty.call(userObject, 'role')).toBe(
      false,
    );
    expect(Object.prototype.hasOwnProperty.call(adminObject, 'role')).toBe(
      true,
    );
    expect(adminObject.role).toBe('admin');
  });
});

describe('Homework #4, Task #3', () => {
  let userObject;
  let adminObject;

  beforeEach(() => {
    jest.spyOn(window, 'prompt').mockReturnValueOnce('27');
    userObject = getUser();
    adminObject = getAdmin(userObject);
  });

  it('Case #1', () => {
    const logSpy = jest.spyOn(console, 'log');
    destructivelyAssign(adminObject);
    expect(logSpy).toHaveBeenCalledTimes(3);
    expect(logSpy).toHaveBeenNthCalledWith(1, 'John');
    expect(logSpy).toHaveBeenNthCalledWith(2, 27);
    expect(logSpy).toHaveBeenNthCalledWith(3, 'admin');
  });
});
