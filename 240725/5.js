const numberCollection = {
  numbers: [10, 20, 30],
  [Symbol.iterator]() {
    let currentIndex = 0;
    const data = this.numbers;
    return {
      next() {
        if (currentIndex < data.length) {
          return { 
            value: data[currentIndex++], 
            done: false };
        } else {
          return { 
            value: undefined, 
            done: true };
        }
      }
    };
  }
};

for (const number of numberCollection) {
  console.log(number);
}