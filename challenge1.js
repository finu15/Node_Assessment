// let passengerName = ["finu","fida","zarina","kat","george","emmanuel","akshay","fathima","fairus","adi"];

// passengerName.sort();
// console.log(passengerName);


// let descPass= passengerName.sort().reverse();
// console.log(descPass);



//accepting passenger input

const read = require('readline-sync')
var passengerName = [];
let n = 10;
for (i = 0; i < n; i++) {
    passengerName[i] = read.question('Enter Name of Passenger ' + (i + 1) + ': ');
}

console.log("Total passengers: ");
console.log(passengerName);


//Print ascending order

for (let i = 0; i < passengerName.length; i++) {
    for (let j = i + 1; j < passengerName.length; j++) {
        if (passengerName[i] > passengerName[j]) {
            temp = passengerName[i];
            passengerName[i] = passengerName[j];
            passengerName[j] = temp;
        }
    }
}
console.log("Sorted Passenger List: ", passengerName);


//Print descending order

let reversedList = [];

for (let i = passengerName.length - 1; i >= 0; i--) {
    reversedList.push(passengerName[i]);
}

console.log("Reversed passenger List: ", reversedList);

//searchInput a name and search in array and display

let searchname = read.question("Enter the Name You want to Search: ")
var count = 0;
for (let i = 0; i < n; i++) {
    if (passengerName[i] == searchname) {
        console.log("The Name ", passengerName[i], " is in the List")
        count += 1;
    }
}
if (count == 0) {
    console.log("Name is not in the List.")
}


//Input a name and search in array and display

console.log("Length of passenger name: ");
for (let i = 1; i <= n; i++) {
    console.log(`Length of ${passengerName[i - 1]} is ${passengerName[i - 1].length}`);
}


//Split the names at space and print for each element

console.log("Splitted Names: ");
for (let i = 1; i <= n; i++) {
    let name = passengerName[i - 1];
    let nameArray = name.split(" ");
    console.log(`${nameArray}`);
}

//Print duplicate entries

console.log("Duplicates: ");
var duplicate = [];

for (i = 0; i < n; i++) {

    for (j = i + 1; j < n; j++) {
        if (passengerName[i] == passengerName[j]) {
            duplicate[i] = passengerName[i];
        }
    }
}
console.log(duplicate)

