function longestName(arr){
    let ansInx = 0;
    for(let i = 0; i<arr.length; i++){
        let ansLen = arr[ansInx].length;
        let currLen = arr[i].length;
        if(currLen > ansLen){
            ansInx = i;
        }
    }
    return arr[ansInx];
}

let country = ["Australia", "Germany", "United States of America","India"];
let output = longestName(country);
console.log(output);