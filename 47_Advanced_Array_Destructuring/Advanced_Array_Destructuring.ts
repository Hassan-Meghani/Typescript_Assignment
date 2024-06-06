// Given an array of objects representing different laptops.
// Each with properties make, model, and year.
// Use array destructuring to assign the first and second laptops to variables.
// Then, log these variables.

// Explain & TIP: 
// Destructuring can also be used to quickly extract elements from arrays of objects.
// Simplifying access to complex data structures.

let laptops = [
    { make: "Acer", model: "XPS 15", year: 2020 },
    { make: "Apple", model: "MacBook Pro", year: 2023 },
    { make: "HP", model: "Spectre x360", year: 2022 }
];
let [laptop1, laptop2] = laptops;
console.log(laptop1);
console.log(laptop2);