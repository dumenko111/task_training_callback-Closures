//округлятор

const floatingPoint = 3.4916651; // округляє до меншого значення
const someInt = Math.round(floatingPoint)
const withDecimals = Number(floatingPoint.toFixed(2))

console.log(someInt)

const rounder = function (number, places) {
    return Number(number.toFixed(places))
}

// console.log(rounder(8.4684, 2))

// робимо замиканя places

const rounder2 = function (places) {
    return function (number) {
        return Number(number.toFixed(places))
    }
}

const r1 = rounder2(2)
const r2 = rounder2(3)

console.log(r1(5.5454848))
console.log(r2(8.061460))