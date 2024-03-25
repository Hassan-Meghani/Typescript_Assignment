let personeName :string = '';

personeName = prompt('What is your name?') || '';

let lowercase : string = personeName.toLowerCase();
let uppercase : string = personeName.toUpperCase();
let titlecase : string = personeName.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ")

if(personeName !== null && personeName !== ''){
    alert(`Hello ${personeName},Here are your name in:
LowerCase: ${lowercase}
UpperCase: ${uppercase}
TitleCase: ${titlecase}`)
}
else{
    alert('Please fill your name !')
}