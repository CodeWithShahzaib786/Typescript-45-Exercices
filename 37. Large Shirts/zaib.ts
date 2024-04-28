//Making a Function

function make_shirt(size:string = "large" , printMessage : string = "I love Typescipt"){
    console.log(`Creating ${size} size shirt with ${printMessage} message prints on shirt `)
}
// Calling function by default values
make_shirt();

// Calling function now with medium size and by default message
make_shirt("medium");

// Calling function now with small size and also different print message
make_shirt("small" , "I love Programming")