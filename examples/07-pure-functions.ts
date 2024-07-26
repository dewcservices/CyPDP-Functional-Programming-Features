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

type State = {
  num: number;
  increase: number;
};

function getNextNum2(
  currentState: State,
  // Let the user provide the "increase" logic
  updateIncreaseFn: () => number,
  // We return all the information that needs to be updated
): State {
  const nextIncrease = currentState.increase + updateIncreaseFn();
  return {
    increase: nextIncrease,
    num: currentState.num + nextIncrease,
  };
}

// We don't HAVE to use random... But we CAN if we want
let increaseFn = () => Math.round(Math.random() * 10);

let state: State = {
  increase: 5,
  num: 10,
};

for (let x = 0; x < 10; x++) {
  state = getNextNum2(state, increaseFn);
  console.log(state.num);
}
