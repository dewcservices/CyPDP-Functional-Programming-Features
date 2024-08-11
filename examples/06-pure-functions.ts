export {};

let DELTA = 0;

// TODO: What impurities are there?
function getNextNum(lastNum: number): number {
  // Increase `DELTA` by 0-9ms
  DELTA += Math.round(Math.random() * 10);
  return lastNum + DELTA;
}

// testable??
let currentNum = 10;
for (let x = 0; x < 10; x++) {
  currentNum = getNextNum(currentNum);
  console.log(currentNum);
}

// *************
// Alternatively
// *************

type State = {
  num: number;
  delta: number;
};

function getNextNum2(
  currentState: State,
  // Let the user provide the "delta" logic
  addToDeltaFn: () => number,
  // We return all the information that needs to be updated
): State {
  const nextDelta = currentState.delta + addToDeltaFn();
  return {
    delta: nextDelta,
    num: currentState.num + nextDelta,
  };
}

// We don't HAVE to use random... But we CAN if we want
let randomDeltaFn = () => Math.round(Math.random() * 10);

let state: State = {
  delta: 0,
  num: 10,
};

for (let x = 0; x < 10; x++) {
  state = getNextNum2(state, randomDeltaFn);
  console.log(state.num);
}
