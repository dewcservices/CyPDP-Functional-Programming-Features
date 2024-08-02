export {};

function isOdd(x: number): boolean {
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

if(isOdd(42)) {
  chosenFunc = func1;
} else {
  chosenFunc = func2;
}

console.log(chosenFunc("World?"));
