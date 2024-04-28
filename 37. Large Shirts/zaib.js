//Making a Function
function make_shirt(size, printMessage) {
    if (size === void 0) { size = "large"; }
    if (printMessage === void 0) { printMessage = "I love Typescipt"; }
    console.log("Creating ".concat(size, " size shirt with ").concat(printMessage, " message prints on shirt "));
}
// Calling function by default values
make_shirt();
// Calling function now with medium size and by default message
make_shirt("medium");
// Calling function now with small size and also different print message
make_shirt("small", "I love Programming");
