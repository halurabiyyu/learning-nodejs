// import -> require
// const {coffeeStok, isCoffeeMachineReady} = require('./state');


const makeCoffe = (type, miligrams) => {
    if (coffeeStok[type] >= miligrams) {
        console.log('Kopi berhasil dibuat!');
    }else{
        console.log("Biji Kopi habis!");
    }
}

// makeCoffe("robusta", 80);
// console.log(Stok);
// console.log(isCoffeeMachineReady);


//ES6 Moduling
// import Stok from "./state.js";
import {coffeeStok, isCoffeeMachineReady } from "./state.js";
const displayStok = Stok =>{
    for (const type in Stok) {
        console.log(type);   
    }
}
displayStok(coffeeStok);
console.log(isCoffeeMachineReady);
