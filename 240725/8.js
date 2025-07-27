function range(start, end, step = 1) {
  return {
    *[Symbol.iterator]() {
      for (let i = start; step > 0 ? i < end : i > end; i += step) {
        yield i;
      }
    }
  };
}
console.log([...range(0, 5)]);
console.log([...range(0, 10, 2)]);
console.log([...range(5, 0, -1)]);
