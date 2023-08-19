function getUnique(str){
    let ans = " ";
    for(let i = 0; i<str.length; i++){
        let currentCha = str[i];
        if(ans.indexOf(currentCha) == -1){
            ans = ans + currentCha;
        }
    }
    return ans;
}

let a = "abcdabcdefgggh";
let newstr = getUnique(a);
console.log(newstr);