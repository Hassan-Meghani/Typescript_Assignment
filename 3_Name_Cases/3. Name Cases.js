"use strict";
let personeName = '';
personeName = prompt('What is your name?') || '';
let lowercase = personeName.toLowerCase();
let uppercase = personeName.toUpperCase();
let titlecase = personeName.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
if (personeName !== null && personeName !== '') {
    alert(`Hello ${personeName},Here are your name in:
LowerCase: ${lowercase}
UpperCase: ${uppercase}
TitleCase: ${titlecase}`);
}
else {
    alert('Please fill your name !');
}
