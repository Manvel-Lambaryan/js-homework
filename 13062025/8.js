function Car(name,year,brand) 
{
    this.name = name;
    this.year = year;
    this.brand = brand;
}

Car.prototype.getDescriptor = function () 
{
    return `This is Car ${this.name} --> ${this.year} --> ${this.brand}`;
}

const MyCar = new Car("BMW","2008","M5E60");
console.log(MyCar.getDescriptor());

