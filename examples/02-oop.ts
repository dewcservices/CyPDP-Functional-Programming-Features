export {};

class User {
  firstName: string;
  lastName: string;

  getFullName() {
    return this.firstName + " " + this.lastName;
  }

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const user = new User("Patrick", "Gregory");

console.log(user.getFullName());
