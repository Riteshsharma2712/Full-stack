let arr = [7, 9, 0, -2];
let n = 3;

// arr.reverse();
// ans = arr.slice(0,n)
// ans.reverse();
// console.log(ans);

// ans = arr.slice(arr.length-n);
// console.log(ans);

arr.splice(0,arr.length-n);
console.log(arr);
