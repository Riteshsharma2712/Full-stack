let max = prompt("enter max value");
// max = parseInt(max);
let random = Math.floor(Math.random()*max)+1;
let guessValue =  prompt("guess value");
while(true){

    if(guessValue == "quite"){
        console.log("quite");
        break;
    }
    // guessValue = parseInt(guessValue);
    if(random == guessValue ){
        console.log(`${guessValue} is correct`);
        break;
    }else if(guessValue < random){ 
        guessValue = prompt("guess value is too small try again ##Hint = try larger value");
    }else if(guessValue > random){ 
        guessValue = prompt("guess value is too larger try again ##Hint = ty smaller value");
    }
}
