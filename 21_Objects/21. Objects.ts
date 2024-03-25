// Write a program that creates Objects containing these items.
// Datatype of person object.
interface person {
    age : number,
    name : string,
    nationality : string,
    student : Boolean
}
// Person object.
let person :person = {
    age : 18 ,
    name : 'Hassan' ,
    nationality : 'Canada' ,
    student : true
}
// Print person.
console.log(person);
// Datatype of car object.
interface car {
    manufacturer : string,
    colour : string,
    manual : boolean
}
// Car Object.
let car = {
    manufacturer : 'Toyota',
    colour : 'Black',
    manual : true
}
// Print car.
console.log(car);