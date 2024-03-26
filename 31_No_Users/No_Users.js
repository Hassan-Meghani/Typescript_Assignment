"use strict";
// Add an if test to Exercise 30 to make sure the list of users is not empty.
let userNames = ['Admin', 'Ali', 'Sameer', 'Mussavir', 'Aahil'];
// If the list is empty.
// Print the message We need to find some users!
if (userNames.length === 0) {
    console.log('We need to find some users !');
}
// Remove all of the usernames from your array.
// And make sure the correct message is printed.
else {
    userNames = [];
    console.log('All User Names have been removed. ' + userNames.length);
}
