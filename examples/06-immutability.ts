export {};

type User = {
  first: string;
  last: string;
};

function uppercaseFirstName(user: User): string {
   return user.first.toUpperCase();
}

const user: User = {
  first: "Walter",
  last: "White",
};

console.log(user.first);
// user no longer changes during this call
console.log(uppercaseFirstName(user));
console.log(user.first);
