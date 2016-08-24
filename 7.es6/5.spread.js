var arr = [1,2,3,4,3,66,4];

//console.log(Math.max.apply(null,arr));
Math.max(1,2,3,4,3,66);
console.log(Math.max(...arr));

var arr1 = [1,2];
var arr2 = [3,4];
var arr3 = [...arr1,...arr2];

console.log(arr3);
console.log(arr1.concat(arr2));


