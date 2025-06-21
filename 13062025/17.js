const Person = {
    name : "Mno",
    age  : 17,
    Country  : "Armenia",
    City : "Spitak",
};

function forRest ({name, ...rest}) {
    console.log("My name is --> ",name);
    console.log("Abour me --> ",rest);
}

forRest(Person);