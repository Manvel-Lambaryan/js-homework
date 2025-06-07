
var array = [1,2,3,4,5]

function findIndexOf(array,searchElement,fromIndex)
{
    for(let i = fromIndex;i < array.length;i++)
        {
            if(array[i] === searchElement)
                {
                    return i;
                }
        }
        return -1;
}

var result = findIndexOf(array,2,0);
console.log(result);




