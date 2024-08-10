export {};

function isOdd(x: number): boolean {
  return Number.isInteger(x) && x % 2 === 1;
}

// Define two different functions, and assign them to variables
function func1(x: string): string {
  return `Hello, ${x}`;
};
function func2(x: string): string {
  return `Hey, ${x}!`;
};

let chosenFunc: (x: string) => string;

if(isOdd(42)) {
  chosenFunc = func1;
} else {
  chosenFunc = func2;
}

console.log(chosenFunc("World?"));
