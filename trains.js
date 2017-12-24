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


var passengerlist = [];
console.log(passengerlist);
addPassenger("A B", passengerlist);
console.log(passengerlist);
addPassenger("C D", passengerlist);
console.log(passengerlist);
addPassenger("E F", passengerlist);
console.log(passengerlist);
addPassenger("G H", passengerlist);
console.log(passengerlist);

function makeList() {
  
}

function addPassenger(name, list) {
  if (list.length == 0) {
    list.push(name);
  } else {
    for (var i = 0; i < list.length; i++) {
      if (list[i] == undefined) {
        list[i] = name;
        return list;
      } else if (i == list.length - 1) {
        list.push(name);
        return list;
      }
    }
  }
}

function deletePassenger(name, list) {
  if (list.length === 0) {
    console.log("List is empty, dude!");
  } else {
    for (var i = 0; i < list.length; i++) {
      if (list[i] === name) {
        list[i] = undefined;
        return list;
      } else if (i === list.length - 1) {
        console.log("Passenger not found!");
      }
    }
  }
  return list;
}

deletePassenger("A B", passengerlist);
console.log(passengerlist);
addPassenger("X Y", passengerlist);
console.log(passengerlist);
deletePassenger("A B", passengerlist);

