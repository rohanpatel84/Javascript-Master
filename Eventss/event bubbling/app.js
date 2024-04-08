const green = document.querySelector('.green');
const pink = document.querySelector('.pink');
const blue = document.querySelector('.blue');


// bubbling means data under thie bahar taraf jay.
// capturing means data bahar thie under taraf aave.

window.addEventListener('click', (e) => {
    console.log("6. window Events Listener");
},true);

document.addEventListener('click', (e) => {
    console.log("5. document Events Listener");
},true);

document.body.addEventListener('click', (e) => {
    console.log("4. document body Events Listener");
},true);

green.addEventListener('click', (e) => {
    console.log("3. just click on green color");
},true);

pink.addEventListener('click', (e) => {
    console.log("2. just click on pink color");
},true);

blue.addEventListener('click', (e) => {
    e.stopImmediatePropagation();
    console.log("1. just click on blue color");
}, {once: true} );  // once true means ek j var run thay.