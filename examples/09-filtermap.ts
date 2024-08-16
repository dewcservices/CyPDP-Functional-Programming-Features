export {};
import { MaybeNumber } from "./08-monads";

function sqrt(v: number): number | null {
  // Don't deal with negative values
  if (v <= 0) {
    return null;
  } else {
    return Math.sqrt(v);
  }
}

const myValues = [1, 2, -12, 25];

const sqrtValues = myValues.map(sqrt);
console.log(sqrtValues);
