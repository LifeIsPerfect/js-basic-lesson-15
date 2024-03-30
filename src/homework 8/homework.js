const getDayOfWeek = () => {
  const [day, month, year] = prompt('Enter your date').split('.');
  const date = new Date(year, month - 1, day);
  console.log(date.getDay());
};

const getMinutesSinceDayStart = () => {
  const currentDate = new Date();
  console.log(currentDate.getHours() * 60 + currentDate.getMinutes());
};

const createDateFromString = (date) => {
  const [day, month, year] = date.split('.');
  return new Date(year, month - 1, day);
};

const findYoungest = (first, second) => {
  const d1 = createDateFromString(first);
  const d2 = createDateFromString(second);

  return d1 > d2 ? first : second;
};

module.exports = { getDayOfWeek, getMinutesSinceDayStart, findYoungest };
