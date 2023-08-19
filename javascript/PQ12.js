//FAVORITE MOVIE CHOOSE GAME 

let fav = "don";
let guess = prompt("guess fav movie");

while((guess != fav)&&(guess != "quite")){
    guess = prompt("wrong ans please try again");
}

if(guess == fav){
    console.log("chiken dinner");
}else{
    console.log("you quite");
}
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

