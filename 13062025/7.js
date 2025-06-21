function Person (name,age) 
{
    this.name = name;
    this.age = age;
}

const Student = new Person("Mno",17);
console.log(Student instanceof Person);
