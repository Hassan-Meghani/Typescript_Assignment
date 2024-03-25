// Tests for equality and inequality with strings, Test 1.
console.log("Equality test with strings: ", "Pineapple" === "Pineapple");
// Tests for equality and inequality with strings, Test 2.
console.log("Equality test with strings: ", ("Pineapple" as string) != "Peach");

// Tests using the lower case function
console.log("Lower Case function test: ", "HELLO".toLowerCase() === "hello");

// Numerical tests involving equality
console.log("Equality test with numbers: ", 26 === 26);
// Numerical tests involving inequality
console.log("Inequality test with numbers: ", (26 as number) != 35);

// Greater than test
console.log("Greater than test: ", 10 > 5);
// Less than test
console.log("Less than test: ", 5 < 10);

// greater than or equal to
console.log("Greater than and equal to test: ", 10 >= 10);
// less than or equal to
console.log("less than or equal to test: ", 5 <= 10 )

// Tests using "and" operators
console.log("And operator test: ", 5===5 && 10 > 5);
// Tests using "or" operators
console.log("or operator test: ", 5===5 || false);

// Test whether an item is in a array
const vegetables :string[] = ['Potato', 'Tomato', 'Eggplant'];
console.log('Test "Tomato" in the array: ', vegetables.includes("Tomato"));
// Test whether an item is not in a array
console.log('Testing "Beas" is not in array: ', !vegetables.includes('Beas'))








