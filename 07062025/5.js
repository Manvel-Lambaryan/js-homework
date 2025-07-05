//var array = [2,4,6,8,10]
//
//var result = array.every(function(currentValue,index,array)
//{
//    return currentValue % 2 === 0;
//})
//
//console.log(result);

var array = [2,4,6,8];

function myEvery(array, callback) {
    for(let i = 0; i < array.length;i++) {
        if(!callback(array[i], i, array)) {
            return false;        
        }
    }
    return true;
}

let zuyg = myEvery(array, function(element, index, numbers){
    return element % 2 === 0;
});

console.log(zuyg);
