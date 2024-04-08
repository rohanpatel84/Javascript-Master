const nameElement = document.querySelector('.name-tag')
const nameInput = document.querySelector('.name')
const ageElement = document.querySelector('.age-tag')
const ageInput = document.querySelector('.age')
const cityElement = document.querySelector('.city-tag')
const cityInput = document.querySelector('.city')


// nameElement.innerText = localStorage.myName  // first option
// nameElement.innerText = localStorage.getItem('myName')

// nameInput.addEventListener('input', (e) => {
//     // localStorage.myName = e.target.value    // first option
//     localStorage.setItem('myName', e.target.value);
//     nameElement.innerText = localStorage.getItem('myName')
// })


// ageElement.innerText = localStorage.getItem('myAge')
// ageInput.addEventListener('input', (e) => {
//     localStorage.setItem('myAge', e.target.value);
//     ageElement.innerText = localStorage.getItem('myAge')
// })

// cityElement.innerText = localStorage.getItem('myCity')
// cityInput.addEventListener('input', (e) => {
//     localStorage.setItem('myCity', e.target.value);
//     cityElement.innerText = localStorage.getItem('myCity')
// })

const myData = JSON.parse(localStorage.getItem('myData')) || {}

if(myData.name) {
    nameElement.innerText = myData.name
}

if(myData.age) {
    ageElement.innerText = myData.age
}

if(myData.city) {
    cityElement.innerText = myData.city
}

nameInput.addEventListener('input' , (e) => {
    myData.name = e.target.value
    localStorage.setItem('myData' , JSON.stringify(myData))
    nameElement.innerText = e.target.value
})

ageInput.addEventListener('input' , (e) => {
    myData.age = e.target.value
    localStorage.setItem('myData' , JSON.stringify(myData))
    ageElement.innerText = e.target.value
})

cityInput.addEventListener('input' , (e) => {
    myData.city = e.target.value
    localStorage.setItem('myData' , JSON.stringify(myData))
    cityElement.innerText = e.target.value
})


