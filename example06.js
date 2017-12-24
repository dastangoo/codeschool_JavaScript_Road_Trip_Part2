var arr = ['a', 'b', 'c'];
console.log(arr);

arr.push('d');
console.log(arr);

arr.pop();
console.log(arr);

arr.shift();
console.log(arr);

arr.unshift('a');
console.log(arr);

var comboArray1 = ["One", "fish", 2, "fish"];
console.log(comboArray1);

var poisson = "fish";
console.log(poisson);

var comboArray2 = ["One", poisson, "Blue", poisson]
console.log(comboArray2);

var arrayOfArrays = [comboArray1, comboArray2];
console.log(arrayOfArrays);

console.log(arrayOfArrays[1]);
console.log(arrayOfArrays[1][0]);
console.log(arrayOfArrays[0][1]);