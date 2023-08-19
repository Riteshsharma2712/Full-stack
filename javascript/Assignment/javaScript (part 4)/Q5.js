let arr = [2,,34,34,,87,98,56];
let larger = arr[0];

for(let i = 0; i<arr.length; i++){
    if(arr[i]> larger){
        larger = arr[i];
    }
}
console.log(`larger value in array ${larger}`);