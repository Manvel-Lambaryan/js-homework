interface ICar {
  applyModel(): string;
}

class BlackColor implements ICar {
  applyModel(): string {
    return `This car is Black`;
  }
}

class WhiteColor implements ICar {
  applyModel(): string {
    return `This car is White`;
  }
}

class GrayColor implements ICar {
  applyModel(): string {
    return `This car is Gray`;
  }
}

abstract class IModel {
  protected car: ICar;

  constructor(car) {
    this.car = car;
  }

  public abstract draw(): void;
}

class Bmw extends IModel {
  constructor(car: ICar) {
    super(car);
  }

  public draw(): void {
    console.log(`Bmw --> ${this.car.applyModel()}`);
  }
}

class Mercedes extends IModel {
  constructor(car: ICar) {
    super(car);
  }

  public draw(): void {
    console.log(`Mercedes --> ${this.car.applyModel()}`);
  }
}

class Audi extends IModel {
  constructor(car: ICar) {
    super(car);
  }

  public draw(): void {
    console.log(`Audi --> ${this.car.applyModel()}`);
  }
}

const blackColor = new BlackColor();
const whiteColor = new WhiteColor();

const blackBmw = new Bmw(blackColor);
const whiteAudi = new Audi(whiteColor);

blackBmw.draw();
whiteAudi.draw(); 