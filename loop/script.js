// for(let i = 1; i<=5; i++){
//     console.log(i);
// };

// for(let i = 10; i>=1; i--){
//     console.log(i);
// };

// for(let i=10; i>=1; i = i-3) {
//     console.log(i);
// }

// for(let i=1; i<=15; i=i+2){
//     console.log(i);
// }

// console.log("backward");

// for(let i=15; i>=1; i=i-2){
//     console.log(i);
// }

// for(let i=2; i<=10; i=i+2){
//     console.log(i);
// }
//  for(let i=10; i>=1; i=i-2){
//     console.log(i);
// }

// for(let i=4; i<=50; i=i+5){
//     console.log(i)
// }

// let n = prompt("enter your number") 
// n = parseInt(n);

// for(let i=n; i<=n*10; i=i+n) {
//     console.log(i);
// }


//nested loop

for(let i=1; i<=3; i++) {
    console.log(`outer loop ${i}`);
    for(let j=1; j<=3; j++){
        console.log(j);
    }
}

//while loop

let i=1;

while(i<=5){
    console.log(i);
    i++;
}

let j=0;

while(j<=20){
    console.log(j);
    j = j+2;
}

//practis qs

// const favMovie = "race";

// let guess = prompt("guess my fav movie name");

// while( (guess != favMovie) && (guess != "quit" )) {
//     guess = prompt("wrong guess. plzzz enter again");
// }

// if(guess == favMovie){
//     console.log("congrats bro");
// }else{
//     console.log("you quit");
// }

//break

let k=0; 

while(k<=10) {
    if (k == 7) {
        break;
    }
    console.log(k);
    k++;
}

console.log("we used break at 7.");


let fruits = ["mango","apple","banana","orange","litchi"];

for(let i=1; i<fruits.length; i = i+2) {
    console.log(i,fruits[i]);
}

for(let f=fruits.length-1; f>=0;  f--) {
    console.log(f,fruits[f]);
}

//loops with array
let student = [["rohan",55],["patelbhai",80],["raj",50]];

for(let i=0; i<student.length; i++) {
    for(let j=0; j<student[i].length; j++) {
        console.log(student[i][j]);
    }
}



//for of loop

let food = ["litchi","graps","mango","apple","banana","orange"];

for(fruit of food) {
    console.log(fruit);
}

let name = "rohan"

for(char of name) {
    console.log(char);
}


// nested for of loop

let heroes = [["iron men","captain america","thor"], ["superman","spider man", "flash"]];

for(list of heroes) {
    for(hero of list){
        console.log(hero);
    }
}

