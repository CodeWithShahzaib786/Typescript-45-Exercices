let numbers = [ 1,2,3,4,5,6,7,8,9];

// creating for loop 
// for loop: ka variable bhi one by one array ki values ko select krta hai or save krta hai temporary variable mai or one by one run krwata hai

for(let oneNumbers of numbers){
    let ordinal_ending : string;

    if(oneNumbers === 1){
        ordinal_ending = "st";
    }
    else if(oneNumbers === 2){
        ordinal_ending = "nd";
    }
    else if(oneNumbers === 3){
        ordinal_ending = "rd";
    }
    else{
        ordinal_ending = "th";
    }
    console.log(`${oneNumbers}${ordinal_ending}`);
}