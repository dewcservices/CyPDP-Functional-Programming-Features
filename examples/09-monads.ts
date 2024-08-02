export {};

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
    //
  }

  // TODO
  //map(mappingFunction: (value: number) => number): MaybeNumber {
  //}

  // TODO
  //getOrDefault(defaultTo: number): number {
  //}
}

function gauntlet(val: MaybeNumber) {
  val.doIfPresent((value) => console.log("Present and ", value));
  //const mappedVal = val.map((value) => value * 2);
  //mappedVal.doIfPresent((value) => console.log("Mapped to ", value));
  //const extracted = mappedVal.getOrDefault(0);
  //console.log("Extracted: ", extracted);
}

const myMaybe1 = MaybeNumber.empty();
const myMaybe2 = MaybeNumber.from(42);
gauntlet(myMaybe1);
gauntlet(myMaybe2);
