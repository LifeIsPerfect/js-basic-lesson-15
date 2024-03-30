export const sumFrom50To100 = () => {
  let res = 0;
  for (let i = 50; i <= 100; i++) {
    res += i;
  }
  console.log(res);
};

export const multiplicationTable = () => {
  for (let i = 1; i <= 9; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
  }
};

export const arithmeticMean = () => {
  const n = Number(prompt('Enter your number'));
  let sum = 0;
  for (let i = 1; i <= n; i += 2) {
    sum += i;
  }
  console.log(Math.floor(sum / Math.floor((n + 1) / 2)));
};
