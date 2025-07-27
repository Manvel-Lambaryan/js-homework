let first = Symbol('name');
let second = Symbol('surname');
let object = {
  [first] : "Mno",
  [second] : "Lambaryan",
  age : 17,
};

const symbols = Object.getOwnPropertySymbols(object);

symbols.forEach(symbolsKeyNames  => {
  console.log(symbolsKeyNames, '-->', object[symbolsKeyNames] );
})