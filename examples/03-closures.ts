export {};

// Here's a lambda:
(val: number) => val * 2;

// Now use it to compute 5 * 2
const fiveTimesTwo = ((val: number) => val * 2)(5);

console.log("Step 1", fiveTimesTwo);
