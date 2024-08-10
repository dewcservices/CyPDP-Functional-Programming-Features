export {};

// Your mission: Complete the LazyIterator monad

class LazyIterator {
  private _values: number[];

  private _funcs: ((value: number) => number | null)[];

  private constructor(
    values: number[],
    funcs: ((value: number) => number | null)[],
  ) {
    this._values = values;
    this._funcs = funcs;
  }

  /** Constructor from values */
  static from(values: number[]) {
    return new LazyIterator(values, []);
  }

  /**
    Returns a copy of this iterator, with the added function.
    Functions which return null for a value are assumed to have filtered it out
  */
  withFunc(func: (value: number) => number | null): LazyIterator {
    return new LazyIterator(this._values, [...this._funcs, func]);
  }

  /** Filter numbers out based on a predicate */
  filter(filterFunc: (v: number) => boolean): LazyIterator {
    return this.withFunc((v: number) => {
      if (filterFunc(v)) {
        return v;
      } else {
        return null;
      }
    });
  }

  /** Apply a mapping function to every number */
  map(mapFunc: (v: number) => number): LazyIterator {
    return this.withFunc((v: number) => {
      return mapFunc(v);
    });
  }

  /** Perform an action on every number, but don't modify the value */
  do(action: (v: number) => void): LazyIterator {
    return this.withFunc((v: number) => {
      action(v);
      return v;
    });
  }

  // TODO
  /** Lazily retrieves the first resulting value, after applying the functions */
  first(): number {
    return 0;
  }
}

const myLazy = LazyIterator.from([1, -99999, 3, 4, 1, 2]);

// TODO: Goal: Only process as many as necessary (don't evaluate 4,1,2)
const myFilteredLazy = myLazy
  .do((v) => console.log("Processing ", v))
  .filter((v) => v > 2);

try {
  // TODO: Goal: Don't perform the map unless values made it through the filter
  const myMappedValues = myFilteredLazy
    .do((v) => console.log("Squaring   ", v))
    .map((v) => v ** 2);

  const myFirstValue = myMappedValues.first();
  console.log("Retrieved  ", myFirstValue); // This should print 9 (3 ** 2)
} catch {
  console.error("Something didn't work while getting first()");
}

// Double-Challenge: Can you make it so that we can assign the array _after_ we have set up some functions?
// e.g.
// const myValues = LazyIterator.empty().filter(v => v !== 0).map(v *=> v * 2).values([1,2,3]).first();
