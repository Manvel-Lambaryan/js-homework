class Shape {
  getArea() {
    throw new Error('getArea() must be implemented by subclasses.');
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }

  getArea() {
    return this.side * this.side;
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

function renderArea(shape) {
  console.log(`The area of the shape is: ${shape.getArea()}`);
}
