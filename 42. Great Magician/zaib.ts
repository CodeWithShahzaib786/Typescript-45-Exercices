function show_magician(magician : string[]){
    magician.forEach(name => console.log(name))
}

//function to make magician great through .map() it will modify array
function make_great(magician: string[]){
    return magician.map(name => `The Great ${name}`);
}
// define ARRAY containing magician name:

let magician_name = ["Shahzaib", "Ali" , "Awais"]

// call make great function to modify magician_names
let great_magician = make_great(magician_name)

// call show_magician that show modify list of magician
show_magician(great_magician);


