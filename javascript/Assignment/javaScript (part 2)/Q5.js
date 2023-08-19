let a = 0;
let b = 3;
let c = 1;
// if((a>b)&&(a>c)){
//     console.log("A is largest");
// }else if((b>a)&&(b>c)){
//     console.log("B is largest");
// }else if((c>b)&&(c>a)){
//     console.log("C is largest");
// }
if(a>b){
    if(a>c){
        console.log("A is largest");
    }else{
        console.log("C is largest");
    }
}else if(b>c){
    console.log("B is largest");
    }
    else{
    console.log("C is largest");
    }