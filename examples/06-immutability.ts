export {};

type User = {
  first: string;
  last: string;
};

// TODO Don't mutate
function uppercaseFirstName(user: User): void {
  user.first = user.first.toUpperCase();
}

const user: User = {
  first: "Walter",
  last: "White",
};

console.log(user.first);
// user changes during this call, but it might not be obvious
uppercaseFirstName(user);
console.log(user.first);
