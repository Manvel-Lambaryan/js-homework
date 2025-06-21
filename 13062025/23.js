function Person (name, age)
{
    this.name = name;
    this.age = age;
}

const person1 = new Person("Mno", 17);
const person2 = new Person("Vlo",21);

Person.prototype.greet = function () 
{
    return `Hi, I'm ${this.name}, I'm ${this.age} years old: `;
}

console.log(person1.greet());
console.log(person2.greet());

