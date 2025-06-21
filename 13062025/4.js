var keys = ['name','age','city'];
let result = {};

for(let i = 0; i < keys.length;i++)
    {
        result[keys[i]] = `value${i + 1}`;
    }
    
console.log(result);
    