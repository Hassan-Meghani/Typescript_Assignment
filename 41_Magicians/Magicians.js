"use strict";
// Make a array of magician’s names.
let magician = ['Doug Henning', 'Dynamo', 'Ricky Jay', 'Lance Burton'];
// Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magicians(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
show_magicians(magician);
