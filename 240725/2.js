let first_symbol = Symbol.for('season');
let second_symbol = Symbol.for('season2');

let obj = {
  [first_symbol]: "summer",
  [second_symbol]: "spring",
  year: 2025,
};

const symbolKeys = Object.getOwnPropertySymbols(obj);

symbolKeys.forEach(symbol => {
  console.log(`Key: ${Symbol.keyFor(symbol)}, Value: ${obj[symbol]}`);
});