function forToUpperCase(user) {
    const value = Object.values(user);

    const Uppers = value.map(
        values => typeof values === "string" ? values.toUpperCase() : values
    );
    return Uppers;
} 

const user = {
    name : "Mno",
    age  : 17,
    bornYear : 2008,
    Country : "Armenia",
    City : "Spitak",
};

const result = forToUpperCase(user);
console.log(result);
