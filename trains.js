var trainNumber = 1;
var trainsOperational = 8;
var totalTrains = 12;

for (var trainNumber = 1; trainNumber <= totalTrains; trainNumber++) {
  if (trainNumber <= trainsOperational) {
    console.log("Train #" + trainNumber + " is running.");
  } else {
      console.log("Train #" + trainNumber + " is not operational.");
  }
}

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