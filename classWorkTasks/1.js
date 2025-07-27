class Shape {
  constructor() {
    if (new.target === Shape) {
      console.log("❌ Error: Cannot instantiate");
    }
  }

    getArea() {
      console.log("❌ Error: Cannot instantiate");
    }
 }


class Rectangle extends Shape {
  constructor(num1, num2) {
    super();
    this.num1 = num1;
    this.num2 = num2;
  }

  getArea() {
    return this.num1 * this.num2;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  } 

  getArea() {
    return Math.PI * this.radius * this.radius;
  }
}

const p1 = new Shape();
const p2 = new Rectangle(10,5)
const p3 = new Circle(10,5)
console.log(p2.getArea());
console.log(p3.getArea());

























