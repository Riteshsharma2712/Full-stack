let number = 287;
let count = 0;
let r = number;
while(number){
    // r = number % 10;
    count++;
    number = Math.floor(number/10);
}
console.log(count);