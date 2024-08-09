export {};
import { MaybeNumber } from "./09-monads";

const myValues = [
  MaybeNumber.from(12),
  MaybeNumber.empty(),
  MaybeNumber.from(0),
  MaybeNumber.from(9999),
];

const intValues = myValues
  .filter((maybeNum) => maybeNum.isPresent)
  .map((maybeNum) => maybeNum.getOrDefault(-1));
console.log(intValues);
