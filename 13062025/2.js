function Values(obj,keys = Object.keys(obj),i = 0)
{
    if(i === keys.length)
        {
            return;
        }
    console.log(obj[keys[i]]);
    Values(obj,keys, i + 1);
}

const Persons = 
{
    name1 : "Mno",
    name2 : "Vlo",
    name3 : "Ash",
};

Values(Persons);