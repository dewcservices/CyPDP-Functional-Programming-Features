export {};

type User = {
  getFirstName: () => string;
  setFirstName: (n: string) => void;
  greet: (prefix: string) => string;
};

function newUser(firstName: string): User {
  let fn = firstName;

  const getFirstName = () => fn;

  const setFirstName = (name: string) => (fn = name);

  const greet = (prefix: string) => `${prefix}, ${getFirstName()}.`;

  return {
    getFirstName,
    setFirstName,
    greet,
  };
}

const user: User = newUser("John");

console.log(user.greet("Good evening")); // Good evening, John.

user.setFirstName("Stacy");

console.log(user.greet("Hello")); // Hello, Stacy.
