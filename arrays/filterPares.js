var filterPares = (arr) =>
 arr.filter(callback)

var callback = (item) => item % 2 === 0;

const meuArray =  [1,2,3,4,5]

console.log(filterPares(meuArray));
