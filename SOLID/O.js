class PaymentMethod {
  process(amount) {
    throw new Error('This method must be overridden!');
  }
}

class CreditCardPayment extends PaymentMethod {
  process(amount) {
    console.log(`Paid ${amount} with credit card.`);
  }
}

class PayPalPayment extends PaymentMethod {
  process(amount) {
    console.log(`Paid ${amount} with PayPal.`);
  }
}

class PaymentProcessor {
  process(paymentMethod, amount) {
    paymentMethod.process(amount);
  }
}
