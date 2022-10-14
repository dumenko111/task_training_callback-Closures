//проста передача колбеку в іншу ф=цію
// const fna = function (message, callback) {
//     console.log(message)
//     callback(100)
// }

// const fnb = function (num) {
//     console.log('Це виклик ф-ції fnb', num)
// }

// fna('sdfsf', fnb)
//-----------------------------------------------------------------
//
const doMath = function (a, b, callback) {
    return console.log(`Результат ${a} дія ${b}:`, callback(a, b))
}

const add = (a, b) => a + b
const mult = (a, b) => a * b
const sub = (a, b) => a - b

doMath(2, 2, add)
doMath(2, 3, mult)
doMath(10, 3, sub)
doMath(10, 5, function(a,b) {return a/b})