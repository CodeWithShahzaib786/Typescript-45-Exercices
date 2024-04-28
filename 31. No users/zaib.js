"use strict";
let userName = ["Umer", "Ahad", "Shahryar", "Admin", "Umair"];
userName = [];
// length funtion: ka funtion apky array k andr jitni bhi values hai unko return krta hai
if (userName.length === 0) {
    console.log("Your array is empty We need to find some users!");
}
else {
    userName.forEach(User => {
        if (User === "Admin") {
            console.log(`Hello ${User}, would you like to see a status report?`);
        }
        else {
            console.log(`Hello ${User}, thank you for logging in again.`);
        }
    });
}
