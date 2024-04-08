//call stack 

function hello() {
    console.log("inside hello function")
    console.log("hello")
}

function demo() {
    console.log("calling demo function");
    hello()
}

console.log("calling demo funx");
demo()
console.log("done, ok");


//example 

function one() {
    return 1; 
}

function two() {
    return one() + one();
}

function three() {
    let ans = one() + two();
    console.log(ans);
}
three();