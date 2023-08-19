let greet = "hello";  // global scope

function changeGreet(){
    let greet = "namaste"; // function scope
    console.log(greet);
    function innerGreet(){
        console.log(greet); // lexical scope
    }
    innerGreet(); // only in function access it
}

console.log(greet);
changeGreet();
