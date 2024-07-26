export {};

function double(value: number): number {
  return value * 2;
}

console.log("standard double 4 = ", double(4));
console.log("standard double 5 = ", double(5));

// Doesn't work!
//console.log("double null = "double(null));

class MaybeNumber {
  private _theValue: number | null;

  // private constructor!
  private constructor(value: number | null) {
    this._theValue = value;
  }
  static empty(): MaybeNumber {
    return new MaybeNumber(null);
  }
  static from(value: number): MaybeNumber {
    return new MaybeNumber(value);
  }

  isPresent() {
    return this._theValue !== null;
  }

  // TODO: complete the "maybeNumber" monad class
  doIfPresent(action: (value: number) => void): void {
    // TODO
  }

  getOrDefault(defaultTo: number): number {
    // TODO
    return 0;
  }

  map(mappingFunction: (value: number) => number): MaybeNumber {
    // TODO
    return MaybeNumber.empty();
  }
}

const myMaybe1 = MaybeNumber.empty();
myMaybe1.doIfPresent((value) => console.log(value));
const myMapped1 = myMaybe1.map((value) => value * 2);
const myExtracted1 = myMapped1.getOrDefault(0);
console.log("myExtracted 1: ", myExtracted1);

const myMaybe2 = MaybeNumber.from(42);
myMaybe2.doIfPresent((value) => console.log(value));
const myMapped2 = myMaybe2.map((value) => value * 2);
const myExtracted2 = myMapped2.getOrDefault(0);
console.log("myExtracted 2: ", myExtracted2);
