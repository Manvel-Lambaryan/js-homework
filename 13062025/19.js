

const user = {
    name : "Mno",
    age  : 17,
    Country : "Armenia",
    City : "Spitak",
};

const JsonStringify = JSON.stringify(user);
console.log("To String --> ", JsonStringify);

const JsonPars = JSON.parse(JsonStringify);
console.log("To Parse --> ", JsonPars);

