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

// TODO: Assign chosenFunc based on some condition

//console.log(chosenFunc("World?"));
