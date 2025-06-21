function Counts (object) {
    let count = 0;
    for(let key in object)
        {
            count++;
        }
    return count;    
}

const Person = {
    name : "Mno",
    age  : 17,
    Country : "Armenia",
    City : "Spitak",
};

const result = Counts(Person);
console.log(result);
