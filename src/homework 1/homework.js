export const getMulAndSum = () => {
  const firstNum = Number(prompt('Enter first number'));
  const secondNum = Number(prompt('Enter second number'));
  console.log(
    `Mul of ${firstNum} and ${secondNum} is ${firstNum * secondNum};`,
  );
  console.log(
    `Sum of ${firstNum} and ${secondNum} is ${firstNum + secondNum};`,
  );
};

export const getSummaryLenght = () => {
  const frst = prompt('Enter first string');
  const scnd = prompt('Enter second string');
  console.log(
    `Sum lenght of '${frst}' and '${scnd}' is ${frst.length + scnd.length};`,
  );
};

export const getDigitSum = () => {
  const number = Number(prompt('Enter your number'));
  let result = 0;
  let tmp = number;
  while (tmp > 0) {
    result += tmp % 10;
    tmp = Math.floor(tmp / 10);
  }

  console.log(`Sum of digits of number ${number} is ${result};`);
};
