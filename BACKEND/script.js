// let n = 5;

// for(let i = 0; i<n; i++){
//     console.log("hello, ", i);
// }

// console.log("bye!");

// console.log(process.argv);

// let args = process.argv
// for(let i = 0; i<args.length; i++){
//     console.log("hello to ", args[i]);
// }


// const math = require("./math");

// console.log(math);
// console.log(math.sum(2, 2));
// console.log(math.PI);

// const info = require("./Fruits");

// console.log(info[0].name);

// const figlet = require("figlet");

// figlet("Ritesh Sharma", function (err, data) {
//     if (err) {
//         console.log("Something went wrong...");
//         console.dir(err);
//         return;
//     }
//     console.log(data);
// });


import { sum , PI } from "./math.js";
import { generate, count } from "random-words";

// console.log(sum(1,2))
console.log(generate());