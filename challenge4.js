const read = require('readline-sync')
var dob = read.question("Enter Your DOB as DD/MM/YYYY: ")

var currentYear = read.questionFloat("Enter the current year: ")
var birthYear = read.questionFloat("Enter the Birth year: ")

var age = currentYear - birthYear;

console.log("Your Current Age is", age, "Years.");

var month = age * 12;
console.log("Your Current Age is", month, "Months.");

var week = month * 4;
console.log("Your Current Age is", week, "Weeks.");

var day = week * 365;
console.log("Your Current Age is", day, "Days.");

if ((birthYear % 4 == 0) & (birthYear % 100 == 0) || (birthYear % 400 == 0)) {
    console.log(birthYear + "is a leapyear")
}
else {
    console.log(birthYear + " is a not a leapyear")
}
