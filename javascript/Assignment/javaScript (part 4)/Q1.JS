let arr = [1,2,3,4,5,6,2,3];
n = 2;
let idx;

for(let i = 0; i<arr.length; i++){
    if(n == arr[i]){
        idx = i;
        arr.splice(idx, 1);
    }
}
console.log(arr);