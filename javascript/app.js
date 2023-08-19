// let pencilPrice= 10;
// let erasorPrice= 5;
// let output = " The total price is : " + (pencilPrice+erasorPrice) +" " + "Rupees."
// let output = `The total price is : ${pencilPrice+ erasorPrice} Rupees.`;
// console.log(output);
// console.log("before my if statement");
// let age = 20;
// if(age>=18){
//     console.log("elder");
// }
// // else{
// //     console.log("child");
// // }
// console.log("before my if statement");
// let marks = 200;
// if(marks>=80){
//     console.log("A+");
// }
// else if(marks >= 60){
//     console.log("A");
// }else if(marks>=33){
//     console.log("B")
// }else if(marks<33){
//     console.log("F");
// }
// alert("something gets wrong");
// console.log("this is an error log");
// console.error("this is an error log");
// console.warn("this is an war log");
// let firstName = prompt("enter your name");

// console.log(firstName)
// let msg= "     hello     ";
// console.log(msg);
// let pass = prompt("set your password");
// let newpass = pass.trim();
// console.log(newpass);
// let num1 = 10;
// let num2 = 2;
// // let output = "The total price is:" + " " + (num1 + num2)+"rupees";
// // console.log(output);
// let output = `The total price is: ${num1+num2} rupees.`;
// console.log(output);
// let c = "ritesh";
// console.log(c[c.length-4]);
// let name = prompt("enter name");
// let age = prompt("enter age");
// let msg = `${name} is ${age} years old.`;
// alert(msg);
// let msg = "    he llo    ";
// let pass = prompt("set your pass");
// let newpass = pass.trim();
// console.log(pass);
// let name = "Ritesh sharma";
// let msg = "error";
// console.log(msg.toUpperCase(msg[2]));
// let str = "IloveCoding";
// let newstr = str.toUpperCase().trim();


// let students = ["aman", "ritesh" , "kuldeep"];
// let colors = ["red", "yellow","blue","orange","pink","white"];
// let secondary = ["orange", "green", "violet"];

// let num = [[1,2],[3,4],[5,6]];

// LOOPS

// for(let i = 1; i<=10; i++){
//     console.log(i);
// }


// for(let i = 5; i>=1; i--){
//     console.log(i);
// }
 // even number
// for(let i = 1; i<=15; i++){ // i = 2 and i = i + 2
//     if(i%2==0){
//         console.log(i);
//     }
// }

// odd number
// for(let i = 1; i<=15; i++){ //i = i + 2
//     if(i%2!=0){
//         console.log(i);
//     }
// }
// for(let i = 1; i<=10; i++){
//     console.log(5*i);
// }
// for(let i = 1; i<=3; i++){
//     for(let j =1; j<=3; j++){
//         console.log(j);
//     }
// }
// let i  = 1;
// while(i<=10){
//     console.log(i);
//     i++;
// }
// let favmovie = "don";
// let guess = prompt("enter movie name");

// while(guess != favmovie){
//     if(guess == "quite"){
//         console.log("you quite");
//         break;
//     }
//     guess = prompt("guess wrong please and  enter again movie name");
// }
// if(guess == favmovie){
//     console.log("congrates");
// }


// let i = 1;
// while(i<=10){
//     if(i == 3){
//         break
//     }
//     console.log(i);
//     i++;
// }
// let fruits = ["mango", "apple", "banana", "litchi","orange"];
// for(let i = fruits.length - 1; i>=0;i--){
//     console.log(i,fruits[i]);
// }
// let heroes = [
//     ["ironman", "spiderman", "thor"],
//     ["superman", "wonder woman", "flash"]
// ];

// for(let i = 0; i< heroes.length; i++){
//     console.log(`List #${i}`);
//     for(let j = 0; j<heroes[i].length; j++){
//         console.log(heroes[i][j]);
//     }
// }

// let student = [["aman", 95], ["shradha", 96], ["Ritesh", 100]];

// for(let i = 0; i<student.length; i++){
//     console.log(`info of student ${i+1}`);;
//     for(let j = 0; j< student[i].length; j++){
//         console.log(student[i][j]);
//     }
// }

// let fruits = ["mango", "apple", "banana", "litchi","orange"];

// for(fruit of fruits){
//     console.log(fruit);
// }

// for(char of "apnacollege"){
//     console.log(char);
// }


// let heroes = [
//         ["ironman", "spiderman", "thor"],
//         ["superman", "wonder woman", "flash"]
//     ];

// for(i of heroes){
//     for(j of i){
//         console.log(j);
//     }
// }
//


// javascript part 5

// const student = {
//     name: "Ritesh",
//     age: 20,
//     marks: 88,
//     city: "jaipur"
// };
// console.log(student["name"]);

// const obj = {
//     1: "a",
//     2: "b",
//     true: "c",
//     null: "d",
//     undefined: "e"
// }
// console.log(obj[true]);

// const classInfo = {
//     Ritesh: {
//         grade: "A+",
//         city: "Delhi"
//     },
//     Shivani : {
//         grade: "A",
//         city: "pune"
//     }
// };

// const classinfo = [
//     {name: "aman",
//     grade: "A+",
//     city: "Delhi"
//     },
//     {name: "ritesh",
//     grade: "A+",
//     city: "jaipur"
//     },
//     {name: "shivani",
//     grade: "A+",
//     city: "noida"
//     },
// ];
// classinfo.push({name: "shradha", grade: "B", city: "kukas"});

// js part 5
// function hello(name, age){
//     console.log(`${name} is ${age} year old`);
// }
// hello();
// hello();
// hello();
// hello();
// hello("Ritesh", 19);
// hello("shivani" , 19);

// function sum(n,m){
//     let c = n+m;
//     return c;
// }
// let a = sum(sum(12,144), 14);
// c = 12;




// sum(1,2);
// sum(1);

// let sum = function(a,b){
//     return a+b;
// }
// console.log(sum(2,3));

// function multipleGreet(func, n){
//     for(let i = 1; i<=n; i++){
//     func();
//     }
// }

// let greet = function(){
//     console.log("hello");
// }

// multipleGreet(greet , 200);

// function oddEvenTest(request){
//     if(request == "odd"){
//         return function(n){
//             console.log(!(n%2==0));
//         }
//     }else if(request == "even"){
//         return function(n){
//             console.log(n%2==0);
//         }
//     }else{
//         console.log("wrong request");
//     }
// }
// let request = "odd";
// let n = oddEvenTest("odd");

// const calculator = {
//     add: function(a,b){
//     return a+b;
//     },
//     sub: function(a,b){
//     return a-b;
//     },
//     mul: function(a,b){
//     return a*b;
//     }
// }

// const calculator = {
//     add(a,b){
//     return a+b;
//     },
//     sub(a,b){
//     return a-b;
//     },
//     mul(a,b){
//     return a*b;
//     }
// }
// Javascript 7
const student ={
    name:"ritesh",
    age: 23,
    eng: 95,
    math: 93,
    phy: 97,
    getAvg(){
        console.log(this);
        let avg = (this.eng+this.math+this.phy)/3;
        console.log(`${this.name} got avg marks = ${avg}`);
    }
};

function    getAvg(){
    console.log(this);
}