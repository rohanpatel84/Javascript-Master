//conditional statement

// if statement
age = 15;
if (age >= 18) {
    console.log("you can vote");
}
if(age <= 18) {
    console.log("you cannot vote");
}

//trafficLight system

let trafficLight = "green";

if (trafficLight == "red") {
    console.log("stop! light color is red" );
}
if (trafficLight == "yellow") {
    console.log("you can wait and move! light color is yellow");
}
if (trafficLight == "green") {
    console.log("you can move! light color is green");
}

// if-else statement
let newAge = 15;

if (newAge >= 18) {
    console.log("you can drive");
}
else {
    console.log("you cannot drive");
}

//else-if statement

age = 23;
if (age >= 18) {
    console.log("you can vote");
}
else if(age <= 18) {
    console.log("you cannot vote");
}

// pratice qs

let marks = 22;

if (marks >= 85) {
    console.log("A+");
}
else if (marks >= 60) {
    console.log("A");
}
else if (marks >= 33) {
    console.log("B");
}
else if (marks < 33) {
    console.log("FAIL");
}



// pratice qs
let color = "black";

if (color == "red") {
    console.log("stop! light color is red" );
}
else if(color == "yellow") {
    console.log("you can wait and move! light color is yellow");
}
else if (color == "green") {
    console.log("you can move! light color is green");
}
else {
    console.log("Light is broken");
}

// pratice qs

let popcornSize = "S";

if (popcornSize == "XL") {
    console.log(" price is 250 for extra large box");
}
else if (popcornSize == "L") {
    console.log("price is 200 for large box");
}
else if (popcornSize == "M") {
    console.log("price is for medium box");
}
else if (popcornSize == "S") {
    console.log("price is for small box");
}
else {
    console.log(" All popcorn size is sold not available");
}


// nested if else statement


let newMarks = 85;
if (newMarks >= 33) {
    console.log("pass");
    if(newMarks >= 80){
        console.log("grade: A+");
    } else{
        console.log("grade: A");
    }
}
else{
    console.log("Butter luck next time bro");
}



// pratice qs
let str = "apple ";

if ((str[0] === "a")&&(str.length>3)) {
    console.log("good string");
}
else{
    console.log("not a good string");
}

if (true) {
    console.log("it has true value");
}
else{
    console.log("it has false value"); 
}


//switch statement

let newColor = "yellow";

switch(newColor) {
    case "red":
        console.log("stop");
        break;
    case "yellow":
        console.log("slow down");
        break;  
    case "red":
        console.log("go");
        break;  
    default :
    console.log("broken light");
}

// pratice qs

let day = "8";

switch(day) {
    case "1":
        console.log("monday");
        break;
    case "2":
        console.log("tuseday");
        break;  
    case "3":
        console.log("wenseday");
        break;  
    case "4":
        console.log("thursday");
        break;  
    case "5":
        console.log("friday");
        break;
    case "6":
        console.log("saturday");
        break;  
    case "7":
        console.log("sunday");
        break;    
    default :
    console.log("no more day in one week");
}


//truthly and falsy

let string = "";

if(string) {
    console.log("String not a empty");
}
else("String is empty");

// alert("something is wrong");
// alert("danger");


// let firstName = prompt("enter your name: ");
// console.log(firstName);


