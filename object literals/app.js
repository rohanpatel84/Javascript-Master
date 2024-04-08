//object  literals

const students = {
    name: "rohan",
    age: "23",
    marks: 50,
    city: "ahmedabad",
};

// console.log(students);

//twitter post example

const post = {
    username: "@rohan84patel;",
    content: "this my firstpost",
    like: 150,
    report: 5,
    tags: ["delta","alpha"],
};

// object of objects
const classInfo = {
    rohan : {
        marks:50,
        grade:"a"
    },
    raj : {
        marks:80,
        grade:"b"
    },
    dhruv : {
        marks:60,
        grade:"c"
    },
};

//array of object
const classInfor = [
    {   name: "rohan",  
        marks: 50,
        grade: "A",
    },
    {   name: "rahul",  
        marks :50,
        grade: "A+",
    },
    {   name: "mahul",  
        marks: 50,
        grade: "C",
    },   
];

//math object

//math properties

Math.PI 
Math.E  

//math method
Math.abs 
Math.ceil
Math.floor
Math.pow
Math.random  //most use 

//math practices

Math.floor(Math.random() * 100) +1;

//game practices 

// const max = prompt("enter max mumber")
// const random = Math.floor(Math.random() * max) +1;
// let guess = prompt("guess the number")

// while(true) {
//     if(guess == "quit") {
//         console.log("user quit");
//         break;
//     }
//     if(guess == random) {
//         console.log("you are right! congrats!! random number was", random);
//         break;
//     }else if(guess < random) {
//         guess = prompt("hint: your guess was to small.please enter again");
//     }else{
//         guess =prompt("hint: your guess was to large.please enter again");
//     }
// }

//final practices 1

Math.floor(Math.random() * 6) +1;


//final practices 2 // print color

const car = {
    name: "creta",
    model: "top model",
    color: "white",
};

//final practices 3 // change city name and add country name

const person = {
    name: "rohan",
    age: 25,
    city: "mumbai",
};

//this keyword

const studentsMarks = {
    name: "rohan",
    age: "23",
    eng: 90,
    maths: 60,
    phy: 40,
    getAvg() {
        console.log(this)
        let avg = (this.eng + this.maths + this.phy) /3;
        console.log(avg);
    }
}

//try and catch

//use thay che jya aapne bik hoy che error nai aave ne?? otherwise kaik new varibale use karta hoy jeh hoie j nai.

console.log("hello")
console.log("hello")

try{
    console.log(a);
}catch{
    console.log("catch an err...a not defind");
}
console.log("hello2")
console.log("hello2")

// second option

console.log("hello ji")
console.log("hello guys")

try{
    console.log(b);
}catch{
    console.log("catch an error.... b not defind");
}
console.log("hello ji2")
console.log("hello guys2");

