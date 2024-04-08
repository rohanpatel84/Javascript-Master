// Asynchronous line by line run nai thato and not use main thrade pn yeh browser ne share kare che 
// synchronous line by line code run thay che and  use kar main thrade


const image = document.querySelector('img')
const button = document.querySelector('button')

button.addEventListener('click', () => {
  const xhr = new XMLHttpRequest()

  console.log(xhr);

  // xhr.responseType = 'json'

  xhr.addEventListener('load', () => {
    // image.src = JSON.parse(xhr.response).message
    console.log(xhr);
  })

  xhr.open('GET', 'https://dummyjson.com/products', false)
  xhr.send()
})

// asychronous function 

// async keyword 

// async function greet() {
//   throw "some random error"
//   return "hello";
// }

// greet()
// .then((result) => {
//   console.log("promise was resolved");
//   console.log("result was:" ,  result);
// })
// .catch((error) => {
//   console.log("promise was rejected:" , error);
// });

// let demo = async () => {
//   return 4
// }


// await keyword 

// const heading = document.querySelector("h1");

// function changeColor(color, delay)  {
//   return new Promise((resolve , reject) => {
//       setTimeout(() => {
//           heading.style.color = color;
//           console.log(`color changed to ${color}!`);
//           resolve("color changed");
//       }, delay);
//   });
// }

// async function colorDemo() {
//   await changeColor('red' , 1000);
//   await changeColor('blue' , 1000);
//   await changeColor('lightblue' , 1000);
//   await changeColor('yellow' , 1000);
//   await changeColor('green' , 1000);
//   changeColor('brown' , 1000);
// }
// colorDemo();


// handling rejections

const heading = document.querySelector("h1");

function changeColor(color, delay)  {
  return new Promise((resolve , reject) => {
      setTimeout(() => {

        let num = Math.floor(Math.random() * 10 ) + 1;
        if(num > 3 ) {
          reject("promise rejected");
        }


        heading.style.color = color;
        console.log(`color changed to ${color}!`);
        resolve("color changed");
      }, delay);
  });
}


async function colorDemo() {
  try {
    await changeColor('red' , 1000);
    await changeColor('blue' , 1000);
    await changeColor('lightblue' , 1000);
    await changeColor('yellow' , 1000);
    await changeColor('green' , 1000);
    await changeColor('brown' , 1000);
  } catch(err) {
    console.log("error caught");
    console.log(err);
  }

  let a = 5
  console.log(a)
  console.log("new number = " , a+3);
}
colorDemo();


