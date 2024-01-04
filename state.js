// export module
const coffeeStok = {
    arabica: 100,
    robusta: 150,
    liberica: 200
};
const isCoffeeMachineReady = true;

//commonJs
// module.exports = coffeeStok;
// module.exports = {coffeeStok, isCoffeeMachineReady};


// ES6
export  {coffeeStok, isCoffeeMachineReady};
