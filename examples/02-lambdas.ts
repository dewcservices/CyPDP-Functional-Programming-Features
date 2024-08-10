export {};

// Define a lambda, but don't assign it
let myLambda: (x: number) => string;

const someNumber = 5;
myLambda = (x: number) => {
  return "Provided [" + x + "] Captured [" + someNumber + "]";
};

// What is the variable 'myLambda' here?
// What is the variable 'someNumber' here?

// TODO: predict
console.log(myLambda(2));
