function isEqual (a,b) 
{
    if( a !== null || typeof a === 'object' && b !== null || typeof b === 'object')
        {
            for(let key in a) {
                if(a[key[key]] !== b[key[key]])
                    {
                        return false;
                    }
            }
        }
    return true;
}

const FirstPerson = {
    name : "Mno",
    age : 17,
};

const SecondPerson = {
    name : "Mno",
    age : 17,
};

const result = JSON.stringify(FirstPerson) === JSON.stringify(SecondPerson);
console.log(result);

