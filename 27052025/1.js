
function HowManySymbolIHave(str)
{
    let len = 0
    let space = ' '
    for(let i = 0; str[i] != str[undefined];i++)
        {
            if(str[i] == space)
                {
                    continue;
                }
            len++;
        }
        return len;
}

console.log(HowManySymbolIHave("Hello World"))