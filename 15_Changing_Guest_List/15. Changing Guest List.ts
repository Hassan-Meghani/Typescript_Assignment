let Guest_list :string[] = ['Ahmed Shahid','Taha Khan','Hussain Ali'];
for(let i=0; i<Guest_list.length; i++){
    console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is my pleasure to invite you in a small get together.\n\nThank You!\n\n')
}
let absent_Guest :string = 'Ahmed Shahid';
let new_Guest :string = 'Munir Ahmed';
Guest_list[0] = new_Guest ;
for(let i=0; i<Guest_list.length; i++){
    console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is my pleasure to invite you in a small get together.\n\nThank You!\n\n')
}
console.log(`Mr. ${absent_Guest} is not coming to the get together.`)