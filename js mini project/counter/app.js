const count = document.querySelector('.count')
const btnMins = document.querySelector(".minus-btn")
const btnPlus = document.querySelector(".plus-btn")
const reset = document.querySelector(".reset-btn")
const changeBy = document.querySelector(".changeBy")


btnMins.addEventListener('click' , (e) => {
    const countValue = parseInt(count.innerText)
    const changeByValue = parseInt(changeBy.value)
    count.innerText = countValue - changeByValue
})

btnPlus.addEventListener('click' , (e) => {
   const countValue = parseInt(count.innerText)
   const changeByValue = parseInt(changeBy.value)
    count.innerText = countValue + changeByValue
})

reset.addEventListener('click' , () => {
    count.innerText = 0
})

