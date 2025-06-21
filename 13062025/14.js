function addMethodes (object, newMethodes) 
{
    object[newMethodes] = function () 
    {
        return `This is your new Method --> ${newMethodes}`;
    };
}

let Car = {};

addMethodes(Car,'BMW');
addMethodes(Car,'MERCEDES');

console.log(Car.BMW());
console.log(Car.MERCEDES());
