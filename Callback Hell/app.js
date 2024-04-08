// callbacks nesting => callback hell

const heading = document.querySelector("h1");

// option 1 with callback method

// function changeColor(color, delay, nextColorchange)  {
//     setTimeout(() => {
//         heading.style.color = color;
//         if(nextColorchange) nextColorchange();
//     }, delay);

// }

// changeColor("red", 1000, () => {
//     changeColor("blue", 1000, () => {
//         changeColor("yellow", 1000, () => {
//             changeColor("green", 1000 ,() => {
//                 changeColor("orange",1000);
//             });
//         });
//     }); 
// });


// option no 2 with using promises

function changeColor(color, delay)  {
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            heading.style.color = color;
            resolve("color changed")
        }, delay);
    });
}

changeColor("red" , 1000)
.then(() => {
    console.log("red color was printed")
    return changeColor("orange" , 1000)
})
.then(() =>{
    console.log("orange was printed")
    return changeColor("yellow" , 1000)
})
.then(() => {
    console.log("yellow color was printed")
    return changeColor("blue" , 1000)
})
.then(() => {
    console.log("blue color was printed")
})

// promises


// function savetoDb(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) +1; 
//     if(internetSpeed > 4){
//         success()
//     }else{
//         failure()
//     }
// }

// option 1 create with callback hell

// savetoDb( 
//     "rohan patel",
//     () => {
//     console.log("success: your data was saved");
//     savetoDb(
//         "hello world",
//         () => {
//             console.log("sucess2 : data2 saved") 
//             savetoDb(
//                 "Patel Rohan",
//                 () => {
//                     console.log("sucess3 : data3 saved");
//                 },
//                 () => {
//                     console.log("failure3 :  weak3 connection ");
//                 }
//             );
//         }, 
//         () => {
//             console.log("failure2 :  weak2 connection ")
//         });
//     },
//     () => {
//         console.log("failure: weak connection. data was not saved ")
//     }
// )


function savetoDb(data) {
    return new Promise((resolve , reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) +1; 
        if(internetSpeed > 4){
            resolve("success: your data was saved");
        }else{
            reject("failure: weak connection. data was not saved");
        }
    });
}

// then and catch method in promises.

savetoDb("rohan patel")

.then(() => {
    console.log("promise was resolved");
})
.catch(() => {
    console.log("promise was rejected");
}) 


// option 2 create with promise & then and catch method.
// promise chaining  

savetoDb("don ka bacha ")

.then(() => {
    console.log("data1 saved");
    return savetoDb("hello world");
})

.then(() => {
    console.log("data2 saved");
    return savetoDb("rohan patel");
})

.then(() => {
    console.log("data3 saved");
})

.catch(() => {
    console.log("promise was rejected");
});

//promise with arrgument jeh aapne information aape kem promise rejected athva give final result

savetoDb("don ka bacha ")

.then((result) => {
    console.log("data1 saved");
    console.log("result of promise:" , result)
    return savetoDb("hello world");
})

.then((result) => {
    console.log("data2 saved");
    console.log("result of promise:" , result)
    return savetoDb("rohan patel");
})

.then((result) => {
    console.log("result of promise:" , result)
    console.log("data3 saved");
})

.catch((error) => {
    console.log("promise was rejected");
    console.log("error of promise:", error)
});

