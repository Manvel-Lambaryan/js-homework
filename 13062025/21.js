function getDescriptor (object) {
    const uniqueKeys = new Set();

    object.forEach(element => {
        Object.keys(element).forEach(element => uniqueKeys.add(element));
    });

    const result = {};

    uniqueKeys.forEach(key => {
        result[key] = null;
    });
  return result;
}


const people = [
    {name : "Mno", age : 17},
    {name : "Mno", age : 17},
    {name : "Mno", age : 17},
];

console.log(getDescriptor(people));
