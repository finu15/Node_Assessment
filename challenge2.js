const read = require('readline-sync')
var flight = {
    flightFare: null,
    bookingTime: null,
};
flight.flightFare = read.questionFloat("Enter the Fare in Rs : ");
flight.bookingTime = read.questionFloat("Enter Booking Time in 24 hr format: ");

var time = flight.bookingTime;
var price = flight.flightFare;

if (time >= 6 && time <= 9) {
    var percentage = price * (10 / 100);
    var newprice = price + percentage;
    console.log("Increased fare: ", newprice)
}

else if (time > 9 && time <= 17) {
    var percentage = price * (20 / 100);
    var newprice = price + percentage;
    console.log("Increased fare: ", newprice)
}

else if (time > 17 && time <= 23) {
    var percentage = price * (7 / 100);
    var newprice = price + percentage;
    console.log("Increased fare: ", newprice)
}

else {
    var percentage = price * (5 / 100);
    var newprice = price + percentage;
    console.log("Increased fare: ", newprice)
}