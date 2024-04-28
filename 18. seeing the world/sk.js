var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// 	Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
var visitPlaces = ['bangok', 'canada', 'austrailia', 'dubai'];
console.log("original order: ", visitPlaces);
// • Print your array in alphabetical order without modifying the actual list.
// ...or agy list ka name jiski copy bnani hai ya ... copy bnany k liye use hoty hai 
// .sort ka function hamari list ko order mai arrange krdyta hai  ..
console.log("alphabetical order:", __spreadArray([], visitPlaces, true).sort());
// • Show that your array is still in its original order by printing it.
console.log("still in original order:", visitPlaces);
// Print your array in reverse alphabetical order without changing the order of the original list.
console.log(" reverse alphabetical order:", __spreadArray([], visitPlaces, true).reverse());
// • Show that your array is still in its original order by printing it again.
console.log("original order: ", visitPlaces);
// • Reverse the order of your list. Print the array to show that its order has changed.
console.log("reverse original order: ", visitPlaces.reverse());
// Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("back to original order : ", visitPlaces.reverse());
// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("sorted alphabetical order :", visitPlaces.sort());
// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("reverse original order: ", visitPlaces.reverse());
