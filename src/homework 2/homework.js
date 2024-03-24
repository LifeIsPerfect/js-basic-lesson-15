export const max = (first, second) => {
  console.log(
    `Max of ${first} and ${second} is ${first > second ? first : second};`,
  );
};

export const getMonthName = () => {
  const num = Number(prompt('Enter your number (1-12)'));
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  console.log(months[num - 1]);
};

export const willCircleFitIn = (circleArea, squareArea) => {
  const d1 = 2 * Math.sqrt(circleArea / Math.PI); // S = Pi*R^2 => R = sqrt( S / Pi )
  console.log(d1);
  const d2 = Math.sqrt(squareArea); // S = 4*R^2 => R = sqrt( S / 4 );
  console.log(d2);
  console.log(d1 < d2);
  return d1 < d2;
};
