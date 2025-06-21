const container = {
    name : "Box",
    itmes : [
        "itme1",
        "item2",
    ],
};

const shallowCopy = { ...container};
shallowCopy.name = "New Box";
shallowCopy.itmes.push("item3");

console.log(shallowCopy.itmes);
console.log(shallowCopy.name);

console.log(shallowCopy);
console.log(container);



