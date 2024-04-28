"use strict";
// Creating two Arrays
let current_users = ["Ali", "Sana", "Umer", "Ahed", "Uzair"];
let new_users = ["Shahzaib", "Shafey", "sana", "Hammad", "uzair"];
new_users.forEach(new_one_users => {
    let our_conditions = (current_users.some(current_one_user => current_one_user.toUpperCase() === new_one_users.toUpperCase()));
    if (our_conditions) {
        console.log(`Soory ${new_one_users} is already taken.`);
    }
    else {
        console.log(`${new_one_users} username is available`);
    }
});
