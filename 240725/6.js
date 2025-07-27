const wordCollection = {
  items : [1,2,3,4,5,6],
  *[Symbol.iterator]() {
    for (let i = this.items.length - 1; i >= 0; i--) {
      yield this.items[i];
    }
  }
};


const reversedArray = [...wordCollection];

console.log("Reverse --> ", reversedArray);
