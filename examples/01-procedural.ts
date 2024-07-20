export {};

type User = {
  firstName: string;
  lastName: string;
};

function getFullName(user: User) {
  return user.firstName + " " + user.lastName;
}

const user: User = {
  firstName: "Patrick",
  lastName: "Gregory",
};

console.log(getFullName(user));
