//getElementById 


// let heading = document.getElementById("heading-id")
// console.log(heading);

// let button = document.getElementById("button-id")
// console.log(button);



//getElementsByClassName 


// let headingclass = document.getElementsByClassName("heading-class")
// console.log(headingclass);

//getElementsByTagName


// let para = document.getElementsByTagName("p")
// console.log(para);


// querySelector and querySelectorAll


// let firstEl = document.querySelector("p")   //return first element
// console.dir(firstEl);

// let firstall = document.querySelectorAll("p")   //return first element
// console.dir(firstall);

// let classfirstEl = document.querySelector(".heading-class")   //return first element
// console.dir(classfirstEl);

// let classfirstall = document.querySelectorAll(".heading-class")   //return first element
// console.dir(classfirstall);

// let firstidEl = document.querySelector("#button-id")   //return first element
// console.dir(firstidEl);


//dom properties

//tagName
//innerText        //jeh aapdi screen par hoy yeh batve che.
//innerHTML        //html markupe ne batve che.
//textContent      //actual html file ma jeh lakhyu hoy yeh batve che.


//dom properties practice qs


// let div = document.querySelector("div") 
// console.dir(div);

// let h2 = document.querySelector("h2")
// console.dir(h2.innerText);

// h2.innerText = h2.innerText + " learn from youtube."

// let divs = document.querySelectorAll(".box")
// console.log(divs[0]);
// divs[0].innerText = "new unique vale 1"


//getAttribute

let div = document.querySelector("div");
console.log(div);

let id = div.getAttribute("id")
console.log(id);


let name = div.getAttribute("name")
console.log(name);


let para = document.querySelector("p");
console.log(para.getAttribute("class"));

let paraa = document.querySelector("p")
console.log(paraa);

//SetAttribute

let cls = para.setAttribute("class","newclass")
console.log(cls); 


//node.style 

let divv= document.querySelector("div");
div.style.backgroundColor = "yellow";
// div.style.visibility = "hidden";
div.style.fontSize = "26px";


// insert element

let newBtn = document.createElement("button");
newBtn.innerText = "click me!!";
console.log(newBtn);


// let finaldiv = document.querySelector("div");
// div.append(newBtn);

// let finaldiv = document.querySelector("div");
// div.prepend(newBtn);

let finaldiv = document.querySelector("div");
div.before(newBtn);

// let finaldiv = document.querySelector("div");
// div.after(newBtn);



let newHeading = document.createElement("h1");
newHeading.innerText = "this new heading";

document.querySelector("body").prepend(newHeading);


// let paras = document.querySelector("p")
// para.remove();

// newHeading.remove();

//practice qs

let pracBtn = document.createElement("button")
pracBtn.innerText = "press me!!"
console.log(pracBtn);

pracBtn.style.backgroundColor = "red";
pracBtn.style.color = "white";

document.querySelector("body").prepend(pracBtn);


//practice qs 1
let button = document.createElement("button");
let input = document.createElement("input");
button.innerText = "click btn";

document.querySelector("body").append(input);
document.querySelector("body").append(button);

//practice qs 2
input.setAttribute("placeholder","username");
button.setAttribute("id","btn")

//practice qs 3
let btn = document.querySelector("#btn");
btn.style.backgroundColor = "blue";
btn.style.color = "white";

//practice qs 4

let h1 = document.createElement("h1");
h1.innerHTML = "<u>Dom practice</u>";

document.querySelector("body").append(h1);

let p = document.createElement("p");
p.innerText = "delta practice";
p,innerHTML = "<b>delta</b>practice from youtube";

document.querySelector("body").append(p)

//practice

let paragraph = document.createElement('p');
p.innerText = "hey I'm red!";
document.querySelector("body").append(p);

paragraph.classList.add("red");


let h3 = document.createElement('h3');
h3.innerText = "hey I'm blue h3!";
document.querySelector("body").append(h3);

h3.classList.add("blue");


// let pracdiv = document.createElement("div");
// let prh1 = document.createElement("h1");
// let para2 = document.createElement("p");

// prh1.innerText = "this is div";
// para2.innerText = "ME TOO!";

// div.append(prh1);
// div.append(para2);
// div.classList.add("box");
// document.querySelector("body").append(div);