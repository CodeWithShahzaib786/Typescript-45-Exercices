// Define a function to create a car object with optional options...
function create_car(manufacturerCompany:string, model:string , ...options:any[]){
    //iniallize a car object with manufacturer and model
    let car = {
        manufacturerCompany,
        model, 
    }

    //add optional options for car object
    options.forEach(option => {
        let [key, value] = option.split(":");
        car[key] = value;
    });

    return car;
}

//Call functions to create a car object
let my_car = create_car("Honda" , "Civic" , "Color: White", "Sunroof: True", "Year: 2024");

console.log(my_car);
