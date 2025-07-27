class Animal {
  constructor() {
    if(new.target === Animal) {
    throw new Error("Error");
  }
}

  speak() {
    if(this.constructor.name === 'Animal') {
    throw new Error("You can't Speak bhaahahahahahaa...");
  }
 }
}

class Dog extends Animal {
  speak() {
    super.speak();
    console.log("Dog do HAF HAFIK...");
  }
}

let a = new Dog();
a.speak()