function shallowMerge(...objects)
{
    return Object.assign({}, ...objects);
}

const FirstNumbers = {
    a : 1,
    b : 2,
    c : 3,
};

const SecondNumbers = {
    d : 4,
    e : 5,
};

const ThirdNumbers = {
    f : 6,
};

const result = shallowMerge(FirstNumbers,SecondNumbers,ThirdNumbers);
console.log(result);
