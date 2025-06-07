var array = [1,2,3,4,5,6]

var result = array.some(function(currentValue,index,array)
{
    return currentValue % 2 === 0;
})

console.log(result);
