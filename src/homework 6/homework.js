const diff = (a, b) => (a > b ? a - b : b - a);

const isWord = (str) => /^[a-zA-Z]+$/.test(str);

const pow = (a, x) => {
  if (a === 0 && x === 0) {
    return undefined;
  }

  if (x < 0) {
    return undefined;
  }

  let res = 1;

  for (let i = 0; i < x; i++) {
    res *= a;
  }

  return res;
};

module.exports = { diff, isWord, pow };
