function largerNum(arr , num){
    for(let i = 0; i<arr.length; i++){
        if(num < arr[i]){
            console.log(i , arr[i]);
        }
    }
}

let arr = [2,3,42,322,344,874,987];
let num = 765
largerNum(arr , num);