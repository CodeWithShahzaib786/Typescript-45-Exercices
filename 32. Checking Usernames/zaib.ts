// Exercise 32

// Array current username
let current_users =["Ali","Sana","Umer","Ahed","Uzair"];

// Array new username:
let new_users = ["Shahzaib", "Shafey", "sana", "Hammad", "uzair"];

new_users.forEach(new_one_users => {
    
    // Making a condition for username already exist and save in our_conditions variable
    let our_conditions =  (current_users.some(current_one_user => current_one_user.toUpperCase() === new_one_users.toUpperCase()))
    // some: some ka function one by one hamary array ki values ko check krta hai or dono array ko compare krwata hai 
     
    if(our_conditions){
        console.log(`Soory ${new_one_users} is already taken.`);
    }
    else{
        console.log(`${new_one_users} username is available`);
    }
})
