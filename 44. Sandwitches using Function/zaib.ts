// Define function with rest parameter:
function Sandwitch(...items: string[]){
    console.log("\n Make Sandwitch with following number of items: \n");
    items.forEach(singleItem => console.log(singleItem));
    console.log("\n Enjoy new type of Sandwitch ");
};

//Call function 3 times with different number of arguments:
Sandwitch("Chicken","Chesse");

Sandwitch("Chicken", "Mayo", "Tomato");

Sandwitch("Bread", "Tomato" , "Egg" , "Butter", "Kabab");