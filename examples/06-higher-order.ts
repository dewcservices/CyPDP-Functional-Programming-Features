export {};

// TODO: fill in the return type, and content
function generateFunc(oddOrEven: "odd" | "even") /* ??? */ {
  return {} as any;
}

const isOdd = generateFunc("odd");
console.log("Is 10 odd?", isOdd(10));
// or
console.log("Is 10 even?", generateFunc("even")(10));

// Bonus points: create an "isPossiblyIsOdd" function
// Should return true if the supplied function "seems" to behave like isOdd

function isPossiblyIsOdd(inputFunc: (x: number) => boolean): boolean {
  if(inputFunc(10) === false && inputFunc(3) === true) {
    return true;
  } else {
    return false;
  }
}
