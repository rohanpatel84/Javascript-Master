const h1 = document.querySelector('h1')
const card = document.querySelector('.card')
const container = document.querySelector('.container')
const input = document.querySelector('input')

let count = 0

// card.addEventListener('mousedown', (e) => {
//     console.log(e);
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// });

// card.addEventListener('mouseup', (e) => {
//     console.log(e);
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// });


// card.addEventListener('mouseenter', (e) => {
//     console.log(e);
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// });

// card.addEventListener('mouseleave', (e) => {
//     console.log(e);
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// });

// card.addEventListener('mousemove', (e) => {
//     console.log(e);
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// });



// card.addEventListener('mouseover', (e) => {
//     console.log(e);
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// });


// card.addEventListener('dblclick', (e) => {
//     console.log(e);
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// });


// card.addEventListener('wheel', (e) => {
//     console.log(e);
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// });

// card.addEventListener('touchstart', (e) => {
//     console.log(e);
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// });

// card.addEventListener('pointermove', (e) => {
//     console.log(e);
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// });


// h1.addEventListener('drag', (e) => {
//     console.log(e);
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// });


card.addEventListener('click', () => {
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
});


setTimeout(() => {
    input.focus()
    console.log("input focused")
}, 1000);

setTimeout(() => {
    input.blur()
    console.log("input blured")
}, 3000);

// setInterval(() => {
//     card.click()
// }, 100)
