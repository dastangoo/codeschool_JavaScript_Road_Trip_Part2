var numberList = [ 2, 5, 8, 4, 7, 12, 6, 9, 3, 11 ];
console.log(numberList);

var evenCount = 0;
for (var i = 0; i < numberList.length; i++) {
  // console.log("The value in cell " + i + " is " + numberList[i]);
  if (numberList[i] % 2 == 0) {
    evenCount++
  } else {
    numberList[i] = undefined;
  }
}

console.log(evenCount);
console.log(numberList);
console.log(numberList.length);

// numberList.push(undefined);
// console.log(numberList);
// 

