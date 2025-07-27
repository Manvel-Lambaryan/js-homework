class Money {
  constructor(amount) {
    this.amount = amount;
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'string') {
      return `$${this.amount.toFixed(2)}`;
    } else if (hint === 'number' || hint === 'default') {
      return this.amount;
    } else {
      throw new Error('Primitive conversion not supported for this hint.');
    }
  }
}

const myWallet = new Money(150.75);

console.log('--- Numeric Context ---');
const newTotal = myWallet + 49.25;
console.log(`Adding 49.25 gives us: ${newTotal}`);

console.log('\n--- String Context ---');
console.log(`My wallet contains: ${myWallet}`);

console.log('\n--- Explicit Conversion ---');
console.log('As a Number:', Number(myWallet));
console.log('As a String:', String(myWallet));