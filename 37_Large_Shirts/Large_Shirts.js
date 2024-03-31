"use strict";
// Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
// Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size = 'Large', text = 'I love TypeScript') {
    console.log(` Creating the ${size} shirt and the message printed on it: ${text}`);
}
make_shirt();
make_shirt('Medium');
make_shirt('Small', 'I love you');
