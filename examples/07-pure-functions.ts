export {};

let timeStepMs = 5;

function getNextStepMs(lastMs: number): number {
  // Increase timestep by 1-10ms
  timeStepMs += Math.round(Math.random() * 10) + 1;
  return lastMs + timeStepMs;
}

// testable??
console.log(getNextStepMs(100));
console.log(getNextStepMs(100));
