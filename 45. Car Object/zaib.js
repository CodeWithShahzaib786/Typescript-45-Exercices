// Define a function to create a car object with optional options...
function create_car(manufacturerCompany, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    //iniallize a car object with manufacturer and model
    var car = {
        manufacturerCompany: manufacturerCompany,
        model: model,
    };
    //add optional options for car object
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key] = value;
    });
    return car;
}
//Call functions to create a car object
var my_car = create_car("Honda", "Civic", "Color: White", "Sunroof: True", "Year: 2024");
console.log(my_car);
