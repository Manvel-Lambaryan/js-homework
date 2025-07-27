const numberCollection = {
  numbers: [10, 15, 20, 25],
  *[Symbol.iterator]() {
    for (const number of this.numbers) {
      yield number;
    }
  }
};

const allNumbers = [...numberCollection];
console.log(allNumbers); 
