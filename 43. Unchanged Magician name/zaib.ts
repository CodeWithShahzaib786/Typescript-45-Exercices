function show_magician(magician : string[]){
    magician.forEach(name => console.log(name))
}

//function to make magician great through .map() it will modify array
function make_great(magician: string[]){
    return magician.map(name => `The Great ${name}`);
}
// define ARRAY containing magician name:

let magician_name = ["Shahzaib", "Ali" , "Awais"]

// Create copy of the array of magician_name:
let copy_magician_name = magician_name.slice()

//Modify the copied array to include make_Great function with their names
let copy_great_magician = make_great(copy_magician_name)

// Show both arrays original and copied

//Original
console.log("Original Array \n");
show_magician(magician_name);

//copied
console.log("\n Copied Array \n");
show_magician(copy_great_magician);


