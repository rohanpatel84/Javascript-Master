let btn = document.querySelector("button")

// simple function for onclick

// btn.onclick = function() {
//     // console.log("button was cliked");
//     alert("button was cliked");
// }


//addEventsLister click

// btn.addEventListener("click" , function() {
//     console.log("button was clicked");
// })

//addEventsLister dblclick

// btn.addEventListener("dblclick" , function() {
//     console.log("button was double clicked");
// })

//mouseover and mouseenter

let div = document.querySelector("div");

// div.onmouseover = () => {
// console.log("mouse over on me");
// }

div.addEventListener("mouseover" , function() {
    console.log("mouse over on me");
})


// this in EventLister 

btn.addEventListener("click" , function() {
    console.log(this.innerText);
    this.style.backgroundColor = "blue";
})

//

let p = document.querySelector("p");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");

function changeColor() {
    console.log(this.innerText);
    this.style.backgroundColor = "blue";
}

p.addEventListener("click", changeColor);
h1.addEventListener("click", changeColor);
h3.addEventListener("click", changeColor);




// Keyborad Events

let inp = document.querySelector("input");

inp.addEventListener("keydown" , function(event) {
    console.log("key = ", event.key);
    console.log("code = ", event.code);
    console.log("key was pressed down")
})

// inp.addEventListener("keyup" , function(event) {
//     console.log("key = ", event.key);
//     console.log("code = ", event.code);
//     console.log("key was pressed up")
// })

// inp.addEventListener("keypress" , function(event) {
//     console.log("key = ", event.key);
//     console.log("code = ", event.code);
//     console.log("key was pressed")
// })

// inp.addEventListener("keydown" , function() {
//     console.log("key was relesed")
// })


// form Events


let form = document.querySelector("form");

form.addEventListener("submit" , function(event) {
    event.preventDefault();
  
    // let inp = document.querySelector("input");
    // console.dir(inp);

    // let user = document.querySelector("#user");
    // let pass = document.querySelector("#pass");

    // let user = this.elements[1];
    // let pass = this.elements[0];

    // console.log(user.value);
    // console.log(pass.value);
});

// change Events  // inital and final between change track kare che

   let userChange = document.querySelector("#user");
    user.addEventListener("change" , function() {
        console.log("change event");
        console.log("final value = " , this.value);
    });

// input Events  // short change thay to pn fire thie jase
//non character  key input ne trigger nai kati only character key trigger kare che 

let userInput = document.querySelector("#user");
user.addEventListener("input" , function() {
    console.log("input event");
    console.log("final value = " , this.value);
});

//textediter project

let input = document.querySelector("#text");
let para = document.querySelector("p");

input.addEventListener("input", function() {
    console.log(input.value);
})

//event bubbling

let divv = document.querySelector("div");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");


divv.addEventListener("click", function() {
    console.log("div was clicked");
});

ul.addEventListener("click", function() {
    console.log("ul was clicked");
});

for(li of lis) {
li.addEventListener("click", function() {
    console.log("li was clicked");
});
}