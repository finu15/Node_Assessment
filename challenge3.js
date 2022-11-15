const read = require('readline-sync')
var flightFare = [];
let n = 5;
for (i = 0; i < n; i++) {
    flightFare[i] = read.question('Enter the Fare ' + (i + 1) + ': ');
}

console.log("List of Fares: ");
console.log(flightFare);


//Print ascending order

for (let i = 0; i < flightFare.length; i++) {
    for (let j = i + 1; j < flightFare.length; j++) {
        if (flightFare[i] > flightFare[j]) {
            temp = flightFare[i];
            flightFare[i] = flightFare[j];
            flightFare[j] = temp;
        }
    }
}
console.log("Sorted Fare List: ", flightFare);


//Print descending order

let reversedList = [];

for (let i = flightFare.length - 1; i >= 0; i--) {
    reversedList.push(flightFare[i]);
}

console.log("Reversed Flight List: ", reversedList);

//Input a fare and search in array and display

let searchFare = read.question("Enter the Fare You want to Search: ")
var count = 0;
for (let i = 0; i < n; i++) {
    if (flightFare[i] == searchFare) {
        console.log("The Flight Fare ", flightFare[i], " is in the Array")
        count += 1;
    }
}
if (count == 0) {
    console.log("Flight Fare is not in the Array")
}


//Print the max and min fares

console.log("The Minimum fare is: ", reversedList[n-1])
console.log("The Maximum fare is: ", reversedList[0])

//Print duplicate elements

console.log("Duplicate Fares: ");
var duplicate = [];

for (i = 0; i < n; i++) {

    for (j = i + 1; j < n; j++) {
        if (flightFare[i] == flightFare[j]) {
            duplicate[i] = flightFare[i];
        }
    }
}
console.log(duplicate)