// Make a array of five or more usernames.
// Including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website.
// Loop through the array.
// Print a greeting to each user.
const userNames: string[] = ['Admin','Umair','Wahib','Zubair','Rafay'];
for(let i=0; i<userNames.length; i++){
    if(userNames[i] === 'Admin')

// If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?    
    {
        console.log('Hello Admin, would you like to see a status report?')
    }

// Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.    
    else{
        console.log(`Hello ${userNames[i]}, thank you for logging in again.`)
    }
}