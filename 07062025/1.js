
//var colors= ['red','blue','white','green'];
//colors.forEach(function(currentValue, index, array)
//{
//    console.log(index + ":" + currentValue)
//})

var arr = [1,2,3,4,5];
function myForEach (arr, callback) {
    for(let i = 0; i < arr.length;i++) {
        callback(arr[i],i,arr);
    }
}

myForEach(arr,function (element,index,array) {
    console.log(`Element at index ${index} is ${element}`);
}); 