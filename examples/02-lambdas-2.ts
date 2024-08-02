export {};

// Define a lambda, but don't assign it
let myLambda: (x: number) => string;

{
  const someNumber = 5;
  myLambda = (x: number) => {
    return "Provided [" + x + "] Captured [" + someNumber + "]";
  };
}

// What is the variable 'someNumber' here? | It's not in-scope
// What is the variable 'myLambda' here? | It's defined as above

// TODO: predict | Provided [2] Captured[5]
console.log(myLambda(2));
