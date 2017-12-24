// var trainNumber = 1;
// var trainsOperational = 8;
// var totalTrains = 12;
// var dayOfWeek = "Sunday";
// 
// 
// if (trainsOperational > 0) {
//   if (trainsOperational == totalTrains) {
//     console.log("All trains are running at the JavaScript Express!");    
//   } else {
//     for (var trainNumber = 1; trainNumber <= totalTrains; trainNumber++) {
//       if (trainNumber <= trainsOperational && trainNumber !=3) {
//         console.log("Train #" + trainNumber + " is running.");
//       } else if(trainNumber == 10 || trainNumber == 12) {
//         console.log("Train #" + trainNumber + " begins running at noon.");
//       } else if(trainNumber == 3 && dayOfWeek == 'Sunday') {
//         console.log("Train #3 is running.");
//       } else {
//           console.log("Train #" + trainNumber + " is not operational.");
//       }
//     }      
//   }
// } else {
//   console.log("No trains are operational today. Bummer!");
// }


// for (var number = 5; number > 0; number--) {
//   console.log(number);
// }


// while (trainNumber <= trainsOperational) {
//   console.log("Train #" + trainNumber + " is running.");
//   trainNumber++;
// }
// for (var stoppedTrain = trainsOperational + 1; stoppedTrain <= totalTrains; stoppedTrain++) {
//   console.log("Train #" + stoppedTrain + " is not operational.");
// }


// var gotName = false;
// while (gotName == false) {
//   var userName = prompt("Yo passenger! What's your name?");
//   if (confirm("Are you sure your name is " + userName + "?")) {
//     alert("'Sup " + userName + "!");
//     gotName = true;
//   }
// }


function makeList() {
  
}


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