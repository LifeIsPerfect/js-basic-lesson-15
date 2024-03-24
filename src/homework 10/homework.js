const validateDate = () => {
  const str = prompt('Enter your date (DD/MM/YYYY)');

  if (!/^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/.test(str)) {
    return false;
  }

  const [dayStr, monthStr, yearStr] = str.split('/');
  const day = Number(dayStr);
  const month = Number(monthStr);
  const year = Number(yearStr);

  if (month > 12 || month < 1) {
    return false;
  }

  const daysInMonth = new Date(year, month, 0).getDate();
  if (day > daysInMonth || day < 1) {
    return false;
  }

  return true;
};

const validateEmail = () => {
  const str = prompt('Enter your email');

  if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z]+\.[a-z]+$/.test(str)) {
    return false;
  }

  if (/^\..*@.*$/.test(str)) {
    return false;
  }

  if (/^.*\.@.*$/.test(str)) {
    return false;
  }

  if (/^.*\.\..*@.*$/.test(str)) {
    return false;
  }

  return true;
};

const validatePhoneNumber = () => {
  const str = prompt('Enter your phone number');
  return /^89[0-9]{9}$/.test(str);
};

module.exports = { validateDate, validateEmail, validatePhoneNumber };
