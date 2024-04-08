const image = document.querySelector('img')
const button = document.querySelector('button')


// Used XMLHttpRequest for old version 

// button.addEventListener('click', () => {
//     const xhr = new XMLHttpRequest()

//     xhr.responseType = 'json'

//     console.log(xhr);

//     xhr.addEventListener('load' , () => {
//         image.src = xhr.response.message
//         console.log(xhr);
//     })

//     xhr.open('GET' , 'https://dog.ceo/api/breeds/image/random')
//     xhr.send()
// })



// Used fetch for new version 

button.addEventListener('click', (e) => {
  
  fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then((json) => {
      image.src = json.message
    })
})

let url = "https://dog.ceo/api/breeds/image/random"

// fetch(url)
// .then((res) => {
//   console.log(res);
//   return res.json();
// }).then((data) => {
//   console.log(data)
// })
// .catch((err) => {
//   console.log("ERROR - " , err);
// });

async function getImage() {
  try {
    let res = await fetch(url);
    let data = await res.json()
    console.log(data);

    let res2 = await fetch(url);
    let data2 = await res2.json()
    console.log(data2);
  } catch (error) {
    console.log("ERROR" , error)
  }
  console.log("bye")
}


