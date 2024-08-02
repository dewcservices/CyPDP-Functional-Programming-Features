export {};

// TODO: fill in the return type, and content
function generateFunc(oddOrEven: "odd" | "even"): (val: number) => boolean {
  if(oddOrEven === "odd") {
    return (val: number) => val % 2 === 1;
  } else {
    return (val: number) => val % 2 === 1;
  }
}

const isOdd = generateFunc("odd");
console.log("Is 10 odd?", isOdd(10));
// or
console.log("Is 10 even?", generateFunc("even")(10));

//Should return true if the supplied function "seems" to behave like isOdd
function isPossiblyIsOdd(inputFunc: (val: number) => boolean): boolean {
  return inputFunc(31) === false && inputFunc(2) === true;
}
