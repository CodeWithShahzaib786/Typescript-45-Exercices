function show_magician(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
//function to make magician great through .map() it will modify array
function make_great(magician) {
    return magician.map(function (name) { return "The Great ".concat(name); });
}
// define ARRAY containing magician name:
var magician_name = ["Shahzaib", "Ali", "Awais"];
// call make great function to modify magician_names
var great_magician = make_great(magician_name);
// call show_magician that show modify list of magician
show_magician(great_magician);
