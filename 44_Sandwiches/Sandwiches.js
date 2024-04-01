"use strict";
// Write a function that accepts a array of items a person wants on a sandwich.
// The function should have one parameter that collects as many items as the function call provides.
// It should print a summary of the sandwich that is being ordered.
function makeSandwich(item) {
    console.log('\nMaking your Sandwich with:');
    item.forEach(element => console.log("- " + element));
    console.log('Enjoy your Sandwich !\n');
}
// Call the function three times, using a different number of arguments each time.
makeSandwich(['Ham', 'Cheese', 'Lettuce']);
makeSandwich(['Ketchup', 'Mayonnaise']);
makeSandwich(['Vegetables', 'Turkey']);
