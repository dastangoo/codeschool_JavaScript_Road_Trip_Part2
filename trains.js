var trainNumber = 1;
var trainsOperational = 8;
var totalTrains = 12;


if (trainsOperational > 0) {
  if (trainsOperational == totalTrains) {
    console.log("All trains are running at the JavaScript Express!");    
  } else {
    for (var trainNumber = 1; trainNumber <= totalTrains; trainNumber++) {
      if (trainNumber <= trainsOperational) {
        console.log("Train #" + trainNumber + " is running.");
      } else if(trainNumber == 10) {
        console.log("Train #10 begins running at noon.");
      }
      else {
          console.log("Train #" + trainNumber + " is not operational.");
      }
    }      
  }
} else {
  console.log("No trains are operational today. Bummer!");
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