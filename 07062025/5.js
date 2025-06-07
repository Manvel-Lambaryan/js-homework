var array = [2,4,6,8,10]

var result = array.every(function(currentValue,index,array)
{
    return currentValue % 2 === 0;
})

console.log(result);
