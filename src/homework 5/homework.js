const sum = (arr) => arr.reduce((accumulator, value) => accumulator + value, 0);

const doubleArrayValues = (arr) => arr.map((el) => 2 * el);

const findMaxMin = (nums) => {
  const result = {
    max: undefined,
    min: undefined,
  };

  if (nums.length === 0) {
    return result;
  }

  // eslint-disable-next-line prefer-destructuring
  result.max = nums[0];
  // eslint-disable-next-line prefer-destructuring
  result.min = nums[0];

  // Можно сделать сортировку и взять элементы по краям. Это удобно, но медленее, чем так, как ниже,
  // потому что сложность сортировки в среднем O(n*log(n)) а у кода ниже сложность линейная O(n).
  // eslint-disable-next-line no-restricted-syntax
  for (const el of nums) {
    if (el < result.min) {
      result.min = el;
    }
    if (el > result.max) {
      result.max = el;
    }
  }
  return result;
};

module.exports = { sum, doubleArrayValues, findMaxMin };
