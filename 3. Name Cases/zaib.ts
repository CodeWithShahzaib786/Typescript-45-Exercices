// lower case
let personName: string ="Shahzaib"
console.log("lowecase:", personName.toLowerCase());

// upercase
console.log("uppercase:", personName.toLocaleUpperCase());

// titlecase
console.log("titlecase:", personName.replace(/\bw/g,c => c.toUpperCase()));