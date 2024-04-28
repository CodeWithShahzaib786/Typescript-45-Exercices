function show_magician(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
// define ARRAY containing magician name:
var magician_name = ["Shahzaib", "Ali", "Awais"];
// call function to print each magician name
show_magician(magician_name);
