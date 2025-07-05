
//var array = [1,2,3,4,5,6]
//
//var result = array.filter(function(currentValue,index,array)
//{
//    return currentValue % 2 === 0;
//})
//
//console.log(result);

var numbers = [1,2,3,4,5,6,7,8];

function myFilter (numbers,callback) 
{
    let result = [];
    for(let i = 0; i < numbers.length;i++) {
        if(callback(numbers[i], i, numbers)) {
            result.push(numbers[i]);
        }
    }
    return result;    
}

let zuyg = myFilter(numbers, function(element,index,array) {
    return element % 2  === 0;
});

console.log(zuyg);
