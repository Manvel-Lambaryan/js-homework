function SmallToBig(str) {
    let result = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] >= 'a' && str[i] <= 'z') {
            result.push(str[i].toUpperCase());
        } else {
            result.push(str[i]);
        }
    }
    return result.join('');
}

console.log(SmallToBig("hello world"));
