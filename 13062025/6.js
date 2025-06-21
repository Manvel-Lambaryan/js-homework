var Person = 
{
    greet()
    {
        console.log("Hello");
    },
    name : "Mno",
    age : 17,
};

var Student = Object.create(Person);
Student.profession = "Student";
Student.greet = function ()
{
    console.log(`my name is ${this.name} And I am ${this.age} years old I'm a ${this.profession}`);
}
console.log(Student.greet(Student.name));

Person.greet();
Student.greet()
