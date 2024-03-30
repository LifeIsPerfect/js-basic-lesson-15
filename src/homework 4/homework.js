export const getUser = () => {
  const obj = { name: 'John' };
  obj.age = Number(prompt('Enter user age'));
  return obj;
};

export const getAdmin = (user) => {
  const admin = { ...user };
  admin.role = 'admin';
  return admin;
};

export const destructivelyAssign = (user) => {
  const { name, age, role } = user;
  console.log(name);
  console.log(age);
  console.log(role);
};
