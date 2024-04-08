//string method

//trim method   // ues for remove extra space in text

let msg = " hello ";
console.log(msg.trim());

// let password = prompt("enter password");
// console.log(password.trim());

// toUpperCase and toLowerCase  // use for capital and small letter

let firstName = "rohan patel";
console.log(firstName.toUpperCase());

let lastName = "rohan patel";
console.log(lastName.toLowerCase());

//indexOf method  // use for serching index kaya rank par che

let newMsg = "llikecoding";
console.log(newMsg.indexOf("like"));
console.log(newMsg.indexOf("coding"));
console.log(newMsg.indexOf("rohan"));

// method Chaining  // ek karta vadhre method find karva thay che

let text = "    hello    ";
console.log(text.toUpperCase().trim());

//slice method  // text ni position kya che yeh find kari ne return kare che 

let newText = "llikecoding";
console.log(newText.slice(5));
console.log(newText.slice(1,5));
console.log(newText.slice(0));
console.log(newText.slice(-1)); //11-1

//substring method  // text ni position kya che yeh find kari ne return kare che //substring -> slice jevuj che

let newText1 = "llovebike";
console.log(newText1.substring(1,5));


//Replace method  // text ne change kare che

let str = "ilovecoding";
console.log(str.replace("love","like"));
console.log(str.replace("o","x"));

//Repeat method  // text ni number of copies banve che.

let fruit = "Mango";
console.log(fruit.repeat(4));


// pratice qs

let newStr = "help!";
console.log(newStr.trim().toUpperCase());

let newName = "apdicompany";
console.log(newName.slice(4,11));
console.log(newName.indexOf("di"));
console.log(newName.replace("apdi","our"));
console.log(newName.slice(4).replace("m","t").replace("p","t"))

//Concat method // two string ek sathe jode 

let str1 = "rohan";
let str2 = "patel";

let result = str1.concat(str2);
// let result = str1 + str2;
// let result = "i am lerning coding from " + str1 + str2;
console.log(result);

//charAt method   //charAt use for text kaya number par che yeh check kare che

let str3 = "rohan";
console.log(str3.charAt(4));


// pratice qs

// let fullName = prompt("enter your fullname without space");
// let userName = "@" + "fullName" + fullName.length;
// console.log(userName);


//charCodeAt method

let text1 = "HELLO WORLD";
console.log(text1.charCodeAt(5));


