function filterNumbers(user) {
    let result = {};

    for(let key in user)
        {
            if(typeof user[key] === 'number')
                {
                    result[key] = user[key];
                }
        }
    return result;
}

const user = {
    name : "Mno",
    age  : 17,
    yearWhenIBorn : 2008,
    Country : "Armenia",
    City : "Spitak",
};

let end = filterNumbers(user);

console.log(end);
