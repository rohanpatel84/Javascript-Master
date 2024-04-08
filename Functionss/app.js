//function

function printName() {
    console.log("hello rohan welcome to JS");
}
printName()


function isAudlt() {
    let age = 20;
    if(age >= 18) {
        console.log("adult");
    }
    else{
        console.log("not adult");
    }
}
isAudlt();

function print1to5() {
    for(let i=1; i<+5; i++) {
        console.log(i);
    }
}
print1to5()

//pratice qs


function printPoem() {
     console.log("twinke twinkle little star");
     console.log("how i am wonder what ypu are");
}
printPoem();

//function with argument 


function myfunction(msg) {   // parameter --> input
  console.log(msg); 
}
myfunction("i am learning function in JS.");  // argument

//pratice qs


function printInfo(name,age) {
    console.log(`${name} age is ${age}`);
    // console.log(age);
    // console.log(name);
}
printInfo("rohan",23); 


function sumCalu (a, b) {
    console.log(a + b);
}

sumCalu(2,10);
sumCalu(500,400);

function caluAvg (a,b,c) {
    let avg = (a+b+c)/3;
    console.log(avg);
}

caluAvg(20,85,33);

function tableNum(n) {
    for(let i=n; i<=n*5; i+=n) {
        console.log(i)
    }  
}
tableNum(8);

// return function


function isAudlt(age) {
    if(age>=18) {
        // console.log("adult");
        return "adult";
    }else {
        // console.log("not adult")
        return "not adilt";
    }
}

console.log(isAudlt(2));

//pratice qs


function getSum(n) {
    let sum = 0;

    for(let i=1; i<=n; i++) {
        sum += i;
    }
    return sum;
}


//scope

//funcation scope  // varible defind inside function are not visible

let sum = 50; //global scope

function caluSum(a,b) {
    let sum = a + b ;  //funcation scope
    console.log(sum);
}

caluSum(1,2);
console.log(sum);


//block scope     // if statement and conditional statement keh outside cannot access.

for(let i=1; i<=5; i++){
    console.log(i) // block scope
} 
// console.log(i)    // outside cannot access in loops and if-else  statements.


//pratice qs

let greet = "hello";

function changeGreet() {
    let greet = "namste";
    console.log(greet);

    function innerGreet() {
    console.log(greet);
    }

    // innerGreet(); 
}

console.log(greet);
changeGreet();


//higher order function 

function multipleGreet(func, count) {
    for(let i=1; i<=count; i++); {
        func();
    }
}

let finalGreet = function() {
    console.log("namste guys");
}

multipleGreet(finalGreet, 100);


//higher order function  return

function oddOrEvenFactory (request) {
    if(request == "odd") {;
        return function(n) {
        console.log(!(n%2 == 0));
        }
    } else if(request == "even") {
        return function(n) {
            console.log(n%2 == 0);
        }
    } else {
        console.log("wrong request");
    }
}

//function method

const calculator = {
    add(a,b) {
        return a + b;
    },
    sub(a,b) {
        return a - b;
    }
};


//arrow function 

const totalSum = (a, b) => {
    console.log(a+b);
}
totalSum(5,10)

const cube = (n) => {
    console.log(n*n*n)
};
cube(3);

const pow = (a,b) => {
    console.log(a**b);
}
pow(6,3)

const hello = () => {
    console.log("hello namaste");
}
hello();

//settimeout function

// console.log("hi there");

// setTimeout( ()=> {
//     console.log("our company");
// }, 2000);

// console.log("welcome to");

//setInterval function


// let id = setInterval( ()=> {
//     console.log("hello world")
// }, 1000);

// console.log(id);

// let id2 = setInterval( ()=> {
//     console.log("hello namste")
// }, 1000);

// console.log(id2);


//this with arrow function

const students = {
    name:"aman",
    marks: 95,
    prop: this, //global scope
    getName: function () {
        console.log(this);
        return this.name;
    },
    getMarks: () => {
        console.log(this); //parent scope --> window
        return this.marks;
    },
    getInfo1: function () {
        setTimeout(() => {
            console.log(this); //student
        }, 2000);
    },
    getInfo2: function () {
        setTimeout(function() {
            console.log(this);  //window
        })
}
};

//final practice qs

const square = (n) => {
    return n*n 
}
console.log(square(4));
console.log(square(9));

let id = setInterval(() => {
    console.log("hello world")
}, 2000);

setTimeout(() => {
    clearInterval(id);
    console.log("clear interval")
}, 10000);

