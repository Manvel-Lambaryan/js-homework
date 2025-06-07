
var array = [1,2,3,4,5,6]

var result = array.filter(function(currentValue,index,array)
{
    return currentValue % 2 === 0;
})

console.log(result);
