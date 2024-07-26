export {};

let increase = 5;

function getNextNum(lastNum: number): number {
  // Increase `increase` by 0-9ms
  increase += Math.round(Math.random() * 10);
  return lastNum + increase;
}

// testable??
let currentNum = 10;
for (let x = 0; x < 10; x++) {
  currentNum = getNextNum(currentNum);
  console.log(currentNum);
}

// Alternatively:

function getNextNum2(
  current: number,

  // don't use globals - only depend on arguments
  increase: number,

  // Let the user provide the "increase" logic
  updateIncreaseFn: () => number,

  // We return all the information that needs to be updated
): { nextNum: number; nextIncrease: number } {
  const nextIncrease = increase + updateIncreaseFn();
  return {
    nextIncrease,
    nextNum: current + nextIncrease,
  };
}

let currentNum2 = 10;
// We don't HAVE to use random... But we CAN if we want
let increaseFn = () => Math.round(Math.random() * 10);
let increase2 = 5;

for (let x = 0; x < 10; x++) {
  const update = getNextNum2(currentNum2, increase2, increaseFn);
  currentNum2 = update.nextNum;
  increase2 = update.nextIncrease;
  console.log(currentNum2);
}
