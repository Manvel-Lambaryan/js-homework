
function AllNumbersPlus(array)
{
    let result = 0
    for(let i = 0; i < array.length;i++)
        {
            result += array[i]
        }
        return result;
}

console.log(AllNumbersPlus([1,2,3,4,5,6,7,8,9,10]));
