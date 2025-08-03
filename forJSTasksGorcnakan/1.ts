interface Coffee {
  cost(): number;
  description(): string;
}

class SimpleCoffee implements Coffee {
  public cost(): number {
    return 5;
  }

  public description(): string {
    return "Simple Coffe"
  }
}

abstract class CoffeeDecorator implements Coffee {
  protected coffee: Coffee;

  constructor(coffee) {
    this.coffee = coffee;
  }

  public abstract cost(): number;
  public abstract description(): string;
}

class WithMilk extends CoffeeDecorator {
  constructor(coffee: Coffee) {
    super(coffee);
  }

  public cost(): number {
    return this.coffee.cost() + 1.5;
  }

  public description(): string {
    return `${this.coffee.description()}, with Milk:`;
  }
}

class WithSugar extends CoffeeDecorator {
  constructor(coffee: Coffee) {
    super(coffee);
  }

  public cost(): number {
    return this.coffee.cost() + 2.5;
  }

  public description(): string {
    return `${this.coffee.description()}, with Sugar:`;
  }
}

class WithWhippedCream extends CoffeeDecorator {
  constructor(coffee: Coffee) {
    super(coffee);
  }

  public cost(): number {
    return this.coffee.cost() + 4.5;
  }

  public description(): string {
    return `${this.coffee.description()}, with Whipped Cream:`;
  }
}

const coffee = new WithSugar(new WithMilk(new SimpleCoffee()));
console.log(coffee.description());
console.log(coffee.cost());        