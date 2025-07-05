//var array = [1,2,3,4,5,6]
//
//var result = array.some(function(currentValue,index,array)
//{
//    return currentValue % 2 === 0;
//})
//
//console.log(result);

var array = [1,2,3,4,5];

function mySome (array,callback) {
    for(let i = 0; i < array.length;i++) {
        if(callback(array[i], i, array)) {
            return true;
        }
    }
    return false;
}

let zuyg = mySome(array, function(element, index, numbers){
    return element % 2 === 0;
});

console.log(zuyg);
