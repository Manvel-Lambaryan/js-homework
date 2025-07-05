//var array = [1,2,3,4]
//
//var result = array.map(function(currentValue,index,array)
//{
//    return currentValue * 2;
//})
//
//console.log(result);

var numbers = [1,2,3,4,5];
function myMap (numbers,callback)
{
    let result = [];
    for(let i = 0; i < numbers.length;i++) {
        result.push(callback(numbers[i],i,numbers))
    }
    return result;
}

let dobled = myMap(numbers, function(element,index,numbers) {
    return element * 2;
});

console.log(dobled);
