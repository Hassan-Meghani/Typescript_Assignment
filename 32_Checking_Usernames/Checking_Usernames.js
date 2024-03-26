"use strict";
// Make a list of five or more usernames called current_users.
let current_users = ['HassaN', 'HAdi', 'TaHa', 'Ahmed', 'John'];
// Make another list of five usernames called new_users.
// // Make sure one or two of the new usernames are also in the current_users list.
let new_users = ['Ibrahim', 'HassaN', 'Shabbir', 'Hamza', 'Ahmed'];
// Loop through the new_users list to see if each new username has already been used.
// If it has, print a message that the person will need to enter a new username.
// If a username has not been used.
// Print a message saying that the username is available.
new_users.forEach(newUsername => {
    let lowerCase = newUsername.toLowerCase();
    if (current_users.map(c_user => c_user.toLowerCase()).includes(lowerCase)) {
        console.log(`The username ${newUsername} is already in use. Please try different`);
    }
    else {
        console.log(`The username ${newUsername} is available.`);
    }
});
// Make sure your comparison is case insensitive.
// If 'John' has been used, 'JOHN' should not be accepted.
