"use strict";
// Write an if-else chain that determines a person’s stage of life.
// Set a value for the variable age.
let age = 18;
// If the person is less than 2 years old.
// Print a message that the person is a baby.
if (age < 2) {
    console.log("person is a baby.");
}
// If the person is at least 2 years old but less than 4.
// Print a message that the person is a toddler.
else if (age >= 2 && age < 4) {
    console.log("person is a toddler.");
}
// If the person is at least 4 years old but less than 13.
// Print a message that the person is a kid.
else if (age >= 4 && age < 13) {
    console.log("person is a kid.");
}
// If the person is at least 13 years old but less than 20.
// Print a message that the person is a teenager.
else if (age >= 13 && age < 20) {
    console.log("person is a teenager.");
}
// If the person is at least 20 years old but less than 65.
// Print a message that the person is an adult.
else if (age >= 20 && age < 65) {
    console.log("person is an adult.");
}
// If the person is age 65 or older.
// Print a message that the person is an elder.
else {
    console.log("person is an elder");
}
