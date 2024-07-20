export {};

function isOdd(x: number) {
  return Number.isInteger(x) && x % 2 === 1;
}

// Define two different functions, and assign them to variables
const func1 = (x: string) => {
  return `Hello, ${x}`;
};
const func2 = (x: string) => {
  return `Hey, ${x}!`;
};

let chosenFunc: (x: string) => string;

// TODO: Assign chosenFunc based on some condition

//console.log(chosenFunc("World?"));
