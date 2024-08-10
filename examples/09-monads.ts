export class MaybeNumber {
  private _isPresent: boolean;
  private _theValue: number;

  // private constructor!
  private constructor(isPresent: boolean, value: number) {
    this._isPresent = isPresent;
    this._theValue = value;
  }
  static empty(): MaybeNumber {
    return new MaybeNumber(false, 0);
  }
  static from(value: number): MaybeNumber {
    return new MaybeNumber(true, value);
  }

  get isPresent() {
    return this._isPresent;
  }

  doIfPresent(action: (value: number) => void): void {
    if (this.isPresent) {
      action(this._theValue);
    }
  }

  map(mappingFunction: (value: number) => number): MaybeNumber {
    if (this.isPresent) {
      const mappedNumber = mappingFunction(this._theValue);
      return MaybeNumber.from(mappedNumber);
    } else {
      return MaybeNumber.empty();
    }
  }

  getOrDefault(defaultTo: number): number {
    if (this.isPresent) {
      return this._theValue;
    } else {
      return defaultTo;
    }
  }

  toArray(): number[] {
    if (this.isPresent) {
      return [this._theValue];
    } else {
      return [];
    }
  }
}

if (require.main === module) {
  function gauntlet(val: MaybeNumber) {
    val.doIfPresent((value) => console.log("Present and ", value));
    const mappedVal = val.map((value) => value * 2);
    mappedVal.doIfPresent((value) => console.log("Mapped to ", value));
    const extracted = mappedVal.getOrDefault(0);
    console.log("Extracted: ", extracted);
  }

  const myMaybe1 = MaybeNumber.empty();
  const myMaybe2 = MaybeNumber.from(42);
  gauntlet(myMaybe1);
  gauntlet(myMaybe2);
}
