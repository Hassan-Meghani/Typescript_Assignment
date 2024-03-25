"use strict";
// Turn your if-else chain from Exercise 25-26 into an if-else chain.
let alienColors = "green";
// If the alien is green.
// Print a message that the player earned 5 points.
// Version 1.
if (alienColors === "green") {
    console.log("Version 1: Player earned 05 points.");
}
// If the alien is yellow.
// Print a message that the player earned 10 points.
else if (alienColors === "yellow") {
    console.log("Player earned 10 points.");
}
//  If the alien is red.
// Print a message that the player earned 15 points.
else if (alienColors === "red") {
    console.log("Player earned 15 points.");
}
else {
    console.log("Please select the right color");
}
// Version 2.
alienColors = "yellow";
if (alienColors === "green") {
    console.log("Player earned 05 points.");
}
else if (alienColors === "yellow") {
    console.log("Version 2: Player earned 10 points.");
}
else if (alienColors === "red") {
    console.log("Player earned 15 points.");
}
else {
    console.log("Please select the right color");
}
// Version 3.
alienColors = "red";
if (alienColors === "green") {
    console.log("Player earned 05 points.");
}
else if (alienColors === "yellow") {
    console.log("Player earned 10 points.");
}
else if (alienColors === "red") {
    console.log("Version 3: Player earned 15 points.");
}
else {
    console.log("Please select the right color");
}
