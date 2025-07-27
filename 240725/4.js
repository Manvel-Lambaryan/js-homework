let obj = {
  0 : '1',
  1 : '2',
  length : 2,
  [Symbol.isConcatSpreadable] : true,
}

let res = ['3','4'].concat(obj);
console.log(res);

console.log(`\n-------------------------------------\n`);


let obj1 = {
  0 : '1',
  1 : '2',
  length : 2,
  [Symbol.isConcatSpreadable] : false,
}

let res1 = ['3','4'].concat(obj1);
console.log(res1);