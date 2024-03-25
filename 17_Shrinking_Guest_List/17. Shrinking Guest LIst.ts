let Guest_list :string[] = ['Ahmed Shahid','Taha Khan','Hussain Ali'];

// for(let i=0; i<Guest_list.length; i++){
//     console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is my pleasure to invite you in a small get together.\n\nThank You!\n\n')
// }

let absent_Guest :string = 'Ahmed Shahid';
let new_Guest :string = 'Munir Ahmed';
Guest_list[0] = new_Guest ;

// for(let i=0; i<Guest_list.length; i++){
//     console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is my pleasure to invite you in a small get together.\n\nThank You!\n\n')
// }

console.log(`Mr. ${absent_Guest} is not coming to the get together.`);
console.log('Good News! We found a Big Space So we are inviting 3 more guests.')
Guest_list.unshift('Mr Rafay Jalbani')
Guest_list.splice(2 , 0 , 'Bisma Sultana');
Guest_list. push('Maryam Irshad');

for(let i=0; i<Guest_list.length; i++){
    console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is my pleasure to invite you in a small get together.\n\nThank You!\n\n')
}

console.log('\nSorry we can not arrange the big space, Only two guest will be invited.');

while(Guest_list.length > 2){
  let remove_Guest = Guest_list.pop();
  console.log(`Sorry Mr. ${remove_Guest}, You are not invited in get together.`);
}

for(let i=0; i<Guest_list.length; i++){
    console.log('Dear Mr. ' + Guest_list[i] + ',\n\nYou are still invited.\n\nThank You!\n\n')
}

Guest_list.splice(0, 2);

console.log(Guest_list);