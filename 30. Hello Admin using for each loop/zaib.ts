// Creating Array:

let userName = ["Umer", "Ahad", "Shahryar", "Admin" , "Umair"];

// Using for each loop condition:

// forEach: forEach ka method apky array k andr jo bhi values hai unko one by one run krwata hai


userName.forEach(User =>{
    if(User === "Admin"){
        console.log(`Hello ${User}, would you like to see a status report?`);
    } 
    else {
        console.log(`Hello ${User}, thank you for logging in again.`);
    }
})