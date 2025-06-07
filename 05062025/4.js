
function add(a,b,c)
{
    if(arguments.length === 2)
    {
            return a + b;
    }
        else if(arguments.length === 3)
        {
                return a + b + c;
        }else
        {
            return "Function add requires 2 or 3 arguments"
        }
}

console.log(add(1,2,3));
