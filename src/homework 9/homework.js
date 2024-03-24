const isRightTriangle = (a, b, c) => {
  let sides = [a, b, c];
  sides = sides.sort();
  return sides[0] ** 2 + sides[1] ** 2 === sides[2] ** 2;
};

const getAreaAndCircumference = () => {
  const R = Number(prompt('Enter radius'));
  const area = Math.PI * R ** 2;
  const circumference = 2 * Math.PI * R;
  console.log(area);
  console.log(circumference);
};

const solveQuadraticEquation = () => {
  const a = Number(prompt('Enter a'));
  const b = Number(prompt('Enter b'));
  const c = Number(prompt('Enter c'));

  const d = Math.sqrt(b ** 2 - 4 * a * c);
  console.log((-1 * b + d) / (2 * a));
  console.log((-1 * b - d) / (2 * a));
};

module.exports = {
  isRightTriangle,
  getAreaAndCircumference,
  solveQuadraticEquation,
};
