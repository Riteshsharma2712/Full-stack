let number = 123;
let sum = 0;
let r = number;

while(number){ // 0 < number
    r = number%10;
    sum = sum + r;
    number = Math.floor(number/10);
}
console.log(sum);
