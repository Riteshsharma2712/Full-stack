let msg = "help!";
let newmsg = msg.trim().toUpperCase();
console.log(newmsg);

let name = "ApnaCollege";
// name.slice(4,9);                ->>  Colle
// name.indexof("na");             ->>  2
// name.replace("Apna", "Our");    ->>  OurCollege

// let newname = name.slice(4).replace("l", "t");
// console.log(newname.replace("l", "t"));
let newname = name.slice(4).replace("l", "t").replace("l","t");
console.log(newname);