"use strict";
// Construct an object for a laptop including properties make, model, year.
// And a method describe() that logs a sentence about the laptop.
// Explain & TIP:
// Objects can also contain functions (methods) that can perform actions using the object's properties. 
// This introduces method definition within objects.
let laptop = {
    make: "Acer",
    model: "XPS 15",
    year: 2023,
    describe: function () {
        console.log(`This laptop is a ${this.year} ${this.make} ${this.model}.`);
    }
};
laptop.describe();
