// pratice qs 1

function is_string(input) {
    if(typeof input === "string") {
        return true;
    }
    else{
        return false;
    }
}
// console.log(is_string('w3school'));
console.log(is_string([1,2,0,4]));

// pratice qs 2

function is_Blank(str) {
    if(typeof str == 'undefined') {
        return "string is blank";
    } 
    if (str.trim() == '') {
        return "string is blank";
    }
    return "string is not blank";
}
console.log(is_Blank(''));
console.log(is_Blank('abc'));

// pratice qs 3

function string_to_array(name) {
    return name.split(" ");
}
console.log(string_to_array("Rohan Patel"));
console.log(string_to_array("Robin Singh"));


// pratice qs 4

function chartext(name, length) {
    // return name.slice(0,4) // first type
    return name.slice(0, length)

}
console.log(chartext("Robin Singh",4)); // first type

// pratice qs 5

function abbrev_name(str) {
    let name = str.split(" ");
    if(name.length> 1) {
        return (name[0] + " " + name[1].charAt(0) + ".");
    // return str.slice(0,7 + ".");
    }
};

console.log(abbrev_name("Robin Singh"));

// pratice qs 6

function protect_email (email) {
    return email.slice(0,5) + "..." + "@" + "example.com";
}
console.log(protect_email("robin_singh@example.com"));


// pratice qs 7

// let = my_name = "-";
// let s =  `"robing${my_name}singh${my_name}from${my_name}usa"`;
// console.log(s);

function parameterize(str1) {
    return str1.trim().toLowerCase().replace(/ /g, "-");  // space change kari ne undersocer moke che
}
console.log(parameterize("Robin Singh From USA"));


// pratice qs 8

function capitalize() {
    let string = "js string exercises";
    console.log(string[0].toUpperCase() + string.slice(1));  
}
capitalize();

//pratice qs 9 

function capitalized (word) {
    let str = word.split(" ");
    for(let i = 0; i< str.length; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substring(1);
    }
    return str.join(" ");
}
console.log(capitalized("i love javascript"));


// pratice qs 10

function swapcase() {
    let  word = "AaBbc";
    console.log(word.toUpperCase());
    // console.log(word.toLowerCase());
}
swapcase();

// pratice qs 13

function repeatText() {
    let repetext = "ha!";
    console.log(repetext.repeat(5));
}

repeatText();

// pratice qs 21
function repeat_String() {
    let repetext = "a";
    console.log(repetext.repeat(40));
}

repeat_String();

//pratice qs 23 

function strip(str) {
    return str.trim();
}

console.log(strip('w3school '));
console.log(strip(' w3school '));
console.log(strip(' w3school'));

//pratice qs 25;

// Convert string to array ==> split('')
//Sort array ==> sort()
//Convert back array to string ==> join('')

function alphabetize(str) {  
    return str.split('').sort().join('');
}

console.log(alphabetize("United States"));

//pratice qs 30
function string_endsWith(str1,str2 ) {
    if(str1.endsWith(str2)) {
        return true 
    }
    else(str1 == '')
        return false 
};

console.log(string_endsWith('JS PHP PYTHON','PYTHON'));
console.log(string_endsWith('JS PHP PYTHON','Php'));


//pratice qs 34
function titleCase (titlesentence) {
    let str = titlesentence.split(" ");
    for(let i = 0; i< str.length; i++) {
        str[i] = str[i][0].toUpperCase()+str[i].substring(1);
    }
    return str.join(" ");
}
console.log(titleCase('PHP exercises. python exercises'));

//pratice qs 39

function uncapitalize(str1) {
   return str1.charAt(0).toLowerCase() + str1.slice(1);
}

console.log(uncapitalize('Js string exercises'));


//pratice qs 40

function uncapitalized (sentence) {
    let str = sentence.split(" ");
    for(let i =0; i< str.length; i++) {
        str[i] = str[i][0].toLowerCase() + str[i].substring(1);
    }
    return str.join(" ");
}
console.log(uncapitalized("Js String Exercises"));

//pratice qs 41
function capitalizeWord (str) {
    return str.toUpperCase();
}

console.log(capitalizeWord('js string exercises'));

//pratice qs 42
function capitalizeWord (str) {
    return str.toLowerCase();
}

console.log(capitalizeWord('HELLO NAMASTE JAVASCRIPT'));

//pratice qs 43

function isUppercase(str,index) {
    if(str.charAt(index).toUpperCase() == str.charAt(index)) {
        return true;
    } else{
        return false;
    }
}
console.log(isUppercase('Js STRINg ExERCISES', 1));

//pratice qs 44

function isLowercase(str,index) {
    if(str.charAt(index).toLowerCase() == str.charAt(index)) {
        return true;
    } else{
        return false;
    }
}
console.log(isLowercase('Js STRINg ExERCISES', 0));

//pratice qs 46
function startsWith() {
    let firstword = "latest guys";
    console.log(firstword.startsWith("latest"));
}
startsWith() 

//pratice qs 47
function endswith() {
    let lastword = "hello world";
    console.log(lastword.endsWith("world"));
}
endswith();

//pratice qs 60
function reversestring(str) {
    return str.split('').reverse().join('');
}
console.log(reversestring("hello world"));
console.log(reversestring("JavaScript Exercises"));
console.log(reversestring("abcd"));




























// pratice qs 14

// function insert(str, substring , pos) {
//     if(typeof pos == "undefined"){
//         pos = 0
//     }
//     if(typeof substring == "undefined") {
//         substring = ""
//     }
    
//     return str.substring(0,pos) + substring + str.substring(pos);
// }

// console.log(insert("we are doing some exercises"));
// console.log(insert("we are doing some exercises","javascript "));



