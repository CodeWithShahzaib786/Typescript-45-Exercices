// Exercise 14

let guest_list: string[] = ['Umer', ' Ahed', 'Shafey', 'Sana'];
for (let i=0; i<guest_list.length; i++){
    console.log('Respected Sir/Madam  ' + guest_list[i] + ',\n  We invited you on dinner tomorrow. \n\n Thank.u \n ' )
};

// Exercise 15

let not_present: string= 'Shafey';
let new_guest: string= 'Shahryar';
guest_list[2]= new_guest;
for (let i=0; i<guest_list.length; i++){
console.log('Respected Sir/Madam  ' + guest_list[i] + ',\n  We invited you on dinner tomorrow. \n\n Thank.u \n ' );  
}
console.log(`Mr. ${not_present} will not coming tomorrw dinner \n`);

// Exercise 16
// .unshift(ka mutlab hai 0 se pehly agr apko names ko ya kisi bhi cheez koi add krna hai tou ap list k name k sth .unshift lgado)

guest_list.unshift('umair', 'ahmed','uzair');
for (let i=0; i<guest_list.length; i++){
    console.log('Respected Sir/Madam  ' + guest_list[i] + ',\n  We invited you on dinner tomorrow. \n we found big dinner table so we decided to invite 3 new people. \n\n Thank.u \n ' );  
}


// Exercise 17

// ( while lop) ya kam krta hai k apny for example 2 nam print krwany usky agy jitny bhi name hai wo apny remove krny hai tou ap while lop ka use krty hai 

console.log('\n unfortunately we cant arrive on the time so we could not arrange dinner table , we have space only two guest')
while(guest_list.length>2){
    let remove_guest = guest_list.pop();
    console.log(`Soory Mr/Mrs ${remove_guest} you are not invited for dinner.`);
}
for (let i=0; i<guest_list.length; i++){
    console.log('Respected Sir/Madam  ' + guest_list[i] + ',\n  You are still invited on tomorrow dinner.\n\n Thank.u \n ' );  
}
guest_list.splice(0,2);
console.log(guest_list);

// ( .splice ) ka kam ya hota hai k ya list ko empty bnadyta hai or puri list ko remove krdyta hai agr apny koi list ko empty bnana hai tou apny list k name k agyy ( .splice write krdyna hai..)
