
let obj = 
{
    name : "Mno",
    age : 17,
};

const forFreez = Object.freeze(obj);

obj.age = 18;

console.log(obj);
