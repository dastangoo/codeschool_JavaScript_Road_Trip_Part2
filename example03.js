// var a = 4;
// var b = 9;
// var aCubed = a * a * a;
// var bCubed = b * b * b;
// var sum = aCubed + bCubed;

function sumOfCubes(a, b) {
  // var aCubed = a * a * a;
  // var bCubed = b * b * b; 
  // var sum = aCubed + bCubed;
  // return sum;
  // return aCubed + bCubed;
  return a * a * a + b * b * b;
}

// console.log(sumOfCubes(4, 9));
// document.write(sumOfCubes(4, 9))
// var mySum = sumOfCubes(5, 6);
var x = 3;
// var mySum = sumOfCubes(1 + 2, 3 + 5);
var mySum = sumOfCubes(x * 2, x * 3);
alert(mySum);