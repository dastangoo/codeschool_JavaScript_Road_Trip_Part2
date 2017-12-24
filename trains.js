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


var gotName = false;
while (gotName == false) {
  var userName = prompt("Yo passenger! What's your name?");
  if (confirm("Are you sure your name is " + userName + "?")) {
    alert("'Sup " + userName + "!");
    gotName = true;
  }
}