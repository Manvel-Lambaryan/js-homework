
function substring(str,str1)
{
    for(let i = 0; i < str.length;i++)
        {
            if(str.includes(str1))
                {
                    return true;
                }
        }
        return false;
}

console.log(substring("Hello My PicsArt Academy", "Art"));
