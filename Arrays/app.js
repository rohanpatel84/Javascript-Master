//array // array is mutable

let students = ["rohan", "raj", "dhruv"];
console.log(students);

let number = [2,4,6,8];
console.log(number);

let info = ["rohan", 23 , 5.11];  //mixed arrays
console.log(info); 

let empty = []; //empty arrays
console.log(empty);


//array mrthod

//push method    //add kare ending par 
let cars = ["bmw", "audi","xuv"];
cars.push("toyota","lambo","maruti");
console.log(cars);

//pop method   //delete kare ending par and return kare che
let newCars = ["bmw", "audi","xuv"];
cars.pop();
console.log(cars);

//unshift method // add kare starting par
let bike = ["activa","hyabusa","kawasaki","bmw"];
// bike.unshift("herohonda");
console.log(bike);

//shift method  // delete kare starting par and return kare che
let newBike = ["activa","hyabusa","kawasaki","bmw"];
newBike.shift();
console.log(newBike);


//pratice qs

let months = ["january", "july", "march", "august"];
console.log(months); 
months.shift();
months.shift();
months.unshift("july");
months.unshift("june");
console.log(months); 

//index of and includes

let color = ["red","blue","green"];
console.log(color.indexOf("blue"));
console.log(color.indexOf("yellow"));
console.log(color.includes("blue"));  //true
console.log(color.includes("yellow")); //false kem keh yellow not defind in arr

//concat method   // two arrays ne join kare che

let finalCars = ["bmw", "audi","xuv"];
let finalBike = ["activa","hyabusa","kawasaki","bmw"];
// let finalresult = finalCars + finalBike;
let finalresult = finalCars.concat(finalBike);
console.log(finalresult);


//reverse method  // text ne end thi chalu kare che.

let primarycolor = ["red","blue","green","yellow","pink"];
primarycolor.reverse();
console.log(primarycolor);

//slice method // original arrays ma change nai karto
let sliceCars = ["bmw","audi","xuv","supra","nisangtr"];
console.log(sliceCars.slice(2,4));
console.log(sliceCars.slice(2));
console.log(sliceCars.slice(4));
console.log(sliceCars.slice(10));
console.log(sliceCars.slice(-2));


//splice method // original arrays ma change kare che

let allcolors = ["red","blue","green","white","yellow","pink"];
// allcolors.splice(2);
// allcolors.splice(0,1);
allcolors.splice(1,0,"lightblue");
// allcolors.splice(0,0,"grey","black");
console.log(allcolors);

//tostring method  // array ne string ma change kare che.

let marks = ["80","20","45","60","70"];
console.log(marks);
console.log(marks.toString());

//sort method  // alphabet na rite set kare che.

let count = ["80","20","45","60","70"];
console.log(count.sort());

let sortcolors = ["red","blue","green","white","yellow","pink"];
console.log(sortcolors.sort());


//pratice qs

let newMonths = ["january", "july", "march", "august"];
console.log(newMonths); 
newMonths.splice(0,2,"july","june");
console.log(newMonths); 

let codinglanguge = ["c","c++","html","javascript","python","c#","sql"];
codinglanguge.reverse();
codinglanguge.indexOf("javascript");
console.log(codinglanguge);


//pratice qs

let game = [["X",null,"O"],[null,"X",null],["O",null,"X"],]
console.log(game);



//final pratice qs

let arr = [7,9,0,-2];
let n = 3;
let ans = arr.slice(0,n);
console.log(ans);

let arr2 = [7,9,0,-2];
let n2 = 3;

let ans2 = arr.slice(arr.length-n);
console.log(ans2);

// let str = prompt("plzz enter a string");
// if(str == 0) {
//     console.log("string is empty");
// }
// else{
//     console.log("string is not empty");
// }

let ans4 = "RohAn PAtEl";
let idx = 4

if(ans4[idx] == ans4[idx].toLowerCase()) {
    console.log("character is lowercase");
}else{
    console.log("character is not lowercase");
}

// let ans5 = prompt("plzz enter a string");
// console.log(`real string = ${ans5}`);
// console.log(`string without a space = ${ans5.trim()}`);



let ans6 = ["hello", "55","world", "60"];
let item = "worlds";

if(ans6.indexOf(item) != -1){
    console.log("item is available");
}else{
    console.log("item is not available");
}

//for each method

let arr5 = [10,20,30,40,50]

arr5.forEach( (el) => {   //option 1
    console.log(el);
});

arr5.forEach(function(el) {    //option 2
    console.log(el);
});

//option 3 for object 

let arrforeach1 = [
    {
        name: "rohan",
        marks: 55,
    },
    {
        name: "patel",
        marks: 80,
    },
    {
        name: "rahul",
        marks: 70,
    },
];

arrforeach1.forEach((students) => {
    console.log(students.marks);
});

//map method

let newArr = [5,6,7];
let double = newArr.map((x) => x*2); 
    console.log(double);

let num = [2,4,5]
let double1 = num.map(function(el) {
    console.log(el*2);
    console.log(el*el);
})

//filter method

let newscondArr = ['hello','world','namaste','welcome']
let result = newscondArr.filter((word) => word.length > 6);
console.log(result);

let num1 = [1,2,3,4,5,6,7,8,9,10,12,13] 

let ans1 = num1.filter((el) => {
    return el % 2 == 0;
    // return el % 2 != 0;
    // return el > 5;
    // return el < 5;
})
console.log(ans1);

//every 

let nums = [2,4,6,8,]

let finalans = nums.every((el) => el%2 == 0)
console.log(finalans);

let nums1 = [2,4,6,8,1]

let finalans1 = nums1.every((el) => el%2 == 0)
console.log(finalans1);

let nums2 = [1,3,5]

let finalans2 = nums2.every((el) => el%2 != 0)
console.log(finalans2);

//reduce method

let finalNum = [1,2,3,5,6]
let finalVul = finalNum.reduce((res, el) => res+el);
console.log(finalVul);


//reduce method practice 

let arrMax = [1,5,8,9,6,13]
let maximum = arrMax.reduce((max, el) => {
    if(max < el) {
        return el;
    }else{
        return max;
    }
});

console.log(maximum);


//practice 1
let allNums = [10,20,50,40]

let finalNums = allNums.every((el) => el%10 == 0)
console.log(finalNums);

//practice 2
let arrMin = [1,5,8,9,6,13]
// let minmum = arrMin.reduce((min,el) => {
//     if(min < el) {
//         return min;
//     }else{
//         return el;
//     }
// });
// console.log(minmum);

//practice 3 using function
function getMin() {
    let minmum = arrMin.reduce((min,el) => {
        if(min < el) {
            return min;
        }else{
            return el;
        }
    })   
    return minmum; 
}

console.log(getMin());


//default parameters

function func (a, b = 1) {
    console.log(a+b);
};


func(1,3);  // output 4
func(5);    //if a = 1 ,b   output = nAn
func(4);    //if a, b = 1   output = 5


//spread parameters
function funName () {
    console.log("rohan patel");
    console.log(..."rohan patel");
}
funName(); 

let spreadArr = [1,2,3,4,5]
console.log(...spreadArr);

let mathArr = [2,3,5,6,1,0,8] 
console.log(Math.min(...mathArr));


const data = {
    email: "rp@gmil.com",
    password: "abcd",
};
console.log(data);

const dataCopy = {...data, id:"rohan84patel" , country:"india"};
console.log(dataCopy);



//Rest parameters

function sum(...args) {
    return args.reduce((sum, el) => sum+el);
}

console.log(sum(1,6));


function min(...args) {
    return args.reduce((min,el) => {
        if(min > el) {
            return el;
        }else{
            return min;
        }
    });
}
console.log(min(1,2,3,4));

//destructuring

let names = ["peter","steve","clay","tony"]
let [winner, secondwinner] = names;
console.log(winner,secondwinner);

//destructuring object

const student = {
    name: "rohan",
    age: 23,
    username: "rohan84patel",
    password: "1232",
    class: 10,
    subject: ["hindi","eng","maths","science"]
};

let { username: user, password: secret, city = "mumbai" } = student;



//final practice qs

let numb = [1,2,5,0,10,-5]
console.log(numb.map((numb) => numb + 5));

let name = ["peter","steve","clay","tony"]
console.log(name.map((name) => name.toUpperCase()));

let merageobj = (obj1, obj2) => ({...obj1, ...obj2});
console.log(merageobj({a: 1 , b: 2 }, {c:3, d:5}));


