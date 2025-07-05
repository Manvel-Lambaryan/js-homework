
var array = [1,2,3,4,5]

function findIndexOf(array,searchElement,fromIndex = 0)
{
        for (let i = fromIndex; i < array.length; i++)
        {
            if(array[i] === searchElement)
                {
                    return i;
                }
        }
        return -1;
}

var result = findIndexOf(array,2);
console.log(result);
