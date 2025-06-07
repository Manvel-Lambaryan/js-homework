function forThirdArray(arr1, arr2) {
    let arr3 = [];
    for (let i = 0; i < arr1.length; ++i) arr3.push(arr1[i]);
    for (let i = 0; i < arr2.length; ++i) arr3.push(arr2[i]);
    return arr3;
}

function forSort() {
    let arr3 = forThirdArray([1, 2, 3], [1, 2, 3]);
    for (let i = 0; i < arr3.length; i++) {
        for (let j = i + 1; j < arr3.length; ++j) {
            if (arr3[j] < arr3[i]) {
                let temp = arr3[i];
                arr3[i] = arr3[j];
                arr3[j] = temp;
            }
        }
    }
    return arr3;
}

console.log(forSort());
