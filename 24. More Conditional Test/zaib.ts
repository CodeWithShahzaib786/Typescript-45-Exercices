// More Conditional Test:
// Make Variables:

let mango = "mango";
let uppercase = "MANGO";
let five = 5;
let ten = 10;
let colors = ['red', 'yellow' , 'green'];

//equality and unequality test:

console.log("\n Is mango is equal to mango?");
console.log(mango == "mango");   // == comaparasion operator hai or ya boolean type mai ans dyta hai..

console.log("\n Is mango is not equal to mango?");
console.log(mango != "mango");

// using lowercase function

console.log("\n is MANGO is equal to mango after converting lowercase function");
console.log(uppercase.toLowerCase() == "mango");

console.log("\n is MANGO is  not equal to mango after converting lowercase function");
console.log(uppercase.toLowerCase() != "mango");

// Numerical test:

//equality and unequality:

console.log("\n is five is  not equal to 10?");
console.log( five != ten);

console.log("\n is five is  equal to 10?");
console.log( five == ten);

//greater than or less than test:

console.log("\n is ten is greater than five?");
console.log(ten > five );

console.log("\n is ten is less than five?");
console.log(ten < five );

//greater than or equal to test:

console.log("\n is ten is greater than or equal to five ?")
console.log(ten >= five);

//less than or equal to test:

console.log("\n is ten is less than or equal to five?");
console.log(ten <= five);

// using && (and) operator:
//&& : and k operator mai koi aik condition bhi false hogai wo dono condition ka ans false print krwai ga

console.log("\n is ten is greater than 5 and ten is not equal to 5? ");
console.log(ten > five && ten != five);

console.log("\n is ten is not equal to 5 and ten is less than 5");
console.log(ten != five && ten < five);

// using or operator ( || )
// ||: or k operator mai koi aik conditon bhi true hui tou wo dono condition ka ans true print kry ga.

console.log("\n is ten is less than twenty or ten is equal to twenty?");
console.log(ten < 20 || ten != 20);

console.log("\n is five is equal to ten or five is greater than 10 ");
console.log(five == ten || five > ten);

//Test whether an item is in a array:

console.log("\n is yellow color include in my color array?");
console.log(colors.includes("yellow"));

//Test whether an item is in a array

console.log("\n is red color is not include in my color array");
console.log(!colors.includes("red"));




















