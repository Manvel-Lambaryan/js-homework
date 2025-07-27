class LazyNestedIterator {
  constructor(nestedArray) {
    this.nestedArray = nestedArray;
  }

  *[Symbol.iterator]() {
    function* traverse(items) {
      for (const item of items) {
        if (Array.isArray(item)) {
          yield* traverse(item);
        } else {
          yield item;
        }
      }
    }
    yield* traverse(this.nestedArray);
  }
}


const nestedList = [1, [2, [3, 4], 5], 6];
const iterator = new LazyNestedIterator(nestedList);
console.log("Flattened values:");

for (const value of iterator) {
  console.log(value);
}